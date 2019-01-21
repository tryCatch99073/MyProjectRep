var express = require('express')
var bodyParser = require('body-parser')
var session = require("express-session")
var cookieParser = require('cookie-parser')

var multer  = require('multer');




var user_router = require('./router/user_router')
var stroke_router = require('./router/stroke_router')
var advertise_router = require('./router/advertise_router')
var job_router = require('./router/job_router')
var upload_router = require('./router/upload_router')
var noticy_router = require('./router/noticy_router')
var collect_router = require('./router/collect_router')
var user_info_router = require('./router/user_info_router')
var education_router = require('./router/education_router')
var experience_router = require('./router/experience_router')
var projectexperience_router = require('./router/projectexperience_router')
var skill_router = require('./router/skill_router')
var project_router = require('./router/project_router')
var download_router = require('./router/download_router')
var resume_router = require('./router/resume_router')
var apply_router = require('./router/apply_router')
const app = express()



// 开启静态资源
app.use('/public/',express.static('./public/')) // 加载静态资源
app.use(multer({ dest: '/public/heads/'}).array('file'));


//配置body-parser  来取得请求体参数
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())



app.use(cookieParser());//这里要加()
app.use(session({
    secret:'spflinux',
    name:'adminapp',
    cookie:{maxAge:60*1000*30},
    resave: true,
    saveUninitialized: true
}));

app.engine('html', require('express-art-template'))


app.all("*",function(req,res,next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    if(req.method=="OPTIONS") res.send(200);/*让options请求快速返回*/
    else  next();
})

app.use(user_router)
app.use(advertise_router)
app.use(stroke_router)
app.use(job_router)
app.use(upload_router)
app.use(noticy_router)
app.use(collect_router)
app.use(user_info_router)
app.use(education_router)
app.use(experience_router)
app.use(projectexperience_router)
app.use(skill_router)
app.use(project_router)
app.use(download_router)
app.use(resume_router)
app.use(apply_router)

app.listen(3000,() => console.log('Example app listening on port 3000!'))





