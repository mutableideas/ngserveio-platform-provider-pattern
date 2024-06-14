import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '', 
    loadComponent: () => import('../login/login.component').then(
      m => m.LoginComponent
    )
  },
  {
    path: 'role',
    loadComponent: () => import('../role/role.component').then(
      m => m.RoleComponent
    )
  }
];
