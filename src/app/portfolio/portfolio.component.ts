import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {

  product: string[] = [ "/img/poert1.png","/img/port2.png","/img/port3.png","/img/poert1.png","/img/port2.png","/img/port3.png"   ];
  show:boolean = false;
  src:string = "";
  zoomin(e:MouseEvent):void{
    const element = e.target as HTMLElement;
    const id:number = Number(element.id);
    this.src = this.product[id]
    this.show = true;
  }

  zoomof(ev:MouseEvent):void{
    
      this.show = false;


      // ليه بيديني ال ev ب undefined 


 //   console.log(ev) 
  }



}
