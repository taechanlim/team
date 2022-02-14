const express = require(`express`)
const router = express.Router()
const user = require('../../models/user/user')
const alertmove = require(`../../util/alertMove`)

router.get(`/login`, (req, res) => {
    res.render(`user/login`)
})

router.post(`/login`, (req, res) => {
    let { userId, userPw } = req.body
    console.log(userId, userPw)
    console.log(user)
    let [item] = user.filter(v => v.userId === userId && v.userPw === userPw)
    console.log(item)
    if (item != undefined) {
        console.log(`login 진행중`)
        req.session.user = { ...item }
        res.send(alertmove(`/`, `로그인이 완료되었습니다!`))
    }
    res.send(alertmove(`/user/login`, `로그인이 실패되었습니다!`))
})

router.post(`/logout`, (req, res) => {
    req.session.destroy(() => {
        req.session
    })
    res.send(alertmove(`/`, `로그아웃이 완료되었습니다!`))
})

router.get(`/profile`, (req, res) => {
    res.render(`/../views/user/profile`)
})


module.exports = router