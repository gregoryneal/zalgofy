# About
Zalgofy is an ES compatible library that renders text in with the classic "zalgo" pattern. 
Basically it will transform text that looks like this:
>Random text 1234

into something that looks like this:

>̴̘̼̿R̳ͯ͂͢ȁ̙́ń̵̪̇d̦̟͛͟ó̷͕m ̰̲͑̽t̷̲̀͆ė͓͊͘x̶̬ͣ̚t ͓ͦͥ͝1̻̯̄͞2͍̗̎3̜͎͑͞4

# Install
In your node project open a terminal within the project directory and type:
```
npm install zalgofy
```
Then in your project you can import it like:
```
import zalgofy from 'zalgofy';

...

console.log(zalgofy('Random Text 1234'));
```
which should output
>̴̄̕ͅȒ̶̖͘a̲ͬͬ̕ṉ̻́d̴ͤ̃͘o̰̗͂̈m ̶͉̤̋țͮ͠ͅe̸̞͌̈x͖͊ͯ͞t ̭́ͩͭ1͈͌́̇2̝͉ͭ̕3̶ͥ̂ͅ4

# Details
Each time you run `zalgofy()` the diacritical marks will look a bit different, they are randomly applied.
You can pass a configuration object into `zalgofy()` to have more control over the number of diacritics applied to the letters.

```
let config = {
    maxAccentsUp: 3,
    maxAccentsDown: 3,
    maxAccentsMiddle: 2,
    maxTotalAccents: 3
};
```

Diacritical marks will either be above the letter, in the middle, or below the letter. On each letter the algorithm will try to place
`maxTotalAccents` number of diacritical marks. The number of marks from the upper group will not exceed `maxAccentsUp`, similarly for
middle and lower groups.

To start getting crazy you wanna do something like this:

```
let config = {
    maxAccentsUp: 100,
    maxAccentsDown: 100,
    maxAccentsMiddle: 100,
    maxTotalAccents: 100
};

console.log(zalgofy('random text 1234', config));
```
≯̸̵̸̸̡̢̡̨̧̛̛̛͇͓̠̰̞̤̺͚̺͈̦͎͚͍͈̳̘͔̩̯̺̰̙͖̝͖͈̥̳̹̻̩̘̲̤̭ͨ͑ͬ̇̅̐ͯ̋ͩ̇̉̑̍ͫͧ̌̂ͭ̇̉́̾̌ͫ͑ͧ̿ͤ͋ͨ̋͆̿̍͊̉̍̈́̌ͣ͌͂́ͦ͘̕͢͜͠͝ͅŖ̡̧̨̛̛̛͖̫͈͖̦̰͍̫̺̦̜͕̟̺̘̝͖̼̜̺͈̼̙̤̺͚̰̜̺̳̻͎͇͍̹͚̞͓͈̜͍̐ͦ̈̍ͪ̋̅͌ͣ͋ͦͤ͌̄ͩͤ̋̉̊ͣ͊̽ͪ́ͦ̀̇ͬͮ̃͑̽̾̓̀͛̾̽͌ͫ̕͘͟͜͡͡͡͠͞͞ͅa̵̷̸̶̴̴̶̡̨̢̛̛͓͔͚̦̺͖̝͓͙̫̞̫̤͉͔̠͙̮͇̥̹͈̫̟̟͕͕͙̩̻̺̹̰̲̩̰͉̫̙̟̤͔̮̞̥̐̈́ͯ̃͐͋̐ͫ̌͂̆ͫͯ̅͋̊̌ͬͣ̇̊́̽͛͒̄ͪ̄̈́͛ͫ̀ͩ̊̀́̿̄̕͘͞͡ņ̵̵̴̷̸̵̷̷̴̵̴̶̯̰̙̹͎͖̠̯͉̞̮̬͓̳̪̻̞̹̲̤̪̲͇̭̤̳̫͓̹̙͍̞͚̖̬̼͍̤̀ͭͤ̇̉͌͂̎ͫͧͥ͒̅ͮ͐́͑̄̌̍̂̈́ͭ̄ͥ̑̆̾̂̑ͫ̉̍̃ͪ̈ͨ̐̄ͣ̂͌̕̚͢͟͜͝͝d̴̵̸̡̢̨̨̢͎͙̘͚͓̱͍͙͇̜̻̤̺̟̻̝͖͔̻̻͚̬̼͈̮̰͙̤͔̳̞͈̳̩̱̮̻̍̈́ͩͬͨ̏̓͗ͨ̾ͥͪ̓̍̆͛ͩͬ̈͐̌̄̾̿͆̿̏͆̀̋́́̊̾͂̊ͧͪ̋̅̀͋ͧ̚͜͟͝͞͠͝͝͝ͅͅơ̸̷̡̧̨̡̢̡̡̛̛̼̹̪̙͎̳͔̱̞̤͔̟͉̝͉̲͎̹̲̲̺͖͉̪̪̹̲̰̠̗̻̪̞͓̝͂̐̾͋͌̃̏̃̓ͭ̈́́͛́ͮ͌̈̎ͫ͒̍̈́́ͦͩ̑̃̍̑ͨͧͣ̑͋̓̎̄̎̐͛̂̇̆̿̋̚̕͟͜͟͡͠m ̶̶̷̵̸̡̢̡̢̡̧͙̟͉͕͚̦̥̫͓̟͍͉̖̘̰̠̰̟̳̺̖̜͈̟͓̩͎͔͎̭̞̮̤̙̗͕͖̰̪̙̭̖̗̤̬ͥͫͦ̊̿̓͋ͮͫ͊́̈̐̇́ͭͥͫͨ̂̐̿̋͊̌ͨͧ̿̓̄̈́ͫ́͂ͥ͆ͯ̕̕͜͠͡͞͠t̸̸̴̵̴̷̵̷̴̶̷̨̨͎̮͓̙͕̯̝̝͕̰͚̼̤̞̥̬̪̰̝̻̲̫̪͚̦͖̾͒͌͗̽ͭ̄͛̌͑̏̋͒ͦ̊ͣͨ̊ͣ̑͛ͬ͊͐̎̓͆͂̈̐ͨ̊̂ͦ́͒ͪ̇̑̉ͨ̽͋̊̃ͨͮͮ̿̑́́ͧ̚͘͜͠͝͞ͅͅe̶̷̵̵̴̢̨̨̥͓͎̺͇͖̹͈̱̲͎̤̱̖̘̺̝͙̞͍̠̼͎͍̲̠͇͉͕̞̳̞̞̤͕͎̳̠̥̼̺̥͉͌ͪ͂ͮ̐ͬ̾͛̽̿̇͐ͯ̑̆ͯ̽͊ͯͥ͌̑̀ͩͪ͌͑͗͑̇̂ͬ́̾̐̀͂͑̾̀̂͘͜͢͟͜͠͡͡x̷̸̵̸̵̴̴̸̡͍̱̥̩͕̫̳͔̻̦͓̪̫̪͎͉̩͈̺̻̠̫͙̩̘̰͎̟̫͖͍̳͖̲̜̦̪̬̗̼̻̞̓̄͊͐̓ͪ͂̑̈̑̈́̽̄̑͌͒ͨͨ̍̉ͬ̓̓̃̓͗̿̈́̓ͫ̑ͣ̇̇̍̓̀̕͘͢͟͜͜͜͜͠͠ͅt ̵̸̨̢̨̡̨̛̱̜̖̠̫͔͎͈̩̺͈̭͔̻̯̹̜̤̳̮͖̼̥̝̗̖̝͕̬̜̭͚̗̻̬̳͓̲̫̰͉ͩ̍̄̈͊̊̃ͨ̅̐ͬ͑ͫ̉ͨ͌̆͌̆͌ͬͦͧͬ̅̈́ͯ̏ͥ̅͒ͭ̋̄ͦ̈ͫ͘͟͢͜͢͟͡͡͝͞͞͝ͅͅͅ1̸̸̷̸̸̵̴̸̧̧̢̛̠̲̥̱̩̺͇͚̤͓̤̝̦̹̬̞̠̩̩̱͍͙̯̰̺̙̺͖̦͈͚̭͎̹̰̩̲͖̘̗̑ͩ̈́̉͂́̇̽̌ͥ̃͛ͩ̊ͤ͊̊̍ͬ̓ͩ̃̃ͭ͛ͬ͑ͨͦ̂ͩͨ͛͊̎̈́͌̚̕̕͢͢͜͡͝͠ͅ2̴̸̷̴̸̵̶̵̧̢̧̨̨̭̩͚̖̤̺͚͕͈͙͔̹̤̹͔̼͔̻͈̱̬͎̟͎̯͉̻͉̲͎̭̋̑ͫ͋͑͂͒ͬ̿ͩ͌͒͋̐ͯͪ̑̑ͬ̇͗ͨ̎͑̊̆̐̌͒ͯ̄͂ͬ̈́ͯ͒ͬ̾ͩ̎̀̽ͪ̎̐̐́̍̅̚̕͘͞͠͡3̸̷̧̨̨̢̡̨̞̗̦̘̹͎̼͔̭̟̭̟̩̘͖͉̹̼̦̭̘͈̜͔̟̙̯̙̹̭͔̲͉͎̰̙̜̯͕̭̭ͪͦͥ̆͗̏ͦ̆ͩ̈́̄̋̂ͪ͋̈̎̑̽̑͋͊̀͒̃ͮͤ̆ͤ̀̏͛́ͯ̽̎͛̅̈́ͭ̏̚̚͘͜͢͝͠͠͡͞͝4