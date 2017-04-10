import { Component, OnInit } from '@angular/core';
import { AlertService } from '../services/alert.service';

@Component({
    moduleId: module.id,
    selector: 'alert',
    templateUrl: 'alert.component.html'
})

export class AlertComponent {
    message: any;

    constructor(private AlertService: AlertService) { }

        ngOnInit() {
           this.AlertService.getMessage().subscribe(message => {
               this.message = message; });
           }
            
        }
