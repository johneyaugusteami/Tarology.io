function readTarot() {


    var card1name = document.getElementById("card1name"),
        card2name = document.getElementById("card2name"),
        card3name = document.getElementById("card3name"),
        card4name = document.getElementById("card4name"),
        card1img = document.getElementById("card1img"),
        card2img = document.getElementById("card2img"),
        card3img = document.getElementById("card3img"),
        card4img = document.getElementById("card4img"),
        card1mean = document.getElementById("card1mean"),
        card2mean = document.getElementById("card2mean"),
        card3mean = document.getElementById("card3mean"),
        card4mean = document.getElementById("card4mean"),
        card1key = document.getElementById("card1key"),
        card2key = document.getElementById("card2key"),
        card3key = document.getElementById("card3key"),
        card4key = document.getElementById("card4key");


    let randCard = Math.floor(Math.random() * 78);
    let randCard2 = Math.floor(Math.random() * 78);
    let randCard3 = Math.floor(Math.random() * 78);
    let randCard4 = Math.floor(Math.random() * 78);






    var intuitivetarot = [
        {
            card: "0 The Fool",
            meaning: "Take the risk but watch your step!",
            keywords: "Beginnings, freedom, innocence, originality, adventure, idealism, spontaneity",
            img: "img/the_fool.jpg"
        },
        {
            card: "I The Magician",
            meaning: "You have what you need!",
            keywords: "Willpower, desire, creation, manifestation, resourcefulness, skill, ability, concentration",
            img: "img/the_magician.jpg"
        },
        {
            card: "II The High Priestess",
            meaning: "Listen to your intuition not emotion or logic!",
            keywords: "Unconscious, intuition, mystery, spirituality, higher power, inner voice",
            img: "img/the_high_priestess.jpg"
        },
        {
            card: "III The Empress",
            meaning: "High-level of Complete love, harmony, fertility and luxury.",
            keywords: "Motherhood, fertility, nature, divine feminine, sensuality, nurturing, creativity, beauty, abundance",
            img: "img/the_empress.jpg"
        },
        {
            card: "IV The Emperor",
            meaning: "Discipline and obeying the rules.",
            keywords: "Stability, structure, protection, authority, control, practicality, focus, discipline, fatherliness",
            img: "img/the_emperor.jpg"
        },
        {
            card: "V The Hierophant",
            meaning: "Pursuit of traditional knowledge. Adapt to certain beliefs and systems, following social structures",
            keywords: "Tradition, social groups, conventionality, conformity, education, knowledge, beliefs",
            img: "img/the_hierophant.jpg"
        },
        {
            card: "VI The Lovers",
            meaning: "Someone loves you, but you may want to make a different choice. Be true to yourself to be true and authentic to others",
            keywords: "Love, unions, partnerships, relationships, choices, romance, balance, unity",
            img: "img/the_lovers.jpg"
        },
        {
            card: "VII The Chariot",
            meaning: "It's best to get in the Drivers seat for a while. Opposing forces that need to be controlled",
            keywords: "Success, ambition, determination, willpower, control, self-discipline, focus",
            img: "img/the_chariot.jpg"
        },
        {
            card: "VIII Strength",
            meaning: "Use honey not vinegar. Gentle control - love and compassion",
            keywords: "Courage, bravery, confidence, compassion, self-confidence, inner power",
            img: "img/strength.jpg"
        },
        {
            card: "IX The Hermit",
            meaning: "Take time alone to think. Walks through dark night of unconscious, with destination being his home, his self",
            keywords: "Self-reflection, introspection, contemplation, withdrawal, solitude, search for self, search for truth",
            img: "img/the_hermit.jpg"
        },
        {
            card: "X The Wheel of Fortune",
            meaning: "Things are changing fast around you. Greater forces outside of human control are at work",
            keywords: "Change, cycles, fate, decisive moments, luck, fortune, unexpected events",
            img: "img/the_wheel_of_fortune.jpg"
        },
        {
            card: "XI Justice",
            meaning: "Treat people fairly and you will be treated fairly. If you have been wronged, this card's appearance may bring you relief. If you have caused harm, this card serves as a warning",
            keywords: "Justice, karma, consequence, accountability, law, truth, honesty, integrity, cause and effect",
            img: "img/justice.jpg"
        },
        {
            card: "XII The Hanged Man",
            meaning: "a sacrifice for the better. His position is a sacrifice that needs to be made in order to progress forward, the time spent here will not be wasted",
            keywords: "Sacrifice, waiting, uncertainty, lack of direction, perspective, contemplation",
            img: "img/the_hanged_man.jpg"
        },
        {
            card: "XIII Death",
            meaning: "Accept the end of a situation. The old version of you needs to 'die' to allow the new you to be created",
            keywords: "Transformation, endings, change, transition, letting go, release",
            img: "img/death.jpg"
        },
        {
            card: "XIV Temperance",
            meaning: "NEED FOR BALANCE! Be Cautious. Extremity in any situation is to be avoided",
            keywords: "Balance, peace, patience, moderation, calm, tranquility, harmony, serenity",
            img: "img/temperance.jpg"
        },
        {
            card: "XV The Devil",
            meaning: "Be aware of the Puppeteer in your life! You have feelings of entrapment, emptiness and lack of fulfillment in your life. Puppeteer could be addiction, a person, or an ideology.",
            keywords: "Oppression, addiction, obsession, dependency, excess, powerlessness, limitations",
            img: "img/the_devil.jpg"
        },
        {
            card: "XVI The Tower",
            meaning: "A setback causes need to rebuild. Our old truths/beliefs are no longer useful",
            keywords: "Disaster, destruction, upheaval, trauma, sudden change, chaos",
            img: "img/the_tower.jpg"
        },
        {
            card: "XVII The Star",
            meaning: "Healing and rebirth is directly ahead. Shows abundant blessings from the universe",
            keywords: "Hope, inspiration, positivity, faith, renewal, healing, rejuvenation",
            img: "img/the_star.jpg"
        },
        {
            card: "XVIII The Moon",
            meaning: "Don't be deceived	by the reflection in the water. The moon, your intuition, can bring you clarity and understanding in the darkness",
            keywords: "Illusion, intuition, uncertainty, confusion, complexity, secrets, unconsciou",
            img: "img/the_moon.jpg"
        },
        {
            card: "XIX The Sun",
            meaning: "A wonderful experience is ahead of you. Happiness that occurs when you are in alignment with your true self",
            keywords: "Happiness, success, optimism, vitality, joy, confidence, happiness, truth",
            img: "img/the_sun.jpg"
        },
        {
            card: "XX Judgement",
            meaning: "You need to (LISTEN) more! You are coming close to a significant point in your life where you must start to evaluate yourself.",
            keywords: "Self-evaluation, awakening, renewal, purpose, reflection, reckoning",
            img: "img/judgement.jpg"
        },
        {
            card: "XXI The World",
            meaning: "All your efforts are starting to pay off. You have completed a major milestone and you have built the resilience to withstand challenges",
            keywords: "Completion, achievement, fulfilment, sense of belonging, wholeness, harmony",
            img: "the_world.jpg"
        },

        ///PICK UP HERE ////////////////////////////////////////////////////////////////////
        ///////////////////////////////////////////////////////////////
        //////////////////////////////////////////////////
        /////////////////////////////////////////////////////////////////////////
        /////////////////////////////////////////////////////////////////


        {
            card: "Ace of Pentacles",
            meaning: "Financial opportunity, job or increased pay.",
            keywords: "New opportunities, resources, abundance, prosperity, security, stability, manifestation",
            img: ""
        },
        {
            card: "2 of Pentacles",
            meaning: "Find balance, focus on one thing.",
            keywords: "Balancing resources, adaptation, resourcefulness, flexibility, stretching resources",
            img: ""
        },
        {
            card: "3 of Pentacles",
            meaning: "Recognition in the workplace is coming your way!",
            keywords: "Teamwork, shared goals, collaboration, apprenticeship, effort, pooling energy",
            img: ""
        },
        {
            card: "4 of Pentacles",
            meaning: "Clinging too much (let go).",
            keywords: "Possessiveness, insecurity, hoarding, stinginess, stability, security, savings, materialism, wealth, frugality, boundaries, guardedness",
            img: ""
        },
        {
            card: "5 of Pentacles",
            meaning: "Left to struggle in the cold but not alone.",
            keywords: "Hardship, loss, isolation, feeling abandoned, adversity, struggle, unemployment, alienation, disgrace",
            img: ""
        },
        {
            card: "6 of Pentacles",
            meaning: "Be generous.",
            keywords: "Generosity, charity, community, material help, support, sharing, giving and receiving, gratitude",
            img: ""
        },
        {
            card: "7 of Pentacles",
            meaning: "Don't rest on what you accomplished, there's still work ahead.",
            keywords: "Harvest, rewards, results, growth, progress, perseverance, patience, planning",
            img: ""
        },
        {
            card: "8 of Pentacles",
            meaning: "Quality is important and may be reached with learning new skills.",
            keywords: "Skill, talent, craftsmanship, quality, high standards, expertise, mastery, commitment, dedication, accomplishment",
            img: ""
        },
        {
            card: "9 of Pentacles",
            meaning: "Self Sufficiency resulting in achievement!",
            keywords: "Rewarded efforts, success, achievement, independence, leisure, material security, self-sufficiency",
            img: ""
        },
        {
            card: "10 of Pentacles",
            meaning: "Very well off in your MATERIAL life.",
            keywords: "Legacy, roots, family, ancestry, inheritance, windfall, foundations, privilege, affluence, stability, tradition",
            img: ""
        },
        {
            card: "Page of Pentacles",
            meaning: "You need to focus on your work and finances.",
            keywords: "Learning new behaviours, habits, patterns",
            img: ""
        },
        {
            card: "Knight of Pentacles",
            meaning: "Good news about your finances is coming!",
            keywords: "Efficiency, hard work, routine",
            img: ""
        },
        {
            card: "Queen of Pentacles",
            meaning: "Practising what you preach.",
            keywords: "Action, Consistency, Accountability, Reflection, REASON",
            img: ""
        },
        {
            card: "King of Pentacles",
            meaning: "Your material needs are met.",
            keywords: "Influence, Rich, Money, Minding your own Business, Financial Know-how ",
            img: ""
        },
        {
            card: "Ace of Swords",
            meaning: "New idea or career!",
            keywords: "Clarity, breakthrough, new idea, concentration, vision, force, focus, truth",
            img: ""
        },
        {
            card: "2 of Swords",
            meaning: "Set strong boundaries with others.",
            keywords: "Stalemate, difficult choices, stuck in the middle, denial, hidden information",
            img: ""
        },
        {
            card: "3 of Swords",
            meaning: "Prepare for disappointment or broken heart ahead if you don't make changes..",
            keywords: "Heartbreak, separation, sadness, grief, sorrow, upset, loss, trauma, tears",
            img: ""
        },
        {
            card: "4 of Swords",
            meaning: "Rest, do not take action at this time.",
            keywords: "Rest, relaxation, peace, sanctuary, recuperation, self-protection, rejuvenation",
            img: ""
        },
        {
            card: "5 of Swords",
            meaning: "Be considerate of those around you, let go of your ego",
            keywords: "Arguments, disputes, aggression, bullying, intimidation, conflict, hostility, stress",
            img: ""
        },
        {
            card: "6 of Swords",
            meaning: "Travel. You are going on a voyage soon!",
            keywords: "Moving on, departure, leaving behind, distance, accepting lessons",
            img: ""
        },
        {
            card: "7 of Swords",
            meaning: "Secretive, afraid of being trapped, may take wrong action!",
            keywords: "Lies, trickery, scheming, strategy, resourcefulness, sneakiness, cunning (the fox card)",
            img: ""
        },
        {
            card: "8 of Swords",
            meaning: "You feel trapped, you CAN seek help.",
            keywords: "Trapped, restricted, victimised, paralysed, helpless, powerless, imprisonment",
            img: ""
        },
        {
            card: "9 of Swords",
            meaning: "Anxiety you imagine is worse than the reality.",
            keywords: "Fear, anxiety, negativity, breaking point, despair, nightmares, isolation",
            img: ""
        },
        {
            card: "10 of Swords",
            meaning: "Betrayal or end to relationship or job but pick yourself up.",
            keywords: "Ruin, failure, bitterness, collapse, exhaustion, dead end, victimisation, betrayal",
            img: ""
        },
        {
            card: "Page of Swords",
            meaning: "Stand your ground!",
            keywords: "Recklessness, curiosity, mental energy",
            img: ""
        },
        {
            card: "Knight of Swords",
            meaning: "Overcome fear and take action even if out of your comfort zone.",
            keywords: "Drive, speed, ambition, focus",
            img: ""
        },
        {
            card: "Queen of Swords",
            meaning: "Great powers of analysis!",
            keywords: "Complexity, perceptive, clear mindedness, level-headed",
            img: ""
        },
        {
            card: "King of Swords",
            meaning: "Develop concentration and ability to direct and fix attention at will!",
            keywords: "Intellectual, power, truth",
            img: ""
        },
        {
            card: "Ace of Cups",
            meaning: "New love in your life.",
            keywords: "Love, new feelings, emotional awakening, creativity, spirituality, intuition",
            img: ""
        },
        {
            card: "2 of Cups",
            meaning: "Perfect understanding between two people. Someone truly understands you.",
            keywords: "Unity, partnership, attraction, connection, close bonds, joining forces, mutual respect",
            img: ""
        },
        {
            card: "3 of Cups",
            meaning: "Someone is unfaithful..close to home",
            keywords: "Friendship, community, gatherings, celebrations, group events, social events",
            img: ""
        },
        {
            card: "4 of Cups",
            meaning: "You don't like your choices.",
            keywords: "Apathy, contemplation, feeling disconnected, melancholy, boredom, indifference, discontent",
            img: ""
        },
        {
            card: "5 of Cups",
            meaning: "You need to rcover from your emotional wounds.",
            keywords: "Loss, grief, disappointment, sadness, mourning, discontent, feeling let down",
            img: ""
        },
        {
            card: "6 of Cups",
            meaning: "Happiness from someone in your past or at a distance.",
            keywords: "Nostalgia, memories, familiarity, healing, comfort, sentimentality, pleasure",
            img: ""
        },
        {
            card: "7 of Cups",
            meaning: "Need to prioritize who is important to you.",
            keywords: "Choices, searching for purpose, illusion, fantasy, daydreaming, wishful thinking, indecision",
            img: ""
        },
        {
            card: "8 of Cups",
            meaning: "Look for greener pastures. The grass is greener where you water it, unless there is no grass to begin with.",
            keywords: "Abandonment, walking away, letting go, searching for truth, leaving behind",
            img: ""
        },
        {
            card: "9 of Cups",
            meaning: "Emotional Satisfaction.",
            keywords: "Wishes coming true, contentment, satisfaction, success, achievement, recognition, pleasure",
            img: ""
        },
        {
            card: "10 of Cups",
            meaning: "Be satisfied and stop seeking a better situation.",
            keywords: "Happiness, homecomings, fulfillment, emotional stability, security, domestic harmony",
            img: ""
        },
        {
            card: "Page of Cups",
            meaning: "Social invitation coming. SAY YES & GO!",
            keywords: "Innoncence and sensitivity",
            img: ""
        },
        {
            card: "Knight of Cups",
            meaning: "Romantic invitation or emotional move.",
            keywords: "Love is a by-product of loving action",
            img: ""
        },
        {
            card: "Queen of Cups",
            meaning: "Do not deny your emotions. FEEl them.",
            keywords: "Highly present, Sensitively attuned, Good boundaries, Genuine engagement with others",
            img: ""
        },
        {
            card: "King of Cups",
            meaning: "Control your emotions.",
            keywords: "Compassion, control, balance",
            img: ""
        },
        {
            card: "Ace of Wands",
            meaning: "Accept what is offered. Just go for it, take the chance!",
            keywords: "Inspiration, creative spark, new initiative, new passion, enthusiasm, energy",
            img: ""
        },
        {
            card: "2 of Wands",
            meaning: "Completion of contracts and partnership commitments.",
            keywords: "Planning, first steps, making decisions, leaving comfort zone, taking risks",
            img: ""
        },
        {
            card: "3 of Wands",
            meaning: "Explore a new path.",
            keywords: "Momentum, confidence, expansion, growth, foresight, looking ahead",
            img: ""
        },
        {
            card: "4 of Wands",
            meaning: "Marriage or acceptance by friends and family.",
            keywords: "Community, home, celebrations, reunions, parties, gatherings, stability, belonging",
            img: ""
        },
        {
            card: "5 of Wands",
            meaning: "Competition between you and another. Watch out. They may not play fair.",
            keywords: "Conflict, competition, arguments, aggression, tension, rivals, clashes of ego",
            img: ""
        },
        {
            card: "6 of Wands",
            meaning: "Victory! You won. ",
            keywords: "Success, victory, triumph, rewards, recognition, praise, acclaim, pride",
            img: ""
        },
        {
            card: "7 of Wands",
            meaning: "You feel defensive but you are in a strong position to confront fears and obstacles!",
            keywords: "Protectiveness, standing up for yourself, defending yourself, protecting territory",
            img: ""
        },
        {
            card: "8 of Wands",
            meaning: "Things are moving forward without you, do you feel left out? What things are within your control, and what things are outside your control?",
            keywords: "Movement, speed, progress, quick decisions, sudden changes, excitement",
            img: ""
        },
        {
            card: "9 of Wands",
            meaning: "Look around, protect yourself and possessions.",
            keywords: "Last stand, persistence, grit, resilience, perseverance, close to success, fatigue",
            img: ""
        },
        {
            card: "10 of Wands",
            meaning: "Don't burn out on responsibilities.",
            keywords: "Burden, responsibility, duty, stress, obligation, burning out, struggles",
            img: ""
        },
        {
            card: "Page of Wands",
            meaning: "On the brink of a new creative project and vision",
            keywords: "Exploration, excitement, freedom",
            img: ""
        },
        {
            card: "Knight of Wands",
            meaning: "Moving house or job soon or in the process.",
            keywords: "Action, adventure, fearlessness",
            img: ""
        },
        {
            card: "Queen of Wands",
            meaning: "How do we nourish ourselves and others? How do we generate warmth and light?",
            keywords: "Confident, courageous, determined",
            img: ""
        },
        {
            card: "King of Wands",
            meaning: "Prioritize understanding people first. Stop Judging others so hard.",
            keywords: "Big picture, leader, overcoming challenges",
            img: "img/king_of_wands.jpg"
        },

    ]

    card1name.innerText = intuitivetarot[randCard].card;
    card1mean.innerText = intuitivetarot[randCard].meaning;
    card1key.innerText = intuitivetarot[randCard].keywords;
    //card1img.src = intuitivetarot[randcard].img;
    card2name.innerText = intuitivetarot[randCard2].card;
    card2mean.innerText = intuitivetarot[randCard2].meaning;
    card2key.innerText = intuitivetarot[randCard2].keywords;
    //card2img.src = intuitivetarot[randcard2].img;
    card3name.innerText = intuitivetarot[randCard3].card;
    card3mean.innerText = intuitivetarot[randCard3].meaning;
    card3key.innerText = intuitivetarot[randCard3].keywords;
    //card3img.src = intuitivetarot[randcard3].img;
    card4name.innerText = intuitivetarot[randCard4].card;
    card4mean.innerText = intuitivetarot[randCard4].meaning;
    card4key.innerText = intuitivetarot[randCard4].keywords;
    //card4img.src = intuitivetarot[randcard4].img;


}