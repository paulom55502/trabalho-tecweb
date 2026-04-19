const CHAVE = 'lista_compras_itens';

function getItens() {
  try {
    const raw = localStorage.getItem(CHAVE);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function salvarItens(itens) {
  localStorage.setItem(CHAVE, JSON.stringify(itens));
}

function adicionarItem(item) {
  const itens = getItens();
  const novoId = itens.length > 0 ? Math.max(...itens.map(i => i.id)) + 1 : 1;
  const novoItem = { id: novoId, comprado: false, ...item };
  itens.push(novoItem);
  salvarItens(itens);
  return novoItem;
}

function removerItem(id) {
  const itens = getItens().filter(i => i.id !== id);
  salvarItens(itens);
}

function toggleComprado(id) {
  const itens = getItens();
  const item = itens.find(i => i.id === id);
  if (item) item.comprado = !item.comprado;
  salvarItens(itens);
  return item;
}

function getTotais() {
  const itens = getItens();
  return {
    total: itens.length,
    comprados: itens.filter(i => i.comprado).length,
    valor: itens.reduce((s, i) => s + (parseFloat(i.preco) || 0) * (parseInt(i.qtd) || 1), 0),
  };
}
