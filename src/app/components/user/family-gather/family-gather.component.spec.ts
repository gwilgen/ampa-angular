import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilyGatherComponent } from './family-gather.component';

describe('FamilyGatherComponent', () => {
  let component: FamilyGatherComponent;
  let fixture: ComponentFixture<FamilyGatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FamilyGatherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FamilyGatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
