# TODO's Web App

A simple and efficient web application to manage your tasks. Using Vite + React.

## Features

-   **Task Management**: Create, update, and delete tasks.
-   **Lists**: Organize tasks into different lists.
-   **Responsive Design**: Works on both desktop and mobile devices.
-   **Support**: Report bugs or suggest features on the GitHub repository.

## Local Installation

Follow these steps to set up the project locally:

1. **Clone the repository**:

    ```sh
    git clone https://github.com/MXJosueDev/todo-web.git
    cd todo-web
    ```

2. **Install dependencies**:

    ```sh
    pnpm install
    ```

3. **Set up environment variables**:
   Create a `.env.local` file in the root directory and add the following variables:

    ```env
    VITE_TASKS_API_URL=https://todo-backend-mxjosuedev.vercel.app/api
    VITE_REFETCH_INTERVAL=60000
    ```

4. **Run the development server**:

    ```sh
    pnpm run dev
    ```

5. **Build for production**:

    ```sh
    pnpm run build
    ```

6. **Preview the production build**:
    ```sh
    pnpm run preview
    ```

For more details, refer to the [package.json](package.json) file.

# Usage

You are free of use this work under the [MIT License](/LICENSE)