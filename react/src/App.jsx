import { useState, useEffect, useRef } from 'react';
import music from './assets/music.mp3';
import ProgressBar from "./ProgressBar.jsx";
function App() {
  const [gold, setGold] = useState(0)
  const [goldPerClick, setGoldPerClick] = useState(1)
  //const [exp, setEXP] = useState(0) deprecated//
  const [dmg, setDmg] = useState(1)
  const [enemyHP, setEnemyHP] = useState(100)
  const [enemyDmg, setEnemyDmg] = useState(1)
  const [playerMaxHP, setplayerMaxHP] = useState(100)
  const [playerCurrentHP, setplayerCurrentHP] = useState(100)
  //const [lvl, setLvl] = useState(1) deprecated//
  const [goldPerSec, setGoldPerSec] = useState(0)
  const [enemiesDefeated, setEnemiesDefeated] = useState(0)
  const [encounter, setEncounter] = useState("encounterOne")
  const [modalEncounter,setModalEncounter] = useState("")
  const [enemy, setEnemy] = useState("enemyOne")
  const enemies=[// to demonstrate use of arrays and mapping//
    {enemyHP: 100, enemyDamage: 1, id: 0},]
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
  const [charSelect, setCharSelect]=useState("charPortrait1") // 1=Hermit 2=Emperor 3=Magician 4=Priestess//
  const [showStartScreen, setShowStartScreen]=useState(true)
  useEffect(() => {const goldInterval = setInterval(() => 
    {setGold((gold) => gold + (goldPerSec>100?Math.round(goldPerSec/10):(goldPerSec>0 ? 1:0)));},goldPerSec>100? 100: 1000/goldPerSec)
    //browser constraints when trying to run function faster than every 10ms means a limit has to be instated for functionality//
    return () => {
      clearInterval(goldInterval);};}, [goldPerSec]);
  function play(){new Audio(music).loop=true; new Audio(music).play();
    if (new Audio(music).currentTime>=150){new Audio(music).currentTime=0}};
  return (
    <>
    <audio id='playMusic' src={music} loop preload='auto'></audio>
    {showStartScreen&&<div id="startScreen">
      <h1 className='startTitle'>Choose Your Origin</h1>
      <div id='tarotWrapWrap'>
        <div id='tarotWrap'>
          <div   className={`tarot${(tarotButtClick)===true ? " tarotTransA":""}`}>
            <button onClick={()=>{tarotButtClick===true? setCharSelect(charSelect=>"charPortraitOne")
            & setplayerMaxHP((playerMaxHP) => playerMaxHP + (100)) 
            & setplayerCurrentHP((playerCurrentHP) => playerCurrentHP + (100))
            &setDmg((dmg) => dmg + (10)) 
            & setShowStartScreen(showStartScreen=>false) :null 
            & setTarotButtClick(tarotButtClick=>true);playMusic.play()}} className='fill-div' 
            data-title={(tarotButtClick)===true ? "+10 DMG +100 MaxHP":null}></button>
          </div>
          <div  className={`tarot${(tarotButtClick)===true ? " tarotTransB":""}`}>
            <button onClick={()=>{tarotButtClick===true? setCharSelect(charSelect=>"charPortraitTwo")
            & setGoldPerClick((goldPerClick) => goldPerClick + (3))
            & setGold((gold) => gold + (250)) 
            & setShowStartScreen(showStartScreen=>false) :null 
            & setTarotButtClick((tarotButtClick)=>true);playMusic.play()}} className='fill-div' 
            data-title={(tarotButtClick)===true ? "+250 GP +3 GP/Click":null}></button>
          </div>
          <div  className={`tarot${(tarotButtClick)===true ? " tarotTransC":""}`} >
            <button onClick={()=>{tarotButtClick===true? setCharSelect(charSelect=>"charPortraitThree")
            & setGoldPerClick((goldPerClick) => goldPerClick + (3))
            &setDmg((dmg) => dmg + (10)) 
            & setShowStartScreen(showStartScreen=>false) :null 
            & setTarotButtClick((tarotButtClick)=>true);playMusic.play()}} className='fill-div' 
            data-title={(tarotButtClick)===true ? "+10 DMG +3 GP/Click":null}></button>
          </div>
          <div  className={`tarot${(tarotButtClick)===true ? " tarotTransD":""}`} >
            <button onClick={()=>{tarotButtClick===true? setCharSelect(charSelect=>"charPortraitFour" )
            & setGold((gold) => gold + (250)) 
            & setplayerMaxHP((playerMaxHP) => playerMaxHP + (100)) 
            & setplayerCurrentHP((playerCurrentHP) => playerCurrentHP + (100))
            & setShowStartScreen(showStartScreen=>false) :null 
            & setTarotButtClick((tarotButtClick)=>true);playMusic.play()}} className='fill-div' 
            data-title={(tarotButtClick)===true ? "+250 GP +100 MaxHP":null}></button>
          </div>
        </div>
      </div>
    </div>}
    {showStartScreen===false?<div id="gameScreen">
      <div id="C">
        <div className={charSelect}></div>
        <div className={encounter}></div>
      </div>
      <div className="card">
        <h1 className='title'>Stats</h1>
        <div id="stats">
        <p className='statGrid'>Placeholder</p>
        <p className='statGrid'>Placeholder</p>
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
        <h1 className='title shopTitle'>Shop</h1>
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
        <div>
        <h3>Player HP: {playerCurrentHP}</h3>
        <ProgressBar bgcolor='#7d0729' completed={Math.round(((playerCurrentHP/playerMaxHP)*100))}/>
        <h2>Gold: {gold}</h2>
        <p>Gold Per Click: {goldPerClick}</p>
        <p>Gold Per Sec: {goldPerSec}</p>
        <p>Player Damage: {dmg}</p>
        </div>
        <button className={enemy} 
        onClick={() => setGold((gold) => gold + (goldPerClick))
        & setEnemyHP((enemyHP)=>enemyHP-(dmg))
        & setplayerCurrentHP((playerCurrentHP)=>playerCurrentHP-(enemyDmg))
        & (playerCurrentHP<=enemyDmg?setModalEncounter((modalEncounter)=>"gameOver"):null)
        & (enemyHP<=dmg?
  (enemiesDefeated==0?setEnemiesDefeated((enemiesDefeated)=>enemiesDefeated+1)
    & setEnemy((enemy)=>"enemyTwo") &setEnemyHP((enemyHP)=>500)&setEnemyDmg((enemyDmg)=>5)
  :(enemiesDefeated==1?setEnemiesDefeated((enemiesDefeated)=>enemiesDefeated+1)
    & setEnemy((enemy)=>"enemyThree") &setEnemyHP((enemyHP)=>1000)&setEnemyDmg((enemyDmg)=>10)
  :(enemiesDefeated==2?setEnemiesDefeated((enemiesDefeated)=>enemiesDefeated+1)
    & setEnemy((enemy)=>"enemyFour") &setEnemyHP((enemyHP)=>5000)&setEnemyDmg((enemyDmg)=>50)
  :(enemiesDefeated==3?setEnemiesDefeated((enemiesDefeated)=>enemiesDefeated+1)
    & setEnemy((enemy)=>"enemyFive") &setEnemyHP((enemyHP)=>10000)&setEnemyDmg((enemyDmg)=>100)
  :(enemiesDefeated==4?setEnemiesDefeated((enemiesDefeated)=>enemiesDefeated+1)
    & setEnemy((enemy)=>"enemySix") &setEnemyHP((enemyHP)=>50000)&setEnemyDmg((enemyDmg)=>500)
  :(enemiesDefeated==5?setEnemiesDefeated((enemiesDefeated)=>enemiesDefeated+1)
    & setEnemy((enemy)=>"enemySeven") &setEnemyHP((enemyHP)=>100000)&setEnemyDmg((enemyDmg)=>1000)
  :(enemiesDefeated==6?setEnemiesDefeated((enemiesDefeated)=>enemiesDefeated+1)
    & setEnemy((enemy)=>"enemyEight") &setEnemyHP((enemyHP)=>1000000)&setEnemyDmg((enemyDmg)=>5000)
  :(enemiesDefeated==7?setEnemiesDefeated((enemiesDefeated)=>enemiesDefeated+1)
    & setEnemy((enemy)=>"enemyNine") &setEnemyHP((enemyHP)=>10000000)&setEnemyDmg((enemyDmg)=>10000)
  :(enemiesDefeated==8?setEnemiesDefeated((enemiesDefeated)=>enemiesDefeated+1)
    & setEnemy((enemy)=>"enemyTen") &setEnemyHP((enemyHP)=>100000000)&setEnemyDmg((enemyDmg)=>100000)
    :setModalEncounter((modalEncounter)=>"gameWin")))))))))):null)}>
        </button>
        {enemies.map((enemiesArray) => (<div key={enemiesArray.id}> 
        <h3>Enemy HP: {enemyHP}</h3>
        <ProgressBar bgcolor='#66923d' completed=
        {Math.round((enemyHP/(enemy==="enemyOne"? enemiesArray.enemyHP
        :(enemy==="enemyTwo"?enemiesArray.enemyHP*5
        :(enemy==="enemyThree"?enemiesArray.enemyHP*10
        :(enemy==="enemyFour"?enemiesArray.enemyHP*50
        :(enemy==="enemyFive"?enemiesArray.enemyHP*100
        :(enemy==="enemySix"?enemiesArray.enemyHP*500
        :(enemy==="enemySeven"?enemiesArray.enemyHP*1000
        :(enemy==="enemyEight"?enemiesArray.enemyHP*10000
        :(enemy==="enemyNine"?enemiesArray.enemyHP*100000
        :(enemy==="enemyTen"?enemiesArray.enemyHP*1000000:null))))))))))*100))}/>
        <p>Enemy DMG: {enemy==="enemyOne"? enemiesArray.enemyDamage
        :(enemy==="enemyTwo"?enemiesArray.enemyDamage*5
        :(enemy==="enemyThree"?enemiesArray.enemyDamage*10
        :(enemy==="enemyFour"?enemiesArray.enemyDamage*50
        :(enemy==="enemyFive"?enemiesArray.enemyDamage*100
        :(enemy==="enemySix"?enemiesArray.enemyDamage*500
        :(enemy==="enemySeven"?enemiesArray.enemyDamage*1000
        :(enemy==="enemyEight"?enemiesArray.enemyDamage*5000
        :(enemy==="enemyNine"?enemiesArray.enemyDamage*10000
        :(enemy==="enemyTen"?enemiesArray.enemyDamage*100000:null)))))))))}</p>
        </div>))}
      </div>
    </div>:null}
    {modalEncounter=="gameOver"?<div className='encounterScreen'>

    </div>:null}
    {modalEncounter=="gameWin"?<div className='encounterScreen'>

    </div>:null}
    {encounter=="encounterTwo"?<div className='encounterScreen'>

    </div>:null}
    {encounter=="encounterThree"?<div className='encounterScreen'>

    </div>:null}
    {encounter=="encounterFour"?<div className='encounterScreen'>

    </div>:null}
    {encounter=="encounterFive"?<div className='encounterScreen'>

    </div>:null}
    </>
  )
}

export default App


//todo//

//pause button?
//add occasonal random multichoice text ecounters after enemy death using dialog boxes or similar
//enemies have difefrent animations?
//boss battles?
//dmg animated in numbrs on screen?
//toggalable animations and options in seperate pop up menu using dialog
//game over screen on currentHP reaching 0, with reload button?
//localstorage only used if you select the same character, otherwise it is not used, maybe still stored though?
//encounters switch back to tower after occuring, encounters also occur in a randomized order, use math.random?
//transitistion animation between enemy cards of card burning up from middle
//add mediquerys for mobile view
//add accessibility featurees
//health bars
//add game over screen and win screen
