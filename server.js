const express = require('express')
const nunjucks = require('nunjucks')
const Meomorystore = require(`memorystore`)(session)
const session = require(`express-session`)

const list = require('./boardData')
const data = list.data

const router = require(`./routes`)
const app = express()


app.set('view engine', 'html')
nunjucks.configure('views', {
    express: app,
})


const maxAge = 60*60*1000
const sessionObj = {
    secret:`1234`,
    unsave: false,
    savaUninitilized:true,
    store : new Meomorystore({checkPeriod:true}),
    cookie : {
        maxAge,
    }
}


app.use(session(sessionObj))
app.use(router)
app.use(express.urlencoded({ extended: true, }))

app.listen(3000, () => {
    console.log('server start')
})