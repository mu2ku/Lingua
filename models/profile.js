import mongoose from 'mongoose'

const Schema = mongoose.Schema

const flashcardSchema = new Schema ({
  flashcardCreatedBy: [{type: Schema.Types.ObjectId, ref: 'Profile'}],
  flashcardLanguage: String,
  flashcardFront: String,
  flashcardBack: String
})

const profileSchema = new mongoose.Schema({
  name: String,
  avatar: String,
  bio: String,
  languagesLearning: [{type: Schema.Types.ObjectId, ref: 'Language'}],
  flashcardCreatedBy: [flashcardSchema],
  collectedResources: [{type: Schema.Types.ObjectId, ref: 'Resource'}],
  flashcardReviews: {type: Number, min: 0},
}, {
  timestamps: true
})

const Profile = mongoose.model('Profile', profileSchema)

export {
  Profile
}