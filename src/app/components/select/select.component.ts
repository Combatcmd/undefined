import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
})
export class SelectComponent {
  @Input('key') key: number | string;
  @Input('data') data: Array<any>;
  @Input('multy') multy: boolean;
  @Input('type') type: string;
  @Output() onSelectItem = new EventEmitter<any>();

  expanded: boolean;
  title: string;
  options: Array<any> = [];
  option: any;

  constructor() {}

  setOptionsHandler(value) {
    if (this.multy) {
      let code;
      value.checked = !value.checked;
      this.options = this.data.filter((item) => item['checked']);
      code = this.options.map((item) => item[this.key]);
      this.title = this.options.map((item) => item && item.ru).join(', ');
      this.onSelectItem.emit(code);
    } else {
      this.option = value;
      this.onSelectItem.emit(this.option[this.key]);
      this.toggleExpand();
    }
  }

  searchOptionsHandler(event) {}

  toggleExpand() {
    this.expanded = !this.expanded;
  }
}
