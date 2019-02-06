import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ToasterService } from 'angular2-toaster';

@Component({
  selector: 'app-toastr',
  templateUrl: './toastr.component.html',
  styleUrls: ['./toastr.component.scss']
})
export class ToastrComponent implements OnInit {

  constructor(
    private toastr: ToastrService,
    private toasterService: ToasterService
  ) { }

  show(type: string) {
    this.toastr.info(type, 'Hello world!');
  }

  showPrimary() {
    this.toastr.show('Hello world!', 'Toastr fun!');
  }

  showSuccess() {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }

  showWarn() {
    this.toastr.warning('Hello world!', 'Toastr fun!');
  }

  showDanger() {
    this.toastr.error('Hello world!', 'Toastr fun!');
  }

  showInfo() {
    this.toastr.info('Hello world!', 'Toastr fun!');
  }

  ngOnInit() {
  }

}
