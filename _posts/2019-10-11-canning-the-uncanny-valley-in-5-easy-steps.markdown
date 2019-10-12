---
title: Canning The Uncanny Valley In 5 Easy™ Steps
date: 2019-10-11 14:23:00 +13:00
published: false
---

Apart from being cool, this [wearable face projector][1] is about 1/5 of what you'd need to be able to walk around as a living avatar / hologram / meme. Outline of what I mean below.

<figure>
<iframe width="640" height="360" src="https://www.youtube.com/embed/_PoudPCevN0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<figcaption><a href="https://www.youtube.com/watch?v=_PoudPCevN0">Wearable face projector</a> by Jing-cai Liu.
</figcaption>
</figure>

Canning The Uncanny Valley In 5 Easy™ Steps.

## Step 1: Obtain tacticool hardware.

- 3D map: wearable face projector by Jing-cai Liu ([video][1], [writeup][2])
- Audio: mic and speaker
- Brain: Raspberry Pi
- Image: button camera
- Input: Stream Deck or other programmable keypad
	- [A visual overview by Xah Lee of programmable keyboard types][3]
	- [kbord][4]
	- [hackaday][5] has a bunch of relevant projects to give you ideas
		- [Graphically Programmable Arduino Shortcut Keypad][5-1]
		- [A Macro Keyboard In A Micro Package][5-2]
		- [Need A Small Keyboard? Build Your Own!][5-3]
		- [The Custom Clicky Shortcut Keypad][5-4]
	- DIY stream deck builds
		- [Build a Macro Keyboard “Stream Deck” with Raspberry Pi Zero and Hyperpixel 4.0 Graphical Touch Screen][6-1]
		- [ArdunioDECK – a DIY OBS streaming solution on the cheap.][6-2]

## Step 2: Affix this gear to thy loadout.

Add mall ninja accessories to taste.

## Step 3: Build a real-time face and voice cloner.

**Face:** Use any of the standard computer vision libraries. Detect, recognize, align, project.

**Voice:** For source separation, rummage through deeplearn.org for a state-of-the-art implementation. For synthesis, try Waveglow + Tacotron 2 and see how far that gets you. Speech synth on one sample sniped from the wild is bound to be hilariously shit half the time, so just roll with it.

If these words are alien to you, start with deepindex.org and a [search for the cocktail party problem][7] instead.

**Input:** Depends entirely on what hardware you want to use and how you want to use it. Push face-voice pairs to a stack with a macro button. Kick out the unpaired samples or pair them randomly for added uncanny valley wut-factor. Think up soundboard triggers and composition methods.


[1]: https://youtube.com/watch?v=_PoudPCevN0
[2]: http://jingcailiu.com/?portfolio=wearable-face-projector
[3]: http://xahlee.info/kbd/programable_keypads.html
[4]: https://github.com/dekuNukem/kbord
[5]: https://hackaday.com
[5-1]: https://hackaday.io/project/20355-graphically-programmable-arduino-shortcut-keypad
[5-2]: https://hackaday.com/2019/08/09/a-macro-keyboard-in-a-micro-package
[5-3]: https://hackaday.com/2019/04/23/reaction-video-build-your-own-custom-fortnite-controller-for-a-raspberry-pi
[5-4]: https://hackaday.com/2017/03/17/the-custom-clicky-shortcut-keypad
[6-1]: https://makerhacks.com/graphical-pizero-stream-deck
[6-2]: https://www.s-config.com/arduniodeck
[7]: https://google.com/search?q=cocktail+party+problem