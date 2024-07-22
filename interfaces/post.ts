export interface Post {
  _id: string;
  caption: string;
  like: number;
  likedBy: string;
  userId: string;
  createdOn: Date;
  image: string;
}
