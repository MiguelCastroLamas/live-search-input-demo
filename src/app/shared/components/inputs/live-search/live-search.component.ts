import { Component, Input, Output, EventEmitter, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-live-search-input',
  templateUrl: './live-search.component.html',
  styleUrls: ['./live-search.component.css']
})
export class LiveSearchComponent implements OnInit, OnChanges {
  @Input() id: string;
  @Input() label: string;
  @Input() value: string;
  @Input() placeholder: string;
  @Input() results: any[];
  @Input() loading: boolean;
  @Output() changeCallback = new EventEmitter<any>();
  @Output() selectedResultCallback = new EventEmitter<any>();
  inputId: string;

  constructor() {
    this.inputId = this.id ? `${this.id}_input` : 'live_search_input';
  }

  ngOnInit(): void { }

  ngOnChanges(): void { }

  onChangeInput(value): void {
    this.changeCallback.emit({ value });
  }

  onSelectedResult(result): void {
    const element = document.getElementById(this.inputId);
    if (element) {
      element.focus();
    }

    this.selectedResultCallback.emit(result);
  }

}
