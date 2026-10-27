// Copyright (c) 2026 Ryanw506. All rights reserved.
(() => {
  'use strict';
  const strings = {
    en: {
      downloadDiagram:'A ZIP file in the downloads list', extractDiagram:'Extract the archive into a VC Tools folder', openDiagram:'Open VC Tools.exe from the extracted folder', downloadsFolder:'Downloads', zipArchive:'ZIP archive', savedFile:'Saved to your computer', extractAll:'Extract all', applicationType:'Application', doubleClick:'Double-click to open',
      skip:'Skip to content', homeAria:'VC Tools home', logoAlt:'VC Tools logo', navigationAria:'Main navigation',
      navAbout:'About', navHow:'How it works', navDownload:'Download', headerDownload:'Download', eyebrow:'A desktop tool for Roblox',
      heroFirst:'Your friends list,', heroSecond:'made simpler.', heroDescription:'VC Tools is a Windows app in development, designed to help you organize your Roblox friends and review your choices with ease.', heroButton:'Download information', learnMore:'Learn more', forWindows:'For Windows', zipFormat:'ZIP download',
      previewAria:'Illustrative app preview with fictional names', manageFriends:'Manage friends', friends:'Friends', reviewPrompt:'Review your list before removing anyone.', friendsCount:'3 friends', searchFriend:'Search friends...', friend:'Friend', account:'Account', view:'View ↗', selected:'selected', reviewSelected:'Review selected', previewNote:'Illustrative preview with fictional names',
      aboutLabel:'About', aboutTitle1:'A clearer view,', aboutTitle2:'before every action.', aboutDescription:'VC Tools is designed to bring the essentials of friend management together, with room to review your choices.',
      feature1Title:'One organized list', feature1Body:'See display names and usernames in a clean, readable view.', feature2Title:'Search and select', feature2Body:'Find the people you need and select them from the list.', feature3Title:'Review before confirming', feature3Body:'Check the selected names before completing a removal.', featureNote:'Full functionality and Roblox account connection are still in development for the desktop app.',
      howLabel:'How it works', howTitle:'From download to desktop.', howDescription:'The program runs on your computer. This website is for information and downloads.', step1Title:'Download the file', step1Body:'Get the ZIP file when the release is available.', step2Title:'Extract the ZIP', step2Body:'Extract the files into a folder on your computer.', step3Title:'Open the app', step3Body:'Launch VC Tools from the extracted folder.',
      downloadLabel:'Download', downloadTitle:'Ready to tidy up your list?', downloadDescription:'The first desktop release is being prepared. The download link will appear here when it is ready.', comingSoon:'Coming soon', downloadStatus:'Download link not available yet', footerCredit:'Simple tools, less busywork.', githubAria:'Ryanw506 on GitHub', rights:'All rights reserved.', notAffiliated:'An independent tool, not affiliated with Roblox.'
    },
    ar: {
      downloadDiagram:'ملف ZIP داخل قائمة التنزيلات', extractDiagram:'استخراج الأرشيف إلى مجلد VC Tools', openDiagram:'فتح VC Tools.exe من المجلد المستخرج', downloadsFolder:'التنزيلات', zipArchive:'أرشيف ZIP', savedFile:'تم حفظ الملف على جهازك', extractAll:'استخراج الكل', applicationType:'تطبيق', doubleClick:'انقر مرتين للتشغيل',
      skip:'انتقل للمحتوى', homeAria:'VC Tools الرئيسية', logoAlt:'شعار VC Tools', navigationAria:'القائمة الرئيسية',
      navAbout:'عن الأداة', navHow:'طريقة الاستخدام', navDownload:'التحميل', headerDownload:'التحميل', eyebrow:'أداة سطح مكتب لروبلوكس',
      heroFirst:'قائمة أصدقائك،', heroSecond:'بشكل أبسط.', heroDescription:'VC Tools أداة للكمبيوتر قيد التطوير، هدفها تساعدك ترتّب قائمة أصدقائك وتراجع اختياراتك بسهولة.', heroButton:'الانتقال للتحميل', learnMore:'تعرّف على الأداة', forWindows:'مخصصة لويندوز', zipFormat:'تحميل بصيغة ZIP',
      previewAria:'تصوّر توضيحي لواجهة الأداة، يحتوي على أسماء تجريبية', manageFriends:'إدارة الأصدقاء', friends:'الأصدقاء', reviewPrompt:'راجع القائمة قبل الإزالة.', friendsCount:'3 أصدقاء', searchFriend:'ابحث عن صديق...', friend:'الصديق', account:'الحساب', view:'عرض ↗', selected:'محدد', reviewSelected:'مراجعة المحددين', previewNote:'واجهة توضيحية بأسماء تجريبية',
      aboutLabel:'عن الأداة', aboutTitle1:'كل شيء واضح،', aboutTitle2:'قبل أي خطوة.', aboutDescription:'صُممت VC Tools لتجمع أساسيات إدارة الأصدقاء في مكان واحد، مع مساحة لمراجعة اختيارك.',
      feature1Title:'قائمة واحدة', feature1Body:'عرض الأسماء واليوزرات في واجهة مرتبة وسهلة القراءة.', feature2Title:'ابحث وحدّد', feature2Body:'الوصول للأسماء التي تحتاجها وتحديدها من القائمة.', feature3Title:'راجع قبل التأكيد', feature3Body:'شاهد الأسماء المحددة قبل إكمال أي عملية إزالة.', featureNote:'الوظائف الكاملة وربط حساب روبلوكس لا تزال قيد التطوير في نسخة الكمبيوتر.',
      howLabel:'طريقة الاستخدام', howTitle:'من التحميل إلى التشغيل.', howDescription:'البرنامج يُحمّل على جهازك، والموقع مخصص للتعريف والتحميل.', step1Title:'حمّل الملف', step1Body:'حمّل ملف ZIP عند توفر النسخة.', step2Title:'فك الضغط', step2Body:'استخرج الملفات في مجلد على جهازك.', step3Title:'افتح البرنامج', step3Body:'شغّل ملف VC Tools من المجلد.',
      downloadLabel:'التحميل', downloadTitle:'جاهز ترتّب قائمتك؟', downloadDescription:'النسخة الأولى للكمبيوتر قيد التجهيز. رابط التحميل بيكون متاح هنا عند جاهزيته.', comingSoon:'التحميل قريبًا', downloadStatus:'رابط التحميل لم يُضف بعد', footerCredit:'أدوات بسيطة، بوقت أقل.', githubAria:'حساب Ryanw506 على GitHub', rights:'جميع الحقوق محفوظة.', notAffiliated:'أداة مستقلة غير تابعة لـ Roblox.'
    }
  };
  const button=document.getElementById('language-toggle');
  function setLanguage(lang){
    const dictionary=strings[lang]; if(!dictionary)return;
    document.documentElement.lang=lang; document.documentElement.dir=lang==='ar'?'rtl':'ltr';
    document.title=lang==='ar'?'VC Tools | أدوات أبسط لروبلوكس':'VC Tools | Simple Roblox utilities';
    document.querySelectorAll('[data-i18n]').forEach(node=>{const text=dictionary[node.dataset.i18n];if(typeof text==='string')node.textContent=text;});
    document.querySelectorAll('[data-i18n-aria]').forEach(node=>{const text=dictionary[node.dataset.i18nAria];if(typeof text==='string')node.setAttribute('aria-label',text);});
    document.querySelectorAll('[data-i18n-alt]').forEach(node=>{const text=dictionary[node.dataset.i18nAlt];if(typeof text==='string')node.setAttribute('alt',text);});
    button.textContent=lang==='en'?'العربية':'English';
    button.setAttribute('aria-label',lang==='en'?'Switch language to Arabic':'Switch language to English');
    button.setAttribute('lang',lang==='en'?'ar':'en');
  }
  let current='en';try{if(localStorage.getItem('vc-site-language')==='ar')current='ar';}catch{}
  setLanguage(current);
  button.addEventListener('click',()=>{current=current==='en'?'ar':'en';setLanguage(current);try{localStorage.setItem('vc-site-language',current);}catch{}});
})();
