var quotes = [
    { 'i will prepare and some day my chance will come.': 'abraham lincoln' },
    {
        'if you want to go fast, go alone. if you want to go far, go together.':
            'african proverb',
    },
    {
        'do not pray for an easy life, pray for the strength to endure a difficult one.':
            'bruce lee',
    },
    {
        'i think it is possible for ordinary people to choose to be extraordinary.':
            'elon musk',
    },
    {
        "when i was a little kid, i was really scared of the dark. but then i came to understand, dark just means the absence of photons in the visible wavelength--400 to 700 nanometers. then i thought, well, it's really silly to be afraid of a lack of photons. then i wasn't afraid of the dark anymore after that.":
            'elon musk',
    },
    {
        'once we realize that imperfect understanding is the human condition there is no shame in being wrong, only in failing to correct our mistakes.':
            'george soros',
    },
    {
        'do not judge me by my successes, judge me by how many times i fell down and got back up again.':
            'nelson mandela',
    },
    { 'markets are never wrong – opinions often are.': 'jesse livermore' },
    {
        "when you grow up you tend to get told that the world is the way it is and your life is just to live your life inside the world. try not to bash into the walls too much. try to have a nice family life, have fun, save a little money. that's a very limited life. life can be much broader once you discover one simple fact: everything around you that you call life was made up by people that were no smarter than you. and you can change it, you can influence it… once you learn that, you'll never be the same again.":
            'steve jobs',
    },
    {
        'fearlessness means taking the first step, even if you don’t know where it will take you. it means being driven by a higher purpose, rather than by applause. it means knowing that you reveal your character when you stand apart, more than when you stand with the crowd.':
            'tim cook',
    },
    {
        "the separation of talent and skill is one of the greatest misunderstood concepts for people who are trying to excel, who have dreams, who want to do things. talent you have naturally. skill is only developed by hours and hours and hours of beating on your craft.<br /><br /> i've never really viewed myself as particularly talented. where i excel is ridiculous, sickening work ethic. you know, while the other guy's sleeping, i'm working. while the other guy's eating, i'm working.<br /><br /> there's no easy way around it. no matter how talented you are, your talent is going to fail you if you're not skilled. if you don't study, if you don't work really hard and dedicate yourself to being better every single day, you'll never be able to communicate with people – with your artistry – the way that you want.<br /><br /> the only thing that i see that is distinctly different about me is: i'm not afraid to die on a treadmill. you might have more talent than me; you might be smarter than me. but if we get on a treadmill together, there's two things: you're getting off first, or i'm gonna die.<br /><br />it's really that simple.":
            'will smith',
    },
    { '君子不患無位，患所以立。': '孔子' },
    { '做人如果冇夢想，同條咸魚有咩分别呀？': '周星馳' },
    { '金錢係上帝，健康係財富！': '老豆' },
];
var randomNumber = Math.floor(Math.random() * quotes.length);
var quote = Object.keys(quotes[randomNumber]);

document
    .getElementById('quoter')
    .querySelector(
        '.quote-thing'
    ).innerHTML = `<blockquote class="blockquote text-monospace text-justify vision">
    ${quote[0]}
    <footer class="blockquote-footer visioner text-right">
    ${quotes[randomNumber][quote]}
    </footer>
</blockquote>`;
