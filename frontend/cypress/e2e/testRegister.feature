Feature: Register component

Jag är i Homesidan och klickar på Registerlänken. Jag registrerar mig som en ny användare.

Scenario: Registrera ny användare

Given Jag är inne på Homesidan och klickar på Registerlänken.

When Jag skriver in all användarinformation i Registreringsformuläret.

Then Jag klickar på submit och navigeras till Homesidan.
