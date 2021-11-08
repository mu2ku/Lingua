import mongoose from 'mongoose'

const profileSchema = new mongoose.Schema({
  name: String,
  avatar: String,
  bio: String,
  languagesLearning: [{type: Schema.Types.ObjectId, ref: 'Language'}],
  flashcardCreatedBy: [{type: Schema.Types.ObjectId, ref: 'Flashcard'}],
  resourceCreatedBy: [{type: Schema.Types.ObjectId, ref: 'Resource'}]
}, {
  timestamps: true
})

const Profile = mongoose.model('Profile', profileSchema)

export {
  Profile
}