import { ItemData } from "./ItemData";
import { ItemLink } from "./ItemLink";


export interface Item {
    href: string;
    data: ItemData[];
    links: ItemLink[];
}
