// FMPP, White, Black, Colour and Additive masterbatch pages.
const products = {
  // ── shared across these pages ──
  'PE': 'PE', 'PP': 'PP', 'PS': 'PS', 'PET': 'PET', 'ABS': 'ABS', 'HDPE': 'HDPE', 'LLDPE': 'LLDPE',
  'Standard': 'قياسي',
  'High Loading': 'تحميل عالٍ',
  'Filled': 'محشو',
  'Carrier': 'الحامل',
  'Application': 'التطبيق',
  'Type': 'النوع',
  'Household': 'الأدوات المنزلية',
  'Non-Woven': 'الأقمشة غير المنسوجة',
  'Spunbond': 'سبانبوند',
  'Lamination': 'التصفيح',
  'Caps & Closures': 'الأغطية والسدادات',
  'BOPP Film': 'أفلام BOPP',
  'Raffia / Woven': 'الرافيا / المنسوج',
  'Food Packaging': 'تغليف الأغذية',
  'Carbon Black': 'أسود الكربون',
  'Contact us for the full product list or to discuss a specific requirement.': 'تواصل معنا للحصول على قائمة المنتجات الكاملة أو لمناقشة متطلب محدد.',
  'Inj. moulding, Extrusion, Blow moulding': 'القولبة بالحقن، البثق، القولبة بالنفخ',
  'Choose a series or tell us your application': 'اختر سلسلة أو أخبرنا بتطبيقك',
  "We'll recommend the right additive": 'سنوصي بالإضافة المناسبة',

  // ── FMPP ──
  'PP Filler Masterbatch': 'ماستر باتش الحشو (PP)',
  'CaCO₃-based filler masterbatch on polypropylene carrier — produced at our 6th of October facility. Three grades for raffia, non-woven, BOPP film, and injection moulding.':
    'ماستر باتش حشو أساسه CaCO₃ على حامل من البولي بروبيلين — يُنتَج في مصنعنا بمدينة السادس من أكتوبر. ثلاث درجات للرافيا والأقمشة غير المنسوجة وأفلام BOPP والقولبة بالحقن.',
  'What Is PP Filler Masterbatch?': 'ما هو ماستر باتش الحشو (PP)؟',
  'CaCO₃ Concentrate on PP Carrier': 'مركّز CaCO₃ على حامل PP',
  'PP filler masterbatch is a high-loading calcium carbonate concentrate produced on a polypropylene carrier resin. It is used in raffia extrusion, non-woven production, BOPP film, and injection moulding to replace a portion of virgin PP and reduce raw material expenditure.':
    'ماستر باتش الحشو (PP) مركّز كربونات الكالسيوم عالي التحميل يُنتَج على راتنج حامل من البولي بروبيلين. يُستخدم في بثق الرافيا وإنتاج الأقمشة غير المنسوجة وأفلام BOPP والقولبة بالحقن ليحلّ محل جزء من PP الخام ويخفّض تكلفة المواد.',
  'With CaCO₃ loadings of 70–80%, FMPP grades improve surface finish and dimensional stability while maintaining the processability required for high-speed PP lines. All grades are manufactured at our in-house facility in Egypt.':
    'بنسب تحميل CaCO₃ من 70–80%، تحسّن درجات FMPP جودة السطح والثبات الأبعادي مع الحفاظ على قابلية المعالجة اللازمة لخطوط PP عالية السرعة. تُصنَّع جميع الدرجات في مصنعنا في مصر.',
  '8–12 g/10min MFI': 'MFI ‏8–12 جم/10 دقائق',
  '8–12 g/10min': '8–12 جم/10 دقائق',
  'PP Homopolymer Carrier': 'حامل PP هوموبوليمر',
  'Optimised for PP Processing': 'مُحسَّن لمعالجة PP',
  'PP homopolymer carrier ensures full compatibility with PP raffia, non-woven, and film lines — no cross-contamination with PE streams. Each batch tested for MFI, ash content, and dispersion before dispatch.':
    'يضمن حامل PP هوموبوليمر توافقاً كاملاً مع خطوط الرافيا والأقمشة غير المنسوجة والأفلام من PP — دون تلوّث متبادل مع خطوط PE. يُختبَر كل دفعة من حيث MFI ومحتوى الرماد والتشتّت قبل الشحن.',
  'The grades below represent our standard PP filler masterbatch range. Additional CaCO₃ loadings, custom carrier systems, and application-specific formulations are available on request. All grades supplied with TDS and CoA.':
    'تمثّل الدرجات أدناه المجموعة القياسية لدينا من ماستر باتش الحشو (PP). تتوفر عند الطلب نسب تحميل CaCO₃ إضافية وأنظمة حاملة مخصصة وتركيبات لتطبيقات محددة. تُورَّد جميع الدرجات مع TDS وCoA.',
  'PP blown film, cast film, raffia': 'أفلام PP المنفوخة والمصبوبة والرافيا',
  'Raffia, non-woven, BOPP film': 'الرافيا والأقمشة غير المنسوجة وأفلام BOPP',
  'High-loading raffia, woven bags, injection': 'رافيا عالية التحميل وأكياس منسوجة وحقن',
  'PP-compatible carrier resin — no cross-contamination with PE streams': 'راتنج حامل متوافق مع PP — دون تلوّث متبادل مع خطوط PE',
  'Compatible with raffia, non-woven, BOPP, and injection moulding lines': 'متوافق مع خطوط الرافيا والأقمشة غير المنسوجة وBOPP والقولبة بالحقن',
  'Custom CaCO₃ loadings, MFI profiles, and carrier blends are available for specific PP processing lines.':
    'تتوفر نسب تحميل CaCO₃ ومواصفات MFI وخلطات حاملة مخصصة لخطوط معالجة PP المحددة.',
  'Raffia / Tape Extrusion': 'بثق الرافيا / الشرائط',
  'Non-Woven (spunbond)': 'أقمشة غير منسوجة (سبانبوند)',
  'Blow Moulding (PP)': 'القولبة بالنفخ (PP)',
  'Where FMPP Filler Masterbatch Is Used': 'أين يُستخدم ماستر باتش الحشو FMPP',
  'FMPP grades suit the full spectrum of PP processing — from high-speed raffia lines to cast film, injection moulding, and non-woven production.':
    'تناسب درجات FMPP مختلف تطبيقات معالجة PP — من خطوط الرافيا عالية السرعة إلى الأفلام المصبوبة والقولبة بالحقن وإنتاج الأقمشة غير المنسوجة.',
  'Raffia & Woven Bags': 'الرافيا والأكياس المنسوجة',
  'PP tapes, raffia yarns, and woven sacks for cement, fertiliser, and agricultural products. FMPP improves tape stiffness and reduces resin consumption.':
    'شرائط PP وخيوط الرافيا والأكياس المنسوجة للأسمنت والأسمدة والمنتجات الزراعية. يزيد FMPP صلابة الشريط ويقلّل استهلاك الراتنج.',
  'PP Tapes': 'شرائط PP', 'Raffia Yarn': 'خيوط الرافيا', 'Woven Sacks': 'الأكياس المنسوجة',
  'Non-Woven Fabrics': 'الأقمشة غير المنسوجة',
  'Spunbond and meltblown non-wovens for hygiene, agriculture, and geotextile applications. FMPP grades with controlled MFI suit a wide range of non-woven line speeds.':
    'أقمشة سبانبوند وميلت بلاون غير منسوجة لتطبيقات النظافة الشخصية والزراعة والجيوتكستايل. تناسب درجات FMPP ذات MFI المضبوط نطاقاً واسعاً من سرعات خطوط الأقمشة غير المنسوجة.',
  'Geotextile': 'الجيوتكستايل', 'Hygiene': 'النظافة الشخصية',
  'BOPP & Cast Film': 'أفلام BOPP والأفلام المصبوبة',
  'Biaxially oriented and cast PP film for packaging and lamination. FMPP improves film stiffness and reduces cost in high-output cast film lines.':
    'أفلام PP الموجَّهة ثنائياً والمصبوبة للتغليف والتصفيح. يحسّن FMPP صلابة الفيلم ويخفّض التكلفة في خطوط الأفلام المصبوبة عالية الإنتاج.',
  'PP household articles, caps, closures, and industrial components. FMPP at lower dosage rates reduces material cost while maintaining surface quality.':
    'الأدوات المنزلية والأغطية والسدادات والمكونات الصناعية من PP. يخفّض FMPP بجرعات أقل تكلفة المواد مع الحفاظ على جودة السطح.',
  'Household Items': 'أدوات منزلية', 'Industrial Parts': 'قطع صناعية',
  'Get FMPP Series Pricing': 'احصل على أسعار سلسلة FMPP',
  'Which FMPP grade do you need?': 'أي درجة FMPP تحتاج؟',

  // ── White ──
  'WMB Series': 'سلسلة WMB',
  'TiO₂-based white concentrates delivering high opacity, brilliant blue-white tone, and consistent batch-to-batch performance — in PE and PP carrier systems.':
    'مركّزات بيضاء أساسها TiO₂ تمنح عتامة عالية ودرجة بياض مائلة للأزرق ناصعة وأداءً ثابتاً من دفعة لأخرى — على أنظمة حاملة PE وPP.',
  'What Is White Masterbatch?': 'ما هو الماستر باتش الأبيض؟',
  'TiO₂ Concentrates Across Every Major Polymer': 'مركّزات TiO₂ لكل البوليمرات الرئيسية',
  'White masterbatch is a concentrated dispersion of titanium dioxide (TiO₂) in a polymer carrier resin. TiO₂ is the primary pigment responsible for whiteness and opacity in plastics — it scatters visible light with exceptional efficiency, hiding the natural colour of the base polymer and any underlying substrate. It is added at the processing stage at typical let-down ratios of 2–5%, replacing the need to handle raw TiO₂ powder directly.':
    'الماستر باتش الأبيض تشتّت مركَّز من ثاني أكسيد التيتانيوم (TiO₂) في راتنج حامل بوليمري. يُعدّ TiO₂ الصبغة الأساسية المسؤولة عن البياض والعتامة في البلاستيك — إذ يبعثر الضوء المرئي بكفاءة استثنائية فيُخفي اللون الطبيعي للبوليمر الأساسي وأي سطح تحته. يُضاف في مرحلة المعالجة بنسب تخفيف نموذجية 2–5%، فيغني عن التعامل مع مسحوق TiO₂ الخام مباشرة.',
  'Our white masterbatch range covers every major polymer matrix — giving converters a single source for consistent opacity and whiteness regardless of their base resin or processing technology.':
    'تغطي مجموعتنا من الماستر باتش الأبيض كل مصفوفات البوليمر الرئيسية — لتمنح المصنّعين مصدراً واحداً لعتامة وبياض ثابتين أياً كان الراتنج الأساسي أو تقنية المعالجة.',
  'Rutile-grade TiO₂ delivers superior hiding power and a clean blue-white tone with excellent UV stability. TDS and CoA are supplied with every shipment.':
    'يمنح TiO₂ بدرجة الروتيل قدرة تغطية فائقة ودرجة بياض نقية مائلة للأزرق مع ثبات ممتاز أمام الأشعة فوق البنفسجية. تُورَّد TDS وCoA مع كل شحنة.',
  'Application Simulation': 'محاكاة التطبيقات',
  'Near-Plant Pilot Trials': 'تجارب تجريبية قريبة من ظروف المصنع',
  'Our Application Simulation Centre uses production-representative equipment to run reproducible trials — enabling new product development and current-product optimisation under real processing conditions before full-scale commitment.':
    'يستخدم مركز محاكاة التطبيقات لدينا معدات ممثِّلة للإنتاج لإجراء تجارب قابلة للتكرار — مما يتيح تطوير منتجات جديدة وتحسين المنتجات الحالية في ظروف معالجة حقيقية قبل الالتزام بالإنتاج الكامل.',
  'Built to Your Specification': 'مصمَّم وفق مواصفاتك',
  'Fast development cycles for application-specific requirements. White masterbatch can be enhanced with functional additives including:':
    'دورات تطوير سريعة للمتطلبات الخاصة بكل تطبيق. يمكن تعزيز الماستر باتش الأبيض بإضافات وظيفية تشمل:',
  'Anti-static': 'مضاد للكهرباء الساكنة', 'Anti-fog': 'مضاد للضباب', 'UV Stabiliser': 'مثبّت UV',
  'Mould Release': 'مانع التصاق بالقالب', 'Anti-bacterial': 'مضاد للبكتيريا',
  'Standard range shown — custom TiO₂ loadings, optical properties, carrier systems, and application-specific formulations available on request.':
    'يُعرض النطاق القياسي — تتوفر عند الطلب نسب تحميل TiO₂ وخواص بصرية وأنظمة حاملة وتركيبات مخصصة لتطبيقات محددة.',
  'The grades below represent a sample of our white masterbatch portfolio — we carry a broader range across TiO₂ loadings, carrier resins, and regulatory standards. All grades supplied with TDS and CoA.':
    'تمثّل الدرجات أدناه عيّنة من محفظتنا من الماستر باتش الأبيض — ولدينا نطاق أوسع في نسب TiO₂ والراتنجات الحاملة والمعايير التنظيمية. تُورَّد جميع الدرجات مع TDS وCoA.',
  'This is a selection from our full white masterbatch range. Additional grades — including specialty carriers, higher TiO₂ loadings, and custom formulations — are available on request.':
    'هذه مختارات من مجموعتنا الكاملة من الماستر باتش الأبيض. تتوفر عند الطلب درجات إضافية — تشمل حوامل خاصة ونسب TiO₂ أعلى وتركيبات مخصصة.',
  'TiO₂ rutile grade — superior opacity and brightness': 'TiO₂ بدرجة الروتيل — عتامة وسطوع فائقان',
  'PE and PP carrier systems for wide compatibility': 'أنظمة حاملة PE وPP لتوافق واسع',
  'Food-contact compliant grades (EU 10/2011 & FDA)': 'درجات مطابقة لملامسة الأغذية (EU 10/2011 وFDA)',
  'Consistent blue-white tones with high CIE whiteness index': 'درجات بياض مائلة للأزرق ثابتة مع مؤشر بياض CIE مرتفع',
  'Excellent dispersion — no agglomerates or streaks': 'تشتّت ممتاز — دون تكتلات أو خطوط',
  'Available in standard 25 kg bags and 500 kg FIBC': 'متوفر في أكياس قياسية 25 كجم وأكياس FIBC بوزن 500 كجم',
  'PET / PBT': 'PET / PBT', 'PA (Nylon)': 'PA (نايلون)',
  'High Opacity': 'عتامة عالية', 'Ultra High': 'عالٍ جداً', 'Economy': 'اقتصادي',
  'FDA + EU': 'FDA + EU', 'PET Grade': 'درجة PET',
  '40% TiO₂ + filler': '40% TiO₂ + حشو', '40% TiO₂ + 40% CaCO₃': '40% TiO₂ + 40% CaCO₃',
  '40% TiO₂ + 30% filler': '40% TiO₂ + 30% حشو', '70% TiO₂ + 12% filler': '70% TiO₂ + 12% حشو',
  '78% ash': 'رماد 78%', '80% ash': 'رماد 80%', '75% ash': 'رماد 75%', '65% ash': 'رماد 65%', '50% ash': 'رماد 50%',
  'Film, Inj. moulding, Blow moulding': 'أفلام، القولبة بالحقن، القولبة بالنفخ',
  'PET — Inj. moulding, Extrusion, Blow moulding': 'PET — القولبة بالحقن، البثق، القولبة بالنفخ',
  'WMB-PE Series': 'سلسلة WMB-PE', 'LDPE/LLDPE carrier · Blown & cast film': 'حامل LDPE/LLDPE · أفلام النفخ والأفلام المصبوبة',
  'White MB PE Series': 'ماستر باتش أبيض — سلسلة PE',
  'WMB-PP Series': 'سلسلة WMB-PP', 'PP Homopolymer carrier · Raffia & film': 'حامل PP هوموبوليمر · الرافيا والأفلام',
  'White MB PP Series': 'ماستر باتش أبيض — سلسلة PP',
  'Food-Contact Grade': 'درجة ملامسة الأغذية', 'EU 10/2011 & FDA compliant': 'مطابق لـ EU 10/2011 وFDA',
  'White MB Food-Contact Grade': 'ماستر باتش أبيض — درجة ملامسة الأغذية',
  'Where White Masterbatch Is Used': 'أين يُستخدم الماستر باتش الأبيض',
  'White masterbatch is a core component across packaging, agriculture, and consumer goods — anywhere high opacity, whiteness, and TiO₂ performance are required.':
    'الماستر باتش الأبيض مكوّن أساسي في التغليف والزراعة والسلع الاستهلاكية — أينما لزمت العتامة العالية والبياض وأداء TiO₂.',
  'White food packaging, lamination film, stand-up pouches, and retail bags. White MB delivers the opacity and brightness required for branded packaging.':
    'تغليف الأغذية الأبيض وأفلام التصفيح والأكياس القائمة وأكياس التجزئة. يمنح الماستر باتش الأبيض العتامة والسطوع المطلوبين للتغليف ذي العلامة التجارية.',
  'Stand-Up Pouches': 'الأكياس القائمة',
  'White mulch film for soil temperature control, tunnel covers, and greenhouse film. Provides reflectivity and UV performance required for agricultural applications.':
    'أفلام المالش البيضاء للتحكم في حرارة التربة وأغطية الأنفاق وأفلام البيوت المحمية. يوفّر الانعكاسية وأداء UV المطلوبين للتطبيقات الزراعية.',
  'Tunnel Covers': 'أغطية الأنفاق', 'Greenhouse': 'البيوت المحمية',
  'White containers, caps, closures, and household products in PE and PP. White MB ensures batch-consistent whiteness across injection moulded and blown parts.':
    'الحاويات والأغطية والسدادات والمنتجات المنزلية البيضاء من PE وPP. يضمن الماستر باتش الأبيض بياضاً متسقاً بين الدفعات في القطع المقولبة بالحقن والمنفوخة.',
  'Containers': 'الحاويات',
  'White hygiene nonwovens for diapers, wipes, and medical textiles. Food-contact and medical-grade white MB available on request.':
    'أقمشة النظافة الشخصية البيضاء غير المنسوجة للحفاضات والمناديل والمنسوجات الطبية. يتوفر عند الطلب ماستر باتش أبيض لملامسة الأغذية وبدرجة طبية.',
  'Hygiene NW': 'أقمشة نظافة', 'Medical Textile': 'منسوجات طبية',
  'Get White Masterbatch Pricing': 'احصل على أسعار الماستر باتش الأبيض',
  'Select White MB Grade': 'اختر درجة الماستر باتش الأبيض',
  'TiO₂ / Content': 'TiO₂ / المحتوى',

  // ── Black ──
  'BMB Series': 'سلسلة BMB',
  'High-structure carbon black concentrates engineered for jet-black depth and 10+ year UV protection — for pipes, agricultural film, cable jacketing, and outdoor applications.':
    'مركّزات أسود كربون عالي البنية مصمَّمة لعمق أسود فاحم وحماية من الأشعة فوق البنفسجية تتجاوز 10 سنوات — للمواسير والأفلام الزراعية وعزل الكابلات والتطبيقات الخارجية.',
  'What Is Black Masterbatch?': 'ما هو الماستر باتش الأسود؟',
  'Carbon Black Concentrates for UV Protection and Depth': 'مركّزات أسود الكربون للحماية من UV وللعمق اللوني',
  'Black masterbatch is a concentrated dispersion of high-structure carbon black in a polymer carrier resin. Carbon black delivers deep, uniform black colouration and, critically, functions as a UV absorber — protecting the polymer matrix from photodegradation under prolonged outdoor exposure.':
    'الماستر باتش الأسود تشتّت مركَّز من أسود الكربون عالي البنية في راتنج حامل بوليمري. يمنح أسود الكربون لوناً أسود عميقاً وموحداً، والأهم أنه يعمل كماصّ للأشعة فوق البنفسجية — فيحمي مصفوفة البوليمر من التحلل الضوئي عند التعرض الخارجي الطويل.',
  'Black MB is used across PE, PP, and HDPE applications wherever consistent black depth, UV stability, and long service life are required — from agricultural film and pipe systems to cable jacketing.':
    'يُستخدم الماستر باتش الأسود في تطبيقات PE وPP وHDPE أينما لزم عمق أسود ثابت وثبات أمام UV وعمر خدمة طويل — من الأفلام الزراعية وأنظمة المواسير إلى عزل الكابلات.',
  'UV Protection': 'الحماية من UV',
  '10+ Year Outdoor Performance': 'أداء خارجي يتجاوز 10 سنوات',
  'High-structure carbon black absorbs UV radiation and converts it to heat, preventing chain scission in the polymer matrix. Multiple PE-carrier grades are rated for extended outdoor service life in agricultural, cable, and pipe applications.':
    'يمتص أسود الكربون عالي البنية الأشعة فوق البنفسجية ويحوّلها إلى حرارة، فيمنع تقطّع سلاسل البوليمر. وتُصنَّف عدة درجات على حامل PE لعمر خدمة خارجي ممتد في التطبيقات الزراعية والكابلات والمواسير.',
  'Grade Range': 'نطاق الدرجات',
  'PE, PP & PET Systems': 'أنظمة PE وPP وPET',
  '15 grades across PE, PP, and PET carriers — covering standard film, food-contact, filled, and fibre/filament applications. CB loadings from 30% to 60%. Custom grades available on request.':
    '15 درجة على حوامل PE وPP وPET — تغطي الأفلام القياسية وملامسة الأغذية والدرجات المحشوة وتطبيقات الألياف والخيوط. نسب أسود الكربون من 30% إلى 60%. تتوفر درجات مخصصة عند الطلب.',
  'Standard range shown — custom carbon black loadings, carrier systems, and application-specific formulations available on request.':
    'يُعرض النطاق القياسي — تتوفر عند الطلب نسب تحميل أسود كربون وأنظمة حاملة وتركيبات مخصصة لتطبيقات محددة.',
  'The grades below represent a sample of our black masterbatch portfolio — we carry a broader range across CB loadings, carrier resins, and food-contact standards. All grades supplied with TDS and CoA.':
    'تمثّل الدرجات أدناه عيّنة من محفظتنا من الماستر باتش الأسود — ولدينا نطاق أوسع في نسب أسود الكربون والراتنجات الحاملة ومعايير ملامسة الأغذية. تُورَّد جميع الدرجات مع TDS وCoA.',
  'This is a selection from our full black masterbatch range. Additional grades — including speciality CB loadings, UV-stable agricultural grades, and pipe-certified concentrates — are available on request.':
    'هذه مختارات من مجموعتنا الكاملة من الماستر باتش الأسود. تتوفر عند الطلب درجات إضافية — تشمل نسب أسود كربون خاصة ودرجات زراعية مقاومة لـ UV ومركّزات معتمدة للمواسير.',
  'High-structure carbon black for superior UV protection': 'أسود كربون عالي البنية لحماية فائقة من UV',
  'PE and PP carrier systems — broad process compatibility': 'أنظمة حاملة PE وPP — توافق واسع مع عمليات التصنيع',
  'UV-stable grades rated for 10+ year outdoor performance': 'درجات مقاومة لـ UV بأداء خارجي يتجاوز 10 سنوات',
  'Pipe-grade concentrate meeting PE100 colour requirements': 'مركّز بدرجة المواسير يلبّي متطلبات لون PE100',
  'Cable-grade with excellent dispersion and volume resistivity': 'درجة للكابلات بتشتّت ممتاز ومقاومة حجمية عالية',
  'Tight batch-to-batch colour consistency — jet black, no grey tone': 'اتساق لوني دقيق بين الدفعات — أسود فاحم دون درجة رمادية',
  'High CB': 'أسود كربون عالٍ', 'Food Grade': 'درجة غذائية', 'PP Food Grade': 'PP بدرجة غذائية', 'PP Grade': 'درجة PP', 'PET Fibre': 'ألياف PET',
  '40% CB': '40% أسود كربون', '60% CB': '60% أسود كربون', '45% CB': '45% أسود كربون', '35% CB': '35% أسود كربون', '30% CB': '30% أسود كربون',
  '35% CB + 25% ash': '35% أسود كربون + 25% رماد', '19% CB + 60% filler': '19% أسود كربون + 60% حشو',
  'Inj./Roto moulding, Extrusion, Blow moulding': 'القولبة بالحقن/الدوارة، البثق، القولبة بالنفخ',
  'Fibres, filament, Inj. moulding, Extrusion': 'ألياف وخيوط، القولبة بالحقن، البثق',
  'Polyester filament & fibre, high-speed spinning': 'خيوط وألياف البوليستر، غزل عالي السرعة',
  'BMB-PE Series': 'سلسلة BMB-PE', 'PE carrier · Film & general applications': 'حامل PE · الأفلام والتطبيقات العامة',
  'Black MB PE Series': 'ماستر باتش أسود — سلسلة PE',
  'BMB-PP Series': 'سلسلة BMB-PP', 'PP carrier · Raffia, woven, non-woven': 'حامل PP · الرافيا والمنسوج وغير المنسوج',
  'Black MB PP Series': 'ماستر باتش أسود — سلسلة PP',
  'Pipe Grade (BMB-PIPE)': 'درجة المواسير (BMB-PIPE)', 'HDPE carrier · PE100 pipe systems': 'حامل HDPE · أنظمة مواسير PE100',
  'Black MB Pipe Grade': 'ماستر باتش أسود — درجة المواسير',
  'Cable Grade (BMB-CAB)': 'درجة الكابلات (BMB-CAB)', 'LDPE carrier · Cable jacketing': 'حامل LDPE · عزل الكابلات',
  'Black MB Cable Grade': 'ماستر باتش أسود — درجة الكابلات',
  'Pipe & Fittings': 'المواسير والوصلات', 'Cable Jacketing': 'عزل الكابلات', 'Conduit': 'مواسير الحماية',
  'Where Black Masterbatch Is Used': 'أين يُستخدم الماستر باتش الأسود',
  'Black masterbatch serves critical UV protection and aesthetic roles across agriculture, infrastructure, cable, and packaging — wherever deep, consistent black is required.':
    'يؤدي الماستر باتش الأسود أدواراً حاسمة في الحماية من UV والمظهر الجمالي في الزراعة والبنية التحتية والكابلات والتغليف — أينما لزم أسود عميق وثابت.',
  'Black mulch film for weed suppression and soil moisture retention, silage stretch film, and UV-stable irrigation pipe. BMB-PE40 is rated for extended outdoor exposure.':
    'أفلام المالش السوداء لمنع الأعشاب والحفاظ على رطوبة التربة، وأفلام السيلاج المطاطية، وأنابيب الري المقاومة لـ UV. صُنّفت BMB-PE40 للتعرض الخارجي الممتد.',
  'Silage Film': 'أفلام السيلاج', 'Irrigation Pipe': 'أنابيب الري',
  'PE100 water mains, gas distribution pipes, and sewage systems. BMB-PIPE meets the specific carbon black dispersion and loading requirements for pressure pipe systems.':
    'خطوط المياه الرئيسية وأنابيب توزيع الغاز وأنظمة الصرف من PE100. تلبّي BMB-PIPE متطلبات تشتّت ونسب أسود الكربون الخاصة بأنظمة المواسير المضغوطة.',
  'PE100 Pipe': 'مواسير PE100', 'Gas Pipe': 'مواسير الغاز', 'Water Mains': 'خطوط المياه الرئيسية',
  'Cable jacketing, conduit, and insulation for power and telecommunications. BMB-CAB provides the volume resistivity and UV stability required for outdoor cable systems.':
    'عزل الكابلات ومواسير الحماية والعزل لكابلات الطاقة والاتصالات. توفّر BMB-CAB المقاومة الحجمية وثبات UV المطلوبين لأنظمة الكابلات الخارجية.',
  'Insulation': 'العزل',
  'Black packaging film, barrier bags, and agricultural packaging. Black MB delivers deep jet-black colour with no grey tone across blown and cast film lines.':
    'أفلام التغليف السوداء وأكياس الحاجز والتغليف الزراعي. يمنح الماستر باتش الأسود لوناً أسود فاحماً عميقاً دون درجة رمادية في خطوط الأفلام المنفوخة والمصبوبة.',
  'Black Film': 'أفلام سوداء', 'Barrier Bags': 'أكياس الحاجز',
  'LDPE / LLDPE Carrier': 'حامل LDPE / LLDPE', 'PP Carrier': 'حامل PP', 'HDPE Carrier': 'حامل HDPE',
  '25–40% CB Loading': 'نسبة أسود كربون 25–40%',
  'Get Black Masterbatch Pricing': 'احصل على أسعار الماستر باتش الأسود',
  'Select Black MB Grade': 'اختر درجة الماستر باتش الأسود',
  'CB / Content': 'أسود الكربون / المحتوى',

  // ── Colour ──
  'Full Spectrum Solutions': 'حلول شاملة لكل الألوان',
  'Exact colour matching across RAL and Pantone systems, custom colour development, and food-contact compliant grades — for PE, PP, PS, ABS, PA, PC, and PET.':
    'مطابقة لونية دقيقة عبر أنظمة RAL وPantone، وتطوير ألوان مخصصة، ودرجات مطابقة لملامسة الأغذية — لـ PE وPP وPS وABS وPA وPC وPET.',
  'Request Colour Sample': 'اطلب عيّنة لونية', 'View Colour Families': 'عرض عائلات الألوان',
  'What Is Colour Masterbatch?': 'ما هو الماستر باتش الملوّن؟',
  'Pigment Concentrates Across Every Major Polymer': 'مركّزات صبغات لكل البوليمرات الرئيسية',
  'Colour masterbatch is a highly concentrated blend of pigments and dyes dispersed in a compatible carrier resin. It is added to natural polymer at the processing stage to introduce precise, reproducible colour — without the handling hazards or batch inconsistencies of raw pigment powder.':
    'الماستر باتش الملوّن مزيج شديد التركيز من الصبغات والأصباغ مشتّت في راتنج حامل متوافق. يُضاف إلى البوليمر الطبيعي في مرحلة المعالجة لإعطاء لون دقيق قابل للتكرار — دون مخاطر التعامل مع مسحوق الصبغة الخام أو تفاوت الدفعات.',
  'Colour Development': 'تطوير الألوان', 'RAL, Pantone & Custom Matching': 'مطابقة RAL وPantone وألوان مخصصة',
  'Submit a physical sample, RAL code, Pantone reference, or hex value. Matched pellets and a full ΔE measurement report are returned within 5 business days. Batch-to-batch ΔE ≤ 0.5 guaranteed in production.':
    'أرسل عيّنة فعلية أو رمز RAL أو مرجع Pantone أو قيمة hex. نعيد إليك حبيبات مطابقة وتقرير قياس ΔE كاملاً خلال 5 أيام عمل. نضمن ΔE ≤ 0.5 بين الدفعات في الإنتاج.',
  'Food-Contact & Regulatory': 'ملامسة الأغذية والمتطلبات التنظيمية', 'EU 10/2011 & FDA Compliant': 'مطابق لـ EU 10/2011 وFDA',
  'Food-contact grades available for PE, PP, and PET substrates. Full regulatory documentation supplied — EU Regulation 10/2011 and FDA 21 CFR declarations provided on request.':
    'تتوفر درجات ملامسة الأغذية لركائز PE وPP وPET. تُورَّد الوثائق التنظيمية كاملة — وتُقدَّم إقرارات لائحة الاتحاد الأوروبي 10/2011 وFDA 21 CFR عند الطلب.',
  'Product Range': 'مجموعة المنتجات', 'Colour Product Families': 'عائلات منتجات الألوان',
  'The families below represent a sample of our colour masterbatch range — we carry over 2,000 stocked references plus full custom development capability. All grades supplied with TDS and CoA.':
    'تمثّل العائلات أدناه عيّنة من مجموعتنا من الماستر باتش الملوّن — لدينا أكثر من 2,000 مرجع لوني في المخزون إضافةً إلى قدرة كاملة على التطوير المخصص. تُورَّد جميع الدرجات مع TDS وCoA.',
  "Contact us with your colour target and we'll match it.": 'تواصل معنا بلونك المستهدف وسنطابقه لك.',
  'Standard Colours': 'الألوان القياسية', 'RAL & Pantone library': 'مكتبة RAL وPantone',
  'Over 2,000 stocked references across RAL Classic, RAL Design, and Pantone TPX systems — ready for immediate sampling.':
    'أكثر من 2,000 مرجع لوني في المخزون عبر أنظمة RAL Classic وRAL Design وPantone TPX — جاهزة للعيّنات الفورية.',
  'Custom Matching': 'مطابقة مخصصة', 'Colour lab service': 'خدمة مختبر الألوان',
  'Submit a physical sample, brand reference, or colour code. We return matched pellets and a ΔE report within 5 business days.':
    'أرسل عيّنة فعلية أو مرجعاً لعلامتك أو رمزاً لونياً. نعيد إليك حبيبات مطابقة وتقرير ΔE خلال 5 أيام عمل.',
  'Food-Contact Grades': 'درجات ملامسة الأغذية', 'EU 10/2011 & FDA': 'EU 10/2011 وFDA',
  'White, black, and colour masterbatch grades compliant with EU 10/2011 Regulation and FDA 21 CFR for food packaging applications.':
    'درجات ماستر باتش أبيض وأسود وملوّن مطابقة للائحة EU 10/2011 وFDA 21 CFR لتطبيقات تغليف الأغذية.',
  'UV-Stable Colours': 'ألوان مقاومة لـ UV', 'Lightfastness 7–8': 'ثبات الضوء 7–8',
  'Outdoor-grade colours with ISO 105-B02 lightfastness ratings ≥7. Suitable for agricultural film, pipe, and construction profiles.':
    'ألوان للاستخدام الخارجي بتصنيف ثبات ضوء ISO 105-B02 ≥ 7. مناسبة للأفلام الزراعية والمواسير وبروفايلات الإنشاءات.',
  'Masterbatch for Film': 'ماستر باتش للأفلام', 'Blown & cast film grades': 'درجات الأفلام المنفوخة والمصبوبة',
  'Low MFI concentrates designed for thin film lines — excellent dispersibility, no gels, optimised let-down ratios.':
    'مركّزات منخفضة MFI مصمَّمة لخطوط الأفلام الرقيقة — قابلية تشتّت ممتازة دون جيلات ونسب تخفيف مُحسَّنة.',
  'Engineering Polymer Grades': 'درجات البوليمرات الهندسية', 'ABS · PA · PC · PET': 'ABS · PA · PC · PET',
  'High-temperature stable pigment systems for ABS, polyamide, polycarbonate, and PET resins.':
    'أنظمة صبغات مستقرة عند درجات الحرارة العالية لراتنجات ABS والبولي أميد والبولي كربونات وPET.',
  'This is a sample of our colour capabilities. We match any RAL, Pantone, or physical reference across all major carrier resins — with ΔE ≤ 0.5 batch consistency.':
    'هذه عيّنة من قدراتنا اللونية. نطابق أي مرجع RAL أو Pantone أو مرجع فعلي عبر كل الراتنجات الحاملة الرئيسية — باتساق بين الدفعات ΔE ≤ 0.5.',
  'Contact us to request a sample or start a colour development project.': 'تواصل معنا لطلب عيّنة أو لبدء مشروع تطوير لون.',
  'Coraplast-sourced — ISO 9001 and ISO 14001 certified manufacturing': 'مصدره Coraplast — تصنيع حاصل على شهادتي ISO 9001 وISO 14001',
  'Consistent batch-to-batch ΔE ≤ 0.5 across production runs': 'اتساق ΔE ≤ 0.5 بين الدفعات في كل دورات الإنتاج',
  'Wide carrier compatibility — PE, PP, PS, ABS, PA, PC, PET': 'توافق واسع مع الحوامل — PE وPP وPS وABS وPA وPC وPET',
  'Typical let-down ratio 1–3% for standard applications': 'نسبة تخفيف نموذجية 1–3% للتطبيقات القياسية',
  'Food-contact grades available with full regulatory documentation': 'درجات ملامسة الأغذية متوفرة مع وثائق تنظيمية كاملة',
  'Custom development from physical sample or digital colour reference': 'تطوير مخصص من عيّنة فعلية أو مرجع لوني رقمي',
  'Where Colour Masterbatch Is Used': 'أين يُستخدم الماستر باتش الملوّن',
  'Colour masterbatch is used wherever colour consistency, brand matching, and substrate compatibility are critical — from consumer packaging to technical automotive parts.':
    'يُستخدم الماستر باتش الملوّن أينما كان اتساق اللون ومطابقة العلامة التجارية وتوافق الركيزة أمراً حاسماً — من تغليف المستهلك إلى قطع السيارات الفنية.',
  'Coloured packaging, household products, toys, and personal care containers. Colour MB enables brand-consistent RAL/Pantone shades across PE and PP substrates.':
    'التغليف الملوّن والمنتجات المنزلية والألعاب وعبوات العناية الشخصية. يتيح الماستر باتش الملوّن درجات RAL/Pantone متسقة مع هوية العلامة على ركائز PE وPP.',
  'Personal Care': 'العناية الشخصية', 'Toys': 'الألعاب', 'Packaging & Retail': 'التغليف والتجزئة',
  'Branded retail packaging, coloured film, and decorative bags. Custom colour development from reference samples or RAL/Pantone codes with ΔE ≤ 0.5 consistency.':
    'تغليف التجزئة ذو العلامة التجارية والأفلام الملوّنة والأكياس الزخرفية. تطوير ألوان مخصص من عيّنات مرجعية أو رموز RAL/Pantone باتساق ΔE ≤ 0.5.',
  'Retail Packaging': 'تغليف التجزئة', 'Coloured Film': 'أفلام ملوّنة', 'Bags': 'الأكياس', 'Automotive': 'السيارات',
  'Interior trim components, technical parts, and under-bonnet applications in PP and PA compounds. Colour matched to OEM specifications with heat-stable pigment systems.':
    'مكونات التجهيزات الداخلية والقطع الفنية وتطبيقات أسفل الغطاء في مركّبات PP وPA. ألوان مطابقة لمواصفات مصنّعي المعدات الأصلية بأنظمة صبغات مقاومة للحرارة.',
  'Interior Trim': 'التجهيزات الداخلية', 'Technical Parts': 'قطع فنية', 'PP Compounds': 'مركّبات PP',
  'Textiles & Non-Woven': 'المنسوجات وغير المنسوجة',
  'Coloured fibres, carpet backing yarns, and coloured non-wovens. Colour MB in PP carrier for fibre and non-woven applications with controlled MFI.':
    'الألياف الملوّنة وخيوط دعم السجاد والأقمشة غير المنسوجة الملوّنة. ماستر باتش ملوّن على حامل PP لتطبيقات الألياف وغير المنسوجة بـ MFI مضبوط.',
  'Coloured Fibre': 'ألياف ملوّنة', 'Carpet Yarn': 'خيوط السجاد', 'NW Fabric': 'أقمشة غير منسوجة',
  'Request a Sample or Quote': 'اطلب عيّنة أو عرض سعر',
  'Get a Colour Masterbatch Quote': 'احصل على عرض سعر للماستر باتش الملوّن',
  "Share your colour target, carrier resin, and required volume — we'll respond within 24 hours with pricing and a matched sample.":
    'شاركنا لونك المستهدف والراتنج الحامل والكمية المطلوبة — وسنرد خلال 24 ساعة بالسعر وعيّنة مطابقة.',
  'LDPE / LLDPE': 'LDPE / LLDPE', 'PS / HIPS': 'PS / HIPS', 'PA · PC · PET': 'PA · PC · PET',

  // ── Additive ──
  'AMB Series': 'سلسلة AMB',
  'Precision performance additives that extend product life, improve processing, and meet compliance requirements — UV stabilisers, slip, antiblock, anti-static, anti-fog, processing aids, and optical brighteners.':
    'إضافات أداء دقيقة تطيل عمر المنتج وتحسّن المعالجة وتلبّي متطلبات الامتثال — مثبّتات UV والمواد المنزلقة ومانعة الالتصاق والمضادة للكهرباء الساكنة والمضادة للضباب ومساعدات المعالجة والمبيّضات الضوئية.',
  'What Is Additive Masterbatch?': 'ما هو ماستر باتش الإضافات؟',
  'Functional Performance Additives in Carrier Systems': 'إضافات أداء وظيفية في أنظمة حاملة',
  'Additive masterbatch is a concentrated carrier system for functional performance additives. Rather than handling and dosing raw additives directly, processors blend additive MB into their base resin at a controlled let-down ratio to achieve precise, uniform additive distribution throughout the finished part.':
    'ماستر باتش الإضافات نظام حامل مركَّز لإضافات الأداء الوظيفية. فبدلاً من التعامل مع الإضافات الخام وجرعتها مباشرة، يخلط المصنّعون ماستر باتش الإضافات في الراتنج الأساسي بنسبة تخفيف مضبوطة لتحقيق توزيع دقيق ومتجانس للإضافة في القطعة النهائية.',
  'It is used wherever polymer performance beyond colour or opacity is required — extending product life, improving processing, and meeting regulatory compliance requirements.':
    'يُستخدم أينما لزم أداء بوليمر يتجاوز اللون أو العتامة — لإطالة عمر المنتج وتحسين المعالجة والامتثال للمتطلبات التنظيمية.',
  'Technical Documentation': 'الوثائق الفنية', 'TDS, CoA & Dosage Support': 'TDS وCoA ودعم الجرعات',
  'Every grade is supplied with a Technical Data Sheet, Certificate of Analysis, and recommended dosage guidance. Technical support is available throughout the trial and conversion period.':
    'تُورَّد كل درجة مع نشرة بيانات فنية وشهادة تحليل وإرشادات الجرعة الموصى بها. والدعم الفني متاح طوال فترة التجارب والتحويل.',
  'Carrier & Combination on Request': 'الحامل والتركيبات المركّبة عند الطلب',
  'Additive MB can be produced in LDPE, PP, or HDPE carrier systems with tailored additive concentrations. Combined formulations — such as UV stabiliser + anti-static — are available on request.':
    'يمكن إنتاج ماستر باتش الإضافات على أنظمة حاملة LDPE أو PP أو HDPE بتركيزات إضافات مخصصة. وتتوفر عند الطلب تركيبات مجمّعة — مثل مثبّت UV مع مضاد للكهرباء الساكنة.',
  'Full standard range shown — custom concentrations, carrier systems, and multi-function combinations available on request.':
    'يُعرض النطاق القياسي الكامل — تتوفر عند الطلب تركيزات وأنظمة حاملة وتركيبات متعددة الوظائف مخصصة.',
  'Our full additive masterbatch portfolio across UV, slip, antiblock, anti-static, anti-fog, processing aid, desiccant, and optical brightener categories. All grades supplied with TDS and CoA.':
    'محفظتنا الكاملة من ماستر باتش الإضافات عبر فئات UV والمواد المنزلقة ومانعة الالتصاق والمضادة للكهرباء الساكنة والمضادة للضباب ومساعدات المعالجة والمجففات والمبيّضات الضوئية. تُورَّد جميع الدرجات مع TDS وCoA.',
  'Contact us to discuss a specific requirement or custom formulation.': 'تواصل معنا لمناقشة متطلب محدد أو تركيبة مخصصة.',
  'This is our full additive masterbatch range across UV, slip, antiblock, anti-static, anti-fog, processing aid, desiccant, and optical brightener categories. Custom concentrations, carrier systems, and combination formulations are available on request.':
    'هذه مجموعتنا الكاملة من ماستر باتش الإضافات عبر فئات UV والمواد المنزلقة ومانعة الالتصاق والمضادة للكهرباء الساكنة والمضادة للضباب ومساعدات المعالجة والمجففات والمبيّضات الضوئية. تتوفر عند الطلب تركيزات وأنظمة حاملة وتركيبات مركّبة مخصصة.',
  'HALS-based UV stabilisers rated for 10+ year outdoor performance': 'مثبّتات UV أساسها HALS بأداء خارجي يتجاوز 10 سنوات',
  'Slip and antiblock agents for film-to-film release and anti-stick': 'مواد منزلقة ومانعة للالتصاق لفصل الأفلام ومنع التصاقها',
  'Anti-static grades for PE and PS — electronic and technical packaging': 'درجات مضادة للكهرباء الساكنة لـ PE وPS — للتغليف الإلكتروني والفني',
  'Processing aids reduce die buildup, melt fracture, and downtime — PFAS-free option available': 'تقلّل مساعدات المعالجة تراكم القالب وكسر الانصهار ووقت التوقف — مع خيار خالٍ من PFAS',
  'Anti-fog grades for fresh produce and greenhouse film clarity': 'درجات مضادة للضباب للمنتجات الطازجة ووضوح أفلام البيوت المحمية',
  'All grades supplied with TDS, CoA, and technical dosage guidance': 'تُورَّد جميع الدرجات مع TDS وCoA وإرشادات الجرعة الفنية',
  'Greenhouse film, mulch, irrigation pipe': 'أفلام البيوت المحمية والمالش وأنابيب الري',
  'Raffia, woven sacks, outdoor fibre': 'الرافيا والأكياس المنسوجة والألياف الخارجية',
  '10% HALS': '10% HALS', '20% HALS': '20% HALS', '15% HALS': '15% HALS', '20% HALS + CaCO₃': '20% HALS + CaCO₃',
  '10% Oleamide': '10% أوليأميد', '5% Oleamide': '5% أوليأميد', '5% Erucamide': '5% إيروكاميد',
  'Blown film, bags, flexible packaging': 'أفلام النفخ والأكياس والتغليف المرن',
  '20% Natural Silica': '20% سيليكا طبيعية', 'Film, packaging, food-contact bags': 'الأفلام والتغليف وأكياس ملامسة الأغذية', 'Antiblock': 'مانع التصاق',
  '20% Silica + 5% Oleamide': '20% سيليكا + 5% أوليأميد', 'Blown film — combined slip/antiblock': 'أفلام النفخ — منزلق/مانع التصاق مركّب', 'Slip + Antiblock': 'منزلق + مانع التصاق',
  '15% Antistatic': '15% مضاد للكهرباء الساكنة', 'Electronic packaging, technical film': 'التغليف الإلكتروني والأفلام الفنية',
  '7.5% Antistatic + Talc': '7.5% مضاد للكهرباء الساكنة + تلك', 'Foam & rigid packaging, electronics trays': 'الفوم والتغليف الصلب وصواني الإلكترونيات',
  '5% Antistatic + CaCO₃': '5% مضاد للكهرباء الساكنة + CaCO₃',
  '12% Anti-fog': '12% مضاد للضباب', 'Fresh produce film, greenhouse film': 'أفلام المنتجات الطازجة والبيوت المحمية',
  '3% PPA': '3% PPA', '1% PPA': '1% PPA', '2% PPA': '2% PPA', '1% PPA + 1% AO': '1% PPA + 1% AO', '0.5% PPA + 0.5% AO': '0.5% PPA + 0.5% AO', '5% PFAS-Free PPA': '5% PPA خالٍ من PFAS',
  'Blown film, extrusion — reduces die buildup & melt fracture': 'أفلام النفخ والبثق — يقلّل تراكم القالب وكسر الانصهار',
  'Blown film, extrusion — PPA with antioxidant package': 'أفلام النفخ والبثق — PPA مع حزمة مضادات أكسدة',
  'Blown film, extrusion — PFAS-free processing aid': 'أفلام النفخ والبثق — مساعد معالجة خالٍ من PFAS',
  'Processing Aid': 'مساعد معالجة', 'Slip Agent': 'مادة منزلقة',
  '75% Desiccant': '75% مجفّف', 'Moisture scavenging for hygroscopic & recycled resin': 'امتصاص الرطوبة للراتنجات الماصّة للماء والمُعاد تدويرها', 'Desiccant': 'مجفّف',
  'Optical Brightener': 'مبيّض ضوئي', 'Film, fibre, injection moulding — enhances whiteness': 'الأفلام والألياف والقولبة بالحقن — يعزّز البياض',
  'UV Stabiliser (UVS)': 'مثبّت UV (UVS)', 'HALS-based · Outdoor & agricultural': 'أساسه HALS · للاستخدام الخارجي والزراعي',
  'Slip / Antiblock (SLIP/AB)': 'منزلق / مانع التصاق (SLIP/AB)', 'Oleamide/Erucamide slip · Silica antiblock': 'منزلق أوليأميد/إيروكاميد · مانع التصاق سيليكا',
  'Anti-static (AST)': 'مضاد للكهرباء الساكنة (AST)', 'PE & PS grades · Film & packaging': 'درجات PE وPS · الأفلام والتغليف',
  'Anti-fog (AFG)': 'مضاد للضباب (AFG)', 'Fresh produce & greenhouse film': 'المنتجات الطازجة وأفلام البيوت المحمية',
  'Processing Aid (PPA)': 'مساعد معالجة (PPA)', 'Standard & PFAS-free options': 'خيارات قياسية وخالية من PFAS',
  'Desiccant / Optical Brightener': 'مجفّف / مبيّض ضوئي', 'Moisture control · Whiteness enhancement': 'التحكم بالرطوبة · تعزيز البياض',
  'Raffia / Woven Sacks': 'الرافيا / الأكياس المنسوجة', 'Electronic Packaging': 'التغليف الإلكتروني', 'Fibre & Yarn': 'الألياف والخيوط',
  'UV stabilisers (HALS-based) for greenhouse film, mulch, and irrigation pipe, plus anti-fog grades for greenhouse film clarity. Blended with filler or white MB for complete performance packages.':
    'مثبّتات UV (أساسها HALS) لأفلام البيوت المحمية والمالش وأنابيب الري، إضافةً إلى درجات مضادة للضباب لوضوح أفلام البيوت المحمية. تُخلط مع ماستر باتش الحشو أو الأبيض لحزم أداء شاملة.',
  'Anti-fog Grades': 'درجات مضادة للضباب',
  'Antioxidants': 'مضادات الأكسدة', 'PE/PP Pipe': 'مواسير PE/PP',
  'Processing aids with antioxidant packages for long-service-life PE and PP pipe systems. Reduces die buildup and ensures polymer stability through processing.':
    'مساعدات معالجة بحزم مضادات أكسدة لأنظمة مواسير PE وPP طويلة العمر. تقلّل تراكم القالب وتضمن ثبات البوليمر أثناء المعالجة.',
  'UV-stable PP grades for raffia and woven sack applications exposed to outdoor conditions. Consistent HALS loading for extended service life.':
    'درجات PP مقاومة لـ UV لتطبيقات الرافيا والأكياس المنسوجة المعرَّضة للأجواء الخارجية. نسبة HALS ثابتة لعمر خدمة ممتد.',
  'PP Raffia': 'رافيا PP',
  'Slip and antiblock additives for blown film to control COF and prevent blocking. Antistatic MB for packaging of electronics and sensitive goods.':
    'إضافات منزلقة ومانعة للالتصاق لأفلام النفخ للتحكم في معامل الاحتكاك ومنع الالتصاق. وماستر باتش مضاد للكهرباء الساكنة لتغليف الإلكترونيات والبضائع الحساسة.',
  'Slip/Antiblock': 'منزلق/مانع التصاق', 'Antistatic': 'مضاد للكهرباء الساكنة',
  'Where Additive Masterbatch Is Used': 'أين يُستخدم ماستر باتش الإضافات',
  'Additive masterbatch is used across every processing application — wherever performance enhancement beyond colour or filler is needed.':
    'يُستخدم ماستر باتش الإضافات في كل تطبيقات المعالجة — أينما لزم تحسين الأداء بما يتجاوز اللون أو الحشو.',
  'Get Additive Masterbatch Pricing': 'احصل على أسعار ماستر باتش الإضافات',
  "Tell us your additive type, quantity, and application — we'll respond within 24 hours with pricing and samples if needed.":
    'أخبرنا بنوع الإضافة والكمية والتطبيق — وسنرد خلال 24 ساعة بالأسعار والعيّنات عند الحاجة.',
  'Select Additive Type': 'اختر نوع الإضافة',
  'Choose an additive grade or tell us your requirement': 'اختر درجة إضافة أو أخبرنا بمتطلبك',
  'Active': 'المادة الفعّالة',
  'Full-Range Masterbatch': 'مجموعة الماستر باتش الشاملة',
  'Anti-block': 'مانع التصاق',
  'EVA': 'EVA', 'SAN': 'SAN', 'PC': 'PC',
  'Request a Colour Quote': 'اطلب عرض سعر للألوان',
}

export default products
