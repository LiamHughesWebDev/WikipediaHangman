import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WikiPageData } from './interfaces/wiki-page-data';

@Injectable({
  providedIn: 'root'
})
export class GameLogicService {

  constructor(private http: HttpClient) { }
    randomWikiPage!: Observable<{}>;
    wikiPageData!: any;

  
      getRandomPage(){
        this.randomWikiPage = this.http.get<WikiPageData>("https://en.wikipedia.org/api/rest_v1/page/random/summary");
        this.randomWikiPage.subscribe(val => this.wikiPageData = val);
      }
}
