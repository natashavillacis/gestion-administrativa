import { Component } from '@angular/core';
import { Router } from '@angular/router';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
}
)

export class LoginComponent  {
  
constructor (private router:Router){}

email: string = '';
password: string = '';
showErrorMessage: boolean = false;

login(){
  this.router.navigate(['/home']);
  if (this.email && this.password) {
    // Realizar la autenticación aquí
    console.log('Iniciar sesión');
  } else {
    this.showErrorMessage = true;
  }
}

togglePassword() {
  var passwordInput = document.getElementById('passwordInput') as HTMLInputElement;
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
  } else {
    passwordInput.type = 'password';
  }
}

  //loginError:string="";
  //loginForm=this.formBuilder.group({
    //email:['iva@gmail.com',[Validators.required,Validators.email]],
    //password: ['',Validators.required],
  //})

 // constructor(private formBuilder:FormBuilder, private router:Router, private loginService: LoginService) { }


}




