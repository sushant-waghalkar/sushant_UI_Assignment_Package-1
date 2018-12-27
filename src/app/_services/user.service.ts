import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../_models/index';

@Injectable()
export class UserService {
    temp = new Array;
    users: any[] = JSON.parse(localStorage.getItem('users')) || [];
    constructor(private http: HttpClient) {
        
     }

    create(user: User) {
        let newUser = user;
        console.log("create user ((((--->",newUser)
        newUser.id = this.users.length + 1;
                console.log("Genrate new user id((((--->",this.users.length + 1)
                this.users.push(newUser);
                console.log("final user data--->",this.users)
                localStorage.setItem('users', JSON.stringify(this.users));
            }

    login(username: string, password: string){
        let filteredUsers = this.users.filter(user => {
            return user.username === username && user.password === password;
        });
        if (filteredUsers.length) {
            console.log("filteredUsers.length--",filteredUsers.length)
           return filteredUsers.length;                  
    }
}

}