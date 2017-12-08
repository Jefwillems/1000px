const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PictureSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    pathToPicture: {
        type: String,
        required: true
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    description: {
        type: String,
        required: false
    },
    camera: {
        type: String,
        required: false
    },
    lens: {
        type: String,
        required: false
    },
    location: {
        type: [Number],
        required: false
    },
    datePublished: {
        type: Date,
        required: true,
        default: Date.now
    },
    likes: {
        type: Number,
        default: 0
    },
    flagged: {
        type: Boolean,
        default: false
    }
});

PictureSchema.pre('remove', (next) => {
    mongoose.model('User').update({}, {
        $pull: {
            likes: this._id
        }
    }, {
        safe: true,
        multi: true
    }, () => {
        mongoose.model('User').update({}, {
            $pull: {
                pictures: this._id
            }
        }, {
            safe: true,
            multi: true
        }, next);
    });

});


mongoose.model('Picture', PictureSchema);