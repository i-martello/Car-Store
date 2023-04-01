import {Schema, model, models} from 'mongoose'

const commentSchema = new Schema({
  pageId: {type: String, required: true},
  usuario: {type: String, required: true},
  comentario: {type: String, required: true}
},{
  timestamps: true,
  versionKey: false
})

export const User = models.comentario || model('comentario', commentSchema)