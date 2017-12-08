import { User } from './user.model';

export class Image {

    id: string;
    url: string;
    title: string;
    pathToPicture: string;
    author: User;
    description: string;
    camera: string;
    lens: string;
    location: string;
    datePublished: string;
    likes: Number;

    static fromJSON(json: any): Image {
        const img = new Image();
        img.id = json._id;
        img.url = json.url;
        img.title = json.title;
        img.pathToPicture = json.pathToPicture;
        img.author = User.fromJSON(json.author);
        img.description = json.description;
        img.camera = json.camera;
        img.lens = json.lens;
        img.location = json.location;
        img.datePublished = json.datePublished;
        img.likes = json.likes;
        return img;
    }
    toJSON(): any {
        return {
            _id: this.id,
            url: this.url,
            title: this.title,
            pathToPicture: this.pathToPicture,
            author: this.author,
            description: this.description,
            camera: this.camera,
            lens: this.lens,
            location: this.location,
            datePublished: this.datePublished,
            likes: this.likes
        };
    }
}

