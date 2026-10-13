export const questions = [
  { id: 'math-1', subject: 'Math', prompt: 'A library has 24 books on each shelf. How many books are on 3 shelves?', options: ['27', '48', '72', '84'], answer: 2, explanation: 'Multiply 24 by 3: 20 × 3 = 60 and 4 × 3 = 12. Together, that makes 72 books.' },
  { id: 'read-1', subject: 'Reading', passage: 'Maya packed an umbrella before leaving. Dark clouds filled the sky, and the wind was picking up.', prompt: 'Why did Maya most likely pack an umbrella?', options: ['She expected rain.', 'She was going swimming.', 'She wanted shade indoors.', 'She was carrying books.'], answer: 0, explanation: 'The dark clouds and wind are clues that rain may be coming.' },
  { id: 'math-2', subject: 'Math', prompt: 'Sam shares 36 stickers equally among 4 friends. How many stickers does each friend get?', options: ['6', '8', '9', '12'], answer: 2, explanation: '36 ÷ 4 = 9. Four groups of 9 stickers make 36.' },
  { id: 'read-2', subject: 'Reading', passage: 'Every Saturday, Leo helps at the community garden. He waters the plants, pulls weeds, and shares vegetables with neighbors.', prompt: 'What is the main idea of this passage?', options: ['Leo dislikes vegetables.', 'Leo helps care for a community garden.', 'Leo visits a store every day.', 'The garden needs no water.'], answer: 1, explanation: 'All the details describe how Leo helps at the community garden.' },
  { id: 'math-3', subject: 'Math', prompt: 'Which fraction is equal to one half?', options: ['1/4', '2/4', '3/4', '4/4'], answer: 1, explanation: 'Two out of four equal parts cover the same amount as one out of two equal parts.' },
  { id: 'read-3', subject: 'Reading', passage: 'The trail was steep, but Ana kept climbing. When she reached the top, she smiled at the view.', prompt: 'Which word best describes Ana?', options: ['Careless', 'Confused', 'Determined', 'Uninterested'], answer: 2, explanation: 'Ana kept going even though the climb was difficult. That shows determination.' },
];

export function createState() {
  return { settings: { limit: 30, goal: 3, reward: 5, cap: 30, subject: 'All' }, attempts: [], custom: [] };
}

export function validateSettings(values) {
  for (const [key, min, max, label] of [['limit', 5, 180, 'Base time'], ['goal', 1, 20, 'Question goal'], ['reward', 1, 30, 'Reward'], ['cap', 0, 120, 'Bonus limit']]) {
    if (String(values[key]).trim() === '' || !Number.isInteger(Number(values[key])) || Number(values[key]) < min || Number(values[key]) > max) return `${label} must be a whole number between ${min} and ${max}.`;
  }
  if (!['All', 'Math', 'Reading'].includes(values.subject)) return 'Choose a valid subject.';
  return '';
}

export function totals(state) {
  const correct = state.attempts.filter(a => a.correct).length;
  return { correct, answered: state.attempts.length, earned: state.attempts.reduce((sum, a) => sum + a.reward, 0) };
}

export function rewardProgress(state) {
  const sinceReward = state.attempts.reduce((count, attempt) => attempt.goalReached ? 0 : count + Number(attempt.correct), 0);
  return { correct: sinceReward, goal: state.settings.goal };
}

export function attemptsInPeriod(state, period, now = new Date()) {
  if (period === 'All') return state.attempts;
  const start = new Date(now);
  start.setHours(0, 0, 0, 0);
  if (period === 'Last 7 days') start.setDate(start.getDate() - 6);
  return state.attempts.filter(attempt => new Date(attempt.answeredAt) >= start && new Date(attempt.answeredAt) <= now);
}

export function answerQuestion(state, questionId, choice, now = new Date()) {
  const question = [...questions, ...state.custom].find(q => q.id === questionId);
  if (!question || !Number.isInteger(choice) || choice < 0 || choice >= question.options.length || state.attempts.some(a => a.id === questionId)) return state;
  const correct = choice === question.answer;
  if (validateSettings(state.settings)) return state;
  const goalReached = correct && rewardProgress(state).correct + 1 >= state.settings.goal;
  const reward = goalReached ? Math.max(0, Math.min(state.settings.reward, state.settings.cap - totals(state).earned)) : 0;
  return { ...state, attempts: [...state.attempts, { id: questionId, subject: question.subject, prompt: question.prompt, correct, choice, reward, goalReached, answeredAt: now.toISOString() }] };
}
