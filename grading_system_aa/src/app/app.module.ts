import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { UserManagementComponent } from './layout/user-management/user-management.component';
import { TopnavComponent } from './layout/components/topnav/topnav.component';
import { SidenavComponent } from './layout/components/sidenav/sidenav.component';
import { ScreenComponent } from './layout/components/screen/screen.component';
import { CardComponent } from './layout/components/card/card.component';
import { TeachersComponent } from './layout/teachers/teachers.component';
import { StudentsComponent } from './layout/students/students.component';
import { TableComponent } from './layout/components/table/table.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    LoginComponent,
    RegistrationComponent,
    DashboardComponent,
    UserManagementComponent,
    TopnavComponent,
    SidenavComponent,
    ScreenComponent,
    CardComponent,
    TeachersComponent,
    StudentsComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
