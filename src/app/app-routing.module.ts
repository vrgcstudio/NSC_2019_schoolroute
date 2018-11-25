import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { StatusComponent } from './components/status/status.component';
import { LoginComponent } from './components/login/login.component';



const routes: Routes = [
  { path: "", component: LoginComponent},
  { path: "choosestatus", component: StatusComponent},
  { path: "register", component: RegisterComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
