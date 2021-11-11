import { Resource } from '../models/resource.js'
import { Language } from '../models/language.js'

function index(req,res){
  Resource.find({})
  .sort({_id: -1})
  .limit(6)
  .then (resources => {
    Language.find({})
    .then (languages => {
      res.render('index',{
        resources,
        title: 'Latest Activity',
        user: req.user ? req.user : null
      })
    })
  })
}

export {
  index
}