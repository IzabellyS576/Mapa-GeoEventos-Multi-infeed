# 🗺️ Mapa GeoEventos <> Multi-Infeed

Aplicação web interativa que exibe um mapa utilizando **Leaflet**, construída com **React**, **Vite**, **TypeScript** e **Tailwind CSS**.

> Esse repositório busca estudar como o Mapa GeoEventos pode ser usado no Multi-Infeed em React.


## Funcionalidades

- Mapa interativo com zoom e navegação (arraste)
- Marcadores e popups com informações
- Interface responsiva estilizada com Tailwind CSS
- Código tipado com TypeScript


## Tecnologias

| Tecnologia | Uso |
|---|---|
| [React](https://react.dev/) | Biblioteca para construção da interface |
| [Vite](https://vitejs.dev/) | Bundler e servidor de desenvolvimento |
| [TypeScript](https://www.typescriptlang.org/) | Tipagem estática |
| [Tailwind CSS](https://tailwindcss.com/) | Estilização utilitária |
| [Leaflet](https://leafletjs.com/) | Geração e manipulação do mapa |
| [React Leaflet](https://react-leaflet.js.org/) | Integração do Leaflet com React |

## Pré-requisitos

Antes de começar, você precisa ter instalado:

- [Node.js](https://nodejs.org/) **18 ou superior**
- [npm](https://www.npmjs.com/) (já vem com o Node) ou [yarn](https://yarnpkg.com/) / [pnpm](https://pnpm.io/)
- [Git](https://git-scm.com/)

Para conferir as versões instaladas:

```bash
node -v
npm -v
```

## Como rodar o projeto

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/nome-do-repositorio.git
```

### 2. Acesse a pasta do projeto

```bash
cd nome-do-repositorio
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Inicie o servidor de desenvolvimento

```bash
npm run dev
```

O projeto ficará disponível em **http://localhost:5173** (a porta pode variar; confira a saída do terminal).

## Estrutura de pastas

```
├── public/             # Arquivos estáticos
├── src/
│   ├── components/     # Componentes React (ex.: Map)
│   ├── assets/         # Imagens, ícones e outros recursos
│   ├── App.tsx         # Componente principal
│   ├── main.tsx        # Ponto de entrada da aplicação
│   └── index.css       # Estilos globais e diretivas do Tailwind
├── index.html
├── tailwind.config.js
├── tsconfig.json
├── vite.config.ts
└── package.json
```
