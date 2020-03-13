import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-table-row',
  template: `
    <table class="table">
      <tr class="row" (click)="onClick(item)">
        <td class="col-md-1">{{counter}}</td>
        <td class="col-md-3">{{item.code}}</td>
        <td class="col-md-3">{{item.currency}}</td>
        <td class="col-md-3">{{item.mid}}</td>
      </tr>
    </table>
  `
})
export class TableRowComponent implements OnInit {

  @Input()
  item;
  @Input()
  counter: number;
  @Output()
  onClickItem = new EventEmitter();

  constructor() {

  }

  ngOnInit(): void {
    this.counter++;
    console.log(this.item.code);
  }

  onClick(item: any) {
    console.log(item);
    this.onClickItem.emit(item);

  }
}
