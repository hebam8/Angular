import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommentsComponent } from './comments/comments.component';
import { DiscountComponent } from './discount/discount.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NoDiscountComponent } from './no-discount/no-discount.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PostsComponent } from './posts/posts.component';
import { ProductsComponent } from './products/products.component';
import { RegisterComponent } from './register/register.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  // { path: '', redirectTo: '/Header', pathMatch: 'full' },
  // { path: 'Header', component: HeaderComponent },
  { path: 'Header', component: HomeComponent },
  {
    path: 'Products',
    component: ProductsComponent,
    children: [
      { path: 'discount', component: DiscountComponent },
      { path: 'nodiscount', component: NoDiscountComponent },
    ],
  },
  { path: 'Users', component: UsersComponent },
  { path: 'Postes', component: PostsComponent },
  { path: 'comments/:id', component: CommentsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
