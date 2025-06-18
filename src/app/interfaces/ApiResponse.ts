import { Item } from "./Item";


export interface ApiResponse {
    collection: {
        version: string;
        href: string;
        items: Item[];
    };
}
