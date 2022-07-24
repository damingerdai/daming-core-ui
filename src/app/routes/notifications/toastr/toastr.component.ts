import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ToasterService, ToasterConfig } from 'angular-toaster';

@Component({
	selector: 'app-toastr',
	templateUrl: './toastr.component.html',
	styleUrls: ['./toastr.component.scss']
})
export class ToastrComponent implements OnInit {

	config: ToasterConfig =
		new ToasterConfig({
			showCloseButton: true,
			tapToDismiss: false,
			timeout: 0
		});

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

	showSuccess2() {
		this.toasterService.pop({
			type: 'success',
			title: 'Hello world!',
			body: 'Toastr fun!',
			timeout: 10000
		});
	}

	showWarn2() {
		this.toasterService.pop({
			type: 'warning',
			title: 'Hello world!',
			body: 'Toastr fun!',
			timeout: 10000
		});
	}

	showDanger2() {
		this.toasterService.pop({
			type: 'error',
			title: 'Hello world!',
			body: 'Toastr fun!',
			timeout: 10000
		});
	}

	showInfo2() {
		this.toasterService.pop({
			type: 'info',
			title: 'Hello world!',
			body: 'Toastr fun!',
			timeout: 10000
		});
	}

	ngOnInit() {
	}

}
