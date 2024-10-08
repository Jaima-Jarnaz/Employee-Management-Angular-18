import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IApiResponseModel } from '../models/interfaces/interfaces';
import { Observable, map } from 'rxjs';
import { Client } from '../models/class/client';
import { environment } from '../../environments/environment.development';
import { Constants } from '../constants/constants';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  constructor(private http: HttpClient) {}

  getAllClientProjects(): Observable<any[]> {
    return this.http
      .get<any>(
        environment.Client_API_URL +
          Constants.API_METHODS.GET_ALL_CLIENT_PROJECTS
      )
      .pipe(
        map((response: any) => response.data) // Assuming response.data is the array you need
      );
  }

  getAllEmployees(): Observable<IApiResponseModel> {
    return this.http.get<IApiResponseModel>(
      environment.Client_API_URL + Constants.API_METHODS.GET_ALL_EMPLOYEES
    );
  }

  getAllClients(): Observable<IApiResponseModel> {
    return this.http.get<IApiResponseModel>(
      environment.Client_API_URL + Constants.API_METHODS.GET_ALL_CLIENT
    );
  }

  addUpdateClientProject(objFormData: any): Observable<IApiResponseModel> {
    return this.http.post<IApiResponseModel>(
      environment.Client_API_URL +
        Constants.API_METHODS.ADD_UPDATE_CLIENT_PROJECT,
      objFormData
    );
  }

  addUpdateClient(objFormData: Client): Observable<IApiResponseModel> {
    return this.http.post<IApiResponseModel>(
      environment.Client_API_URL + Constants.API_METHODS.ADD_UPDATE_CLIENT,
      objFormData
    );
  }

  deleteClientById(id: number): Observable<IApiResponseModel> {
    return this.http.delete<IApiResponseModel>(
      environment.Client_API_URL +
        `${Constants.API_METHODS.DELETE_CLIENT_BY_CLIENT_ID}?clientId=` +
        id
    );
  }
}
