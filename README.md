# Forever E-Commerce Platform

Welcome to the Forever E-Commerce Platform! This project is a full-stack e-commerce application built with modern web technologies. It consists of three main components:

- **Admin Panel**: A React-based admin dashboard for managing products, orders, and other administrative tasks.
- **Frontend**: A React-based user-facing storefront for customers to browse and purchase products.
- **Backend**: A Node.js and Express-based API server for handling business logic, database operations, and integrations.

---

## Project Structure

### Admin Panel (`admin/`)

The admin panel is built with React and Vite. It allows administrators to manage the platform, including adding products, managing orders, and viewing analytics.

#### Key Features:
- Product management (add, edit, delete)
- Order management
- Responsive design

#### Tech Stack:
- React
- Tailwind CSS
- Vite

#### Scripts:
Run the following commands in the `admin/` directory:
```bash
# Start the development server
npm run dev

# Build for production
npm run build

# Preview the production build
npm run preview
# Start the development server
npm run dev

# Build for production
npm run build

# Preview the production build
npm run preview

# Start the server
npm start

# Start the server with live reload (development)
npm run server

MONGODB_URI=<your-mongodb-uri>
CLOUDINARY_API_KEY=<your-cloudinary-api-key>
CLOUDINARY_API_SECRET=<your-cloudinary-api-secret>
CLOUDINARY_NAME=<your-cloudinary-name>
JWT_SECRET=<your-jwt-secret>
STRIPE_PUBLISHABLE_KEY=<your-stripe-publishable-key>
STRIPE_SECRET_KEY=<your-stripe-secret-key>

git clone <repository-url>
cd <repository-folder>

cd admin
npm install
cd ../frontend
npm install
cd ../backend
npm install