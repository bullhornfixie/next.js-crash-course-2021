# Next.js Crash Course 2021 

[Course Link](https://www.youtube.com/watch?v=mTz0GXj8NN0)

### Overview of Next.js
- Builds on top of react to provide extra features 
- Server side rendering 
- Static site generation (next export)
- /Public is a static folder and can be access directly from browser 
- Source code is accessible to search engine crawlers - good for SEO
- import Head from 'next/head' enables you to create custom titles or meta tags in `<Head>`
- Need a single parent element such as <> or `<div>` for jsx elements such as `<Head>`

### Key Learning Points
- Wrapped pages in Layout component 
- GetStaticProps
- Importing css files to components and wrapping elements in those styling components
- Changed detect indent on VS to 2
- Nested routes 

### GetStaticProps
- Next.js has an advantage over React apps on page pre-rendering 
- This means we generate all the HTML code and data in advanace 
- Is this done automatically?
- No, we need to narrate Next.js to pre-generate the page during build time 
- Here, getStaticProps comes into the picture 

### StyleSheets 
- You cannot import global stylesheets into pages/components e.g. `global.css`
- It must include .module e.g. `home.module.css` 
- However, you can import `global.css` into `_app.js`

### Resources 
[Use Next.js as a Static Site Generator](https://pagepro.co/blog/how-to-use-next-js-static-site-generator/) </br>
[What is getStaticProps?](https://dev.to/akuks/what-is-getstaticprops-in-nextjs-3066)