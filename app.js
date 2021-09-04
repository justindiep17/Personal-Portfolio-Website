const express = require('express')
const nodemailer = require('nodemailer')
const ejs = require('ejs')
const path = require('path')
const auth = require('./auth')

const app = express()
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'))
app.use(express.static(path.join(__dirname, '/public')))
app.use(express.urlencoded({ extended: true }))

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: auth.siteEmail,
    pass: auth.emailPassword
  }
})

// Homepage
app.get('/', (req, res) => {
  res.render('home.ejs')
})

// Contact Page
app.get('/contact', (req, res) => {
  res.render('contact.ejs')
})

app.post('/contact', (req, res) => {
  const { name, email, msg } = req.body
  const mailOptions = {
    from: 'onlydill202@gmail.com',
    to: 'justindiep17@gmail.com',
    subject: 'Contact Form Submission',
    text: `Name: ${name}\nEmail:${email}\nMessage:${msg}`
  }
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error)
    } else {
      console.log('Email sent: ' + info.response)
    }
  })
  res.redirect('/')
})

// Projects Page

app.get('/projects', (req, res) => {
  const rootPath = "/imgs/projects/"
  res.render('projects.ejs', {
    projects: [
      {
        img_path: rootPath + "combine_images2.jpg",
        name: "Roll It",
        description: "Cross platform mobile app that provides a simple yet elegant way to roll dies digitally.",
        link: "#",
        attributes: ["Dart", "Flutter"]
      },
      {
        img_path: rootPath + "the_hearth.png",
        name: "The Hearth",
        description: "Blog website about Blizzard's" + ' popular video game Hearthstone',
        link: "#",
        attributes: ["Python", "Flask", "HTML/CSS", "JavaScript"]
      },
    ]
  })
})


app.listen(3000, () => {
  console.log("ON PORT 3000!")
})

