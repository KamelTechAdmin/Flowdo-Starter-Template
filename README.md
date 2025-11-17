## Prerequisites

-   PHP 8.2 or higher
-   Composer
-   Node.js 18+ and npm
-   MySQL/PostgreSQL or SQLite

## Setup Instructions

### 1. Clone the Repository

```bash
git clone
cd ticket-system
```

### 2. Install Dependencies

```bash
composer install
npm install
```

### 3. Environment Configuration

```bash
cp .env.example .env
php artisan key:generate
```

Configure your database in `.env`:

```env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=ticket_system
DB_USERNAME=root
DB_PASSWORD=
```

### 4. Run Migrations

```bash
php artisan migrate
```

### 5. Start Development Servers

Open two terminals:

**Terminal 1** - Frontend:

```bash
npm run dev
```

**Terminal 2** - Backend:

```bash
php artisan serve
```

Visit `http://localhost:8000`
