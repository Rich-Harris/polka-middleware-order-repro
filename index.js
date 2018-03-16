const serve = require('serve-static');

require(process.argv[2] || 'polka')()
	.use('/images', serve('assets'))
	.get('/', (req, res) => {
		res.writeHead(200, {
			'Content-Type': 'text/html'
		});
		res.end('<img src="/images/potato.jpg">');
	})
	.use((req, res) => {
		res.writeHead(404);
		res.end('Not found');
	})
	.listen(3000);