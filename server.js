const express = require('express')
const nunjucks = require('nunjucks')
const list = require('./boardData')
const app = express()
const data = list.data
// const router = require('./routes')

app.set('view engine', 'html')
nunjucks.configure('views', {
    express: app,
})

app.get('/', (req, res) => {
    res.render('index')
})


app.use(express.urlencoded({ extended: true, }))

// app.use(router)

app.listen(3000, () => {
    console.log('server start')
})