import { model, Document, Schema } from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator' 

export interface IManga extends Document{
    title: string
    author: Schema.Types.ObjectId
    cover: string
    background: string
    description: string
    available: boolean
    views: number
}

const mangaSchema = new Schema({
    title: {
        type: String,
        required: [true, 'El nombre del Manga es obligatorio'],
        unique: true,
    },
    author: {
        type: Schema.Types.ObjectId,
        required: [true, 'El Autor es obligatorio'],
    },
    images: [{
        cover: {
            type: String,
            required: true,
        },
        coverId: {
            type: String,
        },
        background: {
            type: String,
            required: true,
        },
        backgroundId: {
            type: String,
            required: true,
        }
    }],
    description: {
        type: String,
        required: [true, 'La descripcion del Manga es obligatoria'],
    },
    available: {
        type: Boolean,
        default: false
    },
    views: {
        type: Number,
        default: 0
    }
}, {
    timestamps: true,
    versionKey: false
})

mangaSchema.plugin(uniqueValidator, {message: '{PATH} ya se encuentra utilizado'})

export default model<IManga>('Manga', mangaSchema)