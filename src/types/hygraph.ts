export interface Post {
    id: string;
    title: string;
    content: string;
    slug: string;
}

export interface HygraphResponse {
    posts: Post[];
}