import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Router, NavigationEnd, RouterEvent } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { filter } from 'rxjs/operators';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private router: Router, @Inject(PLATFORM_ID) private platformId: Object) {


  }
  ngOnInit(): void {
    
  }


  @HostListener('window:popstate', ['$event'])
  onPopState(event: any) {
    let body = document.getElementsByTagName('body')[0];
    body.classList.remove("reveal-viewport");
  }
  

}
