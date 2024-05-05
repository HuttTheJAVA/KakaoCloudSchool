import fs from 'fs'
import path from 'path';

const __dirname = path.resolve();

const usersJsonDir = '/model/repository/users.json';

function validateUser(email, password) {

    const usersJsonFile = fs.readFileSync(__dirname + usersJsonDir, 'utf8');
    const usersJsonData = JSON.parse(usersJsonFile);

    for (const key in usersJsonData){
        let user = usersJsonData[key];
        if(user.email == email && user.password == password){
            return true;
        }
    }
    
    return false;
}

function getUserNickName(email) {
    const usersJsonFile = fs.readFileSync(__dirname + usersJsonDir, 'utf8');
    const usersJsonData = JSON.parse(usersJsonFile);

    for (const key in usersJsonData){
        let user = usersJsonData[key];
        if(user.email == email){
            return user["nickname"];
        }
    }
}


export default {
    validateUser,
    getUserNickName
};