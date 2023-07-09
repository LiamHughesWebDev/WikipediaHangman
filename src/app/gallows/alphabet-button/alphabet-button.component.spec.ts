import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlphabetButtonComponent } from './alphabet-button.component';

describe('AlphabetButtonComponent', () => {
  let component: AlphabetButtonComponent;
  let fixture: ComponentFixture<AlphabetButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlphabetButtonComponent]
    });
    fixture = TestBed.createComponent(AlphabetButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
