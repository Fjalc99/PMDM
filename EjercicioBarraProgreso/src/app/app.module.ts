import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BarraProgresoComponent } from './components/barra-progreso/barra-progreso.component';
import { NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { BarraProgesoTwoComponent } from './components/barra-progeso-two/barra-progeso-two.component';

@NgModule({
  declarations: [
    AppComponent,
    BarraProgresoComponent,
    BarraProgesoTwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbProgressbarModule,
    FormsModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
