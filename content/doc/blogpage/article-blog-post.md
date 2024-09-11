---
title: Blog Post
description: How to create and update article blog post dockar docs 11ty eleventy project.
eleventyNavigation:
  key: Article Post
  parent: Blog Page
  order: 2
update_date: 2024-09-10
image: /media/img/dockarshoot/blogpage.png
author:
 name: JAMSTACK THEMES
 link: https://hockeycomputindo.com/themes/
show_author: true
show_update_date: true
show_edit_page: true
show_table_of_content: true
tags:
  - article
  - blog post
---
### Create New Blog Article

To create new blog article, you can access on `content/blog`

Next create new markdown file and name it with your article post, example `hello-world.md`

Copy and paste this frontmatter concept in to your hello-world.md

```YAML
---
title: Your title here...
description: Your description here....
date: 2024-08-17
image: /media/img/myimage.jpg
show_table_of_content: true
show_tag_cloud: true
show_update_post: true
author: creativitas.dev
tags:
 - this is tags
 - tags 1
---

Write Article in here....

```

### SEO Article

You can add title ,description , publish date, and cover image for your meta tag, twitter card and open graph.
 
```YAML
title: Your title here...
description: Your description here....
date: 2024-08-17
image: /media/img/jamstackthemes.jpg
```

### Blog Widget

You can activate or deactivate the blog widget , to activate you can insert `true` in to widget area, to deactivate you can insert `false` in to widget area

```YAML
show_table_of_content: true
show_tag_cloud: true
show_update_post: 
```

### Article Post Tags

You can insert your blog tags, in to tags area.
 
```YAML
tags:
 - this is tags
 - tags 1
```

### Write Content Article

Next you can write your content article in to markdown body area
 
```YAML
---
title: Your title here...
description: Your description here....
date: 2024-08-17
image: /media/img/jamstackthemes.jpg
show_table_of_content: true
show_tag_cloud: true
show_update_post: true
author: creativitas.dev
tags:
 - this is tags
 - tags 1
---

Write Article in here....

```
