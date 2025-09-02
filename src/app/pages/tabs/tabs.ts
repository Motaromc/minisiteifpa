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
                <p-tablist style="font-size:13pt">
                    <p-tab value="0">Pilar 1 - Responsabilidade Social</p-tab>
                    <p-tab value="1">Pilar 2 - Privacidade</p-tab>
                    <p-tab value="2">Pilar 3 - Acessibilidade</p-tab>
                    <p-tab value="3">Pilar 4 - Transparência</p-tab>
                </p-tablist>
                <p-tabpanels>
                    <p-tabpanel value="0">
                        <h1>
                            Responsabilidade Social e Impacto Inerente
                        </h1>
                        <img src="https://ampliar.org.br/wp-content/uploads/2021/09/o-que-e-significa-ter-responsabilidade-social.jpg" width="600" alt="responsabilidade social" />
                        <h2>
                            🤔​&nbsp;O que é?
                        </h2>
                        <p [ngStyle]="{'font-size.px': 18, 'text-align':'justify'}">
                            A responsabilidade social no contexto do desenvolvimento de software refere-se ao compromisso dos profissionais em criar soluções que respeitem os direitos das pessoas, promovam a inclusão e minimizem impactos negativos na sociedade. O código de ética para desenvolvedores orienta que decisões técnicas e de design considerem não apenas a funcionalidade e a eficiência, mas também consequências sociais, ambientais e éticas. Isso inclui proteger a privacidade, evitar vieses prejudiciais, garantir acessibilidade e agir de forma transparente. Assim, cada linha de código pode contribuir para um impacto positivo, reforçando a confiança da sociedade na tecnologia.
                        </p>
                        <img style="display:block; margin:auto;" src="https://2wecobank.com.br/wp-content/uploads/2023/03/MicrosoftTeams-image-9.png" width="600" alt="tripé da sustentabilidade" />
                        <h2>
                            ​🎬&nbsp;Cenário hipotético de responsabilidade social
                        </h2>
                        <p [ngStyle]="{'font-size.px': 18, 'text-align':'justify'}">
                            Um desenvolvedor trabalha em um aplicativo de transporte urbano. Durante o projeto, ele percebe que o algoritmo de recomendação de rotas pode favorecer certas regiões em detrimento de bairros periféricos, gerando desigualdade no acesso ao serviço. Seguindo princípios de responsabilidade social e o código de ética, ele ajusta o algoritmo para garantir rotas justas, priorizando segurança, acessibilidade e inclusão de todas as áreas da cidade. Assim, suas decisões técnicas geram impacto positivo, protegendo usuários e promovendo equidade na sociedade.
                        </p>
                    </p-tabpanel>
                    <p-tabpanel value="1">
                        <h1>
                            Privacidade e Segurança de Dados
                        </h1>
                        <img src="https://sejanaskar.com.br/wp-content/uploads/2024/02/privacidade-digital.jpg" width="600" alt="responsabilidade social" />
                        <h2>
                            🤔​&nbsp;O que é?
                        </h2>
                        <p [ngStyle]="{'font-size.px': 18, 'text-align':'justify'}">
                            A privacidade e a segurança de dados ocupam lugar central no código de ética para desenvolvedores, pois lidam diretamente com a confiança que os usuários depositam na tecnologia. Proteger dados significa adotar práticas que evitem acessos não autorizados, vazamentos e manipulações indevidas, garantindo a confidencialidade, a integridade e a disponibilidade das informações. Isso envolve desde a coleta consciente — apenas dos dados estritamente necessários — até o uso transparente e responsável, respeitando sempre o consentimento do usuário.
                            <br/><br/>
                            Além da proteção técnica, como criptografia e autenticação segura, o código de ética ressalta a importância de práticas organizacionais, como políticas claras de privacidade, auditorias periódicas e comunicação acessível sobre como as informações são tratadas. Assim, o desenvolvedor não só cumpre sua função profissional, mas também promove valores éticos essenciais: respeito à dignidade das pessoas, prevenção de danos e manutenção da confiança social na tecnologia.
                        </p>
                        <img style="display:block; margin:auto;" src="https://cdn.prod.website-files.com/67c244bbc36c57cfc66835c2/67c39626ed42428a120e8cf6_gestao-de-privacidade-blog%402x.png.webp" width="500" alt="Privacidade e Segurança de dados" />
                        <h2>
                            ​🎬&nbsp;Cenário hipotético de privacidade e segurança de dados
                        </h2>
                        <p [ngStyle]="{'font-size.px': 18, 'text-align':'justify'}">
                           Um desenvolvedor está criando um aplicativo de banco digital. Ciente da responsabilidade ética, ele decide implementar autenticação biométrica, criptografia avançada para todas as transações e alertas em tempo real sobre atividades suspeitas. Além disso, o app coleta apenas os dados estritamente necessários para oferecer o serviço, explicando de forma clara como eles serão utilizados. Dessa forma, o desenvolvedor protege o usuário contra fraudes, assegura a confidencialidade das informações financeiras e reforça a credibilidade da instituição.
                        </p>
                    </p-tabpanel>
                    <p-tabpanel value="2">
                         <h1>
                            Acessibilidade e Inclusão Digital
                        </h1>
                        <img src="https://blog.brq.com/wp-content/uploads/sites/3/2023/09/Acessibilidade-Digital_-conceitos-e-dicas-para-criar-aplicacoes-inclusivas.webp" width="600" alt="Acessibilidade na era digital" />
                        <h2>
                            🤔​&nbsp;O que é?
                        </h2>
                        <p [ngStyle]="{'font-size.px': 18, 'text-align':'justify'}">
                            A acessibilidade e a inclusão digital são princípios fundamentais no código de ética para desenvolvedores, pois garantem que a tecnologia esteja disponível para todas as pessoas, independentemente de suas condições físicas, cognitivas, sociais ou econômicas. Isso significa projetar sistemas e aplicativos que considerem diferentes necessidades, como a utilização de leitores de tela para pessoas com deficiência visual, legendas e tradução em Libras para usuários com deficiência auditiva, além de interfaces simplificadas para quem possui limitações motoras ou baixo nível de letramento digital.
                            <br/><br/>
                            Mais do que cumprir normas técnicas, a inclusão digital é um compromisso ético: reduzir barreiras, ampliar o acesso à informação e garantir que ninguém seja excluído dos benefícios da tecnologia. Assim, o desenvolvedor não apenas cria soluções funcionais, mas também atua como agente de transformação social, promovendo igualdade e cidadania no ambiente digital.
                        </p>
                        <img style="display:block; margin:auto;" src="https://projetocolabora.com.br/wp-content/uploads/2023/12/20231006acessibilidadedigital1-freepik.jpg" width="600" alt="Acessibilidade para todos" />
                        <h2>
                            ​🎬&nbsp;Cenário hipotético de acessibilidade e inclusão digital
                        </h2>
                        <p [ngStyle]="{'font-size.px': 18, 'text-align':'justify'}">
                           Uma startup decide criar um aplicativo de compras online. Durante o desenvolvimento, um dos programadores sugere implementar recursos de acessibilidade, como contraste ajustável para pessoas com baixa visão, compatibilidade com leitores de tela, atalhos de teclado para navegação sem uso do mouse e legendas automáticas nos vídeos de demonstração de produtos. Além disso, o app é testado por usuários com diferentes tipos de deficiência para garantir a usabilidade real. Essa decisão, guiada pelo código de ética, permite que pessoas com deficiência visual, auditiva ou motora tenham a mesma autonomia que qualquer outro cliente, reforçando a inclusão digital.
                        </p>
                    </p-tabpanel>
                    <p-tabpanel value="3">
                         <h1>
                            Transparência e Mitigação de Vieses
                        </h1>
                        <img src="https://www.programaria.org/wp-content/uploads/2020/05/gender-bias-artificial-intelligence-header-2048x1070-1.jpg" width="600" alt="Mitigação de Vieses" />
                        <h2>
                            🤔​&nbsp;O que é?
                        </h2>
                        <p [ngStyle]="{'font-size.px': 18, 'text-align':'justify'}">
                            A transparência e a mitigação de vieses são princípios fundamentais no código de ética para desenvolvedores, especialmente no uso de algoritmos e inteligência artificial. A transparência significa que o funcionamento dos sistemas deve ser compreensível e acessível, permitindo que usuários e instituições saibam como as decisões são tomadas e quais dados estão sendo utilizados. Já a mitigação de vieses refere-se ao cuidado em evitar que preconceitos históricos, sociais ou culturais sejam reproduzidos ou amplificados pela tecnologia.
                            <br/><br/>
                            Ao adotar esses princípios, o desenvolvedor assume a responsabilidade de garantir que suas soluções sejam justas, explicáveis e confiáveis, prevenindo práticas discriminatórias e fortalecendo a confiança da sociedade na tecnologia.
                        </p>
                        <img style="display:block; margin:auto;" src="https://i0.wp.com/www.datageeks.com.br/wp-content/uploads/2019/04/Etica-e-Inteligencia-Artificial-IA.webp?fit=1792%2C1024&ssl=1" width="600" alt="Transparência e mitigação de vieses" />
                        <h2>
                            ​🎬&nbsp;Cenário hipotético de transparência e mitigação de vieses
                        </h2>
                        <p [ngStyle]="{'font-size.px': 18, 'text-align':'justify'}">
                           Uma empresa desenvolve um sistema de recrutamento automatizado para selecionar candidatos a vagas de emprego. Seguindo o princípio da transparência, os desenvolvedores incluem explicações claras sobre os critérios utilizados pelo algoritmo, como peso de experiência profissional, habilidades técnicas e formação acadêmica. Além disso, disponibilizam relatórios que mostram por que determinado candidato foi selecionado ou não. Dessa forma, os usuários entendem o processo, podem questionar decisões e têm confiança de que não há discriminação oculta.
                        </p>
                    </p-tabpanel>
                </p-tabpanels>
            </p-tabs>
        </div>
    `
})
export class Tabs {}