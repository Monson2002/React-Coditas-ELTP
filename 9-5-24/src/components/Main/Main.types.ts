export interface MainProps { 
    // Define props for Main component here 
} 

export interface EmployeeNameAndId {
    name: string,
    id: number,
}

export interface EmployeeProps {
    id: number,
    img: string,
    name: string,
    username: string,
    email: string,
    address: Address,
    age: number
    phone: string,
    website: string,
    company: Company
}

export interface Address {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: {lat: string, lng: string}
}

export interface Company {
    name: string,
    catchPhrase: string,
    bs: string
}