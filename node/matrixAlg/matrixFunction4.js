// הפונקציה מבצעת עיבוד על רשימת הנוסעים ומבצעת החלפות של מתנדבים במקרים של כפילויות, על פי דרגת הרוחב שלהם.
//פונקציה למציאת מתנדבים כפולים וסידורם
var statusOFMoreThenOneInCar = false;


function FixDuplicateOptimalVolunteer(volunteerForPassengersList) {
    // מתחילים על ידי יצירת משתנים שונים לשימוש במהלך התהליך.
    var str = JSON.stringify(volunteerForPassengersList);
    console.log("enter FixDuplicateOptimalVolunteer function with passengers: " + str);
    var problamaticPassengers = [];
    var indexProblamaticPassengers = [];
    var firstVolunteers = [];
    var indexOFTwoInCar = [];
    //get passengers first volunteers
    // מבצעים מפה על רשימת הנוסעים על מנת ליצור מערך של המתנדבים הראשונים שנבחרו עבור כל נוסע.
    //  המערך נקרא firstVolunteers.
    volunteerForPassengersList.map((o, i) => { firstVolunteers.push(o.volunteers[0]) });
    console.log(JSON.stringify(firstVolunteers));

    //return true if there are duplicates and false if not.
    // בודקים האם יש כפילויות במערך firstVolunteers על ידי שימוש בפונקציה some 
    // ומחזירים ערך בוליאני בהתאם. אם אין כפילויות, מדפיסים הודעה בלוגית.
    var isThereDuplicate = firstVolunteers.some((val, i) => firstVolunteers.indexOf(val) !== i);
    if (!isThereDuplicate)
        console.log("no duplicates");
    else {
        // אם יש כפילויות, מתחילים לתקן אותן.
        // מבצעים לולאה שממשיכה כל עוד יש כפילויות במערך firstVolunteers.
        while (isThereDuplicate) {
            // בכל סיבוב של הלולאה, מציאת הכפילויות באמצעות פונקציה getAllDuplicatesVolunteers,
            //  ומקבלים מערך של הנוסעים הפרובלמטיים.
            problamaticPassengers = getAllDuplicatesVolunteers(firstVolunteers);
            console.log("problamaticPassengers: " + JSON.stringify(problamaticPassengers));
            // לכל נוסע פרובלמטי, מבצעים את הפונקציה getTheIndexesOfDuplicateVolunteer 
            // כדי למצוא את האינדקסים של הכפילויות במערך firstVolunteers.
            for (let i = 0; i < problamaticPassengers.length; i++) {
                console.log("enter the for loopppp :)");
                indexProblamaticPassengers = getTheIndexOfDuplicatesVolunteers(problamaticPassengers[i], firstVolunteers);
             // בודקים את דרגת הרוחב הגבוהה ומבצעים החלפת מתנדבים באמצעות הפונקציה checkHigherRankAndSwap.
                checkHigherRankAndSwap(volunteerForPassengersList, indexProblamaticPassengers);
                                // מעדכנים את מערך firstVolunteers לאחר החלפות המתנדבים.
                volunteerForPassengersList.map((o, i) => { firstVolunteers.push(o.volunteers[0]) });
                // בודקים אם יש עוד נוסעים עם יותר ממתנדב אחד ברכב. 
                // אם כן, מוחקים את המתנדבים הנוספים ממערך firstVolunteers.
                if (statusOFMoreThenOneInCar) {
                    while (indexOFTwoInCar !== null) {
                        firstVolunteers.splice(indexOFTwoInCar, indexOFTwoInCar + 2);
                        indexOFTwoInCar.pop();

                    }
                }
                // שוב בודקים האם יש כפילויות במערך firstVolunteers. אם כן, הלולאה ממשיכה. אם לא, היא מסתיימת.
                isThereDuplicate = firstVolunteers.some((val, i) => firstVolunteers.indexOf(val) !== i);

            }
        }
    }
    console.log("schedule finished!");
}