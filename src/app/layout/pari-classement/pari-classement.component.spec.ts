import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PariClassementComponent } from './pari-classement.component';

describe('PariClassementComponent', () => {
  let component: PariClassementComponent;
  let fixture: ComponentFixture<PariClassementComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PariClassementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PariClassementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
