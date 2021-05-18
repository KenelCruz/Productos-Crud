import { Component, OnInit } from '@angular/core';
import { ProductosRes } from 'src/app/Models/exampleinterface';
import { ProductoI } from 'src/app/Models/productointerface';
import { UserI } from 'src/app/Models/userinterface';
import { ApiproductoService } from 'src/app/Servicios/apiproducto.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-viewproducto',
  templateUrl: './viewproducto.component.html',
  styleUrls: ['./viewproducto.component.css'],
})
export class ViewproductoComponent implements OnInit {
  //public productos: Array<any> = []

  public productos: any[] = [];


  constructor(private ApiproductoService: ApiproductoService, private router: Router) {}

  ngOnInit(): void {
    this.cargarData();
  }

  public cargarData() {
    this.ApiproductoService.getProductos()
    .subscribe(( resp: any) => {

   // console.log(resp);
    this.productos = resp;
    });
  }

public BuscarProducto(productoid: string){
//this.ApiproductoService.getProductosid().subscribe
}

public editarproducto(codigo: any){
  this.router.navigate(['editproducto', codigo])

}

public nuevoproducto(){
  this.router.navigate(['addproductos']);
}

}
