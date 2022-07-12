const express=require('express')
const newRouter=express.Router()
const axios=require('axios')

newRouter.route('/').get(async(req,res)=>{
  try {
    const newsApi=await axios.get('https://raddy.dev/wp-json/wp/v2/posts/')
   
    res.render('news',{articl:newsApi.data})
  } catch (error) {
    if(error.response){
      console.log(error.response.data)
      console.log(error.response.status)
      console.log(error.response.headers)
    } else if(error.requiest){
      console.log(error.requiest)
    } else{
      console.log('Error',error.message)
    }
  }
})

module.exports=newRouter