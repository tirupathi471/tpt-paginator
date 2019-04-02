import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'tpt-paginator',
  template: `
  <div class="paginator-container">
  <div class="center content">
    <div class="pagination">
      <a [ngClass]="{disabled:isFirstPage}" (click)="changePageToFirst()">&laquo;</a>
      <a [ngClass]="{disabled:isFirstPage}" (click)="moveToPreviousPage()">&lsaquo;</a>
      <a *ngFor="let link of  pageLinks" [ngClass]="{active:link-1===getPage()}" (click)="changePage(link-1)">{{link}}</a>
      <a [ngClass]="{disabled:isLastPage}" (click)="moveToNextPage()">&rsaquo;</a>
      <a [ngClass]="{disabled:isLastPage}" (click)="changePageToLast()">&raquo;</a>

    </div>
    <div class="info" id="example_info" role="status" aria-live="polite">Showing
      {{totalRecords>0?first+1:0}}
      to
      {{isLastPage?totalRecords:first+rows}} out of {{totalRecords}}
    </div>
  </div>
</div>
  `,
  styleUrls: ['./tpt-paginator.component.scss']
})
export class TptPaginatorComponent implements OnInit {

  @Input() noOfLinks = 5;

  // tslint:disable-next-line: no-output-on-prefix
  @Output() onPageChange: EventEmitter<any> = new EventEmitter();
  @Output() firstChange: EventEmitter<any> = new EventEmitter();
  @Input() get totalRecords(): number {
    return this._totalRecords;
  }

  set totalRecords(value: number) {
    this._totalRecords = value;
    this.calcPageLinks();
  }

  @Input() get rows(): number {
    return this._rows;
  }

  set rows(value: number) {
    this._rows = value;
    this.calcPageLinks();
  }
  @Input() get first(): number {
    return this._first;
  }

  set first(value: number) {
    // tslint:disable-next-line: no-bitwise
    this._first = value | 0;
    this.firstChange.emit(this._first);
    this.calcPageLinks();
  }

  pageLinks: number[];
  // tslint:disable-next-line: variable-name
  _totalRecords = 0;
  // tslint:disable-next-line: variable-name
  _rows = 10;
  // tslint:disable-next-line: variable-name
  _first = 0;
  state: any;

  constructor() { }

  ngOnInit() {
  }
  getPage(): number {
    return Math.floor(this.first / this.rows);
  }

  calcPageCount() {
    return Math.ceil(this.totalRecords / this.rows) || 1;
  }

  private calcPageLinkBoundaries() {
    const totalPages = this.calcPageCount();
    const visiblePages = Math.min(this.noOfLinks, totalPages);
    let startpage = Math.max(0, Math.ceil(this.getPage() - ((visiblePages) / 2)));
    const endpage = Math.min(totalPages - 1, startpage + visiblePages - 1);
    const delta = this.noOfLinks - (endpage - startpage + 1);
    startpage = Math.max(0, startpage - delta);

    return [startpage, endpage];
  }

  calcPageLinks() {
    this.pageLinks = [];
    const boundaries = this.calcPageLinkBoundaries();
    const startPage = boundaries[0];
    const endPage = boundaries[1];

    for (let i = startPage; i <= endPage; i++) {
      this.pageLinks.push(i + 1);
    }
  }
  get isFirstPage(): boolean {
    return this.getPage() === 0;
  }

  get isLastPage(): boolean {
    return this.getPage() === this.calcPageCount() - 1;
  }

  changePage(page: number) {
    const count = this.calcPageCount();
    if (page >= 0 && page < count) {
      this.first = this.rows * page;
      this.calcPageLinks();
      this.onPageChange.emit(this.getState());
    }
  }
  changePageToFirst() {
    this.changePage(0);
  }

  moveToPreviousPage() {
    this.changePage(this.getPage() - 1);
  }

  moveToNextPage() {
    this.changePage(this.getPage() + 1);
  }

  changePageToLast() {
    if (!this.isLastPage) {
      this.changePage(this.calcPageCount() - 1);
    }
  }
  private getState() {
    return {
      page: this.getPage(),
      totalRecords: this.totalRecords,
      rows: this.rows,
      first: this.first,
    };
  }

}
