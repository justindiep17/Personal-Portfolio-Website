const express = require('express')
const nodemailer = require('nodemailer')
const ejs = require('ejs')
const path = require('path')

const app = express()
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'))
app.use(express.static(path.join(__dirname, '/public')))
app.use(express.urlencoded({ extended: true }))

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.SITE_EMAIL,
    pass: process.env.EMAIL_PASSWORD
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
        img_path: rootPath + "roll_it.jpg",
        name: "Simple Die",
        description: "Cross platform mobile app that provides a simple yet elegant way to roll dies digitally.",
        link: "#",
        attributes: ["Dart", "Flutter"]
      },
      {
        img_path: rootPath + "the_hearth.png",
        name: "The Hearth",
        description: "Fully functional blog website about Blizzard's" + ' popular video game Hearthstone',
        link: "#",
        attributes: ["Python", "Flask", "HTML/CSS", "JavaScript"]
      },
      {
        img_path: rootPath + "busy.png",
        name: "IsItBusy?",
        description: "Web app that checks the busyness of gorcery stores based on crowd sourced data.",
        link: "#",
        attributes: ["Python", "Flask", "HTML/CSS", "MongoDB",]
      },
    ]
  })
})


app.listen(process.env.PORT || 5000, () => {
})

