import { Routes } from '@angular/router';
import { AuthenticatorComponent } from './Pages/authenticator/authenticator.component';
import { SidebarComponent } from './UI/Shared-UI/sidebar/sidebar.component';
import { HomeComponent } from './Pages/home/home.component';

export const routes: Routes = [
  {path:'',redirectTo:'authenticator',pathMatch:'full'},
  {path:'authenticator',component:AuthenticatorComponent},
  {
    path:'',component:SidebarComponent,

    children:[{
      path:'home',component:HomeComponent
    }]
  }
];
