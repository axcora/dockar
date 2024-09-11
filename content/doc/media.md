---
title: Media Folder
description: How to use and upload image video and file on eleventy 11ty dockar documentation
eleventyNavigation:
  key: Media
  order: 4
image: /media/img/dockarshoot/homepage.png
update_date: 2024-09-10
author:
 name: JAMSTACK THEMES
 link: https://hockeycomputindo.com/themes/
show_author: true
show_update_date: true
show_edit_page: true
show_table_of_content: true
tags:
  - media
  - eleventy image
---

### Dockar Media

To use media such image , video and others file, you can upload all your media files in to `/content/media/`

Since we are using eleventy image widget, all images will be automatically compressed by eleventy, therefore in the build production process will produce images that have been optimized by eleventy with random file names. This is why we need to place our static files on `/content/media` folder.

### How to use media assets in to project

To insert your media assets, you simply add your media location files in to JSON / YAML / Markdown frontmatter,example look like this 

```YAML
image: /media/img/myimage.jpg
```

