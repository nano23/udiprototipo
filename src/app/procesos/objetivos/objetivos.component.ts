import Reveal from "reveal.js";
import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';
import Highlight from 'reveal.js/plugin/highlight/highlight.esm.js';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilService } from '../servicios/util.service';
import { environment } from "src/environments/environment";



@Component({
  selector: 'app-objetivos',
  templateUrl: './objetivos.component.html',
  styleUrls: ['./objetivos.component.scss']
})
export class ObjetivosComponent implements OnInit {

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
    setTimeout(() => {
      location.reload();
    });
  }

  getRandom(obj: any){
    if (!this.objs[obj]){
      this.objs.push(this.utilService.getRandomColor(obj,true));
      return this.objs[obj];
    }else{
      return this.objs[obj];
    }
  }

  ngAfterViewInit() {
    Reveal.initialize(
      {
        plugins: [
          Markdown,
          Highlight,
        ],
        backgroundTransition: 'convex'
      }
    );
  }

  getProceso(){
    if(this.proceso === 'unitariascliente')return  "Unitarias cliente";
    if(this.proceso === 'unitariasserver')return  "Unitarias Servidor";
    if(this.proceso === 'pruebasintegracion')return  "Pruebas Integración";
    if(this.proceso === 'pruebascarga')return  "Pruebas Carga";
    
    else return this.proceso;
  }

}
