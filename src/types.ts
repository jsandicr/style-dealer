export interface Product {
    _id                 : string;
    title               : string;
    category            : string;
    price               : number;
    img                 : string;
    color               : string;
    description         : string;
    sku                 ?: string;
    availability        ?: boolean;
    stockQuantity       ?: number;
    sizes               : string;
    brand               ?: string;
    discount            ?: number;
    ratings             : { rating: number; user: string }[];
    labels              : string[];
    promotion           ?: boolean;
    additionalImages    : string[];
    entryDate           : Date;
    createdAt           ?: Date;
}

export interface Size{
    _id         : string,
    size        : string,
    available   : boolean
}

export interface Filter {
    id      : number,
    title   : string,
    type    : typeFilters,
    options : string[]
}

export enum typeFilters{
    "check",
    "range",
    "size",
    "color"
}

export type FilterApplys = {
    gender          : string;
    discount        : string;
    price           : string;
    size            : string;
    orderBy         : string;
    [key: string]   : string;
}

export type ActionType = {
    type    : string;
    payload ?: string;
}

export type Cart = {
    _id         ?: string,
    userEmail   : string,
    cartItems   : CartItem[],
    total       : number,
    createdAt   ?: Date,
    cartStatus  : string
}

export type CartItem = {
    id          ?: string;
    quantity    : number | undefined;
    product     : Product;
    size        : Size | undefined
}

export interface SubcategoryItem {
    title   : string;
    href    : string;
}

export interface Subcategory {
    title   : string;
    list    : SubcategoryItem[];
}

export interface Category {
    title           : string;
    img             : string;
    subcategories   : Subcategory[];
}

export interface Store {
    id              : string;          
    name            : string;      
    img             : string;  
    description     : string; 
    location        : string;   
    openingHours    : string;
  }