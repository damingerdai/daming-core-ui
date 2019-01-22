import { Component, OnInit } from '@angular/core';
import { NavService } from '../../core/nav/nav.service';
import { NavData } from 'src/app/routes/nav';

@Component({
  selector: 'app-layout-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public navItems: NavData[];

  constructor(private navService: NavService) {
    this.navItems = this.navService.getNavs();
   }

  ngOnInit() {
  }

}
