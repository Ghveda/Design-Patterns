// User class is responsible only to set the information of the user
class User {
    constructor(name: string, email: string) {}
}

// UserAuthentication is responsible to do only an authentication
class UserAuthentication {
    constructor(user: User) {}

    authentication(password: string) {
        // Implementation
    }
}