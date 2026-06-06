# ⚡ دليل البدء السريع - 15 دقيقة

## 🎯 الهدف
تخصيص البورتفوليو بمعلوماتك الأساسية في أقل من 15 دقيقة.

## ✅ Checklist سريع

### الخطوة 1: المعلومات الأساسية (3 دقائق)

افتح `index.html` وابحث عن هذه الأقسام وعدّلها:

```html
<!-- في <head> -->
<title>[اسمك] - Portfolio</title>
<meta name="description" content="[وصف مختصر عنك]">
<meta name="author" content="[اسمك]">
```

**مثال:**
```html
<title>أحمد محمد - Portfolio | مصمم UI/UX</title>
<meta name="description" content="مصمم UI/UX متخصص في تصميم تجارب رقمية استثنائية">
<meta name="author" content="أحمد محمد">
```

---

### الخطوة 2: Hero Section (5 دقائق)

ابحث عن `<section id="home" class="hero">`:

```html
<h1 class="hero-name">[اسمك الكامل]</h1>
<h2 class="hero-title">
    <span class="typing-text">[مسماك الوظيفي]</span>
</h2>
<p class="hero-description">
    [جملة قوية عنك - 2-3 أسطر]
</p>
```

**مثال:**
```html
<h1 class="hero-name">أحمد محمد علي</h1>
<h2 class="hero-title">
    <span class="typing-text">مصمم UI/UX ومطور واجهات أمامية</span>
</h2>
<p class="hero-description">
    أحول الأفكار إلى تجارب رقمية استثنائية تجمع بين الجمال والوظيفية، 
    مع التركيز على تحسين تجربة المستخدم وزيادة معدلات التحويل.
</p>
```

---

### الخطوة 3: معلومات التواصل (3 دقائق)

ابحث عن `<section id="contact"`:

```html
<a href="mailto:[بريدك]">[بريدك]</a>
<a href="tel:[رقمك]">[رقمك]</a>
<p>[مدينتك، بلدك]</p>

<!-- روابط وسائل التواصل -->
<a href="[رابط LinkedIn]" target="_blank">
<a href="[رابط GitHub]" target="_blank">
<a href="[رابط Behance]" target="_blank">
```

**مثال:**
```html
<a href="mailto:ahmed@example.com">ahmed@example.com</a>
<a href="tel:+966501234567">+966 50 123 4567</a>
<p>الرياض، السعودية</p>

<a href="https://linkedin.com/in/ahmed-mohamed" target="_blank">
<a href="https://github.com/ahmedmohamed" target="_blank">
<a href="https://behance.net/ahmedmohamed" target="_blank">
```

---

### الخطوة 4: الصورة الشخصية (2 دقيقة)

1. ضع صورتك في مجلد `images/` باسم `profile.jpg`
2. ابحث عن:

```html
<img src="[رابط صورتك الشخصية]" alt="[اسمك]">
```

3. عدّلها إلى:

```html
<img src="images/profile.jpg" alt="أحمد محمد">
```

---

### الخطوة 5: الإحصائيات (2 دقيقة)

ابحث عن `<div class="about-stats">`:

```html
<div class="stat-item">
    <span class="stat-number">[5+]</span>
    <span class="stat-label">سنوات خبرة</span>
</div>
<div class="stat-item">
    <span class="stat-number">[50+]</span>
    <span class="stat-label">مشروع منجز</span>
</div>
```

**عدّلها حسب إحصائياتك:**
```html
<div class="stat-item">
    <span class="stat-number">3+</span>
    <span class="stat-label">سنوات خبرة</span>
</div>
<div class="stat-item">
    <span class="stat-number">25+</span>
    <span class="stat-label">مشروع منجز</span>
</div>
```

---

## 🎨 تخصيص الألوان (اختياري - 2 دقيقة)

افتح `styles.css` وابحث عن `:root`:

```css
:root {
    --primary-color: #2563eb;      /* غيّر هذا */
    --secondary-color: #8b5cf6;    /* وهذا */
}
```

**ألوان مقترحة:**

**أزرق احترافي (الحالي):**
```css
--primary-color: #2563eb;
--secondary-color: #8b5cf6;
```

**أخضر طبيعي:**
```css
--primary-color: #10b981;
--secondary-color: #3b82f6;
```

**وردي إبداعي:**
```css
--primary-color: #ec4899;
--secondary-color: #8b5cf6;
```

**برتقالي حيوي:**
```css
--primary-color: #f59e0b;
--secondary-color: #ef4444;
```

---

## 🚀 الخطوات التالية

بعد إكمال التخصيص السريع:

### 1. معاينة محلية
- افتح `index.html` في المتصفح
- تحقق من أن كل شيء يظهر بشكل صحيح

### 2. إضافة المحتوى التفصيلي
- املأ قسم المهارات
- أضف خبراتك العملية
- أضف مشاريعك
- أضف تعليمك وشهاداتك

راجع `README.md` للتعليمات التفصيلية و `EXAMPLES.md` للأمثلة.

### 3. إضافة الصور
أنشئ مجلد `images/` وأضف:
- `profile.jpg` - صورتك الشخصية (400x400px مثالي)
- `projects/` - مجلد لصور المشاريع
- `certificates/` - مجلد لصور الشهادات (اختياري)

### 4. اختبار على الأجهزة
- اختبر على الموبايل
- اختبر على التابلت
- اختبر على متصفحات مختلفة

### 5. النشر
اختر منصة نشر:
- **GitHub Pages** (مجاني وسهل)
- **Netlify** (مجاني مع مميزات إضافية)
- **Vercel** (ممتاز للمطورين)

راجع قسم "نشر البورتفوليو" في `README.md`

---

## 📋 قائمة التحقق النهائية

قبل النشر، تأكد من:

- [ ] جميع النصوص معدّلة (لا توجد `[أدخل هنا...]`)
- [ ] معلومات التواصل صحيحة
- [ ] الصورة الشخصية موجودة وواضحة
- [ ] جميع الروابط تعمل
- [ ] لا توجد أخطاء إملائية
- [ ] التصميم يعمل على الموبايل
- [ ] الألوان مناسبة لمجالك

---

## 🆘 مشاكل شائعة وحلولها

### المشكلة: الصورة لا تظهر
**الحل:** تأكد من:
- المسار صحيح: `images/profile.jpg`
- الصورة موجودة في المجلد
- اسم الملف مطابق تماماً (حساس لحالة الأحرف)

### المشكلة: الألوان لم تتغير
**الحل:**
- احفظ ملف `styles.css`
- أعد تحميل الصفحة (Ctrl+F5)
- امسح الكاش

### المشكلة: التصميم مكسور على الموبايل
**الحل:**
- تأكد من وجود: `<meta name="viewport" content="width=device-width, initial-scale=1.0">`
- لا تعدّل CSS بدون فهم

---

## 💡 نصيحة أخيرة

**لا تحاول أن تكون مثالياً من المرة الأولى!**

- ابدأ بالأساسيات
- انشر نسخة أولية
- حسّن تدريجياً
- اطلب feedback من الآخرين

البورتفوليو الجيد هو الذي يتطور مع الوقت. 🚀

---

**هل أنت جاهز؟ ابدأ الآن! ⚡**

للمساعدة التفصيلية، راجع:
- `README.md` - الدليل الشامل
- `EXAMPLES.md` - أمثلة عملية
