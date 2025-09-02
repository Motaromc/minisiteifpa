import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-team',
    standalone: true,
    imports: [CommonModule],
    template: `
        <div class="card">
            <h1>Bem-vindo ao mini-site Código de Ética para Desenvolvedores!</h1>
            <p [ngStyle]="{'font-size.px': 20, 'text-align':'justify'}">
               Este mini-site interativo foi criado para mostrar como a ética guia decisões na tecnologia. Aqui você descobrirá como escolhas de design, algoritmos e funcionalidades impactam a sociedade, a privacidade dos usuários, a inclusão digital e a clareza dos sistemas. Ao longo do site, vamos apresentar os quatro pilares fundamentais do Código de Ética para Desenvolvedores: Responsabilidade Social, Privacidade, Acessibilidade e Transparência, mostrando cenários e boas práticas que todo desenvolvedor deve seguir para criar tecnologia ética e responsável.
            </p>
            <hr>
            <h2>
                O que é o Código de Ética para Desenvolvedores?
            </h2>
            <p [ngStyle]="{'font-size.px': 20, 'text-align':'justify'}">
                O Código de Ética para Desenvolvedores orienta a conduta profissional de quem cria software, aplicativos e sistemas digitais, estabelecendo responsabilidades sobre como agir diante de desafios éticos relacionados à tecnologia, à sociedade e aos usuários. Nosso compromisso é desenvolver tecnologia de forma consciente e responsável, guiados pelos seguintes valores: Integridade, Inclusão, Proteção e Impacto Positivo. Cada decisão deve priorizar honestidade, acessibilidade, privacidade, segurança e benefícios sociais, promovendo um futuro mais justo e sustentável.
            </p>
            <h2>Pilares do Código de Ética</h2>
            <p [ngStyle]="{'font-size.px': 20, 'text-align':'justify'}">
                <b>Responsabilidade Social:</b> desenvolver software pensando no bem da sociedade e no impacto de cada decisão. <br/>Exemplo: sistemas de IA voltados para educação, saúde ou proteção ambiental.
                <br/><br/>
                <b>Privacidade:</b> proteger dados pessoais e garantir que seu uso seja transparente e autorizado. <br/>Exemplo: apps bancários com autenticação biométrica e criptografia de transações.
                <br/><br/>
                <b>Acessibilidade:</b> garantir que todos, inclusive pessoas com deficiência, possam usar a tecnologia. <br/>Exemplo: leitores de tela, legendas em vídeos e navegação por teclado ou gestos simplificados.
                <br/><br/>
                <b>Transparência:</b> criar sistemas claros, auditáveis e justos, evitando vieses e discriminações. <br/>Exemplo: algoritmos de seleção de candidatos que explicam os critérios de decisão.
            </p>
            <!--
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
            </div>-->
        </div>
    `
})
export class Team {}