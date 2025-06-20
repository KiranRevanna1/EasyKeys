import { Routes } from '@angular/router';
import { Screen1Component } from './components/screens/screen1/screen1.component';
import { Screen2Component } from './components/screens/screen2/screen2.component';
import { Screen3Component } from './components/screens/screen3/screen3.component';

export const routes: Routes = [
    { path: '', redirectTo: 'screen1', pathMatch: 'full' },
    { path: 'screen1', component: Screen1Component },
    { path: 'screen2', component: Screen2Component },
    { path: 'screen3', component: Screen3Component }
];
