const tabela_binaria = [128,64,32,16,8,4,2,1] // tabela para tranformar numero decimais em binarios

const converte_binario_decimal = (binario) => {
    if (isNaN(decimal)) throw new Error("O valor precisa ser um numero");
    let numero_decimal = 0;
    if(binario.length != 8){ // verifica se o numero tem 8 dígitos
        binario = binario.toString() // tranforma o numero binario em string para ser iteravel
        binario = [...binario] // tranforma a string binaria em array
        const numeros_faltando = 8 - binario.length; // calcula quantos zeros serão adicionados a esquerda do numero
        for(let i = 0; i < numeros_faltando; i++){
            binario.unshift("0") // adiciona os zeros
        }
        binario = binario.join("")// junta todos os numeros em so uma string 
    }
    for(let i = 0; i < 8; i++){
        if(binario[i] == "1"){
            numero_decimal += tabela_binaria[i]
        }
    }
    return numero_decimal
}
const converte_decimal_binario = (decimal) => {
    if (isNaN(decimal)) throw new Error("O valor precisa ser um numero");
    let numero_binario = []
    for(let i = 0; i < 8; i++){
        /**  para cada numero da tabela binaria (começando do 128) que o numero decimal for subtraido 
             e o resultado não for zero sera adicionado o numero 1 no array caso o resultado seja 0 sera adicionado o numero 
             0 no array
        */ 
        if(decimal-tabela_binaria[i] >= 0){
            numero_binario.push(1) // adiciona o numero 1 ao array (que representa o numero binario)
            decimal -= tabela_binaria[i]  // atualiza o valor decimal para continuar a iteraçaõ
        }else {
            numero_binario.push(0) // adiciona o numero 1 ao array (que representa o numero binario)
        }
    }
    numero_binario = numero_binario.join("") // junta todos os numeros em so uma string
    numero_binario = parseInt(numero_binario) // tranforma o binario(estao em string) para inteiro novamente
    return numero_binario 
}   

const button_convert = document.querySelector(".convert-button");
const input_decimal = document.querySelector("#input-decimal")
const input_binario = document.querySelector("#input-binario")
const inputs = [input_decimal, input_binario]
button_convert.addEventListener("click", () => {
    if(inputs[0] == input_decimal){
        if(input_decimal.value > 255){
            alert("o numero decimal máximo permitido é 255")
        }else{
            try{
                input_binario.value = converte_decimal_binario(input_decimal.value)
            }
            catch(e){
                alert(e)
            }
        }
    }else{
        console.log(input_binario.value.length)
        // if(input_binario.value.length){
        // }
    }
}) 