import { Profile } from "../models/profile.js"
import { Resource } from "../models/resource.js"

function show(req,res){
  Profile.findById(req.params.id)
  .populate('collectedResources')
  .then(profile => {
    Profile.findById(req.user.profile)
    .then(userProfile => {
      Resource.find({ collectedBy: req.user.profile._id }).limit(10)
      .then(resources => {
        res.render('profiles/show',{
          title: 'Title',
          profile,
          userProfile,
          user: req.user ? req.user : null,
          resources
        })
      })
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}





export{
  show
}