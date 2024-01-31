import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
private apiUrl = "http://localhost:5185";
  constructor(private http: HttpClient) { }

  getUsers():Observable<User[]>{
    return this.http.get<User[]>(`${this.apiUrl}/users`);
  }

  getUserById(id: number):Observable<User>{
    return this.http.get<User>(`${this.apiUrl}/users/${id}`);
  }

  createUser(user: User):Observable<boolean>{
    return this.http.post<boolean>(`${this.apiUrl}/users`, user);
  }

  deleteUser(id: number):Observable<boolean>{
    return this.http.delete<boolean>(`${this.apiUrl}/users/${id}`);
  }

  updateUser(id: number, user: User):Observable<boolean>{
    return this.http.put<boolean>(`${this.apiUrl}/users/${id}`, user);
  }
}
