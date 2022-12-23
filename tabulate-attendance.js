function tabulateAttendance() {
  members = {
    "Aaron Ang": 0,
    "Aiden Fockens": 0,
    "Alyssa Goins": 0,
    "Anand Shetler": 0,
    "Andre Lesnick": 0,
    "Angelo Facciponti-Mennella": 0,
    "Anming Gu": 0,
    "Azamat Khanbabaev": 0,
    "Bowen Li": 0,
    "Brinja Vogler": 0,
    "Conor Walsh": 0,
    "Daniel Melchor Hachuel": 0,
    "David Anthony Sullo": 0,
    "Derek Laboy": 0,
    "Derek Roberts": 0,
    "Dominic Charles Maglione": 0,
    "Elaine Leiyoung": 0,
    "Eren Budur": 0,
    "Erin McAteer": 0,
    "Ethan Seow": 0,
    "Evan Hsu": 0,
    "Farid Karimli": 0,
    "Frank Pacini": 0,
    "Gabriel Tubio Moncau": 0,
    "Grace Elias": 0,
    "Grace Murphy": 0,
    "Griffin": 0,
    "Guerdon Ligon": 0,
    "Haris Catic": 0,
    "Hasan Mustafabeyli": 0,
    "Hilal Sena Byram": 0,
    "Isaac Hu": 0,
    "Jason Li": 0,
    "John Bestavros": 0,
    "John Bolognino": 0,
    "Jonas Raedler": 0,
    "Justin Sayah": 0,
    "Kelly Chen": 0,
    "Kenneth Thompson": 0,
    "Kevin Smith": 0,
    "Kradon S Zhao": 0,
    "Lindsay Liu": 0,
    "Louis Grassi": 0,
    "Marek ": 0,
    "Matthew Berk": 0,
    "Matthew Hilliard": 0,
    "Matthew Robert Henriksen": 0,
    "Megha Bharadwaj": 0,
    "Ming Hill": 0,
    "Minh Le": 0,
    "Nina Athma": 0,
    "Noah Barnes": 0,
    "Noah Jean-Baptiste": 0,
    "Noah Reed": 0,
    "Osama Dabbousi": 0,
    "Patrick Kuzdzal": 0,
    "Philippe Ledoit": 0,
    "Phillip Bach-Luong Tran Jr.": 0,
    "Quang Minh Le": 0,
    "Quentin Clark": 0,
    "Rani H Shah": 0,
    "Rithvik Nakirikanti": 0,
    "Sai Nayunipati": 0,
    "Sam Pomerantz": 0,
    "Sarina Singh": 0,
    "Seonghoo Kim": 0,
    "Shasta Narayanan": 0,
    "Siddhant Kothari": 0,
    "Sydney Jenkin": 0,
    "Tan Aydemir": 0,
    "Thanh Huynh": 0,
    "Tianze Shan": 0,
    "Tilak Agarwal": 0,
    "Toby Ueno": 0,
    "Tsz Kit Wong": 0,
    "Vineet Raju": 0,
    "Vitor Vicente": 0,
    "Yin-Ching Lee": 0,
    "Yuanming Chai": 0,
  }

  let responsesSheet = SpreadsheetApp.getActive().getSheetByName("Form Responses 1");
  let responsesValues = responsesSheet.getDataRange().getValues();

  for (let i = 1; i < responsesSheet.getDataRange().getNumRows(); i++) {
    let memberName = responsesValues[i][2];
    members[memberName] = 1;
  }

  let attendanceList = [];
  for (const [key, value] of Object.entries(members)) {
    attendanceList.push([key, value])
  }

  attendanceList.sort((a, b) => {
    return a[0].localeCompare(b[0]);
  });

  for (let i = 0; i < attendanceList.length; i++) {
    responsesSheet.getRange(i+2, 5).setValue((attendanceList[i][0]));
    responsesSheet.getRange(i+2, 6).setValue((attendanceList[i][1]));
  }
}
