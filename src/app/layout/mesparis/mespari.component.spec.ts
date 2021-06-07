import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MespariComponent } from './mespari.component';

describe('MespariComponent', () => {
  let component: MespariComponent;
  let fixture: ComponentFixture<MespariComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MespariComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MespariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
