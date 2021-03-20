import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuotePageComponent } from './quote.page';

import { CustomComponentsModule } from '../../components/customComponents.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CustomComponentsModule, 
        CommonModule, 
        ReactiveFormsModule
    ], 
    declarations: [
        QuotePageComponent, 
    ], 
    exports: []
})
export class QuotePageModule{}