import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { faExclamationTriangle, faInfoCircle, faTimes } from '@fortawesome/free-solid-svg-icons';

enum DialogType {
  delete = 'delete',
  error = 'error',
  message = 'message'
}

@Component({
  selector: 'lib-dialog-component',
  templateUrl: './lib-dialog.component.html',
  styles: [
    `.modal {
      display: flex !important;
      justify-content: center;
      align-items: center;
      background: rgba(0,0,0,.85);
    }
    `
  ]
})
export class LibDialogComponent implements OnInit {
  @Input() showDialog: boolean;
  @Input() title: string;
  @Input() content: string;
  @Input() type: DialogType;
  @Input() disableCancel: boolean;
  @Output() dialogChange: EventEmitter<string> = new EventEmitter();

  icon = {
    alert: faExclamationTriangle,
    error: faExclamationTriangle,
    info: faInfoCircle,
    close: faTimes,
  };

  constructor() {}

  ngOnInit() {
  }

  click(value: string) {
    this.dialogChange.emit(value);
  }
}
