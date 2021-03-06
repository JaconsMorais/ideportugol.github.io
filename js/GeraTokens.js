	/*Codigo inicial: Jacons Morais e Rafael Ferreira.
	Palavras reservadas a serem trabalhadas.
	se fimse;
	para, de, ate, faca, fimpara;
	enquanto, fimenquanto;
	funcao, variavel, leia, escreva, algoritimo

Tipos de variáveis:
	real, caracter, inteiro, logico.
Operadores:
	e, ou, nao, +, -, /, *, >, <, <>, >=, <=
*/

var iniciaCompilador = function iniciaCompilador(codbox){
	var Simbolos = [
	//Declaração dos Simbolos suportados.
	//Declaração	
	":",";","\"",
	//Atribuição	
	":=",
	//Operadores aritiméticos.	
	"*","+","-","/","%",
	//Comentários	
	"\\",
	//Lógicos
	">","<",">=","<=", "<>","&&","||","=","",
	//Funções e vetores.
	"(",")", "[", "]"]
	//Outros
	" ";
	var S_SIMBOLOS = ["S_COMENTARIO","S_P_RESERVADA","S_INTEIRO","S_REAL","S_CARACTER","S_LOGICO","S_SIMBOLO","S_ESPACO","S_ID"]
	var PalavrasReservadas = [
	// Fluxo do programa
	"programa", "inicio", "fim","var",
	// Declaração de variáveis
	"real", "inteiro", "caracter", "logico", "arranjo",
	// Valores lógicos
	"verdadeiro", "falso",
	// Operadores lógicos
   ".ou.", ".e.", ".xou.", ".nao.",
	// Entrada e saída
	"le", "escreve",
	// Controle de fluxo
   "enquanto", "faca", "fimenquanto",
	"se", "entao", "senao", "fim-se",
	"para", "de", "ate", "passo", "fimpara",
	"funcao", "retorne", "fimfuncao"]
	var codigo_LINHA = codbox.split("\n");			//Codigo_LINHA ira armazenar um vetor de comandos.
	var pos_LINHA = 0					//Variável pos_LINHA irá armazenar a posição do vetor de comandos, segmentado por linhas.
	var pos_caracter = 0				//Váriavel pos_caracter irá armazenar a posição atual em uma linha de codigo.	
	var TokenFinal = "";				//Variável TokenFinal ira armazenar a string dos tokens para posterior análise.
	var TokenAtual = "";	
	var Token_LINHA = "";			//Variável Token_LINHA receberá a linha dividida pelos espaços.
	var cont_temp = 0;				//Variável contador temporário para trabalhar com o Token_LINHA
	alert("Iniciando Compilador.");
	alert(codbox.substring(0,5));	
	do{
		Token_LINHA = codigo_LINHA[pos_LINHA];		
		do{
			if (Simbolos.indexOf(Token_LINHA[cont_temp].charAt(pos_caracter)) != -1){		//Verifica se o caracter atual lido é um simbolo.
				if (TokenAtual != ""){							//Caso o caracter atual seja um simbolo, é preciso verificar se existe alguma palavra em construção.
					if (Simbolos.indexOf(TokenAtual) == -1){
						if (PalavrasReservadas.indexOf(TokenAtual) == -1){
							alert("Erro na linha " + pos_LINHA+ ": A palavra " + TokenAtual + " não é uma palavra reconhecida do sistema");}	//Caso a palavra em construção não seja encontrada como uma palavra reservada, retorna um erro ao usuário.
						else{
							TokenFinal = TokenFinal+"\n"+TokenAtual+":"+S_SIMBOLOS[1]+":"+pos_LINHA;
							TokenAtual="";
							pos_caracter++;
							continue;}}
					else{
						TokenFinal = TokenFinal+"\n"+TokenAtual+":"+S_SIMBOLOS[6]+":"+pos_LINHA;
						TokenAtual = "";
						pos_caracter++;
						continue;		}}
				TokenFinal = TokenFinal+Token_LINHA[cont_temp].charAt(pos_caracter)+":"+S_SIMBOLOS[6]+":"+pos_LINHA;
				pos_caracter++;				
				continue;}
			TokenAtual = TokenAtual+Token_LINHA[cont_temp].charAt(pos_caracter);				
			if(PalavrasReservadas.indexOf(TokenAtual) != -1){
				TokenFinal = TokenFinal+"\n"+TokenAtual+":"+S_SIMBOLOS[1]+":"+pos_LINHA;
				pos_caracter++;
				continue;}
							
		}while(pos_caracter < Token_LINHA.length)		
		pos_LINHA++;
	}while(pos_LINHA < codigo_LINHA.length);
	return TokenFinal;
}
