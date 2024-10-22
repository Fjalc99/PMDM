import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListVehiclesComponent } from './componets/list-vehicles/list-vehicles.component';
import { PeopleListComponent } from './componets/people-list/people-list.component';
import { PageNotFoundComponent } from './share/page-not-found/page-not-found.component';

const routes: Routes = [
  {path: 'vehicles', component: ListVehiclesComponent},
  {path: 'peoples', component: PeopleListComponent},
  {path: '', redirectTo: '/vehicles', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
