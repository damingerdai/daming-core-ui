import { Inject, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { NavData, NAV_DATA } from '../../routes/nav';
import { CoreModule } from '../core.module';

@Injectable({
  providedIn: CoreModule,
})
export class NavService {

  private navs: NavData[];

  private navsSource = new Subject<NavData[]>();

  nav$ = this.navsSource.asObservable();

  constructor(@Inject(NAV_DATA) navs: NavData[]) {
    this.navs = navs;
  }

  getNavs() {
    return this.navs;
  }
}
