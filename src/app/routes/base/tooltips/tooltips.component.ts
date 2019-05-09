import { Component, OnInit, SecurityContext } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
	selector: 'app-tooltips',
	templateUrl: './tooltips.component.html',
	styleUrls: ['./tooltips.component.scss']
})
export class TooltipsComponent implements OnInit {

	content = 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.';
	html = `<span class="btn btn-danger">Never trust not sanitized HTML!!!</span>`;

	constructor(sanitizer: DomSanitizer) {
		this.html = sanitizer.sanitize(SecurityContext.HTML, this.html);
	}
	ngOnInit() {
	}

}
