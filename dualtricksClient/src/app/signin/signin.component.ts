import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ClientservicesService } from '../clientservices.service';
import { User } from '../user';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {
  user:User=new User();
  constructor(private userService: ClientservicesService, private router: Router) {}
  Register(){
    console.log(this.user);
    this.userService.newUser(this.user).subscribe(date=>
    {
        window.alert("User created successfully")
        this.router.navigateByUrl('/clientDetails');
    },
      error=> window.alert("Registration failed"));
  }
  ngOnInit() {
  }  
}
