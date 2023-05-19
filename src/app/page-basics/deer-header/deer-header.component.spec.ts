import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeerHeaderComponent } from './deer-header.component';

describe('DeerHeaderComponent', () => {
  let component: DeerHeaderComponent;
  let fixture: ComponentFixture<DeerHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeerHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeerHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
