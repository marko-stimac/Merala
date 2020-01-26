import Head from 'next/head';

const HTMLHead = props => {
	const { metaTitle, metaDescription } = props;
    return (
        <Head>
            <title>{metaTitle}</title>
            <meta name="description" content={metaDescription} />
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<meta name="robots" content="noindex, nofollow" />
			<meta property="og:title" content={metaTitle} />
			<meta property="og:type" content="article" />
		{/* 	<meta property="og:url" content={process.env.HOSTNAME + url} /> */}
			<link rel="manifest" href="/static/manifest/manifest.json" />
			<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"/>
        </Head>
    );
};

export default HTMLHead;