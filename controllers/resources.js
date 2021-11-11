import { Resource } from "../models/resource.js"
import { Language } from '../models/language.js'
import { Profile } from '../models/profile.js'


function create(req,res){
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key]
  }
  const resource = new Resource(req.body)
  resource.save(function (err) {
    if (err) return res.redirect('/resources/new')
    res.redirect('/resources/new')
  })
}

function newResource(req,res){
  res.render('resources/new', {
    title: 'Add new resource',
    user: req.user ? req.user : null
  })
}

// function update(req,res){
//   Resource.findByIdAndUpdate(req.params.id, req.body)
//   .populate('languageId')
//   .then( resource => {
//     Language.find({ languageName: req.params.associatedLanguage })
//     .then(language => {
//       res.redirect('/languages')
//     })
//   })
//   .catch(err => {
//     console.log(err)
//     res.redirect('/')
//   })
// }

export{
  create,
  newResource as new,
}