---
title: Update Documentation List
description: How to update documentation list dockar 11ty eleventy documentation site.
eleventyNavigation:
  key: Doc List
  parent: Doc Page
  order: 1
image: /media/img/dockarshoot/docpage.png
update_date: 2024-09-10
author:
 name: JAMSTACK THEMES
 link: https://hockeycomputindo.com/themes/
show_author: true
show_update_date: true
show_edit_page: true
show_table_of_content: true
tags:
  - doc list
  - list documentation
---
### Setup Docs List

You can change pagination display , or setup your title and description for documentation list in to `content/doc.njk`

Next you can customize this line code

```YAML
title: Title for your documentation list...
description: Description about your documentation list...
image: Insert image here.....
pagination:
  data: collections.docs
  size: 12 // Change number docs article to show here..
```
