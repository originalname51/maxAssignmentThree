import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HiddenButtonComponent } from './hidden-button.component';

describe('HiddenButtonComponent', () => {
  let component: HiddenButtonComponent;
  let fixture: ComponentFixture<HiddenButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HiddenButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HiddenButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
