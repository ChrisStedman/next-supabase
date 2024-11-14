import { UUID } from "crypto";
import { Status } from "./status";

export interface Issue {
    id: number;
    created_at: string;
    updated_at?: string;
    user_id: UUID;
    title: string;
    description: string;
    status: Status
}