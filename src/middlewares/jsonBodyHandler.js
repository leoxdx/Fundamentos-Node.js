export async function jsonBodyHandler(req, res) {
    // Adicionar cada chunk
    const buffers = [];
    // Coleta os chunks de dados da requisição
    for await (const chunk of req) {
        buffers.push(chunk);
    }
    try {
    // Concat os chunks e converte para string
    req.body = JSON.parse(Buffer.concat(buffers).toString());
    } catch (error) {
    req.body = null; // Se ocorrer um erro de parsing, define body como null
    }

    res.setHeader('Content-Type', 'application/json');
}