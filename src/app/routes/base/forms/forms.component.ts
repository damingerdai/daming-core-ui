import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-forms',
	templateUrl: './forms.component.html',
	styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

	isCollapsed = false;
	iconCollapse = 'icon-arrow-up';

	constructor() { }

	collapsed(event: any): void {
		console.log(event);
	}

	expanded(event: any): void {
		console.log(event);
	}

	toggleCollapse(): void {
		this.isCollapsed = !this.isCollapsed;
		this.iconCollapse = this.isCollapsed ? 'icon-arrow-down' : 'icon-arrow-up';
	}

	ngOnInit() {
	}

}
