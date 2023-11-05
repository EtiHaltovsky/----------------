const newrequests = require('../controllers/newrequestsController');
const preferences = require('../controllers/preferencesController');

//convert preferences and rank of volunteers to matrix for using munkres purpose
//המר העדפות ודירוג המתנדבים למטריצה לשימוש במטרה של munkres
function dataToProfitMatrix( preferences) {
    var matrix = [];
   
    //  להגדיר את i
            matrix[i] = [];
            for (let j = 0, pref; j < 2; j++) {
                switch (j) {
                    case 0:
                        pref = 'firstAidKnowledge';
                        break;
                    case 1:
                        pref = 'disabledVehicle';
                        break;
                  
                }
                // matrix[i][j] = getaRankByPreference(pref, preferences[pref]);
            }

       
        let munkresResult=useMunkres(matrix);

        // passenger.volunteers=munkresResultToIds(munkresResult,passenger.Volunteers);
  
    // return passengersAndVolunteers;
}


//get the right rank of each preference
function getaRankByPreference(preference, passRank, volRank) {
    var rank;
    switch (preference) {
        case firstAidKnowledge:
            if (volRank === 0)
                rank = 0;
            else {
                rank = passRank * 10;
            }
            break;
        case disabledVehicle:
            switch (volRank) {
                case 2:
                    rank = passRank * 5;
                    break;
                case 5:
                    rank = passRank * 5 + 1;
                    break;
                case 7:
                    rank = passRank * 5 + 2;
                    break;
                case 9:
                    rank = passRank * 5 + 3;
                    break;
                case volRank > 9:
                    rank = passRank * 5 + 4;
                    break;
            }
            break;
        
    }
    return rank;
}