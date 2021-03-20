import { AbstractControl, ValidationErrors } from "@angular/forms";
import stringLength from 'string-length';

export default class CustomValidators{

    static required(control: AbstractControl): ValidationErrors {
        if(stringLength(control.value.trim()) < 1){
            return {isRequiredLen: false}
        }
        return null;
    }
}