import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageMobileModalComponent } from './manage-mobile-modal.component';

describe('ManageMobileModalComponent', () => {
  let component: ManageMobileModalComponent;
  let fixture: ComponentFixture<ManageMobileModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageMobileModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageMobileModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
