import userObj from './users-db.json';

// 4.Country with maximum combined income for Female
function combinedFemaleIncome(inputObject) {
    if (typeof inputObject !== 'object' || !inputObject?.length) {
        return `Invalid Input`;
    }

    let resultObject = {};

    for (let users of inputObject) {
        if (typeof users.gender !== 'string' || typeof users.country !== 'string' || typeof users.income !== 'number') {
            return `Invalid Data`;
        }
        
        //Taking gender property with value of Female
        if (users.gender === 'Female') {
            if (!resultObject.hasOwnProperty(users.country)) {
                resultObject[users.country] = [users.income];
            } else {
                resultObject[users.country].push(users.income);
            }
        }
    }

    let highestSalary = 0;
    let highestCountry = "";
    for (let country in resultObject) {

        // reduce() is used to find sum of female income from each country
        const eachSalarySum = resultObject[country].reduce((a, b) => { return a + b });

        // EachSalarySum is compared with highestSalary
        if (highestSalary < eachSalarySum) {
            highestSalary = eachSalarySum;
            highestCountry = country;

        }
    }
    return highestCountry;
}

console.log(combinedFemaleIncome(userObj));