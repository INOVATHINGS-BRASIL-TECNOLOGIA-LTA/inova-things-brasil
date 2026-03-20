# Inova Things Brasil - Institucional

<p align="center">
  <img src="public/logo/inovathings-transparente.png" alt="Inova Things Brasil Logo" width="250" />
</p>

[![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18-blue?logo=react)](https://react.dev/)
[![Docker](https://img.shields.io/badge/Docker-Multi--Stage-blue?logo=docker)](https://docker.com/)
[![Nginx](https://img.shields.io/badge/Nginx-Reverse%20Proxy-green?logo=nginx)](https://nginx.org/)
[![SSL](https://img.shields.io/badge/SSL-Let's%20Encrypt-orange?logo=letsencrypt)](https://letsencrypt.org/)

Repositório oficial da Landing Page e Portfólio da **Inova Things Brasil**. Uma aplicação Web corporativa desenvolvida com as melhores práticas de Arquitetura, Performance e Segurança.

---

## 🚀 Tecnologias

O ecossistema do projeto foi escolhido focando na escalabilidade, SEO técnico e altíssimo desempenho em produção:

- **Frontend:** [Next.js](https://nextjs.org/) (App Router), React, TypeScript e [Tailwind CSS](https://tailwindcss.com/).
- **Validação & Formulários:** React Hook Form integrado nativamente com [Zod](https://zod.dev/) para sanitização completa do lado do cliente (Prevenção de mutações indesejadas).
- **Orquestração e Infraestrutura:** Docker Compose com containers estritos. O container web utiliza *Multi-stage builds* nativos da Vercel (`output: "standalone"`) que reduz drasticamente (< 150MB) o tamanho final da imagem.
- **Proxy & Segurança Redes:** Nginx atuando como *Reverse Proxy* e *SSL Terminator*.
- **Criptografia TLS:** Geração e renovação automática de certificados SSL/TLS wildcard modernizados utilizando o **Certbot** integrado via ACME webroot challenge.

---

## 🔒 Postura de Segurança (Hardening)

A aplicação foi rigorosamente protegida na camada HTTP através da delegação do tráfego pelo Nginx.

- **Ausência de Fingerprinting:** As versões do `Nginx` e as tecnologias da aplicação (Header `X-Powered-By: Next.js`) encontram-se bloqueados, prevenindo identificação via bots.
- **Cifras Modernas:** Apenas negociações a partir do `TLSv1.2` e `TLSv1.3` utilizando um conjunto fechado de Cyphers Seguros (Mozilla Intermediate Ciphers).
- **Security Headers Estritos:**
  - `Strict-Transport-Security` (HSTS Preloaded por 2 anos)
  - `X-Frame-Options: SAMEORIGIN` (Bloqueio de Clickjacking)
  - `X-Content-Type-Options: nosniff` (Prevenção de Sniffing MIME)
  - `Content-Security-Policy (CSP)` Dinâmica

---

## 🐳 Inicialização em Produção

O modelo de "Deploy Local/Dedicado" requer o **Docker** e o **Docker Compose**. O projeto já está plug-and-play e configura sozinho a aquisição de SSL (mesmo em cenários "Ovo e Galinha" do Nginx).

### 1. Requisitos de Ambiente
* Docker Engine 24+
* Domínio apontado tipo A (ex: `inovathings.com.br`) para o IP da VPS/Servidor.

### 2. Subindo a Aplicação
Dentro da raiz do projeto, execute:
```bash
docker compose up -d --build
```
Isso construirá o Next.js, iniciará o Servidor Web e montará a renovação assíncrona do *Let's Encrypt* debaixo dos panos.

> **Controle de Resursos (Limites)**:
> O consumo de memória também se encontra mitigado via orquestrador: Next.js (`Max: 256MB`), Nginx (`Max: 64MB`) e Certbot (`Max: 64MB`), garantindo que a Landing Page consuma o mínimo no Virtual Host.

---

## 👨‍💻 Desenvolvimento Local

Para clonar a aplicação e rodar em ambiente da sua máquina (sem Docker/SSL):

```bash
# 1. Instale os pacotes NodeJS via NPM
npm install

# 2. Rode o ambiente de desenvolvimento em hot-reload
npm run dev
```

Acesse em seu navegador o host `http://localhost:3000`. Modificações feitas em `/src` recompilam o código instantaneamente.

---
© **Inova Things Brasil Tecnologia Ltda.**  
*Feito com rigor e engenharia moderna para resultados palpáveis.*
