# Project: Extended Stay - Accommodation Booking Website
**Document:** Project Introduction & Requirements Document
**Version:** 1.0

---

## 1. Business Requirements (ව්‍යාපාරික අවශ්‍යතා)

### 1.1 Brand & Contact Information
* **Business Name:** Extended Stay (Rooms - කාමර - அறைகள்)
* **Location:** 87/1 Airport Road, Adiamblama (කටුනායක ගුවන් තොටුපළ ආසන්නයේ පිහිටා තිබීම ප්‍රධානතම වාසියකි).
* **Contact Number:** 077 61 86 100 (Direct & WhatsApp).
* **Email:** donclord@gmail.com
* **Registration Number:** WAA 177877

### 1.2 Target Audience (ඉලක්කගත පාරිභෝගිකයින්)
* **Foreign Tourists & Transit Passengers:** ගුවන් තොටුපළ අසල ඉක්මන් සහ පහසු නවාතැන් සොයන විදේශිකයින්.
* **Local Guests:** කෙටිකාලීන නිවාඩු සඳහා හෝ ගමන් විඩාව නිවාගැනීම සඳහා පැමිණෙන දේශීය පාරිභෝගිකයින්.

### 1.3 Core Offerings & Packages (සේවාවන් සහ පැකේජ)
* **Per Day Package:** දහවල් කාලය (Daytime) සඳහා පමණක් වෙන්කරවා ගැනීමේ විශේෂ පැකේජ.
* **Per Night Package:** රාත්‍රී කාලය හෝ සම්පූර්ණ දවසක් සඳහා වන පැකේජ.
* *Note:* පැකේජ මිල ගණන් සහ ඒවාට ඇතුළත් පහසුකම් (A/C, Non-A/C, WiFi, Meals) පැහැදිලිව සඳහන් කළ යුතුයි.

---

## 2. Technical Requirements (තාක්ෂණික අවශ්‍යතා)

### 2.1 Core Features & Functionality (ප්‍රධාන උපාංග)
* **Dedicated Photo Gallery:** කාමර, නාන කාමර සහ බාහිර පරිසරය පෙන්වන ඉහළ ගුණාත්මකභාවයෙන් යුත් Image Gallery එකක්. මෙය 'Grid Layout' එකක් සහ 'Lightbox' (පින්තූරය click කළ විට විශාල වී පෙනෙන) තාක්ෂණයෙන් යුක්ත විය යුතුයි.
* **Dynamic Booking System / Inquiry Form:** * පාරිභෝගිකයාට Check-in සහ Check-out දිනයන් තේරීමට පහසුකම (Date Picker).
    * Day හෝ Night පැකේජය තේරීමට ඇති පහසුකම (Dropdown/Radio Buttons).
    * ඉල්ලීම සෘජුවම WhatsApp හරහා හෝ Email හරහා Admin වෙත යැවෙන පද්ධතියක්.
* **Mobile-First Responsive Design:** වෙබ් අඩවියට එන බොහෝ පාරිභෝගිකයින් ජංගම දුරකථන භාවිතා කරන බැවින්, 100% ක් Mobile-friendly විය යුතුයි.

### 2.2 UI/UX Architecture & Guidelines (අතුරුමුහුණත් සැලසුම)
* **Hero Section (First Impression):** * වෙබ් අඩවියට පිවිසි විගස පසුබිමින් ඇති අලංකාර කාමරයක ඡායාරූපයක් (High-quality background image).
    * එහි මැද "Relax Before Your Next Flight" වැනි සරල Catchphrase එකක් සහ කැපී පෙනෙන "Book Your Stay" Call-to-Action (CTA) බොත්තමක් තිබීම.
* **Trust Indicators (විශ්වාසය ගොඩනැගීම):** * රෙජිස්ටර් අංකය (Reg No: WAA 177877) Footer එකේ පැහැදිලිව සඳහන් කිරීම.
    * Google Maps Location එක සජීවීව (Embed කර) පෙන්වීම, පාරිභෝගිකයින්ට දුර නිමානය කරගැනීමට පහසු වීම සඳහා.
* **Floating WhatsApp Button:** ඕනෑම පිටුවක සිට පහසුවෙන් ක්ෂණිකව සම්බන්ධ වීමට තිරයේ පහළ දකුණු කෙළවරේ සදාකාලිකව පෙනෙන (Sticky) WhatsApp බොත්තමක් සවි කිරීම.
* **Speed Optimization:** පින්තූර විශාල ප්‍රමාණයක් Gallery එකේ ඇති බැවින්, "Lazy Loading" සහ "WebP Image Optimization" භාවිතා කර වෙබ් අඩවියේ වේගය (Loading Speed) වැඩි කිරීම.

---