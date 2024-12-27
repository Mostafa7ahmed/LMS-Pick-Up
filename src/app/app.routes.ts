import { Routes } from '@angular/router';
import { LoginComponent } from './Pages/login/login.component';
import { StartregisterComponent } from './Pages/startregister/startregister.component';

export const routes: Routes = [

    { path: "", title:"Login",component: LoginComponent },
    { path: "startregister", title:"startregister",component: StartregisterComponent },


];
