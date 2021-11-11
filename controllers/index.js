import { Resource } from '../models/resource.js'

function index(req,res){
  Resource.find({})
  .sort({_id: -1})
  .limit(10)
  .then (resources => {
    res.render('index',{
      resources,
      title: 'Latest Activity',
      user: req.user ? req.user : null
    })
  })
}

export {
  index
}