import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdministracionConfluenceComponent } from './administracion-confluence/administracion-confluence.component';
import { AdministracionProyectoComponent } from './administracion-proyecto/administracion-proyecto.component';
import { AdminstracionBitbucketComponent } from './adminstracion-bitbucket/adminstracion-bitbucket.component';
import { ClonacionBitbucketComponent } from './clonacion-bitbucket/clonacion-bitbucket.component';
import { DefinicionArtefactosComponent } from './definicion-artefactos/definicion-artefactos.component';
import { DefinicionCalidadComponent } from './definicion-calidad/definicion-calidad.component';
import { DefinicionCoberturaComponent } from './definicion-cobertura/definicion-cobertura.component';
import { DefinicionIntegracionComponent } from './definicion-integracion/definicion-integracion.component';
import { DefinicionUniclienteComponent } from './definicion-unicliente/definicion-unicliente.component';
import { DefinicionUniservidorComponent } from './definicion-uniservidor/definicion-uniservidor.component';
import { DefinicionCargaComponent } from './definicion-carga/definicion-carga.component';
import { DocumentosConfluenceComponent } from './documentos-confluence/documentos-confluence.component';
import { EjemploArtefactosComponent } from './ejemplo-artefactos/ejemplo-artefactos.component';
import { EjemploCalidadComponent } from './ejemplo-calidad/ejemplo-calidad.component';
import { EjemploCargaComponent } from './ejemplo-carga/ejemplo-carga.component';
import { EjemploCoberturaComponent } from './ejemplo-cobertura/ejemplo-cobertura.component';
import { EjemploIntegracionComponent } from './ejemplo-integracion/ejemplo-integracion.component';
import { EjemploUniclienteComponent } from './ejemplo-unicliente/ejemplo-unicliente.component';
import { EjemploUniservidorComponent } from './ejemplo-uniservidor/ejemplo-uniservidor.component';
import { InstalacionArtefactosComponent } from './instalacion-artefactos/instalacion-artefactos.component';
import { IntegracionConfluenceComponent } from './integracion-confluence/integracion-confluence.component';
import { IntegracionJiraComponent } from './integracion-jira/integracion-jira.component';
import { ActividadesComponent } from './procesos/actividades/actividades.component';
import { DesarrolloClienteComponent } from './procesos/desarrollo-cliente/desarrollo-cliente.component';
import { DesarrolloServidorComponent } from './procesos/desarrollo-servidor/desarrollo-servidor.component';
import { EjecucionComponent } from './procesos/ejecucion/ejecucion.component';
import { EjemploComponent } from './procesos/ejemplo/ejemplo.component';
import { EvaluacionComponent } from './procesos/evaluacion/evaluacion.component';
import { HomeComponent } from './procesos/home/home.component';
import { ObjetivosComponent } from './procesos/objetivos/objetivos.component';
import { PrincipalComponent } from './procesos/principal/principal.component';
import { SeleccionComponent } from './procesos/seleccion/seleccion.component';
import { PrototipoCalidadComponent } from './prototipo-calidad/prototipo-calidad.component';
import { PrototipoCargaComponent } from './prototipo-carga/prototipo-carga.component';
import { PrototipoCoberturaComponent } from './prototipo-cobertura/prototipo-cobertura.component';
import { PrototipoIntegracionComponent } from './prototipo-integracion/prototipo-integracion.component';
import { PrototipoUniclienteComponent } from './prototipo-unicliente/prototipo-unicliente.component';
import { PrototipoUniservidorComponent } from './prototipo-uniservidor/prototipo-uniservidor.component';
import { PullpushBitbucketComponent } from './pullpush-bitbucket/pullpush-bitbucket.component';
import { SeguimientoIncidenciasComponent } from './seguimiento-incidencias/seguimiento-incidencias.component';
import { DefinicionOrquestacionComponent } from './definicion-orquestacion/definicion-orquestacion.component';
import { PrototipoOrquestacionComponent } from './prototipo-orquestacion/prototipo-orquestacion.component';
import { EjemploOrquestacionComponent } from './ejemplo-orquestacion/ejemplo-orquestacion.component';

const routes: Routes = [
  { path: '', component: PrincipalComponent },
  { path: 'principal', component: PrincipalComponent },
  { path: 'seleccion', component: SeleccionComponent },
  { path: 'home', component: HomeComponent },
  { path: 'objetivos', component: ObjetivosComponent },
  { path: 'actividades', component: ActividadesComponent },
  { path: 'evaluacion', component: EvaluacionComponent },
  { path: 'ejemplo', component: EjemploComponent },
  { path: 'desarrolloCliente', component: DesarrolloClienteComponent },
  { path: 'desarrolloServidor', component: DesarrolloServidorComponent },
  { path: 'ejecucion', component: EjecucionComponent },
  { path: 'administracionProyecto', component: AdministracionProyectoComponent },
  { path: 'seguimientoIncidencias', component: SeguimientoIncidenciasComponent },
  { path: 'integracionJira', component: IntegracionJiraComponent },
  { path: 'adminstracionBitbucket', component: AdminstracionBitbucketComponent },
  { path: 'clonacionBitbucket', component: ClonacionBitbucketComponent },
  { path: 'pullpushBitbucket', component: PullpushBitbucketComponent },
  { path: 'administracionConfluence', component: AdministracionConfluenceComponent },
  { path: 'integracionConfluence', component: IntegracionConfluenceComponent },
  { path: 'documentosConfluence', component: DocumentosConfluenceComponent },
  { path: 'definicionArtefactos', component: DefinicionArtefactosComponent },
  { path: 'instalacionArtefactos', component: InstalacionArtefactosComponent },
  { path: 'ejemploArtefactos', component: EjemploArtefactosComponent },
  { path: 'definicionUnicliente', component: DefinicionUniclienteComponent },
  { path: 'prototipoUnicliente', component: PrototipoUniclienteComponent },
  { path: 'ejemploUnicliente', component: EjemploUniclienteComponent },
  { path: 'definicionUniservidor', component: DefinicionUniservidorComponent },
  { path: 'prototipoUniservidor', component: PrototipoUniservidorComponent },
  { path: 'ejemploUniservidor', component: EjemploUniservidorComponent },
  { path: 'definicionCobertura', component: DefinicionCoberturaComponent },
  { path: 'prototipoCobertura', component: PrototipoCoberturaComponent },
  { path: 'ejemploCobertura', component: EjemploCoberturaComponent },
  { path: 'definicionCalidad', component: DefinicionCalidadComponent },
  { path: 'prototipoCalidad', component: PrototipoCalidadComponent },
  { path: 'ejemploCalidad', component: EjemploCalidadComponent },
  { path: 'definicionIntegracion', component: DefinicionIntegracionComponent },
  { path: 'prototipoIntegracion', component: PrototipoIntegracionComponent },
  { path: 'ejemploIntegracion', component: EjemploIntegracionComponent },
  { path: 'definicionCarga', component: DefinicionCargaComponent },
  { path: 'prototipoCarga', component: PrototipoCargaComponent },
  { path: 'ejemploCarga', component: EjemploCargaComponent },
  { path: 'definicionOrquestacion', component: DefinicionOrquestacionComponent },
  { path: 'prototipoOrquestacion', component: PrototipoOrquestacionComponent },
  { path: 'ejemploOrquestacion', component: EjemploOrquestacionComponent },

  //{path: '', loadChildren: () => import('./modulos/web.module').then(m => m.AppBrowserModule), pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
