import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AlertService, UserService } from '../_services/index';
//import { HomeComponent } from '../home/index';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Component({
    moduleId: module.id.toString(),
    templateUrl: 'newpage.component.html',
    providers:[//HomeComponent
    ]
})

export class NewPageComponent implements OnInit {
    model: any = {};
    loading = false;
    returnUrl: string;
    count: any = {};
    users: any[] = JSON.parse(localStorage.getItem('users'))
    constructor(
        //private homeComponent: HomeComponent,
        private route: ActivatedRoute,
        private router: Router,
        //private authenticationService: AuthenticationService,
        private alertService: AlertService,
        private userService: UserService,
        private http: HttpClient) { }
        
    ngOnInit() {
        console.log("load existing local storage--",this.users)
        //this.homeComponent.hi();
        // reset login status
        //this.authenticationService.logout();

        // get return url from route parameters or default to '/'
        //this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }
    
    login() {
        this.count= this.userService.login(this.model.username, this.model.password);
        console.log("count----",this.count)
        if(this.count){
            this.router.navigate(['/product']);
        }else{
            this.alertService.error("error");
        }    
    }

}
