import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  constructor(private http:HttpClient){}
  ngOnInit(): void {
    var randomPage = this.http.get("https://en.wikipedia.org/api/rest_v1/page/random/summary");
    randomPage.subscribe(val => console.log(val));
  }


}

