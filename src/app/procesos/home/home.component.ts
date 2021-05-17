import { Component, OnInit } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { bounce,flip,jackInTheBox, lightSpeedIn } from 'ng-animate';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilService } from '../servicios/util.service';

const  TIMING = 1.5;
const  DELAY = 0;
let    sum = 0;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('bounce', [transition('* => *', useAnimation(bounce, {
      params: { timing: TIMING, delay: DELAY }
    }))]),
    trigger('flip', [transition('* => *', useAnimation(flip, {
      params: { timing: TIMING, delay: DELAY }
    }))]),
    trigger('jackInTheBox', [transition('* => *', useAnimation(jackInTheBox, {
      params: { timing: TIMING, delay: DELAY }
    }))]),
    trigger('LightSpeed', [transition('* => *', useAnimation(lightSpeedIn, {
      params: { timing: TIMING, delay: DELAY }
    }))]),
    trigger('LightSpeed2', [transition('* => *', useAnimation(lightSpeedIn, {
      params: { timing: TIMING, delay: DELAY+0.5 }
    }))]),
    trigger('LightSpeed3', [transition('* => *', useAnimation(lightSpeedIn, {
      params: { timing: TIMING, delay: DELAY+1 }
    }))])
    
  ]
})
export class HomeComponent implements OnInit {
  bounce: any;
  flip: any;
  jackInTheBox: any;
  LightSpeed: any;
  proceso : any;
  opciones: any[] = [];
  objs: string[] = [];

  constructor(private router: Router,private activatedRoute: ActivatedRoute, private utilService: UtilService) {
    if (this.activatedRoute.snapshot && this.activatedRoute.snapshot.queryParams['proceso']) {
      this.proceso = this.activatedRoute.snapshot.queryParams['proceso'];
    }
   }

  ngOnInit(): void {
    if(this.proceso === 'prototipo'){
      this.setOpcionesPrototipo();
    }
    if(this.proceso === 'seguimiento'){
      this.setOpcionesSeguimiento();
    }
    if(this.proceso === 'repositorio'){
      this.setOpcionesRepositorio();
    }
    if(this.proceso === 'colaboración'){
      this.setOpcionesColaboracion();
    }
    if(this.proceso === 'artefactos'){
      this.setOpcionesArtefactos();
    }
    if(this.proceso === 'unitariascliente'){
      this.setOpcionesUniCLiente();
    }
    if(this.proceso === 'unitariasserver'){
      this.setOpcionesUniServidor();
    }
    if(this.proceso === 'cobertura'){
      this.setOpcionesCobertura();
    }

    if(this.proceso === 'calidad'){
      this.setOpcionesCalidad();
    }

    if(this.proceso === 'pruebasintegracion'){
      this.setOpcionesIntegracion();
    }

    if(this.proceso === 'pruebascarga'){
      this.setOpcionesCarga();
    }

    if(this.proceso === 'orquestación'){
      this.setOpcionesOrquestacion();
    }
    sessionStorage.setItem('proceso', '');
  }

  setOpcionesRepositorio() {
    let opt = {
      ir: 'adminstracionBitbucket',
      nombre: 'Adminitracion del bitbucket'
    };
    this.opciones.push(opt);
    opt = {
      ir: 'clonacionBitbucket',
      nombre: 'Clonación del repositorio'
    };
    this.opciones.push(opt);
    opt = {
      ir: 'pullpushBitbucket',
      nombre: 'Acciones subida/bajada'
    };
    this.opciones.push(opt);
  }
  setOpcionesSeguimiento() {
      let opt = {
        ir: 'administracionProyecto',
        nombre: 'Adminitracion del proyecto'
      };
      this.opciones.push(opt);
      opt = {
        ir: 'seguimientoIncidencias',
        nombre: 'Seguimiento de Incidencias'
      };
      this.opciones.push(opt);
      opt = {
        ir: 'integracionJira',
        nombre: 'Integracion entre jira y bitbucket'
      };
      this.opciones.push(opt);
    }
    setOpcionesColaboracion() {
      let opt = {
        ir: 'administracionConfluence',
        nombre: 'Adminitración'
      };
      this.opciones.push(opt);
      opt = {
        ir: 'integracionConfluence',
        nombre: 'Integración'
      };
      this.opciones.push(opt);
      opt = {
        ir: 'documentosConfluence',
        nombre: 'Documentos'
      };
      this.opciones.push(opt);
    }

    setOpcionesArtefactos() {
      let opt = {
        ir: 'definicionArtefactos',
        nombre: 'Definición'
      };
      this.opciones.push(opt);
      opt = {
        ir: 'instalacionArtefactos',
        nombre: 'Instalación y Configuración'
      };
      this.opciones.push(opt);
      opt = {
        ir: 'ejemploArtefactos',
        nombre: 'Ejemplo de Versionamiento'
      };
      this.opciones.push(opt);
    }

    setOpcionesUniCLiente() {
      let opt = {
        ir: 'definicionUnicliente',
        nombre: 'Definición'
      };
      this.opciones.push(opt);
      opt = {
        ir: 'prototipoUnicliente',
        nombre: 'Prototipo'
      };
      this.opciones.push(opt);
      opt = {
        ir: 'ejemploUnicliente',
        nombre: 'Ejemplo'
      };
      this.opciones.push(opt);
    }

    setOpcionesUniServidor() {
      let opt = {
        ir: 'definicionUniservidor',
        nombre: 'Definición'
      };
      this.opciones.push(opt);
      opt = {
        ir: 'prototipoUniservidor',
        nombre: 'Prototipo'
      };
      this.opciones.push(opt);
      opt = {
        ir: 'ejemploUniservidor',
        nombre: 'Ejemplo'
      };
      this.opciones.push(opt);
    }

    setOpcionesCobertura() {
      let opt = {
        ir: 'definicionCobertura',
        nombre: 'Definición'
      };
      this.opciones.push(opt);
      opt = {
        ir: 'prototipoCobertura',
        nombre: 'Prototipo'
      };
      this.opciones.push(opt);
      opt = {
        ir: 'ejemploCobertura',
        nombre: 'Ejemplo'
      };
      this.opciones.push(opt);
    }

    setOpcionesCalidad() {
      let opt = {
        ir: 'definicionCalidad',
        nombre: 'Definición'
      };
      this.opciones.push(opt);
      opt = {
        ir: 'prototipoCalidad',
        nombre: 'Prototipo'
      };
      this.opciones.push(opt);
      opt = {
        ir: 'ejemploCalidad',
        nombre: 'Ejemplo'
      };
      this.opciones.push(opt);
    }

    setOpcionesIntegracion() {
      let opt = {
        ir: 'definicionIntegracion',
        nombre: 'Definición'
      };
      this.opciones.push(opt);
      opt = {
        ir: 'prototipoIntegracion',
        nombre: 'Prototipo'
      };
      this.opciones.push(opt);
      opt = {
        ir: 'ejemploIntegracion',
        nombre: 'Ejemplo'
      };
      this.opciones.push(opt);
    }

    setOpcionesCarga() {
      let opt = {
        ir: 'definicionCarga',
        nombre: 'Definición'
      };
      this.opciones.push(opt);
      opt = {
        ir: 'prototipoCarga',
        nombre: 'Prototipo'
      };
      this.opciones.push(opt);
      opt = {
        ir: 'ejemploCarga',
        nombre: 'Ejemplo'
      };
      this.opciones.push(opt);
    }

    setOpcionesOrquestacion() {
      let opt = {
        ir: 'definicionOrquestacion',
        nombre: 'Definición'
      };
      this.opciones.push(opt);
      opt = {
        ir: 'prototipoOrquestacion',
        nombre: 'Prototipo'
      };
      this.opciones.push(opt);
      opt = {
        ir: 'ejemploOrquestacion',
        nombre: 'Ejemplo'
      };
      this.opciones.push(opt);
    }

  setOpcionesPrototipo() {
    let opt = {
      ir: 'ejemplo',
      nombre: 'Entorno de desarollo - IDE'
    };
    this.opciones.push(opt);
    opt = {
      ir: 'desarrolloCliente',
      nombre: 'Desarrollo lado del cliente'
    };
    this.opciones.push(opt);
    opt = {
      ir: 'desarrolloServidor',
      nombre: 'Desarrollo lado del servidor'
    };
    this.opciones.push(opt);
    opt = {
      ir: 'ejecucion',
      nombre: 'Ejecución'
    };
    this.opciones.push(opt);
  }

  reset() {
    
  }

  getRandom(obj: any){
    if (!this.objs[obj]){
      this.objs.push(this.utilService.getRandomColor(obj,true));
      return this.objs[obj];
    }else{
      return this.objs[obj];
    }
  }

  ir(ruta: string): void{
    this.router.navigate([ruta], { queryParams: { proceso: this.proceso }});
  }

  
  getProceso(){
    if(this.proceso === 'unitariascliente')return  "unitarias cliente";
    if(this.proceso === 'unitariasserver')return  "Unitarias Servidor";
    if(this.proceso === 'pruebasintegracion')return  "Pruebas Integración";
    if(this.proceso === 'pruebascarga')return  "Pruebas Carga";
    if(this.proceso === 'orquestación')return  "Orquestación";
    else return this.proceso;
  }
  
}
