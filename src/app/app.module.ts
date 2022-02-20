


import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { DashBoardModule } from "./passenger-dashboard/passenger-dashboard.module";

@NgModule({
  declarations:[AppComponent],
  imports:[CommonModule,
            RouterModule,
           BrowserModule,
           DashBoardModule
          ],
  bootstrap:[AppComponent]
})

export class AppModule {}