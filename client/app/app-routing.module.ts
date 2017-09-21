import { NgModule } from '@angular/core';
import { Routes, RouterModule } from  '@angular/router';

// COMPONENTS
import { FormComponent }  from './form/form.component';
import { FormDataComponent } from  './form-data/form-data.component';

// IMPORT ROUTES
export const routes: Routes = [
  {
   path: '',
   component: FormComponent
  },
  {
    path: 'confirm',
    component: FormDataComponent
  }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
