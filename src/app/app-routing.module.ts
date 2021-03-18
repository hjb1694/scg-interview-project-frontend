import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';

//Pages
import { HomePageComponent } from './pages/home/home.page';

const routes: Routes = [
    {
        path: 'home', 
        component: HomePageComponent
    }, 
    {
        path: '', 
        pathMatch: 'full', 
        redirectTo: 'home'
    }
]


@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ], 
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule{}