---
# This is the title of the article
title: Page Config
# This is the icon of the page
icon: page
# This control sidebar order
order: 1
# Set author
author: sakurafeiyu
# Set writing time
date: 2023-04-05
# A page can have multiple categories
category:
  - Guide
# A page can have multiple tags
tag:
  - Page config
  - Guide
# this page is sticky in article list
sticky: true
# this page will appear in starred articles
star: true
# You can customize footer content
footer: ""
# You can customize copyright content
copyright: MIT Licensed | Copyright © 2020-present sakurafeiyu
---

Content before `more` comment is regarded as page excerpt.

<!-- more -->

## Page Information
Hello!这是一个demo页，用于演示markdown的语法以及功能，尽情体验markdown扩展吧。
You can set page information in Markdown’s Frontmatter.

## Page Content

You are free to write your Markdown here.

::: tip Assets

- You can place images besides your Markdown files, but you should use **relative links** (i.e.: starting with `./`) for them.

- For images in `.vuepress/public` directory, please use absolute links (i.e.: starting with `/`) for them.

:::

The theme contains a custom badge:

> A dark blue badge text badge at the end of line. <Badge text="Badge text" color="#242378" />

## Page Structure

This page should contain:

- [BreadCrumb](https://theme-hope.vuejs.press/guide/layout/breadcrumb.html)
- [Title and information](https://theme-hope.vuejs.press/guide/feature/page-info.html)
- [TOC (Table of Contents)](https://theme-hope.vuejs.press/guide/layout/page.html#header-list)
- [Meta information including update time and contributors](https://theme-hope.vuejs.press/guide/feature/meta.html)
- [Comments](https://theme-hope.vuejs.press/guide/feature/comment.html)
- [Navbar](https://theme-hope.vuejs.press/guide/layout/navbar.html)
- [Sidebar](https://theme-hope.vuejs.press/guide/layout/sidebar.html)
- [Footer](https://theme-hope.vuejs.press/guide/layout/footer.html)
- Back to top button

You can customize them in theme options and page frontmatter.
