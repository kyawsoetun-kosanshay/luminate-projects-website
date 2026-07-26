# Luminate Projects

Production website for **Luminate Projects — Creative Project Management
Studio**. The site presents the studio, services, working process, contact
information, and five confirmed project case studies.

No custom production domain is configured yet.

## Technology stack

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS 4
- Next.js Image and Metadata APIs
- ESLint
- npm
- Node.js 22 LTS

## Local setup

Requirements:

- Node.js 22
- npm 10 or newer

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Commands

```bash
npm run dev
npm run lint
npm run build
npm run start
```

## Routes

- `/`
- `/about`
- `/services`
- `/work`
- `/process`
- `/contact`
- `/work/global-education-fair`
- `/work/kirigami-burmese-papercut`
- `/work/language-center-branch-opening`
- `/work/germany-education-fair`
- `/work/global-education-fair-m-tower`
- `/robots.txt`
- `/sitemap.xml`

Unknown project slugs render the branded not-found page.

## Asset structure

```text
public/assets/
├── logo/                 # Original logo source files
├── projects/             # Original project JPG and MP4 source media
└── optimized/
    ├── covers/           # Web-ready project covers
    ├── gallery/          # Web-ready gallery images
    ├── logo/             # Web-ready logo derivatives
    └── video/            # Web-ready hero video and poster
```

Project covers, galleries, and hero media reference files under
`public/assets/optimized/`. The shared header uses the original color logo, and
the dark footer uses the original light logo; both PNG files are small and
remain unchanged. Original project JPG and MP4 media is preserved for archival
purposes and should not be served in production.

## Site URL configuration

Set the public production origin when a deployment URL or custom domain is
known:

```bash
NEXT_PUBLIC_SITE_URL=https://your-production-domain.example
```

Do not include a trailing path. The application validates the value and uses
its origin for metadata, `robots.txt`, and `sitemap.xml`.

When `NEXT_PUBLIC_SITE_URL` is missing or invalid:

- the project still builds;
- no fake production URL is generated;
- indexing is disabled;
- `robots.txt` disallows crawling;
- `sitemap.xml` remains empty.

## GitHub preparation

Before initializing Git:

1. Keep `.env` and local environment files untracked.
2. Move the original `public/assets/projects/` source archive outside the
   deployable project before the first commit. If it must remain locally,
   explicitly ignore that directory before committing.
3. Keep `public/assets/optimized/` tracked; these are required by the website.
4. Confirm no `.DS_Store`, QA screenshots, temporary scripts, logs, or build
   output are present.
5. Run `npm run lint` and `npm run build`.

The original project archive is hundreds of megabytes and includes large MP4
files. Committing or deploying it is not recommended.

## Vercel deployment

After GitHub preparation and after a repository exists:

1. Import the repository into Vercel.
2. Use the Next.js framework preset.
3. Keep the install command as `npm install`.
4. Keep the build command as `npm run build`.
5. Add `NEXT_PUBLIC_SITE_URL` with the exact Vercel production origin.
6. Deploy a preview and complete the manual checks listed below.
7. When a custom domain is available, update `NEXT_PUBLIC_SITE_URL` to that
   domain and redeploy.

Do not add secrets to `NEXT_PUBLIC_SITE_URL`; variables with the
`NEXT_PUBLIC_` prefix are included in browser-accessible application output.

## Pre-deployment checks

- Review all pages at desktop, tablet, and mobile widths.
- Test email, telephone, Viber, and Facebook links on real devices.
- Confirm the hero video autoplays muted and the reduced-motion poster appears.
- Verify `/robots.txt` and `/sitemap.xml` after setting the production URL.
- Confirm the deployment contains optimized assets and excludes original source
  media.
