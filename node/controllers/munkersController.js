const PreferencesModel = require('../models/PreferencesModel')
const volunteerModel = require('../models/volunteerModel')
// const volunteers = require('../models/volunteerModel');

const newRequestsModel = require('../models/newRequestsModel');
// const preferencesModel = require('../models/PreferencesModel');
const volunteer = require('../models/volunteerModel');
let preferences;
let whereArray;
let fromArray;
let newRequests;
let newMatrix;
let n;
let cost_matrix;
let options;
let distance;
let Munkres;

var MAX_SIZE = parseInt(Number.MAX_SAFE_INTEGER / 2) || ((1 << 26) * (1 << 26));
// ערך ברירת מחדל לרפד את מטריצת העלות אם היא אינה ריבועית.
var DEFAULT_PAD_VALUE = 0;
const MAX_INT = Number.MAX_SAFE_INTEGER; // ערך ה-MAX_INT
const init = async () => {
    preferences = await PreferencesModel.find();//העדפות - דירוגים
    newRequests = await newRequestsModel.find();//בקשות   
    // whereArray = newRequests.map((request) => request.destination);;
    // fromArray = newRequests.map((request) => request.from);;
    // n = 10;


    Munkres = { C: null, row_covered: [], col_covered: [], n: preferences.length, Z0_r: 0, Z0_c: 0, marked: [], path: null }
    for (var i = 0; i < Munkres.n; i++) {
        Munkres.marked[i] = Array(Munkres.n).fill(0);
    }

    newMatrix = Array.from({ length: Munkres.n }, () => Array.from({ length: Munkres.n }, () => MAX_INT));
    // console.log("newMatrix", newMatrix)
    cost_matrix = Array.from({ length: Munkres.n }, () => Array.from({ length: Munkres.n }, () => MAX_INT));
    // Munkres.marked = Array.from({ length: Munkres.n }, () => Array(Munkres.n).fill(0));
    // console.log("Munkres", Munkres)
    // console.log("n",Munkres.n);
}
// // נקה את כל תאי המטריצה המכוסים
__clear_covers = function () {
    console.log("##################################################😂😂😂")
    for (var i = 0; i < Munkres.n; ++i) {
        Munkres.row_covered[i] = false;
        Munkres.col_covered[i] = false;
    }
};
//מחפשת את הערך הקטן ביותר בין התאים שאינם מסומנים בשורות או בעמודות במטריצה C.
//להחסיר מהלא מכוסים
__find_smallest = function () {
    var minval = MAX_SIZE;

    for (var i = 0; i < Munkres.n; ++i)
        for (var j = 0; j < Munkres.n; ++j)
            if (!Munkres.row_covered[i] && !Munkres.col_covered[j])
                if (minval > Munkres.C[i][j])
                    minval = Munkres.C[i][j];

    return minval;
};
// // למצוא את ה-0 הראשון שהוא לא בעמודה או השורה המסומנת
__find_a_zero = function () {
    // console.log("Munkres.col_covered", Munkres.col_covered);
    // console.log("Munkres.row_covered", Munkres.row_covered);
    for (var i = 0; i < Munkres.n; ++i)
        for (var j = 0; j < Munkres.n; ++j)
            // מחפש איפה יש 0 בשורה שעדיין לא סימנו אותה
            if (Munkres.C[i][j] === 0 &&
                !Munkres.row_covered[i] &&
                !Munkres.col_covered[j]) {
                console.log("__find_a_zero", i, j)
                return [i, j];

            }

    return [-1, -1];
};
// // מוצא את האלמנט המכוכב
__find_star_in_row = function (row) {
    for (var j = 0; j < Munkres.n; ++j)
        if (Munkres.marked[row][j] == 1)
            return j;

    return -1;
};
__find_star_in_col = function (col) {
    for (var i = 0; i < Munkres.n; ++i)
        if (Munkres.marked[i][col] == 1)
            return i;

    return -1;
};
// // בודק אם יש מישהו מסומן
__find_prime_in_row = function (row) {
    for (var j = 0; j < Munkres.n; ++j)
        if (Munkres.marked[row][j] == 2)
            return j;

    return -1;
};
// מסמנת תאים שהיו מסומנים כסימון בסיסי לסימון חולף, והפוך
__convert_path = function (path, count) {
    for (var i = 0; i <= count; ++i)
        Munkres.marked[path[i][0]][path[i][1]] =
            (Munkres.marked[path[i][0]][path[i][1]] == 1) ? 0 : 1;
};
// // מחק את כל סימוני היסוד
__erase_primes = function () {
    for (var i = 0; i < Munkres.n; ++i)
        for (var j = 0; j < Munkres.n; ++j)
            if (Munkres.marked[i][j] == 2)
                Munkres.marked[i][j] = 0;
};
// // הפחתה של האיבר המינימלי בכל שורה ובכל עמודה
__step1 = function () {
    console.log("step 1")
    console.log("Munkres.C----at start step1", Munkres.C)
    for (var i = 0; i < Munkres.n; ++i) {
        // מצא את הערך המינימלי עבור שורה זו והפחת את המינימום הזה
        // מכל אלמנט בשורה.

        // var minval = Math.min.apply(Math, Munkres.C[i]);

        if (Munkres.C !== null)
            var minval = Math.min(...Munkres.C[i]);
        console.log("minval😴😴😴😴🥱😫😫", minval)

        for (var j = 0; j < Munkres.n; ++j) {

            Munkres.C[i][j] -= minval;
        }

    }
    console.log("Munkres.C----at  step1", Munkres.C)
    //אחרי הפחתה של האלמנט המינימלי בשורה
    // console.log("Munkres.C", Munkres.C);

    for (var j = 0; j < Munkres.n; ++j) {
        // מצא את הערך המינימלי עבור עמודה זו והפחת את המינימום הזה
        // מכל אלמנט בעמודה.
        var column = Munkres.C.map(function (value, index) { return value[j]; });
        var minval = Math.min(...column);
        for (var i = 0; i < Munkres.n; ++i) {
            Munkres.C[i][j] -= minval;
        }
    }
    //אחרי הפחתה של האלמנט המינימלי בעמודה
    // console.log("Munkres.C", Munkres.C);
    return 2;
};
__step2 = function () {
    console.log("step 2");
    for (var i = 0; i < Munkres.n; ++i) {
        Munkres.marked = Array.from({ length: this.n }, () => Array(this.n).fill(false));

        for (var j = 0; j < Munkres.n; ++j) {
            // console.log("Munkres.C[i][j]", Munkres.C[i][j]);

            // אם הוא שווה 0 
            // console.log(Munkres.C[i][j]);
            // console.log(Munkres.col_covered[j]);
            // console.log(Munkres.row_covered[i]);
            if (Munkres.C[i][j] === 0 &&
                // ואין עוד אפסים בשורה
                !Munkres.col_covered[j] &&
                //ואין עוד אפסים בעמודה
                !Munkres.row_covered[i]) {

                //אומר שכבר יש 0 בעמודה, המקום הזה מאופס/תפוס
                // console.log("Munkres.marked[i][j]", Munkres.marked[i][j]);
                Munkres.marked[i][j] = 1;
                // console.log("Munkres.marked[i][j]", Munkres.marked[i][j]);

                //אומר שהשורה תפוסה
                Munkres.col_covered[j] = true;
                Munkres.row_covered[i] = true;
                break;
            }
        }
        console.log("i wanttt to sleep😴😴😴😴😴🥱🥱🥱🥱");
    }
    console.log("Munkres.marked before clears covers", Munkres.marked)
    //ניקוי
    // console.log("##################################################😂😂😂")
    __clear_covers();

    return 3;
};
__step3 = function () {
    console.log("step 3")
    var count = 0;
    // console.log(Munkres.n);
    // console.log(Munkres.marked);
    for (var i = 0; i < Munkres.n; ++i) {
        for (var j = 0; j < Munkres.n; ++j) {
            // מצא שיש 0 במקום הזה ובעמודה הזאת אין שיבוץ- אין מישהו תפוס
            if (Munkres.marked[i][j] == 1 && Munkres.col_covered[j] == false) {
                Munkres.col_covered[j] = true;
                ++count;
            }
        }
    }
    console.log("count:", count);
    //בדיקה האם count שווה למספר האנשים שעושים את המשימות
    return (count >= Munkres.n) ? 7 : 4;
    //   לבדוק אם התנאי הזה מתאים יותר
    //   return (count == this.n) ? 7 : 4;

};
__step4 = function () {
    console.log("step 4")
    var done = false;
    var row = -1, col = -1, star_col = -1;

    while (!done) {
        var z = __find_a_zero();
        row = z[0];
        col = z[1];

        if (row < 0) {
            console.log("row:", row)
            // console.log("Munkres.C בתוך ה IF", Munkres.C)
            return 6;

        }
        // console.log("Munkres.C מחוץ  ה IF", Munkres.C)

        // סימון עבור כוכב
        Munkres.marked[row][col] = 2;
        // console.log("Munkres.marked:", Munkres.marked);
        // נותנת את השורה ומקבלת את העמודה
        star_col = __find_star_in_row(row);
        console.log("star_col:", star_col);
        if (star_col >= 0) {
            col = star_col;
            // מסמנת רק את השורות ולא את העמודות
            // console.log(" Munkres.row_covered before:", Munkres.row_covered);
            Munkres.row_covered[row] = true;
            // console.log(" Munkres.row_covered after:", Munkres.row_covered);
            // console.log(" Munkres.col_covered before:", Munkres.col_covered);

            Munkres.col_covered[col] = false;
            // console.log(" Munkres.col_covered after:", Munkres.col_covered);

        } else {
            // מספר השורה ומספר העמודה
            console.log("Munkres.Z0_r:", Munkres.Z0_r);
            console.log("Munkres.Z0_c:", Munkres.Z0_c);
            Munkres.Z0_r = row;
            Munkres.Z0_c = col;
            console.log("Munkres.Z0_r:", Munkres.Z0_r);
            console.log("Munkres.Z0_c:", Munkres.Z0_c);
            return 5;
        }
    }
};
__step5 = function () {
    console.log("step 5")
    console.log("step 555555555555555555555555")

    var count = 0;

    //אומרת לאיפה צריכה לגשת עכשיו 
    // מוחק את העמודות המסומנות והשורות הלא מסומנות ואז לוקח את האלמנט המינימלי ומוסיף אותו לצמתים ומחסיר אותו מהלא מכוסים
    Munkres.path[count][0] = Munkres.Z0_r;
    Munkres.path[count][1] = Munkres.Z0_c;
    var done = false;

    while (!done) {
        // מבצעים חיפוש של ערך סימון כוכב בעמודה המתאימה לעמודה שבמסלול הנוכחי. אם נמצא ערך כזה (row >= 0),
        //  מתבצעת הוספת הערך המתאים למסלול הנוכחי והלולאה ממשיכה.

        var row = __find_star_in_col(Munkres.path[count][1]);
        if (row >= 0) {
            count++;
            Munkres.path[count][0] = row;
            Munkres.path[count][1] = Munkres.path[count - 1][1];
        } else {
            done = true;
        }

        if (!done) {
            var col = __find_prime_in_row(Munkres.path[count][0]);
            count++;
            Munkres.path[count][0] = Munkres.path[count - 1][0];
            Munkres.path[count][1] = col;
        }
    }
    __convert_path(Munkres.path, count);
    __clear_covers();
    __erase_primes();
    return 3;
};
// // ההוספה והמחיקה
__step6 = function () {
    console.log("step 6");
    var minval = Number.POSITIVE_INFINITY;

    // Find the minimum uncovered value
    for (var i = 0; i < Munkres.n; ++i) {
        for (var j = 0; j < Munkres.n; ++j) {
            if (!Munkres.row_covered[i] && !Munkres.col_covered[j]) {
                if (Munkres.C[i][j] < minval) {
                    minval = Munkres.C[i][j];
                    console.log("minvalllllllllllllllllllllllllll", minval)
                }
            }
        }

    }
    // console.log("lkjhgfghjklkjhgfghjklkjhgfd", Munkres.C)-הדפיס מטריצה של NAN
    // Update the covered columns and uncovered rows
    for (var i = 0; i < Munkres.n; ++i) {
        for (var j = 0; j < Munkres.n; ++j) {
            if (Munkres.row_covered[i]) {
                Munkres.C[i][j] += minval;
            }

            if (!Munkres.col_covered[j]) {
                Munkres.C[i][j] -= minval;
            }

            // Add minval to the second row
            if (i === 1) {
                Munkres.C[i][j] += minval;
            }

            // Subtract minval from the second column
            if (j === 1) {
                Munkres.C[i][j] -= minval;
            }
        }

    }
    console.log("בסוף step6", Munkres.C)
    // return  Munkres.C[i][j];
}
compute = function (cost_matrix, options) {
    console.log("come in computeeeeeeeeeeeeeeeeeeeeeeeeeee");
    console.log("options", options);
    console.log("cost_matrix", cost_matrix)
    Munkres.C = cost_matrix
    // console.log("Munkres.C", Munkres.C);
    options = options || {};
    console.log("options", options);
    options.padValue = options.padValue || DEFAULT_PAD_VALUE;
    console.log("kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk", pad_matrix.length)
    //בודק אם המטריצה ריבועית n*n ואם לא מוסיף שורות/עמודות לפי הצורך

    Munkres.C = pad_matrix(cost_matrix, options.padValue);
    console.log("Munkres.C😎😋😎😋😋", Munkres.C);
    //שומר את גודל המטריצה
    Munkres.n = Munkres.C.length;
    // console.log("Munkres.n", Munkres.C.length)
    //שומר את גודל מטריצת העלות
    // console.log("cost_matrix.length",cost_matrix.length)
    Munkres.original_length = cost_matrix.length;

    // console.log("this.original_length", Munkres.original_length)
    //  ערך זה מייצג את רוחב המטריצה.
    Munkres.original_width = cost_matrix[0].length;
    // console.log("this.original_width", Munkres.original_width)
    var nfalseArray = []; /* array of n false values */
    //בודק אם המערך בגודל המטריצה, בגודל n 
    while (nfalseArray.length < Munkres.n)
        // ואם קטן מגדיל אותו
        nfalseArray.push(false);

    // משתמש במערך row_covered כדי לעקוב אחר השורות במטריצת העלות סומנו או נחשפו.
    Munkres.row_covered = nfalseArray.slice();
    Munkres.col_covered = nfalseArray.slice();
    Munkres.Z0_r = 0;
    Munkres.Z0_c = 0;
    // Munkres.path = __make_matrix(Munkres.n * 2, 0);
    // Munkres.path =computeMatrix();
    // console.log("Munkres.path", Munkres.path);
    Munkres.path = Array.from({ length: Munkres.n * 2 }, () => Array(2).fill(0));
    // console.log("Munkres.path", Munkres.path)
    // Munkres.marked = await __make_matrix();
    // console.log("Munkres.marked", Munkres.marked);
    //לבדוקקקקקקקקקקקקקקקקקקקקקקקקקקקקקקקקקקקקקקקקקקקקקקקקקקקקקק🛺🛺🛺🛺🛺
    Munkres.marked = __make_matrix();
    // console.log("Munkres.marked", Munkres.marked)
    // Munkres.marked = Array.from({ length: Munkres.n }, () => Array(Munkres.n).fill(0));

    var step = 1;

    var steps = {
        1: __step1,
        2: __step2,
        3: __step3,
        4: __step4,
        5: __step5,
        6: __step6
    };
    console.log("steps", steps);
    // מטרת הלולאה היא לבצע את השלבים השונים של האלגוריתם בסדרם התקין עד שהאלגוריתם מסתיים.
    //  השלבים מוגדרים באובייקט steps,
    //   והם מופעלים בתוך הלולאה בעזרת הפונקציה apply שמפעילה אותם על האובייקט הנוכחי.

    //מכאן מתחיל הבעיות!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!😥😥😥😥
    while (true) {
        console.log("start while:", step, func)
        // משתנה func מוקצה עם הפונקציה המתאימה לשלב הנוכחי של האלגוריתם, על פי הערך של משתנה step
        var func = steps[step];
        //אם לא קיימת פונקציה תואמת, זאת אומרת שהאלגוריתם הסתיים והלולאה יצאה מהפעלתה.
        if (!func) // done
            break;
        step = func.apply(Munkres);
    }
    //הפונקציה מחזירה מערך המכיל זוגות אינדקסים של המיקומים שבהם נמצאים האיברים שמסומנים במטריצה
    // console.log("helloooooooooooooo");

    var results = [];
    console.log("helloooooooooooooo");

    // console.log("results", results);
    //כגבולות הלולאות התואמות למימדי המטריצה.
    // console.log("Munkres", Munkres)

    for (var i = 0; i < Munkres.original_length; ++i)

        // console.log("Munkres.original_width", Munkres.original_width)
        for (var j = 0; j < Munkres.original_width; ++j)

            // לא מזהה אותו ונותן שגיאה לבדוק😡😡😡😡😡😡😡
            if (Munkres.marked[i][j] == 1)
                console.log("Munkres.marked[i][j]----------------", Munkres.marked[i][j])
    //   שכולל את כל הזוגות שנאספו בתהליך הלולאות, שהם האיברים שמסומנים במטריצה מערך
    results.push([i, j]);
    console.log("results", results);
    console.log("[i, j]", [i, j]);
    return results;
};


make_cost_matrix = async function (wayA) {
    console.log("wayyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy", wayA)
    // const volunteers = require('../models/volunteerModel');
    let volunteersList = null;
    await init();
    console.log("get in the function");
    //יוצרת מטריצת משקלים
    try {
        // volunteerId
        // preferences = await PreferencesModel.find();//העדפות - דירוגים

        // for (let i = 1, j = 0; i < Munkres.n+1; i++) {
        //     cost_matrix[i-1][j] = preferences[i - 1].volunteerId;
        //     // console.log("cost_matrix[i][j]", cost_matrix[i][j])

        // }
        // console.log("volunteerId----------------", cost_matrix)
        // //כותרות דירוגים
        // const prefName = ['selectedLanguage', 'firstAidKnowledge', 'selectedCar', 'way A']
        // // console.log("prefName", prefName)

        // for (let j = 1, i = 0; j < Munkres.n + 1; j++) {

        //     cost_matrix[i][j] = prefName[j - 1];
        //     console.log("[prefName[j]", prefName[j - 1])
        //     // console.log("preferences[i]", preferences[i])
        //     // console.log("preferences[i][prefName[j - 1]]", preferences[i][prefName[j - 1]])
        //     // console.log("j", j)
        //     cost_matrix[i][j] = preferences[i][prefName[j - 1]];
        //     console.log("cost_matrix[i+1][j]",cost_matrix[i][j])
        //     // if(prefName[j]!=undefined)
        //     // i++;
        //     // cost_matrix[i][j] = preferences[i - 1][prefName[j - 1]];
        //     // console.log("ttttt", cost_matrix[i][j])

        // }

        // preferences = await PreferencesModel.find();//העדפות - דירוגים

        // מילוי מספרי זהות המתנדבים במטריצה
        preferences.forEach((preference, index) => {
            cost_matrix[index] = [preference.volunteerId];
        });

        // מילוי ערכי הדירוג במטריצה
        const prefName = ['selectedLanguage', 'firstAidKnowledge', 'selectedCar', 'way A'];
        for (let j = 1; j < Munkres.n + 1; j++) {
            cost_matrix[0][j] = prefName[j - 1];
            preferences.forEach((preference, index) => {
                cost_matrix[index][j] = preference[prefName[j - 1]];
            });
        }


        const volunteersList = [];
        for (const req of newRequests) {
            const kindOfReq = req.fieldOfVolunteering;
            const carCheck = req.disabledVehicle;
            let fetchedList;
            if (carCheck == false) {
                fetchedList = await volunteerModel.find({ fieldOfVolunteering: kindOfReq });
            } else {
                fetchedList = await volunteerModel.find({ fieldOfVolunteering: kindOfReq, disabledVehicle: carCheck });
            }
            volunteersList.push(...fetchedList);
        }
        console.log("volunteersList", volunteersList);

        // for(const req of newRequests){
        //     // console.log("newRequests",newRequests)
        //     console.log("req",req)
        //     const kindOfReq=req.fieldOfVolunteering;
        //     const carCheck=req.disabledVehicle
        //     console.log("carCheck",carCheck)
        //     if(carCheck==false){
        //      volunteersList = await volunteerModel.find({fieldOfVolunteering:kindOfReq});
        //      console.log("volunteersList",volunteersList)
        // }
        // else
        //      volunteersList = await volunteerModel.find({fieldOfVolunteering:kindOfReq,disabledVehicle:carCheck});
        //     // console.log("req ",req.from)


        for (var i = 1; i < Munkres.n + 1; i++) {
            for (var j = 1; j < Munkres.n + 1; j++) {
                if (prefName[j - 1] === 'way A') {
                    let volunteerData = volunteersList.find(
                        (v) => v.id === preferences[i - 1].volunteerId);
                    // console.log("///////////////////////")
                    console.log("volunteerData", volunteersList);
                    if (volunteerData) {
                        let distance = wayA.find((a) => a.volunteer === volunteerData.volunteerId)?.distance || 0;
                        cost_matrix[i][j] = distance;
                        // let distance = volunteerData.fromArray;
                    }
                    // console.log("הצליח??????????????????????", cost_matrix)
                }
                else if (preferences[i - 1][prefName[j - 1]] !== undefined)
                    cost_matrix[i][j] = preferences[i - 1][prefName[j - 1]];
                // Munkres.C = Munkres.make_cost_matrix(newMatrix, function (value) { return value; });

            }
        }

        console.log("cost_matrix:", cost_matrix);

        // console.log("🎈🎈🎈🎈🎈🎈",cost_matrix.length)
    } catch (error) {
        console.error('Error retrieving preferences:', error);
        return error;
    }
    //  console.log("hello cost_matrix🎈🎈🎈🎈🎈🎈",cost_matrix); 
    // compute(cost_matrix, options);

    return cost_matrix;
};

__make_matrix = async function (wayA) {

    console.log("come in functionnnnnnnnnnnnnnnnn")

    await init();

    let volunteersList = null;
    // console.log("matrix", newMatrix)
    try {
        for (var i = 1, j = 0; i < n + 1; i++) {
            newMatrix[i][j] = preferences[i - 1].volunteerId;
            console.log("idddddddddd", newMatrix[i][j])
        }
        Munkres.marked = Array.from({ length: Munkres.n }, () =>
            Array(Munkres.n).fill(0));

        // console.log("matrix", newMatrix)
        const prefName = ['selectedLanguage', 'firstAidKnowledge', 'selectedCar', 'way A']//להוסיף מרחק א ומרחק ב


        //להגדיר מערך עם כל האילוצים.....
        for (var j = 1, i = 0; j < n + 1 && prefName[j - 1] !== undefined; j++) {
            newMatrix[i][j] = prefName[j - 1];
            console.log("prefName", prefName[j - 1])//איפה הכנסת את המרחק?
        }

        for (var i = 1; i < n + 1; i++) {
            for (var j = 1; j < n + 1; j++) {
                if (prefName[j - 1] === 'way A') {
                    let volunteerData = volunteersList.find(
                        (v) => v.id === preferences[i - 1].volunteerId);
                    console.log("volunteerData", volunteerData);
                    if (volunteerData) {
                        let distance = wayA.find((a) => a.volunteer === volunteerData.volunteerId)?.distance || 0;
                        newMatrix[i][j] = distance;
                        // let distance = volunteerData.fromArray;
                    }
                    console.log("הצליח??????????????????????", newMatrix)
                }
                else if (preferences[i - 1][prefName[j - 1]] !== undefined)
                    newMatrix[i][j] = preferences[i - 1][prefName[j - 1]];
                // Munkres.C = Munkres.make_cost_matrix(newMatrix, function (value) { return value; });

            }
            // console.log("matrix", newMatrix)
        }
        // console.log(newMatrix)
        // return newMatrix;

    } catch (error) {
        console.error('Error retrieving preferences:', error);
        return error;
    }

};

pad_matrix = function (cost_matrix, pad_value) {
    // console.log("cost_matrix length",cost_matrix.length)
    pad_value = MAX_INT;
    var max_columns = 0;
    var total_rows = cost_matrix.length;
    // console.log("total_rows", total_rows)
    for (var i = 0; i < total_rows; ++i) {
        if (cost_matrix[i].length > max_columns) {
            max_columns = cost_matrix[i].length;
        }
    }

    total_rows = max_columns > total_rows ? max_columns : total_rows;

    var new_matrix = [];

    for (var i = 0; i < total_rows; ++i) {
        var row = cost_matrix[i] || [];
        // console.log("rows", row)

        var new_row = row.slice();

        // for (var j = 0; j < total_rows; j++) {
        //     if (row[j] !== undefined) {
        //       new_row.push(row[j]);
        //     } else {
        //       new_row.push(pad_value);
        //     }
        //   }
        while (total_rows > new_row.length) {
            new_row.push(pad_value);
        }

        new_matrix.push(new_row);
    }

    return new_matrix;
};

module.exports = {
    make_cost_matrix,
};

// הפונקציה בודקת את המצב בו נוסע מקומי מסוים יש יותר ממתנדב אחד שמשויכים אליו ומתבצעות פעולות נוספות בהתאם:
// volunteersForPassengersList: מערך של אובייקטים המייצגים את הנוסעים המקומיים והמתנדבים שמשויכים להם.
// indexProblamaticPassengers: מערך המכיל את האינדקסים של הנוסעים המקומיים הפולשניים.
// i: אינדקס הנוסע המקומי במערך הפולשני שבו יש רק מתנדב אחד.
// j: אינדקס הנוסע המקומי במערך הפולשני שבו יש יותר ממתנדב אחד.
function onlyOneVolunteerSituation(volunteersForPassengersList, indexProblamaticPassengers, i, j) {
    let indexOTwoInCar = -1;
    //if the more prefered one has more then 1 optional volunteer
    // אם המתנדב המועדף יש לו יותר ממתנדב אחד פוטנציאלי,
    //  הפונקציה בודקת אם ישנם תנאים כגון שני הנוסעים מסכימים לנסיעה באותו רכב ויש מקום פנוי ברכב. אם התנאים מתקיימים, 
    //  הפונקציה מבצעת החלפה של המתנדבים ומעדכנת את כמות המקומות הפנויים ברכב.
    if (volunteersForPassengersList[indexProblamaticPassengers[j]] > 1) {
        //if they don't mind be on the same drive and the diver has place
        if (volunteersForPassengersList[indexProblamaticPassengers[j]].space === 0
            && volunteersForPassengersList[indexProblamaticPassengers[i]].space === 0
            && volunteersForPassengersList[indexProblamaticPassengers[i]].volunteers[0].amountOfAvailableSeats > 0) {
            indexProblamaticPassengers.splice(j, i);
            statusOFMoreThenOneInCar = true;
            indexOTwoInCar = volunteersForPassengersList[indexProblamaticPassengers[j]];
            volunteersForPassengersList[indexProblamaticPassengers[i]].volunteers[0].amountOfAvailableSeats--;
        }
        //prefer the one with 1 volunteer to have at least a drive
        // אם המתנדב המועדף יש לו רק מתנדב אחד פוטנציאלי,
        //  הפונקציה מסירה את המתנדב המועדף הראשון מרשימת המתנדבים של הנוסע
        //   ומוסיפה אותו לרשימת הנוסעים שאין להם תואם מתנדב.
        else {
            volunteersForPassengersList[indexProblamaticPassengers[j]].volunteers.shift();
            nonScheduledOnes.push(volunteersForPassengersList[indexProblamaticPassengers[j]]);
        }
    }
    else {
        if (volunteersForPassengersList[indexProblamaticPassengers[j]].space < 3
            && volunteersForPassengersList[indexProblamaticPassengers[i]].space < 3
            && volunteersForPassengersList[indexProblamaticPassengers[i]].volunteers[0].amountOfAvailableSeats > 0) {
            indexProblamaticPassengers.splice(j, i);
            statusOFMoreThenOneInCar = true;
            indexOTwoInCar = volunteersForPassengersList[indexProblamaticPassengers[j]];
            volunteersForPassengersList[indexProblamaticPassengers[i]].volunteers[0].amountOfAvailableSeats--;
        }
        else {
            volunteersForPassengersList[indexProblamaticPassengers[i]].volunteers.shift();
            nonScheduledOnes.push(volunteersForPassengersList[indexProblamaticPassengers[i]]);
        }
    }
    return indexOTwoInCar;
}
// הפונקציה מקבלת מערך של מתנדבים ראשוניים (firstVolunteers) ומחזירה מערך של המתנדבים הכפולים בלבד.
function getAllDuplicatesVolunteers(firstVolunteers) {
    console.log("enter getAllDuplicatesVolunteers function with firstVolunteers: " + JSON.stringify(firstVolunteers));
    const toFindDuplicates = firstVolunteers =>
        // הפונקציה toFindDuplicates מבצעת מסננת על המערך firstVolunteers ומחזירה רק את האיברים שחוזרים יותר מפעם אחת במערך (שזה אומר שהם מתנדבים כפולים).
        firstVolunteers.filter((item, index) => firstVolunteers.indexOf(item) !== index)
    // הפונקציה getAllDuplicatesVolunteers משתמשת בפונקצית toFindDuplicates
    //  כדי למצוא את המתנדבים הכפולים במערך firstVolunteers ומחזירה אותם כתוצאה.
    const duplicateElements = toFindDuplicates(firstVolunteers);
    return duplicateElements;
}
// הפונקציה מקבלת מתנדב פוטנציאלי (probVolunteer) ומערך של מתנדבים ראשוניים (firstVolunteers).
//  היא מחזירה מערך של אינדקסים שבהם המתנדב הפוטנציאלי נמצא במערך הראשוני.
function getTheIndexesOfDuplicateVolunteer(probVolunteer, firstVolunteers) {
    // יוצרת שני מחרוזות (str1 ו- str2) שמייצגות את המתנדב הפוטנציאלי 
    // (probVolunteer) ואת מערך המתנדבים הראשוניים (firstVolunteers) בהתאמה.
    var str1 = JSON.stringify(probVolunteer);
    var str2 = JSON.stringify(firstVolunteers);
    console.log("enter getTheIndexesOfDuplicateVolunteer function with probVolunteer: " + str1 + " and firstVolunteers: " + str2);
    var haystack = firstVolunteers;
    var needle = probVolunteer;

    var results = [];
    var idx = haystack.indexOf(needle);
    // כאשר אין יותר מופעים של המתנדב הפוטנציאלי במערך,
    //  הפונקציה מחזירה את מערך התוצאות שמכיל את האינדקסים שבהם המתנדב הפוטנציאלי נמצא במערך הראשוני.
    while (idx != -1) {
        results.push(idx);
        idx = haystack.indexOf(needle, idx + 1);
    }
    return results;
}
// הפונקציה מקבלת מערך של מתנדבים לנוסעים 
// (volunteersForPassengersList). היא מבצעת פעולות במערך כדי ליצור מערך חדש של המתנדבים הראשוניים לכל נוסע.
function returnSchedulingResult(volunteersForPassengersList) {
    volunteersForPassengersList.map((obj, i) =>
    // עבור כל אובייקט, היא מוסיפה את המתנדב הראשון בתת-מערך המתנדבים (volunteers) למערך firstVolunteers.
    { firstVolunteers.push(obj.volunteers[0]) });
    // הפונקציה מחזירה את המערך firstVolunteers
    //   המכיל את המתנדבים הראשוניים לכל נוסע בסדר המקורי שלהם במערך volunteersForPassengersList.
    return firstVolunteers;
}