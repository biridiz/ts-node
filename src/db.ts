import { Document, Schema, Model, model } from 'mongoose'

export interface HelloWorldSchemaInterface extends Document {
  text: string
}

const HelloWorldSchema = new Schema({
  text: String
}, {
  timestamps: true
})

export const HelloWorld: Model<HelloWorldSchemaInterface> = model<HelloWorldSchemaInterface>('HelloWorld', HelloWorldSchema)