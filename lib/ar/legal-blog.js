// Privacy, Terms, and the blog (index, article shell, and all 7 articles).
const legalBlog = {
  // ───────── Privacy ─────────
  'Legal': 'قانوني',
  'Privacy Policy': 'سياسة الخصوصية',
  'Last updated: March 2026 · Blau Batch Trading & Distribution Co.': 'آخر تحديث: مارس 2026 · شركة بلاو باتش للتجارة والتوزيع',
  'Blau Batch is committed to protecting your personal data. This policy explains what information we collect when you use our website, how we use it, and your rights in relation to it.':
    'تلتزم بلاو باتش بحماية بياناتك الشخصية. توضح هذه السياسة المعلومات التي نجمعها عند استخدامك موقعنا، وكيفية استخدامها، وحقوقك المتعلقة بها.',
  'Information We Collect': 'المعلومات التي نجمعها',
  'When you submit a quote request, contact form, or enquiry on this website, we collect the information you provide: your name, company name, email address, phone number, and details about your product requirements.':
    'عند تقديمك طلب عرض سعر أو تعبئة نموذج تواصل أو استفسار عبر هذا الموقع، نجمع المعلومات التي تقدّمها: اسمك واسم شركتك وبريدك الإلكتروني ورقم هاتفك وتفاصيل متطلبات منتجك.',
  'We may also collect standard server log data (IP address, browser type, pages visited) through our hosting provider (Netlify) for security and performance purposes.':
    'قد نجمع أيضاً بيانات سجل الخادم القياسية (عنوان IP ونوع المتصفح والصفحات التي زرتها) عبر مزوّد الاستضافة (Netlify) لأغراض الأمان والأداء.',
  'We do not use tracking cookies, advertising pixels, or third-party analytics beyond the tools described in this policy.':
    'لا نستخدم ملفات تعريف ارتباط للتتبع أو بكسلات إعلانية أو أدوات تحليل من أطراف ثالثة بخلاف ما ورد في هذه السياسة.',
  'How We Use Your Information': 'كيف نستخدم معلوماتك',
  'To respond to your enquiry and provide the quote, samples, or technical information you requested.':
    'للرد على استفسارك وتزويدك بعرض السعر أو العيّنات أو المعلومات الفنية التي طلبتها.',
  'To communicate with you about your order, shipment, or ongoing supply relationship.':
    'للتواصل معك بشأن طلبك أو شحنتك أو علاقة التوريد المستمرة.',
  'To send relevant product updates or technical bulletins — only where you have indicated interest. You can opt out at any time.':
    'لإرسال تحديثات المنتجات أو النشرات الفنية ذات الصلة — فقط في حال أبديت اهتماماً بذلك. يمكنك إلغاء الاشتراك في أي وقت.',
  'We do not sell, rent, or share your personal data with third parties for marketing purposes.':
    'لا نبيع بياناتك الشخصية ولا نؤجرها ولا نشاركها مع أطراف ثالثة لأغراض تسويقية.',
  'Data Storage & Security': 'تخزين البيانات وأمانها',
  'Form submissions are processed via our website and transmitted to our internal team over encrypted connections (TLS). Our website is hosted on Vercel; data entered through contact forms is routed securely to our team and stored on our internal company systems.':
    'تُعالَج بيانات النماذج عبر موقعنا وتُرسَل إلى فريقنا الداخلي عبر اتصالات مشفَّرة (TLS). يُستضاف موقعنا على Vercel؛ وتُوجَّه البيانات المدخَلة عبر نماذج التواصل بأمان إلى فريقنا وتُخزَّن على أنظمة الشركة الداخلية.',
  'We retain enquiry and order data for up to 7 years for legal and accounting compliance, after which it is securely deleted.':
    'نحتفظ ببيانات الاستفسارات والطلبات لمدة تصل إلى 7 سنوات لأغراض المطابقة القانونية والمحاسبية، ثم تُحذف بأمان بعد ذلك.',
  'We implement reasonable technical and organisational measures to protect your data from unauthorised access, loss, or disclosure.':
    'نطبّق إجراءات تقنية وتنظيمية معقولة لحماية بياناتك من الوصول غير المصرَّح به أو الفقدان أو الإفصاح.',
  'Cookies': 'ملفات تعريف الارتباط',
  'This website uses no advertising or tracking cookies. We may use minimal session cookies required for the operation of the site. These are not used to identify you personally.':
    'لا يستخدم هذا الموقع ملفات تعريف ارتباط إعلانية أو تتبعية. قد نستخدم حداً أدنى من ملفات تعريف ارتباط الجلسة اللازمة لتشغيل الموقع. ولا تُستخدَم هذه لتحديد هويتك شخصياً.',
  'If we add analytics tools in the future, this policy will be updated accordingly.': 'إذا أضفنا أدوات تحليل مستقبلاً، ستُحدَّث هذه السياسة تبعاً لذلك.',
  'Your Rights': 'حقوقك',
  'You have the right to request access to the personal data we hold about you, to correct inaccurate data, or to request deletion of your data where we have no legal obligation to retain it.':
    'لك الحق في طلب الاطلاع على البيانات الشخصية التي نحتفظ بها عنك، أو تصحيح البيانات غير الدقيقة، أو طلب حذف بياناتك عندما لا يكون علينا التزام قانوني بالاحتفاظ بها.',
  'To exercise any of these rights, contact us at info@blaubatch.com. We will respond within 30 days.':
    'لممارسة أي من هذه الحقوق، تواصل معنا على info@blaubatch.com. سنرد خلال 30 يوماً.',
  'Third-Party Services': 'خدمات الأطراف الثالثة',
  "Our website is hosted on Vercel. Vercel's privacy policy governs how they handle infrastructure-level data (vercel.com/legal/privacy-policy).":
    'يُستضاف موقعنا على Vercel. وتحكم سياسة خصوصية Vercel كيفية تعاملهم مع بيانات مستوى البنية التحتية (vercel.com/legal/privacy-policy).',
  "We use WhatsApp (Meta) as an optional communication channel. If you initiate a WhatsApp conversation, Meta's terms and privacy policy apply to that communication.":
    'نستخدم واتساب (Meta) كقناة تواصل اختيارية. إذا بدأت محادثة عبر واتساب، تنطبق شروط وسياسة خصوصية Meta على تلك المحادثة.',
  'We do not embed social media trackers, advertising networks, or third-party analytics.':
    'لا نضمّن أدوات تتبع لوسائل التواصل الاجتماعي أو شبكات إعلانية أو أدوات تحليل من أطراف ثالثة.',
  'Changes to This Policy': 'التغييرات على هذه السياسة',
  'We may update this Privacy Policy from time to time. The date at the top of this page reflects the most recent revision. Continued use of the website after changes constitutes acceptance of the updated policy.':
    'قد نحدّث سياسة الخصوصية هذه من وقت لآخر. يعكس التاريخ أعلى هذه الصفحة آخر مراجعة. ويُعدّ استمرار استخدام الموقع بعد التغييرات قبولاً للسياسة المحدَّثة.',
  'Blau Batch — Arkan Plaza, Building 4, 4th Floor, Sheikh Zayed City, Giza, Egypt.':
    'بلاو باتش — أركان بلازا، مبنى 4، الطابق الرابع، مدينة الشيخ زايد، الجيزة، مصر.',
  'Email: info@blaubatch.com · Phone: +2 0102 222 7723': 'البريد الإلكتروني: info@blaubatch.com · الهاتف: +2 0102 222 7723',

  // ───────── Terms ─────────
  'Terms & Conditions': 'الشروط والأحكام',
  'These Terms & Conditions govern the supply of products and services by Blau Batch Trading & Distribution Co. ("Blau Batch") to its customers. By placing an order, you agree to these terms.':
    'تحكم هذه الشروط والأحكام توريد المنتجات والخدمات من قِبل شركة بلاو باتش للتجارة والتوزيع ("بلاو باتش") إلى عملائها. وبتقديمك طلباً، فإنك توافق على هذه الشروط.',
  'Orders & Acceptance': 'الطلبات والقبول',
  'All orders are subject to acceptance by Blau Batch. An order is confirmed only upon receipt of a written order confirmation from Blau Batch. Verbal agreements or informal communications do not constitute a binding order.':
    'تخضع جميع الطلبات لقبول بلاو باتش. ولا يُعدّ الطلب مؤكَّداً إلا عند استلام تأكيد طلب مكتوب من بلاو باتش. ولا تُعدّ الاتفاقات الشفهية أو المراسلات غير الرسمية طلباً ملزماً.',
  'Minimum order quantities (MOQ) apply per grade and are stated in the relevant product quotation. Trial quantities may be available subject to prior agreement.':
    'تنطبق حدود دنيا لكمية الطلب (MOQ) لكل درجة وتُذكر في عرض السعر الخاص بالمنتج. وقد تتوفر كميات تجريبية بموجب اتفاق مسبق.',
  'Orders for custom or non-standard formulations require a signed specification agreement before production commences.':
    'تتطلب طلبات التركيبات المخصصة أو غير القياسية اتفاق مواصفات موقَّعاً قبل بدء الإنتاج.',
  'Pricing & Payment': 'التسعير والدفع',
  'All prices are quoted in US Dollars (USD) or Egyptian Pounds (EGP) as stated in the quotation and are valid for the period specified. Prices are subject to change due to raw material fluctuations, currency movements, or market conditions.':
    'تُذكر جميع الأسعار بالدولار الأمريكي (USD) أو الجنيه المصري (EGP) كما هو مبيّن في عرض السعر، وتكون سارية للمدة المحددة. وتخضع الأسعار للتغيير بسبب تقلّبات المواد الخام أو حركة العملات أو ظروف السوق.',
  'Payment terms are stated on each invoice and must be strictly observed. Standard terms are 30% deposit upon order confirmation, balance prior to or upon shipment, unless otherwise agreed in writing.':
    'تُذكر شروط الدفع على كل فاتورة ويجب الالتزام بها بدقة. والشروط القياسية هي دفعة مقدَّمة 30% عند تأكيد الطلب، والرصيد قبل الشحن أو عنده، ما لم يُتفق كتابياً على خلاف ذلك.',
  'Late payments may incur interest at 2% per month on the outstanding balance. Blau Batch reserves the right to suspend future orders pending resolution of overdue accounts.':
    'قد تترتب على المدفوعات المتأخرة فائدة بنسبة 2% شهرياً على الرصيد المستحق. وتحتفظ بلاو باتش بالحق في تعليق الطلبات المستقبلية لحين تسوية الحسابات المتأخرة.',
  'Delivery & Shipping': 'التسليم والشحن',
  'Delivery timelines are estimates and not guaranteed. Blau Batch will not be liable for delays caused by circumstances beyond its control including logistics disruptions, force majeure events, or customs clearance delays.':
    'مواعيد التسليم تقديرية وغير مضمونة. ولن تكون بلاو باتش مسؤولة عن التأخير الناجم عن ظروف خارجة عن سيطرتها، بما في ذلك اضطرابات النقل واللوجستيات أو أحداث القوة القاهرة أو تأخير التخليص الجمركي.',
  'Risk of loss passes to the buyer upon handover to the carrier or freight forwarder. Blau Batch recommends that buyers arrange appropriate cargo insurance.':
    'تنتقل مخاطر الفقدان إلى المشتري عند التسليم إلى الناقل أو وكيل الشحن. وتوصي بلاو باتش المشترين بترتيب تأمين شحن مناسب.',
  'Standard packaging is 25 kg polypropylene bags. FIBC big bags (500–1000 kg) are available on request. Packaging specifications are confirmed at the time of order.':
    'التعبئة القياسية هي أكياس بولي بروبيلين سعة 25 كجم. وتتوفر أكياس FIBC الكبيرة (500–1000 كجم) عند الطلب. وتُؤكَّد مواصفات التعبئة وقت الطلب.',
  'Product Quality & Specifications': 'جودة المنتج ومواصفاته',
  'All manufactured grades are tested to the specifications stated in the relevant Technical Data Sheet (TDS). A Certificate of Analysis (CoA) is issued with every shipment.':
    'تُختبر جميع الدرجات المصنَّعة وفق المواصفات المذكورة في صحيفة البيانات الفنية (TDS) الخاصة بها. وتصدر شهادة تحليل (CoA) مع كل شحنة.',
  "Blau Batch warrants that products conform to the agreed specification at the time of delivery. This warranty does not extend to suitability for any particular end-use application, which is the buyer's responsibility to verify.":
    'تضمن بلاو باتش مطابقة المنتجات للمواصفات المتفق عليها وقت التسليم. ولا يمتد هذا الضمان إلى ملاءمة المنتج لأي تطبيق استخدام نهائي معيّن، وهو ما يقع التحقق منه على عاتق المشتري.',
  'Claims regarding product quality or specification non-conformance must be submitted in writing within 14 days of delivery, accompanied by representative samples. Blau Batch will investigate and respond within 21 days.':
    'يجب تقديم مطالبات جودة المنتج أو عدم مطابقة المواصفات كتابياً خلال 14 يوماً من التسليم، مرفقة بعيّنات تمثيلية. وستحقق بلاو باتش وترد خلال 21 يوماً.',
  'Returns & Cancellations': 'الإرجاع والإلغاء',
  'Standard grades may be returned within 14 days of delivery if they are found to be non-conforming to specification, subject to inspection and approval by Blau Batch.':
    'يمكن إرجاع الدرجات القياسية خلال 14 يوماً من التسليم إذا تبيّن عدم مطابقتها للمواصفات، وذلك بموجب فحص وموافقة بلاو باتش.',
  'Custom or non-standard formulations are non-returnable and non-cancellable once production has commenced.':
    'لا يمكن إرجاع أو إلغاء التركيبات المخصصة أو غير القياسية بعد بدء الإنتاج.',
  'Order cancellations must be submitted in writing. Cancellation fees may apply depending on the stage of production and materials committed.':
    'يجب تقديم طلبات إلغاء الطلب كتابياً. وقد تُطبَّق رسوم إلغاء حسب مرحلة الإنتاج والمواد الملتزَم بها.',
  'Limitation of Liability': 'حدود المسؤولية',
  "Blau Batch's total liability for any claim arising from the supply of products shall not exceed the value of the specific order to which the claim relates.":
    'لا تتجاوز المسؤولية الإجمالية لبلاو باتش عن أي مطالبة ناشئة عن توريد المنتجات قيمة الطلب المحدد الذي تتعلق به المطالبة.',
  'Blau Batch shall not be liable for indirect, consequential, or special damages including lost profits, production losses, or downstream customer claims, regardless of the nature of the claim.':
    'لن تكون بلاو باتش مسؤولة عن الأضرار غير المباشرة أو التبعية أو الخاصة، بما في ذلك خسارة الأرباح أو خسائر الإنتاج أو مطالبات العملاء اللاحقين، أياً كانت طبيعة المطالبة.',
  "Products supplied by Blau Batch as an authorised Coraplast distributor are subject to Coraplast's product warranties. Blau Batch passes through any applicable warranty to the buyer.":
    'تخضع المنتجات التي توفّرها بلاو باتش بصفتها موزّعاً معتمداً لشركة Coraplast لضمانات منتجات Coraplast. وتنقل بلاو باتش أي ضمان معمول به إلى المشتري.',
  'Intellectual Property': 'الملكية الفكرية',
  'Technical data sheets, formulation information, and any proprietary technical documentation shared by Blau Batch remain the property of Blau Batch and may not be reproduced, shared, or used for competitive purposes without written consent.':
    'تظل صحائف البيانات الفنية ومعلومات التركيبات وأي وثائق فنية خاصة تشاركها بلاو باتش ملكاً لبلاو باتش، ولا يجوز نسخها أو مشاركتها أو استخدامها لأغراض تنافسية دون موافقة كتابية.',
  'The Blau Batch name, logo, and brand materials are registered trademarks and may not be used without prior written authorisation.':
    'اسم بلاو باتش وشعارها ومواد علامتها التجارية علامات تجارية مسجَّلة ولا يجوز استخدامها دون تصريح كتابي مسبق.',
  'Governing Law': 'القانون الحاكم',
  'These terms and any disputes arising from them are governed by the laws of the Arab Republic of Egypt. Any disputes that cannot be resolved amicably shall be referred to the courts of Giza, Egypt.':
    'تخضع هذه الشروط وأي نزاعات تنشأ عنها لقوانين جمهورية مصر العربية. وتُحال أي نزاعات لا يمكن تسويتها ودياً إلى محاكم الجيزة، مصر.',
  'For international buyers, disputes may be referred to arbitration under ICC rules by mutual written agreement.':
    'بالنسبة للمشترين الدوليين، يجوز إحالة النزاعات إلى التحكيم وفق قواعد غرفة التجارة الدولية (ICC) باتفاق كتابي متبادل.',
  'For questions regarding these terms, contact: info@blaubatch.com · +2 0102 222 7723': 'للاستفسارات بشأن هذه الشروط، تواصل معنا: info@blaubatch.com · +2 0102 222 7723',
  'Blau Batch Trading & Distribution Co. · Arkan Plaza, Building 4, 4th Floor, Sheikh Zayed City, Giza, Egypt.':
    'شركة بلاو باتش للتجارة والتوزيع · أركان بلازا، مبنى 4، الطابق الرابع، مدينة الشيخ زايد، الجيزة، مصر.',

  // ───────── Blog index ─────────
  'Blog': 'المدونة',
  'KNOWLEDGE HUB': 'مركز المعرفة',
  'Masterbatch Insights &': 'رؤى حول الماستر باتش و',
  'Industry Knowledge': 'معرفة الصناعة',
  'Technical articles on filler masterbatch, sustainability in plastics, and manufacturing best practices from the Blau Batch team.':
    'مقالات فنية عن ماستر باتش الحشو والاستدامة في صناعة البلاستيك وأفضل ممارسات التصنيع، من فريق بلاو باتش.',
  'Read article': 'اقرأ المقال',

  // ───────── Blog article shell ─────────
  'Back to Resources': 'العودة إلى الموارد',
  'Found this useful? Share it with your team.': 'وجدت هذا مفيداً؟ شاركه مع فريقك.',
  'Have questions about your application?': 'لديك أسئلة عن تطبيقك؟',
  'Our technical team can recommend the right grade and dosage for your specific production requirements — usually within 24 hours.':
    'يمكن لفريقنا الفني أن يوصي بالدرجة والجرعة المناسبتين لمتطلبات إنتاجك المحددة — عادةً خلال 24 ساعة.',
  'Email our Technical Team': 'راسل فريقنا الفني',
  'More Articles': 'مزيد من المقالات',
  'Continue Reading': 'تابع القراءة',
  'Found this useful?': 'وجدت هذا مفيداً؟',
  'Share it with your team or network.': 'شاركه مع فريقك أو شبكة معارفك.',

  // ───────── Company Story ─────────
  'From Gap in the Market': 'من فجوة في السوق',
  'to Factory Floor': 'إلى أرضية المصنع',
  'How a reliability gap in the MENA masterbatch market led to the founding of Egypt’s most consistent filler manufacturer.':
    'كيف أدّت فجوة في موثوقية سوق الماستر باتش في الشرق الأوسط وشمال أفريقيا إلى تأسيس أكثر مُصنِّعي الحشو اتساقاً في مصر.',
  'COMPANY STORY': 'قصة الشركة',
  'April 2026': 'أبريل 2026',
  '4 min read': 'قراءة 4 دقائق',
  'The Blau Batch Story | Masterbatch Manufacturer Egypt': 'قصة بلاو باتش | مصنّع ماستر باتش في مصر',
  'Founded in 2022, Blau Batch was built to fill a reliability gap in the MENA filler masterbatch market. Learn about our journey to becoming a regional leader.':
    'تأسست بلاو باتش عام 2022 لسدّ فجوة موثوقية في سوق ماستر باتش الحشو بالشرق الأوسط وشمال أفريقيا. تعرّف على رحلتنا نحو أن نصبح رائداً إقليمياً.',
  'Blau Batch was not founded on a business plan template. It was founded on a gap.': 'لم تُؤسَّس بلاو باتش على نموذج خطة عمل جاهزة. بل تأسست على فجوة.',
  'The Problem We Saw': 'المشكلة التي رأيناها',
  'In 2022, we looked at the MENA filler masterbatch market and saw the same story repeating: converters importing filler from distant suppliers, dealing with long lead times, inconsistent quality, and no direct technical support. Local options existed, but few were manufacturing to the standards that serious production lines demand.':
    'في عام 2022، نظرنا إلى سوق ماستر باتش الحشو في الشرق الأوسط وشمال أفريقيا فوجدنا القصة نفسها تتكرر: مصنّعون يستوردون الحشو من موردين بعيدين، ويواجهون مدد تسليم طويلة وجودة غير متسقة ودون دعم فني مباشر. وكانت هناك خيارات محلية، لكن القليل منها كان يصنّع وفق المعايير التي تتطلبها خطوط الإنتاج الجادة.',
  'The gap was not supply — it was reliability.': 'لم تكن الفجوة في التوريد — بل في الموثوقية.',
  'What We Built': 'ما بنيناه',
  "We established our manufacturing facility in the 6th of October Industrial Zone, one of Egypt's primary industrial hubs. Our focus from day one was narrow and deliberate: CaCO₃-based filler masterbatch for PE and PP carrier systems.":
    'أسّسنا منشأة التصنيع لدينا في المنطقة الصناعية بمدينة 6 أكتوبر، إحدى أهم المراكز الصناعية في مصر. وكان تركيزنا منذ اليوم الأول محدداً ومقصوداً: ماستر باتش حشو أساسه CaCO₃ على أنظمة حوامل PE وPP.',
  'FMPE Series': 'سلسلة FMPE',
  '— Four grades on LLDPE and LDPE carriers, 70–80% CaCO₃': '— أربع درجات على حاملي LLDPE وLDPE، بنسبة 70–80% CaCO₃',
  'FMPP Series': 'سلسلة FMPP',
  '— Four grades on PP and PPH carriers, 70–80% CaCO₃': '— أربع درجات على حاملي PP وPPH، بنسبة 70–80% CaCO₃',
  'Custom Formulations (FMPC)': 'تركيبات مخصصة (FMPC)',
  '— Any loading, any carrier blend, minimum 1 MT': '— أي نسبة تحميل، أي مزيج حامل، بحد أدنى طن واحد',
  '2024 — MENA to Europe': '2024 — من الشرق الأوسط وشمال أفريقيا إلى أوروبا',
  'By 2024, we had expanded our logistics to serve European markets. Poland was among our first EU destinations. The demand was the same: consistent filler masterbatch, competitive pricing, and a supplier that actually responds.':
    'بحلول عام 2024، وسّعنا لوجستياتنا لخدمة الأسواق الأوروبية. وكانت بولندا من أولى وجهاتنا في الاتحاد الأوروبي. وكان الطلب واحداً: ماستر باتش حشو متسق وأسعار تنافسية ومورّد يستجيب فعلياً.',
  '2025 — The Coraplast Partnership': '2025 — شراكة Coraplast',
  'In 2025, we became an authorized distributor for Coraplast Industries, adding black, white, color, and specialty masterbatch to our range. This was a direct response to what our customers were asking for — a single source for all their masterbatch needs, with the same reliability they knew from our filler products.':
    'في عام 2025، أصبحنا موزّعاً معتمداً لشركة Coraplast Industries، فأضفنا ماستر باتش الأسود والأبيض والملوّن والخاص إلى مجموعتنا. وكان هذا استجابة مباشرة لما كان عملاؤنا يطلبونه — مصدر واحد لكل احتياجاتهم من الماستر باتش، بالموثوقية نفسها التي عرفوها من منتجات الحشو لدينا.',
  'What Has Not Changed': 'ما لم يتغيّر',
  'We still pick up the phone. We still respond to quotes within 24 hours. We still treat consistency as the baseline, not a bonus. We are still a lean team that knows its customers by name.':
    'ما زلنا نرد على الهاتف. وما زلنا نرد على طلبات عروض الأسعار خلال 24 ساعة. وما زلنا نتعامل مع الاتساق كخط أساس لا كميزة إضافية. وما زلنا فريقاً مرناً يعرف عملاءه بالاسم.',
  'What Is Next': 'ما القادم',
  'More capacity. More grades. Wider reach. But the same principle: every batch performs exactly like the last one.':
    'طاقة إنتاجية أكبر. درجات أكثر. انتشار أوسع. لكن المبدأ نفسه: كل تشغيلة تؤدي تماماً مثل سابقتها.',

  // ───────── Coraplast Partnership ─────────
  '3 min read': 'قراءة 3 دقائق',
  'PARTNERSHIP': 'شراكة',
  'Blau Batch Announces': 'بلاو باتش تعلن',
  'Coraplast Partnership': 'شراكة Coraplast',
  'Expanding our reach to provide a full-spectrum masterbatch solution including Black, White, Color, and Additives.':
    'نوسّع نطاقنا لنقدّم حلاً شاملاً للماستر باتش يشمل الأسود والأبيض والملوّن والإضافات.',
  'Coraplast Authorized Distributor MENA & Europe | Blau Batch': 'موزّع Coraplast المعتمد في الشرق الأوسط وشمال أفريقيا وأوروبا | بلاو باتش',
  'Blau Batch is now an authorized distributor for Coraplast Industries, bringing premium Black, White, Color, and Additive masterbatch to our regional customers.':
    'أصبحت بلاو باتش الآن موزّعاً معتمداً لشركة Coraplast Industries، لتقدّم ماستر باتش أسود وأبيض وملوّن وإضافات فاخرة لعملائنا الإقليميين.',
  'In 2025, Blau Batch officially became an authorized distributor for': 'في عام 2025، أصبحت بلاو باتش رسمياً موزّعاً معتمداً لشركة',
  'Coraplast Industries': 'Coraplast Industries',
  ", one of the region's most respected names in premium color and additive masterbatch.": '، إحدى أكثر الأسماء احتراماً في المنطقة في ماستر باتش الألوان والإضافات الفاخرة.',
  'The Strategic Match': 'التوافق الاستراتيجي',
  'Since our founding, Blau Batch has been known for consistent, high-performance filler masterbatch. Our customers trusted our FMPE and FMPP series, but they were often sourcing their color, black, and white masterbatch from multiple other suppliers.':
    'منذ تأسيسها، عُرفت بلاو باتش بماستر باتش حشو متسق وعالي الأداء. وثق عملاؤنا في سلسلتي FMPE وFMPP، لكنهم كانوا غالباً يشترون ماستر باتش الألوان والأسود والأبيض من موردين آخرين متعددين.',
  'The Coraplast partnership was born from a simple goal:': 'وُلدت شراكة Coraplast من هدف بسيط:',
  'One Source. Full Spectrum.': 'مصدر واحد. حلول شاملة.',
  'What This Means for Our Customers': 'ماذا يعني هذا لعملائنا',
  'You can now consolidate your masterbatch supply chain through a single technical relationship. The same team that manages your filler supply now provides access to the full Coraplast range:':
    'يمكنك الآن توحيد سلسلة توريد الماستر باتش لديك عبر علاقة فنية واحدة. الفريق نفسه الذي يدير توريد الحشو لديك يوفّر الآن الوصول إلى مجموعة Coraplast الشاملة:',
  '— High-jetness grades for irrigation and packaging.': '— درجات عالية السواد للري والتغليف.',
  '— High-opacity TiO₂ grades for thin films.': '— درجات TiO₂ عالية العتامة للأفلام الرقيقة.',
  'Color Masterbatch': 'ماستر باتش ملوّن',
  '— 40+ standard grades and custom matching.': '— أكثر من 40 درجة قياسية ومطابقة مخصصة.',
  'Technical Additives': 'الإضافات الفنية',
  'A Shared Commitment to Quality': 'التزام مشترك بالجودة',
  "We didn't partner with Coraplast just for their range. We partnered with them because their manufacturing standards align with our own. Every grade in the range is supported by technical data sheets and rigorous quality control.":
    'لم نتشارك مع Coraplast من أجل مجموعتها فقط. بل تشاركنا معها لأن معايير تصنيعها تتوافق مع معاييرنا. وتُدعَم كل درجة في المجموعة بصحائف بيانات فنية ومراقبة جودة صارمة.',
  'Simplified Logistics': 'لوجستيات مبسَّطة',
  'Consolidating your orders with Blau Batch means simplified logistics, unified technical support, and the peace of mind that comes from working with a single, reliable partner for all your masterbatch requirements.':
    'يعني توحيد طلباتك مع بلاو باتش لوجستيات مبسَّطة ودعماً فنياً موحداً وراحة بال ناتجة عن العمل مع شريك واحد موثوق لكل احتياجاتك من الماستر باتش.',
  'The Path Forward': 'الطريق إلى الأمام',
  'This partnership is the cornerstone of our transition to a': 'هذه الشراكة هي حجر الأساس في تحوّلنا لنصبح',
  'Full Spectrum Solutions Partner': 'شريك حلول شامل',
  ". We aren't just selling pellets; we're providing the material foundation for your production's success.":
    '. نحن لا نبيع حبيبات بلاستيكية فحسب؛ بل نقدّم الأساس المادي لنجاح إنتاجك.',

  // ───────── Cost Optimization ─────────
  '5 min read': 'قراءة 5 دقائق',
  'COST OPTIMIZATION': 'تحسين التكلفة',
  'How Filler Masterbatch': 'كيف يخفّض ماستر باتش الحشو',
  'Reduces Material Costs': 'تكاليف المواد',
  'The economics of CaCO₃ masterbatch and how to achieve 10-25% material cost reduction effortlessly.':
    'اقتصاديات ماستر باتش CaCO₃ وكيفية تحقيق خفض بنسبة 10–25% في تكلفة المواد دون عناء.',
  'Masterbatch Cost Optimization Egypt | Blau Batch': 'تحسين تكلفة الماستر باتش في مصر | بلاو باتش',
  'Learn how to optimize your production costs using filler masterbatch. Calculate your savings and improve your margins with CaCO₃ mineral loading.':
    'تعرّف على كيفية تحسين تكاليف إنتاجك باستخدام ماستر باتش الحشو. احسب وفوراتك وحسّن هوامشك بتحميل المعدن CaCO₃.',
  'In the competitive world of plastic manufacturing, the difference between profit and loss is often found in the raw material cost. With polymer prices fluctuating globally, identifying ways to reduce the cost-per-kilogram without sacrificing quality is the primary goal of every plant manager.':
    'في عالم تصنيع البلاستيك التنافسي، غالباً ما يكمن الفارق بين الربح والخسارة في تكلفة المواد الخام. ومع تقلّب أسعار البوليمر عالمياً، يصبح إيجاد طرق لخفض التكلفة لكل كيلوغرام دون التضحية بالجودة الهدف الأول لكل مدير مصنع.',
  'The Displacement Economics': 'اقتصاديات الإحلال',
  'Filler masterbatch (CaCO₃) is significantly more cost-effective than virgin polymer. By displacing a percentage of the expensive virgin resin with high-purity mineral filler, you immediately reduce the overall cost of your compound.':
    'ماستر باتش الحشو (CaCO₃) أكثر فعالية من حيث التكلفة بكثير من البوليمر الخام. وباستبدال نسبة من الراتنج الخام المكلف بحشو معدني عالي النقاء، تخفّض فوراً التكلفة الإجمالية لمركّبك.',
  'The math is simple: Even a 10% displacement with FMPE or FMPP can result in substantial monthly savings.':
    'الحساب بسيط: حتى إحلال بنسبة 10% باستخدام FMPE أو FMPP يمكن أن يحقق وفورات شهرية كبيرة.',
  "The 'Free' Benefits": 'المزايا "المجانية"',
  'Cost reduction is the primary driver, but CaCO₃ brings secondary performance benefits that further improve your ROI:':
    'خفض التكلفة هو الدافع الأساسي، لكن CaCO₃ يجلب مزايا أداء ثانوية تحسّن عائد استثمارك أكثر:',
  'Reduced Energy Consumption': 'خفض استهلاك الطاقة',
  '— Higher thermal conductivity leads to faster heating and cooling, reducing the energy required per ton of output.':
    '— توصيلية حرارية أعلى تؤدي إلى تسخين وتبريد أسرع، ما يخفّض الطاقة اللازمة لكل طن من الإنتاج.',
  'Increased Throughput': 'زيادة الإنتاجية',
  '— Faster cooling often allows for higher line speeds and increased hourly output.':
    '— التبريد الأسرع غالباً ما يسمح بسرعات خط أعلى وزيادة الإنتاج بالساعة.',
  'Anti-Blocking Properties': 'خواص مانعة للالتصاق',
  'The 20% Challenge': 'تحدي 20%',
  "Most modern extrusion lines can comfortably handle up to 20% filler loading with zero modifications to machinery. At this level, you aren't just saving money; you're often improving the structural integrity and printability of your final product.":
    'يمكن لمعظم خطوط البثق الحديثة التعامل بسهولة مع تحميل حشو يصل إلى 20% دون أي تعديلات على المعدات. وعند هذا المستوى، أنت لا توفّر المال فحسب؛ بل غالباً ما تحسّن التماسك الهيكلي وقابلية الطباعة لمنتجك النهائي.',
  "Avoiding the 'Cheap' Trap": 'تجنّب فخ "الرخص"',
  'True cost optimization is not about buying the cheapest filler. Low-quality fillers with poor dispersion lead to filter-screen clogging, frequent downtime, and rejected production runs. The true cost of "cheaper" filler is actually higher when you factor in labor, scrap, and lost productivity.':
    'تحسين التكلفة الحقيقي لا يعني شراء أرخص حشو. فالحشو منخفض الجودة ذو التشتت الضعيف يؤدي إلى انسداد شاشات الترشيح وتوقفات متكررة وتشغيلات إنتاج مرفوضة. والتكلفة الحقيقية للحشو "الأرخص" أعلى فعلياً عند احتساب العمالة والهدر وفقدان الإنتاجية.',
  'Beyond CaCO₃': 'ما بعد CaCO₃',
  'With our **Full Spectrum range** (including Coraplast), we can further optimize your costs by providing the carrier resin and the technical additive package in one unified supply chain.':
    'بمجموعتنا **الشاملة** (بما فيها Coraplast)، يمكننا تحسين تكاليفك أكثر بتوفير راتنج الحامل وحزمة الإضافات الفنية في سلسلة توريد واحدة موحَّدة.',
  'Start Your Audit': 'ابدأ تدقيقك',
  "We offer a free technical audit for our partners. We'll look at your current loading, your carrier resin, and your machine set-up to recommend a filler strategy that maximizes your profit margins while guaranteeing performance.":
    'نقدّم تدقيقاً فنياً مجانياً لشركائنا. سننظر في نسبة التحميل الحالية لديك وراتنج الحامل وإعداد ماكيناتك لنوصي باستراتيجية حشو تعظّم هوامش ربحك مع ضمان الأداء.',
  "t just saving money; you": 'ر المال فحسب؛ فأنت',

  // ───────── FMPE Product Spotlight ─────────
  'The': 'إن',
  'FMPE series': 'سلسلة FMPE',
  'is the flagship filler of Blau Batch. It is purpose-built for polyethylene applications, providing a perfect balance of calcium carbonate (CaCO₃) loading and processing efficiency.':
    'هي حشو بلاو باتش الرائد. وهي مصمَّمة خصيصاً لتطبيقات البولي إيثيلين، وتوفّر توازناً مثالياً بين تحميل كربونات الكالسيوم (CaCO₃) وكفاءة المعالجة.',
  'The Engineering Behind FMPE': 'الهندسة وراء FMPE',
  'Filler masterbatch isn\'t just "white pellets." It\'s a complex system of mineral loading, carrier resin, and surface chemistry. Our FMPE series uses calcium carbonate sourced from high-purity Egyptian deposits, known for their extreme whiteness and low abrasive properties.':
    'ماستر باتش الحشو ليس مجرد "حبيبات بيضاء". بل هو نظام معقّد من تحميل المعدن وراتنج الحامل وكيمياء السطح. تستخدم سلسلة FMPE لدينا كربونات كالسيوم مستخرَجة من رواسب مصرية عالية النقاء، معروفة ببياضها الشديد وخواصها الحاكّة المنخفضة.',
  'Key Grades in the FMPE Series': 'الدرجات الرئيسية في سلسلة FMPE',
  '— 70% CaCO₃ loading on an LLDPE carrier. Ideal for thin-film applications where high dispersion is critical.':
    '— تحميل 70% CaCO₃ على حامل LLDPE. مثالية لتطبيقات الأفلام الرقيقة حيث يكون التشتت العالي أمراً حاسماً.',
  '— 75% loading. Our most versatile grade, balancing cost-reduction with excellent mechanical retention.':
    '— تحميل 75%. أكثر درجاتنا تعدداً في الاستخدامات، توازن بين خفض التكلفة والحفاظ الممتاز على الخواص الميكانيكية.',
  '— 80% loading. Maximum cost efficiency for heavy-duty sacks, tarpaulins, and thicker film applications.':
    '— تحميل 80%. أقصى كفاءة في التكلفة للجوالات شديدة التحمل والمشمعات وتطبيقات الأفلام الأكثر سماكة.',
  'Carrier Resin Matters': 'راتنج الحامل مهم',
  'A common industry mistake is ignoring the carrier resin. Many "budget" fillers use low-quality recycled carriers. Our standard FMPE series is built on **virgin LLDPE** (Linear Low-Density Polyethylene) to ensure high compatibility and flow during your production process.':
    'من الأخطاء الشائعة في الصناعة إغفال راتنج الحامل. يستخدم كثير من درجات الحشو "الاقتصادية" حوامل معاد تدويرها منخفضة الجودة. تُبنى سلسلة FMPE القياسية لدينا على **LLDPE خام** (بولي إيثيلين خطي منخفض الكثافة) لضمان توافق وانسياب عاليين أثناء عملية إنتاجك.',
  'Optimal Applications': 'التطبيقات المثلى',
  'Shopping Bags & Thin Films': 'أكياس التسوق والأفلام الرقيقة',
  '— Improved stiffness and anti-blocking properties at lower costs.': '— صلابة محسَّنة وخواص مانعة للالتصاق بتكلفة أقل.',
  'Industrial Liners & Heavy-Duty Sacks': 'البطانات الصناعية والجوالات شديدة التحمل',
  '— Superior impact strength even at high loading percentages.': '— مقاومة صدم متفوقة حتى عند نسب التحميل العالية.',
  'Agricultural Films': 'الأفلام الزراعية',
  '— Enhanced opacity and cost reduction in mulch and silage films.': '— عتامة محسَّنة وخفض للتكلفة في أفلام المالش والسيلاج.',
  'Why It Matters': 'لماذا يهم هذا',
  "Filler masterbatch isn't just a cost-saver. Done right, it improves your thermal stability, reduces shrinkage, and increases the stiffness of your final product. The FMPE series is designed to do all of that, reliably, batch after batch.":
    'ماستر باتش الحشو ليس مجرد موفّر للتكلفة. فعند استخدامه بشكل صحيح، يحسّن الثبات الحراري ويقلّل الانكماش ويزيد صلابة منتجك النهائي. وصُمِّمت سلسلة FMPE لتحقيق كل ذلك بموثوقية، تشغيلة تلو الأخرى.',
  'FMPE Filler Masterbatch PE Egypt | Blau Batch': 'ماستر باتش الحشو FMPE لـ PE في مصر | بلاو باتش',
  'Explore the FMPE series from Blau Batch. Premium polyethylene filler masterbatch with 70–80% CaCO₃ loading for thin films, bags, and industrial packaging.':
    'استكشف سلسلة FMPE من بلاو باتش. ماستر باتش حشو بولي إيثيلين فاخر بتحميل 70–80% CaCO₃ للأفلام الرقيقة والأكياس والتغليف الصناعي.',
  't just "white pellets." It': 'س مجرد "حبيبات بيضاء". بل',
  'PE Filler Masterbatch:': 'ماستر باتش حشو PE:',
  'The FMPE Series': 'سلسلة FMPE',
  'Inside the engineering of our PE-based filler range, from LLDPE to LDPE carrier systems.':
    'نظرة داخل هندسة مجموعة الحشو لدينا القائمة على PE، من أنظمة حامل LLDPE إلى LDPE.',
  'PRODUCT SPOTLIGHT': 'تسليط الضوء على المنتج',

  // ───────── FMPP Product Spotlight ─────────
  'Polypropylene (PP) applications present unique processing challenges compared to polyethylene. High melting points, crystallinity, and the need for high stiffness require a different engineering approach. Enter the':
    'تطرح تطبيقات البولي بروبيلين (PP) تحديات معالجة فريدة مقارنةً بالبولي إيثيلين. فنقاط الانصهار المرتفعة والتبلور والحاجة إلى صلابة عالية تتطلب نهجاً هندسياً مختلفاً. وهنا يأتي دور',
  'FMPP series': 'سلسلة FMPP',
  'from Blau Batch.': 'من بلاو باتش.',
  'The Engineering Behind FMPP': 'الهندسة وراء FMPP',
  'Our FMPP series is built on a high-melt-flow PP carrier, ensuring perfect dispersion even at the higher processing temperatures required by PP. We use premium, high-purity CaCO₃ to maximize whiteness and minimize wear on your extrusion dies.':
    'تُبنى سلسلة FMPP لدينا على حامل PP عالي سيولة الانصهار، ما يضمن تشتتاً مثالياً حتى عند درجات الحرارة الأعلى التي يتطلبها PP في المعالجة. ونستخدم CaCO₃ فاخراً عالي النقاء لتعظيم البياض وتقليل التآكل على قوالب البثق لديك.',
  'Key Grades in the FMPP Series': 'الدرجات الرئيسية في سلسلة FMPP',
  '— 70% CaCO₃ loading on a PP carrier. Designed for raffia and woven sack applications where tape strength is critical.':
    '— تحميل 70% CaCO₃ على حامل PP. مصمَّمة لتطبيقات الرافيا والجوالات المنسوجة حيث تكون متانة الشريط أمراً حاسماً.',
  '— 75% loading. The workhorse of our PP range. Balancing stiffness with high dispersion.':
    '— تحميل 75%. عماد مجموعتنا من PP. توازن بين الصلابة والتشتت العالي.',
  '— 80% loading. Maximum cost efficiency for injection-molded parts and heavy-duty industrial items.':
    '— تحميل 80%. أقصى كفاءة في التكلفة للأجزاء المقولبة بالحقن والمنتجات الصناعية شديدة التحمل.',
  'Beyond Woven Sacks': 'ما بعد الجوالات المنسوجة',
  "While woven sacks are a major application, the FMPP series is proving its worth in other areas of the industrial world:":
    'رغم أن الجوالات المنسوجة تطبيق رئيسي، تثبت سلسلة FMPP قيمتها في مجالات أخرى من العالم الصناعي:',
  '— Reducing shrinkage and cycle times by increasing thermal conductivity.': '— تقليل الانكماش وأوقات الدورة بزيادة التوصيلية الحرارية.',
  '— Faster cooling cycles and better dimensional stability in trays and containers.': '— دورات تبريد أسرع وثبات أبعاد أفضل في الصواني والحاويات.',
  '— Improving impact strength and rigidity in PP piping systems.': '— تحسين مقاومة الصدم والصلابة في أنظمة مواسير PP.',
  'The Benefits for Your Production Line': 'المزايا لخط إنتاجك',
  'High Thermal Conductivity': 'توصيلية حرارية عالية',
  '— CaCO₃ conducts heat faster than virgin polymer, allowing for faster cooling and shorter cycle times.':
    '— يوصّل CaCO₃ الحرارة أسرع من البوليمر الخام، ما يتيح تبريداً أسرع وأوقات دورة أقصر.',
  'Reduced Warpage': 'تقليل التقوّس',
  '— Improved dimensional stability, especially in large injection-molded parts.': '— ثبات أبعاد محسَّن، خاصة في الأجزاء الكبيرة المقولبة بالحقن.',
  'Cost Efficiency': 'كفاءة التكلفة',
  '— Significant reduction in the cost-per-kilogram of the final product.': '— خفض كبير في تكلفة الكيلوغرام الواحد من المنتج النهائي.',
  "Using the right filler means less downtime and fewer quality issues. The FMPP series isn't just about reducing costs; it's about making your PP production lines more efficient and your final products more reliable.":
    'استخدام الحشو المناسب يعني توقفات أقل ومشكلات جودة أقل. سلسلة FMPP لا تقتصر على خفض التكاليف؛ بل تجعل خطوط إنتاج PP لديك أكثر كفاءة ومنتجاتك النهائية أكثر موثوقية.',
  'FMPP Filler Masterbatch Polypropylene Egypt | Blau Batch': 'ماستر باتش حشو FMPP للبولي بروبيلين في مصر | بلاو باتش',
  'Explore the FMPP series from Blau Batch. Premium polypropylene filler masterbatch with 70–80% CaCO₃ loading for woven sacks, rafia, and injection molding.':
    'استكشف سلسلة FMPP من بلاو باتش. ماستر باتش حشو بولي بروبيلين فاخر بتحميل 70–80% CaCO₃ للجوالات المنسوجة والرافيا والقولبة بالحقن.',
  "t just about reducing costs; it": 'ر على خفض التكاليف فقط؛ بل',
  'PP Filler Masterbatch:': 'ماستر باتش حشو PP:',
  'The FMPP Series': 'سلسلة FMPP',
  'Purpose-built filler for polypropylene applications, focusing on stiffness and high-temperature processing.':
    'حشو مصمَّم خصيصاً لتطبيقات البولي بروبيلين، يركّز على الصلابة والمعالجة عالية الحرارة.',

  // ───────── Masterbatch Range ─────────
  'For years, Blau Batch was synonymous with world-class filler. With our 2025 Coraplast partnership, that synonymous relationship now extends to the entire spectrum of masterbatch solutions.':
    'لسنوات، كانت بلاو باتش مرادفاً للحشو ذي المستوى العالمي. ومع شراكتنا مع Coraplast عام 2025، تمتد تلك السمعة الآن لتشمل نطاق حلول الماستر باتش بأكمله.',
  "The complexity of sourcing multiple masterbatch types from different suppliers often leads to technical inconsistencies, logistics headaches, and procurement delays. We've solved that by providing a single, unified source for all four major masterbatch categories.":
    'غالباً ما يؤدي تعقيد شراء أنواع متعددة من الماستر باتش من موردين مختلفين إلى تفاوت فني وصداع لوجستي وتأخير في المشتريات. وقد حللنا ذلك بتوفير مصدر واحد موحَّد لجميع فئات الماستر باتش الرئيسية الأربع.',
  '1. The White Masterbatch Series': '1. سلسلة الماستر باتش الأبيض',
  'Our white range is built around high-concentration TiO₂ (Titanium Dioxide), ranging from 40% up to 75%. These grades are designed for high opacity and UV stability in everything from thin film packaging to high-gloss industrial parts.':
    'تُبنى مجموعتنا البيضاء حول TiO₂ (ثاني أكسيد التيتانيوم) عالي التركيز، بنسب تتراوح بين 40% و75%. وصُمِّمت هذه الدرجات لعتامة عالية وثبات ضد UV في كل شيء، من تغليف الأفلام الرقيقة إلى الأجزاء الصناعية عالية اللمعان.',
  '2. The Black Masterbatch Series': '2. سلسلة الماستر باتش الأسود',
  'Carbon black concentration is critical for UV protection and jetness. Our range includes P-type and HAF-type carbon black grades suitable for irrigation pipes, geomembranes, and automotive components.':
    'تركيز أسود الكربون أمر حاسم للحماية من UV والسواد. وتشمل مجموعتنا درجات أسود الكربون من نوع P وHAF المناسبة لمواسير الري والأغشية الجيولوجية ومكونات السيارات.',
  '3. The Color Masterbatch Series': '3. سلسلة الماستر باتش الملوّن',
  'With over 40 standard color grades and a limitless custom-matching service, we provide consistent, vibrant results. Our colors are formulated with high-quality pigments to ensure migration resistance and high thermal stability.':
    'بأكثر من 40 درجة لونية قياسية وخدمة مطابقة مخصصة غير محدودة، نقدّم نتائج متسقة وزاهية. وتُركَّب ألواننا بأصباغ عالية الجودة لضمان مقاومة الهجرة وثبات حراري عالٍ.',
  '4. Technical Additives': '4. الإضافات الفنية',
  'Beyond color, we provide the technical "performance" layer for your polymer:': 'إلى جانب اللون، نوفّر طبقة "الأداء" الفنية لبوليمرك:',
  'UV Stabilizers': 'مثبّتات UV',
  '— Essential for outdoor agricultural and construction films.': '— أساسية للأفلام الزراعية والإنشائية الخارجية.',
  'Anti-Block & Slip Agents': 'عوامل مانعة للالتصاق ومنزلقة',
  '— Critical for high-speed automated packaging lines.': '— حاسمة لخطوط التغليف الآلية عالية السرعة.',
  'Processing Aids': 'مساعدات المعالجة',
  '— Reducing melt fracture and improving surface quality in extrusion.': '— تقليل تشقق الانصهار وتحسين جودة السطح في البثق.',
  'A Solution for Every Application': 'حل لكل تطبيق',
  'Flexible Packaging': 'التغليف المرن',
  '— High-opacity whites and vibrant colors for brand visibility.': '— أبيض عالي العتامة وألوان زاهية لبروز العلامة التجارية.',
  '— UV-stabilized blacks and specialty additives for mulch and silage films.': '— أسود مثبَّت ضد UV وإضافات خاصة لأفلام المالش والسيلاج.',
  'Pipes & Construction': 'المواسير والإنشاءات',
  '— Carbon black masterbatch with high dispersion for pressure pipes.': '— ماستر باتش أسود الكربون عالي التشتت لمواسير الضغط.',
  'The Strategic Advantage': 'الميزة الاستراتيجية',
  'Choosing Blau Batch as your "Full Spectrum" partner means consistency across your entire production. The same technical team that knows your process and your filler requirements can now optimize your color and additive spend under one roof.':
    'اختيار بلاو باتش شريكاً "شاملاً" لك يعني اتساقاً عبر إنتاجك بأكمله. الفريق الفني نفسه الذي يعرف عمليتك ومتطلبات الحشو لديك يمكنه الآن تحسين إنفاقك على الألوان والإضافات تحت سقف واحد.',
  'Complete Masterbatch Range MENA & Europe | Blau Batch': 'مجموعة ماستر باتش شاملة في الشرق الأوسط وشمال أفريقيا وأوروبا | بلاو باتش',
  'Explore the full spectrum of masterbatch solutions from Blau Batch. Black, White, Color, and Additives for all plastic manufacturing applications.':
    'استكشف مجموعة حلول الماستر باتش الشاملة من بلاو باتش. الأسود والأبيض والملوّن والإضافات لجميع تطبيقات تصنيع البلاستيك.',
  'Beyond Filler:': 'ما بعد الحشو:',
  'The Full Range': 'المجموعة الشاملة',
  'Exploring our comprehensive portfolio of 40+ Black, White, and Color masterbatch grades now available through the Coraplast partnership.':
    'استكشاف محفظتنا الشاملة من أكثر من 40 درجة من ماستر باتش الأسود والأبيض والملوّن، المتوفرة الآن عبر شراكة Coraplast.',
  'FULL SPECTRUM': 'حلول شاملة',

  // ───────── Technical Guide ─────────
  'In the masterbatch world, numbers like 70, 75, and 80 are thrown around frequently. But what do they actually mean for your process? Understanding the "why" behind the loading and the carrier system is the difference between a high-performing product and a failed production run.':
    'في عالم الماستر باتش، تُتداول أرقام مثل 70 و75 و80 باستمرار. لكن ماذا تعني فعلياً لعمليتك؟ فهم "السبب" وراء التحميل ونظام الحامل هو الفارق بين منتج عالي الأداء وتشغيلة إنتاج فاشلة.',
  'The Anatomy of Filler Masterbatch': 'تشريح ماستر باتش الحشو',
  'Filler masterbatch consists of three key components:': 'يتكوّن ماستر باتش الحشو من ثلاثة مكونات رئيسية:',
  'Mineral Loading (CaCO₃)': 'التحميل المعدني (CaCO₃)',
  '— The inorganic core that provides cost-reduction and enhanced mechanical properties.':
    '— النواة غير العضوية التي توفّر خفض التكلفة وخواص ميكانيكية محسَّنة.',
  '— The organic base that encapsulates the mineral and ensures compatibility with the final polymer.':
    '— القاعدة العضوية التي تحيط بالمعدن وتضمن التوافق مع البوليمر النهائي.',
  '— The "secret sauce" that ensures smooth flow and high dispersion.': '— "السر الخفي" الذي يضمن انسياباً سلساً وتشتتاً عالياً.',
  'Loading Percentages Explained': 'شرح نسب التحميل',
  'The percentage (e.g., 80%) refers to the weight-by-weight concentration of CaCO₃ in the masterbatch. But higher loading is not always better.':
    'تشير النسبة (مثل 80%) إلى تركيز CaCO₃ وزناً بوزن في الماستر باتش. لكن التحميل الأعلى ليس دائماً أفضل.',
  '70% Loading': 'تحميل 70%',
  '— High concentration of carrier resin. Ideal for very thin films where high dispersion is critical.':
    '— تركيز عالٍ من راتنج الحامل. مثالي للأفلام شديدة الرقة حيث يكون التشتت العالي أمراً حاسماً.',
  '75% Loading': 'تحميل 75%',
  '— The industry sweet spot. Balancing high cost-reduction with excellent mechanical retention.':
    '— النقطة المثلى في الصناعة. يوازن بين خفض التكلفة العالي والحفاظ الممتاز على الخواص الميكانيكية.',
  '80% Loading': 'تحميل 80%',
  '— Maximum cost efficiency. Best for thicker materials like woven sacks and injection molding.':
    '— أقصى كفاءة في التكلفة. الأفضل للمواد الأكثر سماكة مثل الجوالات المنسوجة والقولبة بالحقن.',
  'Carrier Resin: The Invisible Strength': 'راتنج الحامل: القوة غير المرئية',
  'Using the wrong carrier resin can lead to "specking," poor surface finish, or catastrophic product failure.':
    'استخدام راتنج حامل خاطئ قد يؤدي إلى "التنقّط" أو تشطيب سطحي رديء أو فشل كارثي في المنتج.',
  'LLDPE Careers': 'استخدامات LLDPE',
  '— Excellent for strength and high-speed film extrusion.': '— ممتاز للمتانة وبثق الأفلام عالي السرعة.',
  'LDPE Careers': 'استخدامات LDPE',
  '— Best for flow and surface gloss.': '— الأفضل للانسياب واللمعان السطحي.',
  'PP Careers': 'استخدامات PP',
  '— Necessary for woven sacks and high-temperature polypropylene applications.': '— ضروري للجوالات المنسوجة وتطبيقات البولي بروبيلين عالية الحرارة.',
  'Surface Treatment & Dispersion': 'المعالجة السطحية والتشتت',
  'The CaCO₃ particles themselves aren\'t raw minerals. They are surface-treated with specialty fatty acids (like stearic acid) to reduce their surface tension and ensure they "wet" and disperse properly into the polymer matrix.':
    'جسيمات CaCO₃ ذاتها ليست معادن خاماً. بل تُعالَج سطحياً بأحماض دهنية خاصة (مثل حمض الستياريك) لتقليل توتّرها السطحي وضمان "ترطّبها" وتشتتها بشكل صحيح داخل مصفوفة البوليمر.',
  'Impact on Your Production': 'التأثير على إنتاجك',
  'Increased Output': 'زيادة الإنتاج',
  '— CaCO₃ conducts heat faster than polymer, allowing for faster cooling and higher line speeds.':
    '— يوصّل CaCO₃ الحرارة أسرع من البوليمر، ما يتيح تبريداً أسرع وسرعات خط أعلى.',
  'Reduced Energy': 'خفض الطاقة',
  '— Higher thermal conductivity often leads to lower energy consumption per kilogram processed.':
    '— التوصيلية الحرارية الأعلى غالباً ما تؤدي إلى استهلاك طاقة أقل لكل كيلوغرام تتم معالجته.',
  'Improved Stiffness': 'صلابة محسَّنة',
  '— The mineral acts as a reinforcement, increasing the rigidity of the final part.': '— يعمل المعدن كمقوٍّ، ما يزيد صلابة الجزء النهائي.',
  'The Recommendation': 'التوصية',
  "At Blau Batch, we don't just sell you a grade. We look at your machinery, your final application, and your material goals to recommend the exact loading and carrier blend for your specific process.":
    'في بلاو باتش، نحن لا نبيعك درجة فحسب. بل ننظر في معداتك وتطبيقك النهائي وأهدافك من المواد لنوصي بنسبة التحميل ومزيج الحامل الدقيقين لعمليتك المحددة.',
  'Filler Masterbatch Technical Guide CaCO3 Egypt | Blau Batch': 'الدليل الفني لماستر باتش الحشو CaCO3 في مصر | بلاو باتش',
  'Understand the technical foundations of filler masterbatch. Mineral loading percentages, carrier resin selection, and dispersion explained by technical experts.':
    'افهم الأسس الفنية لماستر باتش الحشو. نسب التحميل المعدني واختيار راتنج الحامل والتشتت، يشرحها خبراء فنيون.',
  'CaCO₃ Loading:': 'تحميل CaCO₃:',
  'The Technical Guide': 'الدليل الفني',
  'A deep dive into mineral loading, carrier resin selection, and its impact on your production line.':
    'نظرة معمّقة في التحميل المعدني واختيار راتنج الحامل وتأثيره في خط إنتاجك.',
  'TECHNICAL GUIDE': 'دليل فني',
  '6 min read': 'قراءة 6 دقائق',

  // ───────── lib/blog-articles.js: what-is-filler-masterbatch ─────────
  'January 2026': 'يناير 2026',
  '8 min read': 'قراءة 8 دقائق',
  'Filler masterbatch is one of the most practical cost-reduction tools available to plastics processors. By replacing a portion of expensive virgin polymer with a concentrated mineral filler, manufacturers can achieve meaningful raw material savings without significantly compromising mechanical performance. This guide explains what filler masterbatch is, how it works, and how to calculate whether it makes economic sense for your production line.':
    'ماستر باتش الحشو من أكثر أدوات خفض التكلفة عملية المتاحة لمصنّعي البلاستيك. وباستبدال جزء من البوليمر الخام المكلف بحشو معدني مركّز، يمكن للمصنّعين تحقيق وفورات ملموسة في المواد الخام دون المساس كثيراً بالأداء الميكانيكي. يشرح هذا الدليل ما هو ماستر باتش الحشو وكيف يعمل وكيفية احتساب جدواه الاقتصادية لخط إنتاجك.',
  'What is Filler Masterbatch?': 'ما هو ماستر باتش الحشو؟',
  'A typical filler masterbatch contains 70–80% CaCO₃ by weight in either a polyethylene (PE) or polypropylene (PP) carrier. When added to your base polymer at a defined let-down ratio (typically 10–30%), it effectively dilutes the polymer content of the final part — and since CaCO₃ costs significantly less than PE or PP, the net material cost drops.':
    'يحتوي ماستر باتش الحشو النموذجي على 70–80% CaCO₃ وزناً في حامل من البولي إيثيلين (PE) أو البولي بروبيلين (PP). وعند إضافته إلى بوليمرك الأساسي بنسبة خلط محددة (عادةً 10–30%)، فإنه يخفّف فعلياً محتوى البوليمر في الجزء النهائي — ولأن CaCO₃ أرخص بكثير من PE أو PP، تنخفض التكلفة الصافية للمواد.',
  'PE vs PP Carrier: Why it Matters': 'حامل PE مقابل PP: لماذا يهم هذا',
  'Blau Batch manufactures two series: FMPE (polyethylene carrier) and FMPP (polypropylene carrier). Using the correct carrier for your base resin is critical — a PE-carrier masterbatch in a PP application can cause processing problems including delamination, poor surface finish, and mechanical property deterioration. Always match carrier to base resin.':
    'تصنّع بلاو باتش سلسلتين: FMPE (حامل بولي إيثيلين) وFMPP (حامل بولي بروبيلين). استخدام الحامل الصحيح لراتنجك الأساسي أمر حاسم — إذ يمكن أن يسبب ماستر باتش بحامل PE في تطبيق PP مشكلات معالجة تشمل الانفصال الطبقي وتشطيباً سطحياً رديئاً وتدهوراً في الخواص الميكانيكية. طابق الحامل دائماً مع الراتنج الأساسي.',
  'Property': 'الخاصية',
  'LDPE / LLDPE / HDPE': 'LDPE / LLDPE / HDPE',
  'Homo PP / Co-PP': 'هوموبوليمر PP / كوبوليمر PP',
  'Typical Applications': 'التطبيقات النموذجية',
  'Raffia, non-woven, injection moulding, BOPP': 'الرافيا والأقمشة غير المنسوجة والقولبة بالحقن وBOPP',
  'Processing Temp': 'حرارة المعالجة',
  '160–220°C': '160–220°م',
  '200–240°C': '200–240°م',
  'How to Calculate Cost Savings': 'كيفية احتساب وفورات التكلفة',
  'The calculation is straightforward. For a 20% let-down ratio, every tonne of your finished product contains approximately 200 kg of filler masterbatch and 800 kg of base polymer. If virgin LLDPE costs $1,200/MT and FMPE-1080 costs $400/MT, your blended material cost per tonne is:':
    'الحساب مباشر. عند نسبة خلط 20%، يحتوي كل طن من منتجك النهائي على نحو 200 كجم من ماستر باتش الحشو و800 كجم من البوليمر الأساسي. فإذا كان LLDPE الخام يكلّف 1,200 دولار للطن وFMPE-1080 يكلّف 400 دولار للطن، فإن تكلفة المواد الممزوجة لكل طن هي:',
  '(0.80 × $1,200) + (0.20 × $400) = $960 + $80 = $1,040/MT': '(0.80 × 1,200 دولار) + (0.20 × 400 دولار) = 960 + 80 = 1,040 دولار للطن',
  "That's a saving of $160/MT — or 13.3% — on raw material cost alone, before accounting for processing efficiencies. At higher loadings or when virgin polymer prices are elevated, savings can exceed 20%.":
    'هذه وفورات قدرها 160 دولاراً للطن — أي 13.3% — في تكلفة المواد الخام وحدها، قبل احتساب كفاءات المعالجة. وعند نسب التحميل الأعلى أو عندما ترتفع أسعار البوليمر الخام، يمكن أن تتجاوز الوفورات 20%.',
  'What Happens to Mechanical Properties?': 'ماذا يحدث للخواص الميكانيكية؟',
  'CaCO₃ filler affects different mechanical properties in different ways. Stiffness (tensile modulus) typically increases, which can be beneficial for rigid applications. Elongation at break decreases — a key consideration for blown film. Impact strength may be maintained or slightly reduced depending on particle size and surface treatment quality.':
    'يؤثر حشو CaCO₃ في الخواص الميكانيكية المختلفة بطرق مختلفة. تزداد الصلابة (معامل الشد) عادةً، ما قد يفيد التطبيقات الصلبة. ويقل الاستطالة عند الكسر — وهو اعتبار رئيسي لأفلام النفخ. وقد تبقى مقاومة الصدم كما هي أو تنخفض قليلاً حسب حجم الجسيمات وجودة المعالجة السطحية.',
  'Our recommendation: start at 15% dosage, run a short production trial, measure the properties that matter for your specific application, and adjust in 5% increments. The right balance depends on your end-use specification and quality requirements.':
    'توصيتنا: ابدأ بجرعة 15%، وأجرِ تجربة إنتاج قصيرة، وقِس الخواص المهمة لتطبيقك المحدد، ثم اضبط بزيادات 5%. يعتمد التوازن الصحيح على مواصفات الاستخدام النهائي ومتطلبات الجودة لديك.',
  'Getting Started': 'البدء',
  'Blau Batch offers 5–25 kg trial quantities to allow processing evaluation before committing to a commercial order. Contact us with your polymer type, processing parameters, and target application, and our technical team will recommend the appropriate grade and starting dosage.':
    'تقدّم بلاو باتش كميات تجريبية من 5 إلى 25 كجم للسماح بتقييم المعالجة قبل الالتزام بطلب تجاري. تواصل معنا مع ذكر نوع البوليمر وظروف المعالجة والتطبيق المستهدف، وسيوصي فريقنا الفني بالدرجة المناسبة والجرعة الأولية.',

  // ───────── caco3-loading-comparison ─────────
  '7 min read': 'قراءة 7 دقائق',
  'What Loading Level Means in Practice': 'ماذا يعني مستوى التحميل عملياً',
  'CaCO₃ loading refers to the weight percentage of calcium carbonate in the masterbatch. An 80% loading means 800g of CaCO₃ per kilogram of masterbatch — a very high concentration. At the same let-down ratio, an 80% grade delivers significantly more filler into the finished part than a 70% grade, resulting in higher potential savings but also a denser mineral matrix.':
    'يشير تحميل CaCO₃ إلى النسبة المئوية وزناً لكربونات الكالسيوم في الماستر باتش. يعني تحميل 80% وجود 800 غرام من CaCO₃ لكل كيلوغرام من الماستر باتش — وهو تركيز عالٍ جداً. وعند نسبة الخلط نفسها، توصل درجة 80% حشواً أكثر بكثير إلى الجزء النهائي مقارنةً بدرجة 70%، ما يعني وفورات محتملة أعلى لكن أيضاً مصفوفة معدنية أكثر كثافة.',
  'Grade': 'الدرجة',
  'CaCO₃ Content': 'محتوى CaCO₃',
  'Polymer Carrier': 'حامل البوليمر',
  'Best For': 'الأفضل لـ',
  'Max Recommended Dosage': 'أقصى جرعة موصى بها',
  'FMPE-1070 / FMPP-1070': 'FMPE-1070 / FMPP-1070',
  'Applications requiring good elongation and tear resistance': 'تطبيقات تتطلب استطالة جيدة ومقاومة للتمزق',
  'FMPE-1075 / FMPP-1075': 'FMPE-1075 / FMPP-1075',
  'Balanced cost savings and mechanical properties': 'وفورات تكلفة وخواص ميكانيكية متوازنة',
  'FMPE-1080 / FMPP-1080': 'FMPE-1080 / FMPP-1080',
  'Maximum cost reduction; rigid or low-specification applications': 'أقصى خفض للتكلفة؛ تطبيقات صلبة أو منخفضة المواصفات',
  'Mechanical Property Trade-Offs': 'المفاضلات في الخواص الميكانيكية',
  'As CaCO₃ loading increases, the masterbatch becomes more mineral-dense. At the same let-down ratio, higher-loading grades introduce more filler into the polymer matrix, which typically: increases stiffness (tensile modulus), reduces elongation at break, reduces tear strength in film applications, and may slightly reduce impact resistance.':
    'مع زيادة تحميل CaCO₃، يصبح الماستر باتش أكثر كثافة معدنية. وعند نسبة الخلط نفسها، تُدخل الدرجات الأعلى تحميلاً حشواً أكثر في مصفوفة البوليمر، ما يؤدي عادةً إلى: زيادة الصلابة (معامل الشد)، وتقليل الاستطالة عند الكسر، وتقليل مقاومة التمزق في تطبيقات الأفلام، وقد يقلّل قليلاً مقاومة الصدم.',
  'For blown film applications with tight elongation specifications, we generally recommend starting with the 70–75% grade. For rigid injection-moulded parts, bags, or low-cost commodity applications where elongation is not critical, the 80% grade often delivers the best economics.':
    'لتطبيقات أفلام النفخ ذات مواصفات الاستطالة الدقيقة، نوصي عموماً بالبدء بدرجة 70–75%. أما للأجزاء الصلبة المقولبة بالحقن أو الأكياس أو التطبيقات السلعية منخفضة التكلفة حيث لا تكون الاستطالة حاسمة، فغالباً ما تقدّم درجة 80% أفضل جدوى اقتصادية.',
  'Processing Considerations': 'اعتبارات المعالجة',
  'Higher-loading grades are inherently more viscous and may increase back pressure on your extruder. At very high dosage rates (20%+), ensure your screw design can handle the increased filler load without excessive wear. Melt temperature profiles may need adjustment — our TDS sheets include grade-specific processing recommendations.':
    'الدرجات الأعلى تحميلاً أكثر لزوجة بطبيعتها وقد تزيد الضغط الخلفي على آلة البثق لديك. وعند معدلات الجرعة العالية جداً (20% فأكثر)، تأكد من قدرة تصميم البرغي لديك على تحمّل زيادة حمل الحشو دون تآكل مفرط. وقد تحتاج منحنيات حرارة الانصهار إلى تعديل — تتضمن صحائف TDS لدينا توصيات معالجة خاصة بكل درجة.',
  'Which Grade Should You Start With?': 'بأي درجة تبدأ؟',
  'If you are new to filler masterbatch: start with FMPE-1075 or FMPP-1075 at 15–20% dosage. This mid-range grade gives you meaningful cost savings while maintaining a processing window close to your existing parameters. Once you are comfortable with the behaviour, you can assess whether moving to a higher-loading grade makes sense for your application.':
    'إذا كنت جديداً على ماستر باتش الحشو: ابدأ بـ FMPE-1075 أو FMPP-1075 بجرعة 15–20%. تمنحك هذه الدرجة متوسطة النطاق وفورات تكلفة ملموسة مع الحفاظ على نافذة معالجة قريبة من ظروفك الحالية. وبمجرد اعتيادك على سلوكها، يمكنك تقييم ما إذا كان الانتقال إلى درجة أعلى تحميلاً مناسباً لتطبيقك.',
  'Contact our technical team with your existing polymer spec and application, and we will recommend the appropriate starting grade and dosage for your first trial.':
    'تواصل مع فريقنا الفني مع ذكر مواصفات بوليمرك الحالي وتطبيقك، وسنوصي بالدرجة والجرعة المناسبتين لبدء تجربتك الأولى.',

  // ───────── pe-vs-pp-carrier-systems ─────────
  'February 2026': 'فبراير 2026',
  '6 min read ': 'قراءة 6 دقائق',
  'One of the most common mistakes when sourcing filler masterbatch for the first time is mismatching the carrier polymer. Using a PE-carrier masterbatch in a PP process — or vice versa — can cause a range of processing and quality problems that are difficult to diagnose without understanding why carrier compatibility matters. This article explains the underlying polymer science and how to avoid compatibility issues.':
    'من أكثر الأخطاء شيوعاً عند شراء ماستر باتش الحشو للمرة الأولى هو عدم مطابقة بوليمر الحامل. فاستخدام ماستر باتش بحامل PE في عملية PP — أو العكس — قد يسبب مجموعة من مشكلات المعالجة والجودة يصعب تشخيصها دون فهم سبب أهمية توافق الحامل. يشرح هذا المقال علم البوليمر الكامن وكيفية تجنّب مشكلات التوافق.',
  'What is a Carrier Resin?': 'ما هو راتنج الحامل؟',
  "Masterbatch is produced by melt-compounding CaCO₃ particles into a polymer matrix at high temperature and pressure. The polymer that forms this matrix is the carrier resin. The carrier must be molten and processable during manufacturing, and it must be compatible with — ideally identical to — the base resin used in the end customer's production.":
    'يُنتَج الماستر باتش بتركيب جسيمات CaCO₃ منصهرة داخل مصفوفة بوليمرية تحت حرارة وضغط عاليين. والبوليمر الذي يشكّل هذه المصفوفة هو راتنج الحامل. ويجب أن يكون الحامل منصهراً وقابلاً للمعالجة أثناء التصنيع، ويجب أن يكون متوافقاً — بل مطابقاً في الحالة المثلى — مع الراتنج الأساسي المستخدَم في إنتاج العميل النهائي.',
  'Why Carrier-Resin Mismatch Causes Problems': 'لماذا يسبب عدم تطابق راتنج الحامل مشكلات',
  'PE and PP are fundamentally different polymers with different melting ranges: PE melts at approximately 120–135°C (LDPE) to 130–145°C (HDPE), while PP melts at approximately 160–175°C. At typical PP processing temperatures (200–240°C), the PE carrier is fully melted and processable — but it remains as a separate phase within the PP matrix, since PE and PP are thermodynamically incompatible (they do not form a homogeneous blend).':
    'يعدّ PE وPP بوليمرين مختلفين جوهرياً بنطاقات انصهار مختلفة: ينصهر PE عند نحو 120–135°م (LDPE) إلى 130–145°م (HDPE)، بينما ينصهر PP عند نحو 160–175°م. وعند درجات حرارة معالجة PP النموذجية (200–240°م)، يكون حامل PE منصهراً تماماً وقابلاً للمعالجة — لكنه يبقى طوراً منفصلاً داخل مصفوفة PP، لأن PE وPP غير متوافقين ديناميكياً حرارياً (لا يشكّلان مزيجاً متجانساً).',
  'The result: an inhomogeneous melt that may cause surface defects (streaks, fish-eyes, whitish haze), mechanical property degradation (delamination, low tensile strength, reduced elongation), processing instability (fluctuating melt pressure, die drool), and poor CaCO₃ dispersion.':
    'والنتيجة: انصهار غير متجانس قد يسبب عيوباً سطحية (خطوطاً وعيون سمك وضبابية بيضاء) وتدهوراً في الخواص الميكانيكية (انفصالاً طبقياً وانخفاض مقاومة الشد وقلة الاستطالة) وعدم استقرار في المعالجة (تذبذب ضغط الانصهار وسيلان من القالب) وتشتتاً ضعيفاً لـ CaCO₃.',
  'The Simple Rule': 'القاعدة البسيطة',
  'Always match carrier to base resin: PE applications → PE carrier (FMPE Series). PP applications → PP carrier (FMPP Series). This ensures the masterbatch carrier merges seamlessly with your base polymer during processing, producing a homogeneous melt with consistent properties.':
    'طابق الحامل دائماً مع الراتنج الأساسي: تطبيقات PE ← حامل PE (سلسلة FMPE). تطبيقات PP ← حامل PP (سلسلة FMPP). يضمن هذا اندماج حامل الماستر باتش بسلاسة مع بوليمرك الأساسي أثناء المعالجة، منتجاً انصهاراً متجانساً بخواص متسقة.',
  'Your Base Resin': 'راتنجك الأساسي',
  'Correct Carrier': 'الحامل الصحيح',
  'Blau Batch Grade': 'درجة بلاو باتش',
  'PE carrier': 'حامل PE',
  'FMPE-1070, 1075, 1080': 'FMPE-1070، 1075، 1080',
  'PP carrier': 'حامل PP',
  'FMPP-1070, 1075, 1080': 'FMPP-1070، 1075، 1080',
  'BOPP film': 'فيلم BOPP',
  'FMPP-1070, 1075': 'FMPP-1070، 1075',
  'Non-woven PP': 'أقمشة PP غير منسوجة',
  'Raffia / woven bags': 'الرافيا / الأكياس المنسوجة',
  'What About Blends?': 'ماذا عن المزائج؟',
  'If you process PE/PP blends (relatively uncommon), contact our technical team for specific grade guidance. In some PE/PP blend applications, a carefully selected carrier can work acceptably, but this requires evaluation of your specific blend composition and end-use property requirements.':
    'إذا كنت تعالج مزائج PE/PP (وهو أمر غير شائع نسبياً)، تواصل مع فريقنا الفني للحصول على إرشادات درجة محددة. وفي بعض تطبيقات مزائج PE/PP، يمكن لحامل مُختار بعناية أن يعمل بشكل مقبول، لكن هذا يتطلب تقييم تركيبة المزيج المحددة لديك ومتطلبات خواص الاستخدام النهائي.',

  // ───────── tio2-masterbatch-opacity ─────────
  'White masterbatch based on Titanium Dioxide (TiO₂) is among the most widely used masterbatch types in plastics processing. It is used in packaging film, injection-moulded closures, fibres, and countless other applications. But not all white masterbatches are equal — understanding TiO₂ loading, particle size, and regulatory compliance is essential to selecting the right grade for your application.':
    'يُعدّ الماستر باتش الأبيض القائم على ثاني أكسيد التيتانيوم (TiO₂) من أكثر أنواع الماستر باتش استخداماً في معالجة البلاستيك. ويُستخدم في أفلام التغليف والأغطية المقولبة بالحقن والألياف وتطبيقات لا حصر لها أخرى. لكن ليست كل أنواع الماستر باتش الأبيض متساوية — فهم تحميل TiO₂ وحجم الجسيمات والمطابقة التنظيمية أساسي لاختيار الدرجة المناسبة لتطبيقك.',
  'Why TiO₂?': 'لماذا TiO₂؟',
  'Titanium Dioxide is the most effective white pigment available — it has an exceptionally high refractive index (2.7 for rutile grade), which means it scatters visible light very efficiently. A small amount of TiO₂ produces a high degree of opacity (hiding power) and a bright, neutral white colour. No other white pigment approaches TiO₂ in opacity per unit weight.':
    'ثاني أكسيد التيتانيوم هو أكثر الأصباغ البيضاء فعالية المتاحة — فله معامل انكسار عالٍ استثنائياً (2.7 لدرجة الروتيل)، ما يعني أنه يشتت الضوء المرئي بكفاءة عالية جداً. وتنتج كمية صغيرة من TiO₂ درجة عالية من العتامة (قوة التغطية) ولوناً أبيض ساطعاً ومحايداً. ولا يقترب أي صبغ أبيض آخر من TiO₂ في العتامة لكل وحدة وزن.',
  'How Loading Affects Opacity': 'كيف يؤثر التحميل في العتامة',
  'TiO₂ masterbatch is typically produced at 50–70% TiO₂ loading. The opacity of the finished plastic part depends on both the masterbatch loading level and the let-down ratio (dosage rate). Higher dosage or higher TiO₂ loading in the masterbatch produces greater opacity — but above a certain threshold, the relationship becomes non-linear due to light scattering interference between closely-spaced pigment particles (this is called "optical crowding").':
    'يُنتَج ماستر باتش TiO₂ عادةً بتحميل 50–70% TiO₂. وتعتمد عتامة الجزء البلاستيكي النهائي على مستوى تحميل الماستر باتش ونسبة الخلط (معدل الجرعة) معاً. وتنتج الجرعة الأعلى أو التحميل الأعلى لـ TiO₂ في الماستر باتش عتامة أكبر — لكن فوق عتبة معينة، تصبح العلاقة غير خطية بسبب تداخل تشتت الضوء بين جسيمات الصبغ المتقاربة (يُسمى هذا "الازدحام البصري").',
  'For packaging film applications, a dosage of 4–8% white masterbatch (at 50–60% TiO₂ loading) typically achieves opacity levels of 85–95%, suitable for most packaging requirements. Exact dosage depends on film thickness, TiO₂ particle size distribution, and the required CIE whiteness index.':
    'لتطبيقات أفلام التغليف، تحقق جرعة 4–8% من الماستر باتش الأبيض (بتحميل TiO₂ 50–60%) عادةً مستويات عتامة 85–95%، مناسبة لمعظم متطلبات التغليف. وتعتمد الجرعة الدقيقة على سماكة الفيلم وتوزيع حجم جسيمات TiO₂ ومؤشر البياض CIE المطلوب.',
  'Food-Contact Compliance': 'مطابقة ملامسة الأغذية',
  'For applications that contact food — packaging, closures, containers, food-service items — the masterbatch must comply with applicable food-contact regulations. The two most relevant frameworks are EU Regulation 10/2011 on plastic materials intended to contact food, and FDA 21 CFR (US Food and Drug Administration Code of Federal Regulations).':
    'بالنسبة للتطبيقات التي تلامس الأغذية — التغليف والأغطية والحاويات وأدوات تقديم الطعام — يجب أن يطابق الماستر باتش لوائح ملامسة الأغذية المعمول بها. وأهم إطارين في هذا الصدد هما لائحة الاتحاد الأوروبي 10/2011 بشأن المواد البلاستيكية المعدّة لملامسة الأغذية، وFDA 21 CFR (لائحة إدارة الغذاء والدواء الأمريكية).',
  'Not all TiO₂ grades are food-contact compliant — some pigment grades, carrier additives, or processing aids used in masterbatch production may not be approved for food contact use. When sourcing white masterbatch for food-contact applications, always request explicit confirmation of compliance and ask for the relevant Declaration of Compliance (DoC).':
    'ليست كل درجات TiO₂ مطابقة لملامسة الأغذية — فبعض درجات الأصباغ أو إضافات الحامل أو مساعدات المعالجة المستخدمة في إنتاج الماستر باتش قد لا تكون معتمَدة لاستخدام ملامسة الأغذية. وعند شراء ماستر باتش أبيض لتطبيقات ملامسة الأغذية، اطلب دائماً تأكيداً صريحاً للمطابقة واطلب إقرار المطابقة (DoC) ذي الصلة.',
  'Through the Coraplast range distributed by Blau Batch, food-contact compliant white masterbatch grades are available. Contact us with your application details and we will provide the appropriate grade and compliance documentation.':
    'عبر مجموعة Coraplast التي توزّعها بلاو باتش، تتوفر درجات ماستر باتش أبيض مطابقة لملامسة الأغذية. تواصل معنا مع تفاصيل تطبيقك وسنوفّر الدرجة المناسبة ووثائق المطابقة.',

  // ───────── uv-stabilisation-agricultural-film ─────────
  'March 2026': 'مارس 2026',
  'Agricultural films — greenhouse covers, mulch films, silage films, and drip irrigation tubing — operate under intense UV radiation, often for multiple seasons. In MENA and Mediterranean climates, UV exposure levels are among the highest in the world. Without effective UV stabilisation, polyethylene film will degrade, embrittle, and fail within one to two seasons. This guide explains how UV stabilisation works and what to look for in a masterbatch.':
    'تعمل الأفلام الزراعية — أغطية البيوت المحمية وأفلام المالش والسيلاج وأنابيب الري بالتنقيط — تحت إشعاع UV شديد، غالباً لعدة مواسم. وفي مناخ الشرق الأوسط وشمال أفريقيا والبحر المتوسط، تُعدّ مستويات التعرّض لـ UV من الأعلى في العالم. ودون تثبيت فعال ضد UV، سيتحلل فيلم البولي إيثيلين ويصبح هشاً ويفشل خلال موسم إلى موسمين. يشرح هذا الدليل كيف يعمل التثبيت ضد UV وما الذي يجب البحث عنه في الماستر باتش.',
  'How UV Radiation Degrades Polyethylene': 'كيف يحلل إشعاع UV البولي إيثيلين',
  'UV radiation from sunlight (specifically wavelengths between 290–400 nm) provides enough energy to break the C-C and C-H bonds in the polyethylene polymer chain. This process — called photo-oxidation — is initiated by the formation of free radicals and hydroperoxides. Without stabilisation, these radicals propagate rapidly, causing chain scission (molecular weight reduction), crosslinking, discolouration, surface chalking, and ultimately mechanical failure (cracking, embrittlement).':
    'يوفّر إشعاع UV من ضوء الشمس (وتحديداً الأطوال الموجية بين 290–400 نانومتر) طاقة كافية لكسر روابط C-C وC-H في سلسلة بوليمر البولي إيثيلين. وتبدأ هذه العملية — التي تُسمى الأكسدة الضوئية — بتكوّن جذور حرة وفوق أكسيد الهيدروجين. ودون تثبيت، تنتشر هذه الجذور بسرعة، مسببة تكسّر السلسلة (انخفاض الوزن الجزيئي) والتشابك وتغيّر اللون وتطبّش السطح، وفي النهاية فشلاً ميكانيكياً (تشققاً وهشاشة).',
  'How HALS Stabilisers Work': 'كيف تعمل مثبّتات HALS',
  'Hindered Amine Light Stabilisers (HALS) are the most effective UV protection technology for polyolefin films. Unlike UV absorbers (which simply absorb UV radiation and convert it to heat), HALS work by a catalytic free-radical scavenging mechanism — they interrupt the photo-oxidation cycle at the radical propagation stage, without being consumed in the process. This is why HALS are highly efficient at low concentrations and provide long-term protection.':
    'مثبّتات الضوء الأمينية المعاقة (HALS) هي أكثر تقنيات الحماية من UV فعالية لأفلام البولي أوليفين. وخلافاً لممتصات UV (التي تمتص إشعاع UV وتحوّله إلى حرارة فقط)، تعمل HALS بآلية حفزية لالتقاط الجذور الحرة — إذ تقطع دورة الأكسدة الضوئية عند مرحلة انتشار الجذور، دون أن تُستهلَك في العملية. ولهذا تتمتع HALS بكفاءة عالية عند تركيزات منخفضة وتوفّر حماية طويلة الأمد.',
  'For agricultural films requiring 3–5+ year outdoor performance in MENA climates, HALS concentrations of 0.3–1.0% in the finished film are typically required, depending on film thickness, climate, and specific product. This is delivered through black masterbatch (for black mulch film) or dedicated UV additive masterbatch at appropriate dosage rates.':
    'بالنسبة للأفلام الزراعية التي تتطلب أداءً خارجياً لـ 3–5 سنوات أو أكثر في مناخ الشرق الأوسط وشمال أفريقيا، تُطلب عادةً تركيزات HALS بين 0.3% و1.0% في الفيلم النهائي، حسب سماكة الفيلم والمناخ والمنتج المحدد. ويُقدَّم هذا عبر الماستر باتش الأسود (لفيلم المالش الأسود) أو ماستر باتش إضافات UV المخصص بمعدلات جرعة مناسبة.',
  'Black Masterbatch for Agricultural Applications': 'الماستر باتش الأسود للتطبيقات الزراعية',
  'Carbon black in black masterbatch acts as both a UV absorber and an antioxidant, providing inherent UV protection. However, for demanding agricultural applications, carbon black alone is often insufficient for extended service life — a combination of carbon black and HALS provides better performance and longer service life.':
    'يعمل أسود الكربون في الماستر باتش الأسود كممتص لـ UV ومضاد للأكسدة في آن واحد، ما يوفّر حماية متأصلة من UV. لكن في التطبيقات الزراعية الصعبة، غالباً ما يكون أسود الكربون وحده غير كافٍ لعمر خدمة طويل — ويوفّر الجمع بين أسود الكربون وHALS أداءً أفضل وعمر خدمة أطول.',
  'Our Coraplast black masterbatch range includes UV-stable grades specifically formulated for agricultural and pipe applications, with HALS levels appropriate for MENA climate conditions. Contact us with your required service life and application details for a specific grade recommendation.':
    'تشمل مجموعة الماستر باتش الأسود من Coraplast لدينا درجات مثبَّتة ضد UV مصمَّمة خصيصاً لتطبيقات الزراعة والمواسير، بمستويات HALS مناسبة لظروف مناخ الشرق الأوسط وشمال أفريقيا. تواصل معنا مع عمر الخدمة المطلوب وتفاصيل التطبيق للحصول على توصية درجة محددة.',

  // ───────── reading-masterbatch-coa ─────────
  'A Certificate of Analysis (CoA) is a batch-specific quality document that confirms the tested properties of a masterbatch shipment meet the agreed specification. Every Blau Batch shipment comes with a CoA — but knowing how to read it is just as important as receiving it. This guide explains the seven key properties you should check on every CoA, what they mean, and what to watch for.':
    'شهادة التحليل (CoA) مستند جودة خاص بكل تشغيلة يؤكد أن الخواص المختبَرة لشحنة الماستر باتش تطابق المواصفات المتفق عليها. وتأتي كل شحنة من بلاو باتش مع شهادة CoA — لكن معرفة كيفية قراءتها لا تقل أهمية عن استلامها. يشرح هذا الدليل الخواص السبع الرئيسية التي يجب التحقق منها في كل شهادة CoA، ومعناها، وما يجب الانتباه إليه.',
  '1. Melt Flow Index (MFI / MFR)': '1. مؤشر سيولة الانصهار (MFI / MFR)',
  'MFI (also called Melt Flow Rate, MFR) measures how easily the polymer flows when melted, expressed in g/10min. For FMPE, the test is typically run at 190°C / 2.16 kg; for FMPP, at 230°C / 2.16 kg (ISO 1133). MFI affects how the masterbatch blends with your base resin — a very high or very low MFI can cause processing problems. Check that the reported value falls within the range specified on your product TDS.':
    'يقيس MFI (يُسمى أيضاً معدل سيولة الانصهار، MFR) مدى سهولة انسياب البوليمر عند انصهاره، ويُعبَّر عنه بغرام/10 دقائق. بالنسبة لـ FMPE، يُجرى الاختبار عادةً عند 190°م / 2.16 كجم؛ ولـ FMPP، عند 230°م / 2.16 كجم (ISO 1133). ويؤثر MFI في كيفية امتزاج الماستر باتش مع راتنجك الأساسي — إذ يمكن أن يسبب MFI المرتفع جداً أو المنخفض جداً مشكلات في المعالجة. تحقق من أن القيمة المسجَّلة تقع ضمن النطاق المحدد في TDS الخاص بمنتجك.',
  '2. Ash Content': '2. محتوى الرماد',
  'Ash content (ISO 3451) is the residue remaining after burning the organic polymer, expressed as a percentage by weight. For filler masterbatch, ash content is directly related to CaCO₃ loading — an 80% loading grade should show approximately 79–81% ash. A result significantly outside this range indicates either a production issue or a mismatch with the specified grade.':
    'محتوى الرماد (ISO 3451) هو المتبقي بعد حرق البوليمر العضوي، ويُعبَّر عنه كنسبة مئوية وزنية. وبالنسبة لماستر باتش الحشو، يرتبط محتوى الرماد مباشرةً بتحميل CaCO₃ — إذ يجب أن تُظهر درجة تحميل 80% رماداً بنسبة 79–81% تقريباً. وتشير نتيجة خارج هذا النطاق بشكل ملحوظ إلى مشكلة إنتاجية أو عدم تطابق مع الدرجة المحددة.',
  '3. Moisture Content': '3. محتوى الرطوبة',
  'Moisture content should be very low — typically below 0.2% for filler masterbatch. Elevated moisture causes processing defects including surface bubbles, voids, and visual surface defects (splay marks). This is particularly critical for blown film and injection moulding. If moisture is elevated, the material may need to be dried before use (typically 2–4 hours at 80°C for PE-based grades).':
    'يجب أن يكون محتوى الرطوبة منخفضاً جداً — عادةً أقل من 0.2% لماستر باتش الحشو. وتسبب الرطوبة المرتفعة عيوب معالجة تشمل فقاعات سطحية وفراغات وعيوباً سطحية بصرية (علامات تشعب). وهذا حاسم بشكل خاص لأفلام النفخ والقولبة بالحقن. وإذا كانت الرطوبة مرتفعة، فقد تحتاج المادة إلى التجفيف قبل الاستخدام (عادةً 2–4 ساعات عند 80°م للدرجات القائمة على PE).',
  '4. Colour / Appearance': '4. اللون / المظهر',
  'For filler and white masterbatch, CoA may include a visual appearance notation (e.g., "white to off-white pellets, uniform colour"). For colour masterbatch, a ΔE value is critical — this measures the colour difference against a reference standard. A ΔE of ≤ 1.0 is generally imperceptible; Blau Batch colour masterbatch targets ΔE ≤ 0.5 batch-to-batch.':
    'بالنسبة لماستر باتش الحشو والأبيض، قد تتضمن شهادة CoA ملاحظة مظهر بصري (مثل "حبيبات بيضاء إلى شبه بيضاء، لون منتظم"). أما بالنسبة لماستر باتش الملوّن، فقيمة ΔE أمر حاسم — إذ تقيس فرق اللون مقارنةً بمعيار مرجعي. وتُعدّ قيمة ΔE ≤ 1.0 غير محسوسة عموماً؛ ويستهدف ماستر باتش الملوّن من بلاو باتش ΔE ≤ 0.5 بين التشغيلات.',
  '5. Dispersibility': '5. قابلية التشتت',
  'Dispersibility is assessed by pressing a thin film of the blended compound and inspecting it against a light source for undispersed agglomerates (specks, gels, or hard particles). Poor dispersion is one of the leading causes of film defects and print quality issues. Request the dispersibility rating or filter pressure value (ΔP) if relevant to your application.':
    'تُقيَّم قابلية التشتت بكبس فيلم رقيق من المركّب الممزوج وفحصه أمام مصدر ضوء بحثاً عن تكتلات غير متشتتة (نقاط أو هلاميات أو جسيمات صلبة). ويُعدّ التشتت الضعيف من الأسباب الرئيسية لعيوب الأفلام ومشكلات جودة الطباعة. اطلب تقييم قابلية التشتت أو قيمة ضغط الترشيح (ΔP) إن كان ذلك ذا صلة بتطبيقك.',
  '6. Density / Bulk Density': '6. الكثافة / الكثافة الظاهرية',
  'Higher CaCO₃ loading results in higher density — an 80% filler grade will have a density of approximately 1.6–1.8 g/cm³ versus approximately 0.92 g/cm³ for LDPE. This affects gravimetric dosing calculations. If you dose by weight, density consistency between batches ensures consistent dosage. Check that reported density is within the expected range for your grade.':
    'يؤدي تحميل CaCO₃ الأعلى إلى كثافة أعلى — ستكون كثافة درجة حشو 80% نحو 1.6–1.8 غ/سم³ مقابل نحو 0.92 غ/سم³ لـ LDPE. ويؤثر هذا في حسابات الجرعات الوزنية. وإذا كنت تجرّع بالوزن، فإن اتساق الكثافة بين التشغيلات يضمن جرعة متسقة. تحقق من أن الكثافة المسجَّلة ضمن النطاق المتوقع لدرجتك.',
  '7. Pellet Appearance & Uniformity': '7. مظهر الحبيبات واتساقها',
  'While not always a numerical test, the CoA should confirm pellet appearance — size, shape, and colour should be consistent with previous batches. Unusual discolouration (yellowing, dark specks) can indicate degradation during processing. Non-uniform pellet size can cause dosing inconsistencies. If something looks wrong visually, request a replacement or additional testing before processing.':
    'رغم أنه ليس اختباراً رقمياً دائماً، يجب أن تؤكد شهادة CoA مظهر الحبيبات — إذ يجب أن يكون الحجم والشكل واللون متسقاً مع التشغيلات السابقة. ويمكن أن يشير تغيّر اللون غير المعتاد (اصفرار أو نقاط داكنة) إلى تدهور أثناء المعالجة. وقد يسبب عدم اتساق حجم الحبيبات تفاوتاً في الجرعات. وإذا بدا شيء خاطئاً بصرياً، اطلب استبدالاً أو اختباراً إضافياً قبل المعالجة.',
  'What to Do if a Value is Out of Range': 'ماذا تفعل إذا كانت قيمة ما خارج النطاق',
  'If any value on the CoA falls outside the agreed specification range, raise a non-conformance report (NCR) with your supplier before processing the batch. Processing out-of-specification material makes it much harder to claim a replacement or credit — and may cause downstream quality issues that are difficult to attribute. Blau Batch\'s quality claims process requires written notification within 14 days of delivery, accompanied by representative samples.':
    'إذا وقعت أي قيمة في شهادة CoA خارج نطاق المواصفات المتفق عليه، ارفع تقرير عدم مطابقة (NCR) إلى موردك قبل معالجة التشغيلة. فمعالجة مادة خارج المواصفات تجعل المطالبة بالاستبدال أو الخصم أصعب بكثير — وقد تسبب مشكلات جودة لاحقة يصعب تحديد سببها. وتتطلب عملية مطالبات الجودة لدى بلاو باتش إشعاراً كتابياً خلال 14 يوماً من التسليم، مرفقاً بعيّنات تمثيلية.',
  'Filler masterbatch is a solid concentrate of Calcium Carbonate (CaCO₃) — commonly known as chalk or limestone — dispersed at high loading levels in a polymer carrier. The CaCO₃ particles are surface-treated with stearic acid or other coupling agents to improve dispersion and compatibility with the host polymer.': 'ماستر باتش الحشو مركّز صلب من كربونات الكالسيوم (CaCO₃) — المعروفة باسم الطباشير أو الحجر الجيري — موزَّع بنسب تحميل عالية في حامل بوليمري. وتُعالَج جسيمات CaCO₃ سطحياً بحمض الستياريك أو عوامل ربط أخرى لتحسين تشتتها وتوافقها مع البوليمر المضيف.',
  ', one of the region’s most respected names in premium color and additive masterbatch.': '، إحدى أكثر الأسماء احتراماً في المنطقة في ماستر باتش الألوان والإضافات الفاخرة.',
  '— UV stabilizers, anti-block, and processing aids.': '— مثبّتات UV ومانعات التصاق ومساعدات معالجة.',
  ". We aren't just selling pellets; we’re providing the material foundation for your production’s success.": '. نحن لا نبيع حبيبات بلاستيكية فحسب؛ بل نقدّم الأساس المادي لنجاح إنتاجك.',
  '— In film applications, the filler acts as a natural anti-block, reducing the need for expensive specialty additives.': '— في تطبيقات الأفلام، يعمل الحشو كمانع التصاق طبيعي، ما يقلّل الحاجة إلى إضافات خاصة مكلفة.',
  '— The "secret sauce" that ensures smooth flow and high dispersion.': '— "السر الخفي" الذي يضمن انسياباً سلساً وتشتتاً عالياً.',
  'Share': 'مشاركة',
  'Copy link': 'نسخ الرابط',
  'Copied': 'تم النسخ',
  'Processing Additives': 'مساعدات المعالجة',
}

export default legalBlog
