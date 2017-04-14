import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { provideRoutes} from '@angular/router';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { appRouting } from './app.routing';
import { AppConfig } from './app.config';


import { AlertComponent } from './directives/alert.component';
import { AuthGuard } from './guards/auth.guard';
import { AlertService } from './services/alert.service';
import { AuthenticationService } from './services/authentication.service'
import { UserService } from './services/user.service'
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProjectsComponent } from './projects/projects.component';
import { TwitchAppService } from './projects/twitchapp/services/twitchapp.service';
import { TwitchAppComponent } from './projects/twitchapp/twitchapp.component';






@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    LoginComponent,
    RegisterComponent,
    AlertComponent,
    ProjectsComponent,
    TwitchAppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    JsonpModule,
    appRouting
  ],
  providers: [
    AppConfig,
    AuthGuard,
    AlertService,
    AuthenticationService,
    TwitchAppService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
