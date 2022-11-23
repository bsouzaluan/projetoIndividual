var minhasQuestoes = [
	{
		pergunta: "1 - Em que ano foi lançado o primeiro oculos da linha X-metal ?",
		questao: {
			a: '1998',
			b: '1997',
			c: '1995',
			d: '1996',
		},
		respostaCorreta: 'b'
	},
	{
		pergunta: "2 - qual foi o teste que o dono da marca fez, para testar as resistências das lentes",
		questao:  {
			a: 'Facadas na lente',
			b: 'Tiro na lente',
			c: 'Jogar as lentes no chão',
			d: 'Colocou as lentes em uma prensa'
		},
		respostaCorreta: 'b'
	},
	{
		pergunta: "3 - em que ano a marca foi criada ?",
		questao:  {
			a: '1973',
			b: '1978',
			c: '1975',
			d: '1976'
		},
		respostaCorreta: 'c'
	},
	{
		pergunta: "4 - Qual o nome do criador da marca ?",
		questao:  {
			a: 'Jim Jannard',
			b: 'Bill Oakley',
			c: 'Jimer Jannard',
			d: 'Harry Jamerson'
		},
		respostaCorreta: 'a'
	},
	{
		pergunta: "5 - Qual foi a origem do nome da marca oakley ?",
		questao: {
			a: 'Foi por causa do seu passaro',
			b: 'Foi por causa de seu gato',
			c: 'Foi por causa do seu cachorro',
			d: 'Foi por causa de seu filho'
		},
		respostaCorreta: 'c'
	},
	{
		pergunta: "6 - Qual foi o primeiro produto começado a ser fabricado pela oakley ?",
		questao:  {
			a: 'Manoplas de motocross',
			b: 'Borrachas para as pernas dos oculos',
			c: 'Oculos de sol',
			d: 'Luvas para proteção'
		},
		respostaCorreta:'a'
	},
	{
		pergunta: "7 - Os oculos da linha x-metal possui numero de identificação ?",
		questao:  {
			a: 'Sim',
			b: 'Não',
			
		},
		respostaCorreta: 'a'
	},
	{
		pergunta: "8 - Em que ano foi fabricado a ultima juliet ?",
		questao:  {
			a: '2007',
			b: '2006',
			c: '2008',
			d: '2009'
		},
		respostaCorreta: 'd'
	},
	{
		pergunta: "9 - Qual foi o ultimo oculos fabricado pela linha x-metal ?",
		questao:  {
			a: 'Juliet',
			b: 'X-squared',
			c: 'Romeu 2',
			d: 'Mars'
		},
		respostaCorreta: 'b'
	},
	{
		pergunta: "10 - Em que ano foi descontinuada a linha x-metal ?",
		questao: {
			a: '2011',
			b: '2009',
			c: '2012',
			d: '2010'
		},
		respostaCorreta: 'c'
	}
];

var quizContainer = document.getElementById('quiz');
var resultadoContainer = document.getElementById('resultado');
var submitButton = document.getElementById('submit');

generateQuiz(minhasQuestoes, quizContainer, resultadoContainer, submitButton);

function generateQuiz(questoes, quizContainer, resultadoContainer, submitButton){

	function showQuestions(questoes, quizContainer){
		// precisaremos de um lugar para armazenar a saída e as opções de resposta
		var output = [];
		var questao; // poderia ter dado outro nome, alem do mais, eu mesmo me confundi :/

		// para cada questão
		for(var i=0; i<questoes.length; i++){
			
			// mas, primeiro resetamos a lista de questões
			questao = [];

			// e aqui faremos para cada resposta na questão.
			for(letter in questoes[i].questao){

				// Aqui será escrito para html para usar o Radio.
				questao.push(
					'<label>'
						+ '<input type="radio" name="pergunta'+i+'" value="'+letter+'">'
					//	+ letter + ') ' vou deixar a letra comentada, porque achei melhor assim
						+ questoes[i].questao[letter]
					+ '</label>'
				);
			}

			// add this question and its answers to the output
			output.push(
				'<div class="pergunta">' + questoes[i].pergunta + '</div>'
				+ '<div class="questao">' + questao.join('') + '</div>'
			);
		}

		// finally combine our output list into one string of html and put it on the page
		quizContainer.innerHTML = output.join('');
	}


	function showResults(questoes, quizContainer, resultadoContainer){
			
		
		var jsonContainers = quizContainer.querySelectorAll('.questao');
		
		
		var userJson = '';
		var numCorreto = 0;
		
		
		for(var i=0; i<questoes.length; i++){

			// agora ele vai virar a letra que esta marcada.
			userJson = (jsonContainers[i].querySelector('input[name=pergunta'+i+']:checked')||{}).value;
			
			
			
			if(userJson===questoes[i].respostaCorreta){
				
				numCorreto++;
				
				
				jsonContainers[i].style.color = 'lightgreen';
			}
			
			else{
				
				jsonContainers[i].style.color = 'red';
			}
		}

			
			resultadoContainer.innerHTML = numCorreto + ' de ' + questoes.length;
		}

	// show questions right away
	showQuestions(questoes, quizContainer);

	// on submit, show results
	submitButton.onclick = function(){
		showResults(questoes, quizContainer, resultadoContainer);
	}
}
