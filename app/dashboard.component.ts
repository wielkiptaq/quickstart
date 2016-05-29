import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';

import { Page } from './pages/page';
import { PageService } from './pages/page.service';


@Component({
  selector: 'my-dashboard',
  templateUrl: 'app/dashboard.component.html',
  styleUrls: ['app/dashboard.component.css']
})
export class DashboardComponent implements OnInit {
	pages: Page[] = [];
	constructor(
		private router: Router,
		private pageService: PageService) { 
	}
	ngOnInit() {
		this.pageService.getPages()
			.then(pages => this.pages = pages);
	}
}
