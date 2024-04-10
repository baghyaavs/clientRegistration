import { Component } from '@angular/core';
import { ClientservicesService } from '../clientservices.service';

@Component({
  selector: 'app-admin-client-details',
  templateUrl: './admin-client-details.component.html',
  styleUrl: './admin-client-details.component.css'
})
export class AdminClientDetailsComponent {

  clientDetails: any[] = [];

  constructor(private clientDetailsService: ClientservicesService) {}

  ngOnInit(): void {
    this.loadClientDetails();
  }

  loadClientDetails(): void {
    this.clientDetailsService.getAdminClientDetails().subscribe(
      (data: any[]) => {
        this.clientDetails = data;
      },
      error => {
        console.log('Error fetching client details:', error);
      }
    );
  }

}
