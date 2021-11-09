import { Language } from "../models/language.js"
import { Resource } from "../models/resource.js"

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

function viewResources(req,res){
  Language.findById(req.params.id)
  .populate('languageResource')
  .then(language => {
    console.log(language)
    Resource.find({ resourceType: req.params.resourceType, associatedLanguage: language.languageName})
    .then(resources => {
      res.render('langauges/viewResource', {
        resources,
        language,
        user: req.user ? req.user : null,
        title: 'Language Resource'
      })
    })
  })
}

export{
  index,
  create,
  deleteLanguage as delete,
  viewResources
}