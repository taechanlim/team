const express = require(`express`)
const router = express.Router()
const router_user = require(`./user`)
const router_board = require(`./board`)
const {alertmove} = require(`../../util/alertMove`)

router.get(`/`,(req,res)=>{
    let session = req.session
    res.render(`../views/index`,{
        session
    })
})


function Auth(req,res,next) {
    let session = req.session
    if(session != undefined){
        res.send(alertmove(`/`,`로그인이 완료되었습니다.`))
        next()
    } else{
        res.send(alertmove(`/login`,`로그인 후 이용해주세요.`))
    }
}

router.use(`/user`,router_user)
// router.use(`/board`,router_board)


module.exports = router