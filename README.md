# Testes Unitários em JavaScript

Bem vindos à minha aula de testes unitários 😃
A ideia é fazermos juntos os testes unitários desse joguinho aqui. 

Por hora, siga as instruções que em breve estaremos colocando a mão na massa!!


## Instruções de utilização

Antes de mais nada, você precisa fazer o download do código. Abra ele em alguma interface que você curta. Eu utilizo o Visual Studio. 
**Observação: Utilize a branch `tbd` para baixar o código com Jest já configurado!**

### Organização do código

Para facilitar a leitura, deixei tudo de Jquery "escondido" dentro de `interface` e `config` então só utilizaremos o arquivo `main.js` e os arquivos dentro de `Logica do jogo`.

## Instalação

Para rodar o jogo em sua máquina, utilize o seguinte na linha de comando:

```bash
python -m SimpleHTTPServer
```
E acesse aqui -> http://localhost:8000/


### Instalar Jest

Para melhor tutorial, acesse o link de [documentação do Jest](https://jestjs.io/pt-BR/docs/getting-started)!

Rode o comando para instalar a lib:
```bash
npm install --save-dev jest
```

Crie um arquivo `package.json` e lá dentro coloque:
```bash
{
  "scripts": {
    "test": "jest"
  }
}
```

Agora você vai precisar resolver um problema de compatibilidade do Jest com Javascript puro [seguindo esse tutorial](https://stackoverflow.com/questions/59879689/jest-syntaxerror-cannot-use-import-statement-outside-a-module). Para isso, rode primeiro:
```bash
npm install --save-dev babel-jest
```
Modifique o arquivo `package.json`para e:
```bash
{
  "scripts": {
    "test": "jest"
  },
  "jest": {
    "transform": {
      "^.+\\.[t|j]sx?$": "babel-jest"
    }
  }
}
```
Rode o comando para instalar o babel:
```npm install @babel/preset-env --save-dev```

E por fim crie um novo arquivo chamado `babel.config.json`, e coloque isso dentro:
```
{
  "presets": ["@babel/preset-env"]
}
```
Tudo certo para escrever nossos testes \o/ 

### Autora 
<table>
  <tr>
    <td align="center"><a href="https://github.com/xReee"><img src="https://avatars0.githubusercontent.com/u/18575717?s=400&v=4" width="100px;" alt="Renata Faria"/><br/><sub><b>Renata Faria</b></sub></a></td>
   <td>
    Código desenvolvido para disciplina de Engenharia de Software de Sistemas de Informação</br>
    Centro de informática – Universidade Federal de Pernambuco 
   </td>
  </tr>
</table>



E obrigada [@ddevdan](https://github.com/ddevdan)  <a href="[https://github.com/xReee](https://github.com/ddevdan)"><img src="https://user-images.githubusercontent.com/18575717/185020078-9c9cff8a-2205-473e-98bc-bd2f87ff12e0.png" width="50px;" alt="Daniel"/>  pela ajuda!!



## License
[MIT](https://choosealicense.com/licenses/mit/)
