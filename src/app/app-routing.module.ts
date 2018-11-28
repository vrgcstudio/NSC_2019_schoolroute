import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StatusComponent } from './components/status/status.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterStudentComponent } from './components/register-student/register-student.component';
import { RegisterDriverComponent } from './components/register-driver/register-driver.component';
import { RegisterParentComponent } from './components/register-parent/register-parent.component';
import { ListCarComponent } from './components/list-car/list-car.component';
import { MenuStudentComponent } from './components/menu-student/menu-student.component';
import { MenuParentComponent } from './components/menu-parent/menu-parent.component';
import { MenuDriverComponent } from './components/menu-driver/menu-driver.component';



const routes: Routes = [
  { path: "", component: LoginComponent},
  { path: "choosestatus", component: StatusComponent},
  { path: "registerstu", component: RegisterStudentComponent },
  { path: "registerdri", component: RegisterDriverComponent},
  { path: "listcar", component: ListCarComponent},
  { path: "registerpar", component: RegisterParentComponent},
  { path: "userstu", component: MenuStudentComponent},
  { path: "userpa", component: MenuParentComponent},
  { path: "userdri", component: MenuDriverComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
