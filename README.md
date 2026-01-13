# CSS

    - Configure Tailwind Css

# Inital

    - Add one Counter Component

# Setup JSON Server

    - Install Global: npm install -g json-server
    - Install locally:  npm install json-server --save-dev
    - Create (db.json)
    - Start Server: json-server --watch db.json --port 3001
    - API Will availble:
        -  GET http://localhost:3001/users
        -  GET http://localhost:3001/users/1

# Code for Commonly Used Hooks

    - useState
    - useEffect
    - useContext
    - useRef
    - useMemo
    - useCallback

# Example by hook

    1. useState - For Toggle/Counter (useToggle.jsx)
    2. useEffect - For Fetch API (useFetch.jsx)
    3. useContext - For Theme Context (ThemeContext.jsx)
    4. useRef - Event listener + previous value (useEventListener.jsx)
    5. useMemo - For Debounced value (computed) (useDebouncedValue.jsx)

# Desciption

    - Project Scenario: User Management Dashboard
        🧠 Problem Statement (Real-World)

        A company wants an internal admin dashboard where managers can:

        1. View a list of users fetched from an API

        2. Search users by name efficiently

        3. Switch between light & dark themes globally

        4. Improve performance for large datasets

        Enhance UX with auto-focus and optimized rendering

    - Business Requirements

        1. Fetch users from a backend API on page load

        2. Allow searching users by name

        3. Avoid unnecessary re-rendering for better performance

        4. Share theme state across multiple components

        5. Improve usability (auto-focus search input)

        6. Keep the app scalable and maintainable

# Divide Component
