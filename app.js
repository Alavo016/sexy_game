// Données de base : classées par mode + niveau
const data = {
  couple: {
    soft: {
      truths: [
        "Quelle est ta manière préférée de te faire câliner ?",
        "Quelle chanson te fait penser à moi ?",
        "Quand as-tu le plus ressenti mon amour ?",
        "Quel est ton souvenir le plus mignon avec moi ?",
        "Qu'est-ce que tu admires le plus chez moi ?",
        "Quelle odeur de moi tu préfères ?",
        "Quand t’es-tu senti(e) le plus proche de moi ?",
        "Quelle est ta plus grande peur en amour ?",
        "Si tu devais me donner un surnom d’amour, ce serait quoi ?",
        "Décris ton rendez-vous idéal avec moi.",
      ],
      dares: [
        "Fais-moi un bisou dans le cou.",
        "Fais-moi un câlin de 30 secondes.",
        "Envoie-moi une chanson qui te fait penser à moi.",
        "Écris-moi une phrase d’amour par SMS maintenant.",
        "Fais-moi un compliment sincère.",
        "Regarde-moi sans parler pendant 20 secondes.",
        "Envoie-moi un selfie mignon.",
        "Fais-moi rire sans utiliser de mot.",
        "Raconte notre première rencontre avec exagération.",
      ],
    },
    medium: {
      truths: [
        "As-tu déjà rêvé de moi en version sexy ?",
        "Quelle tenue sexy aimerais-tu que je porte ?",
        "As-tu déjà eu envie de me surprendre sexuellement ?",
        "Quel geste de moi te fait craquer à chaque fois ?",
        "Quel est ton fantasme romantique préféré ?",
        "Y a-t-il un endroit où tu rêves qu'on fasse l’amour ?",
        "Quelle partie de mon corps aimes-tu le plus embrasser ?",
        "Qu’est-ce qui t’allume instantanément chez moi ?",
        "Tu préfères faire l’amour doucement ou sauvagement ?",
      ],
      dares: [
        "Fais-moi un massage rapide.",
        "Envoie-moi une note vocale sexy.",
        "Décris-moi un fantasme que tu aimerais réaliser avec moi.",
        "Montre-moi ton regard le plus coquin.",
        "Fais-moi une déclaration d’amour torride.",
        "Dessine un cœur sur une partie de ton corps et montre-le-moi.",
        "Laisse-moi un message vocal en murmurant mon prénom.",
      ],
    },
    hot: {
      truths: [
        "Quelle est ta position préférée ?",
        "Qu’aimerais-tu qu’on tente ce soir ?",
        "Quel est ton plus grand fantasme réalisé ?",
        "Quel est ton endroit préféré pour faire l’amour ?",
        "Quelle est ta plus grosse envie du moment ?",
        "Quel est le moment le plus chaud qu’on ait vécu ensemble ?",
        "As-tu déjà pensé à moi dans un lieu public ?",
        "Quelle tenue te fait craquer sur moi ?",
      ],
      dares: [
        "Chuchote-moi une envie torride.",
        "Enlève un vêtement lentement.",
        "Simule un gémissement discret.",
        "Propose-moi un rôle sexy à jouer maintenant.",
        "Chante une chanson d’amour comme si tu étais excité(e).",
        "Lèche doucement ta lèvre inférieure en me regardant.",
      ],
    },
    extreme: {
      truths: [
        "Quel est ton plus grand fantasme ?",
        "Qu’as-tu déjà fait de très coquin dans un lieu public ?",
        "As-tu déjà filmé un moment intime ?",
        "Quel est le truc le plus fou que tu voudrais tester avec moi ?",
        "As-tu déjà utilisé un sextoy en couple ?",
        "As-tu déjà voulu inviter un(e) autre dans notre lit ?",
        "Quel est le jeu sexuel le plus extrême que tu accepterais d'essayer ?",
      ],
      dares: [
        "Propose un rôle-play à jouer maintenant.",
        "Fais-moi une danse très sexy.",
        "Envoie-moi une photo chaude (sans nudité explicite).",
        "Fais un strip-tease en me regardant fixement.",
        "Propose un défi sexuel à réaliser cette semaine.",
        "Décris-moi un scénario X complet à réaliser.",
      ],
    },
  },
  sexfriends: {
    soft: {
      truths: [
        "Tu préfères les câlins ou les baisers ?",
        "Quel genre de contact te rend dingue ?",
        "Quel est ton plus grand charme ?",
        "As-tu déjà été attiré(e) par un(e) ami(e) ?",
        "Quel compliment sexy t’a le plus marqué ?",
        "Quelle est ta zone érogène la plus sensible ?",
        "Qu’est-ce que tu aimes qu’on te dise en plein moment intime ?",
        "Tu préfères la tendresse ou l’intensité ?",
        "Quel regard te fait fondre ?",
        "Est-ce que tu aimes les taquineries sexy ?",
      ],
      dares: [
        "Choisis un emoji et fais une phrase sexy avec.",
        "Fais-moi un clin d’œil et mords-toi la lèvre.",
        "Chuchote une phrase coquine à l'oreille (ou en message).",
        "Fais un compliment sexy improvisé.",
        "Envoie un message audio de 5 secondes avec ta voix sensuelle.",
        "Regarde-moi dans les yeux sans rire pendant 10 secondes.",
        "Fais-moi deviner une partie de ton corps avec des indices.",
        "Décris ce que tu porterais si on était ensemble là tout de suite.",
        "Fais une photo de ta main dans une pose sexy (rien d'autre 😏).",
        "Mets un fond d’écran sexy (emoji ou image soft).",
      ],
    },
    medium: {
      truths: [
        "Tu penses à moi quand tu te touches ?",
        "As-tu une vidéo sexy dans ton téléphone ?",
        "Quel genre de message te fait grimper au mur ?",
        "Est-ce que tu aimes les jeux de rôle ?",
        "Tu fantasmes plus souvent la nuit ou en journée ?",
        "Tu préfères les caresses douces ou les griffures passionnées ?",
        "Tu as déjà essayé quelque chose d'interdit ?",
        "As-tu déjà couché sans connaître le prénom ?",
        "Tu pourrais avoir un plan régulier sans tomber amoureux(se) ?",
        "Tu préfères le plaisir lent ou rapide ?",
      ],
      dares: [
        "Décris-moi une scène sexy que tu imagines avec moi.",
        "Envoie-moi une photo suggestive.",
        "Raconte-moi ta dernière pensée coquine.",
        "Simule un appel sexy sans parler (mime).",
        "Écris une phrase très hot sans utiliser de mots crus.",
        "Fais-moi deviner ce que tu portes sans le montrer.",
        "Joue à me séduire comme dans un film.",
        "Révèle un de tes fantasmes sous forme d’énigme.",
        "Fais une mini choré sexy de 10 sec (ou mime).",
        "Envoie-moi un emoji et laisse-moi deviner ton envie.",
      ],
    },
    hot: {
      truths: [
        "As-tu déjà utilisé un sextoy ?",
        "Quel est ton endroit préféré pour un quickie ?",
        "Quelle est la chose la plus cochonne que tu aies faite ?",
        "Tu préfères donner ou recevoir du plaisir ?",
        "As-tu déjà couché avec deux personnes la même semaine ?",
        "Tu as déjà regardé un film coquin avec un(e) ami(e) ?",
        "Quelle partie de ton corps tu préfères qu'on caresse ?",
        "Tu aimes les jeux de domination ?",
        "As-tu déjà fait un strip-tease ?",
        "Quelle tenue t’excite le plus sur quelqu’un ?",
      ],
      dares: [
        "Simule un orgasme discret.",
        "Fais un strip-tease express.",
        "Mets-toi dans ta position préférée et prends une photo artistique.",
        "Fais une description torride d’un souvenir intime.",
        "Envoie une photo suggestive (sans nudité).",
        "Lèche quelque chose et fais-moi deviner quoi.",
        "Fais un son qui montre ton niveau d’envie 🔥.",
        "Révèle un fantasme interdit et explique-le.",
        "Fais un plan audio de 10 sec version coquin.",
        "Donne-moi un défi que tu aimerais me voir faire.",
      ],
    },
    extreme: {
      truths: [
        "Quel est ton kink secret ?",
        "Avec combien de personnes as-tu couché ?",
        "As-tu déjà été dans une situation à plusieurs ?",
        "Quel est ton fantasme le plus inavouable ?",
        "Quel est le lieu public le plus fou où tu as eu un moment hot ?",
        "Tu as déjà tourné une vidéo ? Tu l'as encore ?",
        "As-tu déjà dominé ou été dominé(e) ?",
        "Tu aimerais expérimenter avec qui (genre, nombre...) ?",
        "Tu accepterais une nuit sans limite ?",
        "Quel rôle aimerais-tu jouer dans un jeu sexy ?",
      ],
      dares: [
        "Montre-moi ton objet le plus sexy.",
        "Fais une vidéo de toi qui chuchote une envie coquine.",
        "Donne un ordre sexy à exécuter maintenant.",
        "Écris un scénario coquin et commence-le.",
        "Chuchote ce que tu veux que je fasse… lentement.",
        "Lèche ton doigt et dis ce que tu ferais avec.",
        "Fais une vidéo silencieuse mais torride (mime).",
        "Envoie un message qui ne contient que des emojis très explicites.",
        "Simule une scène de film X version soft.",
        "Propose un rôle-play à faire ensemble maintenant.",
      ],
    },
  },

  distance: {
    soft: {
      truths: [
        "Quelle est ta photo préférée de moi ?",
        "Si on pouvait dormir ensemble ce soir, tu ferais quoi ?",
        "Quand ressens-tu le plus mon absence ?",
        "Quel message de moi t’a le plus fait fondre ?",
        "Quel petit geste à distance te rend fou/folle ?",
        "Tu préfères un appel vidéo surprise ou un message torride ?",
        "Quelle est la dernière fois où tu as pensé à moi intensément ?",
        "Quel emoji représente le mieux notre lien ?",
        "Quelle est la première chose que tu ferais si j’étais là ?",
        "Qu’aimerais-tu que je t’envoie juste maintenant ?",
      ],
      dares: [
        "Envoie-moi un emoji pour dire que je te manque.",
        "Trouve une chanson qui décrit ton envie là maintenant.",
        "Fais un selfie mignon avec un cœur dessiné.",
        'Envoie-moi une voix douce qui dit "tu me manques".',
        "Mets ton fond d'écran en mode love et montre-le-moi.",
        "Trouve un gif romantique et envoie-le-moi.",
        "Écris une phrase d'amour avec uniquement des emojis.",
        "Fais-moi deviner l’endroit où tu voudrais m’embrasser.",
        "Prends une photo d’un objet autour de toi qui te fait penser à moi.",
      ],
    },
    medium: {
      truths: [
        "Tu dors habillé(e) ou nu(e) ?",
        "Quel message torride tu aimerais recevoir ?",
        "Tu préfères qu’on s’écrive longtemps ou qu’on s’envoie des audios courts et sexy ?",
        "As-tu déjà eu un fantasme à distance ?",
        "Quel mot doux tu adores entendre de moi ?",
        "As-tu déjà envoyé une photo un peu osée sans oser le dire ?",
        "Tu te touches parfois après m’avoir parlé ?",
        "Tu m’imagines parfois en train de te surprendre dans ton lit ?",
      ],
      dares: [
        "Envoie-moi une note vocale très sexy.",
        "Montre-moi ta tenue du moment.",
        "Fais-moi deviner ce que tu portes (sans le montrer !).",
        "Écris-moi un petit texte érotique (ou mignon) en moins de 4 lignes.",
        "Envoie un message codé sexy avec des emojis uniquement.",
        "Fais un selfie où tu mors doucement ta lèvre.",
        "Chuchote une envie dans une note vocale.",
      ],
    },
    hot: {
      truths: [
        "Quelle photo sexy voudrais-tu que je t’envoie ?",
        "Tu veux m’appeler pour un moment torride ?",
        "Quelle vidéo te donnerait envie de te toucher ?",
        "Quel serait le meilleur scénario de visio hot selon toi ?",
        "As-tu déjà fait un strip à distance ?",
        "Tu préfères les mots crus ou les gestes ?",
        "Tu as déjà fait une visio sous la douche ?",
        "Quelle partie de ton corps tu aimerais que je voie là tout de suite ?",
      ],
      dares: [
        "Fais un selfie torride (sans nudité).",
        "Envoie une phrase cochonne en 3 emojis.",
        "Lèche ton doigt lentement et filme (sans son).",
        "Montre ta bouche de façon sexy dans un selfie.",
        "Fais un audio de 10 secondes en simulant un soupir d’envie.",
        "Décris-moi une scène torride à jouer en visio.",
        "Envoie une photo de ton oreiller avec un mot coquin.",
      ],
    },
    extreme: {
      truths: [
        "T’as déjà fait un strip en visio ?",
        "Quel serait ton audio coquin idéal ?",
        "Tu as déjà joui en visio ?",
        "Quelle est la vidéo la plus chaude que tu aies envoyée ?",
        "Quel est ton plus grand fantasme à distance ?",
        "Tu accepterais une nuit entière en live hot ?",
        "Tu aimerais que je te dirige par message ?",
      ],
      dares: [
        "Envoie-moi un audio qui va me retourner la tête.",
        "Fais une vidéo muette torride.",
        "Tourne-toi lentement et filme une silhouette de dos (vêtement sexy autorisé).",
        "Propose une règle pour un strip-tease à distance.",
        "Envoie un message codé torride, que je dois décrypter.",
        "Fais une visio de 10 secondes avec une surprise sexy.",
        "Dessine un cœur sur une zone sensuelle (soft) et montre-le-moi.",
      ],
    },
  },

  secret: {
    soft: {
      truths: [
        "Si 🍑 = fesses et 🍆 =... tu dirais quoi ?",
        "Quel emoji te fait penser à moi ?",
        "Si tu devais m’envoyer un message secret maintenant, tu utiliserais quels emojis ?",
        "Tu as déjà envoyé un emoji coquin sans que la personne ne s’en rende compte ?",
        "Quel est ton emoji secret pour dire « j’ai envie de toi » ?",
        "Si tu pouvais créer un emoji pour le plaisir, ce serait quoi ?",
        "Quel combo d'emojis te fait rougir ?",
        "Quel est l’emoji qui représente le mieux ton mood amoureux aujourd’hui ?",
        "Quel emoji serait parfait pour décrire notre premier bisou ?",
        "As-tu déjà utilisé un emoji de bouffe pour un sous-entendu sexy ? 🍌🍒🍑",
      ],
      dares: [
        "Envoie un emoji à deviner.",
        "Réponds à ce message avec trois emojis qui décrivent ton envie actuelle.",
        "Écris une phrase en emojis et je devine.",
        "Trouve un gif ou sticker avec un double sens et envoie-le.",
        "Dessine un emoji sur une partie de ton corps et montre-le-moi (soft).",
        "Fais-moi deviner un mot sexy en 3 emojis.",
        "Crée une devinette mignonne avec des emojis d’animaux 🐰😺🐍.",
        "Choisis un fruit 🍓🍌🍑 et fais une mise en scène drôle et sexy avec.",
        "Envoie un selfie avec un emoji dessiné sur ton bras ou main.",
      ],
    },

    medium: {
      truths: [
        "Que signifie le combo 🍆💦 pour toi ?",
        "Quel est ton trio d'emojis coquin préféré ?",
        "As-tu déjà reçu un message codé très hot ?",
        "Quel emoji innocent caches-tu souvent dans tes sextos ?",
        "Tu préfères les phrases sexy ou les messages cryptés ?",
        "Quel est l’emoji que tu n’oses jamais envoyer ?",
        "Quel emoji représente ton humeur quand tu veux qu’on t’embrasse ? 😗👄👅",
        "Quel emoji serait notre code secret pour 'viens chez moi tout de suite' ?",
        "Quel emoji te fait sourire en pensant à notre complicité ?",
        "Quel combo pourrait résumer une nuit parfaite ensemble ?",
      ],
      dares: [
        "Écris une phrase sexy codée en emoji.",
        "Devine la position avec ces emojis : 🍑🙈💦",
        "Envoie une combinaison d’emojis et fais-moi deviner le message.",
        "Envoie une vidéo muette où tu mimes ton emoji préféré.",
        "Invente un nouveau langage d’emoji (minimum 3 symboles).",
        "Fais-moi une déclaration torride avec 5 emojis maximum.",
        "Choisis 5 emojis au hasard et invente une scène autour.",
        "Fais-moi deviner une série sexy avec des emojis 🎥🍆🔥😳",
        "Simule un message hot que tu m’enverrais en public… mais codé 😏",
      ],
    },

    hot: {
      truths: [
        "Quel emoji tu utiliserais pour me dire que tu es excité(e) ?",
        "As-tu déjà simulé un orgasme en emoji ? Lequel ?",
        "Quel emoji te donne envie de passer à l’acte ?",
        "Tu penses à quoi quand tu reçois 🔥🍑💦 ?",
        "As-tu un code secret avec un(e) ex ? (emoji only)",
        "Envoie-moi une phrase codée que seul(e) moi peut comprendre.",
        "Quel emoji représente ton plus grand fantasme ?",
        "Quel emoji te rend coquin/coquine quand je l’envoie ?",
        "Tu oserais m’envoyer une scène chaude en emojis dans la journée ?",
      ],
      dares: [
        "Envoie-moi une phrase sexy avec uniquement 4 emojis.",
        "Mime un emoji coquin sans le nommer et filme-toi.",
        "Montre-moi une scène de plaisir... uniquement avec emojis.",
        "Dessine un combo emoji sexy sur une feuille et montre-le-moi.",
        "Fais un strip imaginaire avec des emojis uniquement.",
        "Crée une devinette érotique avec des emojis.",
        "Fais une déclaration d'envie… uniquement en emojis de fruits 🍓🍌🍑",
        "Écris un poème hot de 3 lignes avec des emojis et un seul mot par ligne.",
      ],
    },

    extreme: {
      truths: [
        "Quel est ton message codé le plus chaud ?",
        "Quelle est la suite la plus osée que tu as écrite uniquement avec emojis ?",
        "Si tu devais envoyer un roman érotique en emoji, par où tu commencerais ?",
        "Quel combo d'emojis représenterait une nuit parfaite avec moi ?",
        "Quel est ton emoji pour simuler un orgasme silencieux ?",
        "Tu pourrais me faire deviner ta dernière envie sans un seul mot ?",
        "Quel emoji représenterait un strip intégral en public ? 😳🍑🚨",
      ],
      dares: [
        "Écris une scène entière avec des emojis.",
        "Compose une sextape imaginaire emoji par emoji.",
        "Fais une vidéo muette en mimant une séquence érotique codée.",
        "Fais un audio dans lequel tu lis une phrase... uniquement composée d’emojis.",
        "Invente un langage coquin avec 5 emojis (à décrypter).",
        "Crée un défi emoji extrême que je devrai relever ensuite.",
        "Fais-moi deviner une scène torride avec uniquement 6 emojis maximum.",
        "Simule une réponse à un message hot mais écris-la façon espion 🕵️‍♂️📦🍆🔒",
      ],
    },
  },
};

let totalRounds = 0;
let mode = "couple";
let niveau = "soft";
let history = [];

function showPrompt(type) {
  const resultElement = document.getElementById("result");
  resultElement.innerText = "🎲 Chargement...";

  setTimeout(() => {
    mode = document.getElementById("mode").value;
    niveau = document.getElementById("niveau").value;
    const prompts = data[mode][niveau][type];
    const prompt = prompts[Math.floor(Math.random() * prompts.length)];

    const label = type === "truths" ? "Vérité" : "Action";
    const fullPrompt = `${label} : ${prompt}`;

    resultElement.innerText = fullPrompt;
    history.push(fullPrompt);

    totalRounds++;
    updateStats();
  }, 800);
}

function showTruth() {
  showPrompt("truths");
}

function showDare() {
  showPrompt("dares");
}

function skip() {
  document.getElementById("result").innerText =
    "Défi passé. Prêt(e) pour un autre ? 😏";
}

function saveFavorite() {
  const current = document.getElementById("result").innerText;
  if (current) {
    let favs = JSON.parse(localStorage.getItem("favs")) || [];
    favs.push(current);
    localStorage.setItem("favs", JSON.stringify(favs));
    alert("Ajouté aux favoris ✅");
  }
}

function showLast() {
  if (history.length > 1) {
    document.getElementById("result").innerText =
      "🔁 Précédent : " + history[history.length - 2];
  } else {
    document.getElementById("result").innerText =
      "Aucun historique disponible.";
  }
}

function updateStats() {
  document.getElementById("stats").innerText = `Tours joués : ${totalRounds}`;
}
