import { Component,inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authenticator',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './authenticator.component.html',
  styleUrl: './authenticator.component.css'
})
export class AuthenticatorComponent {
  loginObj:any ={
    username:'',
    password:'',
  };

  router = inject(Router);

  onLogin(){
    if (
      this.loginObj.username === 'Admin' &&
      this.loginObj.password === '123'
    ){
      this.router.navigateByUrl('/home');
    }
    else {
      alert('wrong credentials')
    }
  }

}
