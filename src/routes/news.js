const express=require('express')
const newRouter=express.Router()
const axios=require('axios')


///////// get all

newRouter.route('/').get(async(req,res)=>{
  try {
    const newsApi=await axios.get('https://raddy.dev/wp-json/wp/v2/posts/')
    
    res.render('news',{articl:newsApi.data})
  } catch (error) {
    if(error.response){
      res.render('news',{articl:null})
      console.log(error.response.data)
      console.log(error.response.status)
      console.log(error.response.headers)
    } else if(error.requiest){
      res.render('news',{articl:null})
      console.log(error.requiest)
    } else{
      res.render('news',{articl:null})
      console.log('Error',error.message)
    }
  }
})


////////////// get id 

newRouter.route('/article/:id').get(async(req,res)=>{
  try {
    let articleId=req.params.id
    const newsApi=await axios.get(`https://raddy.dev/wp-json/wp/v2/posts/${articleId}`)
    console.log(newsApi)
    res.render('newsSimple',{article:newsApi.data})
  } catch (error) {
    if(error.response){
      res.render('newsSimple',{article:null})
      console.log(error.response.data)
      console.log(error.response.status)
      console.log(error.response.headers)
    } else if(error.requiest){
      res.render('newsSimple',{article:null})
      console.log(error.requiest)
    } else{
      res.render('newsSimple',{article:null})
      console.log('Error',error.message)
    }
  }
})

/////////// search 
newRouter.route('').post(async(req,res)=>{
  try {
    let search=req.body.search
    const newsApi=await axios.get(`https://raddy.dev/wp-json/wp/v2/posts?search=${search}`)
    console.log(newsApi.data)
    res.render('newsSearch',{articles:newsApi.data})
  } catch (error) {
    if(error.response){
      res.render('newsSearch',{articles:null})
      console.log(error.response.data)
      console.log(error.response.status)
      console.log(error.response.headers)
    } else if(error.requiest){
      res.render('newsSearch',{articles:null})
      console.log(error.requiest)
    } else{
      res.render('newsSearch',{articles:null})
      console.log('Error',error.message)
    }
  }
})


module.exports=newRouter