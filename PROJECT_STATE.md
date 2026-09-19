# Project State - Vplus Studio

## Overview
דף נחיתה (Landing Page) עבור Vplus Studio - סטודיו פיתוח אפליקציות מובייל.
המטרה: עמידה בדרישות אימות "Organization" של Google Play, מתארח ב-GitHub Pages.
כתובת האתר: https://ronmailx-boop.github.io/vplus-studio/

## Tasks
- [x] יצירת `index.html` - עמוד נחיתה עצמאי (HTML + CSS מוטמע), עיצוב כהה (Dark Theme), Mobile-First.
  - Header עם שם המותג "Vplus Studio".
  - Hero Section עם כותרת טכנולוגית ותת-כותרת.
  - Contact Section עם קישור mailto ל-vplus.studio.apps@gmail.com.
  - Footer עם שורת זכויות יוצרים © 2026 Vplus Studio.
- [x] הסרת שם פרטי (Ron Lupovich) משורת הזכויות בפוטר, לבקשת המשתמש.
- [x] שילוב לוגו מותג (SVG שסופק ע"י המשתמש) בהדר, בתוך "badge" רקע בהיר כדי לשמור על ניגודיות מול הרקע הכהה.
- [x] הפיכת האתר לדו-לשוני (אנגלית/עברית):
  - **אנגלית היא ברירת המחדל** (`lang="en"`, `dir="ltr"`).
  - כפתור החלפת שפה בהדר (מחליף טקסט, `lang`, `dir` בזמן אמת ללא רענון).
  - שמירת בחירת השפה ב-`localStorage`.
- [x] הוספת PWA Manifest ואייקוני אפליקציה להתקנה דרך Chrome באנדרואיד:
  - `manifest.json` עם `display: standalone`, צבעי מותג, ואייקונים.
  - אייקון מרובע בעיצוב "V+" על גרדיאנט המותג, ב-192px/512px, כולל גרסת `maskable`.
  - `<link rel="manifest">`, `theme-color`, ו-favicon ב-`index.html`.
- [x] מסמכים משפטיים (`docs/legal/`) - נוצרו כטיוטות ראשוניות עם placeholders: privacy-policy, terms-of-service, cookie-policy, accessibility-statement (עברית פורמלית).
- [ ] השלמת ה-placeholders במסמכים המשפטיים (שם עסק, מספר עוסק/ח.פ., כתובת, רכז נגישות וכו') ואישורם.
- [ ] קישור מסמכי docs/legal מתוך footer האתר (אם יתבקש), כולל גרסה מתורגמת לאנגלית בהתאם למבנה הדו-לשוני.
- [ ] בדיקת התאמה סופית מול דרישות Google Play Organization Verification.

## Files Changed
- `index.html` - עמוד הנחיתה המלא (דו-לשוני, לוגו, PWA meta tags).
- `assets/logo.svg` - לוגו המותג (Wordmark) המוצג בהדר.
- `icons/icon.svg`, `icons/icon-maskable.svg` - מקורות SVG לאייקון האפליקציה (רגיל ו-maskable).
- `icons/icon-192.png`, `icons/icon-512.png`, `icons/icon-maskable-192.png`, `icons/icon-maskable-512.png` - אייקוני PNG מוכנים ל-PWA/Android.
- `manifest.json` - Web App Manifest להתקנת האתר כאפליקציה.
- `docs/legal/privacy-policy.md`, `docs/legal/terms-of-service.md`, `docs/legal/cookie-policy.md`, `docs/legal/accessibility-statement.md` - טיוטות מסמכים משפטיים בעברית פורמלית, עם placeholders להשלמה.
- `PROJECT_STATE.md` - קובץ זיכרון והמשכיות.

## Decisions
- צבעים: רקע `#1E1B3A`, אקסנטים `#7c4ddb` (סגול) ו-`#0d9488`/`#5eead4` (טיל).
- פונט: Inter (Google Fonts) עם נפילה ל-system fonts.
- ללא frameworks חיצוניים (HTML/CSS/JS טהורים בלבד, ה-JS מוגבל למתג השפה).
- דו-לשוניות מנוהלת דרך אובייקט תרגומים ב-JS + `data-i18n` attributes; אין תלות בספרייה חיצונית.
- הלוגו הכהה (`#241f42`) עטוף ב-badge בהיר כדי לשמור על קריאות מול הרקע הכהה של האתר.
- כל שינוי עובר בזרימה: יצירת/עדכון קבצים → commit ב-branch → PR → merge ל-`main` (לבקשת המשתמש, כל השינויים מוזגים ישירות).
- GitHub Pages בנוי מ-`main` ("Deploy from a branch") - כל merge מפעיל build אוטומטי.

## Current Focus
הושלם: index.html מלא, לוגו מותג, דו-לשוניות (אנגלית כברירת מחדל + מתג עברית), PWA manifest + אייקונים להתקנה באנדרואיד, וטיוטות ראשוניות של 4 מסמכי docs/legal (עברית, עם placeholders).
הצעד הבא (אם יתבקש): (1) להשלים את ה-placeholders במסמכים המשפטיים מול המשתמש (פרטי עסק, רכז נגישות וכו'), (2) לשקול קישור המסמכים מתוך footer האתר, (3) לשקול תרגום המסמכים לאנגלית בהתאם למבנה הדו-לשוני.
