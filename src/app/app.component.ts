import { Component } from '@angular/core';
import { ApiproductoService } from 'src/app/Servicios/apiproducto.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Productos-Crud';

  constructor(private ApiproductoService: ApiproductoService){

  }
}
