import { listarAnimais } from './animal.js';

function podeAdotar(brinquedosPessoa, animal) {
  const pessoaBrinquedos = brinquedosPessoa.split(',').map(b => b.trim().toLowerCase());
  const animalBrinquedos = animal.brinquedos.map(b => b.toLowerCase());

 
  if (animal.nome === 'Loco') {
    return animalBrinquedos.every(brinquedoAnimal => pessoaBrinquedos.includes(brinquedoAnimal));
  }

 
  let indiceAnimal = 0;
  for (let i = 0; i < pessoaBrinquedos.length && indiceAnimal < animalBrinquedos.length; i++) {
    if (pessoaBrinquedos[i] === animalBrinquedos[indiceAnimal]) {
      indiceAnimal++;
    }
  }

  
  return indiceAnimal === animalBrinquedos.length;
}


function validarAnimais (ordemAnimais, listaAnimais) {
  const nomes = ordemAnimais.split(',').map(nome => nome.trim());
  const nomesUnicos = new Set(nomes);
  const nomesValidos = listaAnimais.map(animais => animais.nome);

  if (nomes.length !== nomesUnicos.size) {
    return {erro: 'Animal inválido'};
  }

  for (const nome of nomes) {
    if (!nomesValidos.includes(nome)) {
      return {erro: 'Animal inválido'};
    }
  }
  return null;
}

function getBrinquedosValidos (listaAnimais){
  const brinquedos = new Set();
  listaAnimais.forEach (animais => {
    animais.brinquedos.forEach(b => brinquedos.add(b.toLowerCase()));
  });
  return Array.from(brinquedos);
}

function validarBrinquedos (brinquedos, brinquedosValidos) {
  const itens = brinquedos.split(',').map(b => b.trim().toLowerCase());
  const itensUnicos = new Set(itens);

  if (itens.length !== itensUnicos.size) {
    return {erro: 'Brinquedo inválido!'};
  }
  for (const item of itens) {
    if (!brinquedosValidos.includes(item)) {
      return {erro: 'Brinquedo inválido!'};
    }
  }
  return null;
}


class AbrigoAnimais {
 
  encontraPessoas(brinquedosPessoa1, brinquedosPessoa2, ordemAnimais) {
    const listaAnimais = listarAnimais();
    const erroAnimal = validarAnimais(ordemAnimais, listaAnimais);
    if (erroAnimal) return erroAnimal;

    const brinquedosValidos = getBrinquedosValidos(listaAnimais);
    const erroBrinq1 = validarBrinquedos(brinquedosPessoa1, brinquedosValidos);
    if (erroBrinq1) return erroBrinq1;
    const erroBrinq2 = validarBrinquedos(brinquedosPessoa2, brinquedosValidos);
    if (erroBrinq2) return erroBrinq2;

    let adocoesPessoa1 = 0;
    let adocoesPessoa2 = 0;
    let algumAdotado = false;
    const resultado = [];
    const nomesAnimais = ordemAnimais.split(',').map(n => n.trim());

    const animaisProcessar = nomesAnimais.map(nome => listaAnimais.find(a => a.nome === nome));

    for (const animal of animaisProcessar) {
      const pessoa1Pode = podeAdotar(brinquedosPessoa1, animal);
      const pessoa2Pode = podeAdotar(brinquedosPessoa2, animal);

     
      if (pessoa1Pode && pessoa2Pode) {
        resultado.push(`${animal.nome} - abrigo`);
        continue;
      }
      
      if (animal.nome === 'Loco' && !algumAdotado) {
        resultado.push('Loco - abrigo');
        continue;
      }

      
      if (pessoa1Pode && adocoesPessoa1 < 3) {
        resultado.push(`${animal.nome} - pessoa 1`);
        adocoesPessoa1++;
        algumAdotado = true;
        continue;
      }

      
      if (pessoa2Pode && adocoesPessoa2 < 3) {
        resultado.push(`${animal.nome} - pessoa 2`);
        adocoesPessoa2++;
        algumAdotado = true;
        continue;
      }

    
      resultado.push(`${animal.nome} - abrigo`);
    }
    
  
    resultado.sort();
    
    return { lista: resultado };
  }
}

export { AbrigoAnimais as AbrigoAnimais };