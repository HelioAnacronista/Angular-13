import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './components/template/nav/nav.component';
import { ToListCrudComponent } from './components/template/to-list-crud/to-list-crud.component';
import { HomeComponent } from './views/home/home.component';

const routes: Routes = [
  {path: '', component : HomeComponent},
  {path: 'tolists', component : ToListCrudComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
