const tasks = {
    en: [
        "ACE WITH CLASSIC", "AFK TEAMMATE", "APOLOGIZE FOR BAD PLAY", "BHOP TO SITE", "BLAME A TEAMMATE FOR NO REASON",
        "BUY TEAMMATE AN OPERATOR", "BUYOUT WITH NO ARMOR", "COMPLIMENT ENEMY PLAYER", "COMPLIMENT TEAMMATE", "DEAL 150 DAMAGE WITHOUT A KILL",
        "DEFUSE HALF THE SPIKE", "DIE FROM SHOTGUN", "DIE TO ABILITY", "DIE TO EXPLOSION", "DIE TO SPIKE", "DOWNGRADE YOUR WEAPON",
        "FAKE A PLANT", "FOLLOW A TEAMMATE 1 ROUND", "FRENCH TEAMMATE", "GET 10 KILLS", "GET 20 KILLS", "GET 2 KILLS IN A ROUND",
        "GET 3 KILLS IN A ROUND", "GET 30 KILLS", "GET A KILL WITH MELEE", "GET A ONE-TAP KILL", "GET A SHERIFF KILL",
        "GET CARRIED", "GET COACHED", "GET FLASHED 3 TIMES", "GET KILLED BY HEADSHOT", "GET KILLED WHILE PLANTING", "GET LAST KILL IN A ROUND",
        "GET RUN-AND-GUNNED", "GET WALL-BANGED", "HACK-USATION", "INSTA-LOCK AGENT", "INSTA-LOCK TEAMMATE", "KILL THROUGH SMOKE",
        "LOSE 1V1", "LOSE 2 ROUNDS IN A ROW", "LOSE A MATCH", "LOSE A ROUND", "LOSE PISTOL ROUND", "ONLY CROUCH FOR ONE ROUND",
        "PICK UP ENEMY WEAPON", "PLANT SPIKE IN THE OPEN", "REPORT TOXIC PLAYER", "REVIVE KAY/O", "RIZZ A TEAMMATE", "RIZZ AN ENEMY",
        "SPEND 0 CREDS IN A ROUND", "SPEND OVER 5.000 CREDS", "STEAL AN ACE", "SURVIVE SPIKE", "SURVIVE ULT", "TALK IN A DIFFERENT ACCENT 1 ROUND",
        "TEAM ACE", "TEAMMATE ASKS ABOUT YOUR RANK", "TEAMMATE FULL-BUYS 2ND ROUND", "TEAMMATE NETWORK PROBLEMS", "TERRIBLE ROTATION",
        "TERRIBLE TEAM CALL", "TERRIBLE TEAM MIC", "TERRIBLE TEAM RUSH", "TERRIBLE TEAM SMOKE", "TOP FRAG HALF", "TOP FRAG MATCH",
        "TOP FRAG ROUND", "TRIPLE DOUBLE SCORE", "UPGRADE YOUR WEAPON", "WASTE ULT", "WHIFF EVERY SHOT", "WHOLE TEAM OVERROTATES",
        "WIN 1V1", "WIN 2 ROUNDS IN A ROW", "WIN A ROUND", "WIN ATTACK WITHOUT PLANTING", "WIN OVERTIME", "WIN PISTOL ROUND"
    ],
    de: [
        "1 RUNDE NUR KRIECHEN", "1V1 GEWINNEN", "2 KILLS IN EINER RUNDE", "20 KILLS MACHEN", "3 KILLS IN EINER RUNDE",
        "3 MAL GEBLENDET WERDEN", "30 KILLS MACHEN", "ACE MIT CLASSIC", "AFK TEAMMATE", "BHOP AUF DIE SEITE",
        "BLAME EINEN TEAMMATE OHNE GRUND", "DURCH FÄHIGKEIT STERBEN", "DURCH HEADSHOT GETÖTET WERDEN", "DURCH SCHROTFLINTE STERBEN",
        "DURCH SMOKE TÖTEN", "FAKE EINEN PLANT", "FOLGE EINEM TEAMMATE 1 RUNDE LANG", "FRANZÖSISCHER TEAMMATE", "FÜR SCHLECHTES SPIEL ENTSCHULDIGEN",
        "GEB 5.000 CREDS IN EINER RUNDE AUS", "GEB 0 CREDS IN EINER RUNDE AUS", "GEGNER LOBEN", "GEWINNE 2 RUNDEN IN FOLGE",
        "GEWINNE ALS ANGREIFER OHNE ZU DEN SPIKE ZU PLATZIEREN", "GEWINNE DIE VERLÄNGERUNG", "GEWINNE EINE PISTOLE RUNDE",
        "GEWINNE EINE RUNDE", "HACKING VERDACHT", "HEBE EINE GEGNERISCHE WAFFE AUF", "INSTA-LOCK EINEN AGENTEN", "INSTA-LOCK TEAMMATE",
        "JEDEN SCHUSS VERFEHLEN", "KAUFEN OHNE RÜSTUNG", "KAUFE TEAMMATE EINE OPERATOR", "KAY/O WIEDERBELEBEN", "KLAUE EINEN ACE",
        "MACHE EINEN SHERIFF KILL", "REDE 1 RUNDE IN ANDEREM DIALEKT", "RIZZ EINEN GEGNER", "RIZZ EINEN TEAMMATE", "SCHLECHTER TEAM-CALL",
        "SCHLECHTER TEAM RUSH", "SCHLECHTES ROTIEREN", "SCHLECHTES TEAMMIKROFON", "SPIKE OFFEN PLATZIEREN", "SPIKE ZUR HÄLFTE ENTSCHÄRFEN",
        "STERBE DURCH EXPLOSION", "STERBE DURCH SPIKE", "TEAM ACE", "TEAM ÜBER ROTIERT", "TEAMMATE FRAGT NACH RANK",
        "TEAMMATE KAUFT 2. RUNDE", "TEAMMATE LOBEN", "TEAMMATE VERBINDUNGSPROBLEME", "TOXISCHEN SPIELER REPORTEN", "TRIPLE DOUBLE SCORE",
        "ULT ÜBERLEBEN", "VERLIERE 2 RUNDEN IN FOLGE", "VERLIERE EIN 1VS1", "VERLIERE EIN MATCH", "VERLIERE EINE PISTOLE RUNDE",
        "VERLIERE EINE RUNDE", "VERURSACHE 150 SCHADEN OHNE DEN GEGNER ZU TÖTEN", "VERSCHWENDE DEINE ULT", "VERWENDE EINE BESSERE WAFFE",
        "VERWENDE EINE SCHLECHTERE WAFFE", "TÖTE DEN LETZTEN GEGNER", "TÖTE EINEN GEGNER MIT DEM MESSER", "ÜBERLEBE DEN SPIKE", "ÜBERLEBE ULT",
        "EINEN ONE-TAP KILL MACHEN", "WERDE DURCH DIE WAND GETÖTET", "WERDE DURCH RUN-AND-GUN GETÖTET", "WERDE WÄHREND DES PLATZIERENS GETÖTET",
        "WERDE GECOACHED"
    ]
};

const taskDescriptions = {
    en: {
        "GET 20 KILLS": "Achieve a total of 20 kills in a single game.",
        "COMPLIMENT ENEMY PLAYER": "Give a compliment to an enemy player in the chat.",
        "APOLOGIZE FOR BAD PLAY": "Apologize to your team for a bad play or mistake.",
        "TEAM ACE": "Your team gets an team ace.",
        "PLANT SPIKE IN THE OPEN": "Plant the spike in a highly visible, open area.",
        "GET 3 KILLS IN A ROUND": "Get 3 kills in a single round.",
        "ACE WITH CLASSIC": "Get an ace using only the Classic pistol.",
        "KILL THROUGH SMOKE": "Kill an enemy through smoke.",
        "GET KILLED BY HEADSHOT": "Die from a headshot.",
        "GET 2 KILLS IN A ROUND": "Get 2 kills in a single round.",
        "SURVIVE ULT": "Survive an enemy ultimate ability.",
        "DEFUSE HALF THE SPIKE": "Defuse the spike halfway.",
        "WIN 1V1": "Win a one-on-one duel.",
        "WHIFF EVERY SHOT": "Miss all your shots.",
        "REVIVE KAY/O": "Revive KAY/O when he's down.",
        "BUYOUT WITH NO ARMOR": "Buy a full loadout without purchasing armor.",
        "GET FLASHED 3 TIMES": "Get blinded by flash abilities three times.",
        "DIE TO ABILITY": "Die from an enemy ability.",
        "GET 10 KILLS": "Achieve a total of 10 kills in a single game.",
        "TRIPLE DOUBLE SCORE": "Have double digits in three different stats.",
        "DIE FROM SHOTGUN": "Get killed by a shotgun.",
        "COMPLIMENT TEAMMATE": "Give a compliment to a teammate in the chat.",
        "TERRIBLE TEAM MIC": "Have a team member with a very poor mic quality.",
        "GET CARRIED": "Be carried to a win by your teammates.",
        "BHOP TO SITE": "Bhop from Spawn to the site.",
        "BUY TEAMMATE AN OPERATOR": "Buy your Teammate an Operator.",
        "DEAL 150 DAMAGE WITHOUT A KILL": "Deal 150 Damage without killing the enemy.", 
        "DIE TO SPIKE": "Die to the explosion of the spike.",
        "DIE TO EXPLOSION": "Die to any explosion.", 
        "FAKE A PLANT": "Fake a plant on the site.",
        "GET A KILL WITH MELEE": "Kill an enemy with your Melee.",
        "GET 30 KILLS": "Achieve a total of 30 kills in a single game.",
        "GET COACHED": "Teammate give's you advice how to play.",
        "GET LAST KILL IN A ROUND": "Kill the last standing enemy in the round.",
        "STEAL AN ACE": "Steal an Ace of your teammate.", 
        "GET A SHERIFF KILL": "Kill an enemy with a sheriff.",
        "GET A ONE-TAP KILL": "Kill an enemy with an one-tap.",
        "GET KILLED WHILE PLANTING": "An enemy kills you while you're planting the spike.",
        "GET WALL-BANGED": "Get killed through a wall.",
        "GET RUN-AND-GUNNED": "Get killed while the enemy is moving.",
        "HACK-USATION": "Any player of the match thinks you're cheating.",
        "LOSE 1V1": "Lose a 1v1 against an enemy.",
        "LOSE A MATCH": "Lose an entire match.",
        "LOSE A ROUND": "Lose a round.",
        "WHOLE TEAM OVERROTATES": "Your whole team overrotates to another site.",
        "WIN ATTACK WITHOUT PLANTING": "Win an attacking round without planting the spike.",
        "WIN OVERTIME": "Win the overtime.",
        "WASTE ULT": "Waste your ult and don't make a kill.",
        "TOP FRAG MATCH": "Be a MVP at the end of the match.", 
        "TOP FRAG HALF": "Be on the top of the scoreboard at the site switch.",
        "TOP FRAG ROUND": "Be on the top of the scoreboard at the end of a round.",
        "SPEND 0 CREDS IN A ROUND": "Spend no creds in a round.",
        "SPEND OVER 5.000 CREDS": "Spend over 5.000 creds in one round.",
        "ONLY CROUCH FOR ONE ROUND": "Crouch for the end of the round.",
        "FOLLOW A TEAMMATE 1 ROUND": "Follow a teammate for one round straight.",
        "TALK IN A DIFFERENT ACCENT 1 ROUND": "Talk in a different accent for one round.",
        "BLAME A TEAMMATE FOR NO REASON": "Blame a teammate for no reason.",
        "INSTA-LOCK TEAMMATE": "A teammate Insta-Locks any agent.",
        "AFK TEAMMATE": "A teammate is AFK in a round.",
        "REPORT TOXIC PLAYER": "Report a player who is toxic.",
        "PICK UP ENEMY WEAPON": "Pick up an enemy weapon.",
        "DOWNGRADE YOUR WEAPON": "Pick up, or buy a worse weapon.", 
        "WIN PISTOL ROUND": "Win a pistol round.",
        "LOSE PISTOL ROUND": "Lose a pistol round.", 
        "UPGRADE YOUR WEAPON": "Pick up, or buy yourself a better weapon.",
        "RIZZ A TEAMMATE": "Drop a rizz on your teammate.",
        "RIZZ AN ENEMY": "Drop a rizz on any enemy player.",
        "LOSE 2 ROUNDS IN A ROW": "Lose 2 rounds in a row.", 
        "WIN 2 ROUNDS IN A ROW": "Win 2 rounds in a row.",
        "TEAMMATE ASKS ABOUT YOUR RANK": "A teammate ask about your rank.",
        "TEAMMATE NETWORK PROBLEMS": "A teammate has problems with his internet connection.",
        "FRENCH TEAMMATE": "Frech teammate.",
        "TEAMMATE FULL-BUYS 2ND ROUND": "A teammate buys full in 2nd round.",
        "WIN A ROUND": "Win a round.",
        "TERRIBLE TEAM SMOKE": "A teammate smokes terribly.",
        "TERRIBLE TEAM CALL": "A teammate gives a terrible team call.",
        "TERRIBLE TEAM RUSH": "Your team rushes terribly.",
        "TERRIBLE ROTATION": "Your team rotates terribly.",
        "SURVIVE ULT": "Survive any ult that oould kill you.",
        "SURVIVE SPIKE": "Survive the explosion of the spike.",
        "INSTA-LOCK AGENT": "Insta-Lock any agent.",
        "WIN 1 ROUND WITHOUT MOVING": "You can't move for one round."
    },
    de: {
        "20 KILLS MACHEN": "Erreiche insgesamt 20 Kills in einem Spiel.",
        "GEGNER LOBEN": "Lobe einen feindlichen Spieler im Chat.",
        "FÜR SCHLECHTES SPIEL ENTSCHULDIGEN": "Entschuldige dich für einen Fehler, oder deine Spielweise.",
        "TEAM ACE": "Erziele mit deinem Team ein 'TEAM ACE'.",
        "SPIKE OFFEN PLATZIEREN": "Platziere den Spike an einer sichtbaren, offenen Stelle.",
        "3 KILLS IN EINER RUNDE": "Erziele 3 Kills in einer einzelnen Runde.",
        "ACE MIT CLASSIC": "Erzile einen Ace nur mit der Classic-Pistole.",
        "DURCH SMOKE TÖTEN": "Töte einen Feind durch eine Smoke.",
        "DURCH HEADSHOT GETÖTET WERDEN": "Sterbe durch einen Kopfschuss.",
        "2 KILLS IN EINER RUNDE": "Erziele 2 Kills in einer einzelnen Runde.",
        "ULT ÜBERLEBEN": "Überlebe eine Ultimate-Fähigkeit des Gegners.",
        "SPIKE ZUR HÄLFTE ENTSCHÄRFEN": "Entschärfe den Spike zur Hälfte.",
        "1V1 GEWINNEN": "Gewinne ein Eins gegen Eins.",
        "JEDEN SCHUSS VERFEHLEN": "Verfehle alle Schüsse.",
        "KAY/O WIEDERBELEBEN": "Belebe KAY/O wieder.",
        "KAUFEN OHNE RÜSTUNG": "Kauf eine vollständige Ausrüstung ohne Rüstung.",
        "3 MAL GEBLENDET WERDEN": "Werde 3 Mal geblendet.",
        "DURCH FÄHIGKEIT STERBEN": "Sterbe durch eine gegnerische Fähigkeit.",
        "10 KILLS MACHEN": "Erreiche insgesamt 10 Kills in einem Spiel.",
        "TRIPLE DOUBLE SCORE": "Hab zweistellige Zahlen in drei verschiedenen Statistiken.",
        "DURCH SCHROTFLINTE STERBEN": "Sterben Sie durch eine Schrotflinte.",
        "TEAMMATE LOBEN": "Loben Sie einen Teamkollegen im Chat.",
        "SCHLECHTES TEAMMIKROFON": "Teammate mit sehr schlechter Mikrofonqualität.",
        "BOTTOM FRAG": "Werde von deinem Team gecarried.",
        "BHOP AUF DIE SEITE": "Bhop auf eine beliebige Seite.", 
        "KAUFE TEAMMATE EINE OPERATOR": "Kaufe deinem Teammate eine Operator.",
        "VERURSACHE 150 SCHADEN OHNE DEN GEGNER ZU TÖTEN": "Verursache 150 Schaden an einem Gegner, ohne ihn zu töten.", 
        "STERBE DURCH SPIKE": "Sterbe durch die Explosion des Spikes.",
        "STERBE DURCH EXPLOSION": "Sterbe durch eine beliebige Explosion.",
        "FAKE EINEN PLANT": "Platziere den Spike als Bait.",
        "TÖTE EINEN GEGNER MIT DEM MESSER": "Töte einen gegnerischen Spieler mit dem Messer.",
        "30 KILLS MACHEN": "Erreiche in einer Runde 30 Kills.",
        "WERDE GECOACHED": "Ein Teammate sagt dir was du zutun hast.",
        "TÖTE DEN LETZTEN GEGNER": "Töte den letzten lebenden Gegner in der Runde.",
        "KLAUE EINEN ACE": "Klaue deinem Teammate den Ace.", 
        "MACHE EINEN SHERIFF KILL": "Töte einen gegnerischen Spieler mit der Sheriff.", 
        "EINEN ONE-TAP KILL MACHEN": "Mache einen One-Tap Kill.",
        "WERDE WÄHREND DES PLATZIERENS GETÖTET": "Werde während des platzierens des Spikes getötet.", 
        "WERDE DURCH DIE WAND GETÖTET": "Werde von einem Gegner durch eine Wand getötet.", 
        "WERDE DURCH RUN-AND-GUN GETÖTET": "Werde von einem Gegner durch Run-and-Gun getötet.",
        "HACKING VERDACHT": "Lass deine Gegner Verdacht schöpfen, dass du hackst.",
        "VERLIERE EIN 1VS1": "Verliere ein 1vs1 Duel gegen einen Gegner.",
        "VERLIERE EIN MATCH": "Verliere ein Match.",
        "VERLIERE EINE RUNDE": "Verliere eine Runde.",
        "TEAM ÜBER ROTIERT": "Dein Team rotiert zu schnell.", 
        "GEWINNE ALS ANGREIFER OHNE ZU DEN SPIKE ZU PLATZIEREN": "Gewinne eine Runde als Angreifer, ohne den Spike platziert zu haben.",
        "GEWINNE DIE VERLÄNGERUNG": "Gewinne die Verlängerung der Runde.",
        "VERSCHWENDE DEINE ULT": "Verschwende deine Ult, ohne einen Gegner getötet zu haben.", 
        "TOP FRAG MATCH": "Werde am Ende des Matches als MVP.", 
        "TOP FRAG HÄLFTE": "Sei beim Seitenwechsel an der Spitze des Scoreboards.", 
        "TOP FRAG RUNDE": "Werde während einer Runde der Top-Frag.", 
        "GIB 0 CREDS IN EINER RUNDE AUS": "Gib keine Creds während einer Runde aus.",
        "GIB ÜBER 5.000 CREDS IN EINER RUNDE AUS": "Gib über 5.000 Creds in einer einzigen Runde aus.", 
        "1 RUNDE NUR KRIECHEN": "Eine Runde lang nur kriechen.", 
        "FOLGE EINEM TEAMMATE 1 RUNDE LANG": "Folde einem beliebigen Teammate eine ganze Runde lang.", 
        "REDE 1 RUNDE IN ANDEREM AKZENT": "Rede eine Runde lang in einem anderen Akzent.",
        "BLAME EINEN TEAMMATE OHNE GRUND": "Blame deinen Teammate ohne Grund.",
        "INSTA-LOCK TEAMMATE": "Dein Teammate Insta-locked einen Agenten.", 
        "AFK TEAMMATE": "Dein Teammate ist während der Runde AFK.",
        "TOXISCHEN SPIELER REPORTEN": "Reporte einen toxischen Spieler.",
        "HEBE EINE GEGNERISCHE WAFFE AUF": "Hebe die Waffe eines Gegners auf.",
        "VERWENDE EINE SCHLECHTERE WAFFE": "Verwende eine schlechte Waffe, als du bereits hast.",
        "GEWINNE EINE PISTOLE RUNDE": "Gewinne die Pistolen Runde.",
        "VERLIERE EINE PISTOLE RUNDE": "Verliere die Pistolen Runde.",
        "VERWENDE EINE BESSERE WAFFE": "Verwende eine bessere Waffe, als du bereits hast.",
        "RIZZ EINEN TEAMMATE": "Rizz einen beliebigen Teammate im Chat oder Voice-Chat.",
        "RIZZ EINEN GEGNER": "Rizz einen beliebigen Gegner im Chat.",
        "VERLIERE 2 RUNDEN IN FOLGE": "Verliere zwei Runden in Folge.",
        "GEWINNE 2 RUNDEN IN FOLGE": "Gewinne zwei Runden in Folge.",
        "TEAMMATE FRAGT NACH RANK": "Dein Teammate fragt dich nach deinem Rank.",
        "TEAMMATE VERBINDUNGSPROBLEME": "Dein Teammate hat Verbindungsprobleme.",
        "FRANZÖSISCHER TEAMMATE": "Habe einen französischen Teammate.s",
        "TEAMMATE KAUFT 2. RUNDE": "Dein Teammate kauft in der zweiten Runde.",
        "GEWINNE EINE RUNDE": "Gewinne eine Runde.",
        "SCHLECHTER TEAM-CALL": "Ein Teammate gibt einen schlechten Call.",
        "SCHLECHTER TEAM RUSH": "Dein Team pusht schlecht.",
        "SCHLECHTES ROTIEREN": "Dein Team rotiert schlecht.",
        "ÜBERLEBE ULT": "Überlebe eine Ult, die dich getötet hätte.",
        "ÜBERLEBE DEN SPIKE": "Überlebe den Spike, wenn er explodiert.",
        "INSTA-LOCK EINEN AGENTEN": "Insta-Lock einen beliebigen Gegner am Anfang der Runde.",
        "GEWINNE 1. RUNDE OHNE DICH ZU BEWEGEN": "Gewinne eine Runde, ohne dich zu bewegen."
    }
};

let currentLanguage = 'en';

const taskMap = {
        "GET 20 KILLS": "20 KILLS MACHEN",
        "COMPLIMENT ENEMY PLAYER": "GEGNER LOBEN",
        "APOLOGIZE FOR BAD PLAY": "FÜR SCHLECHTES SPIEL ENTSCHULDIGEN",
        "TEAM ACE": "TEAM ACE",
        "PLANT SPIKE IN THE OPEN": "SPIKE OFFEN PLATZIEREN",
        "GET 3 KILLS IN A ROUND": "3 KILLS IN EINER RUNDE",
        "ACE WITH CLASSIC": "ACE MIT CLASSIC",
        "KILL THROUGH SMOKE": "DURCH SMOKE TÖTEN",
        "GET KILLED BY HEADSHOT": "DURCH HEADSHOT GETÖTET WERDEN",
        "GET 2 KILLS IN A ROUND": "2 KILLS IN EINER RUNDE",
        "SURVIVE ULT": "ULT ÜBERLEBEN",
        "DEFUSE HALF THE SPIKE": "SPIKE ZUR HÄLFTE ENTSCHÄRFEN",
        "WIN 1V1": "1V1 GEWINNEN",
        "WHIFF EVERY SHOT": "JEDEN SCHUSS VERFEHLEN",
        "REVIVE KAY/O": "KAY/O WIEDERBELEBEN",
        "BUYOUT WITH NO ARMOR": "KAUFEN OHNE RÜSTUNG",
        "GET FLASHED 3 TIMES": "3 MAL GEBLENDET WERDEN",
        "DIE TO ABILITY": "DURCH FÄHIGKEIT STERBEN",
        "GET 10 KILLS": "10 KILLS MACHEN",
        "TRIPLE DOUBLE SCORE": "TRIPLE DOUBLE SCORE",
        "DIE FROM SHOTGUN": "DURCH SCHROTFLINTE STERBEN",
        "COMPLIMENT TEAMMATE": "TEAMMATE LOBEN",
        "TERRIBLE TEAM MIC": "SCHLECHTES TEAMMIKROFON",
        "GET CARRIED": "BOTTOM FRAG",
        "BHOP TO SITE": "BHOP AUF DIE SEITE",
        "BUY TEAMMATE AN OPERATOR": "KAUFE TEAMMATE EINE OPERATOR",
        "DEAL 150 DAMAGE WITHOUT A KILL": "VERURSACHE 150 SCHADEN OHNE DEN GEGNER ZU TÖTEN",
        "DIE TO SPIKE": "STERBE DURCH SPIKE",
        "DIE TO EXPLOSION": "STERBE DURCH EXPLOSION",
        "FAKE A PLANT": "FAKE EINEN PLANT",
        "GET A KILL WITH MELEE": "TÖTE EINEN GEGNER MIT DEM MESSER",
        "GET 30 KILLS": "30 KILLS MACHEN",
        "GET COACHED": "WERDE GECOACHED",
        "GET LAST KILL IN A ROUND": "TÖTE DEN LETZTEN GEGNER",
        "STEAL AN ACE": "KLAUE EINEN ACE",
        "GET A SHERIFF KILL": "MACHE EINEN SHERIFF KILL",
        "GET A ONE-TAP KILL": "EINEN ONE-TAP KILL MACHEN",
        "GET KILLED WHILE PLANTING": "WERDE WÄHREND DES PLATZIERENS GETÖTET",
        "GET WALL-BANGED": "WERDE DURCH DIE WAND GETÖTET",
        "GET RUN-AND-GUNNED": "WERDE DURCH RUN-AND-GUN GETÖTET",
        "HACK-USATION": "HACKING VERDACHT",
        "LOSE 1V1": "VERLIERE EIN 1VS1",
        "LOSE A MATCH": "VERLIERE EIN MATCH",
        "LOSE A ROUND": "VERLIERE EINE RUNDE",
        "WHOLE TEAM OVERROTATES": "TEAM ÜBER ROTIERT",
        "WIN ATTACK WITHOUT PLANTING": "GEWINNE ALS ANGREIFER OHNE ZU DEN SPIKE ZU PLATZIEREN",
        "WIN OVERTIME": "GEWINNE DIE VERLÄNGERUNG",
        "WASTE ULT": "VERSCHWENDE DEINE ULT",
        "TOP FRAG MATCH": "TOP FRAG MATCH",
        "TOP FRAG HALF": "TOP FRAG HÄLFTE",
        "TOP FRAG ROUND": "TOP FRAG RUNDE",
        "SPEND 0 CREDS IN A ROUND": "GIB 0 CREDS IN EINER RUNDE AUS",
        "SPEND OVER 5.000 CREDS": "GIB 5.000 CREDS IN EINER RUNDE AUS",
        "ONLY CROUCH FOR ONE ROUND": "1 RUNDE NUR KRIECHEN",
        "FOLLOW A TEAMMATE 1 ROUND": "FOLGE EINEM TEAMMATE 1 RUNDE LANG",
        "TALK IN A DIFFERENT ACCENT 1 ROUND": "REDE 1 RUNDE IN ANDEREM DIALEKT",
        "BLAME A TEAMMATE FOR NO REASON": "BLAME EINEN TEAMMATE OHNE GRUND",
        "INSTA-LOCK TEAMMATE": "INSTA-LOCK TEAMMATE",
        "AFK TEAMMATE": "AFK TEAMMATE",
        "REPORT TOXIC PLAYER": "TOXISCHEN SPIELER REPORTEN",
        "PICK UP ENEMY WEAPON": "HEBE EINE GEGNERISCHE WAFFE AUF",
        "DOWNGRADE YOUR WEAPON": "VERWENDE EINE SCHLECHTERE WAFFE",
        "WIN PISTOL ROUND": "GEWINNE EINE PISTOLE RUNDE",
        "LOSE PISTOL ROUND": "VERLIERE EINE PISTOLE RUNDE",
        "UPGRADE YOUR WEAPON": "VERWENDE EINE BESSERE WAFFE",
        "RIZZ A TEAMMATE": "RIZZ EINEN TEAMMATE",
        "RIZZ AN ENEMY": "RIZZ EINEN GEGNER",
        "LOSE 2 ROUNDS IN A ROW": "VERLIERE 2 RUNDEN IN FOLGE",
        "WIN 2 ROUNDS IN A ROW": "GEWINNE 2 RUNDEN IN FOLGE",
        "TEAMMATE ASKS ABOUT YOUR RANK": "TEAMMATE FRAGT NACH RANK",
        "TEAMMATE NETWORK PROBLEMS": "TEAMMATE VERBINDUNGSPROBLEME",
        "FRENCH TEAMMATE": "FRANZÖSISCHER TEAMMATE",
        "TEAMMATE FULL-BUYS 2ND ROUND": "TEAMMATE KAUFT 2. RUNDE",
        "WIN A ROUND": "GEWINNE EINE RUNDE",
        "TERRIBLE TEAM SMOKE": "SCHLECHTER TEAM-CALL",
        "TERRIBLE TEAM CALL": "SCHLECHTER TEAM-CALL",
        "TERRIBLE TEAM RUSH": "SCHLECHTER TEAM RUSH",
        "TERRIBLE ROTATION": "SCHLECHTES ROTIEREN",
        "SURVIVE ULT": "ÜBERLEBE ULT",
        "SURVIVE SPIKE": "ÜBERLEBE DEN SPIKE",
        "INSTA-LOCK AGENT": "INSTA-LOCK EINEN AGENTEN"
};

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function generateBingoCard() {
    const bingoCard = document.getElementById('bingoCard');
    bingoCard.innerHTML = '';
    const shuffledTasks = shuffle([...tasks[currentLanguage]]);
    
    for (let i = 0; i < 25; i++) {
        const field = document.createElement('div');
        
        if (i === 12) {
            field.classList.add('freebie');
            field.innerText = "FREEBIE";
        } else {
            const task = shuffledTasks.pop();
            field.classList.add('bingo-field');
            field.innerText = task;
            field.setAttribute('title', taskDescriptions[currentLanguage][task]);
            field.addEventListener('click', () => {
                field.classList.toggle('freebie');
            });
        }
        
        bingoCard.appendChild(field);
    }
}

document.getElementById('generateNewCard').addEventListener('click', generateBingoCard);

const popup = document.getElementById("popup");
const body = document.querySelector("body");

document.getElementById("viewOptions").addEventListener("click", () => {
    const allTasksPopup = document.getElementById("allTasks");
    allTasksPopup.innerHTML = "";
    tasks[currentLanguage].forEach(task => {
        const taskItem = document.createElement("li");
        const tooltip = document.createElement("span");
        tooltip.className = "tooltiptext";
        tooltip.innerText = taskDescriptions[currentLanguage][task];
        
        const button = document.createElement("button");
        button.className = "tooltip";
        button.innerText = "ℹ️";
        button.appendChild(tooltip);
        
        taskItem.innerText = task + " ";
        taskItem.appendChild(button);
        allTasksPopup.appendChild(taskItem);
    });
    popup.style.display = "block";
});

// Funktion zum Schließen des Popups
function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

// Event Listener für das Schließen des Popups beim Klicken auf das X
document.getElementById('closePopup').addEventListener('click', closePopup);

// Event Listener für das Schließen des Popups beim Drücken der ESC-Taste
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closePopup();
    }
});

document.getElementById('english').addEventListener('click', () => {
    setLanguage('en');
});

document.getElementById('german').addEventListener('click', () => {
    setLanguage('de');
});

function setLanguage(language) {
    if (currentLanguage === language) return;
    currentLanguage = language;

    const bingoFields = document.querySelectorAll('.bingo-field');
    bingoFields.forEach(field => {
        const text = field.innerText;
        field.innerText = language === 'en' ? getKeyByValue(taskMap, text) : taskMap[text];
        field.setAttribute('title', taskDescriptions[currentLanguage][text]);
    });

    document.getElementById('title').innerText = language === 'en' ? 'VALORANT Bingo v1.1' : 'VALORANT Bingo v1.1';
    document.getElementById('viewOptions').innerText = language === 'en' ? 'View Options' : 'Optionen Ansehen';
    document.getElementById('generateNewCard').innerText = language === 'en' ? 'Generate New Card' : 'Neu Generieren';
    document.getElementById('popupTitle').innerText = language === 'en' ? 'All Tasks' : 'Alle Aufgaben';
}

function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value) || value;
}

generateBingoCard();