// Templates HTML das seções
const templates = {
    home: `
        <section>
            <h2>Quem Somos</h2>
            <p>Somos uma organização dedicada a transformar vidas através de projetos sociais.</p>
        </section>
    `,

    missao: `
        <section>
            <h2>Nossa Missão</h2>
            <p>Levar apoio e cuidado às comunidades mais necessitadas.</p>
        </section>
    `,

    contato: `
        <section>
            <h2>Contato</h2>
            <p>Email: contato@ongesperancaviva.org</p>
            <p>Telefone: (11) 99999-9999</p>
        </section>
    `
};

// Função que carrega o conteúdo
function carregarSecao(secao) {
    const container = document.getElementById("conteudo-spa");
    container.innerHTML = templates[secao];
}
