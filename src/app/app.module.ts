import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import { ListProductComponent } from './@modules/list-product/list-product.component';
import { BlinkDirective } from './@share/directive/blink.directive';
import {FormsModule} from '@angular/forms';
import { EditComponent } from './@modules/edit/edit.component';
import { DetalesComponent } from './@modules/detales/detales.component';
import { MenuComponent } from './@modules/menu/menu.component';
import {HttpClientModule} from '@angular/common/http';
import { TableRowComponent } from './@share/component/table-row.component';

// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    ListProductComponent,
    BlinkDirective,
    EditComponent,
    DetalesComponent,
    MenuComponent,
    TableRowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
