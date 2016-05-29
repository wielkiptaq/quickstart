import { Component, OnInit } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Router } from '@angular/router-deprecated';
import { DashboardComponent }  from './dashboard.component';
import { HeroesComponent }     from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';
import { PagesComponent } from './pages/pages.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SliderComponent } from './slider/slider.component';
import { HeroService }         from './hero.service';
import { PageService }         from './pages/page.service';
import { Menu }      from 'primeng/primeng';
import { MenuItem }      from 'primeng/components/api/menumodel';

@Component({
  selector: 'my-app',
  template: `
    
    <div class="ui-grid ui-grid-responsive">
      <div class="ui-grid-row">
          <div class="ui-grid-col-2">     
            <p-menu [model]="items"></p-menu>
          </div>
          <div class="ui-grid-col-10">
            <router-outlet></router-outlet>
          </div>
      </div>
  </div>
  `,
  styleUrls: ['app/app.component.css'],
  directives: [ROUTER_DIRECTIVES, Menu],
  providers: [
    ROUTER_PROVIDERS,
    HeroService,
    PageService
  ]
})
@RouteConfig([
  { path: '/dashboard', name: 'Dashboard', component: DashboardComponent, useAsDefault: true },
  { path: '/detail/:id', name: 'HeroDetail', component: HeroDetailComponent },
  { path: '/heroes', name: 'Heroes', component: HeroesComponent },
  { path: '/pages', name: 'Pages', component: PagesComponent },
  { path: '/navigation', name: 'Navigation', component: NavigationComponent },
  { path: '/contact-form', name: 'ContactForm', component: ContactFormComponent },
  { path: '/slider', name: 'Slider', component: SliderComponent },
])
export class AppComponent implements OnInit {
  title = 'Tour of Heroes';

  private items: MenuItem[];
  constructor(
      private _router: Router)
  {}

  ngOnInit(){
    this.items = [{
      label: 'Menu',
      items: [
        {label: 'Dashboard', command: (event) =>
          {
            this._router.navigate(['Dashboard']);
          }
        },
        {label: 'Pages', command: (event) =>
          {
            this._router.navigate(['Pages']);
          }
        },
        {label: 'Navigation', command: (event) =>
          {
            this._router.navigate(['Navigation']);
          }
        },
        {label: 'Contact Form', command: (event) =>
          {
            this._router.navigate(['ContactForm']);
          }
        },
        {label: 'Slider', command: (event) =>
          {
            this._router.navigate(['Slider']);
          }
        },
      ]
    }]
  }

};
