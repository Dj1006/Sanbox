import { LightningElement,track } from 'lwc';

export default class SelectionForm extends LightningElement {
    @track selectedValue;
    options = [
        { label: 'Register a practice', value: 'register_practice' },
        { label: 'Register a Provider', value: 'register_provider' }
    ];
    handleChange(event) {
        this.selectedValue = event.detail.value;
    }

    get isRegisterPractice() {
        return this.selectedValue === 'register_practice';
    }

    get isRegisterProvider() {
        return this.selectedValue === 'register_provider';
    }

   
}