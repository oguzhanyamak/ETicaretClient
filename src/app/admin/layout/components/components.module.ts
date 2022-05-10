import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import {MatListModule} from '@angular/material/list'
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatListModule
  ],
  exports:[
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    MatListModule
  ]
})
export class ComponentsModule { }
