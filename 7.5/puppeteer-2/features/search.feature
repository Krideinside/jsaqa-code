Feature: Choose places

Scenario: choose active place on Zveropolis thursday 11:00
  Given user is on cinema page            
  When user click tuesday
  And user click on Zveropolis time 
  And user click on a row 4 chair 5
  And user click on the acception button
  Then user see confirmation message

Scenario: choose active place on Terminator wednesday 10:00
  Given user is on cinema page            
  When user click wednesday
  And user click on Terminator time 
  And user click on a row 5 chair 7
  And user click on the acception button
  Then user see confirmation message

Scenario: choose not active place on Zveropolis wednesday 11:00
  Given user is on cinema page            
  When user click wednesday
  And user click on Zveropolis time 
  And user click on not active row 4 chair 4
  Then user looks that the button is disabled