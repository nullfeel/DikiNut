<p align="center">
    <img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-markdown-open.svg" align="center" width="30%">
</p>
<p align="center"><h1 align="center">DIKINUT</h1></p>
<p align="center">
	<em><code>❯ Nutrition Tracking App</code></em>
</p>
<p align="center">
	<img src="https://img.shields.io/github/license/nullfeel/DikiNut?style=default&logo=opensourceinitiative&logoColor=white&color=0080ff" alt="license">
	<img src="https://img.shields.io/github/last-commit/nullfeel/DikiNut?style=default&logo=git&logoColor=white&color=0080ff" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/nullfeel/DikiNut?style=default&color=0080ff" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/nullfeel/DikiNut?style=default&color=0080ff" alt="repo-language-count">
</p>
<p align="center"><!-- default option, no dependency badges. -->
</p>
<p align="center">
	<!-- default option, no dependency badges. -->
</p>
<br>

## 🔗 Table of Contents

- [📍 Overview](#-overview)
- [👾 Features](#-features)
- [📁 Project Structure](#-project-structure)
  - [📂 Project Index](#-project-index)
- [🚀 Getting Started](#-getting-started)
  - [☑️ Prerequisites](#-prerequisites)
  - [⚙️ Installation](#-installation)
  - [🤖 Usage](#🤖-usage)
- [🔰 Contributing](#-contributing)

---

## 📍 Overview

<code>❯ DickyNut - Nutrition Tracking App Setup</code>

---

## 👾 Features

<code>Show today's consumed meals</code>
<code>Display nutritional totals:
Total calories consumed
Total protein (g)
Total carbohydrates (g)
Total fat (g)
</code>
<code>Display calculated BMI with status (Underweight/Normal/Overweight)</code>
<code>
Fetch recipes from Spoonacular API </code>

---

## 📁 Project Structure

```sh
└── DikiNut/
    ├── eslint.config.js
    ├── index.html
    ├── package-lock.json
    ├── package.json
    ├── postcss.config.js
    ├── src
    │   ├── App.tsx
    │   ├── components
    │   ├── contexts
    │   ├── index.css
    │   ├── lib
    │   ├── main.tsx
    │   ├── pages
    │   └── vite-env.d.ts
    ├── supabase
    │   └── migrations
    ├── tailwind.config.js
    ├── tsconfig.app.json
    ├── tsconfig.json
    ├── tsconfig.node.json
    └── vite.config.ts
```


### 📂 Project Index
<details open>
	<summary><b><code>DIKINUT/</code></b></summary>
	<details> <!-- __root__ Submodule -->
		<summary><b>__root__</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='https://github.com/nullfeel/DikiNut/blob/master/postcss.config.js'>postcss.config.js</a></b></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/nullfeel/DikiNut/blob/master/tsconfig.node.json'>tsconfig.node.json</a></b></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/nullfeel/DikiNut/blob/master/package-lock.json'>package-lock.json</a></b></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/nullfeel/DikiNut/blob/master/tsconfig.json'>tsconfig.json</a></b></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/nullfeel/DikiNut/blob/master/tailwind.config.js'>tailwind.config.js</a></b></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/nullfeel/DikiNut/blob/master/tsconfig.app.json'>tsconfig.app.json</a></b></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/nullfeel/DikiNut/blob/master/package.json'>package.json</a></b></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/nullfeel/DikiNut/blob/master/vite.config.ts'>vite.config.ts</a></b></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/nullfeel/DikiNut/blob/master/index.html'>index.html</a></b></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/nullfeel/DikiNut/blob/master/eslint.config.js'>eslint.config.js</a></b></td>
			</tr>
			</table>
		</blockquote>
	</details>
	<details> <!-- src Submodule -->
		<summary><b>src</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='https://github.com/nullfeel/DikiNut/blob/master/src/main.tsx'>main.tsx</a></b></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/nullfeel/DikiNut/blob/master/src/index.css'>index.css</a></b></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/nullfeel/DikiNut/blob/master/src/App.tsx'>App.tsx</a></b></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/nullfeel/DikiNut/blob/master/src/vite-env.d.ts'>vite-env.d.ts</a></b></td>
			</tr>
			</table>
			<details>
				<summary><b>contexts</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/nullfeel/DikiNut/blob/master/src/contexts/AuthContext.tsx'>AuthContext.tsx</a></b></td>
					</tr>
					</table>
				</blockquote>
			</details>
			<details>
				<summary><b>lib</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/nullfeel/DikiNut/blob/master/src/lib/spoonacular.ts'>spoonacular.ts</a></b></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/nullfeel/DikiNut/blob/master/src/lib/supabase.ts'>supabase.ts</a></b></td>
					</tr>
					</table>
				</blockquote>
			</details>
			<details>
				<summary><b>components</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/nullfeel/DikiNut/blob/master/src/components/CalorieRangeSlider.tsx'>CalorieRangeSlider.tsx</a></b></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/nullfeel/DikiNut/blob/master/src/components/PrivateRoute.tsx'>PrivateRoute.tsx</a></b></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/nullfeel/DikiNut/blob/master/src/components/RecipeInstructions.tsx'>RecipeInstructions.tsx</a></b></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/nullfeel/DikiNut/blob/master/src/components/Navigation.tsx'>Navigation.tsx</a></b></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/nullfeel/DikiNut/blob/master/src/components/BMIStatus.tsx'>BMIStatus.tsx</a></b></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/nullfeel/DikiNut/blob/master/src/components/RecipeCard.tsx'>RecipeCard.tsx</a></b></td>
					</tr>
					</table>
				</blockquote>
			</details>
			<details>
				<summary><b>pages</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/nullfeel/DikiNut/blob/master/src/pages/RecipeDetail.tsx'>RecipeDetail.tsx</a></b></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/nullfeel/DikiNut/blob/master/src/pages/History.tsx'>History.tsx</a></b></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/nullfeel/DikiNut/blob/master/src/pages/Login.tsx'>Login.tsx</a></b></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/nullfeel/DikiNut/blob/master/src/pages/Home.tsx'>Home.tsx</a></b></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/nullfeel/DikiNut/blob/master/src/pages/Register.tsx'>Register.tsx</a></b></td>
					</tr>
					</table>
				</blockquote>
			</details>
		</blockquote>
	</details>
	<details> <!-- supabase Submodule -->
		<summary><b>supabase</b></summary>
		<blockquote>
			<details>
				<summary><b>migrations</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/nullfeel/DikiNut/blob/master/supabase/migrations/20250202053053_rough_island.sql'>20250202053053_rough_island.sql</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					</table>
				</blockquote>
			</details>
		</blockquote>
	</details>
</details>

---
## 🚀 Getting Started

### ☑️ Prerequisites

Before getting started with DikiNut, ensure your runtime environment meets the following requirements:

- **Programming Language:** TypeScript
- **Package Manager:** Npm


### ⚙️ Installation

Install DikiNut using one of the following methods:

**Build from source:**

1. Clone the DikiNut repository:
```sh
❯ git clone https://github.com/nullfeel/DikiNut
```

2. Navigate to the project directory:
```sh
❯ cd DikiNut
```

3. Install the project dependencies:


**Using `npm`** &nbsp; [<img align="center" src="https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white" />](https://www.npmjs.com/)

```sh
❯ npm install
```




### 🤖 Usage
Run DikiNut using the following command:
**Using `npm`** &nbsp; [<img align="center" src="https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white" />](https://www.npmjs.com/)

```sh
❯ npm start
```


### 🧪 Testing
Run the test suite using the following command:
**Using `npm`** &nbsp; [<img align="center" src="https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white" />](https://www.npmjs.com/)

```sh
❯ npm test
```

---

## 🔰 Contributing

- **💬 [Join the Discussions](https://github.com/nullfeel/DikiNut/discussions)**: Share your insights, provide feedback, or ask questions.
- **🐛 [Report Issues](https://github.com/nullfeel/DikiNut/issues)**: Submit bugs found or log feature requests for the `DikiNut` project.
- **💡 [Submit Pull Requests](https://github.com/nullfeel/DikiNut/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.

<details closed>
<summary>Contributing Guidelines</summary>

1. **Fork the Repository**: Start by forking the project repository to your github account.
2. **Clone Locally**: Clone the forked repository to your local machine using a git client.
   ```sh
   git clone https://github.com/nullfeel/DikiNut
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to github**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.
8. **Review**: Once your PR is reviewed and approved, it will be merged into the main branch. Congratulations on your contribution!
</details>

<details closed>
<summary>Contributor Graph</summary>
<br>
<p align="left">
   <a href="https://github.com{/nullfeel/DikiNut/}graphs/contributors">
      <img src="https://contrib.rocks/image?repo=nullfeel/DikiNut">
   </a>
</p>
</details>

---
