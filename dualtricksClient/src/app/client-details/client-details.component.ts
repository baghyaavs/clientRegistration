import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ClientservicesService } from '../clientservices.service';
import { Clients } from '../clients';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrl: './client-details.component.css'
})
export class ClientDetailsComponent {
  /*constructor(private userService: ClientservicesService, private router: Router) {}

  onSubmit(formValue: any) {
    this.userService.registerClientDetails(formValue).subscribe(
      response => {
        window.alert("Details are stored successfully")
        this.router.navigate(['/thankyou']);
      },
      error => {
        // Handle registration error
        window.alert("failed to store")
        console.error('Registration failed:', error);
      }
    );
  }*/

  client:Clients=new Clients();
  constructor(private userService: ClientservicesService, private router: Router) {}
  Register(){
    console.log(this.client);
    this.userService.newClient(this.client).subscribe(date=>
    {
        window.alert("Client Details are stored successfully")
        this.router.navigateByUrl('/thankyou');
    },
      error=> window.alert("Registration failed"));
  }
  ngOnInit() {
  }  

}
