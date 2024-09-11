---
title: Sub Docs Group
description: How to create sub or grouping documentation on eleventy 11ty dockar navigation
eleventyNavigation:
  key: Sub Doc
  parent: Doc Page
  order: 4
update_date: 2024-09-10
image: /media/img/dockarshoot/docpage.png
author:
 name: JAMSTACK DEV
 link: https://www.hockeycomputindo.com/en/jamstack
show_author: true
show_update_date: true
show_edit_page: true
show_table_of_content: true
tags:
  - sub doc
  - doc page
---
### Sub Docs / Group Categories Doc Article

If you want to create sub or documentation group page, you can open `content/doc` create new folder and name it with your doc categories group, and create `index.md` file inside your new docs group folder.

### Main Sub / Group Docs

Next you can setup your sub docs or grouping docs by add this frontmatter in to your `content/doc/groupfolder/index.md` file, 

example we use `getstarted` folder so you can create new `index.md` file insiide `getstarted` folder complete code location `content/doc/getsarted/index.md`

```YAML
eleventyNavigation:
  key: Sub or Group Docs Page Name Here...
  order: 3
```

Change key with your sub or group docs article for example `get started` and change sort order for your nav docs area.

Implementation look like this

```YAML
eleventyNavigation:
  key: Get Started
  order: 3
```

Your Sub or Group Document will be displayed in the document navigation area with the title `Get Started` with sort order number `3`

Complete code look like this

```YAML
---
title: Get Started Page
description: How to use documentation page on dockar 11ty eleventy docs site project
eleventyNavigation:
  key: Get Started
  order: 3
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
```

### Sub / Group Docs Article

Once you have created an `index.md` file for your sub/group on `getstarted`, now you can create a new article for your sub/group's document page.

Create new markdown file and name it with your article for sub / group documentation , example we create article about installation with `install.md` file inside `content/doc/getsarted` folder.

Next you can organize this article into the document navigation area by setting the eleventy navigation.

```YAML
eleventyNavigation:
  key: Installation
  parent: Get Started
  order: 1
```

`Key` is the title of your document article for your document navigation, and `parent` is the main group article of your document , The sequence is the sequential number of the group documentation article.

Example Complete Code look like this

```YAML
---
title: INstallation
description: How to install thisproject.
image: /media/img/docpage.png
eleventyNavigation:
  key: Installation
  parent: Get Started
  order: 1
update_date: 2024-09-10
author:
 name: JAMSTACK DEV
 link: https://www.hockeycomputindo.com/en/jamstack
show_author: true
show_update_date: true
show_edit_page: true
show_table_of_content: true
tags:
  - installation
---

Write article here...

```
