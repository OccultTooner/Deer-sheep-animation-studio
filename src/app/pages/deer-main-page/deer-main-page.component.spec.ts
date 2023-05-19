import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeerMainPageComponent } from './deer-main-page.component';

describe('DeerMainPageComponent', () => {
  let component: DeerMainPageComponent;
  let fixture: ComponentFixture<DeerMainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeerMainPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeerMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
