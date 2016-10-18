# Control a Meural™ Canvas with Amazon Echo.

This is a proof of concept to show how a Home Digital Screen such as Meural™ can be a great companion to Voice Control AI systems such as Amazon Echo™, 
creating great opportunities for learning, assistive visual responses or for PA style planning and more.

This demo uses a particle.io Photon (There are other options you could use too like a 'Raspberry Pi' or 'Electric Imp' to name a few).

### Video
[https://vimeo.com/187714537](https://vimeo.com/187714537)

### Infrastuctor diagram of the demo:
[https://dl.dropboxusercontent.com/u/32939993/meural-echo-diagram.pdf](https://dl.dropboxusercontent.com/u/32939993/meural-echo-diagram.pdf)


### Source Code:
[https://github.com/pdkn/amzn-echo-meural](https://github.com/pdkn/amzn-echo-meural)

### ifttt.com recipe:
[https://ifttt.com/recipes/476628-control-a-meural-canvas-with-amazon-echo](https://ifttt.com/recipes/476628-control-a-meural-canvas-with-amazon-echo)

### You'll need to configure the following:

* echo/src/index.js - `var APP_ID = "amzn1.ask.skill.{YOUR-APP-ID}";`
* echo/src/meural-helper.js - `var ENDPOINT = 'https://maker.ifttt.com/trigger/navigate/with/key/{YOUR-MAKER-KEY}';`
* photon/meuralcontroller.icon - `String HOST_PICTUREFRAME = "{YOUR-MEURAL-IP-HERE}";`


##### Disclaimer #####
The code is to facility explaining a vision and therefore isn't dynamic but follows a script. However the code should be a good start to showing how this concept could be brought into production. For the Art savvie, I apploogies in advance for cropping Picasso's Guernica


