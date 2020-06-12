const submitButton = document.getElementById('generateMadLibs');

submitButton.addEventListener('click', ()=> {
    const myForm = document.getElementById('enteredWords');
    const madLib = document.getElementById('madLib');
    const enteredWordList = document.getElementsByTagName('input');
    const storyWordList = document.getElementsByTagName('span');
    
    for (let i = 0; i < enteredWordList.length; i++) {
        storyWordList[i].innerText = enteredWordList[i].value;
    }
    myForm.classList.add('hidden');
    madLib.classList.remove('hidden');
});

