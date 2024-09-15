export async function createGoalCompletion(goalId: string) {
  //Isso diz que a função getSummary retorna uma Promise do tipo PendingGoalsResponse, esse tipo foi criado acima.
  await fetch('http://localhost:3333/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      goalId,
    }),
  })
}
