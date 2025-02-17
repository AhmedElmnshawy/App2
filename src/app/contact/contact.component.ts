import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
 
 
  hmada:boolean []= [false,false,false,false]; 


   inputStyle(e:KeyboardEvent):void {
    const element = e.target as HTMLInputElement;
    const id:number = Number(element.id);
    const value:string = element.value

    if(!value){
      this.hmada[id] = false;
    }
    else {
      this.hmada[id] = true;
    }

  

   }


}
