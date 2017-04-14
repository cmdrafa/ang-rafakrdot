import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { provideRoutes} from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProjectsComponent } from './projects/projects.component';
import { TwitchAppComponent } from './projects/twitchapp/twitchapp.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent },
  { path: 'projects', component: ProjectsComponent, canActivate: [AuthGuard]},
  { path: 'twitchapp', component:TwitchAppComponent, canActivate: [AuthGuard]},
  { path: 'register', component: RegisterComponent},
  { path: '**', component: NotFoundComponent }
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);