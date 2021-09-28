import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; //routing functionality
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

//Routes tell the Router which view to display when a user clicks a link or pastes a URL into the browser address bar
const routes: Routes = [
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
  //This route redirects a URL that fully matches the empty path to the route whose path is '/dashboard'
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  //The colon (:) in the path indicates that :id is a placeholder for a specific hero id
  { path: 'detail/:id', component: HeroDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
