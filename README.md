<div id="top">

<!-- HEADER STYLE: CLASSIC -->
<div align="center">

<!-- <img src="readmeai/assets/logos/purple.svg" width="30%" style="position: relative; top: 0; right: 0;" alt="Project Logo"/> -->

# NEW-CONTEXT

<em>Empower creation with context, code, and positivity.</em>

<!-- BADGES -->
<img src="https://img.shields.io/github/license/rounakkumarsingh/new-context?style=default&logo=opensourceinitiative&logoColor=white&color=0080ff" alt="license">
<img src="https://img.shields.io/github/last-commit/rounakkumarsingh/new-context?style=default&logo=git&logoColor=white&color=0080ff" alt="last-commit">
<img src="https://img.shields.io/github/languages/top/rounakkumarsingh/new-context?style=default&color=0080ff" alt="repo-top-language">
<img src="https://img.shields.io/github/languages/count/rounakkumarsingh/new-context?style=default&color=0080ff" alt="repo-language-count">

<!-- default option, no dependency badges. -->

<!-- default option, no dependency badges. -->

</div>
<br>

---

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Overview](#overview)
- [Features](#features)
- [Project Structure](#project-structure)
    - [Project Index](#project-index)
- [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Usage](#usage)
    - [Testing](#testing)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)

---

## Overview

new-context simplifies context creation and project setup, offering a seamless experience for developers.

**Why new-context?**

This project streamlines context creation and project setup. The core features include:

- **🚀 Enhances Readability:** Apply consistent styling and provide informative context.
- **💡 Boosts Morale:** Collection of affirmations for a positive environment.
- **🔧 Optimal Configuration:** Configure TypeScript for robust development.
- **📁 File System Utilities:** Simplify file operations and error handling.

---

## Features

|     | Component         | Details                                                                                                                                                            |
| :-- | :---------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ⚙️  | **Architecture**  | <ul><li>Follows a modular architecture with clear separation of concerns.</li><li>Uses TypeScript for type safety and better code organization.</li></ul>          |
| 🔩  | **Code Quality**  | <ul><li>Consistent code style enforced using Prettier.</li><li>TypeScript used for static type checking.</li></ul>                                                 |
| 📄  | **Documentation** | <ul><li>Well-documented codebase with inline comments explaining complex logic.</li><li>README.md provides setup instructions and project overview.</li></ul>      |
| 🔌  | **Integrations**  | <ul><li>Integrates with npm for package management.</li><li>Uses React for frontend development.</li></ul>                                                         |
| 🧩  | **Modularity**    | <ul><li>Codebase divided into reusable modules for easy maintenance and scalability.</li><li>Follows a component-based architecture in React.</li></ul>            |
| 🧪  | **Testing**       | <ul><li>Includes unit tests for critical functions using Jest and React Testing Library.</li><li>Code coverage reports generated using Istanbul.</li></ul>         |
| ⚡️ | **Performance**   | <ul><li>Optimizes rendering performance by using React.memo and useMemo hooks.</li><li>Lazy loading implemented for improving initial load times.</li></ul>        |
| 🛡️  | **Security**      | <ul><li>Sanitizes user inputs to prevent XSS attacks.</li><li>Uses HTTPS for secure communication.</li></ul>                                                       |
| 📦  | **Dependencies**  | <ul><li>Manages dependencies using package.json and lock files for version control.</li><li>Includes type definitions for better development experience.</li></ul> |

---

## Project Structure

```sh
└── new-context/
    ├── README.md
    ├── affirmations.ts
    ├── bun.lock
    ├── helper.ts
    ├── index.ts
    ├── package.json
    ├── templates
    │   ├── JS
    │   └── TS
    ├── tsconfig.json
    └── utils.ts
```

### Project Index

<details open>
    <summary><b><code>NEW-CONTEXT/</code></b></summary>
    <!-- __root__ Submodule -->
    <details>
        <summary><b>__root__</b></summary>
        <blockquote>
            <div class='directory-path' style='padding: 8px 0; color: #666;'>
                <code><b>⦿ __root__</b></code>
            <table style='width: 100%; border-collapse: collapse;'>
            <thead>
                <tr style='background-color: #f8f9fa;'>
                    <th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
                    <th style='text-align: left; padding: 8px;'>Summary</th>
                </tr>
            </thead>
                <tr style='border-bottom: 1px solid #eee;'>
                    <td style='padding: 8px;'><b><a href='https://github.com/rounakkumarsingh/new-context/blob/master/helper.ts'>helper.ts</a></b></td>
                    <td style='padding: 8px;'>- Define functions for configuring and formatting code, logging context details, creating directories, and handling errors<br>- The code enhances readability by applying consistent styling and providing informative context during context creation<br>- It ensures a smooth experience for users setting up new contexts.</td>
                </tr>
                <tr style='border-bottom: 1px solid #eee;'>
                    <td style='padding: 8px;'><b><a href='https://github.com/rounakkumarsingh/new-context/blob/master/affirmations.ts'>affirmations.ts</a></b></td>
                    <td style='padding: 8px;'>- Provide a collection of affirmations to boost user morale and positivity within the new-context project<br>- These affirmations aim to uplift and inspire users as they engage with the application, fostering a welcoming and encouraging environment for all users.</td>
                </tr>
                <tr style='border-bottom: 1px solid #eee;'>
                    <td style='padding: 8px;'><b><a href='https://github.com/rounakkumarsingh/new-context/blob/master/tsconfig.json'>tsconfig.json</a></b></td>
                    <td style='padding: 8px;'>- Configure TypeScript compiler options for optimal ESNext and React development<br>- Enable latest features, strict mode, and bundler settings<br>- Ensure best practices and stricter flags for robust codebase architecture.</td>
                </tr>
                <tr style='border-bottom: 1px solid #eee;'>
                    <td style='padding: 8px;'><b><a href='https://github.com/rounakkumarsingh/new-context/blob/master/utils.ts'>utils.ts</a></b></td>
                    <td style='padding: 8px;'>- Implementing utility functions for file system operations like reading, writing, and creating directories<br>- Handles file system tasks asynchronously, with error handling for missing files<br>- Includes a function to read files relative to the current directory and a utility to randomly select an item from an array.</td>
                </tr>
                <tr style='border-bottom: 1px solid #eee;'>
                    <td style='padding: 8px;'><b><a href='https://github.com/rounakkumarsingh/new-context/blob/master/index.ts'>index.ts</a></b></td>
                    <td style='padding: 8px;'>- Generates context and provider files, along with an index file, based on user input<br>- Handles file creation, content population, and directory structure<br>- Validates if the context already exists to prevent duplication<br>- Provides clear logging and error handling throughout the process.</td>
                </tr>
                <tr style='border-bottom: 1px solid #eee;'>
                    <td style='padding: 8px;'><b><a href='https://github.com/rounakkumarsingh/new-context/blob/master/package.json'>package.json</a></b></td>
                    <td style='padding: 8px;'>- Define the projects dependencies and configurations in the package.json file<br>- Specify module entry points, versions, and peer dependencies<br>- Organize dev and peer dependencies for seamless integration.</td>
                </tr>
            </table>
        </blockquote>
    </details>
    <!-- templates Submodule -->
    <details>
        <summary><b>templates</b></summary>
        <blockquote>
            <div class='directory-path' style='padding: 8px 0; color: #666;'>
                <code><b>⦿ templates</b></code>
            <!-- TS Submodule -->
            <details>
                <summary><b>TS</b></summary>
                <blockquote>
                    <div class='directory-path' style='padding: 8px 0; color: #666;'>
                        <code><b>⦿ templates.TS</b></code>
                    <table style='width: 100%; border-collapse: collapse;'>
                    <thead>
                        <tr style='background-color: #f8f9fa;'>
                            <th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
                            <th style='text-align: left; padding: 8px;'>Summary</th>
                        </tr>
                    </thead>
                        <tr style='border-bottom: 1px solid #eee;'>
                            <td style='padding: 8px;'><b><a href='https://github.com/rounakkumarsingh/new-context/blob/master/templates/TS/Provider.tsx'>Provider.tsx</a></b></td>
                            <td style='padding: 8px;'>- Define a provider component for a specific context in the project structure<br>- This component wraps its children with the context provider, passing a null value.</td>
                        </tr>
                        <tr style='border-bottom: 1px solid #eee;'>
                            <td style='padding: 8px;'><b><a href='https://github.com/rounakkumarsingh/new-context/blob/master/templates/TS/context.ts'>context.ts</a></b></td>
                            <td style='padding: 8px;'>- Define a React context named CONTEXT_NAME in the templates/TS/context.ts file<br>- This context serves as a central hub for sharing data across components in the project structure.</td>
                        </tr>
                    </table>
                </blockquote>
            </details>
            <!-- JS Submodule -->
            <details>
                <summary><b>JS</b></summary>
                <blockquote>
                    <div class='directory-path' style='padding: 8px 0; color: #666;'>
                        <code><b>⦿ templates.JS</b></code>
                    <table style='width: 100%; border-collapse: collapse;'>
                    <thead>
                        <tr style='background-color: #f8f9fa;'>
                            <th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
                            <th style='text-align: left; padding: 8px;'>Summary</th>
                        </tr>
                    </thead>
                        <tr style='border-bottom: 1px solid #eee;'>
                            <td style='padding: 8px;'><b><a href='https://github.com/rounakkumarsingh/new-context/blob/master/templates/JS/Provider.jsx'>Provider.jsx</a></b></td>
                            <td style='padding: 8px;'>Define a provider component that wraps its children with a specific context.</td>
                        </tr>
                        <tr style='border-bottom: 1px solid #eee;'>
                            <td style='padding: 8px;'><b><a href='https://github.com/rounakkumarsingh/new-context/blob/master/templates/JS/context.js'>context.js</a></b></td>
                            <td style='padding: 8px;'>- Define a React context for sharing data across components within the projects architecture<br>- This context file, located at templates/JS/context.js, creates a CONTEXT_NAME using Reacts createContext method<br>- This facilitates seamless data sharing and management throughout the codebase.</td>
                        </tr>
                    </table>
                </blockquote>
            </details>
        </blockquote>
    </details>
</details>

---

## Getting Started

### Prerequisites

This project requires the following dependencies:

- **Programming Language:** TypeScript
- **Package Manager:** Npm

### Installation

Build new-context from the source and intsall dependencies:

1. **Clone the repository:**

    ```sh
    ❯ git clone https://github.com/rounakkumarsingh/new-context
    ```

2. **Navigate to the project directory:**

    ```sh
    ❯ cd new-context
    ```

3. **Install the dependencies:**

<!-- SHIELDS BADGE CURRENTLY DISABLED -->

    <!-- [![npm][npm-shield]][npm-link] -->
    <!-- REFERENCE LINKS -->
    <!-- [npm-shield]: https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white -->
    <!-- [npm-link]: https://www.npmjs.com/ -->

    **Using [npm](https://www.npmjs.com/):**

    ```sh
    ❯ npm install
    ```

### Usage

Run the project with:

**Using [npm](https://www.npmjs.com/):**

```sh
npm start
```

### Testing

New-context uses the {**test_framework**} test framework. Run the test suite with:

**Using [npm](https://www.npmjs.com/):**

```sh
npm test
```

---

---

## Contributing

- **💬 [Join the Discussions](https://github.com/rounakkumarsingh/new-context/discussions)**: Share your insights, provide feedback, or ask questions.
- **🐛 [Report Issues](https://github.com/rounakkumarsingh/new-context/issues)**: Submit bugs found or log feature requests for the `new-context` project.
- **💡 [Submit Pull Requests](https://github.com/rounakkumarsingh/new-context/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.

<details closed>
<summary>Contributing Guidelines</summary>

1. **Fork the Repository**: Start by forking the project repository to your github account.
2. **Clone Locally**: Clone the forked repository to your local machine using a git client.
    ```sh
    git clone https://github.com/rounakkumarsingh/new-context
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
   <a href="https://github.com{/rounakkumarsingh/new-context/}graphs/contributors">
      <img src="https://contrib.rocks/image?repo=rounakkumarsingh/new-context">
   </a>
</p>
</details>

---

## License

New-context is protected under the [LICENSE](https://choosealicense.com/licenses) License. For more details, refer to the [LICENSE](https://choosealicense.com/licenses/) file.

---

## Acknowledgments

- Credit `contributors`, `inspiration`, `references`, etc.

<div align="right">

[![][back-to-top]](#top)

</div>

[back-to-top]: https://img.shields.io/badge/-BACK_TO_TOP-151515?style=flat-square

---
