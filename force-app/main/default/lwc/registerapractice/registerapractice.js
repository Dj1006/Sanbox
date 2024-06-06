import { LightningElement,track } from 'lwc';
import accountcreate from '@salesforce/apex/Accinsert.createaccount';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';


export default class Registerapractice extends LightningElement
 {
    @track Firstname= '';
    @track Lastname= '';
    @track email= '' ;
    @track phone='';
    get phone1()
    {
        return `${this.Phone}`;
    }
    get Email1()
    {
        return `${this.email}`;
    }
    get name() {
        return `${this.Firstname} ${this.Lastname}`;
        
    }
    
    firstnamehandler(event)
    {
        this.Firstname = event.target.value;
    }
    lastnamehandler(event)
    {
        this.Lastname = event.target.value;
    }
    Emailhandler(event)
    {
        this.email = event.target.value;
    }
    Phonehandler(event)
    {
        this.phone = event.target.value;
    }
    Buttonclick()
    {
        accountcreate({name:this.name,phone:this.phone1,email__c :this.Email1})
        .then(() => {
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Success',
                    message: 'Account created successfully',
                    variant: 'success',
                }),
            );
            this.clearFields();
        })
        .catch(error => {
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Error',
                    message: error.body.message,
                    variant: 'error',
                }),
            );
        });
}

    

clearFields() {
    this.firstName = '';
    this.lastName = '';
    this.phone = '';
    this.email = '';
}
 }