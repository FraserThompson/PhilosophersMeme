---
title: Guest Releases
permalink: "/guest_releases/"
layout: default
nav-position: 2
---

<div class="home">

  <h1 class="page-heading">Guest Releases</h1>

  <ul class="post-list">
    {% for post in site.posts %}
		{% if post.release-type == "guest" %}
			{% include post-preview.html %}
		{% endif %}
	{% endfor %}
  </ul>

</div>