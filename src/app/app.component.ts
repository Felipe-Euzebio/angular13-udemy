import { Component, OnInit, DoCheck, AfterContentInit, AfterViewInit, AfterViewChecked, AfterContentChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-title *ngIf="destruir" title="Olá mundo!"></app-title>
    <label>Valor: </label>
    <input type="text" value="{{ valor }}">&nbsp;
    <button (click)="adicionar()">Adicionar</button>&nbsp;
    <button (click)="subtrair()">Subtrair</button><br><br>
    <button (click)="destruirComponente()">Destruir Componente</button>&nbsp;
    <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit, DoCheck, AfterContentInit, AfterViewInit, AfterViewChecked, AfterContentChecked, OnDestroy {

  public valor: number = 0;

  public destruir: boolean = true;

  constructor() { }

  public adicionar(): number {
    return this.valor += 1;
  }


  subtrair(): number {
    return this.valor -= 1;
  }


  destruirComponente(): void {
    this.destruir = false;
  }


  ngOnDestroy(): void {
    console.log('ngOnDestroy');
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
