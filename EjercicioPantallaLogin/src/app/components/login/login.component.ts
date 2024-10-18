import { Component, Input, signal } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {


  @Input() username = ''
  @Input() password = ''


  hide = signal(true);
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }

  enviarFormulario() {
    throw new Error('Method not implemented.');
    }
}
