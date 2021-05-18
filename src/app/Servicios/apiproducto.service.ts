import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProductosRes } from '../Models/exampleinterface';
import { ProductoI } from '../Models/productointerface';
import { ResponseI } from '../Models/responseinterface';
import { UserI } from '../Models/userinterface';
import { ViewproductoComponent } from '../Vistas/ViewPrducto/viewproducto/viewproducto.component';

@Injectable({
  providedIn: 'root',
})
export class ApiproductoService {
  URL_API = 'https://localhost:44322/api/Producto';

  constructor(private http: HttpClient) {}

  public getProductos() {
    return this.http.get<ProductoI>(this.URL_API, {});
  }

  public getProductosid() {}

  public getunprducto(codigo: any): Observable<ProductoI> {
    let direccion = this.URL_API + '/' + codigo;
    return this.http.get<ProductoI>(direccion);
  }

  public putProducto(form: ProductoI): Observable<ProductoI> {
    let direccion = this.URL_API + '/' + form.codigo;

    return this.http.put<ProductoI>(direccion, form);
  }

  public deleteProductos(form: ProductoI): Observable<ProductoI> {
    let direccion = this.URL_API + '/' + form.codigo;
    let options = {
      headers: new HttpHeaders({
        'Content-Type': 'aplication/json',


      }),
      body: form,
    };
    return this.http.delete<ProductoI>(direccion, options);
  }

  public postProductos(form: ProductoI): Observable<ProductoI> {
    return this.http.post<ProductoI>(this.URL_API, form);
  }
}
