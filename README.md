
# Role-Based Access Control (RBAC) UI

This project provides a **Role-Based Access Control (RBAC)** interface using React.js and Tailwind CSS. The UI allows administrators to manage roles and permissions and maintain a list of administrator accounts. The project comprises three key components:

- **RoleCards**: Displays existing roles and allows adding new ones.
- **RoleForm**: A dynamic form to define new roles and customize permissions.
- **AdminTable**: Manages administrator accounts with options to add, edit, or delete admins.

## Features

### Role Management
- View predefined roles with default permissions.
- Add new roles using a form with customizable permissions (read, write, edit).

### Admin Management
- View a list of administrators with details like name, email, and role.
- Add a new administrator via a modal form.
- Edit or update administrator details.
- Delete an administrator after confirmation.

### User-Friendly UI
- Intuitive modals for form submissions.
- Responsive design using Tailwind CSS.
- Real-time state updates with React hooks.

---

## Components

### 1. **RoleCards**
This component displays existing roles and provides an option to add new roles.

#### Key Features
- Lists roles such as "Super Admin," "Manager," and "Accountant."
- Displays the number of accounts assigned to each role.
- A button to open a modal for adding new roles.

---

### 2. **RoleForm**
This form enables adding a new role and configuring its permissions.

#### Key Features
- Accepts a role name input.
- Allows toggling permissions (read, write, edit) for predefined categories like "Super Admin" and "Manager."
- Validates input fields before submission.

---

### 3. **AdminTable**
This component manages administrator accounts with features to add, edit, and delete admins.

#### Key Features
- Displays admins in a table format.
- Includes modals for adding and editing admins.
- Supports deleting admins with confirmation.

---

## Getting Started

### Prerequisites
Ensure you have the following installed:
- **Node.js**: For running the React application.
- **npm or yarn**: For package management.

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/rbac-ui.git
   ```
2. Navigate to the project directory:
   ```bash
   cd RBAC
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

---

## Usage

### Role Management
- View roles in a grid layout.
- Click **Add New Role** to open the modal form.
- Fill in the role name and toggle permissions.
- Save the role to update the list.

### Admin Management
- View the admin list in a table.
- Use the **+** button to add a new admin.
- Edit or delete existing admins using action buttons.

---

## Built With
- **React.js**: For building the component-based UI.
- **Tailwind CSS**: For styling and responsiveness.

