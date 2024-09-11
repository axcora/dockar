---
title: Blog List
description: Setup your blog list article docakr documentation 11ty eleventy project.
eleventyNavigation:
  key: Blog List
  parent: Blog Page
  order: 1
image: /media/img/dockarshoot/blogpage.png
update_date: 2024-08-17
author:
 name: JAMSTACK THEMES
 link: https://hockeycomputindo.com/themes/
show_author: true
show_update_date: true
show_edit_page: true
show_table_of_content: true
tags:
  - blog list
  - blog
---
### Setup Blog List

If you want to setup your blog list you can access on `content/blog.njk`

And update blog list page with your needs.

### SEO Blog List

First you can update title ,description and cover image for your meta tag, open graph and twitter card for your blog list page. 

```YAML
title: Your tilte here....
description: Update your description in here....
image: Your image url here.....
```

### Show Posts

Next you can change how many article posts you want to display on the blog list page, by changing the `size` number at the frontmatter.

```YAML
pagination:
  data: collections.posts
  size: 4
```

Example if you want to show `8` article, you can change this line code


```YAML
pagination:
  data: collections.posts
  size: 8
```
