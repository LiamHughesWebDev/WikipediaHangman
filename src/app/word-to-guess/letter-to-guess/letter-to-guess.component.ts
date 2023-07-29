import { Component, Input, OnInit } from '@angular/core';
import { GameLogicService } from 'src/app/game-logic.service';

@Component({
  selector: 'app-letter-to-guess',
  templateUrl: './letter-to-guess.component.html',
  styleUrls: ['./letter-to-guess.component.scss']
})
export class LetterToGuessComponent implements OnInit{

  @Input() word: any;
  guessed:boolean = true;
  Letters:Array<String> = [];

  ngOnInit(): void { //Splits word into letters and saves into this.Letters
    console.log(this.word);

    for(let i = 0; i < this.word.length; i++){
      var letter = this.word.slice(i,i+1);
      this.Letters.push(letter);
    }
  }

  
}
