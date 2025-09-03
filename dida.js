// Language data
const translations = {
    de: {
        // Navigation
        navSummary: "Zusammenfassung",
        navSkills: "Kenntnisse",
        navPortfolio: "Portfolio",
        navEducation: "Ausbildung",
        navExperience: "Berufserfahrung",
        navLanguages: "Sprachen",
        
        // Hero section
        heroName: "Dida Fajrin",
        heroTitle: "IT Professional & International Education Consultant",
        heroPortfolioBtn: "Mein Portfolio",
        heroExperienceBtn: "Meine Erfahrung",
        heroContactBtn: "Kontakt Aufnehmen",
        
        // Summary section
        summaryTitle: "Über mich",
        summaryText: "Führungserfahrene und lösungsorientierte Persönlichkeit mit nachgewiesener Erfahrung, insbesondere in der Optimierung von Prozessen und der Führung von Teams. Akademischer Hintergrund in den Naturwissenschaften und fundierte Kenntnisse in der Datenanalyse, insbesondere in der Analyse und Automatisierung großer Datensätze, ermöglichen eine analytische Herangehensweise an operative und strategische Herausforderungen. Besitzt fundierte Kenntnisse in Python sowie Erfahrung in der Erstellung von Berichten zur Entscheidungsunterstützung. Ausgeprägtes unternehmerisches Denken, Kundenorientierung und die Fähigkeit, operative und strategische Ziele aufeinander abzustimmen, zeichnen mich aus. Teamfähigkeit, ausgeprägte Kommunikationsfähigkeiten und die Fähigkeit zur abteilungsübergreifenden Koordination sind für mich selbstverständlich. Spricht sehr gut Deutsch und fließend Englisch, interkulturelle Kompetenz rundet mein Profil ab.",
        
        // Skills section
        skillsTitle: "Kenntnisse",
        skillPython: "Python (Data Science, Analyse, Automatisierung)",
        skillOffice: "MS Office",
        skillAI: "KI & Maschinelles Lernen",
        skillDataAnalysis: "Datenanalyse & Visualisierung",
        skillDashboard: "Dashboard & Reporting",
        skillAnalytical: "Analytisches Denken",
        skillLearning: "Lernbereitschaft",
        skillHTML: "HTML",
        skillCSS: "CSS",
        skillJS: "JavaScript",
        
        // Portfolio section
        portfolioTitle: "Portfolio",
        slide1Title: "Data Analysis Dashboard",
        slide1Desc: "Ein interaktives Dashboard zur Visualisierung von Geschäftsdaten und Leistungskennzahlen.",
        slide2Title: "Predictive Forecasting System",
        slide2Desc: "Machine-Learning-Modell zur Vorhersage von Lagerbedarf für Automobilteile.",
        slide3Title: "Business Intelligence Lösung",
        slide3Desc: "Eine umfassende BI-Plattform für datengestützte Entscheidungsfindung.",
        slideLearnMore: "Mehr Erfahren",
        filterAll: "Alle",
        filterDataAnalysis: "Datenanalyse",
        filterForecasting: "Prognose",
        filterAutomation: "Automatisierung",
        filterConsulting: "Beratung",
        portfolio1Title: "Data Analysis Dashboard",
        portfolio1Desc: "Ein interaktives Dashboard zur Visualisierung von Geschäftsdaten und Leistungskennzahlen.",
        portfolio2Title: "Predictive Forecasting System",
        portfolio2Desc: "Machine-Learning-Modell zur Vorhersage von Lagerbedarf für Automobilteile.",
        portfolio3Title: "Prozessautomatisierung",
        portfolio3Desc: "Automatisierung von Berichterstellung und Datenaufbereitung für logistische Prozesse.",
        portfolio4Title: "Business Intelligence Lösung",
        portfolio4Desc: "Eine umfassende BI-Plattform für datengestützte Entscheidungsfindung.",
        portfolio5Title: "Windenergie-Potenzialanalyse",
        portfolio5Desc: "Datenanalyse und Modellierung für Windenergieprojekte in Indonesien.",
        portfolio6Title: "Bildungsberatung International",
        portfolio6Desc: "Beratung für internationale Studierende im Bereich Data Science und Technologie.",
        
        // Education section
        educationTitle: "Ausbildung",
        education1Title: "Bachelor in Meteorologie",
        education1Date: "Institut Teknologi Bandung, Indonesien, [2009-2014]",
        education2Title: "Austauschsemester",
        education2Date: "Nagoya Universität, Japan, [2013]",
        education3Title: "Master in Klimawissenschaften",
        education3Date: "Universität Hamburg, [2015 - 2018]",
        education4Title: "Udemy Kurse",
        education4Course1: "The Business Intelligence Analyst Course [2023]",
        education4Course2: "Python for Data Science, Machine Learning & Visualization [2023]",
        
        // Languages section
        languagesTitle: "Sprachen",
        languageGerman: "Deutsch: Sehr gut",
        languageEnglish: "Englisch: Fließend",
        languageJapanese: "Japanisch: Fortgeschritten",
        languageIndonesian: "Bahasa Indonesia: Muttersprache",
        languagePolish: "Polnisch: Grundkenntnisse",
        
        // Experience section
        experienceTitle: "Berufserfahrung",
        experience1Title: "Konsultant Pendidikan dan Karir Internasional",
        experience1Date: "[Februar 2025 - Gegenwart]",
        experience1Item1: "Beratung von Studierenden und Berufstätigen zu internationalen Bildungs- und Karrieremöglichkeiten",
        experience1Item2: "Entwicklung individueller Karrierepläne für internationale Positionen in den Bereichen Data Science und Technologie",
        experience1Item3: "Unterstützung bei der Bewerbung für internationale Studienprogramme und Stipendien",
        experience1Item4: "Vermittlung von interkulturellen Kompetenzen für globale Arbeitsumgebungen",
        experience1Item5: "Coaching für internationale Vorstellungsgespräche und Karriereentwicklung",
        experience1Item6: "Zusammenarbeit mit Bildungseinrichtungen und Unternehmen zur Förderung internationaler Bildungskooperationen",
        experience2Title: "Operational Forecast Manager bei TST Logistic",
        experience2Date: "[Oktober 2023 - November 2024]",
        experience2Item1: "Entwicklung und Implementierung von Prognosemodellen für den Bedarf an Mercedes-Benz Ersatzteilen zur Optimierung der Lagerbestände",
        experience2Item2: "Analyse historischer Verkaufsdaten, Saisonalität und Markttrends zur präzisen Bedarfsvorhersage",
        experience2Item3: "Zusammenarbeit mit der Supply-Chain-Abteilung zur Sicherstellung der rechtzeitigen Verfügbarkeit kritischer Ersatzteile",
        experience2Item4: "Entwicklung datengestützter Strategien zur Reduzierung von Lagerbeständen bei gleichzeitiger Verbesserung der Lieferfähigkeit",
        experience2Item5: "Erstellung von Forecast-Dashboards und Berichten für das Management zur Unterstützung strategischer Entscheidungen",
        experience2Item6: "Implementierung von Machine-Learning-Modellen zur Verbesserung der Prognosegenauigkeit für Ersatzteile",
        experience3Title: "Business Development in datengestützter Solar- und Windenergieprognose",
        experience3Date: "[2020 - 2023]",
        experience3Item1: "Leitung des Teams zur Entwicklung datengestützter Prognosen für das Solar- und Windenergiepotenzial.",
        experience3Item2: "Analyse großer Datensätze zur Identifizierung von Geschäftsmöglichkeiten und Bereitstellung von Informationen für Stakeholder.",
        experience3Item3: "Erstellung von Berichten und Präsentationen zur Kommunikation von Prognosen und deren Auswirkungen auf die Geschäftsstrategie.",
        experience3Item4: "Entwicklung datengestützter Lösungen zur Unterstützung von Geschäftsentscheidungen.",
        experience4Title: "Projektmanager in der Windenergie-Potenzialanalyse",
        experience4Date: "[2018 - 2020]",
        experience4Item1: "Leitung eines Teams zur Analyse des Windenergiepotenzials in Sulawesi, Indonesien.",
        experience4Item2: "Planung und Durchführung von Datenerhebung, -vorverarbeitung und -analyse.",
        experience4Item3: "Entwicklung von Datenmodellen zur Bewertung des Windenergiepotenzials.",
        experience4Item4: "Erstellung von Berichten und Präsentationen für den Kunden, einschließlich Visualisierung der Analyseergebnisse.",
        experience4Item5: "Kommunikation und Koordination mit internen und externen Partnern über verschiedene Abteilungen hinweg.",
        experience5Title: "Wissenschaftliche Hilfskraft",
        experience5Date: "[2014 - 2018]",
        experience5Item1: "Entwicklung und Implementierung von Datenanalysemethoden zur Auswertung umfangreicher meteorologischer Datensätze.",
        experience5Item2: "Anwendung von Python und Matlab für Datenanalyse, statistische Modellierung und Visualisierung von Ergebnissen.",
        experience5Item3: "Entwicklung automatisierter Datenverarbeitungsworkflows zur Steigerung der Forschungseffizienz.",
        experience5Item4: "Erstellung von Berichten und Präsentationen zur Kommunikation von Forschungsergebnissen an interne und externe Stakeholder.",
        experience5Item5: "Enge Zusammenarbeit mit interdisziplinären Teams zur Erreichung gemeinsamer Forschungsziele.",
        
        // Contact section
        contactTitle: "Kontakt",
        contactText: "Interessiert an einer Zusammenarbeit? Kontaktieren Sie mich für Beratungsdienstleistungen im IT-Bereich oder im internationalen Bildungssektor.",
        contactBtn: "E-Mail Senden",
        
        // Footer
        footerText: "&copy; 2025 Dida Fajrin | IT Professional & Education Consultant"
    },
    en: {
        // Navigation
        navSummary: "Summary",
        navSkills: "Skills",
        navPortfolio: "Portfolio",
        navEducation: "Education",
        navExperience: "Experience",
        navLanguages: "Languages",
        
        // Hero section
        heroName: "Dida Fajrin",
        heroTitle: "IT Professional & International Education Consultant",
        heroPortfolioBtn: "My Portfolio",
        heroExperienceBtn: "My Experience",
        heroContactBtn: "Contact Me",
        
        // Summary section
        summaryTitle: "About me",
        summaryText: "Leadership-experienced and solution-oriented personality with proven experience, particularly in process optimization and team leadership. Academic background in natural sciences and solid knowledge in data analysis, especially in the analysis and automation of large datasets, enable an analytical approach to operational and strategic challenges. Possesses solid knowledge in Python as well as experience in creating decision support reports. Strong entrepreneurial thinking, customer orientation and the ability to align operational and strategic goals distinguish me. Teamwork, strong communication skills and the ability to coordinate across departments are a matter of course for me. Speaks very good German and fluent English, intercultural competence rounds off my profile.",
        
        // Skills section
        skillsTitle: "Skills",
        skillPython: "Python (Data Science, Analysis, Automation)",
        skillOffice: "MS Office",
        skillAI: "AI & Machine Learning",
        skillDataAnalysis: "Data Analysis & Visualization",
        skillDashboard: "Dashboard & Reporting",
        skillAnalytical: "Analytical Thinking",
        skillLearning: "Willingness to Learn",
        skillHTML: "HTML",
        skillCSS: "CSS",
        skillJS: "JavaScript",
        
        // Portfolio section
        portfolioTitle: "Portfolio",
        slide1Title: "Data Analysis Dashboard",
        slide1Desc: "An interactive dashboard for visualizing business data and performance metrics.",
        slide2Title: "Predictive Forecasting System",
        slide2Desc: "Machine learning model for predicting inventory needs for automotive parts.",
        slide3Title: "Business Intelligence Solution",
        slide3Desc: "A comprehensive BI platform for data-driven decision making.",
        slideLearnMore: "Learn More",
        filterAll: "All",
        filterDataAnalysis: "Data Analysis",
        filterForecasting: "Forecasting",
        filterAutomation: "Automation",
        filterConsulting: "Consulting",
        portfolio1Title: "Data Analysis Dashboard",
        portfolio1Desc: "An interactive dashboard for visualizing business data and performance metrics.",
        portfolio2Title: "Predictive Forecasting System",
        portfolio2Desc: "Machine learning model for predicting inventory needs for automotive parts.",
        portfolio3Title: "Process Automation",
        portfolio3Desc: "Automation of reporting and data preparation for logistics processes.",
        portfolio4Title: "Business Intelligence Solution",
        portfolio4Desc: "A comprehensive BI platform for data-driven decision making.",
        portfolio5Title: "Wind Energy Potential Analysis",
        portfolio5Desc: "Data analysis and modeling for wind energy projects in Indonesia.",
        portfolio6Title: "International Education Consulting",
        portfolio6Desc: "Consulting for international students in the field of Data Science and Technology.",
        
        // Education section
        educationTitle: "Education",
        education1Title: "Bachelor in Meteorology",
        education1Date: "Institut Teknologi Bandung, Indonesia, [2009-2014]",
        education2Title: "Exchange Semester",
        education2Date: "Nagoya University, Japan, [2013]",
        education3Title: "Master in Integrated Climate System Sciences",
        education3Date: "University of Hamburg, [2015 - 2018]",
        education4Title: "Udemy Courses",
        education4Course1: "The Business Intelligence Analyst Course [2023]",
        education4Course2: "Python for Data Science, Machine Learning & Visualization [2023]",
        
        // Languages section
        languagesTitle: "Languages",
        languageGerman: "German: Very Good",
        languageEnglish: "English: Fluent",
        languageJapanese: "Japanese: Advanced",
        languageIndonesian: "Bahasa Indonesia: Native",
        languagePolish: "Polish: Basic",
        
        // Experience section
        experienceTitle: "Experience",
        experience1Title: "International Education and Career Consultant",
        experience1Date: "[February 2025 - Present]",
        experience1Item1: "Advising students and professionals on international education and career opportunities",
        experience1Item2: "Developing individual career plans for international positions in Data Science and Technology",
        experience1Item3: "Support in applying for international study programs and scholarships",
        experience1Item4: "Teaching intercultural competencies for global work environments",
        experience1Item5: "Coaching for international job interviews and career development",
        experience1Item6: "Collaboration with educational institutions and companies to promote international education cooperation",
        experience2Title: "Operational Forecast Manager at TST Logistic",
        experience2Date: "[October 2023 - November 2024]",
        experience2Item1: "Developed and implemented forecasting models for Mercedes-Benz spare parts demand to optimize inventory levels",
        experience2Item2: "Analyzed historical sales data, seasonality and market trends for accurate demand forecasting",
        experience2Item3: "Collaborated with the supply chain department to ensure timely availability of critical spare parts",
        experience2Item4: "Developed data-driven strategies to reduce inventory while improving delivery capability",
        experience2Item5: "Created forecast dashboards and reports for management to support strategic decisions",
        experience2Item6: "Implemented machine learning models to improve forecast accuracy for spare parts",
        experience3Title: "Business Development in Data-Driven Solar and Wind Energy Forecasting",
        experience3Date: "[2020 - 2023]",
        experience3Item1: "Led the team in developing data-driven forecasts for solar and wind energy potential.",
        experience3Item2: "Analyzed large datasets to identify business opportunities and provide information to stakeholders.",
        experience3Item3: "Created reports and presentations to communicate forecasts and their impact on business strategy.",
        experience3Item4: "Developed data-driven solutions to support business decisions.",
        experience4Title: "Project Manager in Wind Energy Potential Analysis",
        experience4Date: "[2018 - 2020]",
        experience4Item1: "Led a team to analyze wind energy potential in Sulawesi, Indonesia.",
        experience4Item2: "Planned and conducted data collection, preprocessing and analysis.",
        experience4Item3: "Developed data models to assess wind energy potential.",
        experience4Item4: "Created reports and presentations for the client, including visualization of analysis results.",
        experience4Item5: "Communication and coordination with internal and external partners across various departments.",
        experience5Title: "Research Assistant",
        experience5Date: "[2014 - 2018]",
        experience5Item1: "Developed and implemented data analysis methods for evaluating extensive meteorological datasets.",
        experience5Item2: "Applied Python and Matlab for data analysis, statistical modeling and visualization of results.",
        experience5Item3: "Developed automated data processing workflows to increase research efficiency.",
        experience5Item4: "Created reports and presentations to communicate research findings to internal and external stakeholders.",
        experience5Item5: "Close collaboration with interdisciplinary teams to achieve common research goals.",
        
        // Contact section
        contactTitle: "Contact",
        contactText: "Interested in collaboration? Contact me for consulting services in IT or international education sector.",
        contactBtn: "Send Email",
        
        // Footer
        footerText: "&copy; 2025 Dida Fajrin | IT Professional & Education Consultant"
    },
    ja: {
        // Navigation
        navSummary: "概要",
        navSkills: "スキル",
        navPortfolio: "ポートフォリオ",
        navEducation: "学歴",
        navExperience: "職務経験",
        navLanguages: "言語",
        
        // Hero section
        heroName: "ディダ・ファジリン",
        heroTitle: "ITプロフェッショナル＆国際教育コンサルタント",
        heroPortfolioBtn: "ポートフォリオ",
        heroExperienceBtn: "職務経験",
        heroContactBtn: "お問い合わせ",
        
        // Summary section
        summaryTitle: "概要",
        summaryText: "リーダーシップ経験があり、特にプロセス最適化とチームリーダーシップにおいて実績のある解決志向の人物。自然科学の学術的背景とデータ分析、特に大規模データセットの分析と自動化に関する確固たる知識により、業務上および戦略上の課題に分析的にアプローチすることが可能。Pythonに関する確固たる知識と意思決定支援レポートの作成経験を有する。強い起業家精神、顧客志向、業務目標と戦略目標を調整する能力が特徴。チームワーク、優れたコミュニケーション能力、部門横断的な調整能力は当然のこと。非常に流暢なドイツ語と英語を話し、異文化対応能力が私のプロフィールを完成させる。",
        
        // Skills section
        skillsTitle: "スキル",
        skillPython: "Python（データサイエンス、分析、自動化）",
        skillOffice: "MS Office",
        skillAI: "AI＆機械学習",
        skillDataAnalysis: "データ分析＆可視化",
        skillDashboard: "ダッシュボード＆レポート",
        skillAnalytical: "分析的思考",
        skillLearning: "学習意欲",
        skillHTML: "HTML",
        skillCSS: "CSS",
        skillJS: "JavaScript",
        
        // Portfolio section
        portfolioTitle: "ポートフォリオ",
        slide1Title: "データ分析ダッシュボード",
        slide1Desc: "ビジネスデータとパフォーマンス指標を視覚化するためのインタラクティブなダッシュボード。",
        slide2Title: "予測 forecasting システム",
        slide2Desc: "自動車部品の在庫需要を予測する機械学習モデル。",
        slide3Title: "ビジネスインテリジェンスソリューション",
        slide3Desc: "データ駆動型意思決定のための包括的なBIプラットフォーム。",
        slideLearnMore: "詳細を見る",
        filterAll: "すべて",
        filterDataAnalysis: "データ分析",
        filterForecasting: "予測",
        filterAutomation: "自動化",
        filterConsulting: "コンサルティング",
        portfolio1Title: "データ分析ダッシュボード",
        portfolio1Desc: "ビジネスデータとパフォーマンス指標を視覚化するためのインタラクティブなダッシュボード。",
        portfolio2Title: "予測 forecasting システム",
        portfolio2Desc: "自動車部品の在庫需要を予測する機械学習モデル。",
        portfolio3Title: "プロセス自動化",
        portfolio3Desc: "物流プロセスのレポート作成とデータ準備の自動化。",
        portfolio4Title: "ビジネスインテリジェンスソリューション",
        portfolio4Desc: "データ駆動型意思決定のための包括的なBIプラットフォーム。",
        portfolio5Title: "風力エネルギー可能性分析",
        portfolio5Desc: "インドネシアにおける風力エネルギープロジェクトのデータ分析とモデリング。",
        portfolio6Title: "国際教育コンサルティング",
        portfolio6Desc: "データサイエンスと技術分野における留学生向けコンサルティング。",
        
        // Education section
        educationTitle: "学歴",
        education1Title: "気象学学士",
        education1Date: "バンドン工科大学、インドネシア、[2009-2014]",
        education2Title: "交換留学",
        education2Date: "名古屋大学、日本、[2013]",
        education3Title: "気候科学修士",
        education3Date: "ハンブルク大学、[2015-2018]",
        education4Title: "Udemyコース",
        education4Course1: "The Business Intelligence Analyst Course [2023]",
        education4Course2: "Python for Data Science, Machine Learning & Visualization [2023]",
        
        // Languages section
        languagesTitle: "言語",
        languageGerman: "ドイツ語: 非常に良い",
        languageEnglish: "英語: 流暢",
        languageJapanese: "日本語: 上級",
        languageIndonesian: "インドネシア語: 母国語",
        languagePolish: "ポーランド語: 初級",
        
        // Experience section
        experienceTitle: "職務経験",
        experience1Title: "国際教育・キャリアコンサルタント",
        experience1Date: "[2025年2月 - 現在]",
        experience1Item1: "留学生と専門家への国際的な教育とキャリアの機会に関するアドバイス",
        experience1Item2: "データサイエンスと技術分野における国際的なポジションのための個別キャリアプランの開発",
        experience1Item3: "国際的な学習プログラムと奨学金への応募のサポート",
        experience1Item4: "グローバルな職場環境のための異文化コンピテンシーの教育",
        experience1Item5: "国際的な就職面接とキャリア開発のコーチング",
        experience1Item6: "国際的な教育協力を促進するための教育機関や企業との協力",
        experience2Title: "TST Logisticでのオペレーショナル・フォーキャスト・マネージャー",
        experience2Date: "[2023年10月 - 2024年11月]",
        experience2Item1: "在庫レベルを最適化するためのメルセデス・ベンツのスペアパーツ需要の予測モデルの開発と実装",
        experience2Item2: "正確な需要予測のための過去の販売データ、季節性、市場動向の分析",
        experience2Item3: "重要なスペアパーツの適時の可用性を確保するためのサプライチェーン部門との連携",
        experience2Item4: "配送能力を向上させながら在庫を削減するデータ駆動型戦略の開発",
        experience2Item5: "戦略的决定を支援するための管理向け予測ダッシュボードとレポートの作成",
        experience2Item6: "スペアパーツの予測精度を向上させるための機械学習モデルの実装",
        experience3Title: "データ駆動型太陽光・風力エネルギー予測におけるビジネス開発",
        experience3Date: "[2020 - 2023]",
        experience3Item1: "太陽光および風力エネルギー可能性のデータ駆動型予測を開発するチームを率いた。",
        experience3Item2: "ビジネス機会を特定し、ステークホルダーに情報を提供するために大規模なデータセットを分析した。",
        experience3Item3: "予測とそのビジネス戦略への影響を伝えるためのレポートとプレゼンテーションを作成した。",
        experience3Item4: "ビジネス決定を支援するデータ駆動型ソリューションを開発した。",
        experience4Title: "風力エネルギー可能性分析におけるプロジェクトマネージャー",
        experience4Date: "[2018 - 2020]",
        experience4Item1: "インドネシアのスラウェシにおける風力エネルギー可能性を分析するチームを率いた。",
        experience4Item2: "データ収集、前処理、分析を計画および実施した。",
        experience4Item3: "風力エネルギー可能性を評価するデータモデルを開発した。",
        experience4Item4: "分析結果の可視化を含むクライアント向けのレポートとプレゼンテーションを作成した。",
        experience4Item5: "様々な部門にわたる内部および外部のパートナーとのコミュニケーションと調整。",
        experience5Title: "研究アシスタント",
        experience5Date: "[2014 - 2018]",
        experience5Item1: "広範な気象データセットを評価するためのデータ分析方法の開発と実装。",
        experience5Item2: "データ分析、統計モデリング、結果の可視化のためにPythonとMatlabを適用した。",
        experience5Item3: "研究効率を高めるための自動化されたデータ処理ワークフローの開発。",
        experience5Item4: "内部および外部のステークホルダーに研究成果を伝えるためのレポートとプレゼンテーションを作成した。",
        experience5Item5: "共通の研究目標を達成するための学際的なチームとの緊密な協力。",
        
        // Contact section
        contactTitle: "連絡先",
        contactText: "コラボレーションに興味がありますか？ITまたは国際教育セクターのコンサルティングサービスについてお問い合わせください。",
        contactBtn: "メールを送る",
        
        // Footer
        footerText: "&copy; 2025 ディダ・ファジリン | ITプロフェッショナル＆国際教育コンサルタント"
    },
    id: {
        // Navigation
        navSummary: "Tentang saya",
        navSkills: "Skill",
        navPortfolio: "Portfolio",
        navEducation: "Pendidikan",
        navExperience: "Pengalaman",
        navLanguages: "Bahasa",
        
        // Hero section
        heroName: "Dida Fajrin",
        heroTitle: "Profesional IT & Konsultan Pendidikan Internasional",
        heroPortfolioBtn: "Portfolio Saya",
        heroExperienceBtn: "Pengalaman Saya",
        heroContactBtn: "Hubungi Saya",
        
        // Summary section
        summaryTitle: "Ringkasan",
        summaryText: "Seorang individu yang berpengalaman dalam hal kepemimpinan di lingkungan kerja internasional dan multikultural, berorientasi pada solusi terutama dalam optimasi proses dan kepemimpinan tim. Latar belakang akademis di bidang sains dan pengetahuan mendalam tentang analisis data, terutama dalam analisis dan otomatisasi set data besar, memungkinkan pendekatan analitis terhadap tantangan operasional dan strategis. Saya memiliki pengalaman mendalam tentang pengembangan AI dan Machine Learning berbasis python dan pengalaman dalam membuat laporan berbasis data untuk mendukung pembuatan keputusan. Saya memiliki pola pikir kewirausahaan yang kuat, orientasi klien, dan kemampuan untuk menyelaraskan tujuan operasional strategis dan efisien. Kerja sama tim, keterampilan komunikasi yang kuat, dan kemampuan untuk berkoordinasi lintas departemen merupakan suatu keharusan. Saya fasih berbahasa Jerman dan Inggris, serta kompetensi dan pengalaman di lingkungan kerja lintas budaya melengkapi profil saya.",
        
        // Skills section
        skillsTitle: "Skill",
        skillPython: "Python (Data Science, Analisis, Otomatisasi)",
        skillOffice: "MS Office",
        skillAI: "AI & Pembelajaran Mesin",
        skillDataAnalysis: "Analisis & Visualisasi Data",
        skillDashboard: "Dashboard & Pelaporan",
        skillAnalytical: "Pemikiran Analitis",
        skillLearning: "Kemauan Belajar",
        skillHTML: "HTML",
        skillCSS: "CSS",
        skillJS: "JavaScript",
        
        // Portfolio section
        portfolioTitle: "Portfolio",
        slide1Title: "Dashboard Analisis Data",
        slide1Desc: "Dashboard interaktif untuk memvisualisasikan data bisnis dan metrik kinerja.",
        slide2Title: "Sistem Peramalan Prediktif",
        slide2Desc: "Model pembelajaran mesin untuk memprediksi kebutuhan inventaris suku cadang otomotif.",
        slide3Title: "Solusi Business Intelligence",
        slide3Desc: "Platform BI komprehensif untuk pengambilan keputusan berbasis data.",
        slideLearnMore: "Pelajari Lebih Lanjut",
        filterAll: "Semua",
        filterDataAnalysis: "Analisis Data",
        filterForecasting: "Peramalan",
        filterAutomation: "Otomatisasi",
        filterConsulting: "Konsultasi",
        portfolio1Title: "Dashboard Analisis Data",
        portfolio1Desc: "Dashboard interaktif untuk memvisualisasikan data bisnis dan metrik kinerja.",
        portfolio2Title: "Sistem Peramalan Prediktif",
        portfolio2Desc: "Model pembelajaran mesin untuk memprediksi kebutuhan inventaris suku cadang otomotif.",
        portfolio3Title: "Otomatisasi Proses",
        portfolio3Desc: "Otomatisasi pelaporan dan persiapan data untuk proses logistik.",
        portfolio4Title: "Solusi Business Intelligence",
        portfolio4Desc: "Platform BI komprehensif untuk pengambilan keputusan berbasis data.",
        portfolio5Title: "Analisis Potensi Energi Angin",
        portfolio5Desc: "Analisis data dan pemodelan untuk proyek energi angin di Indonesia.",
        portfolio6Title: "Konsultasi Pendidikan Internasional",
        portfolio6Desc: "Konsultasi untuk siswa internasional di bidang Data Science dan Teknologi.",
        
        // Education section
        educationTitle: "Pendidikan",
        education1Title: "Sarjana Sains Meteorologi",
        education1Date: "Institut Teknologi Bandung, Indonesia, [2009-2014]",
        education2Title: "Semester Pertukaran",
        education2Date: "Universitas Nagoya, Jepang, [2013]",
        education3Title: "Magister Sains Sistem Iklim Terintegrasi",
        education3Date: "Universitas Hamburg, [2015 - 2018]",
        education4Title: "Kursus Udemy",
        education4Course1: "The Business Intelligence Analyst Course [2023]",
        education4Course2: "Python for Data Science, Machine Learning & Visualization [2023]",
        
        // Languages section
        languagesTitle: "Bahasa",
        languageGerman: "Jerman: Sangat Baik",
        languageEnglish: "Inggris: Fasih",
        languageJapanese: "Jepang: Lanjutan",
        languageIndonesian: "Bahasa Indonesia: Penutur Asli",
        languagePolish: "Polandia: Dasar",
        
        // Experience section
        experienceTitle: "Pengalaman",
        experience1Title: "Konsultan Pendidikan dan Karir Internasional",
        experience1Date: "[Februari 2025 - Sekarang]",
        experience1Item1: "Memberikan nasihat kepada mahasiswa dan profesional tentang peluang pendidikan dan karir internasional",
        experience1Item2: "Mengembangkan rencana karir individual untuk posisi internasional di bidang Data Science dan Teknologi",
        experience1Item3: "Mendukung aplikasi untuk program studi dan beasiswa internasional",
        experience1Item4: "Mengajarkan kompetensi antarbudaya untuk lingkungan kerja global",
        experience1Item5: "Pelatihan untuk wawancara kerja internasional dan pengembangan karir",
        experience1Item6: "Kolaborasi dengan institusi pendidikan dan perusahaan untuk mempromosikan kerjasama pendidikan internasional",
        experience2Title: "Manajer Peramalan Operasional di TST Logistic",
        experience2Date: "[Oktober 2023 - November 2024]",
        experience2Item1: "Mengembangkan dan menerapkan model peramalan untuk permintaan suku cadang Mercedes-Benz untuk mengoptimalkan tingkat inventaris",
        experience2Item2: "Menganalisis data penjualan historis, musiman, dan tren pasar untuk peramalan permintaan yang akurat",
        experience2Item3: "Berkolaborasi dengan departemen supply chain untuk memastikan ketersediaan tepat waktu suku cadang kritis",
        experience2Item4: "Mengembangkan strategi berbasis data untuk mengurangi inventaris sambil meningkatkan kemampuan pengiriman",
        experience2Item5: "Membuat dashboard dan laporan peramalan untuk manajemen untuk mendukung keputusan strategis",
        experience2Item6: "Menerapkan model pembelajaran mesin untuk meningkatkan akurasi peramalan untuk suku cadang",
        experience3Title: "Pengembangan Bisnis dalam Peramalan Energi Surya dan Angin Berbasis Data",
        experience3Date: "[2020 - 2023]",
        experience3Item1: "Memimpin tim dalam mengembangkan peramalan berbasis data untuk potensi energi surya dan angin.",
        experience3Item2: "Menganalisis kumpulan data besar untuk mengidentifikasi peluang bisnis dan memberikan informasi kepada pemangku kepentingan.",
        experience3Item3: "Membuat laporan dan presentasi untuk mengkomunikasikan peramalan dan dampaknya terhadap strategi bisnis.",
        experience3Item4: "Mengembangkan solusi berbasis data untuk mendukung keputusan bisnis.",
        experience4Title: "Manajer Proyek dalam Analisis Potensi Energi Angin",
        experience4Date: "[2018 - 2020]",
        experience4Item1: "Memimpin tim untuk menganalisis potensi energi angin di Sulawesi, Indonesia.",
        experience4Item2: "Merencanakan dan melaksanakan pengumpulan data, pra-pemrosesan, dan analisis.",
        experience4Item3: "Mengembangkan model data untuk menilai potensi energi angin.",
        experience4Item4: "Membuat laporan dan presentasi untuk klien, termasuk visualisasi hasil analisis.",
        experience4Item5: "Komunikasi dan koordinasi dengan mitra internal dan eksternal di berbagai departemen.",
        experience5Title: "Asisten Peneliti",
        experience5Date: "[2014 - 2018]",
        experience5Item1: "Mengembangkan dan menerapkan metode analisis data untuk mengevaluasi kumpulan data meteorologi yang luas.",
        experience5Item2: "Menerapkan Python dan Matlab untuk analisis data, pemodelan statistik, dan visualisasi hasil.",
        experience5Item3: "Mengembangkan alur kerja pemrosesan data yang otomatis untuk meningkatkan efisiensi penelitian.",
        experience5Item4: "Membuat laporan dan presentasi untuk mengkomunikasikan temuan penelitian kepada pemangku kepentingan internal dan eksternal.",
        experience5Item5: "Kolaborasi erat dengan tim interdisipliner untuk mencapai tujuan penelitian bersama.",
        
        // Contact section
        contactTitle: "Kontak",
        contactText: "Tertarik untuk berkolaborasi? Hubungi saya untuk layanan konsultasi di bidang IT atau sektor pendidikan internasional.",
        contactBtn: "Kirim Email",
        
        // Footer
        footerText: "&copy; 2025 Dida Fajrin | Profesional IT & Konsultan Pendidikan Internasional"
    },
    pl: {
        // Navigation
        navSummary: "Podsumowanie",
        navSkills: "Umiejętności",
        navPortfolio: "Portfolio",
        navEducation: "Edukacja",
        navExperience: "Doświadczenie",
        navLanguages: "Języki",
        
        // Hero section
        heroName: "Dida Fajrin",
        heroTitle: "Profesjonalista IT & Doradca Edukacji Międzynarodowej",
        heroPortfolioBtn: "Moje Portfolio",
        heroExperienceBtn: "Moje Doświadczenie",
        heroContactBtn: "Skontaktuj Się",
        
        // Summary section
        summaryTitle: "Podsumowanie",
        summaryText: "Osobowość z doświadczeniem przywódczym i zorientowana na rozwiązania ze sprawdzonym doświadczeniem, szczególnie w optymalizacji procesów i przywództwie zespołowym. Akademickie tło w naukach przyrodniczych i solidna wiedza w analizie danych, szczególnie w analizie i automatyzacji dużych zbiorów danych, umożliwia analityczne podejście do wyzwań operacyjnych i strategicznych. Posiada solidną wiedzę w Pythonie oraz doświadczenie w tworzeniu raportów wspierających decyzje. Silne myślenie przedsiębiorcze, orientacja na klienta i zdolność do dostosowywania celów operacyjnych i strategicznych wyróżniają mnie. Praca zespołowa, silne umiejętności komunikacyjne i zdolność do koordynacji między działami są dla mnie oczywiste. Mówi bardzo dobrze po niemiecku i płynnie po angielsku, kompetencje międzykulturowe dopełniają mój profil.",
        
        // Skills section
        skillsTitle: "Umiejętności",
        skillPython: "Python (Data Science, Analiza, Automatyzacja)",
        skillOffice: "MS Office",
        skillAI: "AI & Uczenie Maszynowe",
        skillDataAnalysis: "Analiza & Wizualizacja Danych",
        skillDashboard: "Dashboard & Raportowanie",
        skillAnalytical: "Myślenie Analityczne",
        skillLearning: "Chęć Uczenia Się",
        skillHTML: "HTML",
        skillCSS: "CSS",
        skillJS: "JavaScript",
        
        // Portfolio section
        portfolioTitle: "Portfolio",
        slide1Title: "Dashboard Analizy Danych",
        slide1Desc: "Interaktywny dashboard do wizualizacji danych biznesowych i metryk wydajności.",
        slide2Title: "System Prognozowania Predykcyjnego",
        slide2Desc: "Model uczenia maszynowego do przewidywania potrzeb zapasów części samochodowych.",
        slide3Title: "Rozwiązanie Business Intelligence",
        slide3Desc: "Kompleksowa platforma BI do podejmowania decyzji opartych na danych.",
        slideLearnMore: "Dowiedz Się Więcej",
        filterAll: "Wszystkie",
        filterDataAnalysis: "Analiza Danych",
        filterForecasting: "Prognozowanie",
        filterAutomation: "Automatyzacja",
        filterConsulting: "Konsulting",
        portfolio1Title: "Dashboard Analizy Danych",
        portfolio1Desc: "Interaktywny dashboard do wizualizacji danych biznesowych i metryk wydajności.",
        portfolio2Title: "System Prognozowania Predykcyjnego",
        portfolio2Desc: "Model uczenia maszynowego do przewidywania potrzeb zapasów części samochodowych.",
        portfolio3Title: "Automatyzacja Procesów",
        portfolio3Desc: "Automatyzacja raportowania i przygotowywania danych dla procesów logistycznych.",
        portfolio4Title: "Rozwiązanie Business Intelligence",
        portfolio4Desc: "Kompleksowa platforma BI do podejmowania decyzji opartych na danych.",
        portfolio5Title: "Analiza Potencjału Energii Wiatrowej",
        portfolio5Desc: "Analiza danych i modelowanie dla projektów energii wiatrowej w Indonezji.",
        portfolio6Title: "Konsulting Edukacji Międzynarodowej",
        portfolio6Desc: "Konsulting dla studentów międzynarodowych w dziedzinie Data Science i Technologii.",
        
        // Education section
        educationTitle: "Edukacja",
        education1Title: "Licencjat z Meteorologii",
        education1Date: "Institut Teknologi Bandung, Indonezja, [2009-2014]",
        education2Title: "Semestr Wymiany",
        education2Date: "Uniwersytet Nagoya, Japonia, [2013]",
        education3Title: "Magister Nauk o Klimacie",
        education3Date: "Uniwersytet Hamburg, [2015 - 2018]",
        education4Title: "Kursy Udemy",
        education4Course1: "The Business Intelligence Analyst Course [2023]",
        education4Course2: "Python for Data Science, Machine Learning & Visualization [2023]",
        
        // Languages section
        languagesTitle: "Języki",
        languageGerman: "Niemiecki: Bardzo Dobry",
        languageEnglish: "Angielski: Biegły",
        languageJapanese: "Japoński: Zaawansowany",
        languageIndonesian: "Indonezyjski: Ojczysty",
        languagePolish: "Polski: Podstawowy",
        
        // Experience section
        experienceTitle: "Doświadczenie",
        experience1Title: "Konsultant Edukacji i Kariery Międzynarodowej",
        experience1Date: "[Luty 2025 - Obecnie]",
        experience1Item1: "Doradzanie studentom i profesjonalistom w zakresie międzynarodowych możliwości edukacyjnych i kariery",
        experience1Item2: "Opracowywanie indywidualnych planów kariery dla międzynarodowych stanowisk w dziedzinie Data Science i Technologii",
        experience1Item3: "Wsparcie w aplikowaniu na międzynarodowe programy studiów i stypendia",
        experience1Item4: "Nauczanie kompetencji międzykulturowych dla globalnych środowisk pracy",
        experience1Item5: "Coaching do międzynarodowych rozmów kwalifikacyjnych i rozwoju kariery",
        experience1Item6: "Współpraca z instytucjami edukacyjnymi i firmami w celu promowania międzynarodowej współpracy edukacyjnej",
        experience2Title: "Menedżer Prognozowania Operacyjnego w TST Logistic",
        experience2Date: "[Październik 2023 - Listopad 2024]",
        experience2Item1: "Opracowywanie i wdrażanie modeli prognozowania zapotrzebowania na części zamienne Mercedes-Benz w celu optymalizacji poziomów zapasów",
        experience2Item2: "Analiza historycznych danych sprzedaży, sezonowości i trendów rynkowych w celu dokładnego prognozowania popytu",
        experience2Item3: "Współpraca z działem łańcucha dostaw w celu zapewnienia terminowej dostępności krytycznych części zamiennych",
        experience2Item4: "Opracowywanie strategii opartych na danych w celu redukcji zapasów przy jednoczesnym poprawieniu zdolności dostaw",
        experience2Item5: "Tworzenie dashboardów i raportów prognoz dla kierownictwa w celu wsparcia decyzji strategicznych",
        experience2Item6: "Wdrażanie modeli uczenia maszynowego w celu poprawy dokładności prognoz dla części zamiennych",
        experience3Title: "Rozwój Biznesu w Prognozowaniu Energii Słonecznej i Wiatrowej Opartym na Danych",
        experience3Date: "[2020 - 2023]",
        experience3Item1: "Kierowanie zespołem w rozwoju prognoz opartych na danych dla potencjału energii słonecznej i wiatrowej.",
        experience3Item2: "Analiza dużych zbiorów danych w celu identyfikacji możliwości biznesowych i dostarczania informacji interesariuszom.",
        experience3Item3: "Tworzenie raportów i prezentacji w celu komunikowania prognoz i ich wpływu na strategię biznesową.",
        experience3Item4: "Rozwój rozwiązań opartych na danych w celu wsparcia decyzji biznesowych.",
        experience4Title: "Kierownik Projektu w Analizie Potencjału Energii Wiatrowej",
        experience4Date: "[2018 - 2020]",
        experience4Item1: "Kierowanie zespołem w analizie potencjału energii wiatrowej w Sulawesi, Indonezja.",
        experience4Item2: "Planowanie i przeprowadzanie zbierania danych, wstępnego przetwarzania i analizy.",
        experience4Item3: "Rozwój modeli danych do oceny potencjału energii wiatrowej.",
        experience4Item4: "Tworzenie raportów i prezentacji dla klienta,包括 wizualizacja wyników analizy.",
        experience4Item5: "Komunikacja i koordynacja z wewnętrznymi i zewnętrznymi partnerami across various departments.",
        experience5Title: "Asystent Badawczy",
        experience5Date: "[2014 - 2018]",
        experience5Item1: "Rozwój i wdrażanie metod analizy danych do oceny obszernych zestawów danych meteorologicznych.",
        experience5Item2: "Zastosowanie Pythona i Matlaba do analizy danych, modelowania statystycznego i wizualizacji wyników.",
        experience5Item3: "Rozwój zautomatyzowanych workflow przetwarzania danych w celu zwiększenia efektywności badań.",
        experience5Item4: "Tworzenie raportów i prezentacji w celu komunikowania wyników badań wewnętrznym i zewnętrznym interesariuszom.",
        experience5Item5: "Ścisła współpraca z interdyscyplinarnymi zespołami w celu osiągnięcia wspólnych celów badawczych.",
        
        // Contact section
        contactTitle: "Kontakt",
        contactText: "Zainteresowany współpracą? Skontaktuj się ze mną w sprawie usług konsultingowych w dziedzinie IT lub międzynarodowego sektora edukacji.",
        contactBtn: "Wyślij Email",
        
        // Footer
        footerText: "&copy; 2025 Dida Fajrin | Profesjonalista IT & Doradca Edukacji Międzynarodowej"
    }
};

// DOM elements
const languageSelect = document.getElementById('language-select');
const themeToggle = document.getElementById('theme-toggle');
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navMenu = document.getElementById('nav-menu');
const backToTopBtn = document.querySelector('.back-to-top');
const filterButtons = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');
const slideshow = document.getElementById('slideshow');
const slideDots = document.querySelectorAll('.dot');
const prevSlideBtn = document.getElementById('prev-slide');
const nextSlideBtn = document.getElementById('next-slide');

// Current language
let currentLanguage = 'de';

// Function to change language
function changeLanguage(lang) {
    currentLanguage = lang;
    
    // Update all elements with data-key attribute
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[lang][key]) {
            if (element.tagName === 'INPUT' && element.type === 'button') {
                element.value = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
    
    // Update language selector
    languageSelect.value = lang;
}

// Function to toggle theme
function toggleTheme() {
    if (document.documentElement.getAttribute('data-theme') === 'dark') {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
}

// Function to toggle mobile menu
function toggleMobileMenu() {
    navMenu.classList.toggle('show');
}

// Function to handle back to top button
function handleBackToTop() {
    if (window.scrollY > 300) {
        backToTopBtn.classList.add('visible');
    } else {
        backToTopBtn.classList.remove('visible');
    }
}

// Smooth scrolling for navigation links
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });

                // Close mobile menu after clicking a link
                navMenu.classList.remove('show');
            });
        });

// Function to filter portfolio items
function filterPortfolio(category) {
    portfolioItems.forEach(item => {
        if (category === 'all' || item.getAttribute('data-category') === category) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
    
    // Update active filter button
    filterButtons.forEach(btn => {
        if (btn.getAttribute('data-filter') === category) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

// Slideshow functionality
let currentSlide = 0;

function showSlide(index) {
    if (index >= document.querySelectorAll('.slide').length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = document.querySelectorAll('.slide').length - 1;
    } else {
        currentSlide = index;
    }
    
    slideshow.style.transform = `translateX(-${currentSlide * 100}%)`;
    
    // Update active dot
    slideDots.forEach((dot, i) => {
        if (i === currentSlide) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

// Animate skill bars when they come into view
function animateSkillBars() {
    const skillLevels = document.querySelectorAll('.skill-level');
    
    skillLevels.forEach(level => {
        const levelValue = level.getAttribute('data-level');
        level.style.width = levelValue;
    });
}

// Event Listeners
languageSelect.addEventListener('change', (e) => {
    changeLanguage(e.target.value);
});

themeToggle.addEventListener('change', toggleTheme);

mobileMenuBtn.addEventListener('click', toggleMobileMenu);

window.addEventListener('scroll', handleBackToTop);

filterButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const category = e.target.getAttribute('data-filter');
        filterPortfolio(category);
    });
});

prevSlideBtn.addEventListener('click', () => {
    showSlide(currentSlide - 1);
});

nextSlideBtn.addEventListener('click', () => {
    showSlide(currentSlide + 1);
});

slideDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        showSlide(index);
    });
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeToggle.checked = true;
    }
    
    // Animate skill bars
    animateSkillBars();
    
    // Set up slideshow auto-advance
    setInterval(() => {
        showSlide(currentSlide + 1);
    }, 5000);
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('show');
        });
    });
});
