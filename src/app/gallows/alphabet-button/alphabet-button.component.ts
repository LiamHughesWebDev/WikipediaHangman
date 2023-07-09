import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-alphabet-button',
  templateUrl: './alphabet-button.component.html',
  styleUrls: ['./alphabet-button.component.scss']
})
export class AlphabetButtonComponent implements OnInit{
  @Input() letter = "";

  ngOnInit(): void {
  }



}
