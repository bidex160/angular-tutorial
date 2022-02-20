import { Component, Input, OnInit } from "@angular/core";
import { Passenger } from "src/model/passenger";

@Component({
    selector:'passenger-count',
    template:`<div>
    <h3>Airlines Passenger!</h3>
    <div>
    Total Passengers : {{checkedInCount()}} / {{items?.length}}
    </div>
    </div>`,
    styleUrls:['./passenger-count.component.scss']
})

export class PassengerCount implements OnInit{
    @Input() items: Passenger[];


    ngOnInit(): void {

    }
checkedInCount(): number{
    if(!this.items) return;

    return this.items.filter((passenge: Passenger)=>{
        return passenge.checkedIn;
    }).length
}
    
}