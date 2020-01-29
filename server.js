const cacheableResponse = require('cacheable-response');
const express = require('express');
const next = require('next');
const nodemailer = require('nodemailer');
const cors = require('cors');

const server = express();
const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

server.use(cors());
server.use(express.json());

const ssrCache = cacheableResponse({
	ttl: 1000 * 60 * 60, // 1hour
	//ttl: 1000, // 1 sec?
	get: async ({ req, res, pagePath, queryParams }) => ({
		data: await app.renderToHTML(req, res, pagePath, queryParams)
	}),
	send: ({ data, res }) => res.send(data)
});

app.prepare().then(() => {

	// Cache homepage
	server.get('/', (req, res) => ssrCache({ req, res, pagePath: '/' }));

	// Regular pages
	server.get('/:slug', (req, res) => {
		let pagePath = '/';
		let queryParams = { slug: req.params.slug };
		return ssrCache({ req, res, pagePath, queryParams });
	});

	// Blog posts
	server.get('/blog/:slug', (req, res) => {
		let pagePath = '/blog';
		let queryParams = { slug: req.params.slug };
		return ssrCache({ req, res, pagePath, queryParams });
	});

	// Blog pagination 
	server.get('/blog/:id', (req, res) => {
		let pagePath = '/blog';
		let queryParams = { id: req.params.id };
		return ssrCache({ req, res, pagePath, queryParams });
	});
		
	// Route for listening for sending mail
	server.post('/send-email', (req, res, next) => {

		let transporter = nodemailer.createTransport({
			host: 'smtp.gmail.com',
			port: 587,
			secure: false,
			requireTLS: true,
			auth: {
				user: 'youremail@gmail.com', 
				pass: 'wsfmerrfswiqhdgo'  
			}
		});
		
		transporter.verify((error, success) => {
			if (error) {
				console.log(error);
			} else {
				console.log('Server is ready to take messages');
			}
		});

		var name = req.body.Name;
		var email = req.body.Email;
		var message = req.body.Message;
		var content = `name: ${name} \nemail: ${email} \nmessage: ${message} `;

		var mail = {
			from: 'youremail@gmail.com',
			to: 'youremail@gmail.com', 
			subject: 'Upit preko kontakt forme',
			text: content,
			replyTo: email
		};

		transporter.sendMail(mail, (err, data) => {
			if (err) {
				res.json({
					status: 'fail'
				});
			} else {
				res.json({
					status: 'success'
				});
			}
		});
	});

	server.get('*', (req, res) => handle(req, res));

	server.listen(port, err => {
		if (err) throw err;
		console.log(`> Ready on http://localhost:${port}`);
	});
});
