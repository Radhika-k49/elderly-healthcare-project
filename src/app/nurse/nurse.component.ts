import { Component } from '@angular/core';
import { Care } from '../caretaker/care.module';
import { Nurse } from './nurse';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nurse',
  standalone:true,
  imports: [RouterLink],
  templateUrl: './nurse.component.html',
  styleUrl: './nurse.component.css',
})
export class NurseComponent 
{
     nurse:Care[] = Nurse;
}
