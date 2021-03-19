import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuotePageComponent } from './quote.page';

import { CustomComponentsModule } from '../../components/customComponents.module';

@NgModule({
    imports: [
        CustomComponentsModule, 
        CommonModule
    ], 
    declarations: [
        QuotePageComponent, 
    ], 
    exports: []
})
export class QuotePageModule{}