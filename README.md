#Next.js Crash Course 2021 

[Course](https://www.youtube.com/watch?v=mTz0GXj8NN0)

### Key Learning Points 
- Builds on top of react to provide extra features 
- Server side rendering 
- Static site generation (next export)
- /Public is a static folder and can be access directly from browser 
- Source code is accessible to search engine crawlers - good for SEO
- import Head from 'next/head' enables you to create custom titles or meta tags in `<Head>`
- Need a single parent element such as <> or `<div>` for jsx elements such as `<Head>`

### StyleSheets 
- You cannot import global stylesheets into pages/components e.g. `global.css`
- It must include .module e.g. `home.module.css` 
- However, you can import `global.css` into `_app.js`

### Resources 
[Use Next.js as a Static Site Generator](https://pagepro.co/blog/how-to-use-next-js-static-site-generator/)