## Dr. Kang Clinic

[https://drkangclinic.com](https://drkangclinic.com)

## Stacks

- React
- Next.js
- Material-UI
- Firebase Authentication
- Strapi

## Usage

1. Download repo

```
git clone https://github.com/hyeonhong/drkang-site
```

2. Install dependencies

```
yarn install
```

3. Configure the .env file

```
# Firebase Client
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=

# Firebase Admin
FIREBASE_PRIVATE_KEY_ID=
FIREBASE_PRIVATE_KEY=
FIREBASE_CLIENT_EMAIL=
FIREBASE_CLIENT_ID=

# Strapi
NEXT_PUBLIC_STRAPI_API_URL=

# Prisma
DATABASE_URL=
SHADOW_DATABASE_URL=

# Naver OAUTH2
NEXT_PUBLIC_NAVER_AUTH_CALLBACK_URL=
NEXT_PUBLIC_NAVER_CLIENT_ID=
NAVER_CLIENT_SECRET=

# Google Maps API
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=
```


4. Run as the development

```
yarn dev
```

The site will be running at `http://localhost:3000`

5. Build the production bundle

```
yarn run build
```

The production bundle is created in the `/out` directory

6. Run the production build in the local environment

```
yarn run start
```

The site will be running at `http://localhost:3000`
