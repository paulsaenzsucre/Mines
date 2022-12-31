<a name="readme-top"></a>

<div align="center">
<img style="width: 64px; height: 64px" src="./src/images/mines-icon.png" />
  <br/>

  <h1><b>MINES</b></h1>

</div>

# 📗 Table of Contents

- [📖 About the Project](#about-project)
  - [🛠 Built With](#built-with)
    - [Tech Stack](#tech-stack)
    - [Key Features](#key-features)
  - [🚀 Live Demo](#live-demo)
- [💻 Getting Started](#getting-started)
  - [Setup](#setup)
  - [Prerequisites](#prerequisites)
  - [Install](#install)
  - [Run tests](#run-tests)
- [👥 Authors](#authors)
- [🔭 Future Features](#future-features)
- [🤝 Contributing](#contributing)
- [⭐️ Show your support](#support)
- [🙏 Acknowledgements](#acknowledgements)
- [📝 License](#license)

# 📖 Mines <a name="about-project"></a>

**Mines** is a clone of the classic Microsoft Windows Minesweeper game.

It was coded using standard technologies like HTML5, CSS3 and JavaScript; and has an object-oriented approach using a model view presenter pattern.

## 🛠 Built With <a name="built-with"></a>

### Tech Stack <a name="tech-stack"></a>

<details>
  <summary>Client</summary>
  <ul>
    <li><a href="https://html.spec.whatwg.org/multipage/">HTML 5 </a></li>
    <li><a href="https://html.spec.whatwg.org/multipage/">CSS 3 </a></li>
    <li><a href="https://html.spec.whatwg.org/multipage/">JavaScript </a></li>
  </ul>
</details>

### Key Features <a name="key-features"></a>

- **The web shows a board of buttons cells that cover a mine or a number representing the adjacent mine count instead.**

- **The players can click on a button cell to uncover it. If it has a mine, it shows an exploded mine and dispatch an explode custom event; else, it shows the surround mines count.**

- **The players can right-click on a button cell to flag it to signal that they think it cover a mine. If they right-click again the cell shows a question mark to signal that they are unsure it covers a mine. If they right-click again the cell deletes the question mark and shows a covered look.**

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🚀 Live Demo <a name="live-demo"></a>

- [Live Demo Link](https://elafildecolor.github.io/Mines/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 💻 Getting Started <a name="getting-started"></a>

To get a local copy up and running, follow these steps.

### Prerequisites

In order to run this project you need:

In order to run this project you need:

- Git or Github Desktop

- Code editor like: [Visual Studio code](https://code.visualstudio.com/), [Sublime text](https://www.sublimetext.com/) or others...

- Npm and Node.js

### Setup

- You can download the **Zip** file on the GitHub repository, or clone the repository with:

```bash
git clone https://github.com/elafildecolor/Mines.git
```

- Access the cloned directory with:

```bash
cd Mines
```

- Open it with your favorite code editor or with the live server

### Install

To install run:

```bash
npm install
```

### Run tests

To analyze the source code in your local environment with linter follow these steps:

- Looking for linter errors in HTML files run:

```bash
npx hint .
```

- Looking for linter errors in CSS | SASS files run:

```bash
npx stylelint "**/*.{css,scss}"
```

- Looking for linter errors in JavaScript files run:

```bash
npx eslint .
```

## 👥 Authors <a name="authors"></a>

👥 **Paul Sáenz Sucre**

- GitHub: [@elafildecolor](https://github.com/elafildecolor)
- Twitter: [@paulsaenzsucre](https://twitter.com/paulsaenzsucre)
- LinkedIn: [LinkedIn](https://www.linkedin.com/in/paulsaenzsucre)

👥 **Pierre Barba Arredondo**

- GitHub: [@PierreBarba](https://github.com/PierreBarba)
- Twitter: [@pierreanbar](https://twitter.com/pierreanbar)


<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🔭 Future Features <a name="future-features"></a>

- [ ] **Implement the MineSweeper game logic**
- [ ] **Show a game board with score and time lapsed**
- [ ] **Show a leaderboard**

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🤝 Contributing <a name="contributing"></a>

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](../../issues/).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## ⭐️ Show your support <a name="support"></a>

Give a ⭐️ if you like this project!

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🙏 Acknowledgments <a name="acknowledgements"></a>

- Hat tip to anyone whose code was used.
- Thanks for all the curated content that was provided to us.
- Thanks to my learning and coding partners for all their support.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 📝 License <a name="license"></a>

This project is [MIT](./LICENSE) licensed.

<p align="right">(<a href="#readme-top">back to top</a>)</p>