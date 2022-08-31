import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {

  public nome: string = "Felipe";
  public idade: number = 19;

  constructor() { }

  public checkedDisabled: boolean = true;
  public imgSrc: string = "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png";

  public position: { x: number, y: number } = { x: 0, y: 0 };

  ngOnInit(): void {
  }


  alertaInfo(): void {
    alert("Você clicou no botão!");
  }


  eventInfo(event: MouseEvent): void {
    console.log(event);
  }


  mouseMoveTest(event: MouseEvent): void {
    console.log(event);
    this.position.x = event.offsetX;
    this.position.y = event.offsetY;
  }

}
