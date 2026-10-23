import { Component } from '@angular/core';
import { Care } from '../caretaker/care.module';
import { Physio } from './physio';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-physio',
  standalone:true,
  imports: [RouterLink],
  templateUrl: './physio.component.html',
  styleUrl: './physio.component.css',
})
export class PhysioComponent
{
    physio:Care[] = Physio;
}
