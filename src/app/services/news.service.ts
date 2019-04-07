import { Injectable } from '@angular/core';
import { NewsItemDto } from '../interfaces/news-item-dto';

@Injectable()
export class NewsService {
    private newsFeed:NewsItemDto[];
    private newsMap:Map<string,NewsItemDto>;

    constructor() {
        this.newsFeed = [{
            id: '1234567890',
            date: '2016-05-02T17:25:25-03:00',
            title: 'Sucateamento do SUS? A ameaça de corte no gasto obrigatório com saúde',
            summary: 'Proposta que avança no Senado quer permitir que Estados e municípios possam usar livremente 25% do valor obrigatório que têm de gastar em saúde; PMDB estuda acabar de vez com gasto mínimo em saúde e educação.',
            link: 'http://www.bbc.com/portuguese/brasil/2016/05/160517_desvinculacao_saude_ab',
            img: 'http://a.files.bbci.co.uk/worldservice/live/assets/images/2016/05/16/160516034025_sp_montagem_144x81_ag.brasil_nocredit.jpg'
        }, {
            id: '1234567891',
            date: '2016-05-16T20:08:54-03:00',
            title: 'Aliados de Dilma e Temer travam \'guerra de versões\' em Portugal',
            summary: 'Parlamentares favoráveis e contrários ao impeachment aproveitam encontro em Lisboa para tentar influenciar opinião da comunidade internacional.',
            link: 'http://www.bbc.com/portuguese/brasil/2016/05/160516_dilma_temer_lisboa_mfl',
            img: 'http://a.files.bbci.co.uk/worldservice/live/assets/images/2016/05/16/160516211904_debates_lisboa_144x81_mamedefilho_nocredit.jpg'
        }, {
            id: '1234567892',
            date: '2016-05-16T11:29:40-03:00',
            title: 'As impressionantes imagens do maior mirante transparente do mundo',
            summary: 'Corredor suspenso a uma altura de 400 metros sobre vale na China suporta até 1,9 mil pessoas.',
            link: 'http://www.bbc.com/portuguese/curiosidades/2016/05/160516_mirante_transparente_lab',
            img: 'http://a.files.bbci.co.uk/worldservice/live/assets/images/2016/05/16/160516144610_plataforma_144x81_getty_nocredit.jpg'
        }, {
            id: '1234567893',
            date: '2016-05-16T10:15:09-03:00',
            title: 'A cena musical erótica por trás de picada mortal de cobra na Indonésia',
            summary: 'Para se destacar e ganhar mais gorjetas, mulheres acabam fazendo apresentações inusitadas e perigosas; cantora morreu após acidente em performance no mês passado.',
            link: 'http://www.bbc.com/portuguese/geral/2016/05/160516_indonesia_cobra_lab',
            img: 'http://a.files.bbci.co.uk/worldservice/live/assets/images/2016/05/16/160516135836_danca_144x81_bbc_nocredit.jpg'
        }] as NewsItemDto[];

        this.newsMap = new Map<string,NewsItemDto>();
        this.newsFeed.forEach(element => {
            this.newsMap.set(element.id, element);
        });
    }

    getItem(id:string) {
        return this.newsMap.get(id);
    }

    getItems() {
        return this.newsFeed;
    }
}
