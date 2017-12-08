import { Image } from './image.model';
import 'rxjs/add/operator/map';

export class User {
    id: string;
    username: string;
    email: string;
    admin: boolean;
    likes: Image[];
    pictures: Image[];
    static fromJSON(json: any, deep: boolean = false): User {
        const user = new User();
        user.id = json._id;
        user.username = json.username;
        user.email = json.username;
        user.admin = json.admin;
        if (deep) {
            user.likes = json.likes.map(obj => Image.fromJSON(obj));
            user.pictures = json.pictures.map(obj => Image.fromJSON(obj));
        } else {
            user.likes = json.likes;
            user.pictures = json.pictures;
        }
        return user;
    }
    toJSON(): any {
        return {
            _id: this.id,
            username: this.username,
            email: this.email,
            admin: this.admin,
            likes: this.likes.map(obj => obj.toJSON()),
            pictures: this.likes.map(obj => obj.toJSON())
        };
    }
}
