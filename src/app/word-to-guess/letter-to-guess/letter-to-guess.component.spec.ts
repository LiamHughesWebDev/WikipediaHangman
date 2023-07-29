import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetterToGuessComponent } from './letter-to-guess.component';

describe('LetterToGuessComponent', () => {
  let component: LetterToGuessComponent;
  let fixture: ComponentFixture<LetterToGuessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LetterToGuessComponent]
    });
    fixture = TestBed.createComponent(LetterToGuessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
