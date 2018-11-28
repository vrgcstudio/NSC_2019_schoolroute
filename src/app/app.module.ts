import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StatusComponent } from './components/status/status.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterStudentComponent } from './components/register-student/register-student.component';
import { RegisterParentComponent } from './components/register-parent/register-parent.component';
import { RegisterDriverComponent } from './components/register-driver/register-driver.component';
import { ListCarComponent } from './components/list-car/list-car.component';
import { MenuStudentComponent } from './components/menu-student/menu-student.component';
import { MenuParentComponent } from './components/menu-parent/menu-parent.component';
import { MenuDriverComponent } from './components/menu-driver/menu-driver.component';



@NgModule({
  declarations: [
    AppComponent,
    StatusComponent,
    LoginComponent,
    RegisterStudentComponent,
    RegisterParentComponent,
    RegisterDriverComponent,
    ListCarComponent,
    MenuStudentComponent,
    MenuParentComponent,
    MenuDriverComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
