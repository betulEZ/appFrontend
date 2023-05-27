import { Comment } from "./comment";

export class Post {
  id?: number;
 title?: string;
 text?: string;
 userId?: any;
 userName?: any;
 comments?: Comment[];
}
