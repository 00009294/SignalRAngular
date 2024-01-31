import { Component, OnInit } from '@angular/core';
import { User } from '../models/User';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent  {
  newUser: User = {id: 0, name: "" };

  constructor(private apiServices: ApiService) {}

  createUser(): void{
    this.apiServices.createUser(this.newUser).subscribe();
  }
}
