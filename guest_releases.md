---
title: Guest Releases
permalink: "/guest_releases/"
layout: default
nav-position: 2
---

<div class="home">

  <h1 class="page-heading">Posts</h1>

  <ul class="post-list">
    {% for post in site.posts %}
		{% if post.release-type == "guest" %}
			<div class="post-preview-entry">
				<img src="/assets/img/sample-image.png" style="float: left; margin-right: 1em;">
				<a href="{{post.url}}"><h2 class="post-preview-name">{{post.title}}</h2></a>
				<h3 class="post-preview-author">{{post.author}}</h3>
				<h4 class="post-preview-date">{{post.date | date: "%Y-%-m-%-d" }}</h4>
				<div class="post-preview-snippet">{{post.excerpt}}</div>
				<div class="post-preview-tags">
				<ul>
				{% for tag in post.tags %}
					<li>{{tag}}</li>
				{% endfor %}
				</ul>
				</div>
			</div>
		{% endif %}
	{% endfor %}
  </ul>

  <p class="rss-subscribe">subscribe <a href="{{ "/feed.xml" | prepend: site.baseurl }}">via RSS</a></p>

</div>