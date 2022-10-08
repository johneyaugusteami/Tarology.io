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
        card4key = document.getElementById("card4key"),
        intent = document.getElementById("intent").value;


    let randCard = Math.floor(Math.random() * 78);
    let randCard2 = Math.floor(Math.random() * 78);
    let randCard3 = Math.floor(Math.random() * 78);
    let randCard4 = Math.floor(Math.random() * 78);



    console.log(intent);
    console.log("We see the truth. We hear the truth. We feel the truth. We know the truth.")
    console.log("The truth is in the cards, the cards reveal the truth.")


    var intuitivetarot = [
        {
            card: "0 The Fool",
            meaning: "Take the risk but watch your step! exuberant first steps; close to the edge, but unaware/naïve; anything can happen. 0 - number of infinite potential",
            keywords: "Beginnings, freedom, innocence, originality, adventure, idealism, spontaneity",
            img: "img/the_fool.jpg"
        },
        {
            card: "I The Magician",
            meaning: "You have what you need! You are powerful, create your inner world and the outer world will follow; Need to tap into full potential; Don't hold back; Create your own world or someone else will do it for you.",
            keywords: "Willpower, desire, creation, manifestation, resourcefulness, skill, ability, concentration",
            img: "img/the_magician.jpg"
        },
        {
            card: "II The High Priestess",
            meaning: "Listen to your intuition not emotion or logic! Need for meditation, prayer and new spiritual work. Search for answers within yourself",
            keywords: "Unconscious, intuition, mystery, spirituality, higher power, inner voice",
            img: "img/the_high_priestess.jpg"
        },
        {
            card: "III The Empress",
            meaning: "High-level of Complete love, harmony, fertility and luxury.Bring forth your ideas and devote yourself to accomplishing them. Your ideas will be successful and well taken care of",
            keywords: "Motherhood, fertility, nature, divine feminine, sensuality, nurturing, creativity, beauty, abundance",
            img: "img/the_empress.jpg"
        },
        {
            card: "IV The Emperor",
            meaning: "Discipline and obeying the rules. Successful future as long as you pursue your goals methodically and strategically. You may be put in charge of something important, called to act with wisdom, order and a clear decisive mind.",
            keywords: "Stability, structure, protection, authority, control, practicality, focus, discipline, fatherliness.",
            img: "img/the_emperor.jpg"
        },
        {
            card: "V The Hierophant",
            meaning: "Pursuit of traditional knowledge. Adapt to certain beliefs and systems, following social structures.",
            keywords: "Tradition, social groups, conventionality, conformity, education, knowledge, beliefs",
            img: "img/the_hierophant.jpg"
        },
        {
            card: "VI The Lovers",
            meaning: "Someone loves you, but you may want to make a different choice. Be true to yourself to be true and authentic to others.",
            keywords: "Love, unions, partnerships, relationships, choices, romance, balance, unity",
            img: "img/the_lovers.jpg"
        },
        {
            card: "VII The Chariot",
            meaning: "It's best to get in the Drivers seat for a while. Opposing forces that need to be controlled. Aggression may be used to help you take charge, but it may need to be reined in.",
            keywords: "Success, ambition, determination, willpower, control, self-discipline, focus",
            img: "img/the_chariot.jpg"
        },
        {
            card: "VIII Strength",
            meaning: "Use honey not vinegar. Gentle control - love and compassion. Inner strength and fortitude during times of danger and distress.",
            keywords: "Courage, bravery, confidence, compassion, self-confidence, inner power.",
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
            meaning: "Things are changing fast around you. Greater forces outside of human control are at work.",
            keywords: "Change, cycles, fate, decisive moments, luck, fortune, unexpected events",
            img: "img/wheel_of_fortune.jpg"
        },
        {
            card: "XI Justice",
            meaning: "Treat people fairly and you will be treated fairly. If you have been wronged, this card's appearance may bring you relief. If you have caused harm, this card serves as a warning. Be fair in all your deeds.",
            keywords: "Justice, karma, consequence, accountability, law, truth, honesty, integrity, cause and effect",
            img: "img/justice.jpg"
        },
        {
            card: "XII The Hanged Man",
            meaning: "a sacrifice for the better. His position is a sacrifice that needs to be made in order to progress forward, the time spent here will not be wasted. Stall certain actions to ensure you have more time to reflect on making critical decisions.",
            keywords: "Sacrifice, waiting, uncertainty, lack of direction, perspective, contemplation",
            img: "img/the_hanged_man.jpg"
        },
        {
            card: "XIII Death",
            meaning: "Accept the end of a situation. The old version of you needs to 'die' to allow the new you to be created. Let go of any unhealthy attachments.",
            keywords: "Transformation, endings, change, transition, letting go, release",
            img: "img/death.jpg"
        },
        {
            card: "XIV Temperance",
            meaning: "NEED FOR BALANCE! Be Cautious. Extremity in any situation is to be avoided. Balance outer and inner self.",
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
            meaning: "A setback causes need to rebuild. Our old truths/beliefs are no longer useful. Radical and momentous change.",
            keywords: "Disaster, destruction, upheaval, trauma, sudden change, chaos",
            img: "img/the_tower.jpg"
        },
        {
            card: "XVII The Star",
            meaning: "Healing and rebirth is directly ahead. Shows abundant blessings from the universe. You have gone and passed through a terrible life challenge without losing hope (The Tower).",
            keywords: "Hope, inspiration, positivity, faith, renewal, healing, rejuvenation",
            img: "img/the_star.jpg"
        },
        {
            card: "XVIII The Moon",
            meaning: "Don't be deceived	by the reflection in the water. The moon, your intuition, can bring you clarity and understanding in the darkness. Some hidden truth must be discovered, for what you are seeing now may be a trick of the light.",
            keywords: "Illusion, intuition, uncertainty, confusion, complexity, secrets, unconsciou",
            img: "img/the_moon.jpg"
        },
        {
            card: "XIX The Sun",
            meaning: "A wonderful experience is ahead of you. Happiness that occurs when you are in alignment with your true self. People are drawn to your warmth and energy.",
            keywords: "Happiness, success, optimism, vitality, joy, confidence, happiness, truth",
            img: "img/the_sun.jpg"
        },
        {
            card: "XX Judgement",
            meaning: "You need to (LISTEN) more! You are coming close to a significant point in your life where you must start to evaluate yourself. This is the time when the consequences of your actions will catch up to you.",
            keywords: "Self-evaluation, awakening, renewal, purpose, reflection, reckoning",
            img: "img/judgement.jpg"
        },
        {
            card: "XXI The World",
            meaning: "All your efforts are starting to pay off. You have completed a major milestone and you have built the resilience to withstand challenges. Encountering a great unity and wholeness.",
            keywords: "Completion, achievement, fulfilment, sense of belonging, wholeness, harmony",
            img: "img/the_world.jpg"
        },
        {
            card: "Ace of Pentacles",
            meaning: "Financial opportunity, job or increased pay. Understand our sphere of influence.",
            keywords: "New opportunities, resources, abundance, prosperity, security, stability, manifestation",
            img: "img/ace_of_pentacles.jpg"
        },
        {
            card: "2 of Pentacles",
            meaning: "Find balance, focus on one thing.",
            keywords: "Balancing resources, adaptation, resourcefulness, flexibility, stretching resources",
            img: "img/2_of_pentacles.jpg"
        },
        {
            card: "3 of Pentacles",
            meaning: "Recognition in the workplace is coming your way!",
            keywords: "Teamwork, shared goals, collaboration, apprenticeship, effort, pooling energy",
            img: "img/3_of_pentacles.jpg"
        },
        {
            card: "4 of Pentacles",
            meaning: "Clinging too much (let go). Can't move while guarding the coins - restrained from action because you are holding onto your possessions too tightly.",
            keywords: "Possessiveness, insecurity, hoarding, stinginess, stability, security, savings, materialism, wealth, frugality, boundaries, guardedness",
            img: "img/4_of_pentacles.jpg"
        },
        {
            card: "5 of Pentacles",
            meaning: "Left to struggle in the cold but not alone.Suggests a time of hardship and insecurity.",
            keywords: "Hardship, loss, isolation, feeling abandoned, adversity, struggle, unemployment, alienation, disgrace",
            img: "img/5_of_pentacles.jpg"
        },
        {
            card: "6 of Pentacles",
            meaning: "Be generous. Be aware of your power to give and share.",
            keywords: "Generosity, charity, community, material help, support, sharing, giving and receiving, gratitude",
            img: "img/6_of_pentacles.jpg"
        },
        {
            card: "7 of Pentacles",
            meaning: "Don't rest on what you accomplished, there's still work ahead. You are not confined to seeing short-term results only.",
            keywords: "Harvest, rewards, results, growth, progress, perseverance, patience, planning",
            img: "img/7_of_pentacles.jpg"
        },
        {
            card: "8 of Pentacles",
            meaning: "Quality is important and may be reached with learning new skills. Town in background - you have isolated yourself from distractions to fully concentrate on the task at hand.",
            keywords: "Skill, talent, craftsmanship, quality, high standards, expertise, mastery, commitment, dedication, accomplishment",
            img: "img/8_of_pentacles.jpg"
        },
        {
            card: "9 of Pentacles",
            meaning: "Self Sufficiency resulting in achievement! Through hard work you are now ready to enjoy money, leisure and material comfort.",
            keywords: "Rewarded efforts, success, achievement, independence, leisure, material security, self-sufficiency",
            img: "img/9_of_pentacles.jpg"
        },
        {
            card: "10 of Pentacles",
            meaning: "Very well off in your MATERIAL life. The decisions you make will produce positive results that last well into the future - your legacy.",
            keywords: "Legacy, roots, family, ancestry, inheritance, windfall, foundations, privilege, affluence, stability, tradition",
            img: "img/10_of_pentacles.jpg"
        },
        {
            card: "Page of Pentacles",
            meaning: "You need to focus on your work and finances. Create better habits now.",
            keywords: "Learning new behaviours, habits, patterns",
            img: "img/page_of_pentacles.jpg"
        },
        {
            card: "Knight of Pentacles",
            meaning: "Good news about your finances is coming! Hold fast through unhealthy urges",
            keywords: "Efficiency, hard work, routine",
            img: "img/knight_of_pentacles.jpg"
        },
        {
            card: "Queen of Pentacles",
            meaning: "Practising what you preach. Envision what the world is to you and choose how you'll manifest it",
            keywords: "Action, Consistency, Accountability, Reflection, REASON",
            img: "img/queen_of_pentacles.jpg"
        },
        {
            card: "King of Pentacles",
            meaning: "Your material needs are met. Exert your influence over domains you have access to.",
            keywords: "Influence, Rich, Money, Minding your own Business, Financial Know-how ",
            img: "img/king_of_pentacles.jpg"
        },
        {
            card: "Ace of Swords",
            meaning: "New idea or career! Moment in which one sees the world from a different point of view.",
            keywords: "Clarity, breakthrough, new idea, concentration, vision, force, focus, truth",
            img: "img/ace_of_swords.jpg"
        },
        {
            card: "2 of Swords",
            meaning: "Determine which thoughts you will give weight to. Don't evade your problems - face them in order to solve them.",
            keywords: "Stalemate, difficult choices, stuck in the middle, denial, hidden information",
            img: "img/2_of_swords.jpg"
        },
        {
            card: "3 of Swords",
            meaning: "Prepare for disappointment or broken heart ahead. You can minimise your pain by thinking logically. You need to allow yourself to experience sadness, anger, guilt/shame so you can heal.",
            keywords: "Heartbreak, separation, sadness, grief, sorrow, upset, loss, trauma, tears",
            img: "img/3_of_swords.jpg"
        },
        {
            card: "4 of Swords",
            meaning: "Rest, do not take action at this time. Gain strength and clarity in a quiet environment.",
            keywords: "Rest, relaxation, peace, sanctuary, recuperation, self-protection, rejuvenation",
            img: "img/4_of_swords.jpg"
        },
        {
            card: "5 of Swords",
            meaning: "Be considerate of those around you, let go of your ego. You believed it was more important to be right.",
            keywords: "Arguments, disputes, aggression, bullying, intimidation, conflict, hostility, stress",
            img: "img/5_of_swords.jpg"
        },
        {
            card: "6 of Swords",
            meaning: "Travel. You are going on a voyage soon! Sometimes the only solution is to leave the problem and start again.",
            keywords: "Moving on, departure, leaving behind, distance, accepting lessons",
            img: "img/6_of_swords.jpg"
        },
        {
            card: "7 of Swords",
            meaning: "Secretive, afraid of being trapped, may take wrong action! Instead of dealing with something you sneak away and try to go unnoticed, but things will come out.",
            keywords: "Lies, trickery, scheming, strategy, resourcefulness, sneakiness, cunning (the fox card)",
            img: "img/7_of_swords.jpg"
        },
        {
            card: "8 of Swords",
            meaning: "You feel trapped, you CAN seek help. We create these traps ourselves, so we can also find a way out of them.",
            keywords: "Trapped, restricted, victimised, paralysed, helpless, powerless, imprisonment",
            img: "img/8_of_swords.jpg"
        },
        {
            card: "9 of Swords",
            meaning: "Anxiety you imagine is worse than the reality. Create space between you and your thoughts to gain clarity, perspective and freedom from their torment.",
            keywords: "Fear, anxiety, negativity, breaking point, despair, nightmares, isolation",
            img: "img/9_of_swords.jpg"
        },
        {
            card: "10 of Swords",
            meaning: "Betrayal or end to relationship or job but pick yourself up. Take stock of all resentments, fears, grudges, and weapons formed against you to clear the backlog and release yourself.",
            keywords: "Ruin, failure, bitterness, collapse, exhaustion, dead end, victimisation, betrayal",
            img: "img/10_of_swords.jpg"
        },
        {
            card: "Page of Swords",
            meaning: "Stand your ground! Ready to attack mental activity, but must learn to develop a flexible relationship with it.",
            keywords: "Recklessness, curiosity, mental energy",
            img: "img/page_of_swords.jpg"
        },
        {
            card: "Knight of Swords",
            meaning: "Overcome fear and take action even if out of your comfort zone. Laser-like focus (e.g. mindfulness practice).",
            keywords: "Drive, speed, ambition, focus",
            img: "img/knight_of_swords.jpg"
        },
        {
            card: "Queen of Swords",
            meaning: "Great powers of analysis! Knows how to use her sword(mind) for the highest good.",
            keywords: "Complexity, perceptive, clear mindedness, level-headed",
            img: "img/queen_of_swords.jpg"
        },
        {
            card: "King of Swords",
            meaning: "Develop concentration and ability to direct and fix attention at will! Sharp intellect and clarity of mind.",
            keywords: "Intellectual, power, truth",
            img: "img/king_of_swords.jpg"
        },
        {
            card: "Ace of Cups",
            meaning: "New love in your life.",
            keywords: "Love, new feelings, emotional awakening, creativity, spirituality, intuition",
            img: "img/ace_of_cups.jpg"
        },
        {
            card: "2 of Cups",
            meaning: "Perfect understanding between two people. Someone truly understands you.",
            keywords: "Unity, partnership, attraction, connection, close bonds, joining forces, mutual respect",
            img: "img/2_of_cups.jpg"
        },
        {
            card: "3 of Cups",
            meaning: "Someone is unfaithful..close to home",
            keywords: "Friendship, community, gatherings, celebrations, group events, social events",
            img: "img/3_of_cups.jpg"
        },
        {
            card: "4 of Cups",
            meaning: "You don't like your choices.",
            keywords: "Apathy, contemplation, feeling disconnected, melancholy, boredom, indifference, discontent",
            img: "img/4_of_cups.jpg"
        },
        {
            card: "5 of Cups",
            meaning: "You need to rcover from your emotional wounds.",
            keywords: "Loss, grief, disappointment, sadness, mourning, discontent, feeling let down",
            img: "img/5_of_cups.jpg"
        },
        {
            card: "6 of Cups",
            meaning: "Happiness from someone in your past or at a distance.",
            keywords: "Nostalgia, memories, familiarity, healing, comfort, sentimentality, pleasure",
            img: "img/6_of_cups.jpg"
        },
        {
            card: "7 of Cups",
            meaning: "Need to prioritize who is important to you.",
            keywords: "Choices, searching for purpose, illusion, fantasy, daydreaming, wishful thinking, indecision",
            img: "img/7_of_cups.jpg"
        },
        {
            card: "8 of Cups",
            meaning: "Look for greener pastures. The grass is greener where you water it, unless there is no grass to begin with.",
            keywords: "Abandonment, walking away, letting go, searching for truth, leaving behind",
            img: "img/8_of_cups.jpg"
        },
        {
            card: "9 of Cups",
            meaning: "Emotional Satisfaction.",
            keywords: "Wishes coming true, contentment, satisfaction, success, achievement, recognition, pleasure",
            img: "img/9_of_cups.jpg"
        },
        {
            card: "10 of Cups",
            meaning: "Be satisfied and stop seeking a better situation.",
            keywords: "Happiness, homecomings, fulfillment, emotional stability, security, domestic harmony",
            img: "img/10_of_cups.jpg"
        },
        {
            card: "Page of Cups",
            meaning: "Social invitation coming. SAY YES & GO!",
            keywords: "Innoncence and sensitivity",
            img: "img/page_of_cups.jpg"
        },
        {
            card: "Knight of Cups",
            meaning: "Romantic invitation or emotional move.",
            keywords: "Love is a by-product of loving action",
            img: "img/knight_of_cups.jpg"
        },
        {
            card: "Queen of Cups",
            meaning: "Do not deny your emotions. FEEl them.",
            keywords: "Highly present, Sensitively attuned, Good boundaries, Genuine engagement with others",
            img: "img/queen_of_cups.jpg"
        },
        {
            card: "King of Cups",
            meaning: "Control your emotions.",
            keywords: "Compassion, control, balance",
            img: "img/king_of_cups.jpg"
        },
        {
            card: "Ace of Wands",
            meaning: "Accept what is offered. Just go for it, take the chance!",
            keywords: "Inspiration, creative spark, new initiative, new passion, enthusiasm, energy",
            img: "img/ace_of_wands.jpg"
        },
        {
            card: "2 of Wands",
            meaning: "Completion of contracts and partnership commitments.",
            keywords: "Planning, first steps, making decisions, leaving comfort zone, taking risks",
            img: "img/2_of_wands.jpg"
        },
        {
            card: "3 of Wands",
            meaning: "Explore a new path.",
            keywords: "Momentum, confidence, expansion, growth, foresight, looking ahead",
            img: "img/3_of_wands.jpg"
        },
        {
            card: "4 of Wands",
            meaning: "Marriage or acceptance by friends and family.",
            keywords: "Community, home, celebrations, reunions, parties, gatherings, stability, belonging",
            img: "img/4_of_wands.jpg"
        },
        {
            card: "5 of Wands",
            meaning: "Competition between you and another. Watch out. They may not play fair.",
            keywords: "Conflict, competition, arguments, aggression, tension, rivals, clashes of ego",
            img: "img/5_of_wands.jpg"
        },
        {
            card: "6 of Wands",
            meaning: "Victory! You won. ",
            keywords: "Success, victory, triumph, rewards, recognition, praise, acclaim, pride",
            img: "img/6_of_wands.jpg"
        },
        {
            card: "7 of Wands",
            meaning: "You feel defensive but you are in a strong position to confront fears and obstacles!",
            keywords: "Protectiveness, standing up for yourself, defending yourself, protecting territory",
            img: "img/7_of_wands.jpg"
        },
        {
            card: "8 of Wands",
            meaning: "Things are moving forward without you, do you feel left out? What things are within your control, and what things are outside your control?",
            keywords: "Movement, speed, progress, quick decisions, sudden changes, excitement",
            img: "img/8_of_wands.jpg"
        },
        {
            card: "9 of Wands",
            meaning: "Look around, protect yourself and possessions.",
            keywords: "Last stand, persistence, grit, resilience, perseverance, close to success, fatigue",
            img: "img/9_of_wands.jpg"
        },
        {
            card: "10 of Wands",
            meaning: "Don't burn out on responsibilities.",
            keywords: "Burden, responsibility, duty, stress, obligation, burning out, struggles.",
            img: "img/10_of_wands.jpg"
        },
        {
            card: "Page of Wands",
            meaning: "On the brink of a new creative project and vision.",
            keywords: "Exploration, excitement, freedom",
            img: "img/page_of_wands.jpg"
        },
        {
            card: "Knight of Wands",
            meaning: "Moving house or job soon or in the process.",
            keywords: "Action, adventure, fearlessness",
            img: "img/knight_of_wands.jpg"
        },
        {
            card: "Queen of Wands",
            meaning: "How do we nourish ourselves and others? How do we generate warmth and light?",
            keywords: "Confident, courageous, determined",
            img: "img/queen_of_wands.jpg"
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
    card1img.src = intuitivetarot[randCard].img;
    card2name.innerText = intuitivetarot[randCard2].card;
    card2mean.innerText = intuitivetarot[randCard2].meaning;
    card2key.innerText = intuitivetarot[randCard2].keywords;
    card2img.src = intuitivetarot[randCard2].img;
    card3name.innerText = intuitivetarot[randCard3].card;
    card3mean.innerText = intuitivetarot[randCard3].meaning;
    card3key.innerText = intuitivetarot[randCard3].keywords;
    card3img.src = intuitivetarot[randCard3].img;
    card4name.innerText = intuitivetarot[randCard4].card;
    card4mean.innerText = intuitivetarot[randCard4].meaning;
    card4key.innerText = intuitivetarot[randCard4].keywords;
    card4img.src = intuitivetarot[randCard4].img;

}