import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileBeerCardComponent } from './mobile-beer-card.component';

describe('MobileBeerCardComponent', () => {
  let component: MobileBeerCardComponent;
  let fixture: ComponentFixture<MobileBeerCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileBeerCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileBeerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
