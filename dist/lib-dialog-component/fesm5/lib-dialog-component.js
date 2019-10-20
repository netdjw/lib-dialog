import { __decorate } from 'tslib';
import { EventEmitter, Input, Output, Component, NgModule } from '@angular/core';
import { faExclamationTriangle, faInfoCircle, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';

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
    __decorate([
        Input()
    ], LibDialogComponent.prototype, "showDialog", void 0);
    __decorate([
        Input()
    ], LibDialogComponent.prototype, "title", void 0);
    __decorate([
        Input()
    ], LibDialogComponent.prototype, "content", void 0);
    __decorate([
        Input()
    ], LibDialogComponent.prototype, "type", void 0);
    __decorate([
        Input()
    ], LibDialogComponent.prototype, "disableCancel", void 0);
    __decorate([
        Output()
    ], LibDialogComponent.prototype, "dialogChange", void 0);
    LibDialogComponent = __decorate([
        Component({
            selector: 'lib-dialog-component',
            template: "<div class=\"modal\" tabindex=\"-1\" role=\"dialog\" *ngIf=\"showDialog\" aria-hidden=\"false\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\">{{ title }}</h5>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" i18n-aria-label=\"@@close\" aria-label=\"Close\"\r\n          (click)=\"click('canel')\">\r\n          <fa-icon [icon]=\"icon.close\"></fa-icon>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body d-flex\">\r\n        <div class=\"icon-container\"\r\n          [ngClass]=\"{'text-success': type === 'message', 'text-danger': type === 'error' || type === 'delete'}\">\r\n          <div *ngIf=\"type === 'delete'\">\r\n            <fa-icon [icon]=\"icon.alert\"></fa-icon>\r\n          </div>\r\n          <div *ngIf=\"type === 'error'\">\r\n            <fa-icon [icon]=\"icon.error\"></fa-icon>\r\n          </div>\r\n          <div *ngIf=\"type === 'message'\">\r\n            <fa-icon [icon]=\"icon.info\"></fa-icon>\r\n          </div>\r\n        </div>\r\n        <div class=\"content-container px-3\">\r\n          <p>{{ content }}</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn\"\r\n          [ngClass]=\"{'btn-success': type === 'message', 'btn-primary': type === 'error', 'btn-danger': type === 'delete'}\"\r\n          (click)=\"click('ok')\">\r\n            <span *ngIf=\"type === 'message'\" i18n=\"@@ok\">OK</span>\r\n            <span *ngIf=\"type === 'error'\" i18n=\"@@close\">Close</span>\r\n            <span *ngIf=\"type === 'delete'\" i18n=\"@@delete\">Delete</span>\r\n        </button>\r\n        <button type=\"button\" class=\"btn btn-secondary\"\r\n          *ngIf=\"!disableCancel || type === 'delete'\"\r\n          (click)=\"click('cancel')\" i18n=\"@@cancel\">\r\n            Cancel\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n",
            styles: [".modal {\n      display: flex !important;\n      justify-content: center;\n      align-items: center;\n      background: rgba(0,0,0,.85);\n    }\n    "]
        })
    ], LibDialogComponent);
    return LibDialogComponent;
}());

var LibDialogModule = /** @class */ (function () {
    function LibDialogModule() {
    }
    LibDialogModule = __decorate([
        NgModule({
            declarations: [
                LibDialogComponent
            ],
            imports: [
                CommonModule,
                FontAwesomeModule,
            ],
            exports: [LibDialogComponent]
        })
    ], LibDialogModule);
    return LibDialogModule;
}());

/*
 * Public API Surface of lib-dialog
 */

/**
 * Generated bundle index. Do not edit.
 */

export { LibDialogComponent, LibDialogModule };
//# sourceMappingURL=lib-dialog-component.js.map
