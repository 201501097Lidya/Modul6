function Game()
{
	function Question(question, answers, correct)
	{
		this.question = question;
		this.answers = answers;
		this.correct = correct; 
	}

	Question.prototype.displayQuestion = function()
	{
		console.log(this.question);

		for (var i = 0; i < this.answers.length; i++)
		{
			console.log(i + ' : ' + this.answers[i]);
		}
	}

	Question.prototype.checkAnswer = function(ans)
	{
		if (ans === this.correct)
		{
			Skor_Akhir += 1;
			console.log('Jawaban anda BENAR!!');
			console.log('');
		}
		else
		{
			console.log('Jawaban anda SALAH!! Coba lagi!');
			Salah_Jawab +=1;
			console.log('');
		}
	}

	var ql = new Question('Apakah anda tahu tentang JavaScript?',
	['Tahu', 'Tidak'],
	'0'); 
	var q2 = new Question('Apa singkatan dari CSS?',
	['Cascading Sensitive Sheet', 'Cascading Style Sheet', 'Case Sensitive Sheet', 'Case Style Sheet'],
	'1');
	var q3 = new Question('Apakah anda pernah mengcoding?',
	['Pernah', 'Belum Pernah', 'Belum Pernah Sama Sekali'],
	'1');
	var q4 = new Question('Tag yang digunakan untuk ganti baris?',
	['< a>', '< b>','< p>','< br>'],
	'3');
	var q5 = new Question('Tag yang digunakan untuk membuat paragraf adalah ?',
	['< p>', '< b>', '< pr>','< br>'],
	'0');
    var q6 = new Question('HTML merupakan singkatan dari? ?',
	['High Text Multi Language', 'Hyper Text Markup Language','Hyper Text Multi Languange','High Text Markup Language'],
	'1');
    var q7 = new Question('Kata yang tepat mendeskripsikan coding ?',
	['Menyenangkan', 'Tidak Menyenangkan'],
	'0');
    var q8 = new Question('Apa guna function dalam Javascript ?',
	['menyatukan beberapa perintah', 'menentukan jenis bahasa yang dipakai'],
	'0');
    var q9 = new Question('Untuk membuat judul tabel digunakan tag?',
	['< th>', '< table>'],
	'1');
    var q10 = new Question('Pasangan tag <STYLE> dan </STYLE> digunakan untuk?',
	['Mendefinisikan style sheet', 'Memberi komentar dalam HTML'],
	'0');
    
    
	var questions = [ql, q2, q3, q4, q5, q6, q7, q8, q9, q10];
	var Skor_Akhir = 0;
	var Salah_Jawab = 0;
	var Jumlah_Pertanyaan = 0;
		
	Berhenti:
	{
		for (;;)
		{
			var n = Math.floor(Math.random() * questions.length);

			questions[n].displayQuestion();

			var answer = prompt('Pilih jawaban yang benar!');

			if (answer == 'Exit')
			{
				console.log('');
				console.log('---Keluar Dari Permainan---');
				console.log('');
				console.log('Jumlah pertanyaan yang di jawab = ' + Jumlah_Pertanyaan);
				console.log('Jumlah jawaban yang salah = ' + Salah_Jawab);
				console.log('Skor akhir anda = ' + Skor_Akhir);
				break Berhenti;
			}

			Jumlah_Pertanyaan += 1 ;
			questions[n].checkAnswer(answer);
		}
	}
};