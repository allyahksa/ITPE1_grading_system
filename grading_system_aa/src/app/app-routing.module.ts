import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { RegistrationComponent } from './registration/registration.component';
import { StudentsComponent } from './layout/students/students.component';
import { TeachersComponent } from './layout/teachers/teachers.component';

const routes: Routes = [
  { path: '', redirectTo:'login', pathMatch:'full'},
  { path: 'dashboard', redirectTo:'dashboard', pathMatch:'full'},
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'students', component: StudentsComponent },
  { path: 'teachers', component: TeachersComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
