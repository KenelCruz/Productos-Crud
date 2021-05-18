import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'



import { AppRoutingModule, routinComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavarComponent } from './Nav/navar/navar.component';
import { ViewproductoComponent } from './Vistas/ViewPrducto/viewproducto/viewproducto.component';
import { PerfilComponent } from './Vistas/Perfil/perfil/perfil.component';
//import { ProductosComponent } from './Vistas/Productos/productos/productos.component';
//import { AddproductoComponent } from './Vistas/AddProducto/addproducto/addproducto.component';
//import { EditproductoComponent } from './Vistas/EditProducto/editproducto/editproducto.component';


@NgModule({
  declarations: [
    AppComponent,
    NavarComponent,
    routinComponents,
    ViewproductoComponent,
    PerfilComponent,
    //ProductosComponent,
    //AddproductoComponent,
    //EditproductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
