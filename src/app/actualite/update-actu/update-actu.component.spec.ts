import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateActuComponent } from './update-actu.component';

describe('UpdateActuComponent', () => {
  let component: UpdateActuComponent;
  let fixture: ComponentFixture<UpdateActuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateActuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateActuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
