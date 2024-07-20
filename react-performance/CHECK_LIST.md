# LIVE-CODE DEMO CHECK LIST:

### Introduction app and Dev Tools
1. Run the application and show the functionalities in the app
    - Home
        + Change Theme
        + Click Inc button
    - Product
        + Show list product
2. Show how to use Dev Tools in developing React application:
    - Present Why it render in source code and how it works on browser
    - React Dev Tools
        + Show how tool work in Components & Profiler tabs

## Basic cases
3. Split small components
    - Prevent change state in the parent component
    - Create the child components and move the logic to the child components
4. Apply React.memo to see performance changes
    - Apply components in Home page
    - Show shallow equal function
    - Correct Class PureComponent and Functional Component
    - Memo should be applied to the component with empty props
    - Should the memo be applied to all components? (Footer component)
5. Apply useCallback
    - Apply useCallback for functions in Home page
    - Perform the way memo work with useCallback
6. Apply useMemo
    - Apply useMemo to cache JSX Element

### Expensive cases

7. Apply useCallback
    - Use for handleGoBack function
8. Apply memo and useMemo
    - Show render time of Product page
    - Apply useMemo
        - To memoize Icon
        - To memoize an expensive calculation
        - For productList and productsFormatted
    - Apply memo to CardProduct component
    - Apply memo and react-fast-compare for deep comparison case in ProductList

**Notes:** useMemo won’t make the first render faster. It only helps you skip unnecessary work on updates.
