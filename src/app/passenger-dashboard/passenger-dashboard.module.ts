import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { PassengerCount } from "./components/passenger-count/passenger-count.component";
import { PassengerDetail } from "./components/passenger-detail/passenger-detail.component";
import { PassengerDashboardComponent } from "./container/passenger-dashboard/passenger-dashboard.component";

@NgModule({
    declarations:[PassengerDashboardComponent, PassengerCount,PassengerDetail],
    imports:[CommonModule],
    exports:[PassengerDashboardComponent,PassengerCount, PassengerDetail]
})

export class DashBoardModule{}