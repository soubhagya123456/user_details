export interface response{
    meta: pagination;
    data: Array<database>;
}
 
export interface database{
    id:number;
    name:string ;
    email:string;
    gender:boolean;
    status:string;
 }

 export interface pagination{
    total: number;
    pages: number;
    page: number;
    limit:number;
    links: link;
 }

 export interface link{
    previous:string;
    current:string;
    next:string;
 }

//  export interface onedata{
//    id:number;
//    employee_name:string ;
//    employee_salary:number;
//    employee_age:number;
//    profile_image:null;
// }