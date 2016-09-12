import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectDetail } from './pages/projectdetail.page';

const appRoutes = [
  {path: 'projectdetail/:id', component: ProjectDetail}
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);