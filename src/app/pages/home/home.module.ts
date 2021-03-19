import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'

import { HomePageComponent } from './home.page';

import { CustomComponentsModule } from '../../components/customComponents.module';

@NgModule({
    imports: [
        CustomComponentsModule, 
        CommonModule
    ],
    declarations: [ 
        HomePageComponent
    ], 
    exports: []
})
export class HomePageModule{}