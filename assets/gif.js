// //initial array of NBA teams
// var teams = [
// "Atlanta Hawks",
// "Boston Celtics",
// "Brooklyn Nets", 
// "Charlotte Hornets", 
// "Chicago Bulls", 
// "Cleveland Cavaliers", 
// "Dallas Mavericks", 
// "Denver Nuggets", 
// "Detroit Pistons", 
// "Golden State Warriors", 
// "Houston Rockets", 
// "Indiana Pacers", 
// "Los Angeles Clippers", 
// "Los Angeles Lakers",
// "Memphis Grizzlies", 
// "Miami Heat", 
// "Milwaukee Bucks",
// "Minnesota Timberwolves", 
// "New Orleans Pelicans", 
// "New York Knicks", 
// "Oklahoma City Thunder", 
// "Orlando Magic", 
// "Philadelphia 76ers", 
// "Phoenix Suns", 
// "Portland Trail Blazers", 
// "Sacramento Kings", 
// "San Antonio Spurs", 
// "Toronto Raptors", 
// "Utah Jazz", 
// "Washington Wizards"
// ];

// //function to capture movie name from the data-attribute
// function alertNBATeam() {
//     var nbaTeam = $(this).attr("data-name"); 

//     alert(nbaTeam);
// }

// //function to display NBA data
// function renderButtons () {

// //deletes the teams prior to adding new teams
//     $("#buttons-view").empty();
// //for loop through the array of teams
// for (var i = 0; i < teams.length; i++) {
//     //generates button for each team in the array
//     var nba = $("<button>"); 
//     //adds class of team to the button
//     nba.addClass("team");
//     //adds a data-attr
//     nba.attr("data-name", teams[i]); 
//     //shows the text of the button
//     nba.text(teams[i]);
//     //adds the button to the html
//     $("#buttons-view").append(nba); 
//     }

// }

// $('#add-team').on("click", function(addnbaTeam) {
// console.log(addnbaTeam);

//     addnbaTeam.preventDefault(); 

//     var team = $('#nba-input').val().trim();

//     nbaTeam.push(team);

//     renderButtons();
// });

// $(document).on("click", ".team", alertnbaTeam); 

// renderButtons();
