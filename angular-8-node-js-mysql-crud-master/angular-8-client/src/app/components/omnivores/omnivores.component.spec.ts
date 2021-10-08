import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OmnivoresComponent } from './omnivores.component';

describe('OmnivoresComponent', () => {
  let component: OmnivoresComponent;
  let fixture: ComponentFixture<OmnivoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OmnivoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OmnivoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
