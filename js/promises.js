
import {GITHUB_API} from ",/api-keys.js";


const baseURL = "https://api.github.com/users/";


const setting = {
    headers: {
        'Authorization': 'token ' + GITHUB_API
    }
}

const getUsersDateOfLastCommit = (username) => {
    return fetch(baseUrl + username + "/events/public")
        .then(res => res.json())
        .then(res => {
            return res.filter((item) => item.type === "PushEvent")[0].create_at;
        })
};

console.log(getUsersDateOfLastCommit("unfaiyted"));
getUsersDateOfLastCommit("unfaiyted");

const wait = (time) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, time)
    })
};

wait(1000).then(() => console.log("you'll see this after 1 second"));