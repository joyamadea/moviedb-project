import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from './data.service';


@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  public movies=[];

  constructor(private router: Router,private dataService: DataService) { }
  username=localStorage.getItem('username');
  password=localStorage.getItem('password');

  ngOnInit() {
    if(this.username=='' || this.password=='' || this.username==null || this.password==null){
      this.router.navigate(['/login']);
    }
    this.dataService.getMovies()
      .subscribe(data=>this.movies=data);
    
  }

  clearStorage(){
    localStorage.clear();
    //console.log(this.username);
    this.router.navigate(['/']);
  }

  

}
