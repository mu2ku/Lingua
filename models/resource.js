import mongoose from 'mongoose'

const Schema = mongoose.Schema

const resourceSchema = new Schema({
  resourceName: String,
  resourceDescription: String,
  resourceLink: String,
  resourceImg: String,
  resourceType: {type: String, enum: ['Dictionary', 'Reading','Writing','Listening','Speaking/Pronunciation','Grammar']},
  associatedLanguage: [{type: Schema.Types.ObjectId, ref: 'Language'}],
  resourceCreatedBy:[{type: Schema.Types.ObjectId, ref: 'Profile'}]
})

export{
  Resource
}

