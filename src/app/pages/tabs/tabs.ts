import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsModule } from 'primeng/tabs';

@Component({
    selector: 'app-tabs',
    standalone: true,
    imports: [CommonModule, TabsModule],
    template: `
        <div class="card">
            <p-tabs value="0">
                <p-tablist>
                    <p-tab value="0">Header I</p-tab>
                    <p-tab value="1">Header II</p-tab>
                    <p-tab value="2">Header III</p-tab>
                    <p-tab value="3">Header IV</p-tab>
                </p-tablist>
                <p-tabpanels>
                    <p-tabpanel value="0">
                        <p>Conteúdo da Aba 1</p>
                    </p-tabpanel>
                    <p-tabpanel value="1">
                        <p>Conteúdo da Aba 2</p>
                    </p-tabpanel>
                    <p-tabpanel value="2">
                        <p>Conteúdo da Aba 3</p>
                    </p-tabpanel>
                    <p-tabpanel value="3">
                        <p>Conteúdo da Aba 4</p>
                    </p-tabpanel>
                </p-tabpanels>
            </p-tabs>
        </div>
    `
})
export class Tabs {}