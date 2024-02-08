import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainhomeapgeComponent } from './mainhomeapge.component';

describe('MainhomeapgeComponent', () => {
  let component: MainhomeapgeComponent;
  let fixture: ComponentFixture<MainhomeapgeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainhomeapgeComponent]
    });
    fixture = TestBed.createComponent(MainhomeapgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
