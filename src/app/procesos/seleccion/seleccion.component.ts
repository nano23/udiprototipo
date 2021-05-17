import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilService } from '../servicios/util.service';

@Component({
  selector: 'app-seleccion',
  templateUrl: './seleccion.component.html',
  styleUrls: ['./seleccion.component.scss']
})
export class SeleccionComponent implements OnInit {
  objs: string[] = [];
  constructor(private router: Router,private utilService: UtilService, private activatedRoute: ActivatedRoute) { }
  proceso : any;

  ngOnInit(): void {
    if (this.activatedRoute.snapshot && this.activatedRoute.snapshot.queryParams['proceso']) {
      this.proceso = this.activatedRoute.snapshot.queryParams['proceso'];
    }
    let sections = Array.from(document.querySelectorAll('section'));
    sections.forEach(element => {
      element.style.display = 'block';
    });
  }

  
  ir(ruta: string): void{
    this.router.navigate([ruta], { queryParams: { proceso: this.proceso }});
  }

  
  getProceso(){
    if(this.proceso === 'unitariascliente')return  "Unitarias cliente";
    if(this.proceso === 'unitariasserver')return  "Unitarias Servidor";
    else return this.proceso;
  }

  getRandom(obj: any){
    if (!this.objs[obj]){
      this.objs.push(this.utilService.getRandomColor(obj,true));
      return this.objs[obj];
    }else{
      return this.objs[obj];
    }
  }

  ircontenido(){
    //ir por proceso
    if(this.proceso == 'prototipo'){
      this.router.navigate(['prototipo'], { queryParams: { proceso: this.proceso }});
    }

  }
}
