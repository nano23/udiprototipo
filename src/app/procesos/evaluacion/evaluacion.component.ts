import { Component, OnInit } from '@angular/core';
import Reveal from "reveal.js";
import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';
import Highlight from 'reveal.js/plugin/highlight/highlight.esm.js';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilService } from '../servicios/util.service';

@Component({
  selector: 'app-evaluacion',
  templateUrl: './evaluacion.component.html',
  styleUrls: ['./evaluacion.component.scss']
})
export class EvaluacionComponent implements OnInit {
  objs: string[] = [];
  resultado: number = 0;
  constructor(private router: Router,private utilService: UtilService, private activatedRoute: ActivatedRoute) { }
  proceso : any;
  preguntas:string[] = [];
  respuestas:string[] = []
  isCalificado: boolean = false;

  ngOnInit(): void {
    if (this.activatedRoute.snapshot && this.activatedRoute.snapshot.queryParams['proceso']) {
      this.proceso = this.activatedRoute.snapshot.queryParams['proceso'];
      this.cargarRespuestasPorProceso(this.proceso);
      this.cargarPreguntasPorProceso(this.proceso);
    }
    let sections = Array.from(document.querySelectorAll('section'));
    sections.forEach(element => {
      element.style.display = 'block';
    });
  }


  getProceso(){
    if(this.proceso === 'unitariascliente')return  "unitarias cliente";
    if(this.proceso === 'unitariasserver')return  "unitarias servidor";
    if(this.proceso === 'pruebasintegracion')return  "Pruebas Integración";
    if(this.proceso === 'pruebascarga')return  "Pruebas Carga";
    else return this.proceso;
  }

  cargarRespuestasPorProceso(proceso: any) {
    if(proceso === 'prototipo'){
      this.respuestas = ['Angular','Java 8','Package.json','environment.ts','.css','spring-boot-starter-parent','properties','public static void main','@Table','Eliminación de objetos de la pagina1'];
    }
    if(proceso === 'seguimiento'){
      this.respuestas = ['verdadero','tablero','falso','Diagrama de Gantt','falso','verdadero','Merge','PrototipoUdiPaginaWeb'];
    }
    if(proceso === 'repositorio'){
      this.respuestas = ['Git','Solicitudes de Unión','Verdadero','Falso','Verdadero','pull y push','Tortoise Git','Commit'];
    }

    if(proceso === 'colaboración'){
      this.respuestas = ['Verdadero','Publicaciones','Falso','Verdadero','Analisis DAFO','Verdadero'];
    }

    if(proceso === 'artefactos'){
      this.respuestas = ['Nexus Repository','Falso','Verdadero','Falso','Verdadero','Verdadero','maven','pom'];
    }

    if(proceso === 'unitariascliente'){
      this.respuestas = ['Jasmine','Falso','Verdadero','Verdadero','it','npm test','Verdadero'];
    }

    if(proceso === 'unitariasserver'){
      this.respuestas = ['junit','Falso','Verdadero','.java','pojo'];
    }

    
    if(proceso === 'cobertura'){
      this.respuestas = ['Verdadero','jacoco','Falso','Verdadero','.xml','Verdadero','index.html'];
    }

    if(proceso === 'calidad'){
      this.respuestas = ['Verdadero','sonarqube','Verdadero','Verdadero','Falso','mvn clean install sonar:sonar','Verdadero'];
    }

    if(proceso === 'pruebasintegracion'){
      this.respuestas = ['postman','Verdadero','npm install newman','Falso','Verdadero','variables'];
    }
    
    if(proceso === 'pruebascarga'){
      this.respuestas = ['blazemeter','Verdadero','Verdadero','jmx','Verdadero','Falso'];
    }

    if(proceso === 'orquestación'){
      this.respuestas = ['jenkins','Verdadero','Falso','groovy','Verdadero','Correo Confirmación de pruebas'];
    }
  }

  cargarPreguntasPorProceso(proceso: any) {
    if(proceso === 'prototipo'){
      this.preguntas = ['','','','','','','','','',''];
    }
    if(proceso === 'seguimiento'){
      this.preguntas = ['','','','','','','',''];
    }
    if(proceso === 'repositorio'){
      this.preguntas = ['','','','','','','',''];
    }

    if(proceso === 'colaboración'){
      this.preguntas = ['','','','','',''];
    }

    if(proceso === 'artefactos'){
      this.preguntas = ['','','','','','','',''];
    }

    if(proceso === 'unitariascliente'){
      this.preguntas = ['','','','','','',''];
    }

    if(proceso === 'unitariasserver'){
      this.preguntas = ['','','','',''];
    }

    
    if(proceso === 'cobertura'){
      this.preguntas = ['','','','','','',''];
    }

    if(proceso === 'calidad'){
      this.preguntas = ['','','','','','',''];
    }

    if(proceso === 'pruebasintegracion'){
      this.preguntas = ['','','','','',''];
    }
    
    if(proceso === 'pruebascarga'){
      this.preguntas = ['','','','','',''];
    }

    if(proceso === 'orquestación'){
      this.preguntas = ['','','','','',''];
    }
  }

  getRandom(obj: any){
    if (!this.objs[obj]){
      this.objs.push(this.utilService.getRandomColor(obj, true));
      return this.objs[obj];
    }else{
      return this.objs[obj];
    }
  }

  calificar(){
    this.resultado = this.calcular(this.preguntas,this.respuestas);
    this.isCalificado = true;
  }

  calcular(preguntas: string[], respuestas: string[]): number {
    let sum = 0;
    for (var i = 0; i < preguntas.length; i++) {
      if (preguntas[i] === respuestas[i]) sum++;
    }
    return sum;
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

}
