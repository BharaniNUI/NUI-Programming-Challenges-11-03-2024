import userObj from './users-db.json';

// 2.Country which has the combined highest income
function combinedHighestIncome(inputObject) {
    if (typeof inputObject !== 'object' || !inputObject?.length) {
        return `Invalid Input`;
    }

    let resultObject = {};

    for (let users of inputObject) {
        if (typeof users.country !== 'string' || typeof users.income !== 'number') {
            return `Invalid Data`;
        }

        //Storing each country income in an object
        if (!resultObject.hasOwnProperty(users.country)) {
            resultObject[users.country] = [users.income];
        } else {
            resultObject[users.country].push(users.income);
        }
    }

    let highestSalary = 0;
    let highestCountry = "";

    for (let country in resultObject) {

        // reduce() method is used to find sum of salary
        const eachSalarySum = resultObject[country].reduce((a, b) => { return a + b });

        // EachSalarySum is compared with highestSalary
        if (highestSalary < eachSalarySum) {
            highestSalary = eachSalarySum;
            highestCountry = country;

        }
    }
    return highestCountry;
}

console.log(combinedHighestIncome(userObj));