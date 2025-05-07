export interface Feature {
    id: string
    number: string
    title: string
    description: string
    actions: {
        label: string
        url?: string
    }[]
}

export interface CategoryData {
    id: string
    title: string
    description: string
    bgColor: string
    imgUrl: string
}

export type cmsFormValues = {
    title: string;
    content: string;
    route: string;
    description?: string | undefined;
    bannerImage?: any;
    author?: string | undefined;
    tags?: string[] | undefined;
    publishDate?: string | undefined;
}