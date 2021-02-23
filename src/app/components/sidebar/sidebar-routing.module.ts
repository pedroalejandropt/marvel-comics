import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar.component';


const routes: Routes = [
  { 
    path: '', 
    component: SidebarComponent,
    children: [
      {
        path: '',
        loadChildren: '../../pages/home/home.module#HomeModule'
      },
      {
        path: 'characters',
        loadChildren: '../../pages/characters/characters.module#CharactersModule'
      },
      {
        path: 'comics',
        loadChildren: '../../pages/comics/comics.module#ComicsModule'
      },
      {
        path: 'creators',
        loadChildren: '../../pages/creators/creators.module#CreatorsModule'
      },
      {
        path: 'series',
        loadChildren: '../../pages/series/series.module#SeriesModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SidebarRoutingModule { }
