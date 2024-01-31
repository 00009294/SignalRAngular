import { Component, OnInit } from '@angular/core';
import { User } from '../models/User';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit{
  users: User[] = [];
  constructor(private apiService:ApiService) {}
ngOnInit(): void {
    this.apiService.getUsers().subscribe(allUsers => {
      this.users = allUsers;
    })
}
}
