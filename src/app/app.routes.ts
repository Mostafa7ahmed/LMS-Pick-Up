import { Routes } from '@angular/router';
import { LoginComponent } from './Pages/login/login.component';
import { StartregisterComponent } from './Pages/startregister/startregister.component';
import { RegisterinstructorComponent } from './Pages/registerinstructor/registerinstructor.component';
import { RegisterstudentComponent } from './Pages/registerstudent/registerstudent.component';

export const routes: Routes = [

    { path: "", title:"Login",component: LoginComponent },
    { path: "startregister", title:"startregister",component: StartregisterComponent },

    { path: "RegisterInstructor", title:"startregister",component: RegisterinstructorComponent },
    { path: "RegisterStudent", title:"startregister",component: RegisterstudentComponent },



];
