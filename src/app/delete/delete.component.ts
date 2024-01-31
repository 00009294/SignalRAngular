import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit{
  userId: number = 0;

  constructor(private route: ActivatedRoute, 
    private apiService: ApiService) {}

    ngOnInit(): void {
        this.userId = +this.route.snapshot.paramMap.get('id')!;
    }
    deleteUser():void{
      this.apiService.deleteUser(this.userId).subscribe();
    }
}
