"use strict";
var Constants_1 = require('../Common/Constants');
// @Directive({
//     selector: '[nameValidator]',
//     providers: [{ provide: NG_VALIDATORS, useExisting: NameValidatorDirective, multi: true }]
// })
// export class NameValidatorDirective implements Validator, OnChanges {
//     @Input() nameValidator: string;
//     private returnControl = Validators.nullValidator;
//     ngOnChanges(changes: SimpleChanges) {
//         const change = changes['nameValidator'];
//         if (change) {
//             const val: string | RegExp = change.currentValue;
//             const re = val instanceof RegExp ? val : new RegExp(val, 'i')
//             this.returnControl = validateField(re);
//         }
//         else {
//             return this.returnControl;
//         }
//     }
//     validate(control: AbstractControl): { [key: string]: any } {
//         return this.returnControl(control);
//     }
// }
function validateField(validationObject, param) {
    var validationMessages = new Constants_1.ValidationMessages();
    var validationExpression = new Constants_1.ValidationExpression();
    return function (control) {
        var controlValues = control.value;
        var count = new String(controlValues).length;
        if (control.dirty && validationObject.ValidationType != '') {
            switch (validationObject.ValidationType) {
                case 'FullName':
                    if (controlValues == "") {
                        return { 'message': Constants_1.ValidationMessages.Messages.FullName_Required };
                    }
                    else if (!(Constants_1.ValidationExpression.Expressions.FullName_Valid.test(controlValues))) {
                        return { 'message': Constants_1.ValidationMessages.Messages.FullName_Valid };
                    }
                    else if (count < 4) {
                        return { 'message': Constants_1.ValidationMessages.Messages.FullName_Minimum };
                    }
                    else if (count > 30) {
                        return { 'message': Constants_1.ValidationMessages.Messages.FullName_Maximum };
                    }
                    break;
                case 'PhoneNumber':
                    if (controlValues == "") {
                        return { 'message': Constants_1.ValidationMessages.Messages.PhoneNumber_Required };
                    }
                    else if (!(Constants_1.ValidationExpression.Expressions.PhoneNumber_Valid.test(controlValues))) {
                        return { 'message': Constants_1.ValidationMessages.Messages.PhoneNumber_Valid };
                    }
                    break;
                case 'TravelDate':
                    var givenDate = new Date(controlValues);
                    var currentDate = new Date();
                    if (givenDate <= currentDate) {
                        return { 'message': Constants_1.ValidationMessages.Messages.TravelDate_Required };
                    }
                    break;
                case 'Cab_FromPlace':
                    if (controlValues == "") {
                        return { 'message': Constants_1.ValidationMessages.Messages.Cab_FromPlace_Required };
                    }
                    else if (!(Constants_1.ValidationExpression.Expressions.Cab_FromPlace_Valid.test(controlValues))) {
                        return { 'message': Constants_1.ValidationMessages.Messages.Cab_FromPlace_Valid };
                    }
                    break;
                case 'Cab_ToPlace':
                    if (controlValues == "") {
                        return { 'message': Constants_1.ValidationMessages.Messages.Cab_ToPlace_Required };
                    }
                    else if (!(Constants_1.ValidationExpression.Expressions.Cab_ToPlace_Valid.test(controlValues))) {
                        return { 'message': Constants_1.ValidationMessages.Messages.Cab_ToPlace_Valid };
                    }
                    break;
                case 'Trip_NumberOfDays':
                    if (controlValues == "") {
                        return { 'message': Constants_1.ValidationMessages.Messages.Trip_NumberOfDays_Required };
                    }
                    else if (!(Constants_1.ValidationExpression.Expressions.Trip_NumberOfDays_Valid.test(controlValues))) {
                        return { 'message': Constants_1.ValidationMessages.Messages.Trip_NumberOfDays_Valid };
                    }
                    break;
                case 'Trip_Places':
                    if (controlValues == "") {
                        return { 'message': Constants_1.ValidationMessages.Messages.Trip_Places_Required };
                    }
                    else if (!(Constants_1.ValidationExpression.Expressions.Trip_NumberOfDays_Valid.test(controlValues))) {
                        return { 'message': Constants_1.ValidationMessages.Messages.Trip_Places_Valid };
                    }
                    break;
                case 'Vehicle':
                    if (controlValues == "") {
                        return { 'message': Constants_1.ValidationMessages.Messages.Vehicle_Required };
                    }
                    break;
                case 'EmailId':
                    if (controlValues == "") {
                        return { 'message': Constants_1.ValidationMessages.Messages.EmailId_Required };
                    }
                    else if (!(Constants_1.ValidationExpression.Expressions.EmailId_Valid.test(controlValues))) {
                        return { 'message': Constants_1.ValidationMessages.Messages.EmailId_Valid };
                    }
            }
        }
        else
            return null;
    };
}
exports.validateField = validateField;
//# sourceMappingURL=Directives.js.map