---
title: Canning The Uncanny Valley In 5 Easy™ Steps
date: 2019-10-31 22:00:00 +13:00
tags:
- aesthetics
- Halloween
- build
- digital art
author:
  login: username
  email: email@wherever.com
  display_name:
  - Jeremy Cahill
  - Seong-Young Her
  first_name: Philosopher
  last_name: Of The Meme
excerpt: 'Our goal with this build is simple: Slutty Uncanny Valley Cosplay. We want
  a costume that captures the uncanny both conceptually and materially. It’s Canning
  The Uncanny Valley In 5 Easy™ Steps.'
image: "/uploads/2019-10-31_thephilosophersmeme.com_wearable-face-projector.png"
fbpreview: https://thephilosophersmeme.com/uploads/2019-10-31_thephilosophersmeme.com_wearable-face-projector.png
---

<link rel="stylesheet" href="https://unpkg.com/flickity@2/dist/flickity.min.css">
<script src="https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js"></script>
<script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>

<style type="text/css">
figure {
  display: inline-block;
  text-align: justify;
}

figcaption {
  padding: 20px 10% 0 10%;
}

.carousel-cell {
  width: 100%;
  background: #f4f4f4;
  display: flex;
  align-items: center;
  justify-content: center;
}

.carousel.is-fullscreen .carousel-cell {
  height: 100%;
}

.carousel-cell img {
  display: block;
  max-height: 100%;
}

.slideshow {
  display: block;
}

.slideshow-caption {
  padding: 5% 10% 0 10%;
}

</style>

Halloween is perhaps the most participatory holiday celebrated around the world. Almost nothing is forbidden except applying your enthusiasm. Halloween blurs the boundaries between memes, jokes, visual puns and so forth; between artisanal crafts, fine art, and haute couture; between the high-effort and the low-effort, all in one cauldron of folk culture. It is a celebration of bridging boundaries between this world and that, and that's why the monsters come out to play.

Things from the places between places are scary. A well-known example is the Uncanny Valley, the place between human faces and the inhuman. 

This Halloween season, I got to thinking about recent tech advances and what they might hold for overcoming, or *canning*, the Uncanny Valley. I keep thinking about this cool [wearable face projector][1] in particular. It's about 1/5 of what you'd need to be able to walk around as a living avatar / hologram / meme.

I think it's a useful prompt for asking: how much of the uncanny can be canned? How far along are we in terms of achieving this with a single-person DIY project, like a Halloween costume?

Let's find out.

<figure>
	<iframe width="640" height="360" src="https://www.youtube.com/embed/_PoudPCevN0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
	<figcaption><a href="https://www.youtube.com/watch?v=_PoudPCevN0">Wearable face projector</a> by Jing-cai Liu.
	</figcaption>
</figure>

## Step 0: Build Goals

What is it that makes masks so compelling? Why are crappy masks such a mainstay of Halloween outfits?

Beside being visually uncanny by making your face look weird, the right mask lets you dress as a distorted approximation of anything, kind of like memes. But meme costumes are hard to get right, since most of the irony gets lost in translation.

So, how do we exploit the uncanny? By sublimating it. Perform it.

Exploiting the uncanny is like exploiting The Cringe. You have to accept that you are embodying and demonstrating cringe in order to fully express its anti-aesthetic as part of a meme or a joke. You can't do it while being afraid of occupying the worst, or perhaps most uncomfortable, part of the memetic literacy spectrum.

<figure>
	<img src="https://thephilosophersmeme.com/uploads/2019-10-31_thephilosophersmeme.com_crinj.jpg">
	<figcaption>The Cringe comes to us in many forms, as deceiver.</figcaption>
</figure>

It could very well be that there is no funnier way to make use of that discomfort in a metaironic cringepost than to faithfully repost whatever that cringe was in its original context.

That ambiguity as to the audience you intend to amuse is important. It's your gateway between worlds. Hold onto it. To capitulate to the pressures of *legibility* is to risk collapsing the liminality of the thing.

Then it seems our goal with this build is simple: Slutty Uncanny Valley Cosplay. We want a costume that captures the uncanny both conceptually and materially. It's *Canning The Uncanny Valley In 5 Easy™ Steps*.

## Step 1: Obtain tacticool hardware.

We will need more than face viz to become a living meme.  
We also need voice and a way to control input and output.  
Here's our parts list.

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

**Voice:** For source separation, rummage through [deeplearn.org][10] for a state-of-the-art implementation. For synthesis, try Waveglow + Tacotron 2 and see how far that gets you. Speech synth on one sample sniped from the wild is bound to be hilariously shit half the time, so just roll with it.

If these words are alien to you, start with [deepindex.org][11] and a [search for the cocktail party problem][7] instead.

**Input:** Depends entirely on what hardware you want to use and how you want to use it. One approach would be to push face-voice pairs to a stack with a macro button. Kick out the unpaired samples or pair them randomly for added uncanny valley wut-factor. Think up soundboard triggers and composition methods.

Now that we have our libs and strats, it's time for the montage.

<figure>
	<iframe width="640" height="360" src="https://www.youtube.com/embed/25XyWhfpSiM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
	<figcaption>Find programming socks. Mash keyboard. import keras. Write code. Write code tests. Test code. Fail. Cry brain tears. import keras. Drink. Woo a rubber ducky into explaining your bugs to you. Screm at bugs, possum-style. Find a friend for ducky. Run tests. Pass then fail. import kreas. Curse the godless sky. Remember this room has no window. Curse the skyless sky. Fix typo. Run tests. Pass tests ✔</figcaption>
</figure>

Once you have your build, how you use it is up to you. Get real crinj with it. Below are some suggested optional steps in deploying your new genestealing ghostmuster[.][8]

## Step 4: Attend a public gathering of your mortal enemies.

If you don't have any, you must first obtain some. [Lazyweb][9] it. Recommendations may be provided.

## Step 5: Assume the form of the enemy. Perform zoinks in their likeness.

Publicly and vociferously endorse rage comics. No other post-enlightenment literature holds a candle.

Get banned from Club Penguin.

Declare that you're quitting your job and all current public affiliations to focus exclusively on TikTok.

Insist that the world *did* end in 2012, and you can prove it. You have in your possession a 1500-page thesis on microgenres, memes, and youtube videos about bread that destroys any doubt: we've sailed beyond the edge of history. Now we drift listlessly upon the solar wind, through the backrooms of hello_universe.exo, a demo 'verse left running by a Zxvzvzmzvrxph child at an afterschool workshop called "Intro to Starbuilding for Complete Beginners".

Claim to have evidence that will lead to the arrest of Hillary Clinton.

Find a local news reporter. Tell them that you support neither the troops nor the local sports team. Invite viewers to your place of employ for spirited debate on this matter.

Visit coven. Become witch. Disavow pumpkin spice.

Express dissenting opinions about a top kpop group.

&c.

## More Ideas

For more inspo to guide your zany exploits, peruse the works of bighead builders of yore. Engage the grand tradition.

<figure class="slideshow">
  <div class="carousel" data-flickity='{ "adaptiveHeight":"true", "imagesLoaded":"true"}'>
    <div class="carousel-cell"><a data-flickr-embed="true" data-footer="true" data-context="true" href="https://www.flickr.com/photos/30601564@N04/6572972211/in/album-72157628469225757/" title="Making bighead prank phone call?"><img src="https://live.staticflickr.com/7006/6572972211_8858b88e42_o.jpg" alt="Making bighead prank phone call?"></a></div>
    <div class="carousel-cell"><a data-flickr-embed="true" data-footer="true" data-context="true" href="https://www.flickr.com/photos/30601564@N04/6573810235/in/album-72157628469225757/" title="Big Head mode hit Pavilion"><img src="https://live.staticflickr.com/7027/6573810235_854c85cd34_o.jpg" alt="Big Head mode hit Pavilion"></a></div>
    <div class="carousel-cell"><a data-flickr-embed="true" data-footer="true" data-context="true" href="https://www.flickr.com/photos/dutchct/4067409759/in/album-72157622591528101/" title="Untitled"><img src="https://live.staticflickr.com/2633/4067409759_b1981b28ed_z.jpg" alt="Untitled"></a></div>
    <div class="carousel-cell"><a data-flickr-embed="true" data-footer="true" data-context="true" href="https://www.flickr.com/photos/dutchct/4068161122/in/album-72157622591528101/" title="jen test fit"><img src="https://live.staticflickr.com/2788/4068161122_b8640aa533_z.jpg" alt="jen test fit"></a></div>
    <div class="carousel-cell"><a data-flickr-embed="true" data-footer="true" data-context="true" href="https://www.flickr.com/photos/dutchct/4068162352/in/album-72157622591528101/" title="Untitled"><img src="https://live.staticflickr.com/2656/4068162352_113b543be5_b.jpg" alt="Untitled"></a></div>
    <div class="carousel-cell"><a href="https://www.youtube.com/watch?v=1rkUDTLMzR4" title="HYPERFLESH PRESENTS SEXY SUPERSTAR BABIES"><img src="https://thephilosophersmeme.com/uploads/2019-10-31_thephilosophersmeme.com_hyperflesh-presents-sexy-superstar-babies.png" alt="HYPERFLESH PRESENTS SEXY SUPERSTAR BABIES"></a></div>
  </div>
	<figcaption class="slideshow-caption">Big Head Mode papercraft costumes</figcaption>
</figure>

---

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
[8]: https://www.youtube.com/watch?v=NxXufI6-OIE
[9]: https://blog.codinghorror.com/lazyweb-calling
[10]: https://deeplearn.org
[11]: https://deepindex.org