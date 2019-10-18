import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  page = 1;

  constructor() {}

  ngOnInit() {}

  nextPage() {
    this.page = this.page + 1;
  }

  previousPage() {
    this.page = this.page - 1;
  }
}
