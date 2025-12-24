import { Routes } from '@angular/router';
import {SeatDemoComponent} from './components/seat-demo/seat-demo.component';

export const routes: Routes = [
  {path: 'seatDemo', component: SeatDemoComponent},
  {path: '**', redirectTo: 'seatDemo'}
];
