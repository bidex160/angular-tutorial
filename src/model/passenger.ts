export class Passenger {

    
    constructor(
        public  id: string,
        public fullname: string,
        public  checkedIn:boolean,
        public checkedInDate: any,
        public children:Child[]
    ){}
}


export class Child {

    constructor(
        public   name:string,
        public      age:number){}
}