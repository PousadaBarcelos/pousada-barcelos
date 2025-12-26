# Pousada Barcelos - Guia de Produção

Este projeto foi exportado do AI Studio. Para colocá-lo em produção de forma profissional (removendo avisos de CDN e otimizando a velocidade), siga os passos abaixo:

## 1. Requisitos
Você precisa ter o **Node.js** instalado (versão 18 ou superior). Baixe em: [nodejs.org](https://nodejs.org/)

## 2. Preparação do Ambiente
Após baixar e extrair o ZIP do projeto:
1. Abra o terminal (Prompt de Comando ou VS Code) na pasta do projeto.
2. Digite: `npm install` (Isso baixará o React, Tailwind e Vite para seu PC).

## 3. Gerar Versão de Produção (Build)
No terminal, digite:
`npm run build`

Isso criará uma pasta chamada **`dist`**. Esta pasta contém o site "compilado":
- Sem Babel Standalone (o código já vai traduzido).
- CSS do Tailwind minificado (apenas o que você usou).
- Imagens e scripts otimizados.

## 4. Deploy para o Firebase
Agora que você tem a pasta `dist`, seu deploy muda levemente:
1. No `firebase.json`, altere `"public": "."` para `"public": "dist"`.
2. Rode: `firebase deploy`

---

### Dica para o modo atual (Sem Node.js)
Se você **não quer usar Node.js** agora e quer apenas que o site funcione via Firebase do jeito que está:
1. Mantenha o `firebase.json` com `"public": "."`.
2. Lembre-se que no `firebase init`, quando ele perguntar a pasta pública, você deve digitar **`.`** (um ponto).
3. Ignore o aviso amarelo do Tailwind no console do navegador, ele não impede o site de funcionar para seus clientes.