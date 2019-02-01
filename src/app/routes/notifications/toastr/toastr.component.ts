import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-toastr',
  templateUrl: './toastr.component.html',
  styleUrls: ['./toastr.component.scss']
})
export class ToastrComponent implements OnInit {

  constructor(
    private toastr: ToastrService
  ) { }

  showSuccess() {
    console.log('t');
    console.log(this.toastr);
    const result = this.toastr.info('success', 'Hello world!');
    this.toastr.success('Hello world!', 'Toastr fun!');
    console.log(result);
  }

  ngOnInit() {
  }

}
