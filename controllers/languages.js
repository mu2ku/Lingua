import { Language } from "../models/language.js"

function index(req,res){
  Language.find({})
  .then(languages => 
    res.render('langauges/index',{
      title: "Language List",
      languages
  })
)}


function create(req,res){
  
}

function newLanguage(req,res){
  res.render('langauges/new', {
    title: 'Add Language'
  })
}

function deleteLanguage(req,res){
  
}

function show(req,res){

}

export{
  index,
  show,
  create,
  newLanguage as new,
  deleteLanguage as delete,
}