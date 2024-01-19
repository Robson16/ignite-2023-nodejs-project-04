import { Question } from '../../enterprise/entities/question'
import { QuestionRepository } from '../repositories/question-repository'
import { CreateQuestionUseCase } from './create-question'

const fakeQuestionsRepository: QuestionRepository = {
  create: async (question: Question) => {},
}

test('Create an answer', async () => {
  const createQuestion = new CreateQuestionUseCase(fakeQuestionsRepository)

  const { question } = await createQuestion.execute({
    authorId: '1',
    title: 'Nova Pergunta',
    content: 'Conteudo da pergunta',
  })

  expect(question.content).toEqual('Conteudo da pergunta')
})
