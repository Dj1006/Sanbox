import { LightningElement, track } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import PHONE_FIELD from '@salesforce/schema/Account.Phone';

export default class Test extends LightningElement {
    @track accountfname = '';
   // @track accountlname = '';
   //<lightning-input-field field-name="LastName" value={accountlname} onchange={handlelastNameChange}></lightning-input-field>;
    @track accountphone = '';

    handleNameChange(event) {
        this.accountfname = event.target.value;
    }

    //handlelastNameChange(event) {
       // this.accountlname = event.target.value;
    //}

    handlePhoneChange(event) {
        this.accountphone = event.target.value;
    }

    createaccount() {
        const recordInput = {
            apiName: ACCOUNT_OBJECT.objectApiName,
            fields: {
                [NAME_FIELD.fieldApiName]: this.accountfname,
                [PHONE_FIELD.fieldApiName]: this.accountphone
            }
        };
        createRecord(recordInput)
            .then(() => {
                // Success message or any other action upon successful record creation
            })
            .catch(error => {
                // Error handling
            });
    }
}
