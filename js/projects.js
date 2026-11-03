/*
 * پروژه‌های نمونه‌کار — برای افزودن پروژه‌ی جدید فقط همین فایل را ویرایش کنید.
 * Portfolio projects — edit only this file to add or change a project.
 *
 * هر پروژه یک شیء در آرایه‌ی زیر است. فیلدها:
 *   id           شناسه‌ی یکتا، انگلیسی و بدون فاصله (مثلاً "my-app")
 *                کارت روی سایت با نشانی ‎#project-<id>‎ قابل لینک است
 *   placeholder  true یعنی نمونه‌ی ساختگی است و روی سایت برچسب «نمونه» می‌خورد
 *   selected     true یعنی در «Selected Work» با Case Study نمایش داده می‌شود؛ بقیه در فهرست «More projects»
 *   year         سال انجام پروژه (عدد میلادی؛ در نسخه‌ی فارسی خودکار با رقم فارسی نمایش داده می‌شود)
 *   title        { fa, en } عنوان
 *   role         { fa, en } نقش شما یا نوع اپ
 *   description  { fa, en } توضیح کوتاه (یک جمله؛ زیر عنوان کارت و صفحه‌ی جزئیات)
 *   summary      { fa, en } دو جمله توضیح بیشتر زیر description، فقط روی کارت صفحه‌ی اصلی
 *
 *   فیلدهای صفحه‌ی جزئیات (فقط برای پروژه‌های selected؛ صفحه در project.html?p=<id>):
 *   overview     { fa: [...], en: [...] } پاراگراف‌های معرفی
 *   myRole       { title: { fa, en }, body: { fa, en } } نقش شما
 *   features     { fa: [...], en: [...] } قابلیت‌های کلیدی
 *   highlights   [{ title: { fa, en }, body: { fa, en } }] نکته‌های فنی
 *   status       { fa, en } وضعیت پروژه
 *   screenshots  فهرست مسیر اسکرین‌شات‌ها (عمودی، مثلاً assets/projects/<id>/01.jpg)
 *
 *   tech         فهرست فناوری‌ها
 *   image        مسیر تصویر در assets/projects/ (اختیاری؛ اگر خالی باشد کارت با رنگ و حرف اول ساخته می‌شود)
 *                اندازه‌ی پیشنهادی: ۱۲۰۰×۷۵۰ پیکسل، PNG یا JPG یا WebP
 *   links        { appStore, sibapp, anardoni, googlePlay, github, website } — هر کدام خالی ("") باشد، دکمه‌اش نمایش داده نمی‌شود
 *
 * ترتیب نمایش: پروژه‌های selected به همان ترتیبی که در این فایل آمده‌اند؛ بقیه بر اساس سال از جدید به قدیم.
 */
window.PROJECTS = [
  {
    id: "alpha-shome",
    selected: true,
    year: 2025,
    title: { fa: "Alpha SHome", en: "Alpha SHome" },
    role: { fa: "خانه‌ی هوشمند · از ۲۰۲۰، در App Store و استورهای ایرانی", en: "Smart home · since 2020, on the App Store and Iranian stores" },
    description: {
      fa: "پلتفرمی یکپارچه در iOS برای کنترل و مدیریت دستگاه‌های خانه‌ی هوشمند.",
      en: "A unified iOS platform for controlling and managing smart home devices."
    },
    summary: {
      fa: "اپ خانه‌ی هوشمندی که کلیدها، پرده‌ها، ترموستات‌ها، روشنایی و دستگاه‌های متصل را در یک تجربه‌ی کنترل یکپارچه کنار هم می‌آورد. از صفر تا انتها ساخته شده، با ارتباط محلی و از راه دور با دستگاه‌ها.",
      en: "A smart home app that brings switches, curtains, thermostats, lighting and connected devices into one seamless control experience. Built end to end, with local and remote device communication."
    },
    overview: {
      fa: [
        "Alpha SHome یک اپ بومی iOS است که دستگاه‌های هوشمند مختلف خانه را در یک تجربه‌ی یکپارچه کنار هم می‌آورد.",
        "کاربر از راه یک رابط ساده دستگاه‌ها را پیدا، تنظیم، پایش و کنترل می‌کند؛ هم روی شبکه‌ی محلی و هم از راه دور.",
        "از کلید و پرده‌ی هوشمند تا ترموستات، نورپردازی RGB، پریز، کنترلر چندرسانه‌ای و دستگاه‌های RFID، همه با یک تجربه‌ی کنترل یکسان در دسته‌های مختلف."
      ],
      en: [
        "Alpha SHome is a native iOS application designed to bring multiple smart home devices into one seamless experience.",
        "The application enables users to discover, configure, monitor, and control connected devices through an intuitive interface, supporting both local network communication and remote access.",
        "From smart switches and curtains to thermostats, RGB lighting, outlets, multimedia controllers, and RFID devices, Alpha SHome provides a unified control experience across different device categories."
      ]
    },
    myRole: {
      title: { fa: "توسعه‌دهنده‌ی iOS — توسعه‌ی کامل محصول", en: "iOS Developer — Full Product Development" },
      body: {
        fa: "مسئول توسعه‌ی کامل اپ iOS بودم؛ از ساختار اپ و پیاده‌سازی رابط کاربری تا اتصال دستگاه‌ها، فرایندهای ارتباطی و توسعه‌ی قابلیت‌ها.",
        en: "I was responsible for the end-to-end iOS development of the application, including application structure, user interface implementation, device integration, communication workflows, and feature development."
      }
    },
    features: {
      fa: ["مدیریت یکپارچه‌ی دستگاه‌های هوشمند", "رابط کنترل اختصاصی برای هر نوع دستگاه", "ارتباط با دستگاه‌ها روی شبکه‌ی محلی", "دسترسی و کنترل از راه دور", "ارتباط و به‌روزرسانی بلادرنگ وضعیت دستگاه‌ها", "پیدا کردن و راه‌اندازی دستگاه‌ها", "احراز هویت و مدیریت دسترسی کاربران", "پشتیبانی از فارسی و انگلیسی"],
      en: ["Unified smart device management", "Device-specific control interfaces", "Local network device communication", "Remote device access and control", "Real-time communication and device updates", "Device discovery and provisioning", "User authentication and access management", "Persian and English localization"]
    },
    highlights: [
      {
        title: { fa: "ارتباط محلی و از راه دور", en: "Local & Remote Communication" },
        body: { fa: "فرایندهای ارتباطی کنترل دستگاه‌ها را هم درون شبکه‌ی محلی و هم از راه دور پیاده کردم.", en: "Implemented communication workflows for controlling smart devices both within the local network and remotely." }
      },
      {
        title: { fa: "انواع مختلف دستگاه", en: "Multiple Device Types" },
        body: { fa: "تجربه‌ای منعطف ساختم که دسته‌های مختلف دستگاه را، هر کدام با کنترل‌ها و الگوی تعامل خودش، پشتیبانی می‌کند.", en: "Developed a flexible application experience supporting different device categories, each with its own controls and interaction patterns." }
      },
      {
        title: { fa: "تعامل بلادرنگ", en: "Real-time Interaction" },
        body: { fa: "فناوری‌های ارتباطی را برای پاسخ سریع دستگاه‌ها و به‌روزرسانی وضعیتشان به کار گرفتم.", en: "Integrated communication technologies to support responsive device interactions and status updates." }
      },
      {
        title: { fa: "راه‌اندازی دستگاه", en: "Device Provisioning" },
        body: { fa: "فرایند افزودن و راه‌اندازی دستگاه‌ها را، از جمله بر پایه‌ی ESPTouch v2، پیاده کردم.", en: "Implemented device onboarding workflows, including ESPTouch v2-based provisioning." }
      },
      {
        title: { fa: "مدیریت دسترسی", en: "Access Management" },
        body: { fa: "روی فرایندهای دسترسی کاربران و دستگاه‌ها کار کردم تا دسترسی در سراسر اپ کنترل‌شده باشد.", en: "Worked on user and device access workflows to support controlled access across the application." }
      }
    ],
    status: { fa: "منتشر شده و در App Store در دسترس است.", en: "Released and available on the App Store." },
    tech: ["Swift", "UIKit", "REST APIs", "MQTT", "WebSocket", "ESPTouch v2", "Sign in with Apple"],
    image: "assets/projects/alpha-shome.jpg",
    screenshots: [
      "assets/projects/alpha-shome/01.jpg",
      "assets/projects/alpha-shome/02.jpg",
      "assets/projects/alpha-shome/03.jpg",
      "assets/projects/alpha-shome/04.jpg",
      "assets/projects/alpha-shome/05.jpg"
    ],
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
    id: "am-up",
    selected: true,
    year: 2021,
    title: { fa: "AmUp", en: "AmUp" },
    role: { fa: "شبکه‌ی اجتماعی رویدادها", en: "Social events" },
    description: {
      fa: "پلتفرمی اجتماعی برای دور هم جمع کردن آدم‌ها با فعالیت‌های مشترک.",
      en: "A social platform designed to bring people together through shared activities."
    },
    summary: {
      fa: "اپ اجتماعی مبتنی بر موقعیت مکانی برای پیدا کردن فعالیت‌های اطراف، ساختن رویداد و آشنایی با آدم‌ها. از طراحی UI/UX تا پیاده‌سازی ساخته شده، با کشف رویدادها روی نقشه و اتصال به سرویس‌های اجتماعی.",
      en: "A location-based social app for discovering nearby activities, creating events and meeting people. Built from UI/UX design to implementation, with map-based discovery and social integrations."
    },
    overview: {
      fa: [
        "AmUp یک اپ شبکه‌ی اجتماعی است که به کاربران کمک می‌کند فعالیت‌ها را پیدا کنند، رویداد بسازند و با آدم‌های اطرافشان در ارتباط باشند.",
        "تمرکز اپ بر کشف مکان‌محور و تعامل اجتماعی است؛ کاربر رویدادهای نزدیک را می‌بیند، فعالیت برگزار می‌کند و با دیگر اعضا در ارتباط است."
      ],
      en: [
        "AmUp is a social networking application that helps users discover activities, create events, and connect with people around them.",
        "The application focuses on location-based discovery and social interactions, allowing users to explore nearby events, organize activities, and interact with other members."
      ]
    },
    myRole: {
      title: { fa: "توسعه‌دهنده‌ی iOS — توسعه‌ی کامل محصول", en: "iOS Developer — Full Product Development" },
      body: {
        fa: "مسئول توسعه‌ی کامل اپ iOS بودم؛ از پیاده‌سازی رابط کاربری و جریان‌های اپ تا اتصال به سرویس‌های بک‌اند و توسعه‌ی قابلیت‌های اصلی محصول.",
        en: "I was responsible for the complete iOS application development, from implementing the user interface and application flows to integrating backend services and developing core product features."
      }
    },
    features: {
      fa: ["پروفایل کاربری و تعامل اجتماعی", "پیدا کردن فعالیت‌ها و رویدادهای نزدیک", "ساخت و مدیریت رویداد", "تجربه‌های مکان‌محور", "فرایند شرکت در رویدادها", "ارتباط و تعامل میان کاربران"],
      en: ["User profiles and social interactions", "Discovering nearby activities and events", "Creating and managing events", "Location-based experiences", "Event participation workflows", "Social connections and user interactions"]
    },
    highlights: [
      {
        title: { fa: "تجربه‌های مکان‌محور", en: "Location-based Experiences" },
        body: { fa: "قابلیت‌های وابسته به مکان را برای پیدا کردن فعالیت‌ها و رویدادها پیاده کردم.", en: "Implemented location-aware functionality to support discovering activities and events." }
      },
      {
        title: { fa: "جریان‌های اجتماعی", en: "Social Workflows" },
        body: { fa: "جریان‌هایی را ساختم که کاربر با آن‌ها رویداد می‌سازد، رویدادها را می‌گردد و با آن‌ها تعامل می‌کند.", en: "Developed the application flows required for users to create, explore, and interact with events." }
      },
      {
        title: { fa: "اتصال به بک‌اند", en: "Backend Integration" },
        body: { fa: "سرویس‌ها و APIهای اپ را برای پشتیبانی از تعامل کاربران و قابلیت‌های محصول متصل کردم.", en: "Integrated application services and APIs to support user interactions and product functionality." }
      }
    ],
    status: { fa: "منتشر شده و در App Store در دسترس است.", en: "Released and available on the App Store." },
    tech: ["Swift", "UIKit", "REST APIs", "Google Maps", "Google Sign-In", "Sign in with Apple"],
    image: "assets/projects/amup.jpg",
    screenshots: [
      "assets/projects/am-up/01.jpg",
      "assets/projects/am-up/02.jpg",
      "assets/projects/am-up/03.jpg",
      "assets/projects/am-up/04.jpg",
      "assets/projects/am-up/05.jpg"
    ],
    links: { appStore: "https://apps.apple.com/app/amup/id6642675054", googlePlay: "", github: "", website: "" }
  },
  {
    id: "hang",
    selected: true,
    year: 2021,
    title: { fa: "Hang", en: "Hang" },
    role: { fa: "شبکه‌ی اجتماعی و تماس تصویری", en: "Social & video calls" },
    description: {
      fa: "تعامل‌های دیجیتال شخصی‌تر، با ارتباط بلادرنگ.",
      en: "Making digital interactions more personal through real-time communication."
    },
    summary: {
      fa: "اپ اجتماعی با تمرکز بر ارتباط تصویری بلادرنگ و تجربه‌های تعاملی. طراحی و توسعه از ابتدا تا انتها، با تماس تصویری مبتنی بر WebRTC.",
      en: "A social app focused on real-time video connections and interactive experiences. Designed and developed end to end, with WebRTC-powered video communication."
    },
    overview: {
      fa: [
        "Hang یک اپ اجتماعی است که با تجربه‌های تعاملی و تماس تصویری بلادرنگ، آدم‌ها را به هم نزدیک می‌کند.",
        "این اپ امکانات شبکه‌ی اجتماعی را با تماس تصویری و قابلیت‌های تعاملی ترکیب می‌کند تا ارتباط کاربران گیراتر باشد."
      ],
      en: [
        "Hang is a social application focused on bringing people together through interactive experiences and real-time video communication.",
        "The application combines social networking capabilities with video calls and interactive features, creating a more engaging way for users to connect."
      ]
    },
    myRole: {
      title: { fa: "توسعه‌دهنده‌ی iOS — توسعه‌ی کامل محصول", en: "iOS Developer — Full Product Development" },
      body: {
        fa: "توسعه‌ی کامل iOS این اپ را پیش بردم و مسئولیت پیاده‌سازی، رابط کاربری، جریان‌های اپ، اتصال به بک‌اند و قابلیت‌های ارتباط بلادرنگ با من بود.",
        en: "I led the end-to-end iOS development of the application, taking responsibility for its implementation, user interface, application workflows, backend integration, and real-time communication features."
      }
    },
    features: {
      fa: ["تماس تصویری بلادرنگ", "ارتباط و تعامل میان کاربران", "پروفایل کاربری و پیدا کردن دیگران", "تجربه‌های تعاملی در حین تماس تصویری", "بازی‌های کوچک در دل تعامل‌های اجتماعی"],
      en: ["Real-time video calling", "Social connections and user interactions", "User profiles and discovery", "Interactive experiences during video calls", "Mini-games integrated into social interactions"]
    },
    highlights: [
      {
        title: { fa: "تماس تصویری با WebRTC", en: "WebRTC Video Communication" },
        body: { fa: "تجربه‌ی تماس تصویری در iOS را با WebRTC پیاده کردم.", en: "Implemented the iOS video communication experience using WebRTC." }
      },
      {
        title: { fa: "تجربه‌ی بلادرنگ", en: "Real-time User Experience" },
        body: { fa: "قابلیت‌هایی ساختم که ارتباط تعاملی و مشارکت اجتماعی را ممکن می‌کنند.", en: "Developed application features that support interactive communication and social engagement." }
      },
      {
        title: { fa: "توسعه‌ی اپ", en: "Application Development" },
        body: { fa: "پیاده‌سازی iOS قابلیت‌ها و جریان‌های اصلی اپ با من بود.", en: "Handled the iOS implementation across the application's main features and user workflows." }
      }
    ],
    status: { fa: "در حال توسعه.", en: "Currently in development." },
    tech: ["Swift", "UIKit", "WebRTC", "Firebase"],
    image: "",
    screenshots: [],
    links: { appStore: "", googlePlay: "", github: "", website: "" }
  },
  {
    id: "rasht-radio",
    selected: true,
    year: 2019,
    title: { fa: "Rasht Radio", en: "Rasht Radio" },
    role: { fa: "پخش پادکست و ویدیو", en: "Podcast & video player" },
    description: {
      fa: "تجربه‌ای دیجیتال برای پیدا کردن و لذت بردن از محتوای صوتی و تصویری.",
      en: "A digital media experience for discovering and enjoying audio and video content."
    },
    summary: {
      fa: "اپ نیتیو رسانه‌ای برای پیدا کردن و پخش محتوای صوتی و تصویری. طراحی و توسعه از پایه، شامل مرور محتوا و پخش رسانه داخل اپ.",
      en: "A native media app for discovering and playing audio and video content. Designed and developed from the ground up, including content browsing and in-app media playback."
    },
    overview: {
      fa: [
        "Rasht Radio یک اپ رسانه‌ای است که با تجربه‌ای اختصاصی در موبایل، محتوای صوتی و تصویری را در دسترس کاربران می‌گذارد.",
        "کشف محتوا، مرور دسته‌بندی‌شده و پخش صدا و ویدیو داخل اپ، همه در یک جا جمع شده‌اند."
      ],
      en: [
        "Rasht Radio is a media application designed to provide users with access to audio and video content through a dedicated mobile experience.",
        "The application brings content discovery, categorized browsing, and in-app media playback together in one place."
      ]
    },
    myRole: {
      title: { fa: "توسعه‌دهنده‌ی iOS — توسعه‌ی کامل محصول", en: "iOS Developer — Full Product Development" },
      body: {
        fa: "مسئول توسعه‌ی کامل iOS بودم؛ از رابط کاربری و تجربه‌ی پخش رسانه تا جریان‌های اپ و اتصال به سرویس‌ها.",
        en: "I was responsible for the complete iOS development, including the user interface, media playback experience, application workflows, and service integration."
      }
    },
    features: {
      fa: ["کشف محتوای صوتی و تصویری", "مرور دسته‌بندی‌شده‌ی محتوا", "پخش صدا داخل اپ", "پخش‌کننده‌ی صوتی اختصاصی با نمایش موج صدا", "پخش ویدیو داخل اپ", "اتصال به منابع محتوا"],
      en: ["Audio and video content discovery", "Categorized content browsing", "In-app audio playback", "Custom waveform-based audio player", "In-app video playback", "Media content integration"]
    },
    highlights: [
      {
        title: { fa: "تجربه‌ی صوتی اختصاصی", en: "Custom Audio Experience" },
        body: { fa: "رابط پخش صوتی اختصاصی با نمایش موج صدا ساختم.", en: "Developed a dedicated audio playback interface with waveform visualization." }
      },
      {
        title: { fa: "پخش رسانه", en: "Media Playback" },
        body: { fa: "روی قابلیت‌های بومی پخش محتوای صوتی و تصویری کار کردم.", en: "Worked on native media playback capabilities for audio and video content." }
      },
      {
        title: { fa: "اتصال محتوا", en: "Content Integration" },
        body: { fa: "سرویس‌های محتوا را برای کشف و پخش رسانه داخل اپ متصل کردم.", en: "Integrated content services to support media discovery and playback within the application." }
      }
    ],
    status: { fa: "توسعه به پایان رسیده و پروژه دیگر به‌طور فعال نگهداری نمی‌شود.", en: "Development completed; the project is no longer actively maintained." },
    tech: ["Swift", "UIKit", "AVFoundation", "REST APIs"],
    image: "assets/projects/rasht-radio.jpg",
    screenshots: [
      "assets/projects/rasht-radio/01.jpg",
      "assets/projects/rasht-radio/02.jpg",
      "assets/projects/rasht-radio/03.jpg",
      "assets/projects/rasht-radio/04.jpg",
      "assets/projects/rasht-radio/05.jpg",
      "assets/projects/rasht-radio/06.jpg",
      "assets/projects/rasht-radio/07.jpg"
    ],
    links: { appStore: "", googlePlay: "", github: "", website: "" }
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
