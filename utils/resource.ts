import DocumentForm from '@/forms/document';
import QuizForm from '@/forms/quiz';
import VideoForm from '@/forms/video';
import CodeChallengeForm from '@/forms/codeChallenge';
import ProjectChallengeForm from '@/forms/projectChallenge';

import DocumentRepository from '@/repositories/admin/documents';
import QuizRepository from '@/repositories/admin/quizzes';
import VideoRepository from '@/repositories/admin/videos';
import CodeChallengeRepository from '@/repositories/admin/code-challenges';
import ProjectChallengeRepository from '@/repositories/admin/project-challenges';

const resourceTypeFormMap = {
  document: DocumentForm({ modelPrefix: 'document.' }),
  quiz: QuizForm({ modelPrefix: 'quiz.' }),
  video: VideoForm({ modelPrefix: 'video.' }),
  'code-challenge': CodeChallengeForm({ modelPrefix: 'codeChallenge.' }),
  'project-challenge': ProjectChallengeForm({ modelPrefix: 'projectChallenge.' })
}

export const getResourceTypeForm = (resource) => {
  return resourceTypeFormMap[resource.type]
}

const resourceTypeRepositoryMap = {
  document: DocumentRepository,
  quiz: QuizRepository,
  video: VideoRepository,
  'code-challenge': CodeChallengeRepository,
  'project-challenge': ProjectChallengeRepository
}

export const getResourceTypeRepository = (resource) => {
  return resourceTypeRepositoryMap[resource.type]
}

export const getResourceTypePayload = (resource) => {
  switch (resource.type) {
    case 'document':
      return resource.document
    case 'quiz':
      return resource.quiz
    case 'video':
      return resource.video
    case 'project-challenge':
      return resource.projectChallenge
  }
}

const resourceTypeIconMap = {
  document: 'https://cb-thumbnails.s3.ap-south-1.amazonaws.com/folder-yellow.svg',
  video: 'https://cb-thumbnails.s3.ap-south-1.amazonaws.com/play-red.svg',
  quiz: 'https://cb-thumbnails.s3.ap-south-1.amazonaws.com/stats-blue.svg',
  'code-challenge': 'https://cb-thumbnails.s3.ap-south-1.amazonaws.com/calender-green.svg',
  'project-challenge': 'https://cb-thumbnails.s3.ap-south-1.amazonaws.com/calender-green.svg',
}

export const getResourceTypeIcon = (resource) => {
  return resourceTypeIconMap[resource.type];
}

const resourceTypeNameMap = {
  document: 'PDF Note',
  video: 'Video',
  quiz: 'Quiz',
  'code-challenge':'Code Challenge',
  'project-challenge': 'Project Challenge',
}

export const getResourceTypeName = (resource) => {
  return resourceTypeNameMap[resource.type];
}

const resourceTypeClassMap = {
  document: 'notes-card',
  video: 'video-card',
  quiz: 'quiz-card',
  'code-challenge': 'code-card',
  'project-challenge': 'code-card',
}

export const getResourceTypeClass = (resource) => {
  return resourceTypeClassMap[resource.type];
}
