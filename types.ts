export interface Post {
  id: number;
  user_id: number;
  title: string;
  body: string;
}

export interface Comment {
  id: number;
  post_id: number;
  name: string;
  email: string;
  body: string;
}

export interface PostDetail extends Post {
  comments: Comment[];
}

export interface User {
  id: number;
  name: string;
  email: string;
  gender: "male" | "female" | "";
  status: "active" | "inactive" | "";
}
