import { pgTable, text, integer, timestamp } from 'drizzle-orm/pg-core'
import { createId } from '@paralleldrive/cuid2'

export const goals = pgTable('goals', {
  // a variavel deficida antes dos : é o que será utilizada no JavaScript, nesse caso utilizar camelCase como sempre.
  //Dentro da tipagem é o nome da coluna dentro do bando de dados, nesse caso utilizar snake_case ou kebab-case(?) com os underlines.
  id: text('id')
    .primaryKey()
    .$defaultFn(() => createId()),
  title: text('title').notNull(),
  desiredWeeklyFrequency: integer('desired_weekly_frequency').notNull(),
  createdAt: timestamp('created_at', { withTimezone: true })
    .notNull()
    .defaultNow(),
})

export const goalCompletions = pgTable('goal_completions', {
  id: text('id')
    .primaryKey()
    .$defaultFn(() => createId()), //utiliza a criação de id unico do formato CUID2 importado. (existem outros tipos para gerar esses formatos tipo uuid etc).
  goalId: text('goal_id')
    .references(() => goals.id) //Aqui já cria uma chave estrangeira da tabela GOALS pegando o campo ID
    .notNull(),
  createdAt: timestamp('created_at', { withTimezone: true })
    .notNull()
    .defaultNow(),
})
