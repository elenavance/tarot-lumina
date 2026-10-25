'use client';
import {useState} from 'react';
import {AnimatePresence,motion} from 'framer-motion';
import type {TarotCard as Card} from '../data/tarotCards';
import {shuffleDeck,tarotCards} from '../data/tarotCards';
import {CardBack,TarotCard} from './TarotCard';
type Phase='ready'|'shuffling'|'choosing'|'revealing'|'done';
type Props={count:1|3; onReveal:(cards:Card[])=>void; onStageChange?:(phase:Phase)=>void};
export function CardPicker({count,onReveal,onStageChange}:Props){
 const [phase,setPhase]=useState<Phase>('ready');const [deck,setDeck]=useState<Card[]>([]);const [selected,setSelected]=useState<Card[]>([]);
 const move=(next:Phase)=>{setPhase(next);onStageChange?.(next)};
 const shuffle=()=>{setSelected([]);onReveal([]);setDeck(shuffleDeck(tarotCards));move('shuffling');setTimeout(()=>move('choosing'),1250)};
 const choose=(card:Card)=>{if(phase!=='choosing'||selected.some(c=>c.id===card.id))return;const next=[...selected,card];setSelected(next);if(next.length===count){move('revealing');setTimeout(()=>{onReveal(next);move('done')},count===1?1050:1750)}};
 const restart=()=>{setSelected([]);onReveal([]);move('ready')};
 return <section className="picker-shell"><div className="picker-intro"><span className="picker-sigil">❧</span><div><h2>{phase==='ready'?'The cards are waiting for you':phase==='shuffling'?'Let the deck find its rhythm':phase==='choosing'?`Choose ${count===1?'one card':'three cards'} that call to you`:phase==='revealing'?'Your cards are turning over':'Your cards have spoken'}</h2><p>{phase==='ready'?'Hold your question gently. The Seer will place a card in your path.':phase==='choosing'?`Select ${count} card${count===1?'':'s'} from the full 78-card deck · ${selected.length} of ${count} chosen.`:phase==='done'?'Take a moment with the images, then read the message below.':'Breathe in, and let your intention settle.'}</p></div>{phase==='ready'||phase==='choosing'||phase==='done'?<button className="gold-button shuffle-button" onClick={phase==='done'?restart:shuffle}>{phase==='done'?'Draw again':'✧  Shuffle the deck'}</button>:null}</div>
 {phase==='ready'&&<div className="ready-deck"><div className="deck-in-hand"><CardBack compact/><CardBack compact/><CardBack compact/></div><span className="ready-caption">78 illustrated cards · one quiet moment</span></div>}
 {phase==='shuffling'&&<div className="shuffle-table" aria-label="Shuffling seventy-eight cards">{deck.slice(0,18).map((c,i)=><motion.div className="shuffle-fly" key={c.id} initial={{x:0,y:0,rotate:0,scale:.78,opacity:0}} animate={{x:[0,(i%2?1:-1)*(60+(i%5)*18),0],y:[0,-90-(i%4)*24,0],rotate:[0,(i%2?1:-1)*(25+(i%6)*7),0],scale:[.8,1,.82],opacity:[0,.95,0]}} transition={{duration:.95,delay:i*.035,repeat:1}}><CardBack compact/></motion.div>)}</div>}
 {phase==='choosing'&&<div className="full-deck-grid">{deck.map((card,i)=><motion.button type="button" key={card.id} className={`deck-choice ${selected.some(c=>c.id===card.id)?'chosen':''}`} initial={{opacity:0,y:18,scale:.88}} animate={{opacity:1,y:0,scale:1}} transition={{delay:Math.min(i*.008,.44),duration:.32}} whileHover={{y:-8,scale:1.06,zIndex:4}} whileTap={{scale:.95}} onClick={()=>choose(card)} aria-label={`Choose card ${i+1} from the deck`}><CardBack compact selected={selected.some(c=>c.id===card.id)}/></motion.button>)}</div>}
 {(phase==='revealing'||phase==='done')&&<div className="picked-reveal-row">{selected.map((card,i)=><motion.div className="card-flip-wrap" key={card.id} initial={{rotateY:0,y:15,opacity:0}} animate={{rotateY:180,y:0,opacity:1}} transition={{duration:.9,delay:i*.42,ease:[.18,.7,.25,1]}}><div className="flip-face flip-back"><CardBack compact/></div><div className="flip-face flip-front"><TarotCard card={card} compact/></div></motion.div>)}</div>}
 </section>
}

