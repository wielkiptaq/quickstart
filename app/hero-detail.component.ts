import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { RouteParams } from '@angular/router-deprecated';
import { Hero }        from './hero';
import { HeroService } from './hero.service';
import {InputText, Button} from 'primeng/primeng';

@Component({
	selector: 'my-hero-detail',
	templateUrl: 'app/hero-detail.component.html',
	styleUrls: ['app/hero-detail.component.css'],
  directives: [InputText, Button]
})
export class HeroDetailComponent implements OnInit {
	@Input() hero: Hero;
	@Output() close = new EventEmitter();
	error: any;
	navigated = false; // true if navigated here
	constructor(
		private _heroService: HeroService,
		private _routeParams: RouteParams) {
	}
	ngOnInit() {
		if (this._routeParams.get('id') !== null) {
			let id = +this._routeParams.get('id');
			this.navigated = true;
			this._heroService.getHero(id)
				.then(hero => this.hero = hero);
		} else {
			this.navigated = false;
			this.hero = new Hero();
		}
	}
	save() {
		this._heroService
			.save(this.hero)
			.then(hero => {
				this.hero = hero; // saved hero, w/ id if new
				this.goBack(hero);
			})
			.catch(error => this.error = error); // TODO: Display error message
	}
	goBack(savedHero: Hero = null) {
		this.close.emit(savedHero);
		if (this.navigated) { window.history.back(); }
	}
}
