import { Component, OnInit } from '@angular/core';
import { User } from '../models/User'
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit{
  userId: number = 0;
  updatedUser: User = {id: 0, name: "" };

  constructor(private route: ActivatedRoute, 
    private apiService: ApiService) {}

  ngOnInit(): void {
      this.userId = +this.route.snapshot.paramMap.get('id')!;
      this.apiService.getUserById(this.userId).subscribe(user =>{
        this.updatedUser = user;
      });
  }

  updateUser():void{
    this.apiService.updateUser(this.userId, this.updatedUser).subscribe();
  }

}
