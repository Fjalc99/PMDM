import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BotonLoginComponent } from './components/boton-login/boton-login.component';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'Login', component: BotonLoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
