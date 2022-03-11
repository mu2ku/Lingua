import { Flashcard } from "../models/flashcard.js"

function index(req,res){

}

function show(req,res){

}

function create(req,res){
  Flashcard.create(req.body)
  .then(flashcard => {
    flashcard.flashcardCreatedBy.push(req.user.profile._id)
    flashcard.save()
    .then(()=> {
      res.redirect('back')
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function newFlashcard(req,res){
  res.render('flashcards/new', {
    title: 'Add new flashcard',
    user: req.user ? req.user : null
  })
}

function deleteFlashcard(req,res){

}

export{
  index,
  show,
  create,
  newFlashcard as new,
  deleteFlashcard as delete,
}