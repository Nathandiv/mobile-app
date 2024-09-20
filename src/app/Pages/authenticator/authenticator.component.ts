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
      this.loginObj.email === 'Admin' &&
      this.loginObj.password === '123'
      ||
       this.loginObj.email === 'nathan' &&
      this.loginObj.password === '321'
      ||
      this.loginObj.email === 'shaper' &&
     this.loginObj.password === 'Letsdoit!'
    ){
      this.router.navigateByUrl('/home');
    }
    else {
      alert('wrong credentials')
    }
  }

}
