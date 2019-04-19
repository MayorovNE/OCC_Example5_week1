import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavigationComponent } from 'src/navigation/navigation.component';
import { CommonModule } from '@angular/common';
import { SportStoreComponent } from 'src/sport_store/sport_store.component';

const routes: Routes = [
  { path: 'navigation',  children: [
    { path: '', component: NavigationComponent},
    { path: 'example5', component: SportStoreComponent}
  ]},
  { path: '', redirectTo: '/navigation', pathMatch: 'full'},
];

@NgModule({
  imports: [ CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

