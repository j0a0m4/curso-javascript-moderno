# Visual Studio Code (VSCode)

[Download aqui](https://code.visualstudio.com/)

## Instalação

Siga as instruções da documentação do editor.

- Para Windows, vai ser um instalador do tipo "avançar, avançar, concluir".
- Para algumas distros do Linux, existe a opção de instalar pelo [snap](https://snapcraft.io/code)

## Idioma

Existe a possibilidade de configurar o editor em :brazil:[português](https://marketplace.visualstudio.com/items?itemName=MS-CEINTL.vscode-language-pack-pt-BR).

Acredito ser de maior valor usar as ferramentas em inglês, devido a maior facilidade de encontrar informações nessa língua. Além disso, é muito comum não ter uma tradução adequada para certas funcionalidades. Acredito que um nível _técnico_ da língua seja altamente desejável. Principalmente, a habilidade de leitura e escuta, pois permite acesso a uma gama de conteúdos. Aprender inglês _básico_ é uma habilidade relativamente importante de se adquirir com o tempo. Os erros da linguagem de programação vão ser em inglês, ao pesquisar o erro a resposta para o seu problema possívelmente estará em inglês também.

Apesar dessas observações, faço questão de tentar traduzir as coisas ao máximo durante esse curso. Não é razoável assumir uma compreensão além do nível técnico. Vou sempre usar o termo em inglês, e repetir a tradução diversas vezes, pelo menos na definição.

## Atalhos

Atalhos importantes:

- Paleta de comandos: `Ctrl + Shift + P`
- Salvar arquivo: `Ctrl + S`

Para ver todos os atalhos, clique no ícone de configuração e clique em atalhos de teclado.  
Alternativamente, use `Ctrl + K Ctrl + S` para abrir.

Não faz diferença quais teclas estão mapeadas, mas é importante aprender alguns atalhos.  
Listarei alguns dos atalhos mais usados, entretanto não sei a configuração padrão pois já alterei diversas vezes:

- Duplicar Linha: `Ctrl + D`
- Mover linha de código para cima: `Ctrl + UpArrow`
- Mover linha de código para baixo: `Ctrl + DownArrow`
- Multi-cursores: `Alt + Click` ou `Alt + Shift + UpArrow` ou `Alt + Shift + DownArrow`

## Configurações

O Visual Studio Code (VSCode) é um editor de texto altamente configurável e customizável. Existem algumas configurações essenciais, entretanto.  
As configurações podem ser alteradas e definidas pela interface de usuário (UI) ou pelo arquivo `settings.json`. Devido a conveniência, colocarei alguns _snippets_ `JSON` das configurações que estão sendo modificadas.

Para acessar existem três maneiras:

- Pelo ícone (formato de engranagem) na barra lateral
- Abrir a paleta de comandos (`Ctrl + Shift + P`) e pesquisar por `open settings`. Ele te dara a opção UI ou `JSON`. A interface de usuário é mais fácil de mexer, mas vai ser necessário abrir o `settings.json` caso queira copiar e colar os _snippets_.
- Pelo atalho `Ctrl + ,`

## Temas

O VSCode permite baixar diversos temas, cada um com _syntax highlighting_ específicos.  
Na aba de extensões, é possível pesquisar e experimetnar diversos temas. Um tema muito popular é o [Material Theme](https://marketplace.visualstudio.com/items?itemName=Equinusocio.vsc-material-theme). Esse pack vem com mudanças de tema e de ícones também.

Existe um pack de ícones alternativos, ~~e melhores na minha opinião~~, que pode ser acessado [aqui](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme). O nome é bem parecido, o que pode gerar alguma confusão.

Para acessar a aba de extensões existem algumas maneiras:

- Pelo ícone (ícone de bloquinhos) na barra lateral
- Abrir a paleta de comandos (`Ctrl + Shift + P`) e pesquisar por `Extensions: Install Extensions`
- Pelo atalho `Ctrl + Shift + X`.

Para alterar as configurações de tema existem algumas maneiras:

- Pelo ícone (ícone de engrenagem) na barra lateral, opção `Color Theme`
- Abrir a paleta de comandos (`Ctrl + Shift + P`) e pesquisar por `Preferences: Color Theme`
- Pelo atalho `Ctrl K + Ctrl T`

```json
{
  "workbench.colorTheme": "Material Theme Palenight High Contrast",
  "workbench.iconTheme": "material-icon-theme"
}
```

## Fontes

A escolha de fontes costumam gerar muitas discussões, por ser uma questão de gosto pessoal. De toda maneira, acho interessante mostrar como ativar as _font ligatures_, recurso que permite a melhor visualização de alguns operadores da síntaxe.

Para isso, recomendo a fonte `Fira Code` por ser gratuita e bastante popular. É possível seguir as intruções no [repositório](https://github.com/tonsky/FiraCode). Após instalação, é preciso alterar nas configurações do editor.

```json
{
  "editor.fontFamily": "'Fira Code Retina', 'Droid Sans Mono'",
  "editor.fontLigatures": true
}
```

A fonte `Droid Sans Mono` vai ser escolhida casa haja algum problema com a `Fira Code`. Esse recurso é chamado de _fallback_.

Experimente usar alguns símbolos para verificar que está funcionando.

```javascript
const myArrowFunction = () => `I love ${Fira Code}!`
const age = 20
const isAllowed = age >= 18 && age <= 56
```

## Prettier

Formatação de código é essencial para escrevermos código estilisticamente coeso, facilitando a leitura e manutenção. É indispensável o uso de algum formatador para atingir esses objetivos. No caso do JavaScript, a opção recomendada é o _Prettier_. Para isso, é necessário [instalar a extensão](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode).  
É possível configurar o editor para formatar o código sempre que salvarmos o arquivo. Isso vai automatizar esse processo repetitivo que pode inclusive ser esquecido.  
O _Prettier_ permite uma [configuração customizada](https://prettier.io/docs/en/options.html) de acordo com o padrão desejado do desenvolvedor ou da equipe. É usual configurarmos o VSCode para apenas formatar o código ao salvar, se esse arquivo de configuração estiver presente.

```json
{
  "prettier.requireConfig": true,
  "editor.formatOnSave": true
}
```

Nesse caso, o editor só ira formatar se na raíz do diretório existir um arquivo de configuração do prettier. Esse arquivo é um arquivo `JSON` com o nome `.prettierrc`. Existem diversos [parâmetros](https://prettier.io/docs/en/configuration.html) passíveis de ajustes, e também outras maneiras de configurar essas preferências.

```json
{
  "trailingComma": "es5",
  "printWidth": 80,
  "tabWidth": 2,
  "useTabs": false,
  "semi": false,
  "singleQuote": true,
  "arrowParens": "avoid"
}
```

## :brazil: Glosário e Tradução

- **Distro** é a abreviação de _distribution_, ou seja, distribuição. É usada para se referir a que tipo de _Linux_ o usuário está usando. (Ex.: Debian, Ubuntu, Fedora, etc)
- **UpArrow** é seta para cima do teclado
- **DownArrow** é seta para baixo do teclado
- **Snippets** são pequenos trechos de código
- **Syntax Highlighting** é o realce de síntaxe. A mudança de cores e estilo de fonte dependendo do tipo de dados, palavra-chave ou alguma outra estrutura sintática da linguagem.
- **Font Ligatures** são as ligaduras de fonte. Recurso interessante para reduzir a carga cognitiva do desenvolvedor.
- **Fallback** é um recurso amplamente utilizado em CSS e nos editores de texto para definir fontes a serem usadas caso dê algum problema na fonte de preferência.
