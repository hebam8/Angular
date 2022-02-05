import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PostsComponent } from './posts/posts.component';
import { ProductsComponent } from './products/products.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  // { path: '', redirectTo: '/Header', pathMatch: 'full' },
  // { path: 'Header', component: HeaderComponent },
  { path: 'Header', component: HomeComponent },
  { path: 'Products', component: ProductsComponent },
  { path: 'Users', component: UsersComponent },
  { path: 'Postes', component: PostsComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
