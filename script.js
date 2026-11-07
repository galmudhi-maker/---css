<!DOCTYPE html>
<html lang="ar" dir="rtl">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>صفحة التواصل معي</title>
  <link rel="stylesheet" href="style.css">
</head>

<body>

  <header class="hero">
    <h1>أهلاً بك في صفحة التواصل معي</h1>
    <p>يسعدني استقبال رسائلك وملاحظاتك</p>
  </header>

  <nav>
    <a href="Ghala1.html">الرئيسية</a>
    <a href="Ghala2.html">استديو الصور</a>
    <a href="Ghala3.html">تواصل معي</a>
  </nav>

  <main class="container">

    <section class="card contact-card">

      <p class="intro">
        عزيزي الزائر : أرجو منك تعبئة الحقول التالية بدقة
      </p>

      <form>

        <label>الاسم الثلاثي:</label>
        <input type="text" placeholder="اكتب اسمك الثلاثي">

        <label>البريد الإلكتروني:</label>
        <input type="email" placeholder="example@email.com">

        <label>كلمة المرور:</label>
        <input type="password" placeholder="اكتب كلمة المرور">

        <fieldset>
          <legend>الصف:</legend>

          <label class="option">
            <input type="radio" name="class">
            الأول ثانوي
          </label>

          <label class="option">
            <input type="radio" name="class">
            الثاني ثانوي
          </label>

          <label class="option">
            <input type="radio" name="class">
            الثالث ثانوي
          </label>

        </fieldset>

        <label>اكتب رسالتك هنا:</label>

        <textarea rows="8"
        placeholder="اكتب رسالتك هنا..."></textarea>

        <center>
          <input class="submit-btn"
          type="submit" value="إرسال">
        </center>

      </form>

    </section>

    <footer class="footer">
      <h3>غلا عبدالعزيز المضحي</h3>
      <p>الصف الأول ثانوي - أول</p>
      <p>العام الدراسي 1448هـ</p>
      <p>مشروع التأتأة 💙</p>
    </footer>

  </main>

</body>
</html>
