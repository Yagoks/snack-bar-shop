// Seleciona todos os inputs de quantidade
const quantityInputs = document.querySelectorAll('.quantity');

// Função para atualizar o total de cada item e o valor total da compra
function updateTotals() {
    let totalCompra = 0;

    // Percorre cada input de quantidade
    quantityInputs.forEach(input => {
        const price = parseFloat(input.getAttribute('data-price')); // Preço do item
        let quantity = parseInt(input.value); // Quantidade selecionada

        // Se o valor for NaN (não foi inserido um número), define a quantidade como 0
        if (isNaN(quantity) || quantity < 0) {
            quantity = 0;
            input.value = 0; // Define o valor da input como 0
        }

        const itemTotal = price * quantity; // Total do item
        input.parentElement.nextElementSibling.textContent = `R$ ${itemTotal.toFixed(2)}`; // Atualiza o valor do item

        totalCompra += itemTotal; // Atualiza o valor total da compra
    });

    // Atualiza o valor total da compra
    document.getElementById('total-compra').innerHTML = `<strong>Valor total da compra: R$ ${totalCompra.toFixed(2)}</strong>`;
}

// Adiciona um evento 'input' em todos os campos de quantidade
quantityInputs.forEach(input => {
    input.addEventListener('input', updateTotals);
});
