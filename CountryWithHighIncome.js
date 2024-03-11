import userObj from './users-db.json';

// 1.Country with highest salary
function highestIncome(inputObject) {
    if (typeof inputObject !== 'object' || !inputObject?.length) {
        return `Invalid Input`;
    }

    let maxIncome = 0;
    let highCountry;

    for (let i = 0; i < inputObject.length; i++) {

        const { income, country } = inputObject[i];

        if (typeof income !== 'number' || typeof country !== 'string') {
            return `Invalid Data`;
        }

        //maxIncome is compared with actual income
        if (maxIncome < income) {
            maxIncome = income;
            highCountry = country;
        }
    }
    return highCountry;
}

console.log(highestIncome(userObj));