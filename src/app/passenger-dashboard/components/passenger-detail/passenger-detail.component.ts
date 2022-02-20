import { Component, Input, OnInit } from "@angular/core";
import { Passenger } from "src/model/passenger";

@Component({
    selector:'passenger-detail',
    template:`<div>
    <span class="status" [ngClass]="{'checked-in': detail?.checkedIn}"></span>
     {{detail?.fullname}}
   <div class="date">
     check in date : {{detail?.checkedInDate ? (detail.checkedInDate | date:'MMM d, y') : "Not checked in"}}
   </div>
   <div class="children">
    Children : {{detail?.children?.length || 0}}
 </div>
    </div>`,
    styleUrls:['./passenger-detail.component.scss']
})

export class PassengerDetail implements OnInit{

    @Input() detail:Passenger;

    ngOnInit(): void {
     
    }
}