export class User {
    constructor(username, avatar) {
        this.username = username;
        this.avatar = avatar;
    }

    tweet(tweet) {
        return ({
            username: this.username,
            avatar: this.avatar,
            tweet 
        });
    }
}