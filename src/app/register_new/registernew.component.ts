import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { User } from '../_models/index';
import { AlertService, UserService } from '../_services/index';

@Component({
    moduleId: module.id.toString(),
    templateUrl: 'registernew.component.html'
})

export class RegisterNewComponent {
    model: any = {};
    loading = false;
    

    constructor(
        private router: Router,
        private userService: UserService,
        private alertService: AlertService,
        private http: HttpClient) { }

         register() {
            this.userService.create(this.model);
            this.alertService.success('Registration successful', true);
            this.router.navigate(['/']);
        }     
     
}
