import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { StyleClassModule } from 'primeng/styleclass';
import { AppConfigurator } from './app.configurator';
import { LayoutService } from '../service/layout.service';

@Component({
    selector: 'app-topbar',
    standalone: true,
    imports: [RouterModule, CommonModule, StyleClassModule, AppConfigurator],
    template: ` <div class="layout-topbar">
        <div class="layout-topbar-logo-container">
            <button class="layout-menu-button layout-topbar-action" (click)="layoutService.onMenuToggle()">
                <i class="pi pi-bars"></i>
            </button>
            <a class="layout-topbar-logo" routerLink="/">
                <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 40px; height: 40px;">
                    <rect x="20" y="20" width="25" height="25" fill="#dc2626" rx="3"/>
                    <rect x="50" y="20" width="25" height="25" fill="#16a34a" rx="3"/>
                    <rect x="80" y="20" width="25" height="25" fill="#16a34a" rx="3"/>
                    <rect x="20" y="50" width="25" height="25" fill="#16a34a" rx="3"/>
                    <rect x="50" y="50" width="25" height="25" fill="#16a34a" rx="3"/>
                    <rect x="20" y="80" width="25" height="25" fill="#16a34a" rx="3"/>
                    <rect x="50" y="80" width="25" height="25" fill="#16a34a" rx="3"/>
                    <rect x="80" y="80" width="25" height="25" fill="#16a34a" rx="3"/>
                    <rect x="20" y="110" width="25" height="25" fill="#16a34a" rx="3"/>
                    <rect x="50" y="110" width="25" height="25" fill="#16a34a" rx="3"/>
                </svg>
                <span style="margin-left: 8px;">IFPA</span>
            </a>
        </div>

        <div class="layout-topbar-actions">
            <div class="layout-config-menu">
                <button type="button" class="layout-topbar-action" (click)="toggleDarkMode()">
                    <i [ngClass]="{ 'pi ': true, 'pi-moon': layoutService.isDarkTheme(), 'pi-sun': !layoutService.isDarkTheme() }"></i>
                </button>
                <div class="relative">
                    <button
                        class="layout-topbar-action layout-topbar-action-highlight"
                        pStyleClass="@next"
                        enterFromClass="hidden"
                        enterActiveClass="animate-scalein"
                        leaveToClass="hidden"
                        leaveActiveClass="animate-fadeout"
                        [hideOnOutsideClick]="true"
                    >
                        <i class="pi pi-palette"></i>
                    </button>
                    <app-configurator />
                </div>
            </div>
        </div>
    </div>`
})
export class AppTopbar {
    items!: MenuItem[];

    constructor(public layoutService: LayoutService) {}

    toggleDarkMode() {
        this.layoutService.layoutConfig.update((state) => ({ ...state, darkTheme: !state.darkTheme }));
    }
}