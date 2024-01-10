import { useState, useEffect } from 'react'


function App() {
  const [gold, setGold] = useState(0)
  const [goldPerClick, setGoldPerClick] = useState(1)
  const [exp, setEXP] = useState(0)
  const [dmg, setDmg] = useState(1)
  const [enemyHP, setEnemyHP] = useState(1)
  const [playerMaxHP, setplayerMaxHP] = useState(100)
  const [playerCurrentHP, setplayerCurrentHP] = useState(100)
  const [lvl, setLvl] = useState(1)
  const [goldPerSec, setGoldPerSec] = useState(0)
  const [enemiesDefeated, setEnemiesDefeated] = useState(0)
  const [purchases, setPurchases] = useState(0)
  const [clubs, setClubs] = useState(0)
  const [lArmours, setLArmours] = useState(0)
  const [swords, setSwords] = useState(0)
  const [hPots, setHPots] = useState(0)
  const [wands, setWands] = useState(0)
  const [axes, setAxes] = useState(0)
  const [vRings, setVRings] = useState(0)
  const [guns, setGuns] = useState(0)
  const [pArmour, setPArmour] = useState(0)
  const [mRings, setMRings] = useState(0)
  const [bombs, setBombs] = useState(0)
  return (
    <>
    <div id="gameScreen">
      <div id="C">
      <h1>Portrait</h1>
      </div>
      <div className="card">
        <h1 className='title'>Stats</h1>
        <div id="stats">
          <p>Current Gold: {gold}</p>
          <p>Current Exp: {exp}</p>
          <p>Gold Per Click: {goldPerClick}</p>
          <p>Gold Per Sec: {goldPerSec}</p>
          <p>Damage Per Click: {dmg}</p>
          <p>Player Level: {lvl}</p>
          <p>Current HP: {playerCurrentHP}</p>
          <p>Max HP: {playerMaxHP}</p>
          <p>Enemies Defeated: {enemiesDefeated}</p>
          <p>Total Store Purchases: {purchases}</p>
          <p>Wood Clubs: {clubs}</p>
          <p>Leather Armours: {lArmours}</p>
          <p>Swords: {swords}</p>
          <p>Health Potions Purchased: {hPots}</p>
          <p>Wands of Fireball: {wands}</p>
          <p>Shiny Axes: {axes}</p>
          <p>Rings of Vitality: {vRings}</p>
          <p>Machine Guns: {guns}</p>
          <p>Power Armours: {pArmour}</p>
          <p>Rings of Midas: {mRings}</p>
          <p>Atom Bombs: {bombs}</p>
        </div>
      </div>
      <div className='card'>
        <h1 className='title'>Shop</h1>
        
        <div id="A">
        <button className="storeButt" data-title="+1GP/s +1Dmg" onClick={() => {gold>=15 ?
          setDmg((Dmg) => Dmg + (1)) 
          & setGoldPerSec((goldPerSec) => goldPerSec + (1)) 
          & setGold((gold) => gold - (15))
          & setClubs((clubs) => clubs + (1)): null}} >
          Wood Club [15GP]</button>
        <button className="storeButt" data-title="+100 MaxHP" onClick={() => {gold>=50 ?
          setplayerMaxHP((playerMaxHP) => playerMaxHP + (100)) 
          & setGold((gold) => gold - (50))
          & setLArmours((lArmours) => lArmours + (1)): null}}>
            Leather Armour [50GP]</button>
        <button className="storeButt" data-title="+10GP/s +10Dmg" onClick={() => {gold>=100 ?
          setDmg((Dmg) => Dmg + (10)) 
          & setGoldPerSec((goldPerSec) => goldPerSec + (10)) 
          & setGold((gold) => gold - (100))
          & setSwords((swords) => swords + (1)): null}}>
          Sword [100GP]</button>
        <button className="storeButt" data-title="Restore 25%HP" onClick={() => {gold>=250 ?
          ((playerCurrentHP+(0.25*playerMaxHP)>(playerMaxHP)) 
          ? setplayerCurrentHP((playerCurrentHP) => playerCurrentHP = playerMaxHP) 
          :setplayerCurrentHP((playerCurrentHP) => playerCurrentHP + (0.25*playerMaxHP))) 
          & setGold((gold) => gold - (250))
          & setHPots((hPots) => hPots + (1)): null}}>
          Health Potion [250GP]</button>
        <button className="storeButt" data-title="+50GP/click +100Dmg" onClick={() => {gold>=500 ?
          setDmg((Dmg) => Dmg + (100)) 
          & setGoldPerClick((goldPerClick) => goldPerClick + (50)) 
          & setGold((gold) => gold - (500))
          & setWands((wands) => wands + (1)): null}}>
          Wand of Fireballs [500GP]</button>
        <button className="storeButt" data-title="+50GP/s +250Dmg" onClick={() => {gold>=1000 ?
          setDmg((Dmg) => Dmg + (250)) 
          & setGoldPerSec((goldPerSec) => goldPerSec + (50)) 
          & setGold((gold) => gold - (1000))
          & setAxes((axes) => axes + (1)): null}}>
          Shiny Axe [1,000GP]</button>
        <button className="storeButt" data-title="+10,000 MaxHP">
          Ring of Vitality [5,000GP]</button>
        <button className="storeButt" data-title="+500GP/s +3,000Dmg">
          Machine Gun [10,000GP]</button>
        <button className="storeButt" data-title="+100,000 MaxHP">
          Power-Armour [50,000GP]</button>
        <button className="storeButt" data-title="X2 GP/s">
          Ring of Midas [500,000GP]</button>
        <button className="storeButt" data-title="+1,000,000 Dmg">
          Atom Bomb [1,000,000GP]</button>
      </div></div>
      <div id="B">
        <h1>Gameplay</h1>
        <button onClick={() => setGold((gold) => gold + (goldPerClick) + (1000000))& setplayerCurrentHP((playerCurrentHP) => playerCurrentHP - 50)}>
          Enemy Placeholder
        </button>
        <p>Enemy HP : {enemyHP}</p>
      </div>
    </div>
    </>
  )
}

export default App

//start screen with char creator, race and ccharacter influence min value of stats, stats influence  maxhp, startgold, startgoldperclick, dmg, etc
//level influences stats
// d20 dice roll for stats simulated with math.random, if value of stat is below minval reroll that one?
// values of stats stored in array?
//health bars and enemys
//basic enemys do no damage and click to do damage
//later enemies deal damage to playerchar
//shop items foir armor magicitems weapons etc.
//stats influence health, damage, dam/sec, ac, starting damage etc
//xp bar and damage and health bar, link health % to % fill of progress bar
//xp and gold or just 1 universl currency?
//when xp reaches new lvl => auto all stat increase or player given skill points to choose stat increse
//pause button? menu save game?
//add occasonal random multichoice text ecounters after enemy death using dialog boxes or similar
// css start screen is doors or cullis that opens with animation to gamecreen after startscreen fades
//enemies have difefrent animations?
//boss battles?
//dmg animated in numbrs on screen?
//toggalable animations and options in seperate pop up menu using dialog
// character selector using card animation css, characters add to certain stats??
//savegame and loadgame buttons?