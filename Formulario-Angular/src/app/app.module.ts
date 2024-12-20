import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormAlumnoComponent } from './components/form-alumno/form-alumno.component';
import { LetraNifPipe } from './pipes/letra-nif.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FormAlumnoComponent,
    LetraNifPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
