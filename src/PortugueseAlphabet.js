// src/PortugueseAlphabet.js
import React, { useState, useEffect } from 'react';

// Portuguese letters and their pronunciations
const letters = [
  { letter: 'A', pronunciation: 'a' },
  { letter: 'B', pronunciation: 'be' },
  { letter: 'C', pronunciation: 'ce' },
  { letter: 'D', pronunciation: 'de' },
  { letter: 'E', pronunciation: 'e' },
  { letter: 'F', pronunciation: 'efe' },
  { letter: 'G', pronunciation: 'ge' },
  { letter: 'H', pronunciation: 'aga' },
  { letter: 'I', pronunciation: 'i' },
  { letter: 'J', pronunciation: 'jota' },
  { letter: 'K', pronunciation: 'ka' },
  { letter: 'L', pronunciation: 'ele' },
  { letter: 'M', pronunciation: 'eme' },
  { letter: 'N', pronunciation: 'ene' },
  { letter: 'O', pronunciation: 'o' },
  { letter: 'P', pronunciation: 'pe' },
  { letter: 'Q', pronunciation: 'que' },
  { letter: 'R', pronunciation: 'erre' },
  { letter: 'S', pronunciation: 'esse' },
  { letter: 'T', pronunciation: 'te' },
  { letter: 'U', pronunciation: 'u' },
  { letter: 'V', pronunciation: 've' },
  { letter: 'W', pronunciation: 'dábliu' },
  { letter: 'X', pronunciation: 'xis' },
  { letter: 'Y', pronunciation: 'ípsilon' },
  { letter: 'Z', pronunciation: 'zê' },
];

const PortugueseAlphabet = () => {
  const [voices, setVoices] = useState([]);
  const [selectedVoice, setSelectedVoice] = useState(null);
  const [selectedPronunciation, setSelectedPronunciation] = useState('');

  useEffect(() => {
    const synth = window.speechSynthesis;

    const loadVoices = () => {
      const availableVoices = synth.getVoices();
      setVoices(availableVoices);
      
      // Default to a Portuguese voice if available
      const portugueseVoice = availableVoices.find((voice) => voice.lang === 'pt-PT' || voice.lang === 'pt-BR');
      setSelectedVoice(portugueseVoice || availableVoices[0]);
    };

    // Load voices on initial mount and when they change
    loadVoices();
    synth.onvoiceschanged = loadVoices;
  }, []);

  const handlePronounce = (pronunciation) => {
    if (selectedVoice) {
      const synth = window.speechSynthesis;
      const utterance = new SpeechSynthesisUtterance(pronunciation);
      utterance.voice = selectedVoice;
      utterance.lang = selectedVoice.lang;
      synth.speak(utterance);
    }
  };

  const handleReadPronunciation = () => {
    if (selectedVoice && selectedPronunciation) {
      const synth = window.speechSynthesis;
      const utterance = new SpeechSynthesisUtterance(selectedPronunciation);
      utterance.voice = selectedVoice;
      utterance.lang = selectedVoice.lang;
      synth.speak(utterance);
    }
  };

  return (
    <div>
      <h1>Portuguese Alphabet</h1>
      <div className="alphabet">
        {letters.map(({ letter, pronunciation }) => (
          <div key={letter} className="letter">
            <button onClick={() => handlePronounce(pronunciation)}>
              {letter}
            </button>
            <span className="pronunciation">
              {pronunciation}
            </span>
          </div>
        ))}
      </div>
      
      <div className="voice-selector">
        <h2>Select Voice</h2>
        <select
          value={selectedVoice ? selectedVoice.name : ''}
          onChange={(e) =>
            setSelectedVoice(
              voices.find((voice) => voice.name === e.target.value)
            )
          }
        >
          {voices.map((voice) => (
            <option key={voice.name} value={voice.name}>
              {voice.name} ({voice.lang})
            </option>
          ))}
        </select>
      </div>

      <div className="pronunciation-reader">
        <h2>Read Pronunciation</h2>
        <select
          value={selectedPronunciation}
          onChange={(e) => setSelectedPronunciation(e.target.value)}
        >
          <option value="">Select a pronunciation</option>
          {letters.map(({ letter, pronunciation }) => (
            <option key={letter} value={pronunciation}>
              {letter}: {pronunciation}
            </option>
          ))}
        </select>
        <button onClick={handleReadPronunciation}>Read Pronunciation</button>
      </div>
    </div>
  );
};

export default PortugueseAlphabet;
