import { Component } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {
  character: Character = {
    name: '',
    power: 0
  }

  emitCharacter(){
    console.log(this.character);

  }
}
