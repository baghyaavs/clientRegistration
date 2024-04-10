import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from './user';
import { Clients } from './clients';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ClientservicesService {
 private baseUrl = 'http://localhost:8080/dualtricks'; 
 private adminName = 'admin';
  private adminPassword = 'adminpassword';
  private isAuthenticatedSubject = false;
  constructor(private http: HttpClient,private router: Router) {
     this.isAuthenticatedSubject = this.checkAuthenticated();
  }

  authenticate(username: string, password: string): boolean {
    this.isAuthenticatedSubject = true;
    return username === this.adminName && password === this.adminPassword;
  }

  isAuthenticated(): boolean {
    return this.isAuthenticatedSubject;
  }
  private checkAuthenticated(): boolean {
    const authToken = localStorage.getItem('authToken');
    return !!authToken; // Return true if the token is present, otherwise false
  }
  logout(): void {
    // Implement your logout logic here, e.g., clear token from local storage
    localStorage.removeItem('authToken');
    this.isAuthenticatedSubject = false;
    window.alert("logged out successfully")
    this.router.navigateByUrl('/');
  }

  login(userid: string, pwd: string): Observable<any> {
    const userlog = {userid:userid, pwd: pwd};
    this.isAuthenticatedSubject = true;
    return this.http.post(`${this.baseUrl}/login?userid=${userid}&pwd=${pwd}`, userlog);
    }
  /*login(userid: string, pwd: string): Observable<any> {
    // Check if the login attempt is for the admin
    if (userid === 'admin' && pwd === 'adminpassword') {
      this.isAuthenticatedSubject = true;
      return of({ success: true, message: 'Admin login successful' });
    } else {
      // Perform regular login for non-admin users
      const userlog = { userid: userid, pwd: pwd };
      this.isAuthenticatedSubject = true;
      return this.http.post(`${this.baseUrl}/login`, userlog);
    }
  }*/
  newClient(client:Clients):Observable<object>{
    console.log(client);
    return this.http.post(`${this.baseUrl}/clientDetails`,client);        
}
  newUser(user:User):Observable<object>{
    console.log(user);
    this.isAuthenticatedSubject = true;
    return this.http.post(`${this.baseUrl}/signin`,user);        
}

  getAdminClientDetails(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/adminclientDetails`);
  }
}