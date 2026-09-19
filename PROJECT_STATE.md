# Project State - Vplus Studio

## Overview
דף נחיתה (Landing Page) עבור Vplus Studio - סטודיו פיתוח אפליקציות מובייל.
המטרה: עמידה בדרישות אימות "Organization" של Google Play, מתארח ב-GitHub Pages.

## Tasks
- [x] יצירת `index.html` - עמוד נחיתה עצמאי (HTML + CSS מוטמע), עיצוב כהה (Dark Theme), Mobile-First, RTL.
  - Header עם שם המותג "Vplus Studio".
  - Hero Section עם כותרת טכנולוגית ותת-כותרת.
  - Contact Section עם קישור mailto ל-vplus.studio.apps@gmail.com.
  - Footer עם שורת זכויות יוצרים © 2026 Ron Lupovich - Vplus Studio.
- [ ] מסמכים משפטיים (`docs/legal/`) - טרם נוצרו: privacy-policy, terms-of-service, cookie-policy, accessibility-statement.
- [ ] בדיקת התאמה סופית מול דרישות Google Play Organization Verification.

## Files Changed
- `index.html` (נוצר) - עמוד הנחיתה המלא.
- `PROJECT_STATE.md` (נוצר) - קובץ זיכרון והמשכיות.

## Decisions
- צבעים: רקע `#1E1B3A`, אקסנטים `#7c4ddb` (סגול) ו-`#0d9488`/`#5eead4` (טיל).
- פונט: Inter (Google Fonts) עם נפילה ל-system fonts.
- ללא frameworks חיצוניים (HTML/CSS טהור בלבד).
- טקסט התוכן בעברית עם RTL מלא; כתובת המייל נשארת LTR (unicode-bidi: isolate) לקריאות נכונה.

## Current Focus
הושלם: יצירת index.html מלאה לפי הדרישות ודחיפה לברנץ'.
הצעד הבא (אם יתבקש): יצירת מסמכי docs/legal/ הנדרשים (מדיניות פרטיות, תנאי שימוש, מדיניות עוגיות, הצהרת נגישות) בהתאם ל-IS 5568 / WCAG 2.1 AA ו-GDPR.
