import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordToGuessComponent } from './word-to-guess.component';

describe('WordToGuessComponent', () => {
  let component: WordToGuessComponent;
  let fixture: ComponentFixture<WordToGuessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WordToGuessComponent]
    });
    fixture = TestBed.createComponent(WordToGuessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
