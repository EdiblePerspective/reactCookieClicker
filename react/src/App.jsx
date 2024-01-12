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
  //const [purchases, setPurchases] = useState(0) deprecated//
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
  const [tarotButtClick, setTarotButtClick]=useState(false)
  const [charSelect, setCharSelect]=useState(0) // 1=Hermit 2=Emperor 3=Magician 4=Priestess//
  const [showStartScreen, setShowStartScreen]=useState(true)
  useEffect(() => {const goldInterval = setInterval(() => 
    {setGold((gold) => gold + (goldPerSec>100?Math.round(goldPerSec/10):(goldPerSec>0 ? 1:0)));},goldPerSec>100? 100: 1000/goldPerSec)
    //browser constraints when trying to run function faster than every 10ms means a limit has to be instated for functionality//
    return () => {
      clearInterval(goldInterval);};}, [goldPerSec]);
  return (
    <>
    {showStartScreen&&<div id="startScreen">
      <h1 className='startTitle'>Choose Your Origin</h1>
      <div id='tarotWrapWrap'>
        <div id='tarotWrap'>
          <div   className={`tarot${(tarotButtClick)===true ? " tarotTransA":""}`}>
            <button onClick={()=>{tarotButtClick===true? setCharSelect(charSelect=>1 )& console.log("char1")& setShowStartScreen(showStartScreen=>false) :null & setTarotButtClick(tarotButtClick=>true)}} className='fill-div' data-title={(tarotButtClick)===true ? "+10 DMG +100 MaxHP":null}></button>
          </div>
          <div  className={`tarot${(tarotButtClick)===true ? " tarotTransB":""}`}>
            <button onClick={()=>{tarotButtClick===true? setCharSelect(charSelect=>2 )& console.log("char2") & setShowStartScreen(showStartScreen=>false) :null & setTarotButtClick((tarotButtClick)=>true)}} className='fill-div' data-title={(tarotButtClick)===true ? "+250 GP +3 GP/Click":null}></button>
          </div>
          <div  className={`tarot${(tarotButtClick)===true ? " tarotTransC":""}`} >
            <button onClick={()=>{tarotButtClick===true? setCharSelect(charSelect=>3 )& console.log("char3") & setShowStartScreen(showStartScreen=>false) :null & setTarotButtClick((tarotButtClick)=>true)}} className='fill-div' data-title={(tarotButtClick)===true ? "+10 DMG +3 GP/Click":null}></button>
          </div>
          <div  className={`tarot${(tarotButtClick)===true ? " tarotTransD":""}`} >
            <button onClick={()=>{tarotButtClick===true? setCharSelect(charSelect=>4 )& console.log("char4") & setShowStartScreen(showStartScreen=>false) :null & setTarotButtClick((tarotButtClick)=>true)}} className='fill-div' data-title={(tarotButtClick)===true ? "+250 GP +100 MaxHP":null}></button>
          </div>
        </div>
      </div>
    </div>}
    {showStartScreen===false?<div id="gameScreen">
      <div id="C">
        <div></div>
        <div></div>
      </div>
      <div className="card">
        <h1 className='title'>Stats</h1>
        <div id="stats">
          <p className='statGrid'>Current Exp: {exp}</p>
          <p className='statGrid'>Player Level: {lvl}</p>
          <p className='statGrid'>Max HP: {playerMaxHP}</p>
          <p className='statGrid'>Enemies Defeated: {enemiesDefeated}</p>
          <p className='statGrid'>Total Store Purchases: {clubs+lArmours+swords+hPots+wands+axes+vRings+guns+pArmour+mRings+bombs}</p>
          <p className='statGrid'>Wood Clubs: {clubs}</p>
          <p className='statGrid'>Leather Armours: {lArmours}</p>
          <p className='statGrid'>Swords: {swords}</p>
          <p className='statGrid'>Health Potions Purchased: {hPots}</p>
          <p className='statGrid'>Wands of Fireball: {wands}</p>
          <p className='statGrid'>Shiny Axes: {axes}</p>
          <p className='statGrid'>Rings of Vitality: {vRings}</p>
          <p className='statGrid'>Machine Guns: {guns}</p>
          <p className='statGrid'>Power Armours: {pArmour}</p>
          <p className='statGrid'>Rings of Midas: {mRings}</p>
          <p className='statGrid'>Atom Bombs: {bombs}</p>
          <p className='statGrid'>Placeholder</p>
          <p className='statGrid'>Placeholder</p>
          <p className='statGrid'>Placeholder</p>
          <p className='statGrid'>Placeholder</p>
          <p className='statGrid'>Placeholder</p>
          <p className='statGrid'>Placeholder</p>
          <p className='statGrid'>Placeholder</p>
          <p className='statGrid'>Placeholder</p>
        </div>
      </div>
      <div className='cardShop'>
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
        <button className="storeButt" data-title="+10,000 MaxHP" onClick={() => {gold>=5000 ?
          setplayerMaxHP((playerMaxHP) => playerMaxHP + (10000)) 
          & setGold((gold) => gold - (5000))
          & setVRings((vRings) => vRings + (1)): null}}>
          Ring of Vitality [5,000GP]</button>
        <button className="storeButt" data-title="+500GP/s +3,000Dmg" onClick={() => {gold>=10000 ?
          setDmg((Dmg) => Dmg + (3000)) 
          & setGoldPerSec((goldPerSec) => goldPerSec + (500)) 
          & setGold((gold) => gold - (10000))
          & setGuns((guns) => guns + (1)): null}}>
          Machine Gun [10,000GP]</button>
        <button className="storeButt" data-title="+100,000 MaxHP" onClick={() => {gold>=50000 ?
          setplayerMaxHP((playerMaxHP) => playerMaxHP + (100000)) 
          & setGold((gold) => gold - (50000))
          & setPArmour((pArmour) => pArmour + (1)): null}}>
          Power-Armour [50,000GP]</button>
        <button className="storeButt" data-title="X2 GP/s" onClick={() => {gold>=500000 ?
          setGoldPerSec((goldPerSec) => goldPerSec * (2)) 
          & setGold((gold) => gold - (500000))
          & setMRings((mRings) => mRings + (1)): null}}>
          Ring of Midas [500,000GP]</button>
        <button className="storeButt" data-title="+1,000,000 Dmg" onClick={() => {gold>=1000000 ?
          setDmg((Dmg) => Dmg + (1000000)) 
          & setGold((gold) => gold - (1000000))
          & setBombs((bombs) => bombs + (1)): null}}>
          Atom Bomb [1,000,000GP]</button>
      </div></div>
      <div id="B">
        <h1>Gameplay</h1>
        <button onClick={() => setGold((gold) => gold + (goldPerClick))}>
          Enemy Placeholder
        </button>
        <p>Current Gold: {gold}</p>
        <p>Current HP: {playerCurrentHP}</p>
        <p className='statGrid'>Gold Per Click: {goldPerClick}</p>
        <p className='statGrid'>Gold Per Sec: {goldPerSec}</p>
        <p className='statGrid'>Damage Per Click: {dmg}</p>
        <button onClick={()=>null}>
          Save Game
        </button>
        <button onClick={()=>null}>
          Load Game
        </button>
        <p>Enemy HP : {enemyHP}</p>
      </div>
    </div>:null}
    </>
  )
}

export default App


//todo//


//level influences stats
// d20 dice roll for stats simulated with math.random, if value of stat is below minval reroll that one?
// values of stats stored in array?
//health bars and enemys
//basic enemys do no damage and click to do damage
//later enemies deal damage to playerchar
//xp bar and damage and health bar, link health % to % fill of progress bar
//when xp reaches new lvl => auto all stat increase or player given skill points to choose stat increse
//pause button?
//add occasonal random multichoice text ecounters after enemy death using dialog boxes or similar
//enemies have difefrent animations?
//boss battles?
//dmg animated in numbrs on screen?
//toggalable animations and options in seperate pop up menu using dialog
//game over screen on currentHP reaching 0, with reload button?
//localstorage only used if you select the same character, otherwise it is not used, maybe still stored though?
//encounters switch back to tower after occuring, encounters also occur in a randomized order, use math.random?

//+ (1000000))& setplayerCurrentHP((playerCurrentHP) => playerCurrentHP - 50)
