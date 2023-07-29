import { Component, OnInit } from '@angular/core';
import { GameLogicService } from './game-logic.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'WikipediaHangman';

  constructor(private Game:GameLogicService){}

  ngOnInit(): void {
    this.Game.getRandomPage();      // Enable to trigger API call



  }


}
