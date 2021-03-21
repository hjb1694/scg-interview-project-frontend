import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import CustomValidators from '../../validators';

@Component({
    selector: 'app-quote', 
    templateUrl: './quote.page.html', 
    styleUrls: ['./quote.page.scss']
})
export class QuotePageComponent implements OnInit{

    public states: string[] = ['Alabama','Alaska','American Samoa','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','District of Columbia','Federated States of Micronesia','Florida','Georgia','Guam','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Marshall Islands','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Northern Mariana Islands','Ohio','Oklahoma','Oregon','Palau','Pennsylvania','Puerto Rico','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virgin Island','Virginia','Washington','West Virginia','Wisconsin','Wyoming'];
    
    public currentFormPart: number = 1;
    public quoteForm: FormGroup;
    public formErrors = {
        partOne: [], 
        partTwo: []
    }
    public partRequiredFields = {
        partOne: [
            {
                field: 'firstName', 
                errMsg: 'Please enter a valid first name.'
            }, 
            {
                field: 'lastName', 
                errMsg: 'Please enter a valid last name'
            }, 
            {
                field: 'street', 
                errMsg: 'Please enter a valid street address.'
            }, 
            {
                field: 'city', 
                errMsg: 'Please enter a city.'
            }, 
            {
                field: 'state', 
                errMsg: 'Please select a state.'
            }, 
            {
                field: 'zip', 
                errMsg: 'Please enter a valid 5-digit zip code.'
            }, 
            {
                field: 'phone', 
                errMsg: 'Please enter a valid phone number with format XXX-XXX-XXXX.'
            }
        ], 
        partTwo: [
            {
                field: 'sqft', 
                errMsg: 'Please enter a square footage.', 
            }
        ]
    }

    constructor(){}

    ngOnInit(){
        this.quoteForm = new FormGroup({
            'firstName': new FormControl('', [
                CustomValidators.required
            ]), 
            'lastName': new FormControl('', [
                CustomValidators.required
            ]), 
            'street': new FormControl('', [
                CustomValidators.required
            ]), 
            'city': new FormControl('', [
                CustomValidators.required
            ]), 
            'state': new FormControl('', [
                Validators.required
            ]), 
            'zip': new FormControl('', [
                CustomValidators.zipCode
            ]), 
            'phone': new FormControl('', [
                CustomValidators.phoneFormat
            ]), 
            'sqft': new FormControl(null, [
                CustomValidators.required
            ]), 
            'cabinets': new FormControl(0), 
            'openers': new FormControl(0), 
            'racks': new FormControl(0)
        });
    }

    private validateField(field: string, part: string, msg: string){
        this.quoteForm.get(field).invalid && this.formErrors[part].push(msg);
    }

    private validatePart(part: string): boolean {
        let isValid = true;
        this.formErrors[part] = [];

        for(let f of this.partRequiredFields[part]){
            this.validateField(f.field, part, f.errMsg);
        }

        this.formErrors[part].length && (isValid = false);
        return isValid;
    }

    public showFormPart(part: number): void{

        if(part === 2){
            if(!this.validatePart('partOne')) return;
        }

        this.currentFormPart = part;
    }

    public submitForm(): void{
        if(!this.validatePart('partTwo')) return;

        alert('success!');
    }

}