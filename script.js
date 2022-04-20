console.log('linked')

const input = document.querySelector('.input');
const inputTwo = document.querySelector('.input2');
const inputThree = document.querySelector('.input3');
const inputFour = document.querySelector('.input4');

const emojiOne = document.querySelector('.img1');
const emojiTwo = document.querySelector('.img2');
const emojiThree = document.querySelector('.img3');
const emojiFour = document.querySelector('.img4');
const emojiFive = document.querySelector('.img5');
const emojiRun = document.querySelector('.img-run');
const emojiKiss = document.querySelector('.img-kiss');

const storyOne = document.querySelector('.story-p1');
const storyTwo = document.querySelector('.story-p2');
const storyThree = document.querySelector('.story-p3');
const storyFour = document.querySelector('.story-p4');
const storyFive = document.querySelector('.story-p5');
const storyKiss = document.querySelector('.story-kiss');
const storyRun = document.querySelector('.story-run');

const button = document.querySelector('#button');
const runBtn = document.querySelector('#runBtn');
const kissBtn = document.querySelector('#kissBtn');


function nextPage(name, magicPower){
    var name = name;
    if(emojiOne.classList.contains('active')){
        console.log('function')
        emojiTwo.classList.add('active');
        emojiOne.classList.remove('active');
        storyTwo.classList.add('active');
        storyOne.classList.remove('active');
        $('.text2').append(
            `
            ${name}'s magic power was...
            `
        )
    } else if(emojiThree.classList.contains('active')){
        emojiFour.classList.add('active');
        emojiThree.classList.remove('active');
        storyFour.classList.add('active');
        storyThree.classList.remove('active');

        $('.text4').append(
            `
            One day he was approached by a frog named...
            `
        )
    } else if(emojiFour.classList.contains('active')){
        emojiFive.classList.add('active');
        emojiFour.classList.remove('active');
        storyFive.classList.add('active');
        storyFour.classList.remove('active');
        $('.text5').append(
            `
            "Great fairy prince, I need your magnificent ${magicPower} skills to help me turn back into a person!"
            `
        )
    }
}

function mostTalented(magicPower){
    console.log('most talented');
    emojiThree.classList.add('active');
    emojiTwo.classList.remove('active');
    storyThree.classList.add('active');
    storyTwo.classList.remove('active');
    $('.story-p3').append(
        `
        <p class="story text3">He was the most talented at ${magicPower} in all the land!</p>
        `
    )
}

function kissMe(){
    emojiKiss.classList.add('active');
    emojiFive.classList.remove('active');
    storyKiss.classList.add('active');
    storyFive.classList.remove('active');
}

function runAway(){
    emojiRun.classList.add('active');
    emojiFive.classList.remove('active');
    storyRun.classList.add('active');
    storyFive.classList.remove('active');
}

input.addEventListener('keyup', function(event){
    if(event.keyCode === 13){
        event.preventDefault();
        var name = document.getElementById('inputOne').value;
        nextPage(name);
    };
});

inputTwo.addEventListener('keyup', function(event){
    if(event.keyCode === 13){
        event.preventDefault();
        var magicPower = document.getElementById('inputTwo').value;
        nextPage(null, magicPower);
        mostTalented(magicPower);
    };
});

button.addEventListener('click', nextPage);

inputFour.addEventListener('keyup', function(event){
    if(event.keyCode === 13){
        event.preventDefault();
        var frogName = document.getElementById('inputFour').value;
        nextPage(frogName);
    };
});

runBtn.addEventListener('click', runAway);

kissBtn.addEventListener('click', kissMe);