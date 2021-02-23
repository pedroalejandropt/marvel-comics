import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AppComponent } from './app.component';


const routes: Routes = [
  { 
    path: '', 
    component: AppComponent,
    children: [
      {
        path: '',
        loadChildren: './components/sidebar/sidebar.module#SidebarModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
