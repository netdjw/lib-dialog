import * as tslib_1 from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faExclamationTriangle, faInfoCircle, faTimes } from '@fortawesome/free-solid-svg-icons';
var DialogType;
(function (DialogType) {
    DialogType["delete"] = "delete";
    DialogType["error"] = "error";
    DialogType["message"] = "message";
})(DialogType || (DialogType = {}));
let LibDialogComponent = class LibDialogComponent {
    constructor() {
        this.dialogChange = new EventEmitter();
        this.icon = {
            alert: faExclamationTriangle,
            error: faExclamationTriangle,
            info: faInfoCircle,
            close: faTimes,
        };
    }
    ngOnInit() {
    }
    click(value) {
        this.dialogChange.emit(value);
    }
};
tslib_1.__decorate([
    Input()
], LibDialogComponent.prototype, "showDialog", void 0);
tslib_1.__decorate([
    Input()
], LibDialogComponent.prototype, "title", void 0);
tslib_1.__decorate([
    Input()
], LibDialogComponent.prototype, "content", void 0);
tslib_1.__decorate([
    Input()
], LibDialogComponent.prototype, "type", void 0);
tslib_1.__decorate([
    Input()
], LibDialogComponent.prototype, "disableCancel", void 0);
tslib_1.__decorate([
    Output()
], LibDialogComponent.prototype, "dialogChange", void 0);
LibDialogComponent = tslib_1.__decorate([
    Component({
        selector: 'lib-dialog-component',
        template: "<div class=\"modal\" tabindex=\"-1\" role=\"dialog\" *ngIf=\"showDialog\" aria-hidden=\"false\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\">{{ title }}</h5>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" i18n-aria-label=\"@@close\" aria-label=\"Close\"\r\n          (click)=\"click('canel')\">\r\n          <fa-icon [icon]=\"icon.close\"></fa-icon>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body d-flex\">\r\n        <div class=\"icon-container\"\r\n          [ngClass]=\"{'text-success': type === 'message', 'text-danger': type === 'error' || type === 'delete'}\">\r\n          <div *ngIf=\"type === 'delete'\">\r\n            <fa-icon [icon]=\"icon.alert\"></fa-icon>\r\n          </div>\r\n          <div *ngIf=\"type === 'error'\">\r\n            <fa-icon [icon]=\"icon.error\"></fa-icon>\r\n          </div>\r\n          <div *ngIf=\"type === 'message'\">\r\n            <fa-icon [icon]=\"icon.info\"></fa-icon>\r\n          </div>\r\n        </div>\r\n        <div class=\"content-container px-3\">\r\n          <p>{{ content }}</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn\"\r\n          [ngClass]=\"{'btn-success': type === 'message', 'btn-primary': type === 'error', 'btn-danger': type === 'delete'}\"\r\n          (click)=\"click('ok')\">\r\n            <span *ngIf=\"type === 'message'\" i18n=\"@@ok\">OK</span>\r\n            <span *ngIf=\"type === 'error'\" i18n=\"@@close\">Close</span>\r\n            <span *ngIf=\"type === 'delete'\" i18n=\"@@delete\">Delete</span>\r\n        </button>\r\n        <button type=\"button\" class=\"btn btn-secondary\"\r\n          *ngIf=\"!disableCancel || type === 'delete'\"\r\n          (click)=\"click('cancel')\" i18n=\"@@cancel\">\r\n            Cancel\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n",
        styles: [`.modal {
      display: flex !important;
      justify-content: center;
      align-items: center;
      background: rgba(0,0,0,.85);
    }
    `]
    })
], LibDialogComponent);
export { LibDialogComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGliLWRpYWxvZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9saWItZGlhbG9nLWNvbXBvbmVudC8iLCJzb3VyY2VzIjpbImxpYi9saWItZGlhbG9nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsWUFBWSxFQUFFLE9BQU8sRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBRWpHLElBQUssVUFJSjtBQUpELFdBQUssVUFBVTtJQUNiLCtCQUFpQixDQUFBO0lBQ2pCLDZCQUFlLENBQUE7SUFDZixpQ0FBbUIsQ0FBQTtBQUNyQixDQUFDLEVBSkksVUFBVSxLQUFWLFVBQVUsUUFJZDtBQWVELElBQWEsa0JBQWtCLEdBQS9CLE1BQWEsa0JBQWtCO0lBZTdCO1FBVFUsaUJBQVksR0FBeUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUVsRSxTQUFJLEdBQUc7WUFDTCxLQUFLLEVBQUUscUJBQXFCO1lBQzVCLEtBQUssRUFBRSxxQkFBcUI7WUFDNUIsSUFBSSxFQUFFLFlBQVk7WUFDbEIsS0FBSyxFQUFFLE9BQU87U0FDZixDQUFDO0lBRWEsQ0FBQztJQUVoQixRQUFRO0lBQ1IsQ0FBQztJQUVELEtBQUssQ0FBQyxLQUFhO1FBQ2pCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2hDLENBQUM7Q0FDRixDQUFBO0FBdEJVO0lBQVIsS0FBSyxFQUFFO3NEQUFxQjtBQUNwQjtJQUFSLEtBQUssRUFBRTtpREFBZTtBQUNkO0lBQVIsS0FBSyxFQUFFO21EQUFpQjtBQUNoQjtJQUFSLEtBQUssRUFBRTtnREFBa0I7QUFDakI7SUFBUixLQUFLLEVBQUU7eURBQXdCO0FBQ3RCO0lBQVQsTUFBTSxFQUFFO3dEQUF5RDtBQU52RCxrQkFBa0I7SUFiOUIsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLHNCQUFzQjtRQUNoQyw0L0RBQTBDO2lCQUV4Qzs7Ozs7O0tBTUM7S0FFSixDQUFDO0dBQ1csa0JBQWtCLENBdUI5QjtTQXZCWSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBmYUV4Y2xhbWF0aW9uVHJpYW5nbGUsIGZhSW5mb0NpcmNsZSwgZmFUaW1lcyB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucyc7XG5cbmVudW0gRGlhbG9nVHlwZSB7XG4gIGRlbGV0ZSA9ICdkZWxldGUnLFxuICBlcnJvciA9ICdlcnJvcicsXG4gIG1lc3NhZ2UgPSAnbWVzc2FnZSdcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLWRpYWxvZy1jb21wb25lbnQnLFxuICB0ZW1wbGF0ZVVybDogJy4vbGliLWRpYWxvZy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlczogW1xuICAgIGAubW9kYWwge1xuICAgICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwuODUpO1xuICAgIH1cbiAgICBgXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTGliRGlhbG9nQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgc2hvd0RpYWxvZzogYm9vbGVhbjtcbiAgQElucHV0KCkgdGl0bGU6IHN0cmluZztcbiAgQElucHV0KCkgY29udGVudDogc3RyaW5nO1xuICBASW5wdXQoKSB0eXBlOiBEaWFsb2dUeXBlO1xuICBASW5wdXQoKSBkaXNhYmxlQ2FuY2VsOiBib29sZWFuO1xuICBAT3V0cHV0KCkgZGlhbG9nQ2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBpY29uID0ge1xuICAgIGFsZXJ0OiBmYUV4Y2xhbWF0aW9uVHJpYW5nbGUsXG4gICAgZXJyb3I6IGZhRXhjbGFtYXRpb25UcmlhbmdsZSxcbiAgICBpbmZvOiBmYUluZm9DaXJjbGUsXG4gICAgY2xvc2U6IGZhVGltZXMsXG4gIH07XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgY2xpY2sodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuZGlhbG9nQ2hhbmdlLmVtaXQodmFsdWUpO1xuICB9XG59XG4iXX0=