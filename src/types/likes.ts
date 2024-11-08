import { UUID } from "crypto";

export interface Like {
    id: number;
    created_at: string;
    user_id: UUID;
    article_id: number;
}