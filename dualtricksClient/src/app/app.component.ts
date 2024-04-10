import { Component } from '@angular/core';
import { ClientservicesService } from './clientservices.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'dualtricksClient';
  constructor(private userService: ClientservicesService) {}
  ngOnInit() {}
    isLoggedIn(): boolean {
      return this.userService.isAuthenticated(); // Implement this method in AuthService
    }
    logout() {
      this.userService.logout(); // Implement this method in AuthService
    }
}
