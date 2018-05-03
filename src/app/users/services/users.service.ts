import { Injectable } from '@angular/core';
import {IUser} from '../models/user.model';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';


@Injectable()
export class UsersService {

  private baseApiUrl = environment.API_URL;

  constructor(private http: HttpClient) { }

  // TODO: handle errors with catchError operator
  getUsers(page: number, limit: number) {
    return this.http.get<IUser[]>(`${this.baseApiUrl}/users?_page=${page}&_limit=${limit}`);
  }

}
