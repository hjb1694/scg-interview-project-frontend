import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Pages
import { HomePageComponent } from './pages/home/home.page';
import { QuotePageComponent } from './pages/quote/quote.page';

const routes: Routes = [
    {
        path: 'home', 
        component: HomePageComponent
    }, 
    {
        path: '', 
        pathMatch: 'full', 
        redirectTo: 'home'
    }, 
    {
        path: 'get-quote', 
        component: QuotePageComponent
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