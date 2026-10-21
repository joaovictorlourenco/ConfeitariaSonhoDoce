---
name: Sonho Doce
description: Sistema visual da confeitaria, com identidade rosa, fotografia existente e encomendas pelo WhatsApp.
colors:
  background: "#fdfbfc"
  foreground: "#38272f"
  primary: "#a42d60"
  primary-hover: "#89224e"
  primary-foreground: "#fff8fb"
  muted: "#faf3f6"
  muted-foreground: "#745d68"
  border: "#e7d5de"
  hero-surface: "#fbf0f4"
  footer-surface: "#f7ecf1"
typography:
  display:
    fontFamily: '"Outfit Variable", sans-serif'
    fontSize: "clamp(2.75rem, 4.15vw, 3.75rem)"
    fontWeight: 500
    lineHeight: 1.08
    letterSpacing: "-.035em"
  headline:
    fontFamily: '"Outfit Variable", sans-serif'
    fontSize: "clamp(2rem, 3.3vw, 3rem)"
    fontWeight: 500
    lineHeight: 1.15
    letterSpacing: "-.035em"
  title:
    fontFamily: '"Outfit Variable", sans-serif'
    fontSize: "1.375rem"
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: "-.02em"
  body:
    fontFamily: '"Outfit Variable", sans-serif'
    fontSize: "1rem"
    lineHeight: 1.6
  lead:
    fontFamily: '"Outfit Variable", sans-serif'
    fontSize: "1.125rem"
    lineHeight: 1.65
  label:
    fontFamily: '"Outfit Variable", sans-serif'
    fontSize: ".9375rem"
    fontWeight: 500
  navigation:
    fontFamily: '"Outfit Variable", sans-serif'
    fontSize: ".875rem"
rounded:
  photo: "16px"
  pill: "999px"
  circle: "50%"
  skip-link: "8px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "16px"
  content: "20px"
  lg: "24px"
  xl: "32px"
  grid: "36px"
  heading: "44px"
  xxl: "48px"
  section-mobile: "64px"
  section: "104px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.primary-foreground}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "12px 24px"
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
  button-header:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.primary-foreground}"
    typography: "{typography.navigation}"
    rounded: "{rounded.pill}"
    padding: "10px 20px"
  text-link:
    typography: "{typography.label}"
  product-order:
    textColor: "{colors.primary}"
    rounded: "{rounded.circle}"
    height: "44px"
    width: "44px"
  product-order-hover:
    backgroundColor: "{colors.background}"
  navigation:
    textColor: "{colors.foreground}"
    typography: "{typography.navigation}"
    padding: "12px 0"
  map-disclosure:
    backgroundColor: "{colors.muted}"
    textColor: "{colors.foreground}"
    rounded: "{rounded.photo}"
    padding: "32px"
---

# Design System: Sonho Doce

## Overview

Esta documentação registra os estilos implementados em `src/styles/global.css` e nos componentes compartilhados da página. A evolução preserva a identidade rosa, o logo, as fotos existentes e o encaminhamento das encomendas para o WhatsApp, conforme os compromissos registrados em `PRODUCT.md`.

A interface usa uma única família tipográfica, títulos de peso médio, áreas de respiro e fotografia de doces em destaque. A hierarquia nasce da escala dos textos, das diferenças de superfície e das proporções das colunas. A direção desta evolução foi calibrada em composição 6/10, movimento 4/10 e densidade 3/10; esses parâmetros descrevem a direção do trabalho e não são tokens CSS.

**Key Characteristics:**

- Rosa como único acento de interface sobre tema claro fixo, com fundos rosados suaves.
- Fotografias e logo existentes como elementos de identidade.
- Superfícies planas, cantos suaves nas imagens e botões em cápsula.
- Movimento breve em interações e entrada inicial, respeitando movimento reduzido.

## Colors

A paleta combina rosa de ação, texto com fundo rosado e neutros de baixa saturação. Os valores normativos estão no frontmatter; a implementação os fornece por propriedades CSS no elemento raiz.

### Primary

- **Rosa principal** (`primary`): chamadas de encomenda, trecho de destaque do título, ícones e foco de teclado.
- **Rosa de interação** (`primary-hover`): fundo do botão principal ao passar o ponteiro.
- **Texto sobre rosa** (`primary-foreground`): conteúdo dos botões e da seleção de texto.

### Neutral

- **Fundo claro rosado** (`background`) e **texto escuro rosado** (`foreground`): leitura e áreas principais.
- **Superfície suave** (`muted`): fundo do catálogo e apoio ao mapa.
- **Texto secundário** (`muted-foreground`): descrições, legendas e informações auxiliares.
- **Divisória rosada** (`border`): separação de conteúdo, contorno das ações circulares e fundo durante carregamento das imagens do catálogo.
- **Superfície inicial** (`hero-surface`) e **superfície do rodapé** (`footer-surface`): diferenciação entre grandes áreas da página.

O tema é claro e fixo por decisão do usuário. Não há troca automática com o sistema nem um segundo acento de interface. As cores das fotografias e do mapa pertencem ao conteúdo, não à paleta dos controles.

As rampas tonais no sidecar são derivações para inspeção no painel, não novas cores implementadas. Os tokens do frontmatter permanecem a referência para a interface.

## Typography

**Display Font / Body Font:** Outfit Variable, com fallback `sans-serif`, auto-hospedada pelo pacote `@fontsource-variable/outfit`.

Uma única família atende títulos, descrições, navegação e ações. Títulos usam peso médio, espaçamento de letras levemente fechado e quebra equilibrada. O nome da marca usa peso 600; ele acompanha o logo existente e não o substitui.

### Hierarchy

- **Display:** título inicial, com o token `display`; o trecho em rosa ocupa uma nova linha.
- **Headline:** títulos das seções, com o token `headline` e quebras editoriais já presentes no conteúdo.
- **Title:** nomes de produtos, com o token `title`.
- **Body:** leitura geral, com o token `body`; textos de apresentação variam entre os limites observados de 38ch e 60ch.
- **Lead:** parágrafo da abertura; as introduções de seção compartilham seu tamanho, herdando a altura de linha do corpo.
- **Label / Navigation:** ações e navegação, respectivamente. Metadados menores usam tamanhos entre .8125rem e .875rem.

No intervalo até 1100px, o título inicial usa `clamp(2.5rem, 4.1vw, 3.25rem)`. Até 767px, usa `clamp(2.1rem, 8.9vw, 3.25rem)`; títulos de seção passam a 2.125rem, nomes de produto a 1.25rem e parágrafos de abertura a 1rem.

## Layout

O contêiner principal tem largura máxima de 1248px e margens laterais de 48px. Até 1100px, as margens passam a 32px; até 767px, a 20px. Seções usam o espaçamento vertical `section`, reduzido a `section-mobile` no celular.

A abertura combina texto e fotografia em colunas de proporção 1:1.1. A apresentação da confeiteira e a localização também usam duas colunas de larguras diferentes. O catálogo organiza seis produtos em duas colunas, com intervalo horizontal de 36px e vertical de 48px. Os depoimentos combinam uma citação maior à esquerda e duas à direita, separadas por linhas finas.

Até 1100px, a navegação horizontal e seu CTA dão lugar ao menu expansível. Até 767px, abertura, apresentação, catálogo, depoimentos e localização passam a uma coluna. O rodapé mantém algumas colunas menores até 370px, quando fica integralmente em uma coluna. A entrada animada da abertura também funciona no celular, com deslocamento menor.

O cabeçalho é fixo durante a rolagem, com altura de 76px no desktop e 68px no celular. A rolagem para âncoras reserva 96px no desktop e 88px no celular para manter o conteúdo visível.

## Elevation & Depth

As superfícies são planas e não usam sombras. A profundidade é indicada por tons de fundo, contornos e divisórias finas. Cabeçalho e menu usam fundo sólido, sem vidro ou desfoque. O conteúdo ocupa a camada base; o cabeçalho usa camada 10 e o link para pular ao conteúdo usa camada 20.

## Shapes

Fotografias e mapa compartilham o raio `photo`, com recorte das imagens dentro do contêiner. Os botões principais usam `pill`; as ações de encomenda ao lado dos produtos usam `circle`. O link para pular ao conteúdo usa `skip-link`.

As fotografias de produto têm proporção 3:2 e preenchimento por recorte. A imagem inicial mantém altura responsiva no desktop e 260px no celular. O retrato tem recorte próprio, registrado no componente existente; preservar a posição da confeiteira ao adaptar a imagem.

## Components

### Buttons

O CTA principal é uma cápsula rosa com texto e seta diagonal, quando presente. Usa altura mínima de 50px, intervalo de 12px e o padding registrado no frontmatter. A versão do cabeçalho reduz a altura mínima a 44px. No celular, o CTA inicial usa padding horizontal de 20px.

O hover troca o rosa de fundo; pressionar reduz a escala para .97. Essas mudanças usam transição de .2s. O foco visível de links e controles tem contorno de 3px no rosa principal e afastamento de 5px. As encomendas continuam a abrir o WhatsApp.

### Text Links

Links de ação combinam texto e ícone em linha, intervalo de 12px e altura mínima de 44px. No hover, ganham rosa e sublinhado. Links de contato e redes usam texto secundário, mudando para rosa no hover.

### Product Items

Cada item combina fotografia recortada, nome, descrição e ação circular de encomenda. Não há um painel com sombra ao redor do item. A imagem cresce para 1.035 no hover, com duração de .45s e curva `cubic-bezier(.16, 1, .3, 1)`. A ação circular tem contorno de 1px; no hover recebe a superfície de fundo e, ao pressionar, escala .97. A imagem e a ação encaminham ao mesmo orçamento da categoria no WhatsApp.

### Navigation

O cabeçalho reúne logo, nome da marca, navegação e CTA. Os links horizontais têm intervalo de 24px e ficam rosas no hover. No menu compacto, o controle ocupa 44px por 44px e os links têm altura mínima de 48px. A implementação usa `details` e `summary`, fecha ao navegar, ao clicar fora ou ao pressionar Escape e devolve o foco ao controle quando fechada por Escape.

### Testimonials and Map

Depoimentos são blocos de texto com estrelas rosas, autoria secundária e divisórias. A primeira citação recebe maior escala tipográfica, sem um contêiner elevado.

O mapa é um bloco expansível com `details` e `summary`, superfície suave e raio compartilhado. Fechado, apresenta pin, nome da confeitaria, localização e ação “Ver mapa”, com altura mínima de 340px no desktop e 280px no celular. Ao abrir, revela o iframe existente, compacta o cabeçalho e gira a seta; o mapa tem altura de 440px no desktop e 300px no celular. O hover sublinha a ação e o foco usa o contorno global. O link externo e a mensagem de alternativa continuam acessíveis fora do bloco expansível. A aparência inicial do bloco não depende do carregamento do conteúdo externo.

A abertura apresenta título, descrição e ações em sequência, com intervalos de 80ms e 160ms. O deslocamento é de 14px no desktop e 8px no celular, com opacidade inicial .75 e duração de .65s (.5s no celular). A fotografia entra em .8s após 120ms e acomoda uma escala inicial de 1.025 durante 1s. Cada entrada ocorre uma vez, sem bloquear a navegação; focar os botões encerra o movimento de seu grupo. `prefers-reduced-motion: reduce` desativa animações, transições e rolagem suave em toda a página.

No catálogo, cada foto entra uma única vez ao atingir 15% de visibilidade: 700ms, deslocamento de 18px, escala inicial .985 e opacidade inicial .72. Em duas colunas, a segunda foto recebe 90ms de intervalo; no celular não há atraso. A animação usa IntersectionObserver e Web Animations API, mantendo conteúdo visível sem JavaScript. Ativar movimento reduzido cancela animações em andamento.

Não existem campos de formulário, filtros ou chips na página publicada. Componentes genéricos presentes em `src/components/ui` não definem o aspecto desta página; documentar futuras utilizações a partir do que for efetivamente renderizado.

## Do's and Don'ts

### Do:

- **Do** preservar o rosa, o logo, as fotografias existentes e o fluxo de encomendas pelo WhatsApp.
- **Do** usar Outfit Variable auto-hospedada e os papéis tipográficos registrados.
- **Do** manter o tema claro fixo, inclusive em dispositivos configurados no modo escuro.
- **Do** usar superfícies planas, divisórias finas e os raios compartilhados para imagens e ações.
- **Do** preservar foco visível, alternativas textuais e a preferência por movimento reduzido.
- **Do** adaptar colunas e navegação nos intervalos registrados antes de introduzir novos padrões.

### Don't:

- **Don't** introduzir outro acento de interface ou substituir a identidade visual nesta evolução.
- **Don't** aplicar sombras ou efeitos de vidro aos padrões planos existentes.
- **Don't** transformar os itens de catálogo em uma pilha de painéis decorativos.
- **Don't** tratar os exemplos do sidecar como novos componentes de produto ou acrescentar campos e filtros inexistentes.
- **Don't** acrescentar preços, avaliações ou alegações factuais para preencher um layout.
