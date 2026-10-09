# TIPZ

Post a stock tip. Follow it. Tip the author if it hits.

TIPZ is a small social feed for day-trade ideas. A tip is an opinion with a ticker, a price, and a time. It is not an order. The app does not buy, sell, or hold anything.

## Screens

- Login and create account
- Thread, the main feed
- Create tip
- Top 20, ranked by score
- Profile, your posts
- Settings, log out

## Stack

- JavaScript, not TypeScript
- Expo and React Native
- Supabase Auth and Postgres
- Google Play is the target store

## Layout

```text
App.js                 session and which screen is open
screens/               one full page each
components/            Header, BottomNav, TipCard
services/auth.js       sign up, sign in, sign out
services/tips.js       list and create tips
services/supabase.js   client
```

Screens do not import Supabase. Services do not render views.

## Data

`profiles` holds the username. Email is the login key and is not shown on the feed.

`tips` holds ticker, body, price, time, email, username, and score.

## Run

```bash
npm install
npx expo start
```

Open the project in Expo Go. `.env` needs the public Supabase URL and publishable key:

```bash
EXPO_PUBLIC_SUPABASE_URL=
EXPO_PUBLIC_SUPABASE_PUBLISHABLE_KEY=
```

Do not commit `.env`.

## License

MIT
