import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-delete-mobile-modal',
  templateUrl: './delete-mobile-modal.component.html',
  styleUrls: ['./delete-mobile-modal.component.scss'],
})
export class DeleteMobileModalComponent implements OnInit {

  @Input() mobile: any;

  constructor(public modal: NgbActiveModal) {}

  ngOnInit(): void {}

  deleteMobile() {
    this.modal.close('close');
  }
}
