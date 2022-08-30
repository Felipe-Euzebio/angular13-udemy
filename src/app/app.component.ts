import { Component, OnInit, DoCheck, AfterContentInit, AfterViewInit, AfterViewChecked, AfterContentChecked } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-title title="Olá mundo!"></app-title>
  {{ valor }}
  <button (click)="adicionar()">Adicionar</button>&nbsp;
  <button (click)="subtrair()">Subtrair</button>
  <router-outlet></router-outlet>`
})
export class AppComponent implements OnInit, DoCheck, AfterContentInit, AfterViewInit, AfterViewChecked, AfterContentChecked {

  public valor: number = 0;

  constructor() { }

  public adicionar(): number {
    return this.valor += 1;
  }


  subtrair(): number {
    return this.valor -= 1;
  }


  ngDoCheck(): void {
    console.log('ngDoCheck');
  }


  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }


  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }


  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }


  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }


  ngOnInit(): void {
    setTimeout(() => {
      console.log('App component loaded');
    });
  }

}
