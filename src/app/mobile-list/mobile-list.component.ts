import { Component, OnInit } from '@angular/core';
import { Mobile, mobileList } from './mobile-list';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ManageMobileModalComponent } from './manage-mobile-modal/manage-mobile-modal.component';
import { DeleteMobileModalComponent } from './delete-mobile-modal/delete-mobile-modal.component';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { Options } from '@angular-slider/ngx-slider';

@Component({
  selector: 'app-mobile-list',
  templateUrl: './mobile-list.component.html',
  styleUrls: ['./mobile-list.component.scss'],
})
export class MobileListComponent implements OnInit {
  sortDirmake = 1; //1= 'ASE' -1= DSC
  sortDirmodel = 1;
  sortDircolor = 1;
  sortDirprice = 1;

  // Price Slider
  value = 15000;
  highValue = 750;
  options: Options = {
    floor: 1000,
    ceil: 250000,
  };

  brandSelected = ''
  colorSelected = ''



  searchTerm = '';
  q = 1;
  mobileList: any[];
  constructor(
    private modalService: NgbModal,
    private authService: AuthService,
    private router: Router
  ) {
    this.mobileList = [...mobileList];
  }

  ngOnInit(): void {
    // this.options.ceil = 50000;
    this.buildfilter();
  }

  setMinMax() {
    // setTimeout(() => {
    //   this.options.floor = Math.min(
    //     ...this.mobileList.map((item) => item.price)
    //   );
    //   this.options.ceil = Math.max(
    //     ...this.mobileList.map((item) => item.price)
    //   );
    // }, 10);
  }

  onSort(event: any) {}

  manageMobile(id: number, mobile: any) {
    debugger;
    const modalRef = this.modalService.open(ManageMobileModalComponent, {
      beforeDismiss: () => {
        return false;
      },
    });
    modalRef.componentInstance.id = id;
    modalRef.componentInstance.mobile = mobile;

    modalRef.componentInstance.outMobile.subscribe((res) => {
      if (id > 0) {
        let findIndex = this.mobileList.findIndex((item) => item.id == id);
        if (findIndex > -1) {
          this.mobileList[findIndex] = res;
          this.buildfilter();

        }
      } else {
        let mobile = { ...res };
        let temp = 0;
        this.mobileList.forEach((item) => {
          if (temp < item.id) {
            temp = item.id;
          }
        });
        mobile.id = temp;
        debugger;
        this.mobileList.push(mobile);
        this.buildfilter();

      }
    });
  }

  deleteMobile(id: number, i: number) {
    const modalRef = this.modalService.open(DeleteMobileModalComponent, {
      beforeDismiss: () => {
        return false;
      },
    });
    modalRef.componentInstance.id = id;
    modalRef.result.then(
      (result) => {
        if (result === 'close') {
          // let findIndex = this.mobileList.findIndex((item) => item.id == id);
          // if (findIndex > -1) {
          this.mobileList.splice(i, 1);
          this.buildfilter();

          // }
        }
      },
      () => {}
    );
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/auth/login']);
  }

  makeList = [];
  colorList = [];

  buildfilter() {
    this.makeList = [
      ...new Map(this.mobileList.map((m) => [m.make, m])).values(),
    ];

    this.colorList = [
      ...new Map(this.mobileList.map((m) => [m.color, m])).values(),
    ];
  }

  sortList(key: string, order = 'asc') {
    // this.mobileList = this.mobileList.sort(function compare(a, b) {
    //   return a - b;
    // });

    if (this['sortDir' + key] == 1) {
      this['sortDir' + key] = -1;
    } else {
      this['sortDir' + key] = 1;
    }

    // this.mobileList = this.mobileList.sort((p1, p2) =>
    //   p1[key] < p2[key] ? 1 : p1[key] > p2[key] ? -1 : 0
    // );
    if (key != 'price') {
      this.mobileList.sort((a, b) => {
        a = a[key].toLowerCase();
        b = b[key].toLowerCase();
        return a.localeCompare(b) * this['sortDir' + key];
      });
    } else {
      //price sort

      if (this['sortDir' + key] == 1) {
        this.mobileList.sort((a, b) => {
          return a.price - b.price;
        });
      } else {
        this.mobileList.sort((a, b) => {
          return b.price - a.price;
        });
      }
    }
  }
}
