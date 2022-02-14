const express = require('express')
const nunjucks = require('nunjucks')
const session = require(`express-session`)
const Memorystore = require(`memorystore`)(session)

// const list = require('./boardData')
// const data = list.data

const router = require(`./routes`)
const app = express()


app.set('view engine', 'html')
nunjucks.configure('views', {
    express: app,
})


const maxAge = 60 * 60 * 1000
const sessionObj = {
    secret: `1234`,
    unsave: false,
    savaUninitilized: true,
    store: new Memorystore({ checkPeriod: true }),
    cookie: {
        maxAge,
    }
}


app.use(session(sessionObj))
app.use(express.urlencoded({ extended: true, }))
app.use(router)


app.listen(3001, () => {
    console.log('server start')
})