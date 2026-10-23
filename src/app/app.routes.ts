import { Routes } from '@angular/router';
import { MainInfoComponent } from './main-info/main-info.component';
import { BookingComponent } from './booking/booking.compopnent';
import { ApplyforjobComponent } from './applyforjob/applyforjob.component';
import { CaretakerComponent } from './caretaker/caretaker.component';
import { PhysioComponent } from './physio/physio.component';
import { NurseComponent } from './nurse/nurse.component';
import { AboutusComponent } from './aboutus/aboutus.component';

export const routes: Routes = 
[
    {
        path:'',
        component: MainInfoComponent,
    },
    {
        path:'bookus',
        component: BookingComponent,
    },
    {
        path:'apply-for-job',
        component: ApplyforjobComponent,
    },
    {
        path:'caretaker',
        component: CaretakerComponent,
    },
    {
        path:'physio',
        component:PhysioComponent,
    },
    {
        path:'nurse',
        component:NurseComponent,
    },
    {
        path:'aboutus',
        component:AboutusComponent,
    },
];
