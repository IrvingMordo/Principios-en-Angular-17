import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  name: String = "Thor";
  age:number = 3526;
  super: string = "God of Thunder"


   get nationalName(): String {
      return 'Asgardian'.toUpperCase();
   }

   getHeroDescription(): string {
    return `${this.super}`;
   }

   changeHero():void {
    this.name = 'Irving'
   }

   changeAge(): void {
      this.age= 20
   }

   resetForm(): void {
    this.name = 'Thor'
    this.age = 3526
   }

  }
