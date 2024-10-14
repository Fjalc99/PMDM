import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  protected readonly value = signal('');

    protected onInput(event: Event) {
      this.value.set((event.target as HTMLInputElement).value);
    }
}
