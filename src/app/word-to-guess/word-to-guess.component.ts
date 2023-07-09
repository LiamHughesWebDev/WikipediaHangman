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
  


  ngOnInit(): void {
    console.log(this.game.wikiPageData);

  }


  


}
