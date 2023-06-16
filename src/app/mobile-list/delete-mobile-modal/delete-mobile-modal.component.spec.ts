import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteMobileModalComponent } from './delete-mobile-modal.component';

describe('DeleteMobileModalComponent', () => {
  let component: DeleteMobileModalComponent;
  let fixture: ComponentFixture<DeleteMobileModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteMobileModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteMobileModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
