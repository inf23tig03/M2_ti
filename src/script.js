document.addEventListener('DOMContentLoaded', function() {
    const produtos = {
        vestuario: [
            { title: 'T-Shirt', price: '19,99 €', description: 'Uma t-shirt casual e elegante para o seu dia-a-dia, combinando conforto com estilo.' },
            { title: 'Hoodie', price: '29,99 €', description: 'Um hoodie quente e confortável, perfeito para se sentir aconchegado em qualquer ocasião.' },
            { title: 'Beanie', price: '14,99 €', description: 'Um gorro de malha essencial para manter o calor nos dias mais frios, com um toque de estilo.' },
            { title: 'Chapéu', price: '24,99 €', description: 'Um chapéu elegante que não só protege do sol, mas também completa o seu look com sofisticação.' },
            { title: 'Bandana', price: '9,99 €', description: 'Uma bandana versátil, perfeita para complementar diversos estilos e ocasiões.' },
            { title: 'Pulseira', price: '7,99 €', description: 'Uma pulseira elegante que adiciona um toque de moda ao seu pulso, seja para uso diário ou ocasiões especiais.' }
        ],
        acessorios: [
            { title: 'Autocolantes', price: '3,99 €', description: 'Autocolantes decorativos para personalizar e adicionar um toque único aos seus pertences.' },
            { title: 'Pins', price: '4,99 €', description: 'Pins colecionáveis que expressam os seus interesses e personalidade em pequenos detalhes.' },
            { title: 'Patches', price: '5,99 €', description: 'Patches bordados que transformam qualquer peça de roupa numa declaração de estilo individual.' },
            { title: 'Porta-Chaves', price: '8,99 €', description: 'Um porta-chaves prático e elegante que mantém as suas chaves seguras e acessíveis.' }
        ],
        'equipamento-tec': [
            { title: 'Pen USB', price: '12,99 €', description: 'Uma pen USB portátil e fiável para armazenar e transportar os seus dados com facilidade.' },
            { title: 'Femtocell', price: '99,99 €', description: 'Um dispositivo Femtocell que melhora significativamente a cobertura celular em sua casa ou escritório.' },
            { title: 'Flipper Zero', price: '149,99 €', description: 'Um dispositivo versátil de hacking e IoT, ideal para entusiastas de tecnologia.' },
            { title: 'Kit Arduino', price: '49,99 €', description: 'Um kit Arduino completo para iniciar ou expandir o seu conhecimento em programação e eletrónica.' }
        ],
        bilhetes: [
            { title: 'Bilhete Standard', price: '29,99 €', description: 'Inclui acesso padrão ao evento, garantindo uma experiência completa e sem complicações.' },
            { title: 'Bilhete VIP', price: '99,99 €', description: 'Acesso VIP que proporciona vantagens exclusivas, desde áreas premium até um serviço personalizado.' },
            { title: 'Bilhete Premium', price: '59,99 €', description: 'Acesso premium que combina conveniência e benefícios adicionais para uma experiência inesquecível.' }
        ],
        arte: [
            { title: 'Posters', price: '19,99 €', description: 'Posters de alta qualidade que transformam qualquer espaço com arte e estilo.' },
            { title: 'Postais', price: '4,99 €', description: 'Postais colecionáveis com designs únicos, perfeitos para enviar mensagens especiais ou decorar.' },
            { title: 'Bandeiras', price: '29,99 €', description: 'Bandeiras que adicionam um toque de personalidade aos ambientes, ideais para eventos ou decoração.' }
        ]
    };

    const itemsNav = document.querySelectorAll('.product_nav ul li');
    const produtosDiv = document.querySelector('.products');

    itemsNav.forEach(item => {
        item.addEventListener('click', function() {
            const secao = item.getAttribute('data-section');
            mostrarProdutos(secao);
        });
    });

    function mostrarProdutos(secao = null) {
        let container = produtosDiv.querySelector('.product-container');
        if (!container) {
            container = document.createElement('div');
            container.classList.add('product-container');
            produtosDiv.appendChild(container);
        }

        container.innerHTML = ''; // Limpar produtos anteriores

        for (const [secaoKey, arrayProdutos] of Object.entries(produtos)) {
            if (secao && secao !== secaoKey) continue;

            arrayProdutos.forEach(produto => {
                const divProduto = document.createElement('div');
                divProduto.classList.add('product-box');

                divProduto.innerHTML = `
                    <h3>${produto.title}</h3>
                    <p class="price">${produto.price}</p>
                    <p>${produto.description}</p>
                `;

                container.appendChild(divProduto);
            });
        }
    }

    // Mostrar todos os produtos inicialmente
    mostrarProdutos();
}); 