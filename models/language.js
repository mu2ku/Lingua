import mongoose from 'mongoose'

const Schema = mongoose.Schema

const languageSchema = new Schema({
  languageName: String,
  langaugeLearner: [{type: Schema.Types.ObjectId, ref: 'Profile'}],
  languageResource: [{type: Schema.Types.ObjectId, ref: 'Resource'}],
})

const Language = mongoose.model('Language', languageSchema)

export {
  Language
}