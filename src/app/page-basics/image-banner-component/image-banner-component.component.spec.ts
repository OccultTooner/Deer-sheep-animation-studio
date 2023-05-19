import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageBannerComponentComponent } from './image-banner-component.component';

describe('ImageBannerComponentComponent', () => {
  let component: ImageBannerComponentComponent;
  let fixture: ComponentFixture<ImageBannerComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageBannerComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageBannerComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
