import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilService } from '../servicios/util.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {
  objs: string[] = [];
  constructor(private router: Router,private utilService: UtilService) { }

  ngOnInit(): void {
    let sections = Array.from(document.querySelectorAll('section'));
    sections.forEach(element => {
      element.style.display = 'block';
    });
  }

  
  ir(ruta: string): void{
    this.router.navigate(['seleccion'], { queryParams: { proceso: ruta }});
  }

  getRandom(obj: any){
    if (!this.objs[obj]){
      this.objs.push(this.utilService.getRandomColor(obj,true));
      return this.objs[obj];
    }else{
      return this.objs[obj];
    }
  }

}
