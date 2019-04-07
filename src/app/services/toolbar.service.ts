import { Injectable } from '@angular/core';

import { ToolbarType } from '../enums/toolbar-type.enum';

import { ToolbarConfig } from '../interfaces/ToolbarConfig';
import { trigger } from '@angular/animations';

@Injectable()
export class ToolbarService {
    private title:string;
    private type:ToolbarType;
    private typeCallback:(config:ToolbarConfig) => any;

    constructor() { }

    subscribeType(callback:(config:ToolbarConfig) => any) {
        this.typeCallback = callback;
    }

    setTitle(title:string) {
        this.title = title;
        this.triggerCallback();
    }

    setToolbarType(type:ToolbarType) {
        this.type = type;
        this.triggerCallback();
    }

    private triggerCallback() {
        if (this.typeCallback != null) {
            var config: ToolbarConfig = {
                title:this.title,
                type:this.type
            };
            this.typeCallback(config);
        }
    }
}
