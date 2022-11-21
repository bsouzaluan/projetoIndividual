var myQuestions = [
	{
		question: "1 - Em que ano foi lançado o primeiro oculos da linha X-metal ?",
		answers: {
			a: '1998',
			b: '1997',
			c: '1995',
			d: '1996',
		},
		correctAnswer: 'b'
	},
	{
		question: "2 - qual foi o teste que o dono da marca fez, para testar as resistências das lentes",
		answers: {
			a: 'Facadas na lente',
			b: 'Tiro na lente',
			c: 'Jogar as lentes no chão',
			d: 'Colocou as lentes em uma prensa'
		},
		correctAnswer: 'b'
	},
	{
		question: "3 - em que ano a marca foi criada ?",
		answers: {
			a: '1973',
			b: '1978',
			c: '1975',
			d: '1976'
		},
		correctAnswer: 'c'
	},
	{
		question: "4 - Qual o nome do criador da marca ?",
		answers: {
			a: 'Jim Jannard',
			b: 'Bill Oakley',
			c: 'Jimer Jannard',
			d: 'Harry Jamerson'
		},
		correctAnswer: 'a'
	},
	{
		question: "5 - Qual foi a origem do nome da marca oakley ?",
		answers: {
			a: 'Foi por causa do seu passaro',
			b: 'Foi por causa de seu gato',
			c: 'Foi por causa do seu cachorro',
			d: 'Foi por causa de seu filho'
		},
		correctAnswer: 'c'
	},
	{
		question: "6 - Qual foi o primeiro produto começado a ser fabricado pela oakley ?",
		answers: {
			a: 'Manoplas de motocross',
			b: 'Borrachas para as pernas dos oculos',
			c: 'Oculos de sol',
			d: 'Luvas para proteção'
		},
		correctAnswer: 'a'
	},
	{
		question: "7 - Os oculos da linha x-metal possui numero de identificação ?",
		answers: {
			a: 'Sim',
			b: 'Não',
			
		},
		correctAnswer: 'a'
	},
	{
		question: "8 - Em que ano foi fabricado a ultima juliet ?",
		answers: {
			a: '2007',
			b: '2006',
			c: '2008',
			d: '2009'
		},
		correctAnswer: 'd'
	},
	{
		question: "9 - Qual foi o ultimo oculos fabricado pela linha x-metal ?",
		answers: {
			a: 'Juliet',
			b: 'X-squared',
			c: 'Romeu 2',
			d: 'Mars'
		},
		correctAnswer: 'b'
	},
	{
		question: "10 - Em que ano foi descontinuada a linha x-metal ?",
		answers: {
			a: '2011',
			b: '2009',
			c: '2012',
			d: '2010'
		},
		correctAnswer: 'c'
	}
];

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

	function showQuestions(questions, quizContainer){
		// precisaremos de um lugar para armazenar a saída e as opções de resposta
		var output = [];
		var answers; // poderia ter dado outro nome, alem do mais, eu mesmo me confundi :/

		// para cada questão
		for(var i=0; i<questions.length; i++){
			
			// mas, primeiro resetamos a lista de questões
			answers = [];

			// e aqui faremos para cada resposta na questão.
			for(letter in questions[i].answers){

				// Aqui será escrito para html para usar o Radio.
				answers.push(
					'<label>'
						+ '<input type="radio" name="question'+i+'" value="'+letter+'">'
					//	+ letter + ') ' vou deixar a letra comentada, porque achei melhor assim
						+ questions[i].answers[letter]
					+ '</label>'
				);
			}

			// add this question and its answers to the output
			output.push(
				'<div class="question">' + questions[i].question + '</div>'
				+ '<div class="answers">' + answers.join('') + '</div>'
			);
		}

		// finally combine our output list into one string of html and put it on the page
		quizContainer.innerHTML = output.join('');
	}


	function showResults(questions, quizContainer, resultsContainer){
			
		
		var answerContainers = quizContainer.querySelectorAll('.answers');
		
		
		var userAnswer = '';
		var numCorrect = 0;
		
		
		for(var i=0; i<questions.length; i++){

			// agora ele vai virar a letra que esta marcada.
			userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
			
			
			
			if(userAnswer===questions[i].correctAnswer){
				
				numCorrect++;
				
				
				answerContainers[i].style.color = 'lightgreen';
			}
			
			else{
				
				answerContainers[i].style.color = 'red';
			}
		}

			
			resultsContainer.innerHTML = numCorrect + ' de ' + questions.length;
		}

	// show questions right away
	showQuestions(questions, quizContainer);

	// on submit, show results
	submitButton.onclick = function(){
		showResults(questions, quizContainer, resultsContainer);
	}
}
