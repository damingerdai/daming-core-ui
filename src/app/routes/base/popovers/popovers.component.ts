import { Component, OnInit, SecurityContext } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-popovers',
  templateUrl: './popovers.component.html',
  styleUrls: ['./popovers.component.scss']
})
export class PopoversComponent implements OnInit {

  title = 'Welcome word';
  content = 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.';
  html = `<span class="btn btn-warning">Never trust not sanitized <code>HTML</code>!!!</span>`;

  constructor(sanitizer: DomSanitizer) {
    this.html = sanitizer.sanitize(SecurityContext.HTML, this.html);
  }

  ngOnInit() {
  }

}
