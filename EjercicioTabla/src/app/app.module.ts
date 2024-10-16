import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TablaComponent } from './components/tabla/tabla.component';
import {MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
  declarations: [
    AppComponent,
    TablaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MatTableModule,
    MatCheckboxModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
