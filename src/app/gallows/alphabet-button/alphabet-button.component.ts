import { Component, Input, OnInit } from '@angular/core';
import { GameLogicService } from 'src/app/game-logic.service';

@Component({
  selector: 'app-alphabet-button',
  templateUrl: './alphabet-button.component.html',
  styleUrls: ['./alphabet-button.component.scss']
})
export class AlphabetButtonComponent implements OnInit{
  @Input() letter: any;

  constructor(private Game: GameLogicService){}

  ngOnInit(): void {
    
  }

  sendLetter(){
    console.log(this.letter);
    this.Game.receiveGuessedLetter(this.letter);
  }

}
