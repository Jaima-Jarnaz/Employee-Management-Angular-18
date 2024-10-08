import { Component, OnInit, inject } from '@angular/core';
import { Client } from '../../models/class/client';
import { FormsModule } from '@angular/forms';
import { ClientService } from '../../services/client.service';
import { IApiResponseModel } from '../../models/interfaces/interfaces';

@Component({
  selector: 'app-client',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css',
})
export class ClientComponent implements OnInit {
  clientService = inject(ClientService);

  clientFormObject: Client = new Client();
  clientList: Client[] = [];

  ngOnInit(): void {
    this.allClientList();
  }

  onSaveClient() {
    this.clientService.addUpdateClient(this.clientFormObject).subscribe(
      (res: IApiResponseModel) => {
        if (res.result) {
          alert('client created');
        }
      },
      (error) => {
        alert(error);
      }
    );
  }

  allClientList() {
    this.clientService.getAllClients().subscribe(
      (res: IApiResponseModel) => {
        this.clientList = res.data;
      },
      (error) => {
        alert(error);
      }
    );
  }

  editClient(data: any) {
    this.clientFormObject = data;
  }

  deleteClientById(id: number) {
    const isDelete = confirm('Are you sure want to delete?');
    if (isDelete) {
      this.clientService
        .deleteClientById(id)
        .subscribe((res: IApiResponseModel) => {
          if (res.result) {
            alert('client deleted successfully');
            this.allClientList();
          } else {
            alert(res.message);
          }
        });
    }
  }
}
