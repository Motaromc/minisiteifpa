import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-team',
    standalone: true,
    imports: [CommonModule],
    template: `
        <div class="card">
            <div class="text-center mb-5">
                <div class="text-900 text-3xl font-medium mb-3">Nossa Equipe</div>
                <span class="text-600 font-medium text-xl">Conheça os membros da nossa equipe.</span>
            </div>

            <div class="grid">
                <div class="col-12 md:col-6 lg:col-3 p-3">
                    <div class="text-center">
                        <img src="https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png" alt="Amy Elsner" class="w-9rem h-9rem rounded-full mx-auto mb-3">
                        <div class="text-xl font-medium">Amy Elsner</div>
                        <div class="text-600">UI/UX Designer</div>
                    </div>
                </div>
                <div class="col-12 md:col-6 lg:col-3 p-3">
                    <div class="text-center">
                        <img src="https://primefaces.org/cdn/primeng/images/demo/avatar/asiyajavayant.png" alt="Asiya Javayant" class="w-9rem h-9rem rounded-full mx-auto mb-3">
                        <div class="text-xl font-medium">Asiya Javayant</div>
                        <div class="text-600">Frontend Developer</div>
                    </div>
                </div>
                <div class="col-12 md:col-6 lg:col-3 p-3">
                    <div class="text-center">
                        <img src="https://primefaces.org/cdn/primeng/images/demo/avatar/ionibowcher.png" alt="Ioni Bowcher" class="w-9rem h-9rem rounded-full mx-auto mb-3">
                        <div class="text-xl font-medium">Ioni Bowcher</div>
                        <div class="text-600">Backend Developer</div>
                    </div>
                </div>
                <div class="col-12 md:col-6 lg:col-3 p-3">
                    <div class="text-center">
                        <img src="https://primefaces.org/cdn/primeng/images/demo/avatar/xuxuefeng.png" alt="Xuxue Feng" class="w-9rem h-9rem rounded-full mx-auto mb-3">
                        <div class="text-xl font-medium">Xuxue Feng</div>
                        <div class="text-600">Project Manager</div>
                    </div>
                </div>
            </div>
        </div>
    `
})
export class Team {}