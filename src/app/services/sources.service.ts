import { Injectable } from '@angular/core';
import { SourceDto } from '../interfaces/SourceDto';

@Injectable()
export class SourcesService {
private sources:SourceDto[];

    constructor() {
        this.sources = [];
    }

    add(url:string) {
        var s : SourceDto = {} as any;
        s.url = url;
        this.sources.push(s);
    }

    getAll() {
        return this.sources.slice();
    }

}
