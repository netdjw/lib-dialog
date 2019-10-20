import { OnInit, EventEmitter } from '@angular/core';
declare enum DialogType {
    delete = "delete",
    error = "error",
    message = "message"
}
export declare class LibDialogComponent implements OnInit {
    showDialog: boolean;
    title: string;
    content: string;
    type: DialogType;
    disableCancel: boolean;
    dialogChange: EventEmitter<string>;
    icon: {
        alert: import("@fortawesome/fontawesome-common-types").IconDefinition;
        error: import("@fortawesome/fontawesome-common-types").IconDefinition;
        info: import("@fortawesome/fontawesome-common-types").IconDefinition;
        close: import("@fortawesome/fontawesome-common-types").IconDefinition;
    };
    constructor();
    ngOnInit(): void;
    click(value: string): void;
}
export {};
