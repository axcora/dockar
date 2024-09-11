---
title: Youtube
description: How to use youtube lite on dockar 11ty eleventy project.
eleventyNavigation:
  key: Youtube Embed
  order: 5
image: /media/img/dockarlogo.png
update_date: 2024-09-10
author:
 name: JAMSTACK DEV
 link: https://www.hockeycomputindo.com/en/jamstack/
show_author: true
show_update_date: true
show_edit_page: true
show_table_of_content: true
tags:
  - video
  - embed
  - youtube
---

### Youtube Lite

The Dockar project is ready with 11ty Embed Everything Plugins - An Eleventy plugin to easily embed common media formats in posts, using only their URLs - by [Gfscott](https://github.com/gfscott/eleventy-plugin-embed-everything)

### How to use Youtube Lite

To embed a YouTube video into any Markdown page, paste its URL into a new line. The URL should be the only thing on that line.

Markdown file example:

```YAML
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vehicula, elit vel condimentum porta, purus.

https://www.youtube.com/watch?v=dQw4w9WgXcQ

Maecenas non velit nibh. Aenean eu justo et odio commodo ornare. In scelerisque sapien at.
```

### Supported URL patterns

The plugin supports common YouTube URL variants as well. These should also work in your Markdown files.:

```YAML
<!-- No protocol: -->

youtube.com/watch?v=dQw4w9WgXcQ
www.youtube.com/watch?v=dQw4w9WgXcQ

<!-- With or without HTTPS: -->

http://www.youtube.com/watch?v=dQw4w9WgXcQ
https://www.youtube.com/watch?v=dQw4w9WgXcQ

<!-- With or without 'www': -->

https://www.youtube.com/watch?v=dQw4w9WgXcQ
https://youtube.com/watch?v=dQw4w9WgXcQ

<!-- YouTu.be short-links: -->

https://youtu.be/dQw4w9WgXcQ

<!-- URLs with extra parameters: -->

https://www.youtube.com/watch?v=LQaehcfXvK0&feature=youtu.be

https://www.youtube.com/watch?v=dQw4w9WgXcQ&list=RDdQw4w9WgXcQ&start_radio=1&t=1
```
