export class Passenger {

    
    constructor(
        public  id: string,
        public fullname: string,
        public  checkedIn:boolean,
        public checkedInDate: any,
        public children:Child[]
    ){}
}


interface  Child {
           name:string,
              age:number
}