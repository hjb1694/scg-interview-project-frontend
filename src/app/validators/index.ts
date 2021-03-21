import { AbstractControl, ValidationErrors } from "@angular/forms";
import stringLength from 'string-length';

export default class CustomValidators{

    static required(control: AbstractControl): ValidationErrors {
        if(stringLength(control.value.trim()) < 1){
            return {isRequiredLen: false}
        }
        return null;
    }

    static phoneFormat(control: AbstractControl): ValidationErrors {
        const phoneRegs = /^[0-9]{3}\-[0-9]{3}\-[0-9]{4}$/;
        if(!phoneRegs.test(control.value)){
            return {phoneValidFormat: false}
        }
        return null;
    }

    static zipCode(control: AbstractControl): ValidationErrors{
        const zipRegs = /^[0-9]{5}$/;
        if(!zipRegs.test(control.value)){
            return {validZip: false}
        }
        return null;
    }

    static wholeNumber(control: AbstractControl): ValidationErrors{
        if(!Number.isInteger(+control.value)){
            return {isInt: false}
        }
        return null;
    }
}