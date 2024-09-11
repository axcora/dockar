---
title: Documentation page
description: How to use documentation page on dockar 11ty eleventy docs site project
eleventyNavigation:
  key: Doc Page
  order: 7
author:
 name: ELEVENTY DEV
 link: https://www.hockeycomputindo.com/en/jamstack/11ty
show_author: true
show_update_date: true
show_edit_page: true
show_table_of_content: false
update_date: 2024-08-16
tags:
  - docpage
---

{% set navPages = collections.all | eleventyNavigation("Doc Page") %}
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
