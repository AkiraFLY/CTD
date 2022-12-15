// Lista de Estudantes.
let aluno1 = new Aluno("Janaina", 3, [8, 7, 7, 5]);
let aluno2 = new Aluno("Ricardo", 2, [10, 5, 8, 5]);
let aluno3 = new Aluno("Izaias", 1, [9, 7, 8, 10]);
let aluno4 = new Aluno("Janett", 0, [6, 6, 0, 6]);
let aluno5 = new Aluno("Neymar", 3, [8, 8, 8, 8]);

const listaDeEstudantes = [aluno1, aluno2, aluno3, aluno4, aluno5];



// Passo 1 
function Aluno (nome, qFalta, notas){
    this.nome = nome;
    this.qFalta = qFalta;
    this.notas = notas;


    // Passo 2
    this.calcularMedia = function() {
        const soma = this.notas.reduce((acumulador, nota) => {
            return acumulador + nota;
        }, 0);
        const media = soma / this.notas.length;
        return media
    };

    this.faltas = function (){
        this.qFalta += 1;
        return this.qFalta;
    }
}



    // Passo 3, Passo 4, Passo 5 

const curso = { 
    nomeDoCurso: "CTD",
    notaAprovados: 7,
    faltaMax: 4,
    listaDeEstudantes: listaDeEstudantes,
    adicionarAluno: function (nome, qFalta, notas){
        let aluno = new Aluno (nome, qFalta, notas);
        this.listaDeEstudantes.push(aluno);
    },
    consultarAluno: function(nome) {
        const aluno = this.listaDeEstudantes.find((aluno) => {
            return aluno.nome === nome;
        });
        return aluno;
    },
    media: function (nome) {
        let aluno = this.consultarAluno(nome);
        let media = aluno.calcularMedia( );
        let resultado = false;
        if(media >= this.notaAprovados && aluno.qFalta < this.faltaMax){
            console.log(`Parabens, ${aluno.nome} foi Aprovado!`);
            resultado = true;
        }else if(aluno.qFalta === this.faltaMax && media > this.notaAprovados * 1.1){
            resultado = true;
        }else{
            console.log(`Infelizmento o Sr.(a) ${aluno.nome} foi reprovado!.`);
        }
        return resultado;
    },
    
    aprovacao: function(){
        const aprovados = this.listaDeEstudantes.map((aluno) =>{
            return this.media(aluno.nome);
        });
        return aprovados;
    }



}

console.log(curso.aprovacao());