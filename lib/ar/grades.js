// Industry, product and sustainability copy that names real Blau Batch / Coraplast grades.
// Grade codes (BLACK 10 FF, UVS 404, AST 349 …) stay in Latin script.
const grades = {
  // ── Agriculture ──
  'Anti-fog additive (AFG 8012) for greenhouse film to improve condensation management':
    'إضافة مانعة للضباب (AFG 8012) لأفلام البيوت المحمية لتحسين التحكم في التكثّف',
  'HALS UV stabilisers in PE carrier at 10%, 15%, and 20% loading. For mulch film, greenhouse cover, and drip tape — UVS 406 / 439 for PP shade netting.':
    'مثبّتات UV من نوع HALS على حامل PE بتحميل 10% و15% و20%. لأفلام المالش وأغطية البيوت المحمية وأنابيب التنقيط — وUVS 406 / 439 لشباك التظليل من PP.',
  '40% ISAF carbon black in PE carrier. For mulch film, silage wrap, and drip tape — provides UV protection and soil-heat effect simultaneously.':
    '40% أسود كربون ISAF على حامل PE. لأفلام المالش وأغلفة السيلاج وأنابيب التنقيط — يوفّر حماية من UV وتدفئة للتربة في آن واحد.',
  '5% erucamide slip agent in PE carrier. Improves film-to-film release in greenhouse and mulch film rolls and reduces friction during mechanical laying.':
    '5% عامل انزلاق من الإيروكاميد على حامل PE. يحسّن انفصال طبقات أفلام البيوت المحمية والمالش ويقلّل الاحتكاك أثناء الفرد الآلي.',
  'UV Stabiliser Additive (UVS series)': 'إضافة مثبّتة ضد UV (سلسلة UVS)',
  'Black MB — Agricultural (BLACK 10 FF)': 'ماستر باتش أسود — زراعي (BLACK 10 FF)',

  // ── Pipes ──
  'Black, filler, and colour masterbatch for HDPE pressure pipe (PE100), PPR hot water systems, PVC drainage, corrugated conduit, and irrigation tubing — with TDS and CoA on every batch.':
    'ماستر باتش أسود وحشو وملوّن لمواسير الضغط HDPE (PE100) وأنظمة المياه الساخنة PPR وصرف PVC ومواسير الحماية المموَّجة وأنابيب الري — مع TDS وCoA لكل تشغيلة.',
  '45% HAF carbon black in PE carrier (BLACK 03 FF / 51 FF), dosed to the carbon black level PE100 pipe standards require — typically 2–2.5%.':
    '45% أسود كربون HAF على حامل PE (BLACK 03 FF / 51 FF)، بجرعة تحقق نسبة أسود الكربون التي تتطلبها معايير مواسير PE100 — عادةً 2–2.5%.',
  'Colour masterbatch in PP carrier for polypropylene random copolymer hot and cold water pipe systems.':
    'ماستر باتش ملوّن على حامل PP لأنظمة مواسير المياه الساخنة والباردة من البولي بروبيلين العشوائي (PPR).',
  'BLACK 03 FF / 51 FF: 45% HAF carbon black, dosed to reach the 2–2.5% carbon black typical of PE100 black pipe':
    'BLACK 03 FF / 51 FF: ‏45% أسود كربون HAF، بجرعة تصل إلى نسبة 2–2.5% المعتادة في مواسير PE100 السوداء',
  'Colour grades in PP carrier for PPR systems — heat-stable at PPR processing temperatures':
    'درجات ألوان على حامل PP لأنظمة PPR — ثابتة حرارياً عند درجات حرارة تشغيل PPR',
  'Pipe-extrusion masterbatch with TDS and CoA on every batch. Contact us for a grade recommendation.':
    'ماستر باتش لبثق المواسير مع TDS وCoA لكل تشغيلة. تواصل معنا لنوصي بالدرجة المناسبة.',
  'PIPE EXTRUSION': 'بثق المواسير',
  'Black MB — Pipe Extrusion': 'ماستر باتش أسود — بثق المواسير',
  '45% HAF carbon black in PE carrier. Dosed to the carbon black level your pipe standard specifies — typically 2–2.5% for PE100 black pipe. Good dispersion and UV protection.':
    '45% أسود كربون HAF على حامل PE. يُجرَّع للوصول إلى نسبة أسود الكربون التي يحددها معيار مواسيرك — عادةً 2–2.5% لمواسير PE100 السوداء. تشتت جيد وحماية من UV.',
  '40% ISAF carbon black in PE carrier. For above-ground pipe, drip tape, and corrugated conduit requiring long-term UV resistance.':
    '40% أسود كربون ISAF على حامل PE. للمواسير فوق الأرض وأنابيب التنقيط ومواسير الحماية المموَّجة التي تحتاج مقاومة طويلة الأمد للأشعة فوق البنفسجية.',
  'Processing Aid': 'مساعد معالجة',
  'PFAS-free PPA (PPA 249) and PPA with antioxidant (PROCESSING AID 707) in PE carrier. Reduce die build-up and melt fracture in pipe and tubing extrusion.':
    'مساعد معالجة PPA خالٍ من PFAS ‏(PPA 249) ومساعد معالجة مع مضاد أكسدة (PROCESSING AID 707) على حامل PE. يقلّلان تراكم الرواسب على القالب وتشقق الانصهار في بثق المواسير والأنابيب.',
  'Black MB — Pipe Extrusion (BLACK 03 FF / 51 FF)': 'ماستر باتش أسود — بثق المواسير (BLACK 03 FF / 51 FF)',
  'PE carrier · 45% HAF': 'حامل PE · ‏45% HAF',
  'Black MB — UV Stable (BLACK 10 FF)': 'ماستر باتش أسود — مقاوم لـ UV (BLACK 10 FF)',
  'PE carrier · Agricultural & conduit': 'حامل PE · الزراعة ومواسير الحماية',
  'Processing Aid (PPA 249 / 707)': 'مساعد معالجة (PPA 249 / 707)',
  'PE carrier · Pipe extrusion': 'حامل PE · بثق المواسير',

  // ── Wire & Cable ──
  'Carbon black, anti-static, colour, and processing-aid masterbatch for cable jacketing, electrical conduit, cable trunking, and data cable sheathing.':
    'ماستر باتش أسود الكربون ومضاد الكهرباء الساكنة والملوّن ومساعدات المعالجة لأغلفة الكابلات ومواسير الحماية الكهربائية ومجاري الكابلات وأغلفة كابلات البيانات.',
  'Cable and wire applications place demanding requirements on masterbatch — consistent carbon black dispersion, UV protection, and smooth extrusion batch-to-batch.':
    'تفرض تطبيقات الكابلات والأسلاك متطلبات صارمة على الماستر باتش — تشتت متسق لأسود الكربون وحماية من UV وبثق سلس من تشغيلة إلى أخرى.',
  'PE cable jacketing with BLACK 10 FF (40% ISAF carbon black) for a jet-black finish and UV protection.':
    'أغلفة كابلات من PE مع BLACK 10 FF ‏(40% أسود كربون ISAF) للحصول على سواد فاحم وحماية من UV.',
  'Colour and processing-aid masterbatch for PE insulation compounds — smooth extrusion and consistent colour coding.':
    'ماستر باتش ملوّن ومساعدات معالجة لمركّبات العزل من PE — بثق سلس وترميز لوني متسق.',
  'Carbon black masterbatch for armoured and instrumentation cable outer sheathing — UV protection for outdoor runs.':
    'ماستر باتش أسود الكربون للأغلفة الخارجية للكابلات المدرَّعة وكابلات الأجهزة — حماية من UV للتمديدات الخارجية.',
  'Colour masterbatch for PE and PP automotive wiring harness insulation and jacket tubing.':
    'ماستر باتش ملوّن لعزل ضفائر أسلاك السيارات وأنابيب تغليفها من PE وPP.',
  'BLACK 10 FF: 40% ISAF carbon black in PE carrier for cable jacketing':
    'BLACK 10 FF: ‏40% أسود كربون ISAF على حامل PE لأغلفة الكابلات',
  'Processing aids (PPA 249, PROCESSING AID 707 / 709) reduce die build-up and melt fracture in cable extrusion':
    'مساعدات المعالجة (PPA 249 وPROCESSING AID 707 / 709) تقلّل تراكم الرواسب على القالب وتشقق الانصهار في بثق الكابلات',
  'Anti-static masterbatch (AST 349, PE carrier) for cable protection sleeves and conduit':
    'ماستر باتش مضاد للكهرباء الساكنة (AST 349، حامل PE) لأكمام حماية الكابلات ومواسير الحماية',
  'Colour masterbatch for wire colour coding — matched to your standard or a reference sample':
    'ماستر باتش ملوّن للترميز اللوني للأسلاك — مطابق لمعيارك أو لعيّنة مرجعية',
  'All cable grades supplied with TDS and MSDS on request': 'تُورَّد جميع درجات الكابلات مع TDS وMSDS عند الطلب',
  'Masterbatch for cable jacketing, conduit, and colour coding — carbon black, anti-static, colour, and processing aids.':
    'ماستر باتش لأغلفة الكابلات ومواسير الحماية والترميز اللوني — أسود الكربون ومضاد الكهرباء الساكنة والألوان ومساعدات المعالجة.',
  'CABLE JACKETING': 'أغلفة الكابلات',
  'PROCESSING AID': 'مساعد معالجة',
  'Black MB — Cable Jacketing': 'ماستر باتش أسود — أغلفة الكابلات',
  '40% ISAF carbon black in PE carrier. For cable jacketing and conduit — good dispersion, UV protection, and a jet-black finish.':
    '40% أسود كربون ISAF على حامل PE. لأغلفة الكابلات ومواسير الحماية — تشتت جيد وحماية من UV وسواد فاحم.',
  'PFAS-free PPA (PPA 249) or PPA with antioxidant (PROCESSING AID 707 / 709) in PE carrier. Reduces die build-up and melt fracture for smoother cable extrusion.':
    'مساعد معالجة PPA خالٍ من PFAS ‏(PPA 249) أو مساعد معالجة مع مضاد أكسدة (PROCESSING AID 707 / 709) على حامل PE. يقلّل تراكم الرواسب على القالب وتشقق الانصهار لبثق أسلس للكابلات.',
  '15% anti-static in PE carrier. For cable protection sleeves, shielding tubes, and conduit where static build-up attracts dust.':
    '15% مضاد للكهرباء الساكنة على حامل PE. لأكمام حماية الكابلات وأنابيب التدريع ومواسير الحماية حيث تجذب الشحنات الساكنة الغبار.',
  'Black MB — Economy': 'ماستر باتش أسود — اقتصادي',
  '30% HAF carbon black with CaCO₃ in PE carrier. For general-purpose conduit, cable trunking, and non-critical jacketing.':
    '30% أسود كربون HAF مع CaCO₃ على حامل PE. لمواسير الحماية العامة ومجاري الكابلات والأغلفة غير الحرجة.',
  'Black MB — Cable Jacketing (BLACK 10 FF)': 'ماستر باتش أسود — أغلفة الكابلات (BLACK 10 FF)',
  'PE carrier · Jacketing & conduit': 'حامل PE · الأغلفة ومواسير الحماية',
  'PE carrier · Smoother extrusion': 'حامل PE · بثق أسلس',
  'Anti-static MB (AST 349)': 'ماستر باتش مضاد للكهرباء الساكنة (AST 349)',
  'PE carrier · Sleeves & conduit': 'حامل PE · الأكمام ومواسير الحماية',
  'Armoured Sheathing': 'أغلفة الكابلات المدرَّعة',

  // ── Automotive ──
  'Light-stable grades with HALS UV stabilisers (UVS 406 / 439) for trim subject to solar load':
    'درجات ثابتة ضوئياً مع مثبّتات UV من نوع HALS ‏(UVS 406 / 439) للتجهيزات المعرَّضة لأشعة الشمس',
  '20% HALS UV stabiliser in PP carrier. For exterior PP trim and bumper cladding — slows greying, chalking, and colour fade.':
    '20% مثبّت UV من نوع HALS على حامل PP. للتجهيزات الخارجية وكسوة المصدّات من PP — يبطئ الشحوب والتطبّش وبهتان اللون.',
  'Anti-static concentrates in PE (AST 349) and PS (AST 335, 347) carriers. For housings and covers where static charge attracts dust — ask us about compatibility with your polymer.':
    'مركّزات مضادة للكهرباء الساكنة على حوامل PE ‏(AST 349) وPS ‏(AST 335 و347). للأغلفة والأغطية حيث تجذب الشحنات الساكنة الغبار — استشرنا بشأن التوافق مع بوليمرك.',
  'Black MB — PP': 'ماستر باتش أسود — PP',
  'Carbon black in PP carrier (35% HMF / 40% ISAF). For black PP interior and under-hood mouldings — jet-black finish and UV protection.':
    'أسود كربون على حامل PP ‏(35% HMF / 40% ISAF). للقطع المقولبة السوداء من PP في المقصورة وأسفل الغطاء — سواد فاحم وحماية من UV.',
  'UV Stabiliser (UVS 406 / 439)': 'مثبّت UV ‏(UVS 406 / 439)',
  'HALS · PP exterior trim': 'HALS · التجهيزات الخارجية من PP',
  'Anti-static (AST series)': 'مضاد للكهرباء الساكنة (سلسلة AST)',
  'PE / PS carrier · Housings': 'حامل PE / PS · الأغلفة',
  'Black MB — PP (BLACK 210 FF / 93 FF)': 'ماستر باتش أسود — PP ‏(BLACK 210 FF / 93 FF)',
  'PP carrier · Interior & under-hood': 'حامل PP · المقصورة وأسفل الغطاء',

  // ── Construction ──
  'HDPE and LLDPE geomembranes for pond liners, landfill caps, tailings ponds, and containment structures — high-loading carbon black grades for UV protection.':
    'أغشية جيولوجية من HDPE وLLDPE لبطانات البرك وأغطية المدافن وأحواض المخلفات ومنشآت الاحتواء — درجات أسود كربون عالية التحميل للحماية من UV.',
  'High-loading black masterbatch (BLACK 31 FF, 60% SRF) — combine with UVS 404 HALS for extra outdoor UV life':
    'ماستر باتش أسود عالي التحميل (BLACK 31 FF، ‏60% SRF) — استخدمه مع HALS ‏UVS 404 لإطالة العمر الخارجي في مواجهة UV',
  'Consistent carbon black dispersion batch-to-batch for geomembrane and sheet integrity':
    'تشتت متسق لأسود الكربون من تشغيلة إلى أخرى لسلامة الأغشية الجيولوجية والألواح',
  'Filler masterbatch (FMPE-1070) reduces HDPE pipe and sheet material cost without wall thickness compromise':
    'ماستر باتش الحشو (FMPE-1070) يخفّض تكلفة مواد مواسير وألواح HDPE دون المساس بسماكة الجدار',
  'Processing aid with antioxidant (PROCESSING AID 707 / 709) for smoother thick-wall extrusion':
    'مساعد معالجة مع مضاد أكسدة (PROCESSING AID 707 / 709) لبثق أسلس للمنتجات سميكة الجدار',
  'HIGH LOADING': 'تحميل عالٍ',
  'Black MB — Geomembrane': 'ماستر باتش أسود — الأغشية الجيولوجية',
  'High-loading carbon black in PE carrier (60% SRF / 45% HAF) for geomembrane and outdoor construction film. Add UVS 404 where extra UV life is needed.':
    'أسود كربون عالي التحميل على حامل PE ‏(60% SRF / 45% HAF) للأغشية الجيولوجية وأفلام الإنشاءات الخارجية. أضف UVS 404 حيث تلزم حماية أطول من UV.',
  '20% HALS UV stabiliser in PE carrier for extended outdoor weathering resistance — for applications where black pigment alone is not enough.':
    '20% مثبّت UV من نوع HALS على حامل PE لمقاومة ممتدة للعوامل الجوية الخارجية — للتطبيقات التي لا يكفي فيها الصبغ الأسود وحده.',
  'Processing Aid + Antioxidant': 'مساعد معالجة + مضاد أكسدة',
  'PPA with antioxidant in PE carrier. Reduces die build-up and supports thermal stability in thick-wall pipe and geomembrane extrusion.':
    'مساعد معالجة PPA مع مضاد أكسدة على حامل PE. يقلّل تراكم الرواسب على القالب ويدعم الثبات الحراري في بثق المواسير سميكة الجدار والأغشية الجيولوجية.',
  'Black MB — Geomembrane (BLACK 31 FF)': 'ماستر باتش أسود — الأغشية الجيولوجية (BLACK 31 FF)',
  'PE carrier · Outdoor service': 'حامل PE · الاستخدام الخارجي',
  'UV Stabiliser (UVS 404)': 'مثبّت UV ‏(UVS 404)',
  'Processing Aid + AO (707 / 709)': 'مساعد معالجة + مضاد أكسدة (707 / 709)',
  'PE carrier · Thick-wall extrusion': 'حامل PE · بثق الجدران السميكة',

  // ── Consumer Goods & Packaging ──
  'Food-contact white grades (WHITE 175 FF / 356 FF) — FDA and EU compliant':
    'درجات بيضاء لملامسة الأغذية (WHITE 175 FF / 356 FF) — مطابقة لمتطلبات FDA والاتحاد الأوروبي',
  'Anti-static masterbatch (AST 349 / 335 / 347) for appliance and electronics housings':
    'ماستر باتش مضاد للكهرباء الساكنة (AST 349 / 335 / 347) لأغلفة الأجهزة والإلكترونيات',
  'TiO₂ white concentrates in PE carrier (40–75% TiO₂). High-opacity grades for closures, housewares, and personal care packaging — every grade is food-contact.':
    'مركّزات بيضاء من TiO₂ على حامل PE ‏(40–75% TiO₂). درجات عالية العتامة للأغطية والأدوات المنزلية وعبوات العناية الشخصية — وجميع الدرجات مطابقة لملامسة الأغذية.',
  'Anti-static in PE (AST 349) and PS (AST 335, 347) carriers. For appliance housings, electronics packaging, and parts where static charge attracts dust.':
    'مضاد للكهرباء الساكنة على حوامل PE ‏(AST 349) وPS ‏(AST 335 و347). لأغلفة الأجهزة وتغليف الإلكترونيات والقطع التي تجذب فيها الشحنات الساكنة الغبار.',
  'PE / PS carrier · Appliance housings': 'حامل PE / PS · أغلفة الأجهزة',
  'Slip and antiblock additives (SLIP 130, AB 222, SAB 1907) ensure film-to-film release and machine runnability':
    'إضافات الانزلاق ومنع الالتصاق (SLIP 130 وAB 222 وSAB 1907) تضمن انفصال طبقات الفيلم وسلاسة التشغيل على الماكينات',
  'Optical brightener (BRIGHTNER 1602) for a brighter white tone in premium packaging':
    'مبيّض ضوئي (BRIGHTNER 1602) لدرجة بياض أنصع في التغليف الفاخر',
  '40–75% TiO₂ in PE carrier. High opacity; every grade is food-contact. For white films, lamination, and opaque packaging.':
    '40–75% TiO₂ على حامل PE. عتامة عالية، وجميع الدرجات مطابقة لملامسة الأغذية. للأفلام البيضاء والتصفيح والتغليف المعتم.',
  'Slip (oleamide or erucamide), silica antiblock, or both in one grade (SAB 1907). Reduces COF for machine runnability and prevents blocking in film rolls.':
    'عامل انزلاق (أولياميد أو إيروكاميد) أو مانع التصاق من السيليكا، أو كلاهما في درجة واحدة (SAB 1907). يخفّض معامل الاحتكاك لسلاسة التشغيل ويمنع التصاق لفائف الفيلم.',
  '15% anti-static in PE carrier for dust-free electronic and technical packaging film.':
    '15% مضاد للكهرباء الساكنة على حامل PE لأفلام تغليف إلكترونية وفنية خالية من الغبار.',
  'Optical brightener in PE carrier for a brighter, cleaner white in film packaging.':
    'مبيّض ضوئي على حامل PE لبياض أنصع وأنقى في أفلام التغليف.',

  // ── Textiles ──
  'Colour, black, filler, and UV-stabiliser masterbatch for PP non-woven, filament yarn, staple fibre, geotextiles, and spunbond fabric — formulated for fibre-spinning and fine-denier applications.':
    'ماستر باتش ملوّن وأسود وحشو ومثبّت ضد UV للأقمشة غير المنسوجة من PP وخيوط الفيلامنت والألياف القصيرة والجيوتكستايل وأقمشة السبنبوند — مُصاغ لغزل الألياف والتطبيقات الدقيقة.',
  'Colour, black, and filler masterbatch for hygiene, medical, and geotextile spunbond PP non-woven fabric.':
    'ماستر باتش ملوّن وأسود وحشو لأقمشة السبنبوند غير المنسوجة من PP للمنتجات الصحية والطبية والجيوتكستايل.',
  'Black fibre grades in PP (BLACK 93 FF, 210 FF) and in PET for high-speed spinning (BLACK 207 FY, 284 FY)':
    'درجات سوداء للألياف على حامل PP ‏(BLACK 93 FF و210 FF) وعلى حامل PET للغزل عالي السرعة (BLACK 207 FY و284 FY)',
  'Optical brightener (BRIGHTNER 1602) for a brighter white in non-woven and fibre':
    'مبيّض ضوئي (BRIGHTNER 1602) لبياض أنصع في الأقمشة غير المنسوجة والألياف',
  'Black MB — PP Fibre': 'ماستر باتش أسود — ألياف PP',
  'Carbon black in PP carrier (40% ISAF / 35% HMF). For PP non-woven, filament yarn, and raffia — BLACK 93 FF is food-compliant (EU AP 89(1)).':
    'أسود كربون على حامل PP ‏(40% ISAF / 35% HMF). للأقمشة غير المنسوجة من PP وخيوط الفيلامنت والرافيا — ودرجة BLACK 93 FF مطابقة لملامسة الأغذية (EU AP 89(1)).',
  'PET FIBRE': 'ألياف PET',
  'Black MB — PET Fibre': 'ماستر باتش أسود — ألياف PET',
  '30% carbon black in PET carrier, made for high-speed filament and fibre spinning.':
    '30% أسود كربون على حامل PET، مصمَّم لغزل الفيلامنت والألياف بسرعات عالية.',
  'Optical brightener in PE carrier. Lifts whiteness in non-woven, fibre, and woven fabric — ask us about compatibility with your PP line.':
    'مبيّض ضوئي على حامل PE. يرفع البياض في الأقمشة غير المنسوجة والألياف والأقمشة المنسوجة — استشرنا بشأن التوافق مع خط PP لديك.',
  '20% HALS UV stabiliser in PP carrier for outdoor geotextile and construction fabric that needs long-term UV resistance.':
    '20% مثبّت UV من نوع HALS على حامل PP للجيوتكستايل وأقمشة الإنشاءات الخارجية التي تحتاج مقاومة طويلة الأمد للأشعة فوق البنفسجية.',
  'Black MB — Fibre (BLACK 93 FF / 207 FY)': 'ماستر باتش أسود — ألياف (BLACK 93 FF / 207 FY)',
  'PP & PET fibre': 'ألياف PP وPET',
  'PP carrier · Geotextiles': 'حامل PP · الجيوتكستايل',
  'Optical Brightener (BRIGHTNER 1602)': 'مبيّض ضوئي (BRIGHTNER 1602)',
  'PE carrier · Whiteness boost': 'حامل PE · تعزيز البياض',

  // ── Black & White product pages ──
  'Black MB — PE grades': 'ماستر باتش أسود — درجات PE',
  'BLACK 03 · 10 · 51 FF · Film & general': 'BLACK 03 · 10 · 51 FF · الأفلام والاستخدامات العامة',
  'Black MB — PP grades': 'ماستر باتش أسود — درجات PP',
  'BLACK 93 · 210 FF · Raffia & non-woven': 'BLACK 93 · 210 FF · الرافيا والأقمشة غير المنسوجة',
  'Pipe extrusion (BLACK 03 FF / 51 FF)': 'بثق المواسير (BLACK 03 FF / 51 FF)',
  'Cable jacketing (BLACK 10 FF)': 'أغلفة الكابلات (BLACK 10 FF)',
  'PE carrier · 40% ISAF': 'حامل PE · ‏40% ISAF',
  'Black mulch film for weed suppression and soil moisture retention, silage stretch film, and UV-stable irrigation pipe. BLACK 10 FF (40% ISAF) is suited to extended outdoor exposure.':
    'أفلام مالش سوداء لمكافحة الحشائش والحفاظ على رطوبة التربة، وأفلام تغليف السيلاج، ومواسير ري مقاومة لـ UV. درجة BLACK 10 FF ‏(40% ISAF) مناسبة للتعرّض الخارجي الطويل.',
  'PE100 water mains, gas distribution pipes, and sewage systems. BLACK 03 FF / 51 FF (45% HAF) are dosed to the carbon black level pressure-pipe standards call for.':
    'خطوط المياه الرئيسية PE100 ومواسير توزيع الغاز وأنظمة الصرف. تُجرَّع BLACK 03 FF / 51 FF ‏(45% HAF) للوصول إلى نسبة أسود الكربون التي تتطلبها معايير مواسير الضغط.',
  'Cable jacketing, conduit, and insulation for power and telecommunications. BLACK 10 FF provides the jet-black finish and UV protection outdoor cable systems need.':
    'أغلفة الكابلات ومواسير الحماية والعزل لكابلات الطاقة والاتصالات. توفّر BLACK 10 FF السواد الفاحم والحماية من UV التي تحتاجها أنظمة الكابلات الخارجية.',
  'White MB — standard': 'ماستر باتش أبيض — قياسي',
  'WHITE 57 · 71 FF · Blown & cast film': 'WHITE 57 · 71 FF · أفلام النفخ والأفلام المصبوبة',
  'White MB — economy / filled': 'ماستر باتش أبيض — اقتصادي / مُعبّأ',
  'WHITE 220 · 224 · 304 FF · Cost-optimised': 'WHITE 220 · 224 · 304 FF · تكلفة محسَّنة',
  'WHITE 175 FF / 356 FF · FDA & EU': 'WHITE 175 FF / 356 FF · ‏FDA والاتحاد الأوروبي',

  // ── Sustainability, campaign ──
  'PFAS-free processing aid option (PPA 249) for film and pipe extrusion':
    'خيار مساعد معالجة خالٍ من PFAS ‏(PPA 249) لبثق الأفلام والمواسير',
  'PFAS\nfree': 'خالٍ من\nPFAS',
  'Processing aid option': 'خيار مساعد المعالجة',
  'WHITE FF series': 'سلسلة WHITE FF',
  'BLACK FF series': 'سلسلة BLACK FF',
  'UV stabilisers, slip/antiblock, anti-static, anti-fog, optical brighteners, and processing aids.':
    'مثبّتات UV ومنزلقات/مانعات التصاق ومضادات الكهرباء الساكنة ومانعات الضباب ومبيّضات ضوئية ومساعدات معالجة.',
  'UV / Slip / AST / PPA': 'UV / منزلق / AST / PPA',
  'Carbon black & anti-static for cable jacketing': 'أسود الكربون ومضاد الكهرباء الساكنة لأغلفة الكابلات',
}

export default grades
