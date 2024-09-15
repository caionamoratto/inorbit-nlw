import { defineConfig } from 'drizzle-kit'
import { env } from './src/env'

export default defineConfig({
  schema: './src/db/schema.ts',
  out: './.migrations',
  dialect: 'postgresql',
  dbCredentials: {
    url: env.DATABASE_URL, //NOMEDOBANCO :// USER : SENHA @ link:PORTA/NOME DO BANCO DE DADOS (DEFINIDOS JA NA DOCKER-COMPOSE.YML) URL DO BANCO(FICA NA VARIAVEL DE AMBIENTE)
    // NÃO É LEGAL TER ISSO FIXO NO CODIGO. PARA PEGAR ESSA VARIAVEL SE COLOCA NO SCRIPT "dev" a tag --env-file e o arquivo das variaveis nesse caso o .env criado.
  },
})
