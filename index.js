const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('index', {
    pageTitle: 'ini home'
  })
})

app.get('/about', (req, res) => {
  res.render('about', {
    pageTitle: 'ini about'
  })
})

app.listen(port, () => {
  console.log(`thi app run on port --> ${port}`)
})