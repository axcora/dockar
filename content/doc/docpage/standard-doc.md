---
title: Standard Docs
description: Create standard documentation page 11ty eleventy dockar project.
eleventyNavigation:
  key: Standard Doc
  parent: Doc Page
  order: 2
update_date: 2024-09-10
image: /media/img/dockarshoot/docpage.png
author:
 name: ELEVENTY DEV
 link: https://hockeycomputindo.com/en/jamstack/11ty
show_author: true
show_update_date: true
show_edit_page: false
show_table_of_content: true
tags:
  - standard
  - doc page
---
### Default Docs Article

If you want to create standard documentation page, you can open `content/doc` create new markdown file , and name it with your doc page , example `getstart.md`

```YAML
---
title: Title your doc page...
description: Description for your doc page artcles...
image: Inser your image here.....
eleventyNavigation:
  key: Insert key in to nav docs here....
  order: Add number sort order for doc nav here...
update_date: Update docs page date....
author:
 name: Insert authore name here....
 link: Link author name goes here....
show_author: true // change false if you want disable this widget
show_update_date: true // change false if you want disable this widget
show_edit_page: true // change false if you want disable this widget
show_table_of_content: true // change false if you want disable this widget
tags:
  - your tags
  - tags1
---

write your article here....

```

Example Implementation

### SEO Setup

For first we can setup your docs article page SEO, such title description and image for meta tag, twitter card and open graph.

```YAML
title: Title your doc page...
description: Description for your doc page articles...
image: Insert cover image doc page articles...
```

### Add to Navigation Docs

Next we can add this docs article in to navigation docs area 

```YAML
eleventyNavigation:
  key: Introduction
  order: 1
```

Change order number with sort order number for your docs article.

### Update Docs Article

You can display information update date about your documentation article on `update_date` area. 

```YAML
update_date: 2024-09-10
```

### Docs Author

You can display information about your documentation author on `author` area. 

```YAML
author:
 name: Static Site Dev
 link: https://creativitas.dev/service/build-develop-website-with-jekyll-eleventy-astro-static-site-generator/
```

Insert author name, and author url on this area.

### Docs Widget

You can activate or deactivate documentation widget on widget area, change `true` if you want to activate widget, or change `false` to deactivate widget.

```YAML
show_author: true
show_update_date: true
show_edit_page: false
show_table_of_content: true
```

Show author is to displaying your author

Show Update date is to activate update date on docs article.

Show Edit page if you want everyone can colabs in your docs github repo.

Show table of content if you want to generate documentation table of content

### Add Tags in to Docs Page

You can add tags for your documentation article on tags area

```YAML
tags:
  - your tags
  - tags1
```

To add new tags you can simply copy and paste then edit tags.

### Write Docs Article

Next you can write post article on markdown body area.
