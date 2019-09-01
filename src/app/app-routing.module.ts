import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'listar-todos',
    pathMatch: 'full'
  },
  { 
    path: 'listar-todos', 
    loadChildren: './pages/listar-todos/listar-todos.module#ListarTodosPageModule' 
  },
  { path: 'listar-firebase', loadChildren: './pages/listar-firebase/listar-firebase.module#ListarFirebasePageModule' },
  { path: 'create-fire-base', loadChildren: './pages/create-fire-base/create-fire-base.module#CreateFireBasePageModule' },
  { path: 'delete-firebase', loadChildren: './pages/delete-firebase/delete-firebase.module#DeleteFirebasePageModule' },
  { path: 'edit-firebase', loadChildren: './pages/edit-firebase/edit-firebase.module#EditFirebasePageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
