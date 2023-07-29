import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { WikiPageData } from './interfaces/wiki-page-data';

@Injectable({
  providedIn: 'root'
})
export class GameLogicService {

  constructor(private http: HttpClient) { }
    randomWikiPage!: Observable<WikiPageData>;
    observeGuessedWord = new Subject<Array<String>>;
    guessedWord:Array<string> = [];
    wikiPageData!: any;
    

  
      getRandomPage(){ //called in App.component.ts
        this.randomWikiPage = new Observable((article => {
          let page = this.http.get<WikiPageData>("https://en.wikipedia.org/api/rest_v1/page/random/summary");

          page.subscribe((val) => {
            article.next(val)
          });
        }))
      }

      receiveGuessedLetter(letter:string){
        this.guessedWord.push(letter);
        console.log(this.guessedWord);
        this.observeGuessedWord.next(this.guessedWord)
      }

}
