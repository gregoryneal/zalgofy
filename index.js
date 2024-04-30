export default function zalgofy(text, config={}) {
    const du = [' ̍',' ̎',' ̄',' ̅',' ̿',' ̑',' ̆',' ̐',' ͒',' ͗',' ͑',' ̇',' ̈',' ̊',' ͂',' ̓',' ̈́',' ͊',' ͋',' ͌',' ̃',' ̂',' ̌',' ͐',' ́',' ̋',' ̏',' ̽',' ̉',' ͣ',' ͤ',' ͥ',' ͦ',' ͧ',' ͨ',' ͩ',' ͪ',' ͫ',' ͬ',' ͭ',' ͮ',' ͯ',' ̾',' ͛',' ͆',' ̚',];
    const dm = [' ̕',' ̛',' ̀',' ́',' ͘',' ̡',' ̢',' ̧',' ̨',' ̴',' ̵',' ̶',' ͜',' ͝',' ͞',' ͟',' ͠',' ͢',' ̸',' ̷',' ͡',];
    const dd = ['̖',' ̗',' ̘',' ̙',' ̜',' ̝',' ̞',' ̟',' ̠',' ̤',' ̥',' ̦',' ̩',' ̪',' ̫',' ̬',' ̭',' ̮',' ̯',' ̰',' ̱',' ̲',' ̳',' ̹',' ̺',' ̻',' ̼',' ͅ',' ͇',' ͈',' ͉',' ͍',' ͎',' ͓',' ͔',' ͕',' ͖',' ͙',' ͚',' ',];
    
    const defaultConfig = {
        maxAccentsUp: config.maxAccentsUp ?? 3,
        maxAccentsDown: config.maxAccentsDown ?? 3,
        maxAccentsMiddle: config.maxAccentsMiddle ?? 2,
        maxTotalAccents: config.maxTotalAccents ?? 3
    };

    let newText = text.slice().split('');

    //get a random integer between 1 and max where max > 0
    function getRandomInt(max) {
        return Math.floor((Math.random() * max) + 1);
    }

    function isAlphaNumeric(str) {
        let code = str.charCodeAt(0);
        if (!(code > 47 && code < 58) && // numeric (0-9)
            !(code > 64 && code < 91) && // upper alpha (A-Z)
            !(code > 96 && code < 123)) { // lower alpha (a-z)
            return false;
        }
        return true;
    };

    function combineWithDiacritic(letter, diacriticList) {
        const d = diacriticList[getRandomInt(diacriticList.length) - 1];
        let newLetter = d.concat('', letter);
        return newLetter.replaceAll(' ', '');
    }

    for (let i = 0; i < newText.length; i++) {
        //create new letter
        let newLetter = newText[i];
        if (!isAlphaNumeric(newLetter)) continue;

        var numAccents = 0;
        var numU = defaultConfig.maxAccentsUp;
        var numM = defaultConfig.maxAccentsMiddle;
        var numD = defaultConfig.maxAccentsDown;

        while ((numAccents <= defaultConfig.maxTotalAccents) && (numU + numM + numD > 0)) {
            let j = getRandomInt(3);
            switch (j) {
                case 1: 
                    if (numU > 0) {
                        newLetter = combineWithDiacritic(newLetter, du);
                        numAccents++;
                        numU--;
                    }
                    //add upper
                    break;
                case 2: 
                    if (numM > 0) {
                        newLetter = combineWithDiacritic(newLetter, dm);
                        numAccents++;
                        numM--;
                    }
                    //add middle
                    break;
                case 3: 
                    if (numD > 0) {
                        newLetter = combineWithDiacritic(newLetter, dd);
                        numAccents++;
                        numD--;
                    }
                    //add lower
                    break;
                default: 
                    break;
            }
        }
        newText[i] = newLetter;
    }

    return newText.join('');
}