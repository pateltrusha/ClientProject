
export interface user{
	email:string;
    password:string;
    name:string;
    token:string;
}
export interface address {
    name: string;
    institution:string;
    occuption:string;
    phone:string;
    address:string;
    city:string;
    state:string;
    country:string;
    postcode:string;
}
export interface profile {
    name: string;  
    company_type: string,
    company_role: string;
    desc_of_company:string;
    webpage:string;
}

export interface users {

    user:user;
    address:address;
    profile:profile;
}
   