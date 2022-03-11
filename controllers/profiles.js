import { Profile } from "../models/profile.js"
import { Resource } from "../models/resource.js"

function show(req,res){
  Profile.findById(req.params.id)
  .populate('collectedResources')
  .then(profile => {
    Profile.findById(req.user.profile)
    .then(userProfile => {
      Resource.find({ collectedBy: req.user.profile._id }).limit(3)
      .then(resources => {
        res.render('profiles/show',{
          title: 'Profile',
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

function showFavorites(req,res){
  Profile.findById(req.params.id)
  .populate('collectedResources')
  .then(profile => {
    Profile.findById(req.user.profile)
    .then(userProfile => {
      Resource.find({ collectedBy: req.user.profile._id })
      .then(resources => {
        res.render('profiles/resources', {
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

function update(req,res){
  Profile.findByIdAndUpdate(req.params.id, req.body)
  .then(profile => {
    res.redirect(`/profiles/${profile._id}`)
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function newFlashcard(req,res){
  Profile.findById(req.params.id)
  .then(profile =>{
    res.render('flashcards/new', {
      title: 'Add new flashcard',
      profile,
      user: req.user ? req.user : null
    })
  })
}

function createFlashcard(req,res){
  Profile.findById(req.params.id)
  .then(profile => {
    console.log(req.body)
    profile.flashcardCreatedBy.push(req.body)
    profile.save()
    .then(()=>{
      res.redirect('back')
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

export{
  show,
  showFavorites,
  update,
  newFlashcard as new,
  createFlashcard
}