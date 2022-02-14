const express = require(`express`)
const router = express.Router()
const user = require(`../../models/data_user`)
const {alertmove} = require(`../../util/alertMove`)

router.get(`/login`,(req,res)=>{
    res.render(`/../views/user/login`)
})

router.post(`/login`,(req,res)=>{
    let {userId, userPw} = req.body
    [item] = user.filter(v=>{v.userId===userId && v.userPw===userPw})
    if(item != undefined){
        req.session.user = {...item}
    }
})

router.post(`/logout`,(req,res)=>{
    req.session.destroy(()=>{
        req.session
    })
    res.send(alertmove(`/`,`로그아웃이 완료되었습니다!`))
})

router.get(`/profile`,(req,res)=>{
    res.render(`/../views/user/profile`)
})


module.exports = router