const fastify = require('fastify')()

// Criar uma postagem
fastify.post('/postagem', async (request: any, reply: any) => {})

// Pegar todas as postagem
fastify.get('/postagem', async (request: any, reply: any) => {})

// Pegar uma postagem
fastify.get('/postagem/:id', async (request: any, reply: any) => {})

// Atualizar uma postagem
fastify.put('/postagem/:id', async (request: any, reply: any) => {})

// Deletar uma postagem
fastify.delete('/postagem/:id', async (request: any, reply: any) => {})

// Iniciando o servidor
fastify.listen({ port: 3333 }).then(() => {
  console.log('Servidor rodando na porta: http://localhost:3333')
})
