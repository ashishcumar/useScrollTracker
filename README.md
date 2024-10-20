# useScrollTracker

`useScrollTracker` is a custom React hook that tracks the user's scroll progress on a web page or within a specific container. It returns the current scroll percentage, making it easy to implement features like reading progress bars, infinite scrolling, scroll-based animations, and sticky headers. The hook is lightweight, flexible, and suitable for enhancing user experience in React applications. With built-in support for both window and custom container elements, `useScrollTracker` helps developers seamlessly integrate scroll-based features into their projects.,

![Build](https://img.shields.io/github/actions/workflow/status/ashishcumar/useScrollTracker/publish.yml)
![Fast](https://img.shields.io/badge/fast-12kb-blue)
![Lightweight](https://img.shields.io/badge/lightweight-16kb-green)
![Npm-Version](https://img.shields.io/npm/v/use-scroll-tracker.svg)
![Trusted](https://img.shields.io/badge/trusted-orange)
![No Dependency](https://img.shields.io/badge/dependencies-none-brightgreen)

## 📦 Installation

Install the package using npm or yarn:

```bash
npm install use-scroll-tracker
```

## 🔍 Use Cases

The `use-scroll-tracker` hook can be useful for a variety of scenarios, including:

* **Infinite Scrolling:** Trigger loading more content when the user reaches a certain scroll percentage.
* **Scroll-Triggered Animations:** Activate animations or visual effects based on the scroll position.
* **Sticky Headers or Footers:** Show or hide elements when the user scrolls in a certain direction.
* **Progress Indicators:** Display a reading progress bar for long articles or documents.
* **Scroll Analytics:** Track how far users scroll down a page for analytics purposes.

## 🚀 Features

* Tracks scroll percentage and scroll direction (up, down, left, right).
* Supports both vertical and horizontal scrolling.
* Allows custom threshold events to trigger callbacks at specific scroll percentages.
* Works with both window and specific scrollable elements.
* Includes TypeScript type definitions for enhanced development experience.

## 📜 API
The `useScrollTracker` hook returns an object with the following properties:

* **`scrollPercentage`**: The current scroll percentage of the target element.
* **`scrollDirection`**: The direction of scrolling. It can be one of the following: up, down, left, right, or null if the direction hasn't changed.

## ☑ Options
The hook accepts an options object with the following properties:

* **`thresholdEvents`**: An object where keys are scroll percentages and values are callback functions that trigger when the scroll reaches or exceeds the specified percentage.
* **`horizontalScroll`**: A boolean to indicate whether the scrolling is horizontal (true) or vertical (false). The default is false (vertical scroll).
* 

## 📖 Examples

Here are some improved examples for using the `use-scroll-tracker` package with both window objects and HTML elements, along with better CSS styling:

### Example 1: Tracking Scroll Progress on the Window Object

This example demonstrates how to track the scroll progress of the entire window: [Live Demo](https://stackblitz.com/edit/react-2xwhva?file=src%2FApp.js)

### Example 2: Tracking Scroll Progress on the Element.

This example demonstrates how to track the scroll progress of the entire element: [Live Demo](https://stackblitz.com/edit/react-inqsuz?file=src%2FApp.js)

## ⚠️ Error Handling

If an invalid `targetElement` is provided (not an HTMLElement or Window), a warning will be logged to the console:

```javascript
Invalid targetElement provided. Please provide a valid HTMLElement or use the default window.
```

## Check Out My Other Packages

Explore more useful packages by visiting [my npm profile](https://www.npmjs.com/~iashish.99). Made with ❤️ by Ashish