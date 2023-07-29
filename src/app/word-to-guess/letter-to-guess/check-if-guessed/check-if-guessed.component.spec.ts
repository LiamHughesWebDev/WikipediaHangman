import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckIfGuessedComponent } from './check-if-guessed.component';

describe('CheckIfGuessedComponent', () => {
  let component: CheckIfGuessedComponent;
  let fixture: ComponentFixture<CheckIfGuessedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CheckIfGuessedComponent]
    });
    fixture = TestBed.createComponent(CheckIfGuessedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
