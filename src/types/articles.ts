export interface Article {
    id: number;
    created_at: string;
    title: string;
    content: string;
    author?: string;
}