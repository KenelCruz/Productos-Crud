import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ApiproductoService } from 'src/app/Servicios/apiproducto.service';
import {Observable} from 'rxjs';
import { ProductoI } from 'src/app/Models/productointerface';



@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {


  constructor(private ApiproductoService: ApiproductoService) {}


  ngOnInit(): void {

  }





}
