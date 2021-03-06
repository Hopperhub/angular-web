import {Component, Input, OnInit} from '@angular/core';
import {getMenuRelation} from '../menu-relation';

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.scss']
})
export class SidebarMenuComponent implements OnInit {

  @Input() menuData = [];
  @Input() isSubmenu = false;
  @Input() menuLevel = 1;

  menuItemClass;

  constructor() {
  }

  ngOnInit() {
    this.menuItemClass = `menu-item-${this.menuLevel}`;
  }

  // 获取菜单的 title
  getMenuTitleByCode(code) {
    return getMenuRelation(code) && getMenuRelation(code).label || '';
  }

  // 获取菜单的 icon
  getMenuIconByCode(code) {
    return getMenuRelation(code) && getMenuRelation(code).iconUrl || '';
  }
}
