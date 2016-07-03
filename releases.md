---
title: Releases
permalink: "/releases/"
layout: default
nav-position: 1
---

<div class="home">

  <h1 class="page-heading">Releases</h1>

  <div class="post-list">
    {% for post in site.posts %}
		{% if post.release-type == "official" %}
			{% include post-preview.html %}
		{% endif %}
	{% endfor %}
  </div>

</div>