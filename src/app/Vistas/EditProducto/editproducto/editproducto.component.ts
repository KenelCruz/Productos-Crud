import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductoI } from '../../../Models/productointerface';
import { ApiproductoService } from '../../.././Servicios/apiproducto.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editproducto',
  templateUrl: './editproducto.component.html',
  styleUrls: ['./editproducto.component.css'],
})
export class EditproductoComponent implements OnInit {
  constructor(
    private activerouter: ActivatedRoute,
    private router: Router,
    private ApiproductoService: ApiproductoService
  ) {}

  datosProducto: ProductoI[] = [];

  editarForm = new FormGroup({
    codigo: new FormControl(''),
    nombre: new FormControl(''),
    descripcion: new FormControl(''),
    costo: new FormControl(''),
  });

  ngOnInit(): void {
    let productoid = this.activerouter.snapshot.paramMap.get('codigo');
    this.ApiproductoService.getunprducto(productoid).subscribe((res: any) => {
      this.datosProducto.push(res);

      // console.log("Datos de datosProductos",this.datosProducto[0]);

      this.editarForm.setValue({
        codigo: this.datosProducto[0].codigo,
        nombre: this.datosProducto[0].nombre,
        descripcion: this.datosProducto[0].descripcion,
        costo: this.datosProducto[0].costo,
      });
      //console.log("editForm",this.editarForm.value);
    });
  }

  postForm(form: ProductoI) {
    this.ApiproductoService.putProducto(form).subscribe((res: any) => {
     // console.log('res', res);
     Swal.fire({

      icon: 'success',
      title: 'Registro modificado con exito',
      showConfirmButton: false,
      timer: 1500
    })

    });
    console.log('Variable form', form);
  }

  eliminar() {
    let datos: ProductoI = this.editarForm.value;
    this.ApiproductoService.deleteProductos(datos).subscribe((res: any) => {
      //console.log('Delete', res);
      Swal.fire({

        icon: 'success',
        title: 'Registro eliminado con exito',
        showConfirmButton: false,
        timer: 1500
      })
      this.router.navigate(['/viewproducto']);
    });

  }

  Cerrar(){
    this.router.navigate(['/viewproducto']);
  }
}
