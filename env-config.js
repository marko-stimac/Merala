const prod = process.env.NODE_ENV === 'production';

// Production (on Heroku you should also set this variables)
if(prod) {
	module.exports = {
		'process.env.APIURL': 'https://wordpress.org/news/wp-json/wp/v2',
		'process.env.SITEURL': 'https://test123asddfsf.herokuapp.com'
	};
}
// Development
else {
	module.exports = {
		'process.env.APIURL': 'http://localhost/wp-test/wp-json/wp/v2',
		'process.env.SITEURL': 'http://localhost:3000'
	};
}
