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

export interface ContentAttempt {
  id: number;
  'quiz-question-submissions': Array<{
    id: number;
    'question-id': number;
    'answer-ids': number[]
  }>
}

export interface QuizQuestionSubmission {
  id?: number;
  'question-id': number;
  'answer-ids': number[];
  'content-attempt': {
    id: number
  }
}

export interface SubmitContentParams {
  contestId: number;
  contentId: number;
  source?: object;
  language?: string;
}

export interface Submission {
  id: number;
  solution: object;
  language: string;
  score: number;
  'judge-result': object;
  explanation: string;
  'is-top-submission': boolean;
  'plagiarism-detected': boolean;
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

  async fetchContentAttempt(contestId: number, contentId: number): Promise<ContentAttempt> {
    const contentAttempt = await this.axios!.$get(this.buildUrl(`content-attempt/${contestId}/${contentId}`));
    return contentAttempt.data
  }

  async updateQuizQuestionSubmission(quizQuestionSubmission: QuizQuestionSubmission, contentAttemptId: number): Promise<QuizQuestionSubmission> {
    const response = await this.axios!.$post(this.buildUrl('quiz-question-submissions'), {
      ...quizQuestionSubmission,
      'content-attempt': {
        id: contentAttemptId
      }
    })
    return response.data;
  }

  async submitContent(params: SubmitContentParams): Promise<{ submissionId }> {
    const response = await this.axios!.$post(this.buildUrl('content-submit'), params);
    return response.data;
  }

  async fetchSubmission(submissionId: number): Promise<Submission> {
    const response = await this.axios!.$get(this.buildUrl(`submissions/${submissionId}`));
    return response.data;
  }

  async fetchSubmissions(contestId: number, contentId: number): Promise<Submission[]> {
    const response = await this.axios!.$get(this.buildUrl('submissions'), {
      params: {
        contestId,
        contentId
      }
    });
    return response.data;
  }
}

export default new HackerblocksRepository();
