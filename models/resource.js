import mongoose from 'mongoose'

const Schema = mongoose.Schema

const resourceSchema = new Schema({
  resourceName: String,
  resourceLink: String,
  resourceDescription: String,
  resourceImg: String,
  resourceType: String,
  associatedLanguage: String,
  resourceCreatedBy:[{type: Schema.Types.ObjectId, ref: 'Profile'}]
})

const Resource = mongoose.model('Resource', resourceSchema)

export{
  Resource
}

