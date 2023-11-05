const mongoose = require('mongoose');
const ratings = require('../models/ratingsModel');
const volunteer = require('../models/volunteerModel');
const generateDummyColumns = require('../matrixAlg/addingColumns');
const preferences = require('../models/PreferencesModel');
// Retrieve the count of documents in the volunteer and ratings collections
const getCollectionCount = async () => {
    try {
        // const rows = await ratings.countDocuments().exec();
        const ratingList = await ratings.find()
        const rows = ratingList.length();
        const volunteerList = await volunteer.find({});
        const columns = volunteerList.length();
        console.log(volunteerList, ratingList, rows, columns)
        // const columns = await volunteer.countDocuments().exec();
        const preferenceList = await preferences.find({});

        const matrix = [rows][columns];
        for (let i = 0; i < rows; i++) {
            const result = await preference.findOne({ volunteerId: volunteerList[i] });


const fieldName=result.
                matrix[i] = [];
                // matrix[i] = volunteer[i]
                matrix[i] = getcheckVolunteer();
                console.log(matrix[i]);;

        }

        if (columns < rows)
            generateDummyColumns(rows, columns);

        // Populate the matrix with values
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < columns; j++) {

                matrix[i][j]
                //   matrix[i][j] = i * columns + j + 1;
            }
        }

        console.log(matrix);
    } catch (error) {
        console.error('Error retrieving collection count:', error);
    }
};

// Call the function to retrieve the collection count and create the matrix
getCollectionCount();
