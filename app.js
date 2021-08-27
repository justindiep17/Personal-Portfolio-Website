const express = require('express')
const path = require('path')

const app = express()
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'))
app.use(express.static(path.join(__dirname, '/public')))
app.use(express.urlencoded({ extended: true }))

// Homepage
app.get('/', (req, res) => {
  res.render('home.ejs')
})

// Contact Page
app.get('/contact', (req, res) => {
  res.render('contact.ejs')
})

app.listen(3000, () => {
  console.log("ON PORT 3000!")
})

