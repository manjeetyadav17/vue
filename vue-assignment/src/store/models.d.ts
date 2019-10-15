export interface Profile {
  username: string;
  bio?: string;
  image?: string;
  following: boolean;
}

export interface User {
  email: string;
  token: string;
  username: string;
  bio?: string;
  image?: string;
}

export interface UserRegister {
  user: Partial<UserForUpdate>;
}


export interface UserForUpdate {
  email: string;
  bio?: string;
  image?: string;
  username: string;
  password: string;
}

export interface Article {
  slug: string;
  title: string;
  description: string;
  body: string;
  tagList?: (string)[] | null;
  createdAt: string;
  updatedAt: string;
  favorited: boolean;
  favoritesCount: number;
  author: Author;
}

export interface ArticleSubmit{
  slug?:string|null;
  title: string;
  description: string;
  body: string;
  tagList?: (string)[] | null;
}
export interface Author {
  username: string;
  bio: string;
  image: string;
  following: boolean;
}

export interface UserSubmit {
  email: string;
  password: string;
}

export interface UserResponse {
  user: User;
}

export interface ProfileResponse {
  profile: Profile
}
export interface ArticlesResponse {
  articles?: (Article)[] | null;
  articlesCount: number;
}

export interface ArticleResponse {
  article?: Article | null;
}

export interface CommentsResponse {
  comments?: (Comment)[] | null;
}
export interface Comment {
  id: number;
  createdAt: string;
  updatedAt: string;
  body: string;
  author: Author;
}

export interface CommentSubmit{
  body:string;
  slug:string;
}

export interface CommentResponse{
  comment:Comment;

}

export interface CommentDelete{
  id:number;
  slug:string;
}

export interface TagsResponse {
  tags?: (string)[] | null;
}


