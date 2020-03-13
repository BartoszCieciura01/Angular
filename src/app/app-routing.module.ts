// @ts-ignore
import {NgModule} from '@angular/core';
// @ts-ignore
import {Routes, RouterModule} from '@angular/router';
import {ListProductComponent} from './@modules/list-product/list-product.component';
import {MenuComponent} from './@modules/menu/menu.component';
import {DetalesComponent} from './@modules/detales/detales.component';
import {EditComponent} from './@modules/edit/edit.component';


const routes: Routes = [
  {path: 'lista', component: ListProductComponent},
  {path: 'edit', component: EditComponent},
  {path: 'details/:code', component: DetalesComponent},
  {path: '**', component: ListProductComponent}
];


// @ts-ignore
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
