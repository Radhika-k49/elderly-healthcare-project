import { Component } from '@angular/core';
import{ Caretaker } from './caretaker';
import { Care } from './care.module';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-caretaker',
  standalone:true,
  imports: [RouterLink],
  templateUrl: './caretaker.component.html',
  styleUrl: './caretaker.component.css',
})
export class CaretakerComponent
 {
    caretaker:Care[] = Caretaker;
 }
