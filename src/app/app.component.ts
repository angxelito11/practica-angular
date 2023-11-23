import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from './card/card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CardComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title:string = 'hola mundo de angular';
  public contador:number = 10;

  incrementar(value : number): void{
    this.contador += value;
    if (this.contador > 10) {
      this.contador = 10;
      alert("el contador siempre debe ser igual o mayor a 10")
    }
  }
}
