// types.ts
export interface Course {
    title: string;
    author: string;
    price: string;
}

export type Category = {
    [key: string]: Course[];
};
