import { Component } from "@angular/core";
import { Passenger } from "src/model/passenger";

@Component({
    selector:'passenger-dashboard',
    template:  `<div>

   
    <h3>{{title}}</h3>
    <passenger-count
    [items]="passengers"
    ></passenger-count>
    <passenger-detail
    *ngFor="let passenger of passengers "
    [detail]="passenger"
    ></passenger-detail>

    <ul>
  
    
    </ul>
   
</div>`,
    styleUrls:['./passenger-dashboard.component.css']
})

export class PassengerDashboardComponent {
    title: string;
    passengers: Passenger[]=[];


    constructor() {
  
        this.title = 'Ultimate Angular';
      }
      ngOnInit(): void {
     this.passengers = [
        new Passenger('1','Testing 1', true, 1490742000000, [{'name':'name','age':24},{'name':'name','age':24}]),
        new Passenger('2','Testing 2', false, null, [{'name':'name','age':24},{'name':'name','age':24}]),
        new Passenger('3','Testing 3', true, 1470742000000, [{'name':'name','age':24},{'name':'name','age':24}]),
        new Passenger('4','Testing 4', false, 1390742000000, [{'name':'name','age':24},{'name':'name','age':24}]),
        new Passenger('5','Testing 5', false, 2490742000000, []),
        new Passenger('6','Testing 6', true, null, null),
        new Passenger('7','Testing 7', false, null, [{'name':'name','age':24},{'name':'name','age':24}])
     ]
      }
}