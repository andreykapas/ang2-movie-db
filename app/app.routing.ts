/**
 * Created by andrey on 5.9.16.
 */
import {ModuleWithProviders}  from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const appRoutes: Routes = [
  {path: '', redirectTo: '/movies-list', pathMatch: 'full'}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
