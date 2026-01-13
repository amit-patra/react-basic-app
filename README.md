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

    Initial UI state (at first render)

    Theme: dark (can be toggled)
    Search: empty ("")
    Filters panel: hidden
    Data status: idle (no loading until a query is entered)
    Cards: six cards displayed — useState, useEffect, useContext, useRef, useMemo, useCallback — each with a short description and a usage snippet
    Layout: responsive grid with subtle shadows and rounded corners
    Header: “React Hooks” + a Toggle theme button
    --------------------------------------------------------
    Header: “React Hooks”
    Buttons:
    Toggle theme (uses useContext + useState)
    Show Filters (uses useToggle)


    Search bar: (uses useState + useDebouncedValue)
    Loading indicator: (controlled by useEffect + useFetch)
    List of hooks: dynamically rendered based on state.

    This layout demonstrates how each hook ties into a real UI scenario.

# Divide Component
