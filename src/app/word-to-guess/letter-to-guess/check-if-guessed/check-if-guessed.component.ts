import { Component, Input, OnInit } from '@angular/core';
import { GameLogicService } from 'src/app/game-logic.service';

@Component({
  selector: 'app-check-if-guessed',
  templateUrl: './check-if-guessed.component.html',
  styleUrls: ['./check-if-guessed.component.scss']
})
export class CheckIfGuessedComponent implements OnInit {
  @Input() letter: any;
  guessed:boolean = false;
  guessedLetters!:any;

  constructor(private game: GameLogicService){}

  ngOnInit(): void {
    this.game.observeGuessedWord.subscribe({
      next: v => {this.guessedLetters = v; this.checkLetters();}
    })
  }

  checkLetters(){
    let tempGuessedLetters = this.guessedLetters;
    let tempLetter = this.letter.toLowerCase();


    console.log(tempGuessedLetters);
    console.log(tempLetter)

    this.guessed = tempGuessedLetters.includes(tempLetter);
  }
  
}
