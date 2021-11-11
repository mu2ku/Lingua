import { Resource } from "../models/resource.js"

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

export{
  create,
  newResource as new,
}