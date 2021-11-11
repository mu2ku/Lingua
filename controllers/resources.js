import { Resource } from "../models/resource.js"

function create(req,res){
  Resource.create(req.body)
  .then(resource => {
    resource.resourceCreatedBy.push(req.user.profile._id)
    resource.save()
    .then(() =>{
      res.redirect('back')
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
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