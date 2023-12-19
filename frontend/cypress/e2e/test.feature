
Feature: Home komponenten

Det ska finnas ett logga in formulär där det ska finnas inputfält för username, password och en sign in-knapp. När man skrivit in fel username eller password ska en varnings-popup dyka upp. Har man skrivit in rätt username och lösenord ska man kunna logga in och hamna i landingpage.

Scenario: Först fel inmatning

Given Jag är inne på Home-sidan

When Jag skriver in fel username och password och klickar på sign in-knappen

Then Varnings-popupruta visar ett felmeddelande. Jag stänger popupen.

Scenario: Rätt inmatning

Given Jag är fortfarande inne på Home-sidan

When Jag skriver in rätt username och password

Then Jag klickar på sign in-knappen navigeras till landingpage

Scenario: Navigering i landingpage

Given Jag har nu hamnat i landingpage

When Jag klickar på my account och navigerar tillbaka

Then Jag upptäcker saved courses och all courses
