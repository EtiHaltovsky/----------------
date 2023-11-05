const mongoose = require('mongoose');
const db = require('./Config/db')
// const computeMunkres = require("munkres-js");
// const { Munkres } = require("munkres-js");

var MAX_SIZE = parseInt(Number.MAX_SAFE_INTEGER / 2) || ((1 << 26) * (1 << 26));

/**
 * A default value to pad the cost matrix with if it is not quadratic.
 */
// ערך ברירת מחדל לרפד את מטריצת העלות אם היא אינה ריבועית.
var DEFAULT_PAD_VALUE = 0;

/**
 * Calculate the Munkres solution to the classical assignment problem.
 * See the module documentation for usage.
 * @constructor
 */

// בנאי
function Munkres() {
  this.C = null;

  this.row_covered = [];
  this.col_covered = [];
  this.n = 0;
  this.Z0_r = 0;
  this.Z0_c = 0;
  //המטריצה המסומנת 
  this.marked = null;
  this.path = null;
  //console.log(this.row_covered)

}
// module.exports={Munkres}; 
module.exports = Munkres;

/**
 * Pad a possibly non-square matrix to make it square.
 *
 * @param {Array} matrix An array of arrays containing the matrix cells
 * @param {Number} [pad_value] The value used to pad a rectangular matrix
 *
 * @return {Array} An array of arrays representing the padded matrix
 */

//הופך את המטריצה למטריצה ריבועית אם היא לא כך. מוסיף שורות/עמודות לפי הצורך
Munkres.prototype.pad_matrix = function (matrix, pad_value) {
  pad_value = pad_value || DEFAULT_PAD_VALUE;

  var max_columns = 0;
  var total_rows = matrix.length;
  var i;

  for (i = 0; i < total_rows; ++i)
    if (matrix[i].length > max_columns)
      max_columns = matrix[i].length;

  total_rows = max_columns > total_rows ? max_columns : total_rows;

  var new_matrix = [];

  for (i = 0; i < total_rows; ++i) {
    var row = matrix[i] || [];
    var new_row = row.slice();

    // If this row is too short, pad it
    while (total_rows > new_row.length)
      new_row.push(pad_value);

    new_matrix.push(new_row);
  }

  return new_matrix;
};

/**
 * Compute the indices for the lowest-cost pairings between rows and columns
 * in the database. Returns a list of (row, column) tuples that can be used
 * to traverse the matrix.
 *
 * **WARNING**: This code handles square and rectangular matrices.
 * It does *not* handle irregular matrices.
 *
 * @param {Array} cost_matrix The cost matrix. If this cost matrix is not square,
 *                            it will be padded with DEFAULT_PAD_VALUE. Optionally,
 *                            the pad value can be specified via options.padValue.
 *                            This method does *not* modify the caller's matrix.
 *                            It operates on a copy of the matrix.
 * @param {Object} [options] Additional options to pass in
 * @param {Number} [options.padValue] The value to use to pad a rectangular cost_matrix
 *
 * @return {Array} An array of ``(row, column)`` arrays that describe the lowest
 *                 cost path through the matrix
 */

// חשב את המדדים עבור הזיווגים בעלות הנמוכה ביותר בין שורות ועמודות
// הוא פועל על עותק של המטריצה
Munkres.prototype.compute = function (cost_matrix, options) {

  options = options || {};
  options.padValue = options.padValue || DEFAULT_PAD_VALUE;

  //בודק אם המטריצה ריבועית n*n ואם לא מוסיף שורות/עמודות לפי הצורך
  this.C = this.pad_matrix(cost_matrix, options.padValue);
  //שומר את גודל המטריצה
  this.n = this.C.length;
  //שומר את גודל מטריצת העלות
  this.original_length = cost_matrix.length;
  
//  ערך זה מייצג את רוחב המטריצה.
  this.original_width = cost_matrix[0].length;

  var nfalseArray = []; /* array of n false values */
  //בודק אם המערך בגודל המטריצה, בגודל n 
  while (nfalseArray.length < this.n)
  // ואם קטן מגדיל אותו
    nfalseArray.push(false);
    // משתמש במערך row_covered כדי לעקוב אחר השורות במטריצת העלות סומנו או נחשפו.
  this.row_covered = nfalseArray.slice();
  this.col_covered = nfalseArray.slice();
  this.Z0_r = 0;
  this.Z0_c = 0;
  this.path = this.__make_matrix(this.n * 2, 0);
  this.marked = this.__make_matrix(this.n, 0);

  var step = 1;

  var steps = {
    1: this.__step1,
    2: this.__step2,
    3: this.__step3,
    4: this.__step4,
    5: this.__step5,
    6: this.__step6
  };

  while (true) {
    var func = steps[step];
    if (!func) // done
      break;

    step = func.apply(this);
  }

  var results = [];
  for (var i = 0; i < this.original_length; ++i)
    for (var j = 0; j < this.original_width; ++j)
      if (this.marked[i][j] == 1)
        results.push([i, j]);

  return results;
};

/**
 * Create an n×n matrix, populating it with the specific value.
 *
 * @param {Number} n Matrix dimensions
 * @param {Number} val Value to populate the matrix with
 *
 * @return {Array} An array of arrays representing the newly created matrix
 */
// Munkres.prototype.__make_matrix = function (n, val) {
//   var matrix = [];
//   for (var i = 0; i < n; ++i) {
//     matrix[i] = [];
//     // **********
//     // matrix[i] = getcheckVolunteer();
//     //בשורות יהיה מספר זהות מתנדב
//     matrix[i] = preferences;
//         // matrix[i] = preferences.volunteerId;

//     console.log(matrix[i]);
//     for (var j = 0; j < n; ++j)
//       matrix[i][j] = val;
//       console.log(matrix[i][j]);
//   }

//   return matrix;
// };












// Munkres.prototype.__make_matrix = async function (n, val) {
//   var matrix = [];
//   try {
//     const PreferencesModel = require('./models/PreferencesModel'); // Import the PreferencesModel
//     const preferences = await PreferencesModel.find(); // Fetch preferences from the "preferences" table

//     for (var i = 0; i < n; ++i) {
//       matrix[i] = [];
//       console.log(matrix[i]);
//       matrix[i] = preferences.map((preferences) => preferences.volunteerId); // Assign volunteer IDs to matrix[i]
//       console.log(preferences.volunteerId)
//       console.log(matrix[i]);

//       for (var j = 0; j < n; ++j) {
//         matrix[i][j] = val;
//         console.log(matrix[i][j]);
//       }

//       // Call getDistance function for each destination
//       destinations.forEach((destination) => {
//         getDistance(origin, [destination], apiKey);
//       });
//       //  Process the distance results here
//        if (i === n - 1) {
//         processResults(results);
//         // console.log(results)
//       }
//     }
//   } catch (error) {
//     console.error('Error retrieving preferences:', error);
//     throw error;
//   }

//   return matrix;
// };

// function processResults(results) {
//   // Process the distance results here
//   const matrix =Munkres.prototype.__make_matrix(8, 9); // Create the matrix using the existing __make_matrix function
//   results.forEach((distance, index) => {
//     matrix[index].push(distance); // Add the distance to the corresponding row in the matrix
//     console.log(`Destination: ${distance.destination}`);
//     console.log(`Distance: ${distance.distance}`);
//     console.log('---');
//   });
//   console.log(matrix);
// }
// processResults();


Munkres.prototype.__make_matrix = async function (n, val) {
  var matrix = [];
  try {

    const preferences = await PreferencesModel.find().exec(); // Fetch preferences from the "preferences" table

    for (var i = 0; i < n; ++i) {
      matrix[i] = [];
      matrix[i] = preferences.map((preference) => preference.volunteerId); // Assign volunteer IDs to matrix[i]

      console.log(matrix[i]);

      for (var j = 0; j < n; ++j)
        matrix[i][j] = val;
        console.log(matrix[i][j]);
    }
  } catch (error) {
    console.error('Error retrieving preferences:', error);
    throw error;
  }

  return matrix;
};
module.exports = PreferencesModel;
// /**
//  * For each row of the matrix, find the smallest element and
//  * subtract it from every element in its row. Go to Step 2.
//  */
// הפחתה של האיבר המינימלי בכל שורה ובכל עמודה
Munkres.prototype.__step1 = function () {
  for (var i = 0; i < this.n; ++i) {
    // Find the minimum value for this row and subtract that minimum
    // from every element in the row.
    var minval = Math.min.apply(Math, this.C[i]);

    for (var j = 0; j < this.n; ++j)
      this.C[i][j] -= minval;
  }

  return 2;
};

/**
 * Find a zero (Z) in the resulting matrix. If there is no starred
 * zero in its row or column, star Z. Repeat for each element in the
 * matrix. Go to Step 3.
 */
Munkres.prototype.__step2 = function () {
  for (var i = 0; i < this.n; ++i) {
    for (var j = 0; j < this.n; ++j) {
      // אם הוא שווה 0 
      if (this.C[i][j] === 0 &&
        // ואין עוד אפסים בשורה
        !this.col_covered[j] &&
        //ואין עוד אפסים בעמודה
        !this.row_covered[i]) {
        //אומר שכבר יש 0 בעמודה, המקום הזה מאופס/תפוס
        this.marked[i][j] = 1;
        //אומר שהשורה תפוסה
        this.col_covered[j] = true;
        this.row_covered[i] = true;
        break;
      }
    }
  }
  //ניקוי
  this.__clear_covers();

  return 3;
};

/**
 * Cover each column containing a starred zero. If K columns are
 * covered, the starred zeros describe a complete set of unique
 * assignments. In this case, Go to DONE, otherwise, Go to Step 4.
 */

Munkres.prototype.__step3 = function () {
  var count = 0;

  for (var i = 0; i < this.n; ++i) {
    for (var j = 0; j < this.n; ++j) {
      // מצא שיש 0 במקום הזה ובעמודה הזאת אין שיבוץ- אין מישהו תפוס
      if (this.marked[i][j] == 1 && this.col_covered[j] == false) {
        this.col_covered[j] = true;
        ++count;
      }
    }
  }
  //בדיקה האם count שווה למספר האנשים שעושים את המשימות
  return (count >= this.n) ? 7 : 4;
  //   לבדוק אם התנאי הזה מתאים יותר
  //   return (count == this.n) ? 7 : 4;

};

/**
 * Find a noncovered zero and prime it. If there is no starred zero
 * in the row containing this primed zero, Go to Step 5. Otherwise,
 * cover this row and uncover the column containing the starred
 * zero. Continue in this manner until there are no uncovered zeros
 * left. Save the smallest uncovered value and Go to Step 6.
 */

Munkres.prototype.__step4 = function () {
  var done = false;
  //אתחול משתנים
  var row = -1, col = -1, star_col = -1;

  while (!done) {
    var z = this.__find_a_zero();
    row = z[0];
    col = z[1];

    if (row < 0)
      return 6;

    //   סימון עבור כוכב
    this.marked[row][col] = 2;
    // נותנת את השורה ומקבלת עמודה
    star_col = this.__find_star_in_row(row);
    if (star_col >= 0) {
      col = star_col;
      //   מסמנת רק את השורות ולא את העמודות
      this.row_covered[row] = true;
      this.col_covered[col] = false;
    } else {
      // מספר השורה ומספר העמודה
      this.Z0_r = row;
      this.Z0_c = col;
      return 5;
    }
  }
};

/**
 * Construct a series of alternating primed and starred zeros as
 * follows. Let Z0 represent the uncovered primed zero found in Step 4.
 * Let Z1 denote the starred zero in the column of Z0 (if any).
 * Let Z2 denote the primed zero in the row of Z1 (there will always
 * be one). Continue until the series terminates at a primed zero
 * that has no starred zero in its column. Unstar each starred zero
 * of the series, star each primed zero of the series, erase all
 * primes and uncover every line in the matrix. Return to Step 3
 */
Munkres.prototype.__step5 = function () {
  var count = 0;

  //   אומרת לאיפה צריכה לגשת עכשיו 
  // מוחק את העמודות המסומנות והשורות הלא מסומנות ואז לוקח את האלמנט המינימלי ומוסיף אותו לצמתים ומחסיר אותו מהלא מכוסים
  this.path[count][0] = this.Z0_r;
  this.path[count][1] = this.Z0_c;
  var done = false;

  while (!done) {
    var row = this.__find_star_in_col(this.path[count][1]);
    if (row >= 0) {
      count++;
      this.path[count][0] = row;
      this.path[count][1] = this.path[count - 1][1];
    } else {
      done = true;
    }

    if (!done) {
      var col = this.__find_prime_in_row(this.path[count][0]);
      count++;
      this.path[count][0] = this.path[count - 1][0];
      this.path[count][1] = col;
    }
  }

  this.__convert_path(this.path, count);
  this.__clear_covers();
  this.__erase_primes();
  return 3;
};

/**
 * Add the value found in Step 4 to every element of each covered
 * row, and subtract it from every element of each uncovered column.
 * Return to Step 4 without altering any stars, primes, or covered
 * lines.ק
 */
// ההוספה והמחיקה
Munkres.prototype.__step6 = function () {
  var minval = this.__find_smallest();

  for (var i = 0; i < this.n; ++i) {
    for (var j = 0; j < this.n; ++j) {
      if (this.row_covered[i])
        this.C[i][j] += minval;
      if (!this.col_covered[j])
        this.C[i][j] -= minval;
    }
  }

  return 4;
};

/**
 * Find the smallest uncovered value in the matrix.
 *
 * @return {Number} The smallest uncovered value, or MAX_SIZE if no value was found
 */
Munkres.prototype.__find_smallest = function () {
  var minval = MAX_SIZE;

  for (var i = 0; i < this.n; ++i)
    for (var j = 0; j < this.n; ++j)
      if (!this.row_covered[i] && !this.col_covered[j])
        if (minval > this.C[i][j])
          minval = this.C[i][j];

  return minval;
};

/**
 * Find the first uncovered element with value 0.
 *
 * @return {Array} The indices of the found element or [-1, -1] if not found
 */
// למצוא את ה-0 הראשון שהוא לא בעמודה או השורה המסומנת
Munkres.prototype.__find_a_zero = function () {
  for (var i = 0; i < this.n; ++i)
    for (var j = 0; j < this.n; ++j)
      // מחפש איפה יש 0 בשורה שעדיין לא סימנו אותה
      if (this.C[i][j] === 0 &&
        !this.row_covered[i] &&
        !this.col_covered[j])
        return [i, j];

  return [-1, -1];
};

/**
 * Find the first starred element in the specified row. Returns
 * the column index, or -1 if no starred element was found.
 *
 * @param {Number} row The index of the row to search
 * @return {Number}
 */

// מוצא את האלמנט המכוכב
Munkres.prototype.__find_star_in_row = function (row) {
  for (var j = 0; j < this.n; ++j)
    if (this.marked[row][j] == 1)
      return j;

  return -1;
};

/**
 * Find the first starred element in the specified column.
 *
 * @return {Number} The row index, or -1 if no starred element was found
 */
Munkres.prototype.__find_star_in_col = function (col) {
  for (var i = 0; i < this.n; ++i)
    if (this.marked[i][col] == 1)
      return i;

  return -1;
};

/**
 * Find the first prime element in the specified row.
 *
 * @return {Number} The column index, or -1 if no prime element was found
 */

// בודק אם יש מישהו מסומן
Munkres.prototype.__find_prime_in_row = function (row) {
  for (var j = 0; j < this.n; ++j)
    if (this.marked[row][j] == 2)
      return j;

  return -1;
};

Munkres.prototype.__convert_path = function (path, count) {
  for (var i = 0; i <= count; ++i)
    this.marked[path[i][0]][path[i][1]] =
      (this.marked[path[i][0]][path[i][1]] == 1) ? 0 : 1;
};

/** Clear all covered matrix cells */
// נקה את כל תאי המטריצה המכוסים
Munkres.prototype.__clear_covers = function () {
  for (var i = 0; i < this.n; ++i) {
    this.row_covered[i] = false;
    this.col_covered[i] = false;
  }
};

/** Erase all prime markings */
// מחק את כל סימוני היסוד
Munkres.prototype.__erase_primes = function () {
  for (var i = 0; i < this.n; ++i)
    for (var j = 0; j < this.n; ++j)
      if (this.marked[i][j] == 2)
        this.marked[i][j] = 0;
};

// ---------------------------------------------------------------------------
// Functions
// ---------------------------------------------------------------------------

/**
 * Create a cost matrix from a profit matrix by calling
 * 'inversion_function' to invert each value. The inversion
 * function must take one numeric argument (of any type) and return
 * another numeric argument which is presumed to be the cost inverse
 * of the original profit.
 *
 * This is a static method. Call it like this:
 *
 *  cost_matrix = make_cost_matrix(matrix[, inversion_func]);
 *
 * For example:
 *
 *  cost_matrix = make_cost_matrix(matrix, function(x) { return MAXIMUM - x; });
 *
 * @param {Array} profit_matrix An array of arrays representing the matrix
 *                              to convert from a profit to a cost matrix
 * @param {Function} [inversion_function] The function to use to invert each
 *                                       entry in the profit matrix
 *
 * @return {Array} The converted matrix
 */
const { __make_matrix } = require('./controllers/preferencesController')

const newMatrix = __make_matrix();
console.log( newMatrix)

//פונקציה שיוצרת מטריצה של העלויותinversion_function
// פונקציה זו מחשבת את מטריצת העלות בהתבסס על מערך newMatrix.
function make_cost_matrix(newMatrix,inversion_function ) {
  var i, j;
  if (!inversion_function) {
    // הוא מאתחל את המשתנה המקסימלי עם ערך של אינסוף שלילי
    var maximum = -1.0 / 0.0;
    for (i = 0; i < newMatrix.length; ++i)
      for (j = 0; j < newMatrix[i].length; ++j)
        if (newMatrix[i][j] > maximum)
          maximum = newMatrix[i][j];
    // לאחר איטרציה על כל האלמנטים ב-newMatrix, הפונקציה קבעה את הערך המרבי במטריצה.

    // אם הפרמטר inversion_function לא סופק, הוא מגדיר פונקציית היפוך ברירת מחדל באמצעות פונקציה אנונימית. 
    // פונקציה זו לוקחת ערך x ומחזירה את התוצאה של הפחתת x מהערך המקסימלי שחושב בשלב 6.
    // הקוד מגדיר פונקציית היפוך inversion_function ולאחר מכן מעבד את מערך newMatrix ליצירת מטריצת עלות.
    // מטרת פונקציית היפוך זו היא להפוך את הערכים במערך newMatrix על ידי הפחתה מהמקסימום.
    inversion_function = function (x) { return maximum - x; };
  }

  for (i = 0; i < newMatrix.length; ++i) {
    var row = newMatrix[i];
    // לאחסן את מטריצת העלות
    cost_matrix[i] = [];
console.log(cost_matrix[i])
    for (j = 0; j < row.length; ++j)
      cost_matrix[i][j] = inversion_function(newMatrix[i][j]);
  }
//מחזיר את מטריצת העלות
  return cost_matrix;
}
// function make_cost_matrix(profit_matrix, inversion_function) {
//   var i, j;
//   if (!inversion_function) {
//     // הוא מאתחל את המשתנה המקסימלי עם ערך של אינסוף שלילי
//     var maximum = -1.0 / 0.0;
//     for (i = 0; i < profit_matrix.length; ++i)
//       for (j = 0; j < profit_matrix[i].length; ++j)
//         if (profit_matrix[i][j] > maximum)
//           maximum = profit_matrix[i][j];
//     // לאחר איטרציה על כל האלמנטים ב-profit_matrix, הפונקציה קבעה את הערך המרבי במטריצה.

//     // אם הפרמטר inversion_function לא סופק, הוא מגדיר פונקציית היפוך ברירת מחדל באמצעות פונקציה אנונימית. 
//     // פונקציה זו לוקחת ערך x ומחזירה את התוצאה של הפחתת x מהערך המקסימלי שחושב בשלב 6.
//     inversion_function = function (x) { return maximum - x; };
//   }

//   for (i = 0; i < profit_matrix.length; ++i) {
//     var row = profit_matrix[i];
//     // לאחסן את מטריצת העלות
//     cost_matrix[i] = [];

//     for (j = 0; j < row.length; ++j)
//       cost_matrix[i][j] = inversion_function(profit_matrix[i][j]);
//   }

//   return cost_matrix;
// }

/**
 * Convenience function: Converts the contents of a matrix of integers
 * to a printable string.
 *
 * @param {Array} matrix The matrix to print
 *
 * @return {String} The formatted matrix
 */
//ממירה את התוכן של מטריצה של מספרים שלמים
// למחרוזת הניתנת להדפסה.

function format_matrix(matrix) {
  var columnWidths = [];
  var i, j;
  for (i = 0; i < matrix.length; ++i) {
    for (j = 0; j < matrix[i].length; ++j) {
      var entryWidth = String(matrix[i][j]).length;

      if (!columnWidths[j] || entryWidth >= columnWidths[j])
        columnWidths[j] = entryWidth;
    }
  }

  var formatted = '';
  for (i = 0; i < matrix.length; ++i) {
    for (j = 0; j < matrix[i].length; ++j) {
      var s = String(matrix[i][j]);

      // pad at front with spaces
      while (s.length < columnWidths[j])
        s = ' ' + s;

      formatted += s;

      // separate columns
      if (j != matrix[i].length - 1)
        formatted += ' ';
    }

    if (i != matrix[i].length - 1)
      formatted += '\n';
  }

  return formatted;
}

// ---------------------------------------------------------------------------
// Exports
// ---------------------------------------------------------------------------

//פונקציה ראשית
function computeMunkres(cost_matrix, options) {
  var m = new Munkres();
  return m.compute(cost_matrix, options);
}
//להפעיל את הפונקציה
// Munkers();
// computeMunkres(cost_matrix, 1);

computeMunkres.version = "1.2.2";
computeMunkres.format_matrix = format_matrix;
computeMunkres.make_cost_matrix = make_cost_matrix;
computeMunkres.Munkres = Munkres; // backwards compatibility

if (typeof module !== 'undefined' && module.exports) {
  module.exports = computeMunkres;
}

//פונקציה שיוצרת מטריצה של העלויות
// make_cost_matrix(profit_matrix, inversion_function)
// Munkres.prototype.compute(cost_matrix, options);

// continue from here
const preferences = require('./controllers/preferencesController');
// const { __make_matrix } = require('./controllers/preferencesController')

async function printWeightMatrix() {
  try {
    const weightMatrix = await preferences.__make_matrix();
    console.log(`aaaa ${weightMatrix}`);
  } catch (error) {
    console.log(error);
  }
}
module.exports={printWeightMatrix}
 printWeightMatrix()
 .then((matrix) => {console.log(matrix)})
 .catch((err) => {console.log(err)})