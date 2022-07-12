const express=require('express')
const bodyParser=require('body-parser')

const app=express()
const port=5000

// static fayl
app.use(express.static('public'))
app.use('/css',express.static(__dirname+'public/css'))
app.use('/img',express.static(__dirname+'public/img'))
app.use('/js',express.static(__dirname+'public/js'))

// templating engine
app.set('views','./src/views')
app.set('view engine','ejs')


app.use(bodyParser.urlencoded({extended:true}))  //savol
// routes
const newRouter=require('./src/routes/news')
const { urlencoded } = require('body-parser')

app.use('/',newRouter)

app.listen(port,()=>{
  console.log(`Listening to port ${port}`)
})