
import Reveal from "reveal.js";
import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';
import Highlight from 'reveal.js/plugin/highlight/highlight.esm.js';
import { Component, OnInit } from '@angular/core';
import { UtilService } from "../procesos/servicios/util.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-integracion-confluence',
  templateUrl: './integracion-confluence.component.html',
  styleUrls: ['./integracion-confluence.component.scss']
})
export class IntegracionConfluenceComponent implements OnInit {

  constructor(private utilService: UtilService,private activatedRoute: ActivatedRoute,private router: Router) {
    if (this.activatedRoute.snapshot && this.activatedRoute.snapshot.queryParams['proceso']) {
      this.proceso = this.activatedRoute.snapshot.queryParams['proceso'];
      sessionStorage.setItem('proceso', this.proceso);
    } else {
      this.proceso = sessionStorage.getItem('proceso');
    }
   }
  objs: string[] = [];
  proceso : any;

  ngOnInit(): void {
    let sections = Array.from(document.querySelectorAll('section'));
    sections.forEach(element => {
      element.style.display = 'block';
    });
  }

  getRandom(obj: any){
    if (!this.objs[obj]){
      this.objs.push(this.utilService.getRandomColor(obj, true));
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

  ir(ruta: string): void{
    this.router.navigate([ruta], { queryParams: { proceso: this.proceso }});
    setTimeout(() => {
      location.reload();
    });
  }

  getProceso(){
    if(this.proceso === 'pruebascarga')return  "Pruebas Carga";
    else return this.proceso;
  }

}
