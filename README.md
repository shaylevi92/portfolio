# פורטפוליו אישי

אתר פורטפוליו מודרני הבנוי עם HTML, Tailwind CSS ו-JavaScript.

## מבנה הפרויקט

```
portfolio/
├── index.html          # דף הבית
├── contact.html        # דף יצירת קשר
├── careery.html        # דף פרויקט Careery
├── css/
│   ├── input.css      # קובץ CSS מקור
│   └── output.css     # קובץ CSS מקומפל
├── images/            # תיקיית תמונות
├── tailwind.config.js # הגדרות Tailwind
└── package.json       # תלויות הפרויקט
```

## התקנה

1. התקן את תלויות הפרויקט:
```bash
npm install
```

2. הפעל את Tailwind בmode פיתוח:
```bash
npm run dev
```

3. בנה את הפרויקט לproduction:
```bash
npm run build
```

## תכונות

- עיצוב מודרני ומינימליסטי
- רספונסיביות מלאה
- אנימציות חלקות
- אופטימיזציה לSEO
- טעינה מהירה
- תאימות לכל הדפדפנים

## טכנולוגיות

- HTML5
- Tailwind CSS
- JavaScript
- Inter Font
- Heroicons

## דרישות מערכת

- Node.js 14.0.0 ומעלה
- npm 6.0.0 ומעלה

## Local Development

1. Clone the repository:
```bash
git clone https://github.com/shaylevi92/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start Tailwind CSS compilation in watch mode:
```bash
npx tailwindcss -i ./css/input.css -o ./css/output.css --watch
```

## Deployment

The site is automatically deployed to GitHub Pages when changes are pushed to the main branch.

## Contact

- GitHub: [@shaylevi92](https://github.com/shaylevi92)
- LinkedIn: [Shay Levi](https://linkedin.com/in/shaylevi92)
- Email: contact@shaylevi.com
