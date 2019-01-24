import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  totalItems = 64;
  currentPage = 4;
  smallnumPages = 0;

  maxSize = 5;
  bigTotalItems = 675;
  bigCurrentPage = 1;
  numPages = 0;

  currentPager = 4;

  constructor() { }

  ngOnInit() {
  }

  setPage(pageNo: number): void {
    this.currentPage = pageNo;
  }

  pageChanged(event: { page: number, itemsPerPage: number }): void {
    console.log('Page changed to: ' + event.page);
    console.log('Number items per page: ' + event.itemsPerPage);
  }

}
