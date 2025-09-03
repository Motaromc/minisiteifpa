import { Component } from '@angular/core';
import { CommonModule, NgClass, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Pergunta {
    descricao: string;
    respostaCorreta: string;
    respostaUsuario: string;
    status: 'neutro' | 'correto' | 'incorreto';
}

@Component({
    selector: 'app-quiz',
    standalone: true,
    imports: [
        CommonModule, 
        FormsModule,
        NgFor,
        NgClass
    ],
    template: `
        <div class="card">
            <div class="quiz-container">
                <h1>Teste seu conhecimento!</h1>
                <p>Ligue o conceito à sua correta descrição:</p>

                <div id="quiz">
                    <div 
                        *ngFor="let pergunta of perguntas" 
                        class="quiz-item" 
                        [ngClass]="{
                            'correto': pergunta.status === 'correto', 
                            'incorreto': pergunta.status === 'incorreto'
                        }">

                        <div class="descricao">{{ pergunta.descricao }}</div>
                        <div class="selecao">
                            <select [(ngModel)]="pergunta.respostaUsuario">
                                <option value="">Selecione o pilar...</option>
                                <option value="responsabilidade-social">Responsabilidade Social</option>
                                <option value="privacidade">Privacidade</option>
                                <option value="acessibilidade">Acessibilidade</option>
                                <option value="transparencia">Transparência</option>
                            </select>
                        </div>
                    </div>
                </div>

                <button id="btn-verificar" (click)="verificarRespostas()">Verificar Respostas</button>
                
                <div id="resultado" [ngClass]="resultado.classe">
                    {{ resultado.texto }}
                </div>
            </div>
        </div>
    `,

    styles: [`
        .quiz-container { font-family: sans-serif; max-width: 800px; margin: auto; padding: 20px; }
        .quiz-item { display: flex; align-items: center; justify-content: space-between; border: 1px solid #ddd; padding: 15px; margin-bottom: 10px; border-radius: 8px; transition: border-color 0.3s, background-color 0.3s; }
        .quiz-item .descricao { flex-basis: 60%; color: var(--text-color); }
        .quiz-item .selecao { flex-basis: 35%; }
        .quiz-item select { width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 5px; font-size: 1em; cursor: pointer; background-color: var(--surface-card); color: var(--text-color); }
        #btn-verificar { display: block; width: 100%; padding: 15px; font-size: 1.2em; font-weight: bold; color: white; background-color: #007bff; border: none; border-radius: 8px; cursor: pointer; margin-top: 20px; transition: background-color 0.3s; }
        #btn-verificar:hover { background-color: #0056b3; }
        #resultado { text-align: center; font-size: 1.3em; font-weight: bold; margin-top: 20px; padding: 15px; border-radius: 8px; }
        .correto { border-color: #28a745 !important; background-color: #e9f7ec; }
        .correto select { border-color: #28a745; }
        .incorreto { border-color: #dc3545 !important; background-color: #fceaea; }
        .incorreto select { border-color: #dc3545; }
        .resultado-correto { background-color: #e9f7ec; color: #28a745; }
        .resultado-incorreto { background-color: #fceaea; color: #dc3545; }
    `]
})

export class Quiz {

    perguntas: Pergunta[] = [
        {
            descricao: 'Garantir que todos, inclusive pessoas com deficiência, possam usar a tecnologia (ex: leitores de tela).',
            respostaCorreta: 'acessibilidade',
            respostaUsuario: '',
            status: 'neutro'
        },
        {
            descricao: 'Criar sistemas claros e justos, evitando vieses (ex: algoritmos de seleção que explicam seus critérios).',
            respostaCorreta: 'transparencia',
            respostaUsuario: '',
            status: 'neutro'
        },
        {
            descricao: 'Desenvolver software pensando no bem da sociedade e no impacto de cada decisão (ex: IA para saúde).',
            respostaCorreta: 'responsabilidade-social',
            respostaUsuario: '',
            status: 'neutro'
        },
        {
            descricao: 'Proteger dados pessoais e garantir que seu uso seja autorizado (ex: criptografia em apps bancários).',
            respostaCorreta: 'privacidade',
            respostaUsuario: '',
            status: 'neutro'
        }
    ];

    resultado = {
        texto: '',
        classe: ''
    };

    verificarRespostas(): void {
        let pontuacao = 0;
        
        this.perguntas.forEach(pergunta => {
            if (pergunta.respostaUsuario === '') {
                pergunta.status = 'neutro';
                return;
            }

            if (pergunta.respostaUsuario === pergunta.respostaCorreta) {
                pontuacao++;
                pergunta.status = 'correto';
            } else {
                pergunta.status = 'incorreto';
            }
        });

        this.resultado.texto = `Você acertou ${pontuacao} de ${this.perguntas.length}!`;
        this.resultado.classe = pontuacao === this.perguntas.length ? 'resultado-correto' : 'resultado-incorreto';
    }
}
