import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StatusComponent } from './components/status/status.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterStudentComponent } from './components/register-student/register-student.component';
import { RegisterDriverComponent } from './components/register-driver/register-driver.component';
import { RegisterParentComponent } from './components/register-parent/register-parent.component';



const routes: Routes = [
  { path: "", component: LoginComponent},
  { path: "choosestatus", component: StatusComponent},
  { path: "registerstu", component: RegisterStudentComponent },
  { path: "registerdri", component: RegisterDriverComponent},
  { path: "registerpar", component: RegisterParentComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
