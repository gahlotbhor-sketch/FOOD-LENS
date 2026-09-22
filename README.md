# FoodLens

### Understand the food you eat.

FoodLens is an AI-powered food literacy platform designed to make understanding food, nutrition, ingredients, and allergens **simple, engaging, and accessible**.

With a clean and intuitive UI, FoodLens aims to turn food education into an interactive experience rather than a collection of complicated nutritional information. The platform is designed with **children and young users in mind**, using simple explanations, visual feedback, and in-app rewards to make learning about food more interesting and motivating.

The goal is not to tell users what they should or shouldn't eat, but to help them **understand what they're eating and why it matters**.

## 🎯 What is FoodLens?

FoodLens explores how AI and interactive design can be used to promote **food literacy**.

The platform aims to:

* 🥗 Make nutrition information easier to understand
* 🧾 Explain ingredients in simple language
* ⚠️ Help users identify potential allergens
* ⭐ Provide simple and understandable food insights
* 🤖 Use AI to analyze different types of food
* 🌐 Make food information accessible across languages
* 🎮 Encourage learning through interactive experiences and rewards
* 👦 Make food literacy more engaging for children and young users

### 🌱 The Idea

FoodLens is built around a simple idea:

> **Learning about food shouldn't feel like reading a nutrition label.**

Instead, the experience should be **visual, interactive, simple, and engaging**.

Users can explore the food they eat, understand its nutritional characteristics and ingredients, learn about potential concerns, and receive feedback in a way that is easier to understand.

A reward system can further encourage users to explore and learn consistently, turning food literacy into an **interactive learning experience** rather than a one-time activity.

## 🚀 Project Status

FoodLens is currently under active development.

### Current Progress

* ✅ Frontend foundation
* ✅ HTML & CSS interface
* ✅ JavaScript fundamentals
* ✅ React development
* 🚧 Tailwind CSS
* 🚧 TypeScript
* 🚧 PostgreSQL database
* 🚧 FastAPI backend
* 🚧 AI/ML integration
* 🔜 Interactive reward system
* 🔜 Complete frontend → backend → database integration

## 🛠️ Tech Stack

### Frontend

* HTML
* CSS
* JavaScript
* React
* Tailwind CSS
* TypeScript

### Backend

* Python
* FastAPI

### Database

* PostgreSQL

### AI / Machine Learning

* Python
* NumPy
* Neural Networks

## 🏗️ Planned Architecture

```text
                         FoodLens
                            │
                            ▼
                      React Frontend
                            │
                            ▼
                      FastAPI Backend
                       ↙           ↘
                      ↙             ↘
             PostgreSQL           AI/ML
               Database           Model
                      │
                      ▼
              User Progress &
                 Rewards
```

The frontend will communicate with the FastAPI backend through APIs. The backend will handle application logic, communicate with PostgreSQL, manage user-related data and progress, and interact with AI/ML components where required.
