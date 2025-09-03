import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AppMenuitem } from './app.menuitem';

@Component({
    selector: 'app-menu',
    standalone: true,
    imports: [CommonModule, AppMenuitem, RouterModule],
    template: `<ul class="layout-menu">
        <ng-container *ngFor="let item of model; let i = index">
            <li app-menuitem *ngIf="!item.separator" [item]="item" [index]="i" [root]="true"></li>
        </ng-container>
    </ul> `
})
export class AppMenu {
    model: MenuItem[] = [];

    ngOnInit() {
        this.model = [
            {
                label: 'Home',
                items: [
                    { label: 'Introdução', icon: 'pi pi-fw pi-users', routerLink: ['/team'] },
                    { label: 'Pilares', icon: 'pi pi-fw pi-th-large', routerLink: ['/tabs'] },
                    { label: 'Quiz', icon: 'pi pi-fw pi-th-large', routerLink: ['/quiz'] }
                ]
            }
        ];
    }
}