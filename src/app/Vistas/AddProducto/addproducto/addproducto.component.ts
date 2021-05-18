import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductoI } from 'src/app/Models/productointerface';
import {ApiproductoService} from '../../.././Servicios/apiproducto.service'
import {Router, ActivatedRoute} from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-addproducto',
  templateUrl: './addproducto.component.html',
  styleUrls: ['./addproducto.component.css']
})
export class AddproductoComponent implements OnInit {

  nuevoForm = new FormGroup({
    codigo: new FormControl(''),
    nombre: new FormControl(''),
    descripcion: new FormControl(''),
    costo: new FormControl('')
  });


  constructor(private router: Router, private ApiproductoService: ApiproductoService) { }

  ngOnInit(): void {
  }


  public postForm(form: ProductoI){
//console.log("form de addProductos",form);
if(form!==null){
this.ApiproductoService.postProductos(form).subscribe((res: any)=>{
 // console.log("Respueta del metodo posProductos:", res);

  Swal.fire({

    icon: 'success',
    title: 'Registro exitoso',
    showConfirmButton: false,
    timer: 1500
  })
   this.router.navigate(['viewproducto'])


})
  }if (form == null){
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Favor de rellenar los campos',
    })

    this.router.navigate(['/addproducto']);
  }

}

Cerrar(){
  this.router.navigate(['/viewproducto']);
}
}
