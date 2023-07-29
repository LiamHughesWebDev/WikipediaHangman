import { Component, OnInit } from '@angular/core';
import { GameLogicService } from '../game-logic.service';
import { WikiPageData } from "../interfaces/wiki-page-data"

@Component({
  selector: 'app-word-to-guess',
  templateUrl: './word-to-guess.component.html',
  styleUrls: ['./word-to-guess.component.scss']
})
export class WordToGuessComponent implements OnInit{

  constructor(private game:GameLogicService){}
  
  article!:WikiPageData;
  title!:Array<string>;
  displayTitle!:String;
 

  ngOnInit(): void {
    this.game.randomWikiPage.subscribe((val)=>{
      console.log(val);
      //set values
      this.article = val;
      this.displayTitle = this.article.title;
      this.title = this.article.title.split(" ");
 
     })
     
  }

 


}
