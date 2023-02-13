import React from 'react';
import CharactersGrid from '@/modules/marvel-characters/components/CharacterGrid';
import FeaturedCharacters from '../../components/FeaturedCharacteres';
import './styles.scss';
import CharacterProm from '@/modules/core/components/molecules/CharacterProm';
const img = require.context('@/assets/images', true);

export function CharactersPage() {
  return (
    <>
      <div className="mvl-characters-page">
        <header className="mvl-characters-page-header">
          <h1 className="title-header">MARVELS CHARACTERS</h1>
          <p className="text-header">
            Get a list of all Marvels characters and villians from the humble House of Ideas!
          </p>
        </header>
        <div className="container">
          <section className="mvl-section-card">
            
          </section>
          <h1 className="title-featured">FEATURED CHARACTERS</h1>
          <FeaturedCharacters />
          <h1>MARVEL CHARACTERS LIST</h1>
          <CharactersGrid />
        </div>
      </div>
      <CharacterProm />
    </>
  );
}
