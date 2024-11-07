# nkay_admin
Here's a sample documentation you could use for your README file:

---

# Ecommerce Platform

This is a full-featured ecommerce platform built using Next.js, TailwindCSS, ShadCN, Prisma with SQLite, and Stripe. The application provides a seamless user experience for browsing products, managing a cart, and securely processing payments. This documentation provides an overview of the project setup, structure, and deployment instructions.

## Features

- **Product Catalog**: Browse a collection of products with detailed descriptions and images.
- **Shopping Cart**: Add, remove, and adjust quantities of items in the shopping cart.
- **Checkout**: Secure checkout process integrated with Stripe.
- **Order Management**: Track and manage orders in the admin dashboard.
- **Responsive Design**: Mobile-first design with TailwindCSS for a smooth user experience on all devices.

## Tech Stack

- **[Next.js](https://nextjs.org/)** - React framework for building fast, server-rendered applications.
- **[TailwindCSS](https://tailwindcss.com/)** - Utility-first CSS framework for rapid UI development.
- **[ShadCN](https://shadcn.dev/)** - Collection of high-quality components for building clean, accessible interfaces.
- **[Prisma](https://www.prisma.io/)** - ORM for managing database schemas and querying data. Uses SQLite as the database for local development.
- **[Stripe](https://stripe.com/)** - Payment processing platform for handling secure payments.

## Project Structure

- **/components** - Reusable UI components.
- **/pages** - Route-based page components managed by Next.js.
- **/lib** - Configuration files and helper functions.
- **/prisma** - Prisma schema and migration files.
- **/styles** - TailwindCSS global and custom styles.

## Setup and Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/ecommerce-platform.git
   cd ecommerce-platform
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure environment variables**:  
   Create a `.env` file in the root directory and add the following variables:
   ```env
   DATABASE_URL="file:./dev.db"
   STRIPE_SECRET_KEY="your_stripe_secret_key"
   STRIPE_PUBLIC_KEY="your_stripe_public_key"
   ```

4. **Set up the database**:
   Run the following Prisma commands to set up the SQLite database:
   ```bash
   npx prisma migrate dev
   ```

5. **Run the application**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Deployment

To deploy this app, you can use platforms like Vercel for Next.js and connect Stripe’s live keys for production payments. Update your environment variables accordingly.

## License

This project is licensed under the MIT License.
