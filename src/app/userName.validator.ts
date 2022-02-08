import { AbstractControl, ValidatorFn } from "@angular/forms";

export function forbiddenNameValidator(forbiddenName:RegExp) :ValidatorFn 
{
    return (control:AbstractControl)=>{

        const forbeddin=forbiddenName.test(control.value);
        return forbeddin ? {'forbiddenName':{value: control.value}} :null;
    }

}

