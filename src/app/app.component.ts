import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  constructor(private router: Router,
    private http: HttpClient)  {
  }
  ngOnInit() {
    this.http.get('http://localhost:3000/posts').subscribe((res: any) => {
      console.log("res", res);
    })
    // this.router.navigate(['./navigation']);
  }
}
