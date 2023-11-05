// הפונקציה מבצעת בדיקת דרגות רוחב בין מתנדבים ומבצעת החלפה במקרים שבהם יש חוסר התאמה בדרגות.
//פונקציה לבדיקת גובה האילוצים ושיבוץ המתנדבים בהתאם
function checkHigherRankAndSwap(volunteerForPassengersList, indexProblamaticPassengers) {
    var lowestRankIndex = [];
    let indexOfTwoInCar = -1;
    // מבצעים לולאה כל עוד יש יותר ממתנדב אחד במערך indexProblamaticPassengers.
    while (indexProblamaticPassengers.length > 1) {
        let i = indexProblamaticPassengers.length - 1;
        
        // בכל סיבוב של הלולאה, מבצעים בדיקה של דרגות הרוחב בין המתנדב הנוכחי למתנדב הקודם במערך.
        // אם דרגת הרוחב של המתנדב הנוכחי נמוכה מהמתנדב הקודם,
        if (volunteerForPassengersList[indexProblamaticPassengers[i]].prefRank["leaftLet"] < volunteerForPassengersList[indexProblamaticPassengers[i - 1]].prefRank["leaftLet"]) {
             // מציינים את האינדקס של המתנדב הנמוך ביותר במשתנה lowestRankIndex.
            lowestRankIndex = indexProblamaticPassengers[i];
            console.log("check ranks: " + JSON.stringify(volunteerForPassengersList[indexProblamaticPassengers[i].prefRank["leaftLet"]]));
        }
        // אם דרגת הרוחב של המתנדב הנוכחי גבוהה מהמתנדב הקודם, 
        else if (volunteerForPassengersList[indexProblamaticPassengers[i]].prefRank["leaftLet"] > volunteerForPassengersList[indexProblamaticPassengers[i - 1]].prefRank["leaftLet"]) {
            // מציינים את האינדקס של המתנדב הקודם במשתנה lowestRankIndex.
            lowestRankIndex = indexProblamaticPassengers[i - 1];
        }
        else if (volunteerForPassengersList[indexProblamaticPassengers[i]].prefRank["space"] < volunteerForPassengersList[indexProblamaticPassengers[i - 1]].prefRank["space"]) {
            lowestRankIndex = indexProblamaticPassengers[i];
            console.log("check ranks: " + JSON.stringify(volunteerForPassengersList[indexProblamaticPassengers[i].prefRank["space"]]));

        }
        else if (volunteerForPassengersList[indexProblamaticPassengers[i]].prefRank["space"] > volunteerForPassengersList[indexProblamaticPassengers[i - 1]].prefRank["space"]) {
            lowestRankIndex = indexProblamaticPassengers[i - 1];
        }
        else if (volunteerForPassengersList[indexProblamaticPassengers[i]].prefRank["familiar"] < volunteerForPassengersList[indexProblamaticPassengers[i - 1]].prefRank["familiar"]) {
            lowestRankIndex = indexProblamaticPassengers[i];
            console.log("check ranks: " + JSON.stringify(volunteerForPassengersList[indexProblamaticPassengers[i].prefRank["familiar"]]));

        }
        else if (volunteerForPassengersList[indexProblamaticPassengers[i]].prefRank["familiar"] > volunteerForPassengersList[indexProblamaticPassengers[i - 1]].prefRank["familiar"]) {
            lowestRankIndex = indexProblamaticPassengers[i - 1];
        }

        //if they have the same preferences pop the first one- no matter who.
        // אם לא נמצאה דרגת רוחב נמוכה יותר, המשתנה lowestRankIndex יישאר -1.
        if (lowestRankIndex === -1) {
            //if he only has one volunteer left
            // במקרה שבו lowestRankIndex לא שווה ל- -1, מבצעים החלפה של המתנדבים במערך 
            // volunteerForPassengersList, על פי האינדקסים שנמצאו.
            if (volunteerForPassengersList[indexProblamaticPassengers[i]].volunteers.length === 1) {
                indexOFTwoInCar.push(onlyOneVolunteerSituation(volunteerForPassengersList, indexProblamaticPassengers, i));
            }
            else
                volunteerForPassengersList[indexProblamaticPassengers[i]].volunteers.shift();
        }
        // בודקים האם יש רק מתנדב אחד עבור הנוסע הנוכחי. 
        // אם כן, מבצעים פעולות נוספות ושומרים את האינדקס של המקרה הזה במערך indexOFTwoInCar.
        if (volunteerForPassengersList[lowestRankIndex].volunteers.length === 1) {
            indexOFTwoInCar.push(onlyOneVolunteerSituation(volunteerForPassengersList, indexProblamaticPassengers, lowestRankIndex));
        }
        // מבצעים הסרת המתנדב הראשון במערך volunteerForPassengersList, במקרה שהדרגות הן שוות.
        volunteerForPassengersList[lowestRankIndex].volunteers.shift();
        console.log("new volunteer list: " + JSON.stringify(volunteerForPassengersList[lowestRankIndex].volunteers));
        // מעדכנים את מערך indexProblamaticPassengers על פי המתנדבים שהוחלפו.
        indexProblamaticPassengers.splice(lowestRankIndex, lowestRankIndex + 1);

    }
    return indexOFTwoInCar;
}

