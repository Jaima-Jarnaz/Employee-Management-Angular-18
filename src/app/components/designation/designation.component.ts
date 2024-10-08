import { Component, OnInit, inject } from '@angular/core';
import { MasterService } from '../../services/master.service';
import {
  IApiResponseModel,
  IDesignations,
} from '../../models/interfaces/interfaces';
import { LoaderComponent } from '../common/loader/loader.component';

@Component({
  selector: 'app-designation',
  standalone: true,
  imports: [LoaderComponent],
  templateUrl: './designation.component.html',
  styleUrl: './designation.component.css',
})
export class DesignationComponent implements OnInit {
  masterService = inject(MasterService);

  designationsList: IDesignations[] = [];
  isLoading: boolean = true;
  ngOnInit(): void {
    this.masterService.getAllDesignations().subscribe(
      (res: IApiResponseModel) => {
        this.designationsList = res.data;
        this.isLoading = false;
      },
      (error) => {
        alert('Error occured');
      }
    );
  }
}
