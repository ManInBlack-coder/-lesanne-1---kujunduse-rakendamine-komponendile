const express = require('express')
const app = express()



//Html failide jaoks
const path = require('path')
app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))

const parseUrl = require('body-parser');
let encodeUrl = parseUrl.urlencoded({extended: true} );

//app.get('/',(req,res) => {
  //res.render('page',{data: null} )  
//}  )


// Ütleb tere



//app.post('/', encodeUrl, (req,res) => {
  //res.render('page',{data: validId.idInfo(req.body.Isikukood)}  )

//})



let error = null
app.get('/',(req,res) => {
  res.render('page', {
    data: null,
    error: error
  })
})

const validId = require('./Isikukood')


app.post('/', encodeUrl, (req,res) => {
  let error = null
  if(req.body.Isikukood === ''){
    error = 'Palun siesta vormis andmed'
  } else if(req.body.Isikukood.length < 11) {
    error = 'Palun sisesta korrektne isikukood'
  }  
  if(error === null){
    res.render('page',{
      data: validId.idInfo(req.body.Isikukood),
      error: null
    })}  else {
      res.render('page',{data: null, error: error} )
    }  
})


// Annab teada, et töötab
app.listen(3000, () => {
  console.log(`Example app is started`)
})
