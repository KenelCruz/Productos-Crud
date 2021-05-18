import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductosComponent} from './Vistas/Productos/productos/productos.component';
import {AddproductoComponent} from './Vistas/AddProducto/addproducto/addproducto.component';
import {EditproductoComponent} from './Vistas/EditProducto/editproducto/editproducto.component';
import {ViewproductoComponent} from './Vistas/ViewPrducto/viewproducto/viewproducto.component';
import {PerfilComponent} from './Vistas/Perfil/perfil/perfil.component';

const routes: Routes = [
  {path: '', redirectTo:'productos', pathMatch:'full'},
  {path: 'productos', component: ProductosComponent},
  {path: 'addproductos', component: AddproductoComponent},
  {path: 'editproducto/:codigo', component: EditproductoComponent},
  {path: 'viewproducto', component: ViewproductoComponent},
  {path: 'perfil', component: PerfilComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routinComponents = [ProductosComponent, AddproductoComponent, EditproductoComponent, ViewproductoComponent, PerfilComponent]
