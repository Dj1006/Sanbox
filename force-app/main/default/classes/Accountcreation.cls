public with sharing class Accountcreation {
    @AuraEnabled(cacheable = true)
    public static void insertAccount(string accName ) {
        Account acc = new Account();
        {
            acc.Name = accName;
            
        }
            
            //insert acc;
        
    }

}
