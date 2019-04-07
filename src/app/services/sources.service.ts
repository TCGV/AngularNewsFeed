import { Injectable } from '@angular/core';
import { SourceDto } from '../interfaces/source-dto';

@Injectable()
export class SourcesService {
private sources:SourceDto[];

    constructor() {
        this.sources = [{
            id: '1',
            url: 'https://feeds.folha.uol.com.br/opiniao/rss091.xml',
            title: 'Folha Opinião',
            icon: 'https://feeds.folha.uol.com.br/favicon.ico'
        }];
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
