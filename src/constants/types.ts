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

export const cmsFormValues = {
    
}

export type optional = {
  country?:string,
  name:string,
  headOffice1:string,
  headOffice2?:string,
  headOffice3?:string,
  headOffice4?:string,
  headOffice5?:string,
  headOffice6?:string,
  address:string,
  address2?:string,
  address3?:string,
  address4?:string,
  email1?:string,
  email2?:string,
  email3?:string,
  email4?:string,
  website?:string,
  website2?:string,
}