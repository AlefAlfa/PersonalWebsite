import { dictionary, locale, addMessages, getLocaleFromHostname, init } from "svelte-i18n";

export function setupi18n(_locale="de"){
    dictionary.set({
      en: {
        "nav": {
          "home": "Home",
          "about": "About",
          "contact": "Contact"
        },
        "home": {
          "box": "👋Greetings!",
          "subtitle": "Aspiring Full Stack Developer",
          "cv": "Download CV"
        },
        "tech": {
          "languages": "language"
        },
        "about": {
          "box": "🧐about me",
          "name": "👋Hi my name is Lev!",
          "experience": {
           "year": "👨‍💻 For the past year I have been dabbling with different software technologies:",
            "ios": "iOS development with Swift and SwiftUI",
            "api": "Built some APIs with python’s FastAPI and Flask",
            "web": "Made a few full stack websites with JavaScript and SvelteKit",
            "aws": "Looked into AWS's services (EC2, RDS, S3, Lambda, etc)",
          },
          "ui/ux": "👨‍🎨 I am familiar with UI/UX design including methodologies (Design Thinking, Card Sorting, User interviews, etc) and tooling (Figma, Dribbble, Mobbin)",
          "uni": "🎓 I am studying software engineering at the FH Aachen",
          "motivation": "🚀 Everyday trying to be a little bit better than yesterday. Never Stop Optimizing!"
        },
        "projects": {
          "title": "Projects and Creations",
          "EmojiMemory": "Emoji memeory game buildt with Svelte and styles with TailwindCSS",
          "WeatherDashboard": "Weather dashboard which can show you the weather forcast in a given location",
          "BlueCircleTimer": "Timer to help you keep track of time",
          "MyPersonalWebsite": "Personal website where I can share my Projects with the world"
        },
        "skills": {
          "title": "Technologies und Skills",
          "everyday": "Technologies I use everyday",
          "past": "Technologies I have worked with"
        },
        "contact": {
          "box": "📬Contact",
          "title": "Let's Talk",
          "toTop": "Back to Top"
        }
      },
      de: {
        "nav": {
          "home": "Start",
          "about": "Ich",
          "contact": "Kontakt"
        },
        "home":{
          "box": "👋Moin!",
          "subtitle": "Angehender Full-Stack-Entwickler",
          "cv": "Lebenslauf"
        },
        "tech": {
          "languages": "Sprache"
        },
        "about": {
          "box": "🧐über mich",
          "name": "👋Hallo, mein Name ist Lev!",
          "experience": {
            "year":"👨‍💻Im letzten Jahr habe ich mich mit verschiedenen Softwaretechnologien beschäftigt:",
            "ios": "iOS-Entwicklung mit Swift und SwiftUI",
            "api": "APIs mit Pythons FastAPI und Flask erstellt",
            "web": "Einige Full-Stack-Websites mit JavaScript und SvelteKit erstellt",
            "aws": "Erfahrung mit AWS-Diensten (EC2, RDS, S3, Lambda, usw.) gesammelt",
          },
          "ui/ux": "👨‍🎨Ich kenne mich mit UI/UX-Design aus, einschließlich Methoden (Design Thinking, Card Sorting, Nutzerinterviews, etc.) und Tools (Figma, Dribbble, Mobbin).",
          "uni": "🎓Ich studiere Informatik an der FH Aachen",
          "motivation": "🚀Jeden Tag versuche ich bisschen besser als gestern zu sein. Never stop optimizing!"
        },
        "projects": {
          "title": "Projekte und Kreationen",
          "EmojiMemory": "Emoji-Memory, gebaut mit Svelte und gestaltet mit TailwindCSS",
          "WeatherDashboard": "Wetter-Dashboard, das die Wettervorhersage für jeden Ort anzeigen kann",
          "BlueCircleTimer": "Minimalistischer Timer der einem dabei hilft die Zeit im Blick zu behalten",
          "MyPersonalWebsite": "Persönliche Website auf der ich meine Projekte ausstellen kann"
        },
        "skills": {
          "title": "Skills und Technologien",
          "everyday": "Technologien, die ich täglich nutze",
          "past": "Technologien, mit denen ich schon gearbeitet habe"
      
        },
        "contact": {
          "box": "📬Kontakt",
          "title": "Lass Quatschen",
          "toTop": "Nach Oben"
        }
      }
  })

  locale.set(_locale)
}