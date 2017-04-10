import { Component, OnInit } from '@angular/core';
import { provideRoutes } from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../services/user.service';


@Component({
  moduleId: module.id,
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})

export class ProjectsComponent {
    tomatoimagepath: string;
    makeitinyimagepath: string;

    constructor(){
        this.tomatoimagepath = '/assets/media/tomato_clock.png'
        this.makeitinyimagepath = '/assets/media/makeitiny.png'
    }

}
