import * as tslib_1 from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faExclamationTriangle, faInfoCircle, faTimes } from '@fortawesome/free-solid-svg-icons';
var DialogType;
(function (DialogType) {
    DialogType["delete"] = "delete";
    DialogType["error"] = "error";
    DialogType["message"] = "message";
})(DialogType || (DialogType = {}));
var LibDialogComponent = /** @class */ (function () {
    function LibDialogComponent() {
        this.dialogChange = new EventEmitter();
        this.icon = {
            alert: faExclamationTriangle,
            error: faExclamationTriangle,
            info: faInfoCircle,
            close: faTimes,
        };
    }
    LibDialogComponent.prototype.ngOnInit = function () {
    };
    LibDialogComponent.prototype.click = function (value) {
        this.dialogChange.emit(value);
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
            styles: [".modal {\n      display: flex !important;\n      justify-content: center;\n      align-items: center;\n      background: rgba(0,0,0,.85);\n    }\n    "]
        })
    ], LibDialogComponent);
    return LibDialogComponent;
}());
export { LibDialogComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGliLWRpYWxvZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9saWItZGlhbG9nLWNvbXBvbmVudC8iLCJzb3VyY2VzIjpbImxpYi9saWItZGlhbG9nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsWUFBWSxFQUFFLE9BQU8sRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBRWpHLElBQUssVUFJSjtBQUpELFdBQUssVUFBVTtJQUNiLCtCQUFpQixDQUFBO0lBQ2pCLDZCQUFlLENBQUE7SUFDZixpQ0FBbUIsQ0FBQTtBQUNyQixDQUFDLEVBSkksVUFBVSxLQUFWLFVBQVUsUUFJZDtBQWVEO0lBZUU7UUFUVSxpQkFBWSxHQUF5QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRWxFLFNBQUksR0FBRztZQUNMLEtBQUssRUFBRSxxQkFBcUI7WUFDNUIsS0FBSyxFQUFFLHFCQUFxQjtZQUM1QixJQUFJLEVBQUUsWUFBWTtZQUNsQixLQUFLLEVBQUUsT0FBTztTQUNmLENBQUM7SUFFYSxDQUFDO0lBRWhCLHFDQUFRLEdBQVI7SUFDQSxDQUFDO0lBRUQsa0NBQUssR0FBTCxVQUFNLEtBQWE7UUFDakIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQXJCUTtRQUFSLEtBQUssRUFBRTswREFBcUI7SUFDcEI7UUFBUixLQUFLLEVBQUU7cURBQWU7SUFDZDtRQUFSLEtBQUssRUFBRTt1REFBaUI7SUFDaEI7UUFBUixLQUFLLEVBQUU7b0RBQWtCO0lBQ2pCO1FBQVIsS0FBSyxFQUFFOzZEQUF3QjtJQUN0QjtRQUFULE1BQU0sRUFBRTs0REFBeUQ7SUFOdkQsa0JBQWtCO1FBYjlCLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxzQkFBc0I7WUFDaEMsNC9EQUEwQztxQkFFeEMsd0pBTUM7U0FFSixDQUFDO09BQ1csa0JBQWtCLENBdUI5QjtJQUFELHlCQUFDO0NBQUEsQUF2QkQsSUF1QkM7U0F2Qlksa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZmFFeGNsYW1hdGlvblRyaWFuZ2xlLCBmYUluZm9DaXJjbGUsIGZhVGltZXMgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnO1xuXG5lbnVtIERpYWxvZ1R5cGUge1xuICBkZWxldGUgPSAnZGVsZXRlJyxcbiAgZXJyb3IgPSAnZXJyb3InLFxuICBtZXNzYWdlID0gJ21lc3NhZ2UnXG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1kaWFsb2ctY29tcG9uZW50JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2xpYi1kaWFsb2cuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZXM6IFtcbiAgICBgLm1vZGFsIHtcbiAgICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsLjg1KTtcbiAgICB9XG4gICAgYFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIExpYkRpYWxvZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIHNob3dEaWFsb2c6IGJvb2xlYW47XG4gIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGNvbnRlbnQ6IHN0cmluZztcbiAgQElucHV0KCkgdHlwZTogRGlhbG9nVHlwZTtcbiAgQElucHV0KCkgZGlzYWJsZUNhbmNlbDogYm9vbGVhbjtcbiAgQE91dHB1dCgpIGRpYWxvZ0NoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgaWNvbiA9IHtcbiAgICBhbGVydDogZmFFeGNsYW1hdGlvblRyaWFuZ2xlLFxuICAgIGVycm9yOiBmYUV4Y2xhbWF0aW9uVHJpYW5nbGUsXG4gICAgaW5mbzogZmFJbmZvQ2lyY2xlLFxuICAgIGNsb3NlOiBmYVRpbWVzLFxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIGNsaWNrKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLmRpYWxvZ0NoYW5nZS5lbWl0KHZhbHVlKTtcbiAgfVxufVxuIl19