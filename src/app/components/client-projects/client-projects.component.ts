import { Component, OnInit, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { IEmployee } from '../../models/interfaces/interfaces';
import { ClientService } from '../../services/client.service';
import { IApiResponseModel } from '../../models/interfaces/interfaces';
import { Client } from '../../models/class/client';
import { Observable } from 'rxjs';
import { AsyncPipe, DatePipe } from '@angular/common';

@Component({
  selector: 'app-client-projects',
  standalone: true,
  imports: [ReactiveFormsModule, AsyncPipe, DatePipe],
  templateUrl: './client-projects.component.html',
  styleUrls: ['./client-projects.component.css'],
})
export class ClientProjectsComponent implements OnInit {
  projectFormData: FormGroup = new FormGroup({
    clientProjectId: new FormControl(0),
    projectName: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
    startDate: new FormControl(''),
    expectedEndDate: new FormControl(''),
    leadByEmpId: new FormControl(0),
    completedDate: new FormControl(''),
    contactPerson: new FormControl(''),
    contactPersonContactNo: new FormControl(''),
    totalEmpWorking: new FormControl(0),
    projectCost: new FormControl(0),
    projectDetails: new FormControl(''),
    contactPersonEmailId: new FormControl(''),
    clientId: new FormControl(0),
  });

  clientService = inject(ClientService);
  employeeList: IEmployee[] = [];
  clientList: Client[] = [];
  clientProjectList$: Observable<any> = new Observable<any>();

  ngOnInit(): void {
    this.getAllEmployeeList();
    this.getAllClientList();

    this.clientProjectList$ = this.clientService.getAllClientProjects(); // using obserable
  }

  onSaveProject() {
    const formValues = this.projectFormData.value;
    // debugger;
    this.clientService.addUpdateClientProject(formValues).subscribe(
      (res: IApiResponseModel) => {
        console.log(res, 'res');

        if (res.result) {
          alert('client Project created');
        }
      },
      (error) => {
        alert(error + 'Error Occures');
      }
    );
  }

  getAllEmployeeList() {
    this.clientService.getAllEmployees().subscribe(
      (res: IApiResponseModel) => {
        this.employeeList = res.data;
      },
      (error) => {
        alert(error);
      }
    );
  }

  getAllClientList() {
    this.clientService.getAllClients().subscribe(
      (res: IApiResponseModel) => {
        this.clientList = res.data;
      },
      (error) => {
        alert(error);
      }
    );
  }
}
