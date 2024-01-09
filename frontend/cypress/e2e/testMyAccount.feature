Feature: My Account component

Jag loggar in mig. Därefter navigerar jag till my account, där jag ändrar firstname och lastname.

Scenario: Logga in, naivigera till my account och ändra firstname och lastname

Given Jag loggar in mig själv och navigerar till my account.

When Jag ändrar firstname och lastname.

Then Jag sparar mina ändringar.
