import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeerFooterComponent } from './deer-footer.component';

describe('DeerFooterComponent', () => {
  let component: DeerFooterComponent;
  let fixture: ComponentFixture<DeerFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeerFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeerFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
