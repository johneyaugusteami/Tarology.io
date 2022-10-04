var card1 = document.getElementById("card1"),
    card2 = document.getElementById("card2"),
    card3 = document.getElementById("card3"),
    card4 = document.getElementById("card4"),
    card1img = document.getElementById("card1img"),
    card2img = document.getElementById("card2img"),
    card3img = document.getElementById("card3img"),
    card4img = document.getElementById("card4img"),
    card1exp = document.getElementById("card1exp"),
    card2exp = document.getElementById("card2exp"),
    card3exp = document.getElementById("card3exp"),
    card4exp = document.getElementById("card4exp");




var intuitivetarot = [
    {
        card: "0 The Fool",
        meaning: "Innocence & New beginnings! You are starting a new exciting path with unlimited potential! On this new adventure you're still innocent to all the dangers that surround you like a child running into a beautiful field of flowers, remember that snakes also live in flower fields. Does that mean we should stay out of the fields? NO but acknowledge the risks around you.",
        img: ""
    },

    {
        card: "I The Magician",
        meaning: "Creation, Manifestation & Capability! The representative of Divine Masculine Energy, the Magician says as above so below. You are an infinately capable being and whatever it is that you seek, you can have.",
        img: ""
    },

    {
        card: "II The High Priestess",
        meaning: "",
        img: ""
    },
    {
        card: "III The Empress",
        meaning: "",
        img: ""
    },
    {
        card: "IV The Emperor",
        meaning: "",
        img: ""
    },
    {
        card: "V The Hierophant",
        meaning: "",
        img: ""
    },
    {
        card: "VI The Lovers",
        meaning: "",
        img: ""
    },
    {
        card: "VII The Chariot",
        meaning: "",
        img: ""
    },
    {
        card: "VIII Strength",
        meaning: "",
        img: ""
    },
    {
        card: "IX The Hermit",
        meaning: "",
        img: ""
    },
    {
        card: "X The Wheel of Fortune",
        meaning: "",
        img: ""
    },
    {
        card: "XI Justice",
        meaning: "",
        img: ""
    },
    {
        card: "XII The Hanged Man",
        meaning: "",
        img: ""
    },
    {
        card: "XIII Death",
        meaning: "",
        img: ""
    },
    {
        card: "XIV Temperance",
        meaning: "",
        img: ""
    },
    {
        card: "XV The Devil",
        meaning: "",
        img: ""
    },
    {
        card: "XVI The Tower",
        meaning: "",
        img: ""
    },
    {
        card: "XVII The Star",
        meaning: "",
        img: ""
    },
    {
        card: "XVIII The Moon",
        meaning: "",
        img: ""
    },
    {
        card: "XIX The Sun",
        meaning: "",
        img: ""
    },
    {
        card: "XX Judgement",
        meaning: "",
        img: ""
    },
    {
        card: "XXI The World",
        meaning: "",
        img: ""
    },
    {
        card: "",
        meaning: "",
        img: ""
    },
    {
        card: "",
        meaning: "",
        img: ""
    },
    {
        card: "",
        meaning: "",
        img: ""
    },
    {
        card: "",
        meaning: "",
        img: ""
    },
    {
        card: "",
        meaning: "",
        img: ""
    },
    {
        card: "",
        meaning: "",
        img: ""
    },
    {
        card: "",
        meaning: "",
        img: ""
    },
    {
        card: "",
        meaning: "",
        img: ""
    },
    {
        card: "",
        meaning: "",
        img: ""
    },
    {
        card: "",
        meaning: "",
        img: ""
    },
    {
        card: "",
        meaning: "",
        img: ""
    },
    {
        card: "",
        meaning: "",
        img: ""
    },
    {
        card: "",
        meaning: "",
        img: ""
    },
    {
        card: "",
        meaning: "",
        img: ""
    },
    {
        card: "",
        meaning: "",
        img: ""
    },
    {
        card: "",
        meaning: "",
        img: ""
    },
    {
        card: "",
        meaning: "",
        img: ""
    },
    {
        card: "",
        meaning: "",
        img: ""
    },
    {
        card: "",
        meaning: "",
        img: ""
    },
    {
        card: "",
        meaning: "",
        img: ""
    },
    {
        card: "",
        meaning: "",
        img: ""
    },
    {
        card: "",
        meaning: "",
        img: ""
    },
    {
        card: "",
        meaning: "",
        img: ""
    },
    {
        card: "",
        meaning: "",
        img: ""
    },
    {
        card: "",
        meaning: "",
        img: ""
    },
    {
        card: "",
        meaning: "",
        img: ""
    },
    {
        card: "",
        meaning: "",
        img: ""
    },
    {
        card: "",
        meaning: "",
        img: ""
    },
    {
        card: "",
        meaning: "",
        img: ""
    },
    {
        card: "",
        meaning: "",
        img: ""
    },
    {
        card: "",
        meaning: "",
        img: ""
    },
    {
        card: "",
        meaning: "",
        img: ""
    },
    {
        card: "",
        meaning: "",
        img: ""
    },
    {
        card: "",
        meaning: "",
        img: ""
    },
    {
        card: "",
        meaning: "",
        img: ""
    },
    {
        card: "",
        meaning: "",
        img: ""
    },
    {
        card: "",
        meaning: "",
        img: ""
    },
    {
        card: "",
        meaning: "",
        img: ""
    },
    {
        card: "",
        meaning: "",
        img: ""
    },
    {
        card: "",
        meaning: "",
        img: ""
    },
    {
        card: "",
        meaning: "",
        img: ""
    },
    {
        card: "",
        meaning: "",
        img: ""
    },
    {
        card: "",
        meaning: "",
        img: ""
    },
    {
        card: "",
        meaning: "",
        img: ""
    },
    {
        card: "",
        meaning: "",
        img: ""
    },
    {
        card: "",
        meaning: "",
        img: ""
    },
    {
        card: "",
        meaning: "",
        img: ""
    },
    {
        card: "",
        meaning: "",
        img: ""
    },
    {
        card: "",
        meaning: "",
        img: ""
    },
    {
        card: "",
        meaning: "",
        img: ""
    },
    {
        card: "",
        meaning: "",
        img: ""
    },
    {
        card: "",
        meaning: "",
        img: ""
    },
    {
        card: "",
        meaning: "",
        img: ""
    },
    {
        card: "",
        meaning: "",
        img: ""
    },
    {
        card: "",
        meaning: "",
        img: ""
    },
    {
        card: "",
        meaning: "",
        img: ""
    },

]