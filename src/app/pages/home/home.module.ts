import { NgModule } from '@angular/core';

import { HomePageComponent } from './home.page';

import { CustomComponentsModule } from '../../components/customComponents.module';

@NgModule({
    imports: [
        CustomComponentsModule
    ],
    declarations: [ 
        HomePageComponent
    ], 
    exports: []
})
export class HomePageModule{}