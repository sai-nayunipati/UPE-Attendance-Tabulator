# UPE Attendance Tabulator

Tabulates meeting attendance data for Boston University's chapter of Upsilon Pi Epsilon.

## Description

I completed this project during my "provisional period" as a new inductee. Members can scan a QR code and submit a Google Form marking their attendance. My Google Apps Script program can quickly format the data so that it can be copy-pasted into a master spreadsheet.

## Getting Started

### Dependencies

None.

### Executing program

* Use this [link](https://drive.google.com/drive/folders/1Y9dGcUvnA7B85MmR0Sm6Le4wU_t6quJA?usp=sharing) to open a Google Drive folder with all the relevant files. For security reasons, the link only works for certain accounts.
* For each new meeting, duplicate "UPE Weekly Attendance (Responses)". This will automatically create a linked duplicate of the relevant Google Form.
* After the meeting open the copied responses spreadsheet. Under "Extensions" click "Apps Script". Run the program that appears.
* You will find alphabetized attendance data after returning to the spreadsheet. Copy and paste this to the master spreadsheet. Adjust the point multiplier as desired.
* This program relies on sorting members by their names. It is possible to modify it to work for new members. First, include the member's name as an option in the Google Form. Second, copy-paste their name into the "members" dictionary in the GAS script. Third, copy-paste their name into the correct position in the master spreadsheet to maintain alphabetical order.

## Version History

* 1.0
    * Initial Release

## License

This project is licensed under the MIT License - see the LICENSE.md file for details

## Acknowledgments
None.
