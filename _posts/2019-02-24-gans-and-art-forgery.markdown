---
title: GANs and Art Forgery
date: 2019-02-24 00:20:00 +13:00
tags:
- aesthetics
- art
- computational creativity
- bots
- Botnik
- forgery
- GAN
- memes
- philosophy
- shitposting
- sociology
author:
  display_name:
  - Seong-Young Her
  - Jeremy Cahill
excerpt: Throughout the history of art, forgery was used as a technology for making
  art accessible for the masses, as a tool for education in apprenticeship, as an
  object of fraud and was itself a subject of fakery. The experience of forgery as
  such precedes and succeeds the experience of the work itself, shaping the expectancy
  of the audience as well as informing their response. The context of an aesthetic
  community adapts to the community as the community adapts to it.
image: "/uploads/everybody-gangsta-until-the-burger-start-walking.png"
---

<style type="text/css">
* {
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	box-sizing: border-box
}

body,
html {
	height: 100%;
	width: 100%
}

.equalHM,
.equalHMR,
.equalHMV {
	width: 32%
}

body {
	font-family: sans-serif;
	line-height: 1.4
}

h1 {
	font-size: 150%
}

p {
	margin-bottom: 10px
}

.paddingBlockWaifu {
	margin-left: -40%;
	padding: 20px 0
}

.paddingBlock {
	padding: 20px 0
}

.eqWrap {
	display: flex
}

.eq {
	padding: 10px 10px 0
}

.eq:nth-of-type(even),
.eq:nth-of-type(odd) {
	background: #f4f4f4
}

.equalHW {
	flex: 1
}

.equalHMWrap {
	justify-content: space-between
}

.equalHMRWrap {
	justify-content: space-between;
	flex-wrap: wrap
}

.equalHMR {
	margin-bottom: 2%
}

.equalHMVWrap {
	flex-wrap: wrap
}

.equalHMV {
	margin: 0 1%
}

.equalHMV:nth-of-type(3n) {
	margin-right: 0
}

.equalHMV:nth-of-type(3n+1) {
	margin-left: 0
}

.grid-container {
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	grid-template-rows: 1fr 1fr 1fr 1fr;
	grid-template-areas: "LEFT_A LEFT_A RIGHT RIGHT""LEFT_A LEFT_A RIGHT RIGHT""LEFT_B LEFT_B RIGHT RIGHT""LEFT_B LEFT_B RIGHT RIGHT"
}

.LEFT_A {
	grid-area: LEFT_A
}

.RIGHT {
	grid-area: RIGHT
}

.LEFT_B {
	grid-area: LEFT_B
}
</style>

Art forgery involves a forger creating an artwork that resembles another artist’s work in order to pass it off as that artist’s own, often to sell it for a lot of money. At its most basic, forgery is the misattribution of blame and praise for a work, involving two components: the identity of the mimicked artist, and the style of the artist’s works. Forgery often attracts outrage from the participants of the respective aesthetic community. The outrage is usually over the betrayal of expectations, but forgeries vary phenomenologically depending on the type. For instance, the misattribution of man-made works to a nonhuman entity is felt differently from the misattribution of machine-made works to a person.

Art forgery became an economic, moral issue when the valuation of artworks became closely tied to their creators' identities. Prior to artworks becoming a commodity with economic value much beyond their immediate aesthetic utility, forgery was standard, for both the buying and selling of art but also the development of artists themselves. Apprentices would mimic the style of the master by copying the master's works, and the master would sell the works created in the process instead of receiving monetary payment for the tutorship. Generative Adversarial Networks (GANs) applied to visual tasks work rather similarly to a forgery-based apprenticeship. One part of the network randomly generates new images and the other assesses each image for fit. The network is trained to become better at creating and selecting the kinds of images demanded by the human supervisor, namely images stylistically similar to the images on which it is trained. It's like an apprenticeship with neither an apprentice nor a master.

<figure>
  <div class="paddingBlockWaifu">
    <div class="equalHWrap eqWrap">
      <div class="equalHW eq">
        <iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fthephilosophersmeme%2Fvideos%2F253206768959839%2F&show_text=1&width=560" width="560" height="526" max-width="32%" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media" allowFullScreen="true"></iframe>
      </div>
      <div class="equalHW eq">
        <iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fthephilosophersmeme%2Fvideos%2F578582942609858%2F&show_text=1&width=476" width="476" height="592" max-width="32%" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media" allowFullScreen="true"></iframe>
      </div>
      <div class="equalHW eq">
        <iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fthephilosophersmeme%2Fvideos%2F363369750918322%2F&show_text=1&width=476" width="476" height="611" max-width="32%" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media" allowFullScreen="true"></iframe>
      </div>
    </div>
  </div>
  <figcaption>To appear: this post as told by OpenAI's GPT-2 language model.</figcaption>
</figure>

A favourite defence of forgers is to claim that the fake artworks are a kind of Sokal challenge to the artworld, and that they expose the hypocrisy of a market which treats artworks as autographs and currencies rather than appraises them for their *intrinsic* value. This classic argument implies that the forgeries were justified on grounds of holding independent, intrinsic value as works of art and artistic statements of their own. It's part of a family of arguments which claim that forgery is justified as an artistic practice because the forger, too, is an artist. It's a good argument, because it's true: contemporary art is currency trading. Paradoxically, it's an unconvincing one given that traditional forgery requires enough artistic skill to produce convincing copies. The fakes themselves are highly limited in supply, and so they end up also fetching high prices based on the same market pressures as the originals even after they are revealed as fakes. Infamous forgers like [Han van Meegeren][Meegeren.net - HAN VAN MEEGEREN - BIBLIOGRAPHY] sometimes even develop their own forgery markets, in which lesser-known forgers misattribute their own works to the well-known forger to inflate their value.

Machine-made art inverts this paradigm by successfully removing the forger altogether. Consider that [copyright law generally does not apply][Art Law Journal - Steve Schlackman: Who holds the Copyright in AI Created Art] to works created by non-humans. Computers can't hold the right to deny or authorise others to use their works based on copyright. Even when made to fake the work of a human artist, they are at most tools of forgery. But more importantly, a network can produce endless amounts of original content once it has been properly trained. When fakes are no longer scarce and fatigue regarding authenticity becomes generalised, the perception of art as ultimately bound to a work, physically embodied in the original, will become anachronistic. The scales will further tip against the influence of institutions and economies that depend on this anachronistic view of art as objects for their survival, in favour of other views of art as a complex of activities, experiences, the artwork itself a form of life.

But even machine-made art is not free of fakes. An example is the forgery of automatically generated content on botpages. Botpages are a subgenre of memepages whose content is generated by bots. Generally, posting to a botpage as an admin is frowned upon, unless it is to make an update or an announcement. Forging content to pass it off as created by the bot is verboten. The premise of a botpage is that all of its content is generated by the bot with indirect tweaks and adjustments from its creator, and part of the appeal is often to read into a senseless and randomly generated message. Content that is serendipitously transparent in its interpretation is treasured by botpage fans as a source of botpage lore, yet somewhat infrequently remixed as material for memes and original content.

<figure>
<iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpapacafeteria%2Fposts%2F2285913701683702&width=500" width="500" height="547" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
<img src="/uploads/everybody-gangsta-until-the-burger-start-walking.png">
<figcaption>A fan-made meme of a [Papa’s Burgeria Bot][Facebook - Papa's Burgeria Bot] post featuring a burger that looks like it has legs of bacon.</figcaption>
</figure>

There is therefore a strong incentive for the admins to forge more interesting and coherent content than their bot usually generates, in order to inflate interest in their bot. More, since a human artist cannot expect to compete in volume with the actual output of the bot, these man-made posts are more likely to be based on a stereotype of the bot's output than strict mimicry of either the process or a typical product of the bot.

Creators in all genres of computational creativity are similarly incentivised to forge computational output, encouraged by a culture of gatekeeping mysterianism, in which keeping both source code and techniques secret — or sufficiently vague as to prevent replication — is routine. For instance, David Cope of "Experiments in Musical Intelligence" claimed to have created an AI called Emily Howell that he taught to write music, but never released any evidence of it other than the purportedly AI-created music. Internet commentary on Emily's music is full of people marvelling at the soul apparent in the music. Art created by AI is usually awkward, strange and flawed, but to imagine it was produced by a machine adds a sense of purity of aesthetic intention. There is no author, whose intended meaning and hidden motivations constrain the interpretation of the work. There is only the artistic object and the viewer. This evokes the paradoxical experience of knowing that there is nothing behind the work, and feeling that it is entirely permitted to read meaning and emotions into the work. This paradoxical experience is often something very private that catches people off guard, and so the betrayal of the viewer's trust in that context is much more offensive than, say, a magic trick. Academics who have critically reviewed David Cope's claims about his computational process with Emily Howell, and in some cases debunked them, affirm this sentiment:

>Either Cope is joking (but it's not very funny), or he's being musically naïve (which seems unlikely given his experience as a composer) or he's assuming his readers are musically naïve (which seems insulting). I don't know which.

[Wiggins 2007, p. 114][Wiggins 2007]

But in the context of botpages, not everyone agrees that an adminpost is fraudulent. Many botpage admins understand their page as a part of a creative process which they are involved in as the artist, and resent the fact that many botpage fans do not see the output of their bots as works by the admins themselves. The opposing views on the authorship of bot-generated content have a fundamentally divergent effect on the viewers' experience, which feeds back into the bot itself through community practice.

<figure>
   <div class="paddingBlock">
      <div class="equalHMVWrap eqWrap">
         <div class="equalHMV eq">Any unlabeled adminposts immediately delegitimize any bot that makes them.</div>
         <div class="equalHMV eq">Any unlabeled 🏴🏴🏴 adminposts🙋🙋🙋 immediately delegitimize 👎👎👎 any bot 🤖🤖🤖 that makes them.</div>
         <div class="equalHMV eq">AnY UnLaB3L3D 🏴🏴🏴 AdMiNp0sTs🙋🙋🙋ImMeDiAt3lY D3L3GiTiMiZ3👎👎👎 AnY B0T 🤖🤖🤖 ThAt MaK3S ThEm. 🔫🔫</div>
         <div class="equalHMV eq">Why are all these bot pages throwing out their legitimacy because a bot with only 2 variables made a post?</div>
         <div class="equalHMV eq">Why are all these bot 🤖🤖🤖 pages📖📖📖 throwing🤢🤢🤢 out their legitimacy 👍👍👍because a bot 🤖🤖🤖 with only 2️⃣ varia🅱️les made a post? 📮📮📮</div>
         <div class="equalHMV eq">WhY Ar3 AlL Th3s3 B0T 🤖🤖🤖 PaG3s📖📖📖 ThR0WiNg🤢🤢🤢 0uT Th3ir L3GiTiMaCy 👍👍👍B3cAuSe A B0T 🤖🤖🤖WiTh 0nLy 2️⃣ V4Ri4🅱️L3S M4d3 4 P0St? 📮📮📮💯💯💯</div>
      </div>
   </div>

   <figcaption>

Left: A complaint in the <a href="https://facebook.com/132502367359575">Bot Appreciation Society</a> Facebook group regarding the choice of some bot admins to manually post homages and parodies following <a href="https://facebook.com/1061626284019675">OreoBot 1912</a>'s successful reassembly of the term 'oreo' from single tokens. Center and right: some typical community responses.

   </figcaption>
</figure>

Those who view the bot as the author treat the botpage as a generative process whose admin should iterate the bot in an incremental, wholesale fashion but not meddle in unannounced deviations. The audience's roles are to divine meaning from bot output, await particularly serendipitous outputs whose majority interpretation requires little external commentary to grasp, and to disseminate bot output as well as provide a signal boost to admin outrage at the hands of censorious platform moderation activity. In this mental model, the admin is a man behind a curtain, orchestrating a performance but not playing the instruments himself. Thus admin tampering violates expectations in a distasteful fashion: since violation of expectations is precisely what audience members are on the lookout for, human interventions that produce the same are seen as blows to the very thing the audience is expected to do.

Under this view, a glut of direct communication with other bot admins in the form of parody posts on the botpage, rather than in a closed group or a chat, is seen as circlejerking at the community's expense. Since those who view the bot as the author participate primarily as interpreters of hitherto intentionless and meaningless messages, they also view the botpage as a collaboration between the bot and the fans.

Those who view the admin as the author treat the bot as merely an implementation of the admin's ideas. The significance of audience input is downplayed, while critiques directed at admin activities are regarded as attacks on the admin's creative autonomy.

The bot admin's argument that they are the author and both the bot and its output are their work is a good argument because it's true: the bot admins are causally necessary for both the creation of the bot and its output, since the admins designed the bots to produce the particular outputs. But it's also an unconvincing argument in that it ignores critical differences between shitposting bots and other types of bots, such as informational bots. Shitposting bots are necessarily social while informational bots are not. Even so, closed-concept bots that promise to realise a specific concept, like [youtubeartifact][Twitter - youtubeartifact], are expected to remain stable so that whatever community emerges around the output can reliably continue and develop its practices. The totality of the artistic experience around the bot and its output is ultimately determined by the community engagement insofar as there is a community. Treating the botpage as the work of the bot admin alone disturbs this creative process of the community, by threatening its conceptual foundation.

<figure>
   <blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">A 7.7 magnitude earthquake occurred 80.78mi ESE of Palora, Ecuador. Details: <a href="https://t.co/KtVeBqbXhj">https://t.co/KtVeBqbXhj</a> Map: <a href="https://t.co/HbgZ1eZWXO">https://t.co/HbgZ1eZWXO</a></p>&mdash; Earthquake Robot (@earthquakeBot) <a href="https://twitter.com/earthquakeBot/status/1098891403269070849?ref_src=twsrc%5Etfw">February 22, 2019</a>   </blockquote>
   <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
   <figcaption>

A very dull bot — useful but not the site of cybercultural happenings.

   </figcaption>
</figure>

This drive for conceptual coherence is distinct from demands for *quality*: rebuffing or outright refusing activities deemed egocentric can be seen across the web, even in environments specially designated for low-quality posts. In circlejerk venues, breaking the jerk is typically forbidden. Countless Facebook tagging groups issue "no discourse" rules to preempt flamewars and off-topic digressions. In fact, there exist many special rules that were written expressly for the purpose of preventing the partitioning of communities into cliques and sub-cliques through targeted communication, known as splintering. One example is the ban on direct communication with another user in big subreddits like [r/pics][Reddit - r/pics]. Celebrity members in online communities hijacking the forum for their personal socialisation is a common phenomenon, and more-or-less analogous to the case of botpage admins directly communicating with other admins through their pages. A botpage called [ImposterBot Pmc2963468][Facebook - ImposterBot Pmc2963468], whose purpose is to copy other bots without using their code, stirred up controversy among some botpage admins, not simply because the botpage admins were protective of their ideas but because it threatened their mental models of botpage authorship. 

This controversy over human interference simply does not exist to such a degree in communities grounded in remix culture based on bot output. For example, [Botnik] is "a community of writers, artists and developers using machines to create things on and off the internet." Botnik's community practices are very much in the mould of other computational creativity communities listed by the [Electronic Literature Organization].

<figure>
   <iframe width="640" height="360" src="https://www.youtube.com/embed/tBRWJzAjkjk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
   <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fheadlinertron%2Fposts%2F2572325862994218&width=500" width="500" height="191" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
   <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fheadlinertron%2Fposts%2F2569511623275642&width=500" width="500" height="192" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
   <figcaption>

Content produced using bot output, with varying degrees of human intervention.

   </figcaption>
</figure>

Consider that botpage fans are also such a community.

So, the botpage community is not fundamentally different in either practice or output from the Botnik community, yet resists many of the editorial assumptions made by Botnik. Tampering with bot output is proscribed by the botpage community not because derivative work is frowned upon, but because what is important is the social, creative institution built around the shared assumption that, under normal operating conditions, a botpage only makes botposts.

Taking into consideration the mechanical process behind the AI-generated art also changes the perspective of the viewers. [GraffitiGAN][How to Generate Almost Anything - Episode 5: Human-AI Collaborated Graffiti] was a project in which a GAN trained on over ten thousand graffiti designs collaborated with two human graffiti artists.

The artists reacted to the idea in different ways. "I think it's such an amazing opportunity to be inspired by designs created by artists and artificial intelligence," [IMAGINE][Instagram - IMAGINE] said. "And it was over ten thousand designs of graffiti pieces taken from all over the world, and so this is really an international collaboration!" 

[SOBEK][Instagram - SOBEK], on the other hand, saw dissent in the ranks:

>I spoke with some of my buddies about this little project and they see it as 'me vs. AI', like 'man vs. computer' — they took it a little personal like 'You gotta defend the history of graffiti, don't let the computers take over!'

<figure>

<iframe width="640" height="360" src="https://www.youtube.com/embed/wNwZcHSWJPY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<figcaption>

Interview on GraffitiGAN. <a href="https://howtogeneratealmostanything.com/graffiti/2018/09/26/episode5.html">Full article at How to Generate Almost Anything</a>

</figcaption>
</figure>

The responses each represent a way of understanding the AI artist. One is to view it as the medium through which the humans from whom it learned can speak. The other is to view the AI artist as the creative entity in its own right. Regardless of the metaphysics, the psychological effect of holding one perspective over another is clear. Consider the example of [EyeWriter], the eye-tracking device that allows [Tempt1] to write despite the degenerative nerve disorder which paralysed him. With the help of extensive technological augmentation, Tempt1 can transfer the designs from his mind onto the walls in the real world, just as the chain of man and machine allowed the thousands of graffiti artists to contribute some part of their own designs to the GraffitiGAN project. Are the resulting works forgeries? If so, who is the forger?

<figure>

<img src="https://thephilosophersmeme.com/uploads/eyewriter_diagram.png">
<img src="https://thephilosophersmeme.com/uploads/tempt-eyes.gif">
<img src="https://thephilosophersmeme.com/uploads/temptone_graffiti.png">

<figcaption>

EyeWriter system 1.0 in use.

</figcaption>
</figure>

In graffiti culture, it is antisocial to *go over* someone else's work without contributing a work of equivalent or greater value. The fact that property owners or the police might erase the work is distinct from the fact that there are taggers and troublemakers who disregard the mores of graffiti culture. The former is taken for granted as part of the environment whilst the latter is culturally proscribed, usually successfully.

In botpage culture, there is a strong sense that the bot's output is the final product that need not be further modified after the fact. Whereas Botnik users treat the bot as a creative assistant, botpage fans treat the bot as something closer to an oracle, whose output should be interpreted, canonised, and promoted. Both Twitter and Facebook, the major stages on which shitpost botpages perform, promote an asymmetric interaction between celebrities or businesses and their followers by their design. The few methods of interaction readily available to Facebook page fans reflect this. They may react to, comment on, or share a post. Transformation takes extra steps and, by design, feels much less natural than socialising in the general direction of the page. In addition to this sense of finality that each post on a botpage carries, the cultural overlap between botpages and shitposting pages makes the notion of improving upon the *shitposts* by the bots seem absurd.

The distinction between shitposting and effortposting is isomorphic to the distinction between tagging and writing in graffiti culture. Comparison of the two dichotomies is interesting: effortposts are remixed much more frequently than shitposts, which more often spread virally in unaltered form. Pieces (the product of *writing*) and tags differ in largely the same way. Lower quality graffiti is more likely to disappear as someone writes over it with something different and better, or simply washes it away as a nuisance. Botnik is closer to graffiti culture than botpage culture in this regard: intertextuality in botpage context is achieved via low-effort reference and admin intervention, while intertextuality in botnik context is achieved via extended narratological development of works all authored similarly.

Intertextuality in graffiti culture is founded on the shared physical environment of urban landscapes that shape the cultural context. Shared physical environment implies shared process, as does a shared online platform of some particular design. The holy sites in graffiti culture, whether they be [a dry river][Wikipedia - Los Angeles River] or [an abandoned building][Wikipedia - 5 Pointz], shape the cultural context in which the works interrelate. The strong sense that desecration of such environments is illicit motivates taboos against certain forms of engagement, such as going over someone else's piece with a tag.

While there are parallels between the man-vs-machine sentiment expressed by SOBEK and botpages' normification anxiety, the expertise and technical skill required to engage as a learned participant in botpage culture is minimal. Graffiti culture is more esoteric, and other experienced practitioners are usually the only informed audience available to a graffiti artist. Graffiti artists therefore communicate predominantly to each other, rather than to the general public, as a matter of dogma. This dogma, alongside related ideals like *real graffiti art is illegal*, helps to resist dilution and cooptation by multifarious mainstream pressures, which seek either to erase or fossilise graffiti.

Throughout the history of art, forgery was used as a technology for making art accessible for the masses, as a tool for education in apprenticeship, as an object of fraud and was itself a subject of fakery. The experience of forgery as such precedes and succeeds the experience of the work itself, shaping the expectancy of the audience as well as informing their response. The context of an aesthetic community adapts to the community as the community adapts to it. When an audience gets used to the concept of a 24-hour YouTube radio station, they can use the shared familiarity as foundation for community. The radio station serves to demarcate the territory within which a stable set of rules can develop. The individual piece of music or the looping animation is not the point. 

<figure>

<iframe width="640" height="360" src="https://www.youtube.com/embed/hHW1oY26kxQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<figcaption>

This beat does not exist: <a href="https://youtube.com/channel/UCSJ4gkVC6NrvII8umztf0Ow">ChilledCow</a>'s lofi beats station, and others like it, synthesise a new milieu from multi-layered multimedia forgeries to produce a transient experience with its own, novel phenomenology.

</figcaption>
</figure>

The outcry about forgery in such communities is primarily about defending the cultural environment from pollution rather than about the originality of the works situated therein. As the examples of highly-valued *genuine fakes* and Imposterbot show, fakery is not a real, universally enduring property of any work of art. What would be considered fakery elsewhere constitutes integral components of the cultural environment in botpages, YouTube radio stations or an art forgery market.

But it does not follow that forgery is not real. The fakery of forgery is not in the art object or the text, or even merely contextual, but of the context itself. Fakery damages the cultural environment by making communication between participants unreliable. Such cultural noise pollution can obfuscate and drive out the native population of symbols and meanings, and eventually displace the entire ecosystem without ever being detected by outside observers. Mental models about who counts as artists and what constitutes forgery are one part of an art object's environment, and are in perpetual competition. At the same time, forgery is often the tool for the construction of new cultural environments from repurposed components from other contexts. When an art forger takes elements from the master's oeuvre to create a new work that resembles the master's works *in general*, or when a YouTube radio station plays freely available beats resembling hiphop *in general* to looping gifs resembling a certain aesthetic *in general*, the result is a new cultural environment anchored by the pastiche. To forge a botpost in the context of a botpage is to propose one set of conditionals to the participants and provide another, and ultimately to destroy the environment in which the community survives. Transgressing the norms of such cultural environments is akin to vandalising sacred relics on a holy site. Forgery is desecration.

The most readily available tool for participants of an aesthetic community who want to conserve their cultural environment is to insist that the authorsihp belongs not to any human participant but to some non-human or trans-human representative of the community, such as a bot or the community as a whole. The individualistic counterposition that credits human authors is equally popular. Given the considerable amount of time and creative effort often invested by participants, it is only natural that many feel justified in giving credit to individual participants for what is obviously the direct product of their work. The paradox of the aesthetic community as simultaneously collectivistic and individualistic, the medium and the author, the work and the translator, is not because the community may be reduced to a complex of rituals alone. It results from the fact that not only performance, but all works of art, are self-contextualising. The two views may be held simultaneously without real contradiction.

The word "medium" provides a clue for the way out of the paradox. Early religion was facilitated by shamanic intermediaries who bridged the spiritual and the physical realms. Later, shrines were developed as a way to automate the shamanic practice so that ordinary people could convene with the gods without a human intermediary. Otto Rank wrote that the artist facilitates a sense of unity in the viewer, not only with the artist but the whole universe. This sense of unity with the universe is the feeling of temporarily letting go of the sense of self-differentiation otherwise ever-present in a human being. One component of this dynamic is inverted in AI art, in that there is no artist acting as the medium. In this sense, the AI artist is the shrine that substitutes for the human artist in the role of mediating between two worlds. There is only the user, the machine, and the holy wilderness of cyberculture.

<mark>DNE layout</mark>

[Art Law Journal - Steve Schlackman: Who holds the Copyright in AI Created Art]: https://alj.artrepreneur.com/the-next-rembrandt-who-holds-the-copyright-in-computer-generated-art
[Botnik]: https://botnik.org
[Electronic Literature Organization]: https://eliterature.org
[Engadget - Steve Dent: Twitter bot's 'Glitch Art' is a digital impressionist dream]: https://engadget.com/2017/10/09/david-kraftsow-youtube-artifact-glitch-art-twitter-bot
[EyeWriter]: http://eyewriter.org
[Facebook - Bot Appreciation Society Post A]: https://facebook.com/groups/botappreciationsociety/permalink/337467603529716
[Facebook - Bot Appreciation Society Post B]: https://facebook.com/groups/botappreciationsociety/permalink/337484246861385
[Facebook - Bot Appreciation Society Post C]: https://facebook.com/groups/botappreciationsociety/permalink/337498133526663
[Facebook - Bot Appreciation Society Post D]: https://facebook.com/groups/botappreciationsociety/permalink/337689746840835
[Facebook - Bot Appreciation Society]: https://facebook.com/132502367359575
[Facebook - ImposterBot Pmc2963468]: https://facebook.com/1687844851315186
[Facebook - OreoBot1912]: https://facebook.com/1061626284019675
[Facebook - Papa's Burgeria Bot]: https://facebook.com/2284646001810472
[Facebook - The Headlinertron]: https://facebook.com/2341056799454460
[Hacker News - This person does not exist]: https://news.ycombinator.com/item?id=19144280
[How to Generate Almost Anything - Episode 5: Human-AI Collaborated Graffiti]: https://howtogeneratealmostanything.com/graffiti/2018/09/26/episode5.html
[Instagram - IMAGINE]: https://instagram.com/IMAGINE876
[Instagram - SOBEK]: https://instagram.com/supersobeksix
[L.A. TACO - HOW THIS ICONIC L.A. GRAFFITI WRITER IS KICKING ALS’S ASS, 15 YEARS LATER]: https://lataco.com/how-this-iconic-l-a-graffiti-writer-is-kicking-alss-ass-15-years-later
[Meegeren.net - HAN VAN MEEGEREN - BIBLIOGRAPHY]: https://meegeren.net/index.php/bibliography
[MoMAR - David Kraftsow:  YouTube Artifacts JUNE 1 - SEP 6 2018]: https://momar.gallery/exhibitions/youtubeartifacts.html
[MONTAG - Kathryn Lawrence: The Twitter Bot Artists That Make Hell a More Pleasant Place.]: https://montag.wtf/twitter-bot-art
[New Atlas - Rich Haridy: Unauthorized YouTube glitch art exhibition invades room at MoMA]: https://newatlas.com/ar-momar-youtube-glitch-art/54919
[NPR - Paralyzed Graffiti Artist Draws With His Eyes]: https://npr.org/templates/story/story.php?storyId=124980282
[OpenAI - Better Language Models and Their Implications]: https://blog.openai.com/better-language-models
[Reddit - r/pics]: https://reddit.com/r/pics
[Socialblade - ChilledCow]: https://socialblade.com/youtube/channel/UCSJ4gkVC6NrvII8umztf0Ow
[Tempt1]: https://temptone.wordpress.com
[The Next Web - Rachel Kaser: Twitter bot creates beautiful art out of glitchy YouTube videos]: https://thenextweb.com/twitter/2017/10/12/twitter-bot-beautiful-art-glitchy-youtube-videos
[The Verge - Bijan Stephen: The key to creating gorgeous, glitchy YouTube images: anticipation and deletion]: https://theverge.com/2018/7/15/17564588/datamosh-youtubeartifacts-glitch-art-kraftsow
[This cat does not exist]: https://thiscatdoesnotexist.com
[This person does not exist]: https://thispersondoesnotexist.com
[This Waifu Does Not Exist]: https://thiswaifudoesnotexist.net
[Twitter - #graffitiGAN]: https://twitter.com/hashtag/graffitiGAN
[Twitter - Cyril Diagne: The coarse knob of #StyleGAN really is mesmerizing. Esp. how it adds/replaces some features to match the artistic style (collars, hats..etc)]: https://twitter.com/kikko_fr/status/1094685986691399681
[Twitter - Pinar Yanardag: Current iteration of #graffitiGAN #styleGAN.]: https://twitter.com/PINguAR/status/1095650969801629696
[Twitter - The Headlinertron]: https://twitter.com/headlinertron
[Twitter - youtubeartifact]: https://twitter.com/youtubeartifact
[Wiggins 2007]: https://doi.org/10.1093/llc/fqm025
[Wikipedia - 5 Pointz]: https://en.wikipedia.org/wiki/5_Pointz
[Wikipedia - EyeWriter]: https://en.wikipedia.org/wiki/EyeWriter
[Wikipedia - Los Angeles River]: https://en.wikipedia.org/wiki/Los_Angeles_River
[XSEAD - EyeWriter]: http://xsead.cmu.edu/works/70
[YouTube - Botnik Studios: Bitcoin As Explained by A.I.]: https://youtube.com/watch?v=tBRWJzAjkjk
[YouTube - ChilledCow]: https://youtube.com/channel/UCSJ4gkVC6NrvII8umztf0Ow