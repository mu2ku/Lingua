import { Language } from "../models/language.js"

function index(req,res){
  Language.find({})
  .then(languages => 
    res.render('langauges/index', {
      title: "Language List",
      languages,
      user: req.user ? req.user : null
  })
)}

function create(req,res){
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key]
  }
  const language = new Language(req.body)
  language.save(function (err) {
    if (err) return res.redirect('/languages')
    res.redirect('/languages')
  })
}

function deleteLanguage(req,res){
  Language.findByIdAndDelete(req.params.id)
  .then(()=> {
    res.redirect('/languages')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function show(req,res){

}

export{
  index,
  create,
  deleteLanguage as delete,
}