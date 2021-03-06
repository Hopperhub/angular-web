import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MainRoutingModule} from './main-routing.module';
import {MainPageComponent} from './main-page/main-page.component';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {SidebarMenuComponent} from './sidebar-menu/sidebar-menu.component';
import {IndexPageComponent} from './index-page/index-page.component';

@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule,
    NgZorroAntdModule
  ],
  declarations: [MainPageComponent, SidebarMenuComponent, IndexPageComponent],
  exports: [SidebarMenuComponent]
})
export class MainModule {
}
