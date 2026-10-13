import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { View, Text, Pressable, StyleSheet, useWindowDimensions } from 'react-native';
import { answerQuestion, attemptsInPeriod, createState, questions, rewardProgress, totals, validateSettings } from './model.js';
import './web.css';

const colors = { navy: '#1f3b5b', ink: '#213547', muted: '#526675', teal: '#176958', pale: '#edf6f2', line: '#dce4e7' };

function Button({ children, onPress, secondary = false, disabled = false, ...props }) {
  return <Pressable accessibilityRole="button" disabled={disabled} onPress={onPress} {...props}
    style={({ hovered, pressed }) => [styles.button, secondary && styles.secondary, hovered && { opacity: 0.88 }, pressed && { opacity: 0.7 }, disabled && { opacity: 0.5 }]}>
    <Text style={[styles.buttonText, secondary && { color: colors.navy }]}>{children}</Text>
  </Pressable>;
}

function Card({ children, style }) { return <View style={[styles.card, style]}>{children}</View>; }
function Heading({ children }) { return <Text accessibilityRole="header" style={styles.heading}>{children}</Text>; }
function Paragraph({ children }) { return <Text style={styles.paragraph}>{children}</Text>; }
function Metric({ number, label, detail }) {
  return <Card style={{ flex: 1, minWidth: 160 }}><Text style={styles.eyebrow}>{label}</Text><Text style={styles.metric}>{number}</Text><Text style={styles.small}>{detail}</Text></Card>;
}

function Settings({ state, setState }) {
  const [draft, setDraft] = useState(state.settings);
  const [message, setMessage] = useState('');
  function save(event) {
    event.preventDefault();
    const error = validateSettings(draft);
    if (error) return setMessage(error);
    if (Number(draft.cap) < totals(state).earned) return setMessage('The bonus limit cannot be lower than time already earned in this session.');
    setState(s => ({ ...s, settings: { limit: Number(draft.limit), goal: Number(draft.goal), reward: Number(draft.reward), cap: Number(draft.cap), subject: draft.subject } }));
    setMessage('Settings saved for this demo session.');
  }
  return <Card><Heading>Learning & time settings</Heading><Paragraph>Choose a starting allowance, a correct-answer goal, and minutes earned for reaching that goal.</Paragraph>
    <form onSubmit={save}>
      <div className="field-grid">
        {[['limit', 'Base time (minutes)', 5, 180], ['goal', 'Correct answers per reward', 1, 20], ['reward', 'Minutes per reward', 1, 30], ['cap', 'Maximum bonus minutes', 0, 120]].map(([key, label, min, max]) => <label key={key}>{label}<input type="number" required min={min} max={max} step="1" value={draft[key]} onChange={e => { setMessage(''); setDraft({ ...draft, [key]: e.target.value }); }} /></label>)}
        <label>Practice subject<select value={draft.subject} onChange={e => { setMessage(''); setDraft({ ...draft, subject: e.target.value }); }}><option>All</option><option>Math</option><option>Reading</option></select></label>
      </div>
      <p className="field-note">Changes affect future answers. Earned minutes stay unchanged.</p>
      <button className="submit-button" type="submit">Save settings</button>
      <p role="status" className="form-status">{message}</p>
    </form>
  </Card>;
}

function CustomQuestion({ setState }) {
  const [message, setMessage] = useState('');
  function add(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const prompt = data.get('prompt').trim();
    const options = [0, 1, 2, 3].map(i => data.get(`option${i}`).trim());
    const explanation = data.get('explanation').trim();
    if (!prompt || !explanation || options.some(o => !o) || new Set(options.map(o => o.toLowerCase())).size !== 4) return setMessage('Enter a question, an explanation, and four different answers.');
    setState(s => ({ ...s, custom: [...s.custom, { id: `custom-${crypto.randomUUID()}`, subject: data.get('subject'), prompt, options, answer: Number(data.get('answer')), explanation }] }));
    form.reset();
    setMessage('Question added. It is now available in child practice.');
  }
  return <Card><Heading>Create a question</Heading><Paragraph>Add a short question that matches what your child is learning.</Paragraph>
    <form onSubmit={add}>
      <label>Subject<select name="subject"><option>Math</option><option>Reading</option></select></label>
      <label>Question<textarea name="prompt" required maxLength="300" rows="2" /></label>
      <div className="field-grid">{[0, 1, 2, 3].map(i => <label key={i}>Answer {i + 1}<input name={`option${i}`} required maxLength="120" /></label>)}</div>
      <label>Correct answer<select name="answer">{[0, 1, 2, 3].map(i => <option key={i} value={i}>Answer {i + 1}</option>)}</select></label>
      <label>Explanation<textarea name="explanation" required maxLength="400" rows="2" /></label>
      <button className="submit-button" type="submit">Add question</button><p role="status" className="form-status">{message}</p>
    </form>
  </Card>;
}

function Practice({ state, setState }) {
  const [selection, setSelection] = useState(null);
  const [feedbackId, setFeedbackId] = useState(null);
  const pool = [...questions, ...state.custom].filter(q => state.settings.subject === 'All' || q.subject === state.settings.subject);
  const pending = pool.filter(q => !state.attempts.some(a => a.id === q.id));
  const question = pool.find(q => q.id === feedbackId) || pending[0];
  const attempt = question && state.attempts.find(a => a.id === question.id);
  const stats = totals(state);
  const completed = pool.length - pending.length;
  const progress = rewardProgress(state);
  return <View style={{ gap: 20 }}>
    <View style={styles.row}><Metric label="Time earned" number={`${stats.earned} min`} detail="From completed question goals" /><Metric label="Next reward" number={`${progress.correct} / ${progress.goal}`} detail={`Correct answers toward ${state.settings.reward} minutes`} /><Metric label="Your progress" number={`${completed} / ${pool.length}`} detail="Questions completed in this subject" /></View>
    <Card>
      {!question ? <><Text style={styles.eyebrow}>PRACTICE COMPLETE</Text><Heading>Great effort. Keep growing!</Heading><Paragraph>You have finished every available question for this subject. Review your progress, or ask a parent to add a new question.</Paragraph><Text style={styles.reward}>{stats.earned} bonus minutes earned this session</Text></> : <>
        <View style={styles.row}><Text style={styles.tag}>{question.subject}</Text><Text style={styles.small}>{pending.length} unanswered</Text></View>
        {question.passage && <View style={styles.passage}><Paragraph>{question.passage}</Paragraph></View>}
        <h2 className="question-heading">{question.prompt}</h2>
        <fieldset disabled={Boolean(attempt)}><legend>Choose one answer</legend>
          {question.options.map((option, i) => <label key={i} className={`answer-option ${selection === i ? 'selected' : ''}`}><input type="radio" name={question.id} value={i} checked={selection === i} onChange={() => setSelection(i)} /><span>{option}</span></label>)}
        </fieldset>
        {!attempt ? <Button disabled={selection === null} onPress={() => { setState(s => answerQuestion(s, question.id, selection)); setFeedbackId(question.id); }}>Check answer</Button> : <View style={{ gap: 16 }}>
          <View accessibilityRole="status" style={[styles.feedback, !attempt.correct && { backgroundColor: '#fff5df' }]}><Text style={styles.feedbackTitle}>{attempt.correct ? `Correct! ${attempt.reward ? `You earned ${attempt.reward} minutes.` : stats.earned >= state.settings.cap ? 'You have reached your bonus limit.' : 'You are closer to your next reward.'}` : 'Good try. Let’s learn from this one.'}</Text><Paragraph>{question.explanation}</Paragraph>{!attempt.correct && <Paragraph>Your reward progress stays the same. Try the next question.</Paragraph>}</View>
          <Button onPress={() => { setFeedbackId(null); setSelection(null); }}>{pending.length ? 'Next question' : 'Finish practice'}</Button>
        </View>}
      </>}
    </Card>
    <Paragraph>Each question can earn a reward once per demo session. Your parent sets the bonus limit.</Paragraph>
  </View>;
}

function Progress({ state, onBack }) {
  const [period, setPeriod] = useState('Today');
  const filteredAttempts = attemptsInPeriod(state, period);
  const stats = totals({ ...state, attempts: filteredAttempts });
  return <View style={{ gap: 20 }}>
    <Card><label>Time period<select value={period} onChange={e => setPeriod(e.target.value)}><option>Today</option><option>Last 7 days</option><option>All</option></select></label><Paragraph>Practice results cover this demo session. They do not measure academic improvement.</Paragraph></Card>
    <View style={styles.row}><Metric label="Questions answered" number={stats.answered} detail={`For ${period.toLowerCase()}`} /><Metric label="Correct answers" number={stats.correct} detail={stats.answered ? `${Math.round(stats.correct / stats.answered * 100)}% accuracy` : 'Start a practice question to see progress'} /><Metric label="Bonus time" number={`${stats.earned} min`} detail="Earned in the selected period" /></View>
    <Card><Heading>Subject progress</Heading>{['Math', 'Reading'].map(subject => {
      const attempts = filteredAttempts.filter(a => a.subject === subject);
      const correct = attempts.filter(a => a.correct).length;
      return <View key={subject} style={{ marginTop: 18, gap: 8 }}><Text style={styles.feedbackTitle}>{subject}</Text><Paragraph>{attempts.length ? `${correct} correct out of ${attempts.length} answered` : 'No questions answered yet'}</Paragraph><progress aria-label={`${subject} correct answers`} value={correct} max={Math.max(attempts.length, 1)} /></View>;
    })}</Card>
    <Card><Heading>Activity in the selected period</Heading>{!filteredAttempts.length ? <Paragraph>No practice results for this period yet.</Paragraph> : [...filteredAttempts].reverse().map((a, i) => <View key={a.id} style={styles.activity}><Text style={styles.small}>QUESTION {filteredAttempts.length - i} · {a.subject}</Text><Text style={styles.activityTitle}>{a.prompt}</Text><Text style={styles.small}>{a.correct ? 'Correct answer' : 'Needs more practice'} · {a.reward} minutes earned · {new Date(a.answeredAt).toLocaleString()}</Text></View>)}</Card>
    <Button secondary onPress={onBack}>Back to Dashboard</Button>
  </View>;
}

function App() {
  const [state, setState] = useState(createState);
  const [page, setPage] = useState('Dashboard');
  const [confirmReset, setConfirmReset] = useState(false);
  const [session, setSession] = useState(0);
  const { width } = useWindowDimensions();
  const wide = width >= 900;
  const stats = totals(state);
  const titles = { Dashboard: ['PARENT OVERVIEW', 'A little learning. More possibility.', 'Set a healthy balance between practice and play.'], Settings: ['PARENT CONTROLS', 'Make learning work for your family.', 'Set time rewards and create questions for your child.'], Practice: ['CHILD PRACTICE', 'Ready for your next quest?', 'Take your time. Read carefully. Every question is a chance to learn.'], Progress: ['LEARNING PROGRESS', 'Small steps worth celebrating.', 'See answers, rewards, and subjects that could use more practice.'] };
  return <View style={styles.app}>
    <a className="skip-link" href="#dashboard-main">Skip to main content</a>
    <View style={styles.topbar}><View style={styles.brand}><Text style={styles.logo}>E</Text><Text style={styles.brandName}>EduQuest</Text></View><Text style={styles.demoTag}>INTERACTIVE PROTOTYPE</Text></View>
    <View style={[styles.layout, { flexDirection: wide ? 'row' : 'column' }]}>
      <View style={[styles.sidebar, wide ? { width: 230 } : { width: '100%' }]}>
        <Text style={styles.eyebrow}>YOUR LEARNING SPACE</Text>
        <nav aria-label="Dashboard navigation" className={wide ? 'side-nav' : 'mobile-nav'}>{[['Dashboard', '01'], ['Settings', '02'], ['Practice', '03'], ['Progress', '04']].map(([name, n]) => <button key={name} aria-current={page === name ? 'page' : undefined} className={page === name ? 'nav-active' : ''} onClick={() => { setPage(name); setConfirmReset(false); }}><span>{n}</span>{name === 'Practice' ? 'Child practice' : name}</button>)}</nav>
        <View style={styles.sidebarNote}><Text style={styles.feedbackTitle}>Set. Learn. Earn. Track.</Text><Paragraph>A shared space for parents and young learners.</Paragraph></View>
        <a className="project-link" href="../../">Project website ↗</a>
      </View>
      <main id="dashboard-main" tabIndex="-1" className="dashboard-main">
        <Text style={styles.eyebrow}>{titles[page][0]}</Text><h1>{titles[page][1]}</h1><Paragraph>{titles[page][2]}</Paragraph>
        <View style={styles.notice}><Text style={styles.small}>Demo mode · Settings and progress last until this page is refreshed. Parent and child views are open for demonstration. Device blocking and sign-in are not connected.</Text></View>
        {page === 'Dashboard' && <View style={{ gap: 22 }}>
          <View style={styles.row}><Metric label="Base allowance" number={`${state.settings.limit} min`} detail="Parent’s starting screen-time setting" /><Metric label="Earned reward" number={`+${stats.earned} min`} detail={`${stats.correct} correct answers this session`} /><Metric label="Total allowance" number={`${state.settings.limit + stats.earned} min`} detail="Illustrative allowance, not device usage" /></View>
          <View style={[styles.row, { alignItems: 'stretch' }]}>
            <View style={styles.feature}><Text style={styles.featureEyebrow}>TODAY’S LEARNING</Text><Text accessibilityRole="header" style={styles.featureHeading}>Turn curiosity into a little extra play.</Text><Text style={styles.featureBody}>Practice reading and math. Earn {state.settings.reward} minutes for every {state.settings.goal} correct answers, up to {state.settings.cap} bonus minutes.</Text><Button secondary onPress={() => setPage('Practice')}>Start a learning quest →</Button></View>
            <Card style={{ flex: 1, minWidth: 240 }}><Heading>Your family’s settings</Heading><Paragraph>Practice subject: {state.settings.subject === 'All' ? 'Math & Reading' : state.settings.subject}</Paragraph><Paragraph>Reward: {state.settings.reward} minutes per {state.settings.goal} correct answers</Paragraph><Paragraph>Bonus limit: {state.settings.cap} minutes per session</Paragraph><Button secondary onPress={() => setPage('Settings')}>Manage settings</Button></Card>
          </View>
          <Card><Heading>How your learning quest works</Heading><View style={styles.row}>{[['01', 'Set', 'A parent chooses the allowance and rewards.'], ['02', 'Learn', 'The child answers a reading or math question.'], ['03', 'Earn', 'Complete the question goal to earn bonus minutes.'], ['04', 'Track', 'Review progress together.']].map(([n, title, body]) => <View key={n} style={{ flex: 1, minWidth: 180, gap: 8 }}><Text style={styles.stepNumber}>{n}</Text><Text style={styles.feedbackTitle}>{title}</Text><Paragraph>{body}</Paragraph></View>)}</View></Card>
        </View>}
        {page === 'Settings' && <View style={{ gap: 20 }}><Settings state={state} setState={setState} /><CustomQuestion setState={setState} /></View>}
        {page === 'Practice' && <Practice key={session} state={state} setState={setState} />}
        {page === 'Progress' && <Progress state={state} onBack={() => setPage('Dashboard')} />}
        <View style={styles.footer}><Text style={styles.small}>EduQuest · Team Diamond · CS 410</Text><Button secondary onPress={() => setConfirmReset(true)}>Reset demo</Button></View>
        {confirmReset && <Card><Heading>Start a fresh demo?</Heading><Paragraph>This clears all answers, earned minutes, custom questions, and settings from this session.</Paragraph><View style={styles.row}><Button onPress={() => { setState(createState()); setSession(s => s + 1); setConfirmReset(false); setPage('Dashboard'); }}>Reset everything</Button><Button secondary onPress={() => setConfirmReset(false)}>Keep my session</Button></View></Card>}
      </main>
    </View>
  </View>;
}

const styles = StyleSheet.create({
  app: { minHeight: '100vh', backgroundColor: '#f5f7f8' },
  topbar: { backgroundColor: '#fff', borderBottomWidth: 1, borderColor: colors.line, paddingHorizontal: 30, paddingVertical: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: 14, flexWrap: 'wrap' },
  brand: { flexDirection: 'row', alignItems: 'center', gap: 10 }, logo: { color: '#fff', backgroundColor: colors.teal, borderRadius: 10, paddingHorizontal: 13, paddingVertical: 6, fontSize: 23, fontWeight: '800' }, brandName: { fontSize: 24, fontWeight: '800', color: colors.navy },
  demoTag: { color: colors.teal, fontSize: 11, fontWeight: '700', letterSpacing: 1, backgroundColor: colors.pale, padding: 9, borderRadius: 5 },
  layout: { flex: 1 }, sidebar: { padding: 24, gap: 22, borderRightWidth: 1, borderColor: colors.line, backgroundColor: '#fff' }, sidebarNote: { paddingTop: 18, borderTopWidth: 1, borderColor: colors.line, gap: 8 },
  eyebrow: { fontSize: 11, fontWeight: '700', letterSpacing: 1.1, color: colors.muted }, row: { flexDirection: 'row', flexWrap: 'wrap', gap: 18, alignItems: 'center' },
  card: { backgroundColor: '#fff', borderWidth: 1, borderColor: colors.line, borderRadius: 16, padding: 24, gap: 14 }, heading: { color: colors.ink, fontSize: 21, fontWeight: '700' }, paragraph: { color: colors.muted, lineHeight: 24, fontSize: 15 }, small: { fontSize: 13, color: colors.muted, lineHeight: 20 }, metric: { fontSize: 32, fontWeight: '700', color: colors.navy },
  button: { backgroundColor: colors.teal, paddingVertical: 13, paddingHorizontal: 19, minHeight: 46, borderRadius: 8, alignItems: 'center', justifyContent: 'center' }, secondary: { backgroundColor: '#edf2f5', borderWidth: 1, borderColor: '#d4dfe5' }, buttonText: { color: '#fff', fontSize: 14, fontWeight: '700' },
  notice: { borderLeftWidth: 3, borderColor: '#94afa7', backgroundColor: '#edf3f0', padding: 14, marginTop: 22, marginBottom: 26 },
  feature: { flex: 1.5, minWidth: 240, backgroundColor: colors.navy, borderRadius: 16, padding: 28, gap: 18 }, featureEyebrow: { color: '#c0dfd7', fontSize: 11, letterSpacing: 1, fontWeight: '700' }, featureHeading: { color: '#fff', fontSize: 29, lineHeight: 37, fontWeight: '700' }, featureBody: { color: '#e3edf1', fontSize: 15, lineHeight: 25 }, stepNumber: { fontSize: 24, fontWeight: '700', color: colors.teal, marginTop: 10 },
  tag: { color: colors.teal, backgroundColor: colors.pale, padding: 8, borderRadius: 6, fontWeight: '700', fontSize: 13 }, passage: { backgroundColor: '#f3f6f8', borderRadius: 8, padding: 20 }, feedback: { backgroundColor: colors.pale, padding: 20, borderRadius: 8, gap: 8 }, feedbackTitle: { fontWeight: '700', color: colors.ink, fontSize: 15 }, reward: { color: colors.teal, fontWeight: '700', fontSize: 20 },
  activity: { borderTopWidth: 1, borderColor: colors.line, paddingTop: 16, gap: 7 }, activityTitle: { fontSize: 15, color: colors.ink, lineHeight: 23 }, footer: { paddingVertical: 25, gap: 15, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' },
});

createRoot(document.getElementById('root')).render(<App />);
