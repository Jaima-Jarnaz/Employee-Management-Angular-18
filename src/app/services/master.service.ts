import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IApiResponseModel } from '../models/interfaces/interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MasterService {
  constructor(private http: HttpClient) {}

  getAllDesignations(): Observable<IApiResponseModel> {
    return this.http.get<IApiResponseModel>(
      'https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllDesignation'
    );
  }
}
