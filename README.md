<h1 align="center">Collaborative Real-Time Socket.io Code Editor</h1>

<p align="center">
  <em>A collaborative real-time code editor built with Next.js, Node.js, Socket.io, HTML, CSS, and JavaScript.</em>
</p>

## Introduction

This project is a collaborative real-time code editor that allows multiple users to edit code together in real time. It is built with Next.js and Node.js using Socket.io for real-time communication. Users can create or join rooms, where they can edit code in a shared environment, seeing changes made by other participants instantly.

## Features

- Real-time collaboration: Multiple users can edit code together in real time.
- Room system: Users can create or join rooms to collaborate with others.
- Responsive design: The application is optimized for different screen sizes.

## Usage
- Create a new room by providing a unique room name.
- Share the room URL with others to invite them to collaborate.
- Start editing code in the shared code editor.
- Changes made by any participant will be instantly reflected in the editor for others.

## Demo

[Live Demo]()

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/not-nag/code_buddy.git

2. Navigate to the server directory:
   ```bash
   cd server
   
3. Install the dependencies:
   ```bash
   npm install

4. Navigate to the frontend directory present in the root:
   ```bash
   cd frontend

5. Install the dependencies:
   ```bash
   npm install
   
6. Configure the environment variables:
   Create a .env file in the root directory.
   Provide the necessary environment variables (MONGO_URI).
   
 7. Set the PORT:
    By default server runs on 3001 and frontend runs on 3000
 
 8. Start the development server:
    ```bash
    npm run dev
 9. Open your browser and visit http://localhost:3000.

## Bugs found:
Minor
1. On creating or joining a room, the window for a moment snaps back to the page that it was already in and then moves to router.push(...).
