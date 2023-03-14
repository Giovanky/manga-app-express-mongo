import { model, Document, Schema } from 'mongoose'

export interface IPoster extends Document{
    image: string
    publicId: string
}

const posterSchema = new Schema({
    image: {
        type: String,
        unique: true,
    },
    publicId: {
        type: Schema.Types.ObjectId
    }
}, {
    timestamps: true,
    versionKey: false
})

export default model<IPoster>('Poster', posterSchema)