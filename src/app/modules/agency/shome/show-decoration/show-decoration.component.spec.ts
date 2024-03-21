import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDecorationComponent } from './show-decoration.component';

describe('ShowDecorationComponent', () => {
  let component: ShowDecorationComponent;
  let fixture: ComponentFixture<ShowDecorationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowDecorationComponent]
    });
    fixture = TestBed.createComponent(ShowDecorationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
