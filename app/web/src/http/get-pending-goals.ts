type PendingGoalsResponse = {
  id: string
  title: string
  desiredWeeklyFrequency: number
  completionCount: number
}[]

export async function getPendingGoals(): Promise<PendingGoalsResponse> {
  //Isso diz que a função getSummary retorna uma Promise do tipo PendingGoalsResponse, esse tipo foi criado acima.
  const response = await fetch('http://localhost:3333/pending-goals')
  const data = await response.json()

  return data.pendingGoals
}
