const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const port = process.env.PORT || 3000
const app = next({ dir: '.', dev })
const handle = app.getRequestHandler()

app.prepare()
.then(() => {
  const server = express()
  server.get('/p/:id', (req, res) => {
    const actualPage = '/tours'
    const queryParams = { title: req.params.id }
    app.render(req, res, actualPage, queryParams)
  })
  
  server.get('/p/:id', (req, res) => {
    return app.render(req, res, '/HabitacionesC', req.query)
  })
  server.get('/p/:id', (req, res) => {
    return app.render(req, res, '/HabitacionesS', req.query)
  })
  server.get('/p/:id', (req, res) => {
    return app.render(req, res, '/HabitacionesE', req.query)
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})