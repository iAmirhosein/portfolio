/*
 * اطلاعات تماس، مهارت‌ها و سوابق کاری — اینجا را با اطلاعات واقعی خودتان پر کنید.
 * Contact details, skills and experience — fill these in with your real details.
 *
 * هر لینکی که خالی ("") بماند، روی سایت نمایش داده نمی‌شود.
 * مقدارهایی که با REPLACE_ME شروع شده‌اند جای‌نگهدارند و باید عوض شوند.
 */
window.SITE_CONFIG = {
  // عکس شما برای بخش اول سایت (سیاه‌وسفید نمایش داده می‌شود)، مثلاً "assets/me.jpg"
  // پیشنهاد: عمودی، حدود ۸۰۰×۱۰۰۰ پیکسل. تا خالی است، «iA» جایش نمایش داده می‌شود.
  photo: "assets/me.jpg",

  email: "iAmirhosein7@gmail.com",

  // فقط یوزرنیم، بدون @ — مثلاً "iAmirhosein"
  telegram: "iAmirhosein_dev",

  // یوزرنیم واتس‌اپ، یا شماره با کد کشور و بدون + (مثلاً "989121234567")
  // شماره → لینک مستقیم wa.me؛ یوزرنیم → دکمه‌ای که یوزرنیم را کپی می‌کند
  // (واتس‌اپ هنوز لینک رسمی برای یوزرنیم منتشر نکرده است)
  whatsapp: "iAmirhosein_dev",

  // لینک کامل پروفایل
  linkedin: "https://www.linkedin.com/in/amirhosein-kohansal/",
  github: "https://github.com/iAmirhosein",

  // مهارت‌ها برای نوار متحرک زیر بخش اول، به ترتیب نمایش
  skills: [
    "Swift", "Objective-C", "UIKit", "SwiftUI", "REST APIs", "Alamofire", "WebRTC", "MQTT",
    "WebSocket", "Socket.IO", "TCP", "Core Data", "Realm", "AVFoundation", "ARKit",
    "Firebase", "Firestore", "Cloud Messaging", "Google Maps", "MapKit",
    "Swift Package Manager", "CocoaPods", "Git", "App Store Connect"
  ],

  // بخش Expertise: هر گروه یک عنوان { fa, en } و فهرست مهارت‌ها
  expertise: [
    {
      title: { fa: "زبان، رابط کاربری و معماری", en: "Language, UI & architecture" },
      items: ["Swift", "Objective-C", "UIKit", "SwiftUI", "Auto Layout", "Storyboards", "Programmatic UI", "MVC", "MVVM"]
    },
    {
      title: { fa: "شبکه", en: "Networking" },
      items: ["REST APIs", "Alamofire", "WebSocket", "Socket.IO", "MQTT", "TCP", "ESPTouch v2"]
    },
    {
      title: { fa: "تماس صوتی و تصویری", en: "Voice & video" },
      items: ["WebRTC", "VoIP", "Agora", "Twilio", "Jitsi"]
    },
    {
      title: { fa: "فریم‌ورک‌های iOS و داده", en: "iOS frameworks & data" },
      items: ["Core Data", "Realm", "AVFoundation", "MapKit", "ARKit", "User Notifications"]
    },
    {
      title: { fa: "سرویس‌ها و SDKها", en: "Services & SDKs" },
      items: ["Firebase", "Firestore", "Realtime Database", "Cloud Messaging", "Google Maps", "Google Sign-In"]
    },
    {
      title: { fa: "ابزار و انتشار", en: "Tooling & release" },
      items: ["Xcode", "Git", "Swift Package Manager", "CocoaPods", "TestFlight", "App Store Connect"]
    }
  ],

  // بخش Experience. هر مورد: نقش، پروژه، شرکت، سال (from/to؛ to: null یعنی «اکنون»)،
  // خلاصه، فهرست مسئولیت‌ها (points) و تکنولوژی‌ها (tech)
  experience: [
    {
      from: 2020, to: 2020,
      role: { fa: "توسعه‌دهنده‌ی iOS", en: "iOS Developer" },
      project: "Alpha Smart Home",
      company: "Alpha Smart Home",
      summary: {
        fa: "طراحی و توسعه‌ی اپلیکیشن iOS آلفا اسمارت‌هوم، با مسئولیت کامل فرایند توسعه‌ی iOS، از طراحی UI/UX تا معماری و پیاده‌سازی اپ.",
        en: "Designed and developed the iOS application for Alpha Smart Home, taking ownership of the complete iOS development process, from UI/UX design to application architecture and implementation."
      },
      points: {
        fa: [
          "طراحی UI/UX اپ در Figma و پیاده‌سازی رابط‌ها با Swift و UIKit.",
          "تعریف معماری اپ، ساختار پروژه و معماری داده در سمت اپ.",
          "پیاده‌سازی ارتباط محلی و از راه دور بین اپ و دستگاه‌های خانه‌ی هوشمند.",
          "استفاده از MQTT، REST API و WebSocket برای ارتباط با دستگاه‌ها و دسترسی از راه دور.",
          "توسعه‌ی رابط‌ها و جریان‌های تعامل مخصوص هر دستگاه، برای محصولات مختلف خانه‌ی هوشمند."
        ],
        en: [
          "Designed the application UI/UX in Figma and implemented the interfaces using Swift and UIKit.",
          "Defined the application architecture, project structure, and app-side data architecture.",
          "Implemented local and remote communication between the app and smart home devices.",
          "Integrated MQTT, REST APIs, and WebSocket for device communication and remote access.",
          "Developed device-specific interfaces and interaction flows for different smart home products."
        ]
      },
      tech: ["Swift", "UIKit", "Figma", "MQTT", "REST APIs", "Alamofire", "WebSocket", "Socket.IO", "TCP", "Core Data", "User Notifications", "Firebase", "Google Sign-In"]
    },
    {
      from: 2021, to: 2021,
      role: { fa: "توسعه‌دهنده‌ی iOS", en: "iOS Developer" },
      project: "Hang",
      company: "Zyma",
      summary: {
        fa: "طراحی و توسعه‌ی اپلیکیشن iOS هنگ، با مسئولیت کامل پیاده‌سازی iOS، طراحی UI/UX و معماری اپ.",
        en: "Designed and developed the iOS application for Hang, taking responsibility for the complete iOS implementation, UI/UX design, and application architecture."
      },
      points: {
        fa: [
          "طراحی UI/UX اپ در Figma و پیاده‌سازی رابط‌ها با Swift و UIKit.",
          "تعریف معماری اپ، ساختار پروژه و معماری داده در سمت اپ.",
          "پیاده‌سازی تماس تصویری با WebRTC.",
          "توسعه‌ی جریان‌های اصلی اپ و قابلیت‌هایی که کاربر با آن‌ها سروکار دارد.",
          "تمرکز بر کیفیت کد، نگهداری‌پذیری و تجربه‌ی کاربری روان."
        ],
        en: [
          "Designed the application UI/UX in Figma and implemented the interfaces using Swift and UIKit.",
          "Defined the application architecture, project structure, and app-side data architecture.",
          "Implemented video communication features using WebRTC.",
          "Developed the core application flows and user-facing features.",
          "Focused on code quality, maintainability, and a smooth user experience."
        ]
      },
      tech: ["Swift", "UIKit", "Figma", "WebRTC", "REST APIs", "Alamofire", "WebSocket", "VoIP", "Agora", "Twilio", "Jitsi", "User Notifications", "Firebase", "Firestore"]
    },
    {
      from: 2021, to: 2021,
      role: { fa: "توسعه‌دهنده‌ی iOS", en: "iOS Developer" },
      project: "AmUp",
      company: "Faraz Partoei",
      summary: {
        fa: "هدایت توسعه‌ی iOS اپ AmUp، با مسئولیت کامل اپ از طراحی اولیه‌ی UI/UX تا معماری و پیاده‌سازی کامل.",
        en: "Led the iOS development of AmUp, taking ownership of the application from initial UI/UX design to architecture and full implementation."
      },
      points: {
        fa: [
          "طراحی UI/UX اپ در Figma و تبدیل طرح‌ها به رابط‌های نیتیو iOS.",
          "تعریف معماری اپ، ساختار پروژه و معماری داده در سمت اپ.",
          "توسعه‌ی قابلیت‌های اصلی اپ و جریان‌های تعامل کاربر.",
          "پیاده‌سازی اتصال به API و مدیریت ارتباط اپ iOS با سرویس‌های بک‌اند.",
          "تمرکز بر ساخت اپی نگهداری‌پذیر، مقیاس‌پذیر و کاربرپسند."
        ],
        en: [
          "Designed the application UI/UX in Figma and translated the designs into native iOS interfaces.",
          "Defined the application architecture, project structure, and app-side data architecture.",
          "Developed the application's core features and user interaction flows.",
          "Implemented API integration and handled communication between the iOS application and backend services.",
          "Focused on building a maintainable, scalable, and user-friendly application."
        ]
      },
      tech: ["Swift", "UIKit", "Auto Layout", "Figma", "REST APIs", "Alamofire", "User Notifications", "Firebase", "Firestore", "Cloud Messaging", "Google Maps"]
    },
    {
      from: 2019, to: 2019,
      role: { fa: "توسعه‌دهنده‌ی iOS", en: "iOS Developer" },
      project: "Rasht Radio",
      company: "Archismdirect",
      summary: {
        fa: "طراحی و توسعه‌ی اپلیکیشن نیتیو iOS رادیو رشت، با مدیریت کامل فرایند توسعه‌ی iOS، شامل طراحی UI/UX، معماری و پیاده‌سازی اپ.",
        en: "Designed and developed the native iOS application for Rasht Radio, managing the complete iOS development process, including UI/UX design, application architecture, and implementation."
      },
      points: {
        fa: [
          "طراحی UI/UX اپ در Figma و پیاده‌سازی رابط‌های نیتیو iOS.",
          "تعریف معماری اپ، ساختار پروژه و معماری داده در سمت اپ.",
          "توسعه‌ی قابلیت‌های اصلی اپ و جریان‌های تعامل با محتوا.",
          "اتصال به سرویس‌های بک‌اند و پیاده‌سازی قابلیت‌های لازم در سمت اپ.",
          "تمرکز بر کارایی، نگهداری‌پذیری و ارائه‌ی یک تجربه‌ی رسانه‌ای باکیفیت."
        ],
        en: [
          "Designed the application UI/UX in Figma and implemented the native iOS interfaces.",
          "Defined the application architecture, project structure, and app-side data architecture.",
          "Developed the application's core features and content interaction flows.",
          "Integrated backend services and implemented the required application-side functionality.",
          "Focused on performance, maintainability, and delivering a polished media experience."
        ]
      },
      tech: ["Swift", "UIKit", "Figma", "REST APIs"]
    }
  ]
};
