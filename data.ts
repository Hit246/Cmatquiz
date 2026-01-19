import { Question } from './types';
import { quantitativeQuestions } from './data_quantitative';
import { logicalQuestions } from './data_logical';
import { languageQuestions } from './data_language';
import { diQuestions } from './data_di';
import { innovationQuestions } from './data_innovation';

/**
 * CMAT QUESTION DATABASE
 * 
 * Aggregates static questions from modular files.
 * This replaces the previous runtime generator with direct static data.
 */

export const questions: Question[] = [
  ...quantitativeQuestions,
  ...logicalQuestions,
  ...languageQuestions,
  ...diQuestions,
  ...innovationQuestions
];
