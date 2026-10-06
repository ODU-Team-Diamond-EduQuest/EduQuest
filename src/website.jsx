import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Pressable, Text, StyleSheet } from 'react-native';

// Read the existing HTML once so it remains the content source and no-script fallback.
const root = document.getElementById('website-root');
const text = element => element.textContent.trim().replace(/\s+/g, ' ');
const navigation = root.querySelector('nav');
const links = [...navigation.querySelectorAll('a')].map(a => ({
  label: text(a), id: a.hash.slice(1),
}));

function Button({ children, onPress, ...props }) {
  return <Pressable accessibilityRole="button" onPress={onPress} {...props}
    style={({ hovered }) => [styles.button, hovered && styles.hovered]}>
    <Text style={styles.buttonText}>{children}</Text>
  </Pressable>;
}

function Navigation() {
  const [active, setActive] = useState(location.hash.slice(1) || 'home');
  useEffect(() => {
    const update = () => {
      const sections = links.map(({ id }) => document.getElementById(id));
      const reached = sections.filter(section => section && section.getBoundingClientRect().top <= innerHeight * 0.35);
      setActive(reached.at(-1)?.id || 'home');
    };
    const onHash = () => setActive(location.hash.slice(1) || 'home');
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('hashchange', onHash);
    return () => { window.removeEventListener('scroll', update); window.removeEventListener('hashchange', onHash); };
  }, []);
  return <div className="nav-container">
    {links.map(({ id, label }) => <a key={id} href={`#${id}`} aria-current={active === id ? 'location' : undefined} onClick={() => setActive(id)}>{label}</a>)}
  </div>;
}

function TeamMember({ member }) {
  const [expanded, setExpanded] = useState(false);
  const shortBio = `${member.bio.slice(0, 240).replace(/\s+\S*$/, '')}…`;
  return <>
    <img src={member.image} alt={member.alt} loading="lazy" />
    <h3>{member.name}</h3><p>{member.role}</p>
    <p className="team-bio" id={`${member.id}-bio`}>{expanded ? member.bio : shortBio}</p>
    <Button aria-expanded={expanded} aria-controls={`${member.id}-bio`} accessibilityLabel={`${expanded ? 'Show less' : 'Read full biography'}: ${member.name}`} onPress={() => setExpanded(!expanded)}>{expanded ? 'Show less' : 'Read full biography'}</Button>
  </>;
}

const styles = StyleSheet.create({
  button: { paddingVertical: 12, paddingHorizontal: 16, borderWidth: 1, borderColor: '#1f3b5b', borderRadius: 6, backgroundColor: '#fff', alignItems: 'center', minHeight: 44 },
  hovered: { backgroundColor: '#e3edf7' },
  buttonText: { color: '#1f3b5b', fontSize: 14, fontWeight: '700' },
});

// Enhance only the interactive areas; the team maintains the remaining HTML.
createRoot(navigation).render(<Navigation />);
root.querySelectorAll('.team-member').forEach((element, index) => {
  const member = {
    id: `member-${index}`,
    name: text(element.querySelector('h3')),
    role: text(element.querySelector('p')),
    bio: text(element.querySelector('p:last-child')),
    image: element.querySelector('img').getAttribute('src'),
    alt: element.querySelector('img').alt,
  };
  createRoot(element).render(<TeamMember member={member} />);
});
