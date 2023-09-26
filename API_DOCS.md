# EndPoint

## /api/users
- POST `/api/users/login-admin`
#### - Authentication & Authorization
Request: Bearer Token
- POST `/api/users/register-admin`

## /api/items
#### - Authentication
Request: Bearer Token
- GET `/api/items`
- GET `/api/items/:itemId`
#### - Authentication & Authorization
- POST `/api/items`
- PUT `/api/items/:itemId`
- DELETE `/api/items/:itemId`

## /api/categories
#### - Authentication
Request: Bearer Token
- GET `/api/categories`
- GET `/api/categories/:categoryId`
#### - Authentication & Authorization
- POST `/api/categories`
- PUT `/api/categories/:categoryId`
- DELETE `/api/categories/:categoryId`

## /api/ingradients
#### - Authentication
Request: Bearer Token
- GET `/api/ingradients`
- GET `/api/ingradients/:ingradientId`
#### - Authentication & Authorization
- POST `/api/ingradients`
- PUT `/api/ingradients/:ingradientId`
- DELETE `/api/ingradients/:ingradientId`

# Transaction
## /api/items-ingredients
#### - Authentication & Authorization
- POST `/api/items-ingredients`
