import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

export class Mobile {
  id: number;
  make: string;
  model: string;
  color: string;
  price: number;
  constructor() {
    this.id = 0;
    this.make = '';
    this.model = '';
    this.color = '';
    this.price = 0;
  }
}

@Component({
  selector: 'app-manage-mobile-modal',
  templateUrl: './manage-mobile-modal.component.html',
  styleUrls: ['./manage-mobile-modal.component.scss'],
})
export class ManageMobileModalComponent implements OnInit {
  @Input() mobile: any;
  @Input() id: number;
  @Output() outMobile = new EventEmitter<any>();

  mobileForm: FormGroup;

  mobileObj: Mobile;

  constructor(public modal: NgbActiveModal, private fb: FormBuilder) {}

  ngOnInit(): void {
    if (this.id > 0) {
      this.mobileObj = new Mobile();
      this.mobileObj = this.mobile;
      this.loadForm();
    } else {
      this.mobileObj = new Mobile();
      this.loadForm();
    }
  }

  loadForm() {
    this.mobileForm = this.fb.group({
      id: [this.mobileObj.id],
      make: [this.mobileObj.make],
      model: [this.mobileObj.model],
      color: [this.mobileObj.color],
      price: [this.mobileObj.price],
    });
  }

  update() {
    this.modal.close('close');
    this.outMobile.emit(this.mobileForm.value);
  }
}
