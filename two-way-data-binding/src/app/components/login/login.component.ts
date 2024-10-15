import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  // 1. property binding
  valoracion = 5;
  imgUrl = 'https://e7.pngegg.com/pngimages/447/755/png-clipart-mercadona-logo-oliva-supermarket-brand-mercadona-logo-thumbnail.png';


//2 event binding 

  showUserInfo(){
    alert(`'Usuario:' ${this.nombre} `)
  }

  // 3. 

  nombre = 'Fran'


}
