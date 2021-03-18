import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-home', 
    templateUrl: './home.page.html', 
    styleUrls: ['./home.page.scss']
})
export class HomePageComponent{

    constructor(
        private router: Router
    ){}

    public goToQuoteForm(): void{
        this.router.navigate(['/','get-quote']);
    }

}