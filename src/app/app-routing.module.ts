import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'step-one',
    loadChildren: () => import('./step-one/step-one.module').then( m => m.StepOnePageModule)
  },
  {
    path: 'step-two',
    loadChildren: () => import('./step-two/step-two.module').then( m => m.StepTwoPageModule)
  },
  {
    path: 'step-three',
    loadChildren: () => import('./step-three/step-three.module').then( m => m.StepThreePageModule)
  },  {
    path: 'step-four',
    loadChildren: () => import('./step-four/step-four.module').then( m => m.StepFourPageModule)
  }



];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
