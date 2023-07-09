import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerDescriptionComponent } from './answer-description.component';

describe('AnswerDescriptionComponent', () => {
  let component: AnswerDescriptionComponent;
  let fixture: ComponentFixture<AnswerDescriptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnswerDescriptionComponent]
    });
    fixture = TestBed.createComponent(AnswerDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
