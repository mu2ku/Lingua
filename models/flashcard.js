import mongoose from 'mongoose'

const Schema = mongoose.Schema

const flashcardSchema = new Schema ({
  flashcardCreatedBy: [{type: Schema.Types.ObjectId, ref: 'Profile'}],
  flashcardLanguage: String,
  flashcardFront: String,
  flashcardBack: String
})

const Flashcard = mongoose.model('Flashcard', flashcardSchema)

export {
  Flashcard
}