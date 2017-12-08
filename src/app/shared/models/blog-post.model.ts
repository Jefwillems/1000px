import { User } from './user.model';

export class BlogPost {
    id: string;
    title: string;
    text: string;
    author: User;
    date_created: Date;
    static fromJSON(json: any): BlogPost {
        const post = new BlogPost();
        post.title = json.title;
        post.text = json.text;
        post.author = User.fromJSON(json.author, false);
        post.date_created = json.date_created;
        post.id = json._id;
        return post;
    }
}
