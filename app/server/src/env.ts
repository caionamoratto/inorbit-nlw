// ZOD biblioteca para validação de dados
import z from 'zod'

const envSchema = z.object({
  DATABASE_URL: z.string().url(), //Aqui informa que essa variavel não é opcional e caso ela não exista há um Throw indicando erro.
})

export const env = envSchema.parse(process.env) // Aqui verifica se no envSchema tem uma variavel chamada DATABASE_URL que segue o formato acima informado.
