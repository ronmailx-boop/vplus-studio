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
- [ ] השלמת ה-placeholders במסמכים המשפטיים (שם עסק, מספר עוסק/ח.פ., כתובת, רכז נגישות וכו') ואישורם - **ממתין** לרישום עוסק פטור (ראה Decisions).
- [x] תרגום מסמכי docs/legal לאנגלית - נוצרו תחת `docs/legal/en/` (אותם שמות קבצים, תוכן זהה במבנה, placeholders תואמים).
- [ ] קישור מסמכי docs/legal (עברית + אנגלית) מתוך footer האתר, אם יתבקש.
- [ ] בדיקת התאמה סופית מול דרישות Google Play Organization Verification.

## Files Changed
- `index.html` - עמוד הנחיתה המלא (דו-לשוני, לוגו, PWA meta tags).
- `assets/logo.svg` - לוגו המותג (Wordmark) המוצג בהדר.
- `icons/icon.svg`, `icons/icon-maskable.svg` - מקורות SVG לאייקון האפליקציה (רגיל ו-maskable).
- `icons/icon-192.png`, `icons/icon-512.png`, `icons/icon-maskable-192.png`, `icons/icon-maskable-512.png` - אייקוני PNG מוכנים ל-PWA/Android.
- `manifest.json` - Web App Manifest להתקנת האתר כאפליקציה.
- `docs/legal/privacy-policy.md`, `docs/legal/terms-of-service.md`, `docs/legal/cookie-policy.md`, `docs/legal/accessibility-statement.md` - טיוטות מסמכים משפטיים בעברית פורמלית, עם placeholders להשלמה.
- `docs/legal/en/*.md` - תרגום אנגלי מלא לכל 4 המסמכים הנ"ל (אותו מבנה ו-placeholders).
- `PROJECT_STATE.md` - קובץ זיכרון והמשכיות.

## Decisions
- צבעים: רקע `#1E1B3A`, אקסנטים `#7c4ddb` (סגול) ו-`#0d9488`/`#5eead4` (טיל).
- פונט: Inter (Google Fonts) עם נפילה ל-system fonts.
- ללא frameworks חיצוניים (HTML/CSS/JS טהורים בלבד, ה-JS מוגבל למתג השפה).
- דו-לשוניות מנוהלת דרך אובייקט תרגומים ב-JS + `data-i18n` attributes; אין תלות בספרייה חיצונית.
- הלוגו הכהה (`#241f42`) עטוף ב-badge בהיר כדי לשמור על קריאות מול הרקע הכהה של האתר.
- כל שינוי עובר בזרימה: יצירת/עדכון קבצים → commit ב-branch → PR → merge ל-`main` (לבקשת המשתמש, כל השינויים מוזגים ישירות).
- GitHub Pages בנוי מ-`main` ("Deploy from a branch") - כל merge מפעיל build אוטומטי.
- **סטטוס עסקי:** נכון להיום אין ח.פ/עוסק רשום. המשתמש בכוונתו להירשם כ**עוסק פטור** בהמשך. עד אז, ה-placeholder של "מספר עוסק/ח.פ." במסמכים המשפטיים נשאר ריק במכוון. כמו כן, בהתאם לכך ייתכן שיש לפתוח את חשבון המפתח ב-Google Play Console כ-"Individual" ולא כ-"Organization" עד להשלמת הרישום (חשבון Organization דורש אימות מול גוף עסקי רשום).

## Current Focus
הושלם: index.html מלא, לוגו מותג, דו-לשוניות (אנגלית כברירת מחדל + מתג עברית), PWA manifest + אייקונים להתקנה באנדרואיד, וטיוטות של 4 מסמכי docs/legal בעברית ובאנגלית (`docs/legal/` ו-`docs/legal/en/`), עם placeholders.
הצעד הבא (אם יתבקש): (1) להשלים את ה-placeholders במסמכים המשפטיים מול המשתמש לאחר רישום כעוסק פטור, (2) לשקול קישור המסמכים מתוך footer האתר (עם קישור מתאים לפי השפה הנבחרת).
