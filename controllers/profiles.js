import { Profile } from "../models/profile.js"

function show(req,res){
  Profile.findById(req.params.id)
  .then(profile =>{
    Profile.findById(req.user.profile)
    .then(userProfile => {
      res.render('profiles/show',{
        title: 'Title',
        profile,
        userProfile,
        user: req.user ? req.user : null,
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