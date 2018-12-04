const express = require('express')
const next = require('next')
const compression = require('compression')
const dev = process.env.NODE_ENV !== 'production'
const PORT = process.env.PORT || 3001
const app = next({dev})
const handle = app.getRequestHandler()

app.prepare()
  .then(() => {
    const server = express()

    if (!dev) {
      server.use(compression()) //gzip
    }

		server.get('/', (req, res) => {
			const actualPage = '/index'
			app.render(req, res, actualPage, {})
		})
		server.get('/search', (req, res) => {
			const actualPage = '/search'
			app.render(req, res, actualPage, {})
		})
		server.get('/detail/:id', (req, res) => {
			const actualPage = '/detail'
			const queryParams = {id: req.params.id}
			app.render(req, res, actualPage, queryParams)
		})

    const optionsPlain = {
      root: __dirname + '/static/',
      headers: {
        'Content-Type': 'text/plain;charset=UTF-8',
      }
    };
    const optionsHtml = {
      root: __dirname + '/static/',
      headers: {
        'Content-Type': 'text/html;charset=UTF-8',
      }
    };
    const optionsXml = {
      root: __dirname + '/static/',
      headers: {
        'Content-Type': 'application/xml;charset=UTF-8',
      }
    };
    server.get('/robots.txt', (req, res) => (
      res.status(200).sendFile('robots.txt', optionsPlain)
    ));
    // server.get('/sitemap.html', (req, res) => (
    //   res.status(200).sendFile('sitemap.html', optionsHtml)
    // ));
    // server.get('/sitemap.xml', (req, res) => (
    //   res.status(200).sendFile('sitemap.xml', optionsXml)
    // ));
    server.get('*', (req, res) => {
      return handle(req, res)
    })
    server.listen(PORT,'0.0.0.0', (err) => {
      if (err) throw err
      console.log(`> Ready on http://localhost:${PORT}`)
    })

  })
  .catch((ex) => {
    console.error(ex.stack)
    process.exit(1)
  })
