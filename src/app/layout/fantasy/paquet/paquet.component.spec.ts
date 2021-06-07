import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PaquetComponent } from './paquet.component';

describe('PaquetComponent', () => {
  let component: PaquetComponent;
  let fixture: ComponentFixture<PaquetComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PaquetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaquetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
