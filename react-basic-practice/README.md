# React basic practice

## Overview:
- This document provides information about React basic practice.
- [Design](https://www.figma.com/file/hzs1lkW5TzXMYaYb0L9AG4/Shoppe-(Community)?node-id=0%3A1)

## Targets:
- Apply React hooks, custom hooks
- Understand about how React hooks + Contexts work
- Apply
  - Props & states
  - Lifecycles
  - Reusable components
  - Client & server
  - Analyze design
  - Code style

## Information:

### Timeline:
  - Estimate time: 14 days.
  - Actual time: 

### Technical:
  - [HTML5](https://en.wikipedia.org/wiki/HTML5): is a markup language used for structuring and presenting content on the World Wide Web
  - [CSS3](https://www.techopedia.com/definition/28243/cascading-style-sheets-level-3-css3): is the iteration of the CSS standard used in the styling and formatting of Web pages
  - [React Hook](https://reactjs.org/docs/hooks-intro.html): a new addition in React 16.8. They let you use state and other React features without writing a class.
  - [React Router](https://v5.reactrouter.com/web/guides/quick-start): is a standard library for routing in React.
  - [JSON server](https://www.digitalocean.com/community/tutorials/json-server):  is a Node Module that you can use to create demo rest json web service in less than a minute. All you need is a JSON file for sample data.
  - [Vite](https://vitejs.dev/guide): is a build tool that aims to provide a faster and leaner development experience for modern web projects.
- Editor: Visual Studio Code.

### Development environment:
- Node: version 16.16.0
- pnpm: version 7.22.0
- Vite: version 2.2.0
- json-server: version 0.17.1

### Document:
- [React basic practice requirements](https://docs.google.com/document/d/1sKtSpHCBjVG41UQbgr7-rTqtBuEr6zGupDaYoB1Fh4k/edit#heading=h.ar0k1bmftkqn)
- [React basic practice plan](https://docs.google.com/document/d/1A4l00R8XSeN0HboQ228BYB-QL25dogINWC3cTlu-2B4/edit#heading=h.hns12qy2rutr)

### Main app features:
- User can login / logout / sign up.
- Homepage
  - User can see list of products.
  - User can see more products when click button load more.
  - User can see number of products in cart on header (when add to cart).
  - User can search by name.
  - User can sort product by:
    - Price: Lowest to Highest, Highest to Lowest
    - Name: A-Z
- Product details
  - User can see product details
  - Users can adjust the number of products they want to add
  - User can add products to cart


## Getting started

### 1) Clone repo and checkout branch
- Step 1: Cloning the repo
    - HTTPS: 
      ```
      $ git clone https://github.com/MinhNguyen41092/Minh-Nguyen-React-Basic-Practice.git
      ```
    - SSH: 
      ```
      $ git clone git@github.com:MinhNguyen41092/Minh-Nguyen-React-Basic-Practice.git
      ```
- Step 2: Checkout to branch develop `git checkout develop`

### 2) Run server (Open new terminal tab)
- Step 1: Go to the folder server `cd data`
- Step 2: Install package `pnpm install`
- Step 3: Run server `pnpm run start-db`

### 3) Run application (Open new terminal tab)
- Step 1: Go to the folder react practice `cd react-basic-practice`
- Step 2: Install package `pnpm install`
- Step 3: Run project `pnpm run dev`
- Step 4: Open `http://127.0.0.1:5173/` in your browser to see the Web application.
