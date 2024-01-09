Feature: My Account component

Jag loggar in mig. Därefter navigerar jag till my account, där jag ändrar firstname och lastname.

Scenario: Logga in, naivigera till my account och ändra firstname och lastname

Given Jag loggar in mig själv och navigerar till my account.

When Jag ändrar firstname och lastname.

Then Jag sparar mina ändringar.

Scenario: Raderar kontot.

Given Jag befinner mig fortfarande i my account.

When Jag klickar på Delete knappen.

Then Kontot har tagits bort och jag navigeras till Homesidan.
