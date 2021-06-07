import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CartesComponent } from './cartes.component';

describe('CartesComponent', () => {
  let component: CartesComponent;
  let fixture: ComponentFixture<CartesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CartesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
