import { Component } from '@angular/core';
import { ClientservicesService } from '../clientservices.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  userName: string = '';
  password: string = '';

  constructor(private adminService: ClientservicesService, private router: Router) {}
  login(): void {
    if (this.adminService.authenticate(this.userName, this.password)) {
      window.alert("logged in successfully");
      this.router.navigateByUrl('/adminclientDetails');
    } else {
      window.alert("login failed");
    }
  }
}
