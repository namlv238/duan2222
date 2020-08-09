import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { ClientmainComponent } from './client/clientmain/clientmain.component';
import { HomeComponent } from './client/Home/home/home.component';


const routes: Routes = [
  {
    path: '', component: ClientmainComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent } ,
    
    ]
  },
  // {
  //   path: 'admin', component: AdminComponent,
  //   children: [
  //     { path: '', redirectTo: 'manager', pathMatch: 'full' },
  //     { path: 'top3', component: HeaderComponent },
  //     { path: 'manager', component: ManagerProductComponent },
  //     { path: 'add', component: AddProductComponent },
  //     {path:'detail/:id',component:DetailtProductComponent},
  //     {path:'edit-product/:id',component:EditProductComponent},
  //   ]
  // },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
