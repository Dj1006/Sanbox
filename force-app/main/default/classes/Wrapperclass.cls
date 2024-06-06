public with sharing class Wrapperclass {
    @AuraEnabled(cacheable=true)
    public static List<AccountContactWrapperClass> fetchAccountContactDetails(){
        List<AccountContactWrapperClass> lstAccountContWrapper = new List<AccountContactWrapperClass>();
        for(Account acc : [select id,name,type,BillingCity,BillingCountry,BillingStreet, (select id from Contacts) from 
                            Account where Name !=null WITH SECURITY_ENFORCED LIMIT 10]){
                                
            lstAccountContWrapper.add(new AccountContactWrapperClass(acc,acc.Contacts.size()));
        }
        return lstAccountContWrapper;
    }
    public class AccountContactWrapperClass{
        @AuraEnabled
        public Account acc;
        @AuraEnabled
        public Integer totalContacts;
        @AuraEnabled
        public String billingAdress;
        @AuraEnabled
        public String type;
        @AuraEnabled
        public String accountName;
        @AuraEnabled
        public String accountLink;

        public AccountContactWrapperClass(Account acc, Integer totalContacts){

            this.acc = acc;
            this.totalContacts = totalContacts;
            this.accountLink = '/' + acc.Id;
            this.type = acc.type;
            this.accountName = acc.Name;
            this.billingAdress = acc.BillingStreet + ',' + acc.BillingCity + ',' + acc.BillingCountry ;
        }

    }
}