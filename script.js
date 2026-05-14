const header = document.querySelector("[data-header]");
const parallaxImage = document.querySelector("[data-parallax]");
const counters = document.querySelectorAll("[data-count]");
const filterButtons = document.querySelectorAll("[data-filter]");
const projectCards = document.querySelectorAll("[data-category]");
const stickyCanvas = document.querySelector("[data-sticky-canvas]");
const stickyNotes = document.querySelectorAll("[data-note-id]");
const languageButtons = document.querySelectorAll("[data-lang]");
const languageSwitcher = document.querySelector("[data-language-switcher]");
const contactForm = document.querySelector("[data-gmail-form]");
const supportedLanguages = new Set(["en", "pl"]);

const translations = {
  pl: {
    "Work": "Prace",
    "FareScout": "FareScout",
    "Skills": "Umiejętności",
    "GitHub": "GitHub",
    "Contact": "Kontakt",
    "Job-ready profile • moving portfolio hook • web & app creator": "Profil gotowy do rekrutacji • filmowy hook portfolio • twórca stron i aplikacji",
    "I build digital experiences with visual depth.": "Tworzę cyfrowe doświadczenia z wizualną głębią.",
    "Product Designer and front-end creator with architecture, 3D visualization, marketing and SAP UI5 experience. I build websites, app concepts and visual systems that make ideas understandable fast.": "Product Designer i front-end creator z doświadczeniem w architekturze, wizualizacji 3D, marketingu oraz SAP UI5. Buduję strony, koncepcje aplikacji i systemy wizualne, które szybko wyjaśniają pomysł.",
    "Explore selected work": "Zobacz wybrane prace",
    "See today’s app": "Zobacz dzisiejszą aplikację",
    "Available for teams": "Dostępny dla zespołów",
    "Website & app creator with 3D instincts": "Twórca stron i aplikacji z instynktem 3D",
    "From cinematic assets to clickable web products, with a strong eye for composition and conversion.": "Od filmowych assetów po klikalne produkty webowe, z mocnym wyczuciem kompozycji i konwersji.",
    "selected works shown": "pokazanych prac",
    "core disciplines": "główne obszary",
    "May 2026 app build": "aplikacja z maja 2026",
    "portfolio focus": "skupienie portfolio",
    "Profile": "Profil",
    "A creator who can make a product look real before it exists.": "Twórca, który potrafi sprawić, że produkt wygląda realnie, zanim powstanie.",
    "I started my career as a graphic designer, worked with marketing campaigns and developed a strong customer-facing mindset. My architecture education and 3D visualization work give me a rare visual foundation for web and app creation: I can shape both the interface and the story behind it.": "Zaczynałem jako grafik, pracowałem przy kampaniach marketingowych i zbudowałem mocne podejście do relacji z klientem. Wykształcenie architektoniczne i praca z wizualizacją 3D dają mi solidną bazę wizualną do tworzenia stron i aplikacji.",
    "3D visualization": "Wizualizacja 3D",
    "Landing pages": "Landing page",
    "App UI": "UI aplikacji",
    "Customer relations": "Relacje z klientem",
    "Portfolio direction": "Kierunek portfolio",
    "Built for a hiring manager’s first 90 seconds.": "Zaprojektowane pod pierwsze 90 sekund rekrutera.",
    "Selected work": "Wybrane prace",
    "Visual projects, websites and app-ready product thinking.": "Projekty wizualne, strony i myślenie gotowe pod aplikacje.",
    "All": "Wszystkie",
    "Websites": "Strony",
    "Apps": "Aplikacje",
    "3D / renders": "3D / rendery",
    "Brand": "Brand",
    "MILKE": "MILKE",
    "Pack shot visual": "Pack shot visual",
    "Part of a campaign pack shot system for MILKE.se, built to present the product in a polished residential context.": "Część systemu pack shotów kampanii MILKE.se, przygotowana do pokazania produktu w dopracowanym kontekście mieszkalnym.",
    "Creator skills": "Umiejętności twórcy",
    "The route from websites to apps.": "Ścieżka od stron do aplikacji.",
    "Code, experiments and app builds in one place.": "Kod, eksperymenty i aplikacje w jednym miejscu.",
    "Open GitHub": "Otwórz GitHub",
    "Interior visualization": "Wizualizacja wnętrza",
    "Premium residential scene": "Premium scena mieszkalna",
    "Lighting, mood and composition prepared for a high-end website hero or property presentation.": "Światło, nastrój i kompozycja przygotowane pod hero strony premium albo prezentację nieruchomości.",
    "Architecture product": "Produkt architektoniczny",
    "Hidden doors visual story": "Historia wizualna drzwi ukrytych",
    "Clean product-led render that can sell a design detail without extra explanation.": "Czysty render produktowy, który sprzedaje detal projektowy bez dodatkowego tłumaczenia.",
    "Commercial interiors": "Wnętrza komercyjne",
    "Brand banner system": "System banerów marki",
    "Website-ready horizontal artwork for a boutique and commercial interior presentation.": "Pozioma grafika gotowa na stronę dla butiku i prezentacji wnętrz komercyjnych.",
    "Industrial visual": "Wizual industrialny",
    "STOW warehouse campaign": "Kampania magazynowa STOW",
    "Large-scale industrial image treatment with strong contrast and campaign typography.": "Industrialna oprawa obrazu w dużej skali, z mocnym kontrastem i typografią kampanii.",
    "Seasonal brand visual": "Sezonowy wizual marki",
    "STOW winter campaign": "Zimowa kampania STOW",
    "Playful product-scale scene with snow, soft light and campaign mood for seasonal communication.": "Lekka scena produktowa ze śniegiem, miękkim światłem i nastrojem kampanii sezonowej.",
    "Process proof": "Dowód procesu",
    "From 3D scene to product visual": "Od sceny 3D do wizualu produktu",
    "Shows technical production skill, camera setup, lighting and complex asset organization.": "Pokazuje produkcję techniczną, ustawienie kamery, światło i organizację złożonych assetów.",
    "Cinematic render": "Render filmowy",
    "Industrial storytelling": "Industrialne storytelling",
    "A more emotional scene built for a brand narrative, launch page or trade presentation.": "Bardziej emocjonalna scena przygotowana pod narrację marki, launch page lub prezentację targową.",
    "Interior detail": "Detal wnętrza",
    "Bathroom product scene": "Scena produktowa łazienki",
    "Material control, reflections and clean product framing for lifestyle presentation.": "Kontrola materiałów, odbić i czyste kadrowanie produktu pod prezentację lifestyle.",
    "Office website visual": "Wizual na stronę biura",
    "Corporate lobby render": "Render lobby firmowego",
    "Minimal, bright and structured visual language for B2B or real estate pages.": "Minimalny, jasny i uporządkowany język wizualny dla stron B2B lub nieruchomości.",
    "Technical workflow": "Workflow techniczny",
    "Clay viewport documentation": "Dokumentacja clay viewport",
    "Behind-the-scenes proof that complex scenes are designed, not guessed.": "Dowód zza kulis, że złożone sceny są projektowane, a nie zgadywane.",
    "Clay interior study": "Clay study wnętrza",
    "Kitchen composition test": "Test kompozycji kuchni",
    "Monochrome lighting and layout study showing camera, proportions and spatial decision-making.": "Monochromatyczne studium światła i układu pokazujące kamerę, proporcje i decyzje przestrzenne.",
    "Bathroom visualization": "Wizualizacja łazienki",
    "Kamila bathroom scene": "Scena łazienki Kamila",
    "Detailed lighting, materials and atmosphere prepared as a strong portfolio-grade interior case.": "Dopracowane światło, materiały i atmosfera jako mocny case wnętrzarski do portfolio.",
    "Product clarity": "Czytelność produktu",
    "Door system showcase": "Prezentacja systemu drzwi",
    "Simple framing and clean negative space for an architecture product website.": "Prosty kadr i czysta przestrzeń negatywna pod stronę produktu architektonicznego.",
    "Night interior": "Wnętrze nocne",
    "Loft atmosphere scene": "Scena loftowa z atmosferą",
    "Warm lighting, city context and premium visual tone for lifestyle communication.": "Ciepłe światło, kontekst miasta i premium ton wizualny do komunikacji lifestyle.",
    "3D modeling": "Modelowanie 3D",
    "Storage product prototype": "Prototyp produktu storage",
    "Clay render showing model structure, component logic and presentation discipline.": "Clay render pokazujący strukturę modelu, logikę komponentów i dyscyplinę prezentacji.",
    "Experimental visual": "Wizual eksperymentalny",
    "Light concept poster": "Plakat koncepcyjny światła",
    "Graphic exploration of transparency, typography and contrast for an editorial or landing-page accent.": "Graficzne badanie transparentności, typografii i kontrastu jako akcent editorialowy lub landing page.",
    "Product detail render": "Detal produktu",
    "Coffee machine close-up": "Zbliżenie ekspresu",
    "Atmospheric macro-style product shot focused on material, reflections and premium brand feel.": "Atmosferyczne ujęcie produktowe w stylu macro, skupione na materiale, odbiciach i premium charakterze marki.",
    "Web atmosphere": "Atmosfera webowa",
    "Editorial banner asset": "Editorial banner asset",
    "Soft, cinematic website visual for a calm landing page, blog header or product mood section.": "Miękki, filmowy wizual webowy do spokojnego landing page’a, nagłówka bloga lub sekcji mood.",
    "Brief": "Brief",
    "Define the audience, the promise and what the employer or client must understand instantly.": "Określenie odbiorcy, obietnicy i tego, co pracodawca lub klient musi zrozumieć natychmiast.",
    "Visual system": "System wizualny",
    "Use 3D composition, image rhythm and typography to create a premium first impression.": "Wykorzystanie kompozycji 3D, rytmu obrazów i typografii do premium pierwszego wrażenia.",
    "Build": "Budowa",
    "Turn the idea into HTML, CSS and JavaScript with responsive layout and useful interactions.": "Przekładanie pomysłu na HTML, CSS i JavaScript z responsywnym layoutem i użytecznymi interakcjami.",
    "Ship": "Publikacja",
    "Package the story for GitHub, portfolio review, recruiters and the next real product iteration.": "Opakowanie historii pod GitHub, portfolio review, rekrutację i kolejny etap produktu.",
    "Website creator": "Twórca stron",
    "App creator": "Twórca aplikacji",
    "Visual producer": "Producent wizualny",
    "Front-end builds, app concepts and experiments.": "Front-end, koncepcje aplikacji i eksperymenty.",
    "Websites, apps, 3D visuals and product storytelling.": "Strony, aplikacje, wizualizacje 3D i storytelling produktu."
  },
  ru: {
    "Work": "Работы",
    "FareScout": "FareScout",
    "Skills": "Навыки",
    "GitHub": "GitHub",
    "Contact": "Контакт",
    "Job-ready profile • moving portfolio hook • web & app creator": "Профиль для найма • видео-хук портфолио • создатель сайтов и приложений",
    "I build digital experiences with visual depth.": "Я создаю цифровые продукты с визуальной глубиной.",
    "Product Designer and front-end creator with architecture, 3D visualization, marketing and SAP UI5 experience. I build websites, app concepts and visual systems that make ideas understandable fast.": "Product Designer и front-end creator с опытом в архитектуре, 3D-визуализации, маркетинге и SAP UI5. Я создаю сайты, концепции приложений и визуальные системы, которые быстро объясняют идею.",
    "Explore selected work": "Смотреть работы",
    "See today’s app": "Смотреть приложение",
    "Available for teams": "Открыт для команд",
    "Website & app creator with 3D instincts": "Создатель сайтов и приложений с 3D-инстинктом",
    "From cinematic assets to clickable web products, with a strong eye for composition and conversion.": "От кинематографичных материалов до кликабельных веб-продуктов, с вниманием к композиции и конверсии.",
    "selected works shown": "работ в подборке",
    "core disciplines": "ключевые области",
    "May 2026 app build": "сборка приложения, май 2026",
    "portfolio focus": "фокус портфолио",
    "Profile": "Профиль",
    "A creator who can make a product look real before it exists.": "Создатель, который умеет показать продукт реальным еще до его появления.",
    "3D visualization": "3D-визуализация",
    "Landing pages": "Лендинги",
    "App UI": "UI приложений",
    "Customer relations": "Работа с клиентами",
    "Portfolio direction": "Направление портфолио",
    "Built for a hiring manager’s first 90 seconds.": "Сделано для первых 90 секунд внимания рекрутера.",
    "Selected work": "Выбранные работы",
    "Visual projects, websites and app-ready product thinking.": "Визуальные проекты, сайты и продуктовая логика для приложений.",
    "All": "Все",
    "Websites": "Сайты",
    "Apps": "Приложения",
    "3D / renders": "3D / рендеры",
    "Brand": "Бренд",
    "MILKE": "MILKE",
    "Pack shot visual": "Pack shot visual",
    "Part of a campaign pack shot system for MILKE.se, built to present the product in a polished residential context.": "Часть системы pack shot для кампании MILKE.se, созданная для презентации продукта в продуманном жилом контексте.",
    "Creator skills": "Навыки создателя",
    "The route from websites to apps.": "Путь от сайтов к приложениям.",
    "Code, experiments and app builds in one place.": "Код, эксперименты и сборки приложений в одном месте.",
    "Open GitHub": "Открыть GitHub",
    "Interior visualization": "Визуализация интерьера",
    "Premium residential scene": "Премиальная жилая сцена",
    "Lighting, mood and composition prepared for a high-end website hero or property presentation.": "Свет, настроение и композиция для премиального hero-блока или презентации недвижимости.",
    "Architecture product": "Архитектурный продукт",
    "Hidden doors visual story": "Визуальная история скрытых дверей",
    "Clean product-led render that can sell a design detail without extra explanation.": "Чистый продуктовый рендер, который продает деталь дизайна без лишних объяснений.",
    "Commercial interiors": "Коммерческие интерьеры",
    "Brand banner system": "Система баннеров бренда",
    "Website-ready horizontal artwork for a boutique and commercial interior presentation.": "Горизонтальный визуал для сайта бутика и презентации коммерческих интерьеров.",
    "Industrial visual": "Индустриальный визуал",
    "STOW warehouse campaign": "Складская кампания STOW",
    "Large-scale industrial image treatment with strong contrast and campaign typography.": "Индустриальная обработка изображения с сильным контрастом и типографикой кампании.",
    "Process proof": "Подтверждение процесса",
    "From 3D scene to product visual": "От 3D-сцены к продуктовому визуалу",
    "Shows technical production skill, camera setup, lighting and complex asset organization.": "Показывает техническую работу, постановку камеры, свет и организацию сложных ассетов.",
    "Cinematic render": "Кинематографичный рендер",
    "Industrial storytelling": "Индустриальный сторителлинг",
    "A more emotional scene built for a brand narrative, launch page or trade presentation.": "Более эмоциональная сцена для истории бренда, launch page или выставочной презентации.",
    "Interior detail": "Деталь интерьера",
    "Bathroom product scene": "Продуктовая сцена ванной",
    "Material control, reflections and clean product framing for lifestyle presentation.": "Контроль материалов, отражений и чистый кадр продукта для lifestyle-презентации.",
    "Office website visual": "Визуал для сайта офиса",
    "Corporate lobby render": "Рендер корпоративного лобби",
    "Minimal, bright and structured visual language for B2B or real estate pages.": "Минимальный, светлый и структурный визуальный язык для B2B или недвижимости.",
    "Technical workflow": "Технический workflow",
    "Clay viewport documentation": "Документация clay viewport",
    "Behind-the-scenes proof that complex scenes are designed, not guessed.": "Закулисное подтверждение, что сложные сцены проектируются, а не угадываются.",
    "Bathroom visualization": "Визуализация ванной",
    "Kamila bathroom scene": "Сцена ванной Kamila",
    "Detailed lighting, materials and atmosphere prepared as a strong portfolio-grade interior case.": "Проработанный свет, материалы и атмосфера для сильного интерьерного кейса.",
    "Product clarity": "Ясность продукта",
    "Door system showcase": "Презентация системы дверей",
    "Simple framing and clean negative space for an architecture product website.": "Простой кадр и чистое негативное пространство для сайта архитектурного продукта.",
    "Night interior": "Ночной интерьер",
    "Loft atmosphere scene": "Атмосферная loft-сцена",
    "Warm lighting, city context and premium visual tone for lifestyle communication.": "Теплый свет, городской контекст и премиальный тон для lifestyle-коммуникации.",
    "3D modeling": "3D-моделирование",
    "Storage product prototype": "Прототип storage-продукта",
    "Clay render showing model structure, component logic and presentation discipline.": "Clay-рендер, показывающий структуру модели, логику компонентов и дисциплину презентации.",
    "Web atmosphere": "Веб-атмосфера",
    "Editorial banner asset": "Editorial banner asset",
    "Soft, cinematic website visual for a calm landing page, blog header or product mood section.": "Мягкий кинематографичный визуал для лендинга, blog header или mood-секции.",
    "Brief": "Бриф",
    "Define the audience, the promise and what the employer or client must understand instantly.": "Определить аудиторию, обещание и то, что работодатель или клиент должен понять сразу.",
    "Visual system": "Визуальная система",
    "Use 3D composition, image rhythm and typography to create a premium first impression.": "Использовать 3D-композицию, ритм изображений и типографику для премиального первого впечатления.",
    "Build": "Сборка",
    "Turn the idea into HTML, CSS and JavaScript with responsive layout and useful interactions.": "Превратить идею в HTML, CSS и JavaScript с адаптивным layout и полезными взаимодействиями.",
    "Ship": "Публикация",
    "Package the story for GitHub, portfolio review, recruiters and the next real product iteration.": "Упаковать историю для GitHub, просмотра портфолио, рекрутеров и следующей итерации продукта.",
    "Website creator": "Создатель сайтов",
    "App creator": "Создатель приложений",
    "Visual producer": "Визуальный продюсер",
    "Front-end builds, app concepts and experiments.": "Front-end сборки, концепции приложений и эксперименты.",
    "Websites, apps, 3D visuals and product storytelling.": "Сайты, приложения, 3D-визуалы и продуктовый сторителлинг."
  },
  de: {
    "Work": "Arbeiten",
    "FareScout": "FareScout",
    "Skills": "Skills",
    "GitHub": "GitHub",
    "Contact": "Kontakt",
    "Job-ready profile • moving portfolio hook • web & app creator": "Bewerbungsbereites Profil • bewegter Portfolio-Hook • Web- & App-Creator",
    "I build digital experiences with visual depth.": "Ich entwickle digitale Erlebnisse mit visueller Tiefe.",
    "Product Designer and front-end creator with architecture, 3D visualization, marketing and SAP UI5 experience. I build websites, app concepts and visual systems that make ideas understandable fast.": "Product Designer und Front-end Creator mit Erfahrung in Architektur, 3D-Visualisierung, Marketing und SAP UI5. Ich baue Websites, App-Konzepte und visuelle Systeme, die Ideen schnell verständlich machen.",
    "Explore selected work": "Ausgewählte Arbeiten",
    "See today’s app": "Heutige App ansehen",
    "Available for teams": "Verfügbar für Teams",
    "Website & app creator with 3D instincts": "Website- und App-Creator mit 3D-Instinkt",
    "From cinematic assets to clickable web products, with a strong eye for composition and conversion.": "Von filmischen Assets bis zu klickbaren Webprodukten, mit starkem Blick für Komposition und Conversion.",
    "selected works shown": "gezeigte Arbeiten",
    "core disciplines": "Kernbereiche",
    "May 2026 app build": "App-Build Mai 2026",
    "portfolio focus": "Portfolio-Fokus",
    "Profile": "Profil",
    "A creator who can make a product look real before it exists.": "Ein Creator, der ein Produkt real wirken lässt, bevor es existiert.",
    "3D visualization": "3D-Visualisierung",
    "Landing pages": "Landingpages",
    "App UI": "App UI",
    "Customer relations": "Kundenbeziehungen",
    "Portfolio direction": "Portfolio-Richtung",
    "Built for a hiring manager’s first 90 seconds.": "Gebaut für die ersten 90 Sekunden eines Hiring Managers.",
    "Selected work": "Ausgewählte Arbeiten",
    "Visual projects, websites and app-ready product thinking.": "Visuelle Projekte, Websites und app-reifes Produktdenken.",
    "All": "Alle",
    "Websites": "Websites",
    "Apps": "Apps",
    "3D / renders": "3D / Renderings",
    "Brand": "Marke",
    "MILKE": "MILKE",
    "Pack shot visual": "Packshot-Visual",
    "Part of a campaign pack shot system for MILKE.se, built to present the product in a polished residential context.": "Teil eines Packshot-Systems für die MILKE.se-Kampagne, entwickelt zur Präsentation des Produkts in einem hochwertigen Wohnkontext.",
    "Creator skills": "Creator-Skills",
    "The route from websites to apps.": "Der Weg von Websites zu Apps.",
    "Code, experiments and app builds in one place.": "Code, Experimente und App-Builds an einem Ort.",
    "Open GitHub": "GitHub öffnen",
    "Interior visualization": "Interior-Visualisierung",
    "Premium residential scene": "Premium-Wohnszene",
    "Lighting, mood and composition prepared for a high-end website hero or property presentation.": "Licht, Stimmung und Komposition für einen hochwertigen Website-Hero oder eine Immobilienpräsentation.",
    "Architecture product": "Architekturprodukt",
    "Hidden doors visual story": "Visual Story für versteckte Türen",
    "Clean product-led render that can sell a design detail without extra explanation.": "Klares produktorientiertes Rendering, das ein Designdetail ohne zusätzliche Erklärung verkauft.",
    "Commercial interiors": "Gewerbliche Innenräume",
    "Brand banner system": "Banner-System der Marke",
    "Website-ready horizontal artwork for a boutique and commercial interior presentation.": "Website-fertiges horizontales Artwork für Boutique- und Commercial-Interior-Präsentationen.",
    "Industrial visual": "Industrial Visual",
    "STOW warehouse campaign": "STOW Warehouse-Kampagne",
    "Large-scale industrial image treatment with strong contrast and campaign typography.": "Industrielle Bildsprache im großen Maßstab mit starkem Kontrast und Kampagnen-Typografie.",
    "Process proof": "Prozessnachweis",
    "From 3D scene to product visual": "Von der 3D-Szene zum Produktvisual",
    "Shows technical production skill, camera setup, lighting and complex asset organization.": "Zeigt technische Produktion, Kamerasetup, Licht und Organisation komplexer Assets.",
    "Cinematic render": "Cinematic Render",
    "Industrial storytelling": "Industrielles Storytelling",
    "A more emotional scene built for a brand narrative, launch page or trade presentation.": "Eine emotionalere Szene für Markennarrativ, Launchpage oder Messepräsentation.",
    "Interior detail": "Interior-Detail",
    "Bathroom product scene": "Bad-Produktszene",
    "Material control, reflections and clean product framing for lifestyle presentation.": "Materialkontrolle, Reflexionen und sauberes Produkt-Framing für Lifestyle-Präsentation.",
    "Office website visual": "Office Website Visual",
    "Corporate lobby render": "Corporate-Lobby-Rendering",
    "Minimal, bright and structured visual language for B2B or real estate pages.": "Minimale, helle und strukturierte Bildsprache für B2B- oder Immobilienseiten.",
    "Technical workflow": "Technischer Workflow",
    "Clay viewport documentation": "Clay-Viewport-Dokumentation",
    "Behind-the-scenes proof that complex scenes are designed, not guessed.": "Behind-the-scenes Beweis, dass komplexe Szenen gestaltet und nicht geraten werden.",
    "Bathroom visualization": "Bad-Visualisierung",
    "Kamila bathroom scene": "Kamila Bad-Szene",
    "Detailed lighting, materials and atmosphere prepared as a strong portfolio-grade interior case.": "Detailliertes Licht, Materialien und Atmosphäre als starker Interior-Case für das Portfolio.",
    "Product clarity": "Produktklarheit",
    "Door system showcase": "Türsystem-Showcase",
    "Simple framing and clean negative space for an architecture product website.": "Einfaches Framing und klare Negativfläche für eine Architekturprodukt-Website.",
    "Night interior": "Nachtinterieur",
    "Loft atmosphere scene": "Loft-Atmosphären-Szene",
    "Warm lighting, city context and premium visual tone for lifestyle communication.": "Warmes Licht, Stadtkontext und Premium-Bildton für Lifestyle-Kommunikation.",
    "3D modeling": "3D-Modellierung",
    "Storage product prototype": "Storage-Produktprototyp",
    "Clay render showing model structure, component logic and presentation discipline.": "Clay-Rendering mit Modellstruktur, Komponentenlogik und Präsentationsdisziplin.",
    "Web atmosphere": "Web-Atmosphäre",
    "Editorial banner asset": "Editorial Banner Asset",
    "Soft, cinematic website visual for a calm landing page, blog header or product mood section.": "Weiches, cineastisches Website-Visual für Landingpage, Blog-Header oder Mood-Sektion.",
    "Brief": "Briefing",
    "Define the audience, the promise and what the employer or client must understand instantly.": "Zielgruppe, Versprechen und das sofort verständliche Signal für Arbeitgeber oder Kunden definieren.",
    "Visual system": "Visuelles System",
    "Use 3D composition, image rhythm and typography to create a premium first impression.": "3D-Komposition, Bildrhythmus und Typografie für einen hochwertigen ersten Eindruck nutzen.",
    "Build": "Build",
    "Turn the idea into HTML, CSS and JavaScript with responsive layout and useful interactions.": "Die Idee in HTML, CSS und JavaScript mit responsivem Layout und nützlichen Interaktionen umsetzen.",
    "Ship": "Veröffentlichen",
    "Package the story for GitHub, portfolio review, recruiters and the next real product iteration.": "Die Story für GitHub, Portfolio-Review, Recruiter und die nächste Produktiteration verpacken.",
    "Website creator": "Website-Creator",
    "App creator": "App-Creator",
    "Visual producer": "Visual Producer",
    "Front-end builds, app concepts and experiments.": "Front-end Builds, App-Konzepte und Experimente.",
    "Websites, apps, 3D visuals and product storytelling.": "Websites, Apps, 3D-Visuals und Produkt-Storytelling."
  }
};

Object.assign(translations.pl, {
  "Next step": "Następny krok",
  "A portfolio that can go straight into applications.": "Portfolio gotowe do wysyłania aplikacji.",
  "Interested in cooperation, a job offer or a project? Send the message here and it will be prepared directly to my email address.": "Interesuje Cię współpraca, oferta pracy albo projekt? Wyślij wiadomość tutaj, a zostanie przygotowana bezpośrednio na mój adres email.",
  "Name": "Imię i nazwisko",
  "Email": "Email",
  "Company / role": "Firma / rola",
  "Type of message": "Typ wiadomości",
  "Job offer": "Oferta pracy",
  "Project inquiry": "Zapytanie projektowe",
  "Collaboration": "Współpraca",
  "Other": "Inne",
  "Message": "Wiadomość",
  "Sending opens Gmail with a prepared message addressed to desmilke@gmail.com.": "Wysyłka otworzy Gmaila z przygotowaną wiadomością zaadresowaną do desmilke@gmail.com.",
  "Send inquiry": "Wyślij zapytanie"
});

Object.assign(translations.ru, {
  "Next step": "Следующий шаг",
  "A portfolio that can go straight into applications.": "Портфолио, которое можно сразу отправлять в откликах.",
  "Interested in cooperation, a job offer or a project? Send the message here and it will be prepared directly to my email address.": "Интересует сотрудничество, вакансия или проект? Отправьте сообщение здесь, и оно будет подготовлено прямо на мой email.",
  "Name": "Имя",
  "Email": "Email",
  "Company / role": "Компания / роль",
  "Type of message": "Тип сообщения",
  "Job offer": "Предложение работы",
  "Project inquiry": "Запрос проекта",
  "Collaboration": "Сотрудничество",
  "Other": "Другое",
  "Message": "Сообщение",
  "Sending opens your email app with the message addressed to desmilke@gmail.com.": "Отправка откроет почтовое приложение с письмом на desmilke@gmail.com.",
  "Send inquiry": "Отправить запрос"
});

Object.assign(translations.de, {
  "Next step": "Nächster Schritt",
  "A portfolio that can go straight into applications.": "Ein Portfolio, das direkt in Bewerbungen eingesetzt werden kann.",
  "Interested in cooperation, a job offer or a project? Send the message here and it will be prepared directly to my email address.": "Interessiert an Zusammenarbeit, Jobangebot oder Projekt? Senden Sie hier eine Nachricht, sie wird direkt an meine E-Mail-Adresse vorbereitet.",
  "Name": "Name",
  "Email": "E-Mail",
  "Company / role": "Firma / Rolle",
  "Type of message": "Art der Nachricht",
  "Job offer": "Jobangebot",
  "Project inquiry": "Projektanfrage",
  "Collaboration": "Zusammenarbeit",
  "Other": "Andere",
  "Message": "Nachricht",
  "Sending opens your email app with the message addressed to desmilke@gmail.com.": "Beim Senden öffnet sich Ihre E-Mail-App mit einer Nachricht an desmilke@gmail.com.",
  "Send inquiry": "Anfrage senden"
});

const translatableSelector = [
  "a",
  "button",
  "h1",
  "h2",
  "h3",
  "label",
  "option",
  "p",
  "span",
  "strong",
  "small"
].join(",");

const translatableElements = Array.from(document.querySelectorAll(translatableSelector)).filter((element) => {
  if (element.closest(".language-switcher")) return false;
  return element.children.length === 0 && element.textContent.trim().length > 0;
});

const normalizeText = (value) => value.replace(/\s+/g, " ").trim();

translatableElements.forEach((element) => {
  element.dataset.i18nSource = normalizeText(element.textContent);
});

const setLanguage = (language) => {
  const activeLanguage = supportedLanguages.has(language) ? language : "en";
  const dictionary = translations[activeLanguage] || {};

  document.documentElement.lang = activeLanguage;

  translatableElements.forEach((element) => {
    const source = element.dataset.i18nSource;
    element.textContent = activeLanguage === "en" ? source : dictionary[source] || source;
  });

  languageButtons.forEach((button) => {
    const isActive = button.dataset.lang === activeLanguage;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  localStorage.setItem("portfolio-language", activeLanguage);
};

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const isActive = button.classList.contains("is-active");

    if (isActive && !languageSwitcher.classList.contains("is-open")) {
      languageSwitcher.classList.add("is-open");
      return;
    }

    setLanguage(button.dataset.lang);
    languageSwitcher.classList.remove("is-open");
  });
});

setLanguage(localStorage.getItem("portfolio-language") || "en");

document.addEventListener("click", (event) => {
  if (!languageSwitcher || languageSwitcher.contains(event.target)) return;
  languageSwitcher.classList.remove("is-open");
});

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!contactForm.checkValidity()) {
      contactForm.reportValidity();
      return;
    }

    const formData = new FormData(contactForm);
    const name = formData.get("Name") || "";
    const email = formData.get("Email") || "";
    const company = formData.get("Company or role") || "";
    const type = formData.get("Type of message") || "Portfolio inquiry";
    const message = formData.get("Message") || "";
    const subject = `Portfolio inquiry: ${type} from ${name}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Company / role: ${company || "-"}`,
      `Type of message: ${type}`,
      "",
      "Message:",
      message
    ].join("\n");
    const gmailUrl = new URL("https://mail.google.com/mail/");

    gmailUrl.searchParams.set("view", "cm");
    gmailUrl.searchParams.set("fs", "1");
    gmailUrl.searchParams.set("to", "desmilke@gmail.com");
    gmailUrl.searchParams.set("su", subject);
    gmailUrl.searchParams.set("body", body);

    const gmailWindow = window.open(gmailUrl.toString(), "_blank", "noopener");

    if (!gmailWindow) {
      window.location.href = gmailUrl.toString();
    }
  });
}

const updateHeader = () => {
  if (!header) return;
  header.classList.toggle("is-scrolled", window.scrollY > 24);
};

const updateParallax = () => {
  if (!parallaxImage || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const shift = Math.min(window.scrollY * 0.08, 34);
  parallaxImage.style.transform = `scale(1.02) translateY(${shift}px)`;
};

const heroVideo = document.querySelector(".hero-video");

if (heroVideo) {
  heroVideo.muted = true;
  heroVideo.loop = true;
  heroVideo.setAttribute("playsinline", "");
  heroVideo.play().catch(() => {
    heroVideo.controls = false;
  });
}

const animateCounter = (counter) => {
  const target = Number(counter.dataset.count);
  const duration = 1100;
  const start = performance.now();

  const tick = (now) => {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    counter.textContent = Math.round(target * eased);

    if (progress < 1) requestAnimationFrame(tick);
  };

  requestAnimationFrame(tick);
};

const counterObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      animateCounter(entry.target);
      observer.unobserve(entry.target);
    });
  },
  { threshold: 0.45 }
);

counters.forEach((counter) => counterObserver.observe(counter));

const applyWorkFilter = (filter, activeButton) => {
  filterButtons.forEach((item) => {
    const isActive = item === activeButton;
    item.classList.toggle("is-active", isActive);
    item.setAttribute("aria-pressed", String(isActive));
  });

  projectCards.forEach((card) => {
    const categories = card.dataset.category.split(" ");
    const isVisible = filter === "all" || categories.includes(filter);
    card.classList.toggle("is-hidden", !isVisible);
  });
};

filterButtons.forEach((button) => {
  button.addEventListener("click", () => applyWorkFilter(button.dataset.filter, button));
});

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

const saveNotePosition = (note, x, y) => {
  localStorage.setItem(`portfolio-note-${note.dataset.noteId}`, JSON.stringify({ x, y }));
};

const setNotePosition = (note, x, y) => {
  note.style.left = `${x}px`;
  note.style.top = `${y}px`;
};

const restoreNotePositions = () => {
  if (!stickyCanvas) return;
  const canvasRect = stickyCanvas.getBoundingClientRect();

  stickyNotes.forEach((note) => {
    const stored = localStorage.getItem(`portfolio-note-${note.dataset.noteId}`);
    if (!stored) return;

    try {
      const { x, y } = JSON.parse(stored);
      const maxX = canvasRect.width - note.offsetWidth;
      const maxY = canvasRect.height - note.offsetHeight;
      setNotePosition(note, clamp(x, 0, maxX), clamp(y, 0, maxY));
    } catch {
      localStorage.removeItem(`portfolio-note-${note.dataset.noteId}`);
    }
  });
};

const enableStickyNotes = () => {
  if (!stickyCanvas) return;

  stickyNotes.forEach((note) => {
    note.addEventListener("pointerdown", (event) => {
      if (event.button !== 0) return;

      const canvasRect = stickyCanvas.getBoundingClientRect();
      const noteRect = note.getBoundingClientRect();
      const offsetX = event.clientX - noteRect.left;
      const offsetY = event.clientY - noteRect.top;

      note.classList.add("is-dragging");
      note.setPointerCapture(event.pointerId);

      const moveNote = (moveEvent) => {
        const maxX = canvasRect.width - note.offsetWidth;
        const maxY = canvasRect.height - note.offsetHeight;
        const x = clamp(moveEvent.clientX - canvasRect.left - offsetX, 0, maxX);
        const y = clamp(moveEvent.clientY - canvasRect.top - offsetY, 0, maxY);

        setNotePosition(note, x, y);
      };

      const dropNote = () => {
        note.classList.remove("is-dragging");
        saveNotePosition(note, note.offsetLeft, note.offsetTop);
        note.removeEventListener("pointermove", moveNote);
        note.removeEventListener("pointerup", dropNote);
        note.removeEventListener("pointercancel", dropNote);
      };

      note.addEventListener("pointermove", moveNote);
      note.addEventListener("pointerup", dropNote);
      note.addEventListener("pointercancel", dropNote);
    });
  });
};

window.addEventListener("scroll", () => {
  updateHeader();
  updateParallax();
});

window.addEventListener("resize", restoreNotePositions);

updateHeader();
updateParallax();
restoreNotePositions();
enableStickyNotes();
