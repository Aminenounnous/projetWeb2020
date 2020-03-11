import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardActualiteComponent } from './card-actualite.component';

describe('CardActualiteComponent', () => {
  let component: CardActualiteComponent;
  let fixture: ComponentFixture<CardActualiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardActualiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardActualiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
