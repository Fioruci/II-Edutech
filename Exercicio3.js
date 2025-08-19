// Alexandre, Bruno Aoki, Bruno David, Fioruci
async function buscarDados() {
    const request = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const data = await request.json();
    
    return data;
}

async function main() {
    const resultado = await buscarDados();
    console.log(resultado.title);
}

main();
