/*
 * پروژه‌های نمونه‌کار — برای افزودن پروژه‌ی جدید فقط همین فایل را ویرایش کنید.
 * Portfolio projects — edit only this file to add or change a project.
 *
 * هر پروژه یک شیء در آرایه‌ی زیر است. فیلدها:
 *   id           شناسه‌ی یکتا، انگلیسی و بدون فاصله (مثلاً "my-app")
 *                کارت روی سایت با نشانی ‎#project-<id>‎ قابل لینک است
 *   placeholder  true یعنی نمونه‌ی ساختگی است و روی سایت برچسب «نمونه» می‌خورد
 *   featured     true یعنی کارت تمام‌عرض و اول نمایش داده می‌شود
 *   year         سال انجام پروژه (عدد میلادی؛ در نسخه‌ی فارسی خودکار با رقم فارسی نمایش داده می‌شود)
 *   title        { fa, en } عنوان
 *   role         { fa, en } نقش شما یا نوع اپ
 *   description  { fa, en } توضیح کوتاه (۱ تا ۳ جمله)
 *   tech         فهرست فناوری‌ها
 *   image        مسیر تصویر در assets/projects/ (اختیاری؛ اگر خالی باشد کارت با رنگ و حرف اول ساخته می‌شود)
 *                اندازه‌ی پیشنهادی: ۱۲۰۰×۷۵۰ پیکسل، PNG یا JPG یا WebP
 *   links        { appStore, sibapp, anardoni, googlePlay, github, website } — هر کدام خالی ("") باشد، دکمه‌اش نمایش داده نمی‌شود
 *
 * ترتیب نمایش: اول featured، بعد بر اساس سال از جدید به قدیم.
 */
window.PROJECTS = [
  {
    id: "alpha-shome",
    featured: true,
    year: 2025,
    title: { fa: "Alpha SHome", en: "Alpha SHome" },
    role: { fa: "خانه‌ی هوشمند · از ۲۰۲۰، در App Store و استورهای ایرانی", en: "Smart home · since 2020, on the App Store and Iranian stores" },
    description: {
      fa: "همه‌ی دستگاه‌های هوشمند خانه در یک اپ، هر جا که باشید.",
      en: "Every smart device in your home, in one app, wherever you are."
    },
    tech: ["Swift", "UIKit", "Core Data", "MQTT", "WebSocket", "TCP", "RESTful API", "Firebase"],
    image: "assets/projects/alpha-shome.jpg",
    links: {
      appStore: "https://apps.apple.com/app/alpha-shome/id6544790434",
      // نسخه‌ی استورهای ایرانی (همان Alpha Holding سابق)
      sibapp: "https://sibapp.com/applications/Alphaholding",
      googlePlay: "",
      github: "",
      website: ""
    }
  },
  {
    id: "hangout",
    year: 2021,
    title: { fa: "Hangout", en: "Hangout" },
    role: { fa: "شبکه‌ی اجتماعی و تماس تصویری", en: "Social & video calls" },
    description: {
      fa: "تماس تصویری با دوستان، همراه با چند بازی کوچک در دل گفت‌وگو.",
      en: "Video calls with friends, with a few games to play along the way."
    },
    tech: ["Swift", "Firebase", "Firestore", "Realtime Database", "Cloud Messaging", "Google Sign-In"],
    image: "",
    links: { appStore: "", googlePlay: "", github: "", website: "" }
  },
  {
    id: "am-up",
    year: 2021,
    title: { fa: "AmUp", en: "AmUp" },
    role: { fa: "شبکه‌ی اجتماعی رویدادها", en: "Social events" },
    description: {
      fa: "رویدادهای اطرافتان را پیدا کنید، یا رویداد خودتان را برپا کنید.",
      en: "Find what's happening nearby, or host something of your own."
    },
    tech: ["Swift", "RESTful API", "Firebase", "Firestore", "Cloud Messaging", "Google Maps", "Sign in with Google"],
    image: "assets/projects/amup.jpg",
    links: { appStore: "https://apps.apple.com/app/amup/id6642675054", googlePlay: "", github: "", website: "" }
  },
  {
    id: "unit-converter",
    year: 2020,
    title: { fa: "Unit Converter", en: "Unit Converter" },
    role: { fa: "ابزار تبدیل واحد", en: "Utility" },
    description: {
      fa: "یک عدد وارد کنید و همه‌ی واحدها را هم‌زمان ببینید.",
      en: "Type a value once and see it in every unit at once."
    },
    tech: ["Swift", "UIKit"],
    image: "assets/projects/unit-converter.jpg",
    links: { anardoni: "https://anardoni.com/ios/app/comiamirhoseinunitconverterunit-converter", appStore: "", googlePlay: "", github: "", website: "" }
  },
  {
    id: "rasht-radio",
    year: 2019,
    title: { fa: "Rasht Radio", en: "Rasht Radio" },
    role: { fa: "پخش پادکست و ویدیو", en: "Podcast & video player" },
    description: {
      fa: "پادکست‌ها و ویدیوهای رشت، در یک اپ.",
      en: "Rasht's podcasts and videos, all in one place."
    },
    tech: ["Swift", "RESTful API", "AVFoundation"],
    image: "",
    links: { appStore: "", googlePlay: "", github: "", website: "" }
  },
  {
    id: "rasht-plus",
    year: 2019,
    title: { fa: "Rasht Plus", en: "Rasht Plus" },
    role: { fa: "واقعیت افزوده · نسخه‌ی بتا", en: "Augmented reality · beta" },
    description: {
      fa: "موزه‌ی خیابانی رشت، زنده با واقعیت افزوده.",
      en: "Rasht's street museum, brought to life with augmented reality."
    },
    tech: ["Swift", "AR", "RESTful API"],
    image: "",
    links: { appStore: "", googlePlay: "", github: "", website: "http://rasht.plus" }
  },
  {
    id: "planner",
    year: 2019,
    title: { fa: "برنامه‌ریز", en: "Planner" },
    role: { fa: "فهرست کارها و یادآور", en: "To-do list & reminders" },
    description: {
      fa: "کارها، یادآورها و چک‌لیست‌ها؛ ساده و مرتب.",
      en: "Tasks, reminders and checklists. Simple and tidy."
    },
    tech: ["Swift", "Core Data", "User Notifications"],
    image: "assets/projects/planner.jpg",
    links: { anardoni: "https://anardoni.com/ios/app/comiamirhoseinappplanner", appStore: "", googlePlay: "", github: "", website: "" }
  }
];
