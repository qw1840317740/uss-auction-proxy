This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
## Contact Form Email Notifications

The contact form sends inquiry emails through Resend when `RESEND_API_KEY` is configured. SMTP is kept as an optional fallback.

Configure these environment variables in Vercel Project Settings:

```env
RESEND_API_KEY=re_xxxxxxxxx
RESEND_FROM_EMAIL=ClickCar <inquiries@clickcar.jp>
CONTACT_TO_EMAIL=your-receiving-email@example.com
```

Optional SMTP fallback:

```env
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-smtp-user@example.com
SMTP_PASS=your-smtp-password-or-app-password
CONTACT_FROM_EMAIL=ClickCar <your-smtp-user@example.com>
```

Use `SMTP_SECURE=true` when `SMTP_PORT` is `465`. For Resend, verify the sending domain before using a `clickcar.jp` sender address.
