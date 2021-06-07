import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GestionArticleComponent } from './gestion-article.component';

describe('GestionArticleComponent', () => {
  let component: GestionArticleComponent;
  let fixture: ComponentFixture<GestionArticleComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
