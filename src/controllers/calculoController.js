exports.calculo = (req, res) => {
    //const nota1 = req.body.nota1;
    const {nota1, nota2, nota3, nota4} = req.body

    let resultado = 'Não foi possivel calcular'

    const media = (nota1 + nota2 + nota3 + nota4) /4

    if (media >= 6){
        resultado = `aprovado com média ${media}`
    }else if(media > 4 && media <6){
        resultado = `Recuperação com média ${media}`
    }else{
        resultado = `Reprovado com média ${media}`
    }

    return res.json({resultado:resultado})
}