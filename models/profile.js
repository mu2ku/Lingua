import mongoose from 'mongoose'

const Schema = mongoose.Schema

const profileSchema = new mongoose.Schema({
  name: String,
  avatar: String,
  bio: String,
  languagesLearning: [{type: Schema.Types.ObjectId, ref: 'Language'}],
  flashcardCreatedBy: [{type: Schema.Types.ObjectId, ref: 'Flashcard'}],
  collectedResources: [{type: Schema.Types.ObjectId, ref: 'Resource'}],
  flashcardReviews: {type: Number, min: 0},
}, {
  timestamps: true
})

const Profile = mongoose.model('Profile', profileSchema)

export {
  Profile
}