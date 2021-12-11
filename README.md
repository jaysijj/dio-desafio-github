# Repositório do Desafio da DIO
# Primeiros passos na criação de um reposítorio no GitHub


## 1º - Baixar e instalar o Git
Acesse o [link] (https://git-scm.com/) e baixa o programa para o seu sistema operacional.
Instale o programa e abra o Git Bash.

## 2º - Criando um repositório no GitHub
- Crie a sua conta no [GitHub] (https://github.com/);
- Clique no botão direito superior do seu perfil e em "your repositories";
- Clique em "new";
- Escreva o nome do seu repositório e uma descrição;
- Caso queira adicionar um arquivo markDown, você pode deixar seleciona a caixa "readme";
- Clique em "create repository";
- Pronto, repositório criado com SUCESSO!

## 3º - Modificando o seu repositório pelo seu PC
Crie uma pasta onde você irá adicionar o seu repositório e siga os passos abaixo:
*(Primeiro você terá que baixar o repositório criado acima)*
- Acesse o seu repositório no GitHub, clique em Code e copie o link HTTPS;                   
- Agora no seu computador, você irá clicar com botão direito na janela e abrir o Git Bash
Dentro do Git Bash você irá degitar os seguintes códigos:
- Git clone “link que você copiou será colado aqui” 
- Vai pedir uma confirmação e você irá digitar "yes"
- Pronto, seu repositório foi criado no seu PC.

Após fazer as modificações desejadas, você terá que entrar no diretório pelo Git Bash e digitar os seguintes códigos:
- Git add .                    
- Git commit -m "descrição da modificação que foi feita no repositório"
- Git push origin main
- Pronto, agora todas as modificações feitas no diretório foram repassadas para o GitHub.


## 3º -  Adicionar um arquivo no GitHub
Dentro do diretório que você quer, escreva o comando:
Git init    - Cria um repositório vazio “.git” dentro de uma pasta.
É preciso fazer uma configuração antes:
Git config –global users.email “jaimejaysi@gmail.com”
Git config –global user.name JaysiJJ
Coloque o arquivo que você quer adicionar no GitHub dentro da pasta.
Git add *
Git commit -m “primeiro commit”



## links:
[Sintáxe Básica MarkDown](https://markdownguide.org/basic-syntax)
