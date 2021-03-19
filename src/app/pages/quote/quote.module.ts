import { NgModule } from '@angular/core';

import { QuotePageComponent } from './quote.page';

import { CustomComponentsModule } from '../../components/customComponents.module';

@NgModule({
    imports: [
        CustomComponentsModule
    ], 
    declarations: [
        QuotePageComponent, 
    ], 
    exports: []
})
export class QuotePageModule{}