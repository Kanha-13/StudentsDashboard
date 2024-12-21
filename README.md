
# **Student Dashboard Frontend Application**

## **Overview**
The **Student Dashboard** is a React.js web application designed for managing student data. It allows admins and superusers to:

- **Add new students** with details like name, cohort, joining date, last login, courses enrolled, etc.
- **View, update, and delete** student records.
- Navigate through dummy screens for Dashboard, Help, Reports, Chapters, and Settings.

The application is fully responsive, ensuring a seamless experience across devices including mobiles, tablets, and desktops.

---

## **Live Production Link**

You can access the live version of the app here: [Student Dashboard Web App](https://studentdashboard-rho.vercel.app/students)

---

## **Technologies Used**
The application is built using the following technologies:

- **React.js**: Component-based frontend library.
- **React Router DOM**: For client-side routing.
- **Redux Toolkit**: Simplified state management.
- **Tailwind CSS**: Utility-first framework for styling and responsiveness.
- **Axios**: For making HTTP requests.

---

## **Project Structure**
The folder structure is organized for scalability and maintainability. Below is a brief description:

### **Root Folder**
- **`.env`**: Stores environment variables, including `REACT_APP_API_URL` for the backend API URL.
- **`.env.example`**: Template for `.env` to assist users in setting up their environment.

### **`src` Folder**
1. **`src/assets`**: Contains static assets like fonts, icons, and images.
2. **`src/components`**: Reusable UI components, including:
   - **Buttons**: Custom button components.
   - **Errors**: For displaying error messages.
   - **Input**: Includes `CustomInput`, `CustomSelect`, and `Multiselect`.
   - **Loading**: Loading modals or messages.
   - **Modal**: A base template for modals (e.g., Student Info Form).
   - **Skeletons**: Placeholder UI for loading states.
   - **Students**: Components specific to the Students screen (e.g., `StudentTable`, `StudentHeader`, `StudentTableRow`).
   - **Template**: Includes `BaseTemplate` for the main app layout.

3. **`src/const`**: Stores static data such as route definitions and student input field configurations.

4. **`src/containers`**: Screen-specific folders such as:
   - Students
   - Help
   - Dashboard
   - Settings

5. **`src/redux`**: Handles global state management with Redux Toolkit:
   - **`store.js`**: Configures the Redux store.
   - **`students` folder**:
     - **`studentSlice.js`**: Defines reducers and actions for CRUD operations.
     - **`studentServices.js`**: Contains API call logic.
     - **`useStudent.js`**: Custom hook to interact with `studentServices` and Redux state.

6. **`src/services`**: Includes `api.js` for initializing the Axios instance.

7. **`src/utils`**: Contains utility functions like `dateParse` for formatting dates.

8. **`src/app.js`**: Initializes routing with `React Router` and sets up the `BaseTemplate`.

9. **`src/index.js`**: Wraps the app with `Redux Provider` to enable global state management.

---

## **Core Features**
- **Fully Responsive**: Adapts seamlessly to mobile, tablet, and desktop screen sizes.
- **Student Management**:
  - Add, view, update, and delete student records.
  - Includes fields like name, cohort, joining date, last login, status, and enrolled courses.
- **Global State Management**: Maintains student data in a Redux store.
- **Backend Integration**: Executes CRUD operations via API calls, syncing data with the backend.

---

## **State Management with Redux**
- The app leverages **Redux Toolkit** for efficient state management.
- **Student Slice**: Contains reducers for all CRUD operations.
- **Custom Hook (`useStudent`)**:
  - Facilitates interaction between React components, Redux store, and backend services.
  - Handles API calls, dispatches actions, and updates the state.

---

## **Styling with Tailwind CSS**
The entire application is styled using **Tailwind CSS**:
- Utility classes ensure consistent design.
- Enables responsiveness across devices without additional media queries.

---

## **Setup Instructions**
1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project folder and create a `.env` file in the root directory.
3. Copy the variables from `.env.example` and update them:
   ```env
   REACT_APP_API_URL=<your-backend-api-url>
   ```
4. Install dependencies:
   ```bash
   npm install
   ```
5. Start the development server:
   ```bash
   npm start
   ```

For backend setup, refer to the [Student Dashboard Node app Repository](https://github.com/Kanha-13/StudentsDashboard_nodeapp).
