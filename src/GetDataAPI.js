/* eslint-disable */
const API_BASE = 'http://localhost:3000';

/**
 * Pegar Todos os dados da API
 */

const dataFetch = async(url) => {
    const req = await fetch(`${API_BASE}${url}`);
    const json = await req.json();
    return json;
}

export default {
    getData: async() => {
        return [{
                id: "productos",
                nome: "Produtos",
                items: await dataFetch(`/produtos`)
            },
            {
                id: "categorias",
                nome: "Categorias",
                items: await dataFetch(`/categorias`)
            }
        ]
    }
}