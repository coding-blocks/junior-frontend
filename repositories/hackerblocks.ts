import { BaseRepository } from './base';

export interface TroublemakerQuiz {
  id: number;
  title: string;
  description: string;
  'max=marks': number;
  questions: Array<{
    id: number
  }>
}

export interface TroublemakerQuestion {
  id: number;
  title: string;
  description: string;
  choices: Array<{
    id: number;
    title: string;
    description: string;
  }>
}

class HackerblocksRepository extends BaseRepository<object> {
  async fetchTroublemakerQuiz(quizId: number, courseId: number): Promise<TroublemakerQuiz> {
    const quiz = await this.axios!.$get(this.buildUrl(`quiz/${quizId}`), {
      params: {
        courseId
      }
    });
    return quiz.data;
  }

  async fetchTroublemakerQuestion(questionId: number): Promise<TroublemakerQuestion> {
    const question = await this.axios!.$get(this.buildUrl(`question/${questionId}`));
    return question.data
  }
}

export default new HackerblocksRepository();
