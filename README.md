[![Netlify Status](https://api.netlify.com/api/v1/badges/fd086242-358e-4c7a-9977-da834e0f3c57/deploy-status)](https://app.netlify.com/sites/thirsty-ramanujan-0073e0/deploys)

# teachYou

![React logo](https://icons-for-free.com/iconfiles/png/512/design+development+facebook+framework+mobile+react+icon-1320165723839064798.png)![Styled components logo](https://raw.githubusercontent.com/styled-components/brand/master/styled-components.png)

[Hosted Project Link](https://weteachyou.aronweston.com)

The next best thing in online courses. You needs udemy anyway? Our courses will bring you from zero code to a bona-fide Bertram Gilfoyle!

![Visual overview of the site](src/assets/images/overview.png)

### Criteria Chosen & Completed

- [x] It should display list of all available courses
- [ ] It should have a search field where you can search and filter available courses by typing in the search field
- [ ] It should have a sort filter, you should be able to sort courses by date and duration
- [x] Hovering over a course should display an add button
- [x] Clicking on the add button should open a modal asking for your login credentials
- [x] After submitting the form with any credentials, user must get a successful login message and modal should close
- [x] Course should be added to a cart on the side of the screen
- [x] Clicking on new add button should not promote login modal if you have already logged in and it should add course to the side cart
- [x] If a course has already been added to your cart, hovering over should display a remove button
- [x] Clicking on the remove button should remove course from side cart

## Features

- Context API for state management including the cart and user state, as well as their respective helper functions to be available throughout the projects global scope.
- Header, Hero and Product Grid responsive down to small mobile screens.
- Mini cart with empty cart message component
- Login modal with loading and success message
- Responsive layout using a mobile-first approach, utilising the nesting and targeting available with SCSS and Styled Components.
- Globally styled elements using the globalStyles hook from Styled Components. As well as a global component where I have exported global styled elements such as buttons from.
- Successfully hosted on Netlify.

### Approach

My approach for this project was to create the best UI/UX experience as possible, placing a lot of attention on the presentation layer of the application. As such, I have focused on the criteria that make up the most basic functionality layer of a simple eCommerce application: cart functionality, product interaction, and

### Features

#### Mini Cart

![Visual overview of the site](src/assets/images/desktop-cart.png)

#### Login Modal

![Visual overview of the site](src/assets/images/login.png)

#### Login Success

![Visual overview of the site](src/assets/images/login-success.png)

### Responsive Views

#### Desktop (1400px)

![Visual overview of the site](src/assets/images/desktop.png)

#### Tablet (768px)

![Visual overview of the site](src/assets/images/tablet.png)

#### Mobile (< 768px)

![Visual overview of the site](src/assets/images/mobile.png)
