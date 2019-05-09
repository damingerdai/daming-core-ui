import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-collapses',
	templateUrl: './collapses.component.html',
	styleUrls: ['./collapses.component.scss']
})
export class CollapsesComponent implements OnInit {

	isCollapsed = false;

	constructor() { }

	collapsed(event: any): void {
		// console.log(event);
	}

	expanded(event: any): void {
		// console.log(event);
	}

	ngOnInit() {
	}

}
