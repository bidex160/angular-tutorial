import { Component } from "@angular/core";
import { Passenger } from "src/model/passenger";

@Component({
    selector:'passenger-dashboard',
    template:  `<div>

   
    <h3>{{title}}</h3>
    <passenger-count></passenger-count>
    <passenger-detail></passenger-detail>
    <ul>
    <li *ngFor="let pass of passenger;let i=index">
    <span class="status" [class.checked-in]="pass.checkedIn"></span>
   {{i}}: {{pass.fullname}}
   </li>
    
    </ul>

    <ul>
    <li *ngFor="let pass of passenger;let i=index">
    <span class="status" [ngClass]="{'checked-in': pass.checkedIn}"></span>
   {{i}}: {{pass.fullname}}
   <div class="date">
     check in date : {{pass.checkedInDate ? (pass.checkedInDate | date:'MMM d, y') : "Not checked in"}}
   </div>
   <div class="children">
    Children : {{pass.children?.length || 0}}
 </div>
   </li>
    
    </ul>
   
</div>`,
    styleUrls:['./passenger-dashboard.component.css']
})

export class PassengerDashboardComponent {
    title: string;
    passenger: Passenger[]=[ 
    new Passenger('1','Testing 1', true, 1490742000000, [{'name':'name','age':24},{'name':'name','age':24}]),
    new Passenger('2','Testing 2', false, null, [{'name':'name','age':24},{'name':'name','age':24}]),
    new Passenger('3','Testing 3', true, 1470742000000, [{'name':'name','age':24},{'name':'name','age':24}]),
    new Passenger('4','Testing 4', false, 1390742000000, [{'name':'name','age':24},{'name':'name','age':24}]),
    new Passenger('5','Testing 5', false, 2490742000000, []),
    new Passenger('6','Testing 6', true, null, null),
    new Passenger('7','Testing 7', false, null, [{'name':'name','age':24},{'name':'name','age':24}])];


    constructor() {
  
        this.title = 'Ultimate Angular';
      }
      ngOnInit(): void {
     
      }
}