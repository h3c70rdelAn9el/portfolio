'use client';

import { useState, useEffect, useCallback, useLayoutEffect } from 'react';
import { useGlitchText } from '../../components/useGlitchText';
import { Hero } from '../../components/Hero';
import { content } from '../../types/content';
import { useSiteMode } from '../../components/site/SiteModeContext';
import { useDevView } from '../../components/site/DevViewContext';
import { PageTransition } from '../../components/PageTransition';
import { AboutSection } from '../../components/dev/AboutSection';
import { ProjectsSection } from '../../components/dev/ProjectsSection';
import { ContactSection } from '@/components/dev/ContactSection';

const NAME_REST = ' del Angel';
const DEV_FIRST_ALIAS = 'h3c70r';
const DEV_FIRST_REVEALED = 'Hector';
const DEV_NAME_GLITCH_MS = 480;

export default function Home() {
  const { section } = useDevView();
  const { homeViewMode, setHomeViewMode, registerHomeNavToggle } = useSiteMode();
  const [glitching, setGlitching] = useState(false);
  const [devFirstNameGlitch, setDevFirstNameGlitch] = useState(false);
  const [devNameRevealDone, setDevNameRevealDone] = useState(false);
  const c = content[homeViewMode];
  const isMusic = homeViewMode === 'music';

  const handleToggle = useCallback(() => {
    setGlitching(true);
    setTimeout(() => setHomeViewMode((m) => (m === 'dev' ? 'music' : 'dev')), 120);
    setTimeout(() => setGlitching(false), 600);
  }, [setHomeViewMode]);

  useLayoutEffect(() => {
    registerHomeNavToggle(handleToggle);
    return () => {
      registerHomeNavToggle(null);
    };
  }, [registerHomeNavToggle, handleToggle]);

  useEffect(() => {
    if (homeViewMode !== 'dev') {
      setTimeout(() => {
        setDevFirstNameGlitch(false);
        setDevNameRevealDone(false);
      }, 0);
      return;
    }
    setTimeout(() => {
      setDevFirstNameGlitch(false);
      setDevNameRevealDone(false);
    }, 0);
    const startGlitch = window.setTimeout(() => setDevFirstNameGlitch(true), 2000);
    const finishReveal = window.setTimeout(() => {
      setDevFirstNameGlitch(false);
      setDevNameRevealDone(true);
    }, 2000 + DEV_NAME_GLITCH_MS);
    return () => {
      window.clearTimeout(startGlitch);
      window.clearTimeout(finishReveal);
    };
  }, [homeViewMode]);

  const glitchedDevFirstName = useGlitchText(DEV_FIRST_ALIAS, devFirstNameGlitch);
  const glitchedLabel = useGlitchText(c.label, glitching);
  const glitchedSubtitle = useGlitchText(c.subtitle, glitching);
  const glitchedBio = useGlitchText(c.bio, glitching);

  const firstName = isMusic
    ? c.name.split(' ')[0]
    : devNameRevealDone
      ? DEV_FIRST_REVEALED
      : glitchedDevFirstName;
  const lastName = isMusic ? c.name.split(' ').slice(1).join(' ') : NAME_REST.trim();

  return (
    <PageTransition transitionKey={section}>
      {section === 'home' && (
        <Hero
          glitchedLabel={glitchedLabel}
          glitchedSubtitle={glitchedSubtitle}
          glitchedBio={glitchedBio}
          firstName={firstName}
          lastName={lastName}
          c={c}
          isMusic={isMusic}
        />
      )}
      {section === 'about' && <AboutSection />}
      {section === 'projects' && <ProjectsSection key={section} />}
      {section === 'contact' && <ContactSection />}
    </PageTransition>
  );
}
