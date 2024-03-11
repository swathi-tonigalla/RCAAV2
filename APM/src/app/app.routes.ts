import { Routes } from '@angular/router';
import { WelcomeComponent } from './home/welcome.component';

export const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  {
    path: 'products',
    loadChildren: () => import('./products/product.routes').then(r => r.PRODUCT_ROUTES)
  },
  { 
    path: 'about', 
    loadComponent: () => import('./about/about.component').then(c => c.AboutComponent)
  },
  { 
    path: 'newApp', 
    loadComponent: () => import('./products/newapp/newapp.component').then(c => c.NewappComponent)
  },
  { 
    path: 'newtable', 
    loadComponent: () => import('./products/newtable.component').then(c => c.NewtableComponent)
  },
  { path: '**', redirectTo: 'welcome', pathMatch: 'full' },
];
