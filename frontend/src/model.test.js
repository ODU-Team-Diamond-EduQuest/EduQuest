import test from 'node:test';
import assert from 'node:assert/strict';
import { createState as initialState, answerQuestion, attemptsInPeriod, rewardProgress, totals, validateSettings } from './model.js';

function createState() {
  const state = initialState();
  state.settings.goal = 1;
  return state;
}

test('incorrect answers record progress but do not earn time', () => {
  const next = answerQuestion(createState(), 'math-1', 0);
  assert.deepEqual(totals(next), { correct: 0, answered: 1, earned: 0 });
});

test('a completed question cannot be submitted twice or changed', () => {
  const next = answerQuestion(createState(), 'math-1', 2);
  assert.equal(answerQuestion(next, 'math-1', 2), next);
  assert.equal(answerQuestion(next, 'math-1', 0), next);
  assert.equal(totals(next).earned, 5);
});

test('bonus cap limits rewards without discarding correct answers', () => {
  let state = createState();
  state.settings.cap = 7;
  state = answerQuestion(state, 'math-1', 2);
  state = answerQuestion(state, 'math-2', 2);
  state = answerQuestion(state, 'read-1', 0);
  assert.deepEqual(state.attempts.map(a => a.reward), [5, 2, 0]);
  assert.deepEqual(totals(state), { correct: 3, answered: 3, earned: 7 });
});

test('a settings change affects future rewards only', () => {
  let state = answerQuestion(createState(), 'math-1', 2);
  state = { ...state, settings: { ...state.settings, reward: 2 } };
  state = answerQuestion(state, 'math-2', 2);
  assert.equal(totals(state).earned, 7);
});

test('rejects invalid choices and unknown questions', () => {
  const state = createState();
  for (const choice of [-1, 4, 1.5, '2']) assert.equal(answerQuestion(state, 'math-1', choice), state);
  assert.equal(answerQuestion(state, 'missing', 0), state);
});

test('settings require whole numbers within documented ranges', () => {
  const { settings } = createState();
  assert.equal(validateSettings(settings), '');
  for (const reward of ['', 'abc', -1, 1.5, 31]) assert.notEqual(validateSettings({ ...settings, reward }), '');
  assert.equal(validateSettings({ ...settings, cap: 0 }), '');
});

test('only a new correct answer that completes the goal earns a reward', () => {
  let state = initialState();
  state = answerQuestion(state, 'math-1', 2);
  state = answerQuestion(state, 'read-1', 3);
  state = answerQuestion(state, 'math-2', 2);
  assert.deepEqual(rewardProgress(state), { correct: 2, goal: 3 });
  assert.equal(totals(state).earned, 0);
  state = answerQuestion(state, 'read-2', 1);
  assert.equal(totals(state).earned, 5);
  assert.deepEqual(rewardProgress(state), { correct: 0, goal: 3 });
  assert.equal(answerQuestion(state, 'read-2', 1), state);
});

test('changing the reward goal preserves earned rewards', () => {
  let state = answerQuestion(createState(), 'math-1', 2);
  state = { ...state, settings: { ...state.settings, goal: 2 } };
  state = answerQuestion(state, 'math-2', 2);
  assert.equal(totals(state).earned, 5);
  state = answerQuestion(state, 'read-1', 0);
  assert.equal(totals(state).earned, 10);
});

test('zero, fractional, and missing question goals cannot award rewards', () => {
  for (const goal of [0, -1, 1.5, undefined]) {
    const state = { ...initialState(), settings: { ...initialState().settings, goal } };
    assert.notEqual(validateSettings(state.settings), '');
    assert.equal(answerQuestion(state, 'math-1', 2), state);
  }
});

test('time periods use attempt timestamps and historical award amounts', () => {
  const now = new Date(2026, 9, 13, 12);
  let state = createState();
  state = answerQuestion(state, 'math-1', 2, new Date(2026, 9, 13, 9));
  state = answerQuestion(state, 'math-2', 2, new Date(2026, 9, 12, 9));
  state = answerQuestion(state, 'read-1', 0, new Date(2026, 9, 1, 9));
  assert.equal(attemptsInPeriod(state, 'Today', now).length, 1);
  assert.equal(attemptsInPeriod(state, 'Last 7 days', now).length, 2);
  assert.equal(attemptsInPeriod(state, 'All', now).length, 3);
  assert.equal(totals({ ...state, attempts: attemptsInPeriod(state, 'Last 7 days', now) }).earned, 10);
});
