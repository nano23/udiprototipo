import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EjemploComponent } from './procesos/ejemplo/ejemplo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { HomeComponent } from './procesos/home/home.component';
import { FlexModule } from '@angular/flex-layout';
import { UtilService } from './procesos/servicios/util.service';
import { DesarrolloClienteComponent } from './procesos/desarrollo-cliente/desarrollo-cliente.component';
import { EjecucionComponent } from './procesos/ejecucion/ejecucion.component';
import { PrincipalComponent } from './procesos/principal/principal.component';
import { SeleccionComponent } from './procesos/seleccion/seleccion.component';
import { ObjetivosComponent } from './procesos/objetivos/objetivos.component';
import { ActividadesComponent } from './procesos/actividades/actividades.component';
import { EvaluacionComponent } from './procesos/evaluacion/evaluacion.component';
import { FormsModule } from '@angular/forms';
import { DesarrolloServidorComponent } from './procesos/desarrollo-servidor/desarrollo-servidor.component';
import { AdministracionProyectoComponent } from './administracion-proyecto/administracion-proyecto.component';
import { SeguimientoIncidenciasComponent } from './seguimiento-incidencias/seguimiento-incidencias.component';
import { IntegracionJiraComponent } from './integracion-jira/integracion-jira.component';
import { AdminstracionBitbucketComponent } from './adminstracion-bitbucket/adminstracion-bitbucket.component';
import { ClonacionBitbucketComponent } from './clonacion-bitbucket/clonacion-bitbucket.component';
import { PullpushBitbucketComponent } from './pullpush-bitbucket/pullpush-bitbucket.component';

import { IntegracionConfluenceComponent } from './integracion-confluence/integracion-confluence.component';
import { DocumentosConfluenceComponent } from './documentos-confluence/documentos-confluence.component';
import { AdministracionConfluenceComponent } from './administracion-confluence/administracion-confluence.component';
import { DefinicionArtefactosComponent } from './definicion-artefactos/definicion-artefactos.component';
import { InstalacionArtefactosComponent } from './instalacion-artefactos/instalacion-artefactos.component';
import { EjemploArtefactosComponent } from './ejemplo-artefactos/ejemplo-artefactos.component';
import { DefinicionUniclienteComponent } from './definicion-unicliente/definicion-unicliente.component';
import { PrototipoUniclienteComponent } from './prototipo-unicliente/prototipo-unicliente.component';
import { EjemploUniclienteComponent } from './ejemplo-unicliente/ejemplo-unicliente.component';
import { DefinicionUniservidorComponent } from './definicion-uniservidor/definicion-uniservidor.component';
import { PrototipoUniservidorComponent } from './prototipo-uniservidor/prototipo-uniservidor.component';
import { EjemploUniservidorComponent } from './ejemplo-uniservidor/ejemplo-uniservidor.component';
import { DefinicionCoberturaComponent } from './definicion-cobertura/definicion-cobertura.component';
import { PrototipoCoberturaComponent } from './prototipo-cobertura/prototipo-cobertura.component';
import { EjemploCoberturaComponent } from './ejemplo-cobertura/ejemplo-cobertura.component';
import { DefinicionCalidadComponent } from './definicion-calidad/definicion-calidad.component';
import { PrototipoCalidadComponent } from './prototipo-calidad/prototipo-calidad.component';
import { EjemploCalidadComponent } from './ejemplo-calidad/ejemplo-calidad.component';
import { DefinicionIntegracionComponent } from './definicion-integracion/definicion-integracion.component';
import { PrototipoIntegracionComponent } from './prototipo-integracion/prototipo-integracion.component';
import { EjemploIntegracionComponent } from './ejemplo-integracion/ejemplo-integracion.component';
import { DefinicionCargaComponent } from './definicion-carga/definicion-carga.component';
import { PrototipoCargaComponent } from './prototipo-carga/prototipo-carga.component';
import { EjemploCargaComponent } from './ejemplo-carga/ejemplo-carga.component';
import { DefinicionOrquestacionComponent } from './definicion-orquestacion/definicion-orquestacion.component';
import { PrototipoOrquestacionComponent } from './prototipo-orquestacion/prototipo-orquestacion.component';
import { EjemploOrquestacionComponent } from './ejemplo-orquestacion/ejemplo-orquestacion.component';


@NgModule({
  declarations: [
    AppComponent,
    EjemploComponent,
    DesarrolloClienteComponent,
    DesarrolloServidorComponent,
    EjecucionComponent,
    HomeComponent,
    PrincipalComponent,
    SeleccionComponent,
    ObjetivosComponent,
    ActividadesComponent,
    EvaluacionComponent,
    AdministracionProyectoComponent,
    SeguimientoIncidenciasComponent,
    IntegracionJiraComponent,
    AdminstracionBitbucketComponent,
    ClonacionBitbucketComponent,
    PullpushBitbucketComponent,
    AdministracionConfluenceComponent,
    IntegracionConfluenceComponent,
    DocumentosConfluenceComponent,
    DefinicionArtefactosComponent,
    InstalacionArtefactosComponent,
    EjemploArtefactosComponent,
    DefinicionUniclienteComponent,
    PrototipoUniclienteComponent,
    EjemploUniclienteComponent,
    DefinicionUniservidorComponent,
    PrototipoUniservidorComponent,
    EjemploUniservidorComponent,
    DefinicionCoberturaComponent,
    PrototipoCoberturaComponent,
    EjemploCoberturaComponent,
    DefinicionCalidadComponent,
    PrototipoCalidadComponent,
    EjemploCalidadComponent,
    DefinicionIntegracionComponent,
    PrototipoIntegracionComponent,
    EjemploIntegracionComponent,
    DefinicionCargaComponent,
    PrototipoCargaComponent,
    EjemploCargaComponent,
    DefinicionOrquestacionComponent,
    PrototipoOrquestacionComponent,
    EjemploOrquestacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexModule,
    FormsModule
    
    
  ],
  providers: [UtilService],
  bootstrap: [AppComponent],
  exports: [
    
  ],
})
export class AppModule { }
