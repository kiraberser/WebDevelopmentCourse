# Todo List Application

A modern Todo List application built with React, TypeScript, and Tailwind CSS. This application allows users to manage their tasks efficiently with features like task creation, editing, completion tracking, and filtering.

## Features

- 📝 Create, read, edit, and delete tasks
- ✅ Mark tasks as completed
- 🔍 Filter tasks by status (All, Completed, Pending)
- 💾 Local storage persistence
- 🎨 Modern and responsive UI with Tailwind CSS
- ⌨️ Keyboard accessibility support

## Tech Stack

- React
- TypeScript
- Tailwind CSS
- React Router
- Context API for state management
- Local Storage for data persistence

## Getting Started

1. Clone the repository
```bash
git clone [your-repository-url]
```

2. Install dependencies
```bash
npm install
```

3. Run the development server
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Project Structure

```
src/
├── components/
│   ├── TodoList.tsx
│   ├── TodoItem.tsx
│   ├── Navbar.tsx
│   └── TodoError.tsx
├── context/
│   └── TodoContext.tsx
└── App.tsx
```

## Features in Detail

### Task Management
- Create new tasks with title and description
- Edit existing tasks
- Delete tasks
- Mark tasks as completed/incomplete

### Filtering
- View all tasks
- Filter by completed tasks
- Filter by pending tasks

### User Interface
- Responsive design that works on all devices
- Clean and modern interface
- Keyboard navigation support
- Error handling with custom error page

## Contributing

Feel free to submit issues and enhancement requests!

## License

This project is licensed under the MIT License - see the LICENSE file for details.
