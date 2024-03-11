import userObj from './users-db.json';

// 3.Info email which ends with .gov
function completeUserInfo(inputObject) {
    if (typeof inputObject !== 'object' || !inputObject?.length) {
        return `Invalid Input`;
    }

    let resultObject = [];
    for (let users of inputObject) {
        if (typeof users.email !== 'string') {
            return 'Invalid Data';
        }

        // Comparing email ending with '.gov'
        if (users.email.slice(-4) === '.gov') {
            resultObject.push(users);
        }
    }
    return resultObject;

}

console.log(completeUserInfo(userObj));