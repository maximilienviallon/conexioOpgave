import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandingBannerComponent } from './branding-banner.component';

describe('BrandingBannerComponent', () => {
  let component: BrandingBannerComponent;
  let fixture: ComponentFixture<BrandingBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrandingBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandingBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
