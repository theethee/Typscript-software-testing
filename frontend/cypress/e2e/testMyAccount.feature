Feature: My Account component

Jag loggar in mig. Därefter navigerar jag till my account, där jag ändrar firstname och lastname.

Scenario: Logga in, naivigera till my account och ändra firstname och lastname

Given Jag loggar in mig själv och navigerar till my account.

When Jag ändrar firstname och lastname.

Then Jag sparar mina ändringar.

 Scenario: Raderar kontot.

 Given Jag loggar in och klickar på my account.

 When Jag kollar om deleteknappen finns.

 Then Jag tar bort kontot och navigeras till Homesidan.
