import { Injectable } from '@angular/core';

import { ToolbarType } from '../enums/toolbar-type.enum';

@Injectable()
export class ToolbarService {
    private type:ToolbarType;
    private typeCallback:(t:ToolbarType) => any;

    constructor() { }

    subscribeType(callback:(t:ToolbarType) => any) {
        this.typeCallback = callback;
    }

    setToolbarType(type:ToolbarType) {
        this.type = type;
        if (this.typeCallback != null) {
            this.typeCallback(this.type);
        }
    }

}
