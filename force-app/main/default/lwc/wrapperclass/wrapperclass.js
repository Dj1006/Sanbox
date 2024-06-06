import { LightningElement, track, wire } from 'lwc';
import getAccContacts from '@salesforce/apex/Wrapperclass.fetchAccountContactDetails';
const columns = [
    {
        label : 'Account Name',
        fieldName : 'accountLink',
        type : 'url',
        typeAttributes :{
            label : {
                fieldName : 'accountName'
            },
            target : '_blank'
        }
    },
    {
        label : 'Type',
        fieldName : 'type',
    },
    {
        label : 'Total Contacts',
        fieldName : 'totalContacts',
    },
    {
        label : 'Address',
        fieldName : 'billingAdress',
    }
]

export default class Wrapperclass extends LightningElement {
    @track columns = columns;
    @track data;
    @track error;
    @wire(getAccContacts)
    wiredAccountdata({error,data}){
        if(data){
            this.data = data;
        }
        else{
            this.error = error;
        }
    }

}