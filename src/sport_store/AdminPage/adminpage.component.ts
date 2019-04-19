import { Component, ViewChild, ElementRef } from '@angular/core';
import { SidenavService } from '../sidenav.service';

@Component({
    selector: 'adminpage_sportstore-root',
    templateUrl: './adminpage.component.html',
    styleUrls: ['./adminpage.component.css'],
})
export class AdminPageComponent {
    addElement: boolean;
    deleteElement: boolean;
    opened: boolean;
    countToToolbar: number = 2;
    public condition: boolean;
    constructor(private sidenavService: SidenavService) {
        this.deleteElement = false;
        this.addElement = false;
        this.condition = false;
        this.sidenavService.dropAdminSidenav.subscribe((result: boolean) => {
        if (result) {
        this.opened = true;
        }
        });
    }
    goToAddElementPage() {
        this.deleteElement = false;
        this.addElement = true;
    }
    goToDeleteElementPage() {
        this.addElement = false;
        this.deleteElement = true;
    }

}