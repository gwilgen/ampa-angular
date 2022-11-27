import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OMRComponent } from './omr.component';

describe('OMRComponent', () => {
  let component: OMRComponent;
  let fixture: ComponentFixture<OMRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OMRComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OMRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
