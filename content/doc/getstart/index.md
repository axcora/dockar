---
title: Get Started
description: Lets get started with captaline jamstack eleventy 11ty website themes template
eleventyNavigation:
  key: Get Started
  order: 2
author:
 name: JAMSTACK THEMES
 link: https://hockeycomputindo.com/themes/
show_author: true
show_update_date: true
show_edit_page: false
show_table_of_content: false
update_date: 2024-08-16
tags:
  - get start
---

{% set navPages = collections.all | eleventyNavigation("Get Started") %}
{% macro renderNavListItem(entry) -%}
{%- if entry.children.length -%}
<div{% if entry.url == page.url %} class="p-1 col-6  mt-1 mb-1" aria-current="page"{% else %} class="p-1 col-6  mt-1 mb-1" {% endif %}>
<div class="card p-3 ">
<a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="true">{{ entry.title }}</a>
</div>
</div>
{%- for child in entry.children %}{{ renderNavListItem(child) }}{% endfor -%}
</div>
<div>
{% else %}
<div {% if entry.url == page.url %} class="p-1 col-6 mt-1 mb-1" aria-current="page"{% else %} class="p-1 col-6  mt-1 mb-1" {% endif %}>
<div class="card p-3 ">
<a href="{{ entry.url }}" {% if entry.url == page.url %} class="nav-link active" class="nav-link" {% endif %}}>{{ entry.title }}</a>
</div>
{%- endif -%}
</div>
{%- endmacro %}
<div class="row">
{%- for entry in navPages %}{{ renderNavListItem(entry) }}{%- endfor -%}
</div>
