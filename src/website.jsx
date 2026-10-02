import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Pressable, Text, StyleSheet } from 'react-native';

// Read the existing HTML once so it remains the content source and no-script fallback.
const root = document.getElementById('website-root');
const text = element => element.textContent.trim().replace(/\s+/g, ' ');
const content = {
  title: text(root.querySelector('h1')),
  hero: [...root.querySelectorAll('header p')].map(text),
  navigation: [...root.querySelectorAll('nav a')].map(a => ({ label: text(a), id: a.hash.slice(1) })),
  sections: ['home', 'about'].map(id => ({ id, title: text(root.querySelector(`#${id} h2`)), paragraphs: [...root.querySelectorAll(`#${id} p`)].map(text) })),
  teamTitle: text(root.querySelector('#team h2')),
  teamIntro: text(root.querySelector('#team .section-intro')),
  members: [...root.querySelectorAll('.team-member')].map((member, index) => ({
    id: `member-${index}`, name: text(member.querySelector('h3')),
    role: text(member.querySelector('p')), bio: text(member.querySelector('p:last-child')),
    image: member.querySelector('img').getAttribute('src'), alt: member.querySelector('img').alt,
  })),
  resources: ['documents', 'presentation'].map(id => {
    const section = root.querySelector(`#${id}`);
    const frame = section.querySelector('iframe');
    return { id, title: text(section.querySelector('h2')),
      links: [...section.querySelectorAll('a')].map(a => ({ label: text(a), href: a.getAttribute('href'), download: a.hasAttribute('download') })),
      src: frame.getAttribute('src'), frameTitle: frame.title };
  }),
  footer: text(root.querySelector('footer p')),
};

function Button({ children, onPress, ...props }) {
  return <Pressable accessibilityRole="button" onPress={onPress} {...props}
    style={({ hovered }) => [styles.button, hovered && styles.hovered]}>
    <Text style={styles.buttonText}>{children}</Text>
  </Pressable>;
}

function Header() {
  return <header><div className="hero-content"><h1>{content.title}</h1>
    {content.hero.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
    <a href="#about" className="hero-button">Learn More</a>
  </div></header>;
}

function Navigation() {
  const [active, setActive] = useState(location.hash.slice(1) || 'home');
  useEffect(() => {
    const update = () => {
      const sections = content.navigation.map(({ id }) => document.getElementById(id));
      const reached = sections.filter(section => section.getBoundingClientRect().top <= innerHeight * 0.35);
      setActive(reached.at(-1)?.id || 'home');
    };
    const onHash = () => setActive(location.hash.slice(1) || 'home');
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('hashchange', onHash);
    return () => { window.removeEventListener('scroll', update); window.removeEventListener('hashchange', onHash); };
  }, []);
  return <nav aria-label="Main navigation"><div className="nav-container">
    {content.navigation.map(({ id, label }) => <a key={id} href={`#${id}`} aria-current={active === id ? 'location' : undefined} onClick={() => setActive(id)}>{label}</a>)}
  </div></nav>;
}

function TextSection({ section }) {
  return <section id={section.id}><h2>{section.title}</h2>{section.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</section>;
}

function TeamMember({ member }) {
  const [expanded, setExpanded] = useState(false);
  const shortBio = `${member.bio.slice(0, 240).replace(/\s+\S*$/, '')}…`;
  return <article className="team-member">
    <img src={member.image} alt={member.alt} loading="lazy" />
    <h3>{member.name}</h3><p>{member.role}</p>
    <p className="team-bio" id={`${member.id}-bio`}>{expanded ? member.bio : shortBio}</p>
    <Button aria-expanded={expanded} aria-controls={`${member.id}-bio`} accessibilityLabel={`${expanded ? 'Show less' : 'Read full biography'}: ${member.name}`} onPress={() => setExpanded(!expanded)}>{expanded ? 'Show less' : 'Read full biography'}</Button>
  </article>;
}

function Team() {
  return <section id="team"><h2>{content.teamTitle}</h2><p className="section-intro">{content.teamIntro}</p>
    <div className="team-container">{content.members.map(member => <TeamMember key={member.id} member={member} />)}</div>
  </section>;
}

function ResourceSection({ resource }) {
  return <section id={resource.id}>
    <h2>{resource.title}</h2>
    <iframe width="100%" height="800" title={resource.frameTitle} src={resource.src} allowFullScreen={resource.id === 'presentation'} />
    <p>{resource.links.map(link => <a key={link.href} href={link.href} target="_blank" rel="noopener">{link.label}</a>)}</p>
  </section>;
}

function App() {
  useEffect(() => {
    const id = location.hash.slice(1);
    if (id) document.getElementById(id)?.scrollIntoView();
  }, []);
  return <><a className="skip-link" href="#main-content">Skip to main content</a>
    <Header /><Navigation />
    <main id="main-content" tabIndex="-1">
      {content.sections.map(section => <TextSection key={section.id} section={section} />)}
      <Team />{content.resources.map(resource => <ResourceSection key={resource.id} resource={resource} />)}
    </main>
    <footer><p>{content.footer}</p></footer>
  </>;
}

const styles = StyleSheet.create({
  button: { paddingVertical: 12, paddingHorizontal: 16, borderWidth: 1, borderColor: '#1f3b5b', borderRadius: 6, backgroundColor: '#fff', alignItems: 'center', minHeight: 44 },
  hovered: { backgroundColor: '#e3edf7' },
  buttonText: { color: '#1f3b5b', fontSize: 14, fontWeight: '700' },
});

createRoot(root).render(<App />);
