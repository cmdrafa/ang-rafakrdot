import { Component, OnInit } from '@angular/core';
import { TwitchAppService } from './services/twitchapp.service';
import { Users } from './models/twitchusers';
import { Observable } from 'rxjs';
import { provideRoutes } from '@angular/router';
import { NgForm, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Component({
    selector: 'twitchapp',
    templateUrl: './twitchapp.component.html',
    styleUrls: ['./twitchapp.component.css']
})
export class TwitchAppComponent implements OnInit {
    errorMessage: string;
    streamers = ["ESL_SC2", "OgamingSC2", "cretetion", 
    "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas" ]
     users: Users[];
     mode = 'Observable';

    constructor(private searchUserService: TwitchAppService) { }

    ngOnInit() { 
        this.updateList();
    }

    updateList() {
        this.users = new Array<Users>();

        for (var i=0; i<this.streamers.length; i++){
            this.searchUserService.getData(this.streamers[i])
            .subscribe(response => this.users.push(response));
        }
        console.log(this.users)
    }

    addUser(form: NgForm){
        
        let username = form.value.username;
        //this.streamers.push(username)

        this.searchUserService.getData(username)
        .subscribe(response => this.users.push(response));

    }

    clearUserList(){
        this.streamers = [];

        this.searchUserService.getData(this.streamers)
        .subscribe(response => this.users.push(response));
        
    }

}