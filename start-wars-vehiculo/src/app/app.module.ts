
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListVehiclesComponent } from './componets/list-vehicles/list-vehicles.component';
import { provideHttpClient } from '@angular/common/http';
import { MenuComponent } from './share/menu/menu.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PeopleListComponent } from './componets/people-list/people-list.component';
import { PageNotFoundComponent } from './share/page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    ListVehiclesComponent,
    PeopleListComponent,
    MenuComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
