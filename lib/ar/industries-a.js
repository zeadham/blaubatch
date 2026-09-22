// Industry pages (part 1): shared template, Agriculture, Automotive, Construction, Consumer Goods, Packaging.
const industriesA = {
  // ── shared template ──
  'Recommended Grades': 'الدرجات الموصى بها',
  'View product': 'عرض المنتج',
  'View Products': 'عرض المنتجات',
  'Tell us your application and volume — we\'ll respond within 24 hours with grade recommendations and pricing.':
    'أخبرنا بتطبيقك وحجم الطلب — وسنرد خلال 24 ساعة بتوصيات الدرجات والأسعار.',
  'Select Product Type': 'اختر نوع المنتج',
  'Choose a masterbatch type for your application': 'اختر نوع الماستر باتش المناسب لتطبيقك',
  'Masterbatch for': 'ماستر باتش لقطاع',
  'MANUFACTURED': 'تصنيع محلي',
  'ADDITIVE': 'إضافات',
  'UV STABLE': 'مقاوم لـ UV',
  'UV STABILISER': 'مثبّت UV',
  'ANTI-STATIC': 'مضاد للكهرباء الساكنة',
  'FOOD CONTACT': 'ملامسة الأغذية',
  'OEM COLOUR MATCH': 'مطابقة ألوان المصنّعين',
  'FMPE SERIES': 'سلسلة FMPE', 'FMPP SERIES': 'سلسلة FMPP', 'CMB SERIES': 'سلسلة CMB', 'WMB SERIES': 'سلسلة WMB', 'BMB SERIES': 'سلسلة BMB',
  'BMB-UV SERIES': 'سلسلة BMB-UV',
  'Filler Masterbatch': 'ماستر باتش الحشو',
  'Filler Masterbatch (PE)': 'ماستر باتش الحشو (PE)',
  'Filler Masterbatch (PP)': 'ماستر باتش الحشو (PP)',
  'Filler Masterbatch (FMPE)': 'ماستر باتش الحشو (FMPE)',
  'Filler Masterbatch (FMPP)': 'ماستر باتش الحشو (FMPP)',
  'Colour Masterbatch (OEM match)': 'ماستر باتش ملوّن (مطابقة المصنّعين)',
  'UV Stabiliser MB': 'ماستر باتش مثبّت UV',
  'Anti-static MB': 'ماستر باتش مضاد للكهرباء الساكنة',
  'Anti-static Masterbatch': 'ماستر باتش مضاد للكهرباء الساكنة',
  'Flame Retardant MB': 'ماستر باتش مثبّط للهب',
  'Slip & Antiblock': 'منزلق ومانع التصاق',
  'Slip Additive': 'إضافة منزلقة',
  'UV Additive Masterbatch': 'ماستر باتش إضافات UV',
  'Black MB — Agricultural': 'ماستر باتش أسود — للاستخدام الزراعي',
  'Additive MB UV Stabiliser': 'ماستر باتش إضافات — مثبّت UV',
  'Black MB UV Stable': 'ماستر باتش أسود مقاوم لـ UV',
  'Filler MB PE Series': 'ماستر باتش الحشو — سلسلة PE',
  'Filler MB PP Series': 'ماستر باتش الحشو — سلسلة PP',
  'Additive MB Anti-static': 'ماستر باتش إضافات — مضاد للكهرباء الساكنة',
  'Additive MB Flame Retardant': 'ماستر باتش إضافات — مثبّط للهب',
  'Additive MB Anti-oxidant': 'ماستر باتش إضافات — مضاد للأكسدة',
  'Additive MB Slip/Antiblock': 'ماستر باتش إضافات — منزلق/مانع التصاق',
  'AMB-SA/AB': 'AMB-SA/AB',

  // ── Agriculture ──
  'AGRICULTURE INDUSTRY': 'قطاع الزراعة',
  'Agricultural Film & Covering Applications': 'تطبيقات الأفلام وأغطية الزراعة',
  'From season-length mulch film to multi-year greenhouse covering, our agricultural grades are HALS-stabilised and field-tested for Egypt and MENA climate conditions.':
    'من أفلام المالش الموسمية إلى أغطية البيوت المحمية متعددة السنوات، درجاتنا الزراعية مثبَّتة بـ HALS ومُختبَرة ميدانياً في ظروف المناخ في مصر والشرق الأوسط وشمال أفريقيا.',
  'Black and coloured LLDPE/LDPE mulch film with UV stability rated 1–3 seasons. CaCO₃ filler reduces cost.':
    'أفلام مالش سوداء وملوّنة من LLDPE/LDPE بثبات UV مصنَّف لموسم إلى ثلاثة مواسم. ويخفّض حشو CaCO₃ التكلفة.',
  'Greenhouse Covering Film': 'أفلام تغطية البيوت المحمية',
  'UV-transparent or thermal greenhouse film — UV stabiliser grades rated 3–5 years under continuous exposure.':
    'أفلام بيوت محمية شفافة للأشعة فوق البنفسجية أو حرارية — درجات مثبّت UV مصنَّفة من 3 إلى 5 سنوات تحت التعرض المستمر.',
  'Silage Wrap & Bale Film': 'أغلفة السيلاج وأفلام البالات',
  'Black UV-stable stretch film for silage bales and fodder preservation. Tear-resistant formulations.':
    'أفلام تمدد سوداء مقاومة لـ UV لبالات السيلاج وحفظ الأعلاف. تركيبات مقاومة للتمزق.',
  'Drip Irrigation Tubing': 'أنابيب الري بالتنقيط',
  'Black LLDPE/LDPE tape with UV stabiliser and filler masterbatch for multi-season drip systems.':
    'شرائط LLDPE/LDPE سوداء مع مثبّت UV وماستر باتش حشو لأنظمة الري بالتنقيط متعددة المواسم.',
  'Shade Netting': 'شباك التظليل',
  'PP monofilament shade netting with UV stabiliser masterbatch — 30%, 50%, and 80% shading levels.':
    'شباك تظليل من خيوط PP أحادية مع ماستر باتش مثبّت UV — بنسب تظليل 30% و50% و80%.',
  'Soil Fumigation Film': 'أفلام تعقيم التربة',
  'Clear or black low-thickness LDPE film for solarisation and chemical soil treatment applications.':
    'أفلام LDPE رقيقة شفافة أو سوداء لتعقيم التربة بالتشميس والمعالجة الكيميائية.',
  'HALS (Hindered Amine Light Stabiliser) technology — proven protection in high UV-index regions':
    'تقنية HALS (مثبّتات الضوء الأمينية المعاقة) — حماية مثبتة في المناطق ذات مؤشر UV المرتفع',
  'UV stabiliser loading customised to expected service life: 1 season, 3 years, or 5+ years':
    'نسبة مثبّت UV مخصصة حسب العمر المتوقع: موسم واحد أو 3 سنوات أو أكثر من 5 سنوات',
  'Black carbon black grades provide combined UV protection and soil-heating effect for mulch':
    'درجات أسود الكربون السوداء تجمع بين الحماية من UV وتأثير تسخين التربة في المالش',
  'Filler masterbatch at 5–10% reduces blown film cost without compromising tensile strength':
    'ماستر باتش الحشو بنسبة 5–10% يخفّض تكلفة أفلام النفخ دون المساس بقوة الشد',
  'Available with anti-drip additive for greenhouse film to improve condensation management':
    'متوفر مع إضافة مانعة للتقطير لأفلام البيوت المحمية لتحسين إدارة التكاثف',
  'All agricultural grades supplied with TDS showing UV transmittance and weathering data':
    'تُورَّد جميع الدرجات الزراعية مع TDS يوضّح نفاذية UV وبيانات التعرض للعوامل الجوية',
  'UV protection, filler, and colour grades for all major agricultural film and covering applications.':
    'درجات الحماية من UV والحشو والألوان لكل تطبيقات الأفلام وأغطية الزراعة الرئيسية.',
  'Agricultural Film & Covering': 'الأفلام وأغطية الزراعة',
  'UV Additive Masterbatch ': 'ماستر باتش إضافات UV',
  '70–80% CaCO₃ in LDPE. Used at 5–12% in agricultural film to reduce cost while maintaining the elongation and tear resistance needed in the field.':
    '70–80% CaCO₃ في LDPE. يُستخدم بنسبة 5–12% في الأفلام الزراعية لخفض التكلفة مع الحفاظ على الاستطالة ومقاومة التمزق اللازمتين في الحقل.',
  'Red, green, black, white, and grey for coloured mulch film. Different colours affect soil temperature and weed suppression differently.':
    'الأحمر والأخضر والأسود والأبيض والرمادي لأفلام المالش الملوّنة. تؤثر الألوان المختلفة في حرارة التربة وكبح الأعشاب بشكل مختلف.',
  'Erucamide slip agent for improved film-to-film release in greenhouse and mulch film rolls. Reduces friction during mechanical laying.':
    'مادة منزلقة إيروكاميد لتحسين فصل الأفلام في لفات أفلام البيوت المحمية والمالش. تقلّل الاحتكاك أثناء الفرد الآلي.',
  'Reflective white mulch film grade — increases light reflection to the crop canopy. Used in strawberry, vegetable, and melon cultivation.':
    'درجة أفلام مالش بيضاء عاكسة — تزيد انعكاس الضوء نحو مظلة المحصول. تُستخدم في زراعة الفراولة والخضروات والبطيخ.',
  'UV Stabiliser Additive (AMB-UV10)': 'إضافة مثبّت UV (AMB-UV10)',
  'HALS-based · Mulch & greenhouse film': 'أساسه HALS · أفلام المالش والبيوت المحمية',
  'Black MB — Agricultural (BMB-PE40)': 'ماستر باتش أسود — زراعي (BMB-PE40)',
  'UV stable · Mulch film & drip tape': 'مقاوم لـ UV · أفلام المالش وشرائط التنقيط',
  'LDPE carrier · Cost reduction in film': 'حامل LDPE · خفض التكلفة في الأفلام',
  'Coloured mulch film': 'أفلام مالش ملوّنة',
  'Tunnel Cover Film': 'أفلام أغطية الأنفاق',
  'Twine & Baler Twine': 'خيوط الربط وخيوط المكابس',

  // ── Automotive ──
  'Masterbatch for Automotive': 'ماستر باتش لقطاع السيارات',
  '& Technical Moulding': 'والقولبة الفنية',
  'AUTOMOTIVE INDUSTRY': 'قطاع السيارات',
  'Colour, additive, and filler masterbatch for automotive interior trim, under-hood technical components, injection-moulded housings, and PP/ABS technical parts — heat-stable formulations for demanding processing conditions.':
    'ماستر باتش ملوّن ومضاف وحشو للتجهيزات الداخلية للسيارات، والمكونات الفنية أسفل الغطاء، والأغلفة المقولبة بالحقن، وقطع PP/ABS الفنية — تركيبات مقاومة للحرارة لظروف معالجة قاسية.',
  'Automotive & Technical Applications': 'تطبيقات السيارات والاستخدامات الفنية',
  'Automotive masterbatch must survive high injection temperatures, resist UV in interior applications, and meet OEM colour specifications. Our technical grades are formulated for these demands.':
    'يجب أن يتحمّل ماستر باتش السيارات درجات حرارة الحقن العالية، وأن يقاوم UV في التطبيقات الداخلية، وأن يلبّي مواصفات ألوان المصنّعين. درجاتنا الفنية مُصاغة لهذه المتطلبات.',
  'Interior Trim Components': 'مكونات التجهيزات الداخلية',
  'Dashboard, door panels, console trim in PP, ABS, or PC/ABS — colour matched to OEM RAL/NCS or Pantone specifications.':
    'لوحة العدادات وألواح الأبواب وتجهيزات الكونسول من PP أو ABS أو PC/ABS — بألوان مطابقة لمواصفات RAL/NCS أو Pantone الخاصة بالمصنّع.',
  'Under-hood Technical Parts': 'القطع الفنية أسفل الغطاء',
  'Heat-stable colour and additive masterbatch for battery casings, fluid reservoirs, air ducts, and engine covers in PA and PP.':
    'ماستر باتش ملوّن ومضاف مقاوم للحرارة لأغلفة البطاريات وخزانات السوائل ومجاري الهواء وأغطية المحرك من PA وPP.',
  'Bumpers & Exterior Cladding': 'المصدّات والكسوة الخارجية',
  'UV-stable colour masterbatch for PP bumper fascia, fender extensions, and exterior trim that requires outdoor UV stability.':
    'ماستر باتش ملوّن مقاوم لـ UV لواجهات مصدّات PP وامتدادات الرفارف والتجهيزات الخارجية التي تتطلب ثبات UV في الأجواء المفتوحة.',
  'Foam & Cushioning': 'الفوم والتنجيد',
  'Colour masterbatch for PP foam and seat cushion components; anti-static grades for automotive electronics protection.':
    'ماستر باتش ملوّن لفوم PP ومكونات وسائد المقاعد؛ ودرجات مضادة للكهرباء الساكنة لحماية إلكترونيات السيارات.',
  'Technical Injection Moulding': 'القولبة الفنية بالحقن',
  'Filler masterbatch in PP and HDPE for engineering-class injection mouldings where stiffness and cost optimisation are required.':
    'ماستر باتش حشو في PP وHDPE لقطع الحقن الهندسية التي تتطلب الصلابة وتحسين التكلفة.',
  'Wiring Harness & Connectors': 'حزم الأسلاك والموصلات',
  'IEC-colour-coded masterbatch for automotive wiring harness insulation and connector housings.':
    'ماستر باتش بترميز ألوان IEC لعزل حزم أسلاك السيارات وأغلفة الموصلات.',
  'Heat-stable pigment systems — processed at 220–280°C without colour shift or plate-out':
    'أنظمة صبغات مقاومة للحرارة — تُعالَج عند 220–280°م دون تغيّر لوني أو ترسّب على القالب',
  'Light-stable grades with UV absorbers for interior trim subject to solar load':
    'درجات ثابتة للضوء مع ماصّات UV للتجهيزات الداخلية المعرَّضة للحمل الشمسي',
  'OEM colour matching capability — RAL, NCS, Pantone, or colour chip references accepted':
    'قدرة على مطابقة ألوان المصنّعين — نقبل مراجع RAL وNCS وPantone أو شرائح الألوان',
  'Filler masterbatch improves rigidity and reduces shrinkage in large-format structural PP parts':
    'يحسّن ماستر باتش الحشو الصلابة ويقلّل الانكماش في قطع PP الإنشائية كبيرة الحجم',
  'Anti-static additive prevents dust attraction in instrument clusters and electronic housings':
    'تمنع الإضافة المضادة للكهرباء الساكنة جذب الغبار في لوحات العدادات وأغلفة الإلكترونيات',
  'Full CoA, colour batch records, and SVHC declarations available for tier-1 supplier audits':
    'شهادات CoA كاملة وسجلات دفعات الألوان وإقرارات SVHC متاحة لتدقيق موردي المستوى الأول',
  'Technical-grade masterbatch for automotive interior, exterior, and under-hood applications.':
    'ماستر باتش بدرجة فنية لتطبيقات السيارات الداخلية والخارجية وأسفل الغطاء.',
  'Heat-stable, light-stable colour concentrates for PP, ABS, PA, and PC/ABS. OEM RAL/Pantone matching, custom colour development from chip.':
    'مركّزات ألوان مقاومة للحرارة والضوء لـ PP وABS وPA وPC/ABS. مطابقة RAL/Pantone للمصنّعين وتطوير ألوان مخصصة من شريحة لونية.',
  '70–80% CaCO₃ in PP homopolymer. Improves stiffness-to-weight in structural injection mouldings. Reduces material cost in high-volume automotive parts.':
    '70–80% CaCO₃ في PP هوموبوليمر. يحسّن نسبة الصلابة إلى الوزن في قطع الحقن الإنشائية ويخفّض تكلفة المواد في قطع السيارات كبيرة الحجم.',
  'HALS-based UV stabiliser for exterior automotive trim and bumper cladding. Prevents greying, chalking, and colour fade over vehicle service life.':
    'مثبّت UV أساسه HALS للتجهيزات الخارجية للسيارات وكسوة المصدّات. يمنع الاصفرار والتبقّع وبهتان اللون على مدى عمر المركبة.',
  'Permanent anti-static for electronic housings, instrument clusters, and sensor covers where static charge must be controlled.':
    'مضاد دائم للكهرباء الساكنة لأغلفة الإلكترونيات ولوحات العدادات وأغطية المستشعرات حيث يجب التحكم في الشحنة الساكنة.',
  'Halogen-free FR for automotive interior panels, seat components, and cabin air filter housings where FMVSS 302 or ECE R118 compliance is relevant.':
    'مثبّط للهب خالٍ من الهالوجين للألواح الداخلية للسيارات ومكونات المقاعد وأغلفة فلاتر هواء المقصورة حيث تُطلب مطابقة FMVSS 302 أو ECE R118.',
  'LDPE carrier filler masterbatch for HDPE automotive components — fluid reservoirs, tool storage, wheel arch liners, and non-structural panels.':
    'ماستر باتش حشو على حامل LDPE لمكونات السيارات من HDPE — خزانات السوائل وصناديق الأدوات وبطانات أقواس العجلات والألواح غير الإنشائية.',
  'Automotive & Technical Moulding': 'قولبة السيارات والاستخدامات الفنية',
  'PP / ABS / PA carrier · Interior & exterior': 'حامل PP / ABS / PA · داخلي وخارجي',
  'PP carrier · Structural injection moulding': 'حامل PP · القولبة الإنشائية بالحقن',
  'UV Stabiliser (AMB-UV10)': 'مثبّت UV (AMB-UV10)', 'HALS · Exterior trim': 'HALS · التجهيزات الخارجية',
  'Anti-static (AMB-AS10)': 'مضاد للكهرباء الساكنة (AMB-AS10)', 'Permanent · Electronic housings': 'دائم · أغلفة الإلكترونيات',
  'Flame Retardant (AMB-FR20)': 'مثبّط للهب (AMB-FR20)', 'Halogen-free · Interior panels': 'خالٍ من الهالوجين · الألواح الداخلية',
  'Interior Trim (Injection Moulding)': 'التجهيزات الداخلية (القولبة بالحقن)', 'Exterior Cladding / Bumpers': 'الكسوة الخارجية / المصدّات',
  'Under-hood Components': 'مكونات أسفل الغطاء', 'Wiring Harness / Connectors': 'حزم الأسلاك / الموصلات',
  'Seat Components': 'مكونات المقاعد', 'Electronic Housings': 'أغلفة الإلكترونيات', 'Fluid Reservoirs': 'خزانات السوائل',

  // ── Construction ──
  'Masterbatch for Construction': 'ماستر باتش لقطاع الإنشاءات',
  '& Civil Engineering': 'والهندسة المدنية',
  'CONSTRUCTION INDUSTRY': 'قطاع الإنشاءات',
  'Black, filler, and additive masterbatch for geomembranes, waterproofing sheets, drainage boards, geotextiles, and HDPE civil engineering applications — UV-stable grades for demanding outdoor service environments.':
    'ماستر باتش أسود وحشو وإضافات للأغشية الجيولوجية وألواح العزل المائي ولوحات الصرف والجيوتكستايل وتطبيقات الهندسة المدنية من HDPE — درجات مقاومة لـ UV لبيئات الخدمة الخارجية القاسية.',
  'Construction & Civil Engineering Applications': 'تطبيقات الإنشاءات والهندسة المدنية',
  'Construction-grade masterbatch must perform over multi-decade service lives under UV, heat, chemical exposure, and mechanical stress. Our grades are engineered for these conditions.':
    'يجب أن يؤدي الماستر باتش الإنشائي على مدى عقود من الخدمة تحت الأشعة فوق البنفسجية والحرارة والتعرض الكيميائي والإجهاد الميكانيكي. درجاتنا مصمَّمة لهذه الظروف.',
  'Geomembranes': 'الأغشية الجيولوجية',
  'HDPE and LLDPE geomembranes for pond liners, landfill caps, tailings ponds, and containment structures — UV-stabilised black grades with ASTM D6693 compliance.':
    'أغشية جيولوجية من HDPE وLLDPE لبطانات البرك وأغطية المدافن وأحواض المخلفات ومنشآت الاحتواء — درجات سوداء مثبَّتة ضد UV ومطابقة لـ ASTM D6693.',
  'Waterproofing Sheet': 'ألواح العزل المائي',
  'HDPE and PP waterproofing sheet for below-grade structures, tunnels, bridge decks, and foundation walls. Requires consistent dispersion and high melt strength.':
    'ألواح عزل مائي من HDPE وPP للمنشآت تحت الأرض والأنفاق وأسطح الجسور وجدران الأساسات. تتطلب تشتّتاً متجانساً وقوة انصهار عالية.',
  'Drainage & Geonet': 'الصرف والجيونت',
  'Geonet, drainage cell, and dimpled membrane in HDPE for subsurface drainage, green roof systems, and retaining wall drainage layers.':
    'جيونت وخلايا صرف وأغشية مضلَّعة من HDPE للصرف الجوفي وأنظمة الأسطح الخضراء وطبقات صرف الجدران الاستنادية.',
  'Geotextile & Non-Woven': 'الجيوتكستايل وغير المنسوج',
  'PP spunbond and needle-punched geotextile for erosion control, road sub-base separation, and slope stabilisation — colour-coded grades available.':
    'جيوتكستايل PP سبانبوند وإبري لمكافحة التعرية وفصل طبقات أساس الطرق وتثبيت المنحدرات — مع درجات مرمَّزة بالألوان.',
  'HDPE Piping Systems': 'أنظمة مواسير HDPE',
  'Large-diameter HDPE pressure pipe and corrugated drainage pipe for municipal infrastructure, stormwater, and civil ducting applications.':
    'مواسير ضغط HDPE كبيرة القطر ومواسير صرف مموَّجة للبنية التحتية البلدية ومياه الأمطار وتطبيقات المجاري المدنية.',
  'Building Film & Wrap': 'أفلام وأغلفة البناء',
  'Vapour barriers, DPM films, and underlay films for residential and commercial construction — filler grades to reduce cost, UV-inhibitor for outdoor applications.':
    'حواجز البخار وأفلام DPM وأفلام الطبقة التحتية للإنشاءات السكنية والتجارية — درجات حشو لخفض التكلفة ومثبّط UV للتطبيقات الخارجية.',
  'UV-stable black masterbatch (BMB-UV) for 50-year geomembrane service life — ASTM D1435 weathering tested':
    'ماستر باتش أسود مقاوم لـ UV (BMB-UV) لعمر خدمة للأغشية الجيولوجية يصل إلى 50 عاماً — مُختبَر للتعرض الجوي وفق ASTM D1435',
  'Carbon black dispersion rated at ≤3 on ASTM D5596 agglomerate scale for geomembrane integrity':
    'تشتّت أسود الكربون مصنَّف ≤3 على مقياس التكتلات ASTM D5596 لسلامة الأغشية الجيولوجية',
  'Filler masterbatch (FMPE-70) reduces HDPE pipe and sheet material cost without wall thickness compromise':
    'ماستر باتش الحشو (FMPE-70) يخفّض تكلفة مواد مواسير وألواح HDPE دون المساس بسماكة الجدار',
  'Anti-oxidant additive concentrates extend processing stability in thick-wall extrusion applications':
    'مركّزات مضادات الأكسدة تطيل ثبات المعالجة في تطبيقات البثق ذات الجدران السميكة',
  'Colour-coded geotextile grades for layer identification on site — standard BS/RAL colours held in stock':
    'درجات جيوتكستايل مرمَّزة بالألوان لتمييز الطبقات في الموقع — ألوان BS/RAL القياسية متوفرة في المخزون',
  'TDS and CoA issued per batch; SVHC and RoHS declarations available for environmental compliance':
    'تُصدر TDS وCoA لكل دفعة؛ وإقرارات SVHC وRoHS متاحة للامتثال البيئي',
  'Construction & Civil Engineering': 'الإنشاءات والهندسة المدنية',
  'Masterbatch grades selected for geomembrane, waterproofing, and civil engineering plastics.':
    'درجات ماستر باتش مختارة للأغشية الجيولوجية والعزل المائي ولدائن الهندسة المدنية.',
  'UV-Stable Black MB': 'ماستر باتش أسود مقاوم لـ UV',
  'High-loading carbon black with HALS UV stabiliser for outdoor geomembrane and construction film. Long-term UV resistance for multi-decade service life.':
    'أسود كربون عالي التحميل مع مثبّت UV من نوع HALS للأغشية الجيولوجية الخارجية وأفلام الإنشاءات. مقاومة UV طويلة الأمد لعمر خدمة يمتد لعقود.',
  '70–80% CaCO₃ in LDPE/HDPE carrier. Reduces material cost in geomembrane, drainage board, and construction film applications without compromising tensile or elongation.':
    '70–80% CaCO₃ على حامل LDPE/HDPE. يخفّض تكلفة المواد في الأغشية الجيولوجية ولوحات الصرف وأفلام الإنشاءات دون المساس بقوة الشد أو الاستطالة.',
  'HALS and UV absorber concentrate for extended outdoor weathering resistance. For applications where black pigment alone is insufficient.':
    'مركّز HALS وماصّ UV لمقاومة ممتدة للعوامل الجوية الخارجية. للتطبيقات التي لا تكفي فيها الصبغة السوداء وحدها.',
  'Anti-oxidant MB': 'ماستر باتش مضاد للأكسدة',
  'Phosphite/phenolic anti-oxidant concentrate for thermal stability in thick-wall pipe and geomembrane extrusion at elevated processing temperatures.':
    'مركّز مضاد للأكسدة من الفوسفيت/الفينول للثبات الحراري في بثق المواسير سميكة الجدران والأغشية الجيولوجية عند درجات حرارة المعالجة المرتفعة.',
  'Site-identification colour coding for geotextile, drainage cell, and building film. Standard construction colours — black, orange, green, white — held in stock.':
    'ترميز لوني لتمييز المواقع للجيوتكستايل وخلايا الصرف وأفلام البناء. ألوان الإنشاءات القياسية — الأسود والبرتقالي والأخضر والأبيض — متوفرة في المخزون.',
  '70–80% CaCO₃ in PP carrier. For PP waterproofing sheet, drainage board, and non-woven geotextile where PP carrier is required.':
    '70–80% CaCO₃ على حامل PP. لألواح العزل المائي ولوحات الصرف والجيوتكستايل غير المنسوج من PP حيث يلزم حامل PP.',
  'UV-Stable Black MB (BMB-UV)': 'ماستر باتش أسود مقاوم لـ UV (BMB-UV)', 'HDPE geomembrane · Outdoor service': 'أغشية HDPE الجيولوجية · خدمة خارجية',
  'PE carrier · Geomembrane & construction film': 'حامل PE · الأغشية الجيولوجية وأفلام الإنشاءات',
  'PP carrier · Sheet & geotextile': 'حامل PP · الألواح والجيوتكستايل',
  'HALS · Outdoor weathering': 'HALS · التعرض الجوي الخارجي',
  'Anti-oxidant (AMB-AO05)': 'مضاد للأكسدة (AMB-AO05)', 'Thermal stability · Thick-wall extrusion': 'ثبات حراري · بثق الجدران السميكة',
  'Site identification · Standard colours': 'تمييز المواقع · ألوان قياسية',
  'Geomembrane (Pond / Landfill)': 'أغشية جيولوجية (برك / مدافن)', 'Drainage Board / Geonet': 'لوحات الصرف / الجيونت',
  'Geotextile / Non-Woven': 'جيوتكستايل / غير منسوج', 'HDPE Pipe (Large Diameter)': 'مواسير HDPE (قطر كبير)',
  'Building Film / Vapour Barrier': 'أفلام البناء / حاجز البخار', 'DPM / Underlay Film': 'DPM / أفلام الطبقة التحتية',
  'Retaining Wall Drainage': 'صرف الجدران الاستنادية',

  // ── Consumer goods ──
  'Masterbatch for Consumer Goods': 'ماستر باتش للسلع الاستهلاكية',
  '& Housewares': 'والأدوات المنزلية',
  'CONSUMER GOODS INDUSTRY': 'قطاع السلع الاستهلاكية',
  'Food-contact colour, white, and additive masterbatch for injection-moulded housewares, caps and closures, toy components, appliance housings, and personal care packaging — consistent colour lot-to-lot for retail brand standards.':
    'ماستر باتش ملوّن وأبيض ومضاف بدرجات ملامسة الأغذية للأدوات المنزلية المقولبة بالحقن والأغطية والسدادات ومكونات الألعاب وأغلفة الأجهزة وتغليف العناية الشخصية — بألوان متسقة بين الدفعات وفق معايير علامات التجزئة.',
  'Consumer Goods Applications': 'تطبيقات السلع الاستهلاكية',
  'Consumer goods masterbatch must deliver consistent colour, food-contact safety where required, and cosmetic surface quality at high injection throughputs.':
    'يجب أن يحقق ماستر باتش السلع الاستهلاكية لوناً متسقاً وسلامة ملامسة الأغذية عند الحاجة وجودة سطح جمالية عند معدلات حقن عالية.',
  'Colour and white masterbatch for PP and HDPE beverage caps, dispensing closures, and flip-top caps — food-contact compliant grades as standard.':
    'ماستر باتش ملوّن وأبيض لأغطية المشروبات من PP وHDPE وسدادات الصرف والأغطية القابلة للقلب — بدرجات مطابقة لملامسة الأغذية كمعيار.',
  'Housewares & Storage': 'الأدوات المنزلية والتخزين',
  'Injection-moulded PP and HDPE storage containers, laundry baskets, hangers, and kitchen accessories — colour-matched to brand standards.':
    'حاويات تخزين وسلال غسيل وشماعات وإكسسوارات مطبخ من PP وHDPE مقولبة بالحقن — بألوان مطابقة لمعايير العلامة.',
  'Toy Components': 'مكونات الألعاب',
  'Colour masterbatch for PP, PE, and ABS toy parts. Migration-tested pigments, RoHS compliant, and EN 71-3 toy safety relevant grades available.':
    'ماستر باتش ملوّن لقطع الألعاب من PP وPE وABS. صبغات مختبَرة للهجرة ومطابقة لـ RoHS ودرجات ذات صلة بسلامة الألعاب EN 71-3.',
  'Personal Care Packaging': 'تغليف العناية الشخصية',
  'White and colour masterbatch for shampoo bottles, lotion pumps, cosmetic jars, and personal care tubes in PP and HDPE.':
    'ماستر باتش أبيض وملوّن لزجاجات الشامبو ومضخات اللوشن وعبوات التجميل وأنابيب العناية الشخصية من PP وHDPE.',
  'Appliance Housings': 'أغلفة الأجهزة',
  'Colour masterbatch for PP small appliance housings, outer shells, and aesthetic panels — heat-stable grades processed at 200–250°C.':
    'ماستر باتش ملوّن لأغلفة الأجهزة الصغيرة من PP والأغلفة الخارجية والألواح الجمالية — درجات مقاومة للحرارة تُعالَج عند 200–250°م.',
  'Food Containers & Trays': 'حاويات وصواني الأغذية',
  'Food-grade colour and white masterbatch for PP/PE food containers, microwave trays, and reusable storage solutions with direct food contact.':
    'ماستر باتش ملوّن وأبيض بدرجة غذائية لحاويات الأغذية من PP/PE وصواني الميكروويف وحلول التخزين القابلة لإعادة الاستخدام بملامسة مباشرة للأغذية.',
  'Food-contact white grades (WMB-FC20) — EU Regulation 10/2011 compliant for direct food packaging':
    'درجات بيضاء لملامسة الأغذية (WMB-FC20) — مطابقة للائحة EU 10/2011 لتغليف الأغذية المباشر',
  'Colour lot-to-lot ΔE < 0.5 consistency for retail brand colour standards — maintained across production runs':
    'اتساق لوني بين الدفعات ΔE < 0.5 لمعايير ألوان علامات التجزئة — محافظ عليه عبر دورات الإنتاج',
  'Migration-tested pigment systems for toy applications — EN 71-3 / RoHS relevant grades available':
    'أنظمة صبغات مختبَرة للهجرة لتطبيقات الألعاب — درجات ذات صلة بـ EN 71-3 / RoHS متوفرة',
  'Anti-scratch and anti-static additive masterbatch for high-gloss appliance and electronics housings':
    'ماستر باتش إضافات مضاد للخدش ومضاد للكهرباء الساكنة لأغلفة الأجهزة والإلكترونيات عالية اللمعان',
  'Heat-stable formulations for thin-wall injection at 220–260°C without discolouration or plate-out':
    'تركيبات مقاومة للحرارة لحقن الجدران الرقيقة عند 220–260°م دون تغيّر لوني أو ترسّب على القالب',
  'TDS, CoA, and food-contact declaration issued per batch for regulatory compliance documentation':
    'تُصدر TDS وCoA وإقرار ملامسة الأغذية لكل دفعة لتوثيق الامتثال التنظيمي',
  'Consumer Goods & Housewares': 'السلع الاستهلاكية والأدوات المنزلية',
  'Colour, white, and additive masterbatch grades for consumer-facing injection moulding applications.':
    'درجات ماستر باتش ملوّن وأبيض ومضاف لتطبيقات القولبة بالحقن الموجّهة للمستهلك.',
  'Full-spectrum colour matching — RAL, Pantone, brand standards — in PP and PE carriers. Food-contact grades, consistent lot-to-lot ΔE for retail brand applications.':
    'مطابقة لونية شاملة — RAL وPantone ومعايير العلامات — على حوامل PP وPE. درجات ملامسة الأغذية واتساق ΔE بين الدفعات لتطبيقات علامات التجزئة.',
  'TiO₂-based white concentrates for PP and HDPE. High opacity grades for closures, housewares, and personal care packaging. EU 10/2011 compliant food-contact grades.':
    'مركّزات بيضاء أساسها TiO₂ لـ PP وHDPE. درجات عالية العتامة للأغطية والأدوات المنزلية وتغليف العناية الشخصية. درجات ملامسة الأغذية مطابقة لـ EU 10/2011.',
  '70–80% CaCO₃ in PP carrier. Reduces material cost in PP housewares, storage, and non-food-contact consumer parts without visible surface impact.':
    '70–80% CaCO₃ على حامل PP. يخفّض تكلفة المواد في الأدوات المنزلية والتخزين والقطع الاستهلاكية غير الملامسة للأغذية دون تأثير ظاهر على السطح.',
  'Permanent anti-static for appliance housings, electronics packaging, and consumer parts where static charge attracts dust or risks ESD damage.':
    'مضاد دائم للكهرباء الساكنة لأغلفة الأجهزة وتغليف الإلكترونيات والقطع الاستهلاكية حيث تجذب الشحنة الساكنة الغبار أو تهدد بتلف ESD.',
  'For consumer film, flexible packaging, and bag applications — reduces COF, prevents blocking, and improves machinability on packaging lines.':
    'لأفلام المستهلك والتغليف المرن وتطبيقات الأكياس — يقلّل معامل الاحتكاك ويمنع الالتصاق ويحسّن قابلية التشغيل على خطوط التغليف.',
  'LDPE carrier filler masterbatch for HDPE and LDPE consumer goods — bin liners, bags, flexible packaging accessories, and non-food-contact PE mouldings.':
    'ماستر باتش حشو على حامل LDPE لسلع HDPE وLDPE الاستهلاكية — أكياس القمامة والأكياس وملحقات التغليف المرن وقطع PE المقولبة غير الملامسة للأغذية.',
  'PP / PE carrier · Food-contact grades available': 'حامل PP / PE · درجات ملامسة الأغذية متوفرة',
  'TiO₂-based · Caps, closures & housewares': 'أساسه TiO₂ · الأغطية والسدادات والأدوات المنزلية',
  'PP carrier · Housewares & storage': 'حامل PP · الأدوات المنزلية والتخزين',
  'PE carrier · Bags & flexible consumer goods': 'حامل PE · الأكياس والسلع الاستهلاكية المرنة',
  'Permanent · Appliance & electronics housings': 'دائم · أغلفة الأجهزة والإلكترونيات',
  'Food Containers': 'حاويات الأغذية', 'Bags & Flexible Consumer Goods': 'الأكياس والسلع الاستهلاكية المرنة', 'Electronics Packaging': 'تغليف الإلكترونيات',

  // ── Packaging ──
  'Masterbatch for Packaging': 'ماستر باتش لقطاع التغليف',
  '& Flexible Film': 'والأفلام المرنة',
  'PACKAGING INDUSTRY': 'قطاع التغليف',
  'Packaging & Flexible Film Applications': 'تطبيقات التغليف والأفلام المرنة',
  'LDPE/LLDPE/HDPE blown film for bags, liners, agricultural covers, and general packaging.':
    'أفلام نفخ LDPE/LLDPE/HDPE للأكياس والبطانات والأغطية الزراعية والتغليف العام.',
  'Cast PP and PE film for food wrapping, overwrap, stretch cling, and lamination.':
    'أفلام PP وPE المصبوبة لتغليف الأغذية والتغليف الخارجي والتمدد اللاصق والتصفيح.',
  'Biaxially oriented polypropylene film for snack packaging, labels, and flexible pouches.':
    'أفلام بولي بروبيلين موجَّهة ثنائياً لتغليف الوجبات الخفيفة والملصقات والأكياس المرنة.',
  'Multilayer Structures': 'الهياكل متعددة الطبقات',
  'Co-extruded PE/PA/PP barrier structures for MAP and modified-atmosphere food packaging.':
    'هياكل حاجزة مشتركة البثق من PE/PA/PP للتغليف بالغلاف الجوي المعدَّل (MAP) للأغذية.',
  'Carrier Bags & Liners': 'أكياس التسوق والبطانات',
  'High-volume commodity bags, bin liners, refuse sacks, and courier mailer bags.':
    'أكياس السلع عالية الحجم وأكياس القمامة وأكياس النفايات وأكياس البريد السريع.',
  'Direct-contact food packaging requiring EU 10/2011 and FDA-compliant masterbatch grades.':
    'تغليف الأغذية بالملامسة المباشرة الذي يتطلب درجات ماستر باتش مطابقة لـ EU 10/2011 وFDA.',
  'Filler masterbatch (FMPE/FMPP) at 5–15% loading reduces raw material cost without film integrity loss':
    'ماستر باتش الحشو (FMPE/FMPP) بنسبة تحميل 5–15% يخفّض تكلفة المواد الخام دون فقدان سلامة الفيلم',
  'Slip and antiblock additives (AMB-SA/AB) ensure film-to-film release and machine runnability':
    'إضافات المنزلق ومانع الالتصاق (AMB-SA/AB) تضمن فصل الأفلام وسلاسة التشغيل على الآلات',
  'Food-contact white grades (WMB-FC20) — EU 10/2011 compliant, confirmed in writing':
    'درجات بيضاء لملامسة الأغذية (WMB-FC20) — مطابقة لـ EU 10/2011 مع تأكيد كتابي',
  'Optical brightener grades for blue-white tone in premium consumer packaging':
    'درجات مبيّضات ضوئية لدرجة بياض مائلة للأزرق في تغليف المستهلك الفاخر',
  'Anti-static masterbatch prevents dust attraction in electronic and technical packaging':
    'الماستر باتش المضاد للكهرباء الساكنة يمنع جذب الغبار في التغليف الإلكتروني والفني',
  'Tight colour lot-to-lot consistency for branded retail packaging runs':
    'اتساق لوني دقيق بين الدفعات لدورات تغليف التجزئة ذات العلامة التجارية',
  'Select a product category to view grades, or contact us for a custom recommendation.':
    'اختر فئة منتج لعرض الدرجات، أو تواصل معنا للحصول على توصية مخصصة.',
  'FMPE / FMPP': 'FMPE / FMPP',
  '70–80% CaCO₃ in LDPE or PP carrier. Reduces cost, improves stiffness, and boosts printability in blown and cast film.':
    '70–80% CaCO₃ على حامل LDPE أو PP. يخفّض التكلفة ويحسّن الصلابة ويعزّز قابلية الطباعة في الأفلام المنفوخة والمصبوبة.',
  '20–30% TiO₂ in LDPE or PP. High opacity, food-contact grades available. For white films, lamination, and opaque packaging.':
    '20–30% TiO₂ في LDPE أو PP. عتامة عالية ودرجات ملامسة الأغذية متوفرة. للأفلام البيضاء والتصفيح والتغليف المعتم.',
  'RAL/Pantone-matched concentrates for branded packaging. Full gamut, food-contact grades on request.':
    'مركّزات مطابقة لـ RAL/Pantone للتغليف ذي العلامة التجارية. طيف لوني كامل ودرجات ملامسة الأغذية عند الطلب.',
  'Erucamide slip + silica antiblock. Reduces COF for machine runnability and prevents blocking in stacked film rolls.':
    'منزلق إيروكاميد + مانع التصاق سيليكا. يقلّل معامل الاحتكاك لسلاسة التشغيل ويمنع الالتصاق في لفات الأفلام المكدَّسة.',
  'Permanent anti-static masterbatch for dust-free electronic and technical packaging. Does not migrate or wash off.':
    'ماستر باتش مضاد دائم للكهرباء الساكنة لتغليف إلكتروني وفني خالٍ من الغبار. لا يهاجر ولا يُغسل.',
  'OB-1/OB-2 fluorescent brighteners for blue-white appearance in film and non-woven packaging applications.':
    'مبيّضات فلورية OB-1/OB-2 لمظهر أبيض مائل للأزرق في تطبيقات الأفلام والتغليف غير المنسوج.',
  'LDPE carrier · Blown film & packaging': 'حامل LDPE · أفلام النفخ والتغليف',
  'PP carrier · Cast film & woven': 'حامل PP · الأفلام المصبوبة والمنسوج',
  'TiO₂-based · Opaque film': 'أساسه TiO₂ · أفلام معتمة',
  'Custom colour matching': 'مطابقة لونية مخصصة',
  'Slip / Antiblock Additive': 'إضافة منزلق / مانع التصاق', 'Film runnability': 'سلاسة تشغيل الأفلام',
  'Multilayer / Co-extrusion': 'متعدد الطبقات / البثق المشترك', 'Courier / Mailer Bags': 'أكياس البريد السريع',
  'UV-stabilised and carbon-black masterbatch for mulch film, greenhouse covering, silage wrap, drip irrigation tubing, and shade netting — formulated for MENA and Mediterranean growing conditions.':
    'ماستر باتش مثبَّت ضد UV وأسود كربون لأفلام المالش وتغطية البيوت المحمية وأغلفة السيلاج وأنابيب الري بالتنقيط وشباك التظليل — مُصاغ لظروف الزراعة في الشرق الأوسط وشمال أفريقيا والبحر المتوسط.',
  'HALS-based UV stabiliser in LDPE/LLDPE carrier. For mulch film, greenhouse cover, drip tape, and shade netting. Loading rate guides provided.':
    'مثبّت UV أساسه HALS على حامل LDPE/LLDPE. لأفلام المالش وأغطية البيوت المحمية وشرائط التنقيط وشباك التظليل. تتوفر إرشادات نسب التحميل.',
  "Egypt's most demanded flexible film and packaging grades — filler, colour, white, and performance additives engineered for blown film, cast film, BOPP, and multilayer structures.":
    'أكثر درجات الأفلام المرنة والتغليف طلباً في مصر — حشو وألوان وأبيض وإضافات أداء مصمَّمة لأفلام النفخ والأفلام المصبوبة وBOPP والهياكل متعددة الطبقات.',
  'Our masterbatch grades cover the full range of flexible packaging — from commodity carrier bags to high-barrier multilayer food packaging.':
    'تغطي درجات الماستر باتش لدينا كامل نطاق التغليف المرن — من أكياس التسوق العادية إلى تغليف الأغذية متعدد الطبقات عالي الحاجزية.',
}

export default industriesA
