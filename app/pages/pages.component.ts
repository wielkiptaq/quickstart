import { Component, OnInit } from '@angular/core';
import {DataTable} from 'primeng/primeng';
import {Column} from 'primeng/primeng';

import {Page} from './page';
import {PageService} from './page.service';


@Component({
    selector: 'pages',
    templateUrl: 'app/pages/pages.component.html',
    directives: [DataTable, Column]
})

export class PagesComponent implements OnInit  {
    private title = 'Pages';

    pages: Page[];

    constructor(private pageService: PageService) { }

    ngOnInit() {
        this.pageService.getPages().then(pages => this.pages = pages);
    }
}
