import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ClientservicesService } from '../clientservices.service';
import { User } from '../user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  user:User=new User();
  loginForm: FormGroup;
  constructor(private authService: ClientservicesService,private router: Router,private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      userid: ['', Validators.required],
      pwd: ['', Validators.required]
    });
  }

  onSubmit() {
    console.log('Form submitted');
    if (this.loginForm.valid) {
      const userid = this.loginForm.value.userid;
      const password = this.loginForm.value.pwd;
      console.log('UserId:', userid);
      console.log('Password:', password);
      this.authService.login(userid, password).subscribe(
        response => {
          console.log('Login successful:', response);
          window.alert("user is logged in successfully")
          this.router.navigateByUrl('/clientDetails');
        },
        error => {
          console.error('Login failed:', error);
          window.alert("User is not present")
        }
      );
    }
  }
  
}
