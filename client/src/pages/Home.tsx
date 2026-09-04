// اتجاه التصميم: «متحف العبقرية المزعجة» — واجهة تحريرية عربية راقية تتعامل مع مبالغات عمر كأنها وثائق تاريخية، ثم تكسر الجدية بتعليقات هامشية ساخرة.
import { useMemo, useState } from "react";
import { ArrowDownLeft, ArrowUpLeft, Check, Copy, Menu, Plus, Sparkles, X } from "lucide-react";

const achievements = [
  {
    id: "01",
    tag: "فلسفة الحياة",
    title: "فهم الحياة قبل أن تبدأ هي بفهم نفسها",
    text: "في عمر السابعة، نظر عمر إلى السقف لمدة ثلاث دقائق، ثم أعلن أن الوجود يحتاج إلى إعادة تصميم. لم يجرؤ أحد على الاعتراض.",
    aside: "المصدر: نظرة عميقة جدًا للسقف.",
    year: "2008",
  },
  {
    id: "02",
    tag: "تقنية متقدمة",
    title: "اختراع طريقة لتسريع الإنترنت بالنظر إليه",
    text: "لم يلمس عمر الراوتر. اكتفى بتوجيه نظرة حازمة نحوه، فشعر الإنترنت بالمسؤولية وبدأ يعمل بشكل أفضل.",
    aside: "براءة الاختراع ما زالت تنتظر أن يوقّع عليها عمر.",
    year: "2016",
  },
  {
    id: "03",
    tag: "اقتصاد شخصي",
    title: "تحويل عدم شراء القهوة إلى استراتيجية استثمارية",
    text: "جمع عمر ما لم ينفقه على القهوة، ثم شرح أن هذه ليست مدخرات، بل رأسمال صامت ينتظر اللحظة المناسبة ليحكم السوق.",
    aside: "اللحظة المناسبة لم تصل. لكنها تعرف الطريق.",
    year: "2021",
  },
  {
    id: "04",
    tag: "علاقات دولية",
    title: "إنهاء خلاف عالمي برسالة: «خلّونا نهدأ»",
    text: "أرسل عمر رسالة قصيرة في مجموعة العائلة. ساد الهدوء ثماني ثوانٍ كاملة، وهو رقم لم تحققه أي قمة دولية حتى الآن.",
    aside: "تم تصنيف الرسالة لاحقًا كوثيقة سلام نادرة.",
    year: "2023",
  },
  {
    id: "05",
    tag: "علوم ميدانية",
    title: "إثبات أن النوم مشروع بحثي طويل الأجل",
    text: "بعد سنوات من التجربة، أثبت عمر أن النوم ليس كسلًا؛ إنه اجتماع داخلي مغلق لا يسمح بحضور أي شخص آخر.",
    aside: "النتائج ممتازة، لكن الباحث ما زال نائمًا.",
    year: "مستمر",
  },
];

const interruptions = [
  "ملاحظة: عمر يعرف لماذا، لكنه يرى أن الشرح سيأخذ من وقتك.",
  "تنبيه هامشي: هذه ليست ثقة زائدة. هذه ثقة وصلت قبل موعدها.",
  "معلومة لا علاقة لها بالموضوع: عمر كان على حق حتى قبل أن يبدأ النقاش.",
  "الرجاء عدم مقاطعة العبقرية أثناء محاولتها التواضع.",
];

export default function Home() {
  const [selected, setSelected] = useState<(typeof achievements)[number] | null>(null);
  const [notice, setNotice] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [annoyMode, setAnnoyMode] = useState(false);
  const [generated, setGenerated] = useState<typeof achievements[number] | null>(null);

  const visibleNotice = notice || (annoyMode ? "ملاحظة هامشية: أنت تقرأ عن عمر منذ مدة، وكان يمكن لعمر أن يشرح لك هذا أسرع." : "");

  const total = useMemo(() => achievements.length + 17, []);

  function createAchievement() {
    const newAchievement = {
      id: "06",
      tag: "إدارة التفاصيل",
      title: "فتح الثلاجة دون أن ينسى لماذا فتحها",
      text: "في لحظة نادرة من التركيز، وصل عمر إلى الثلاجة، فتحها، وتذكر المهمة الأصلية قبل أن يضطر إلى الوقوف أمامها بصمت.",
      aside: "تم تسجيل الواقعة كنجاح إداري صغير لكنه مهم.",
      year: "اليوم",
    };
    setGenerated(newAchievement);
    setNotice("تمت إضافة إنجاز جديد إلى السجل. لا تقلق، عمر كان يعرف أنه سيحدث.");
  }

  function randomNotice() {
    setNotice(interruptions[Math.floor(Math.random() * interruptions.length)]);
  }

  return (
    <div className="site-shell" dir="rtl">
      <header className="topbar">
        <a className="brand" href="#top" aria-label="العودة إلى بداية الموقع">
          <span className="brand-mark">ع</span>
          <span className="brand-copy"><strong>عمر</strong><small>أرشيف لا يُطلب</small></span>
        </a>
        <nav className={menuOpen ? "main-nav is-open" : "main-nav"} aria-label="التنقل الرئيسي">
          <a href="#archive" onClick={() => setMenuOpen(false)}>الإنجازات</a>
          <a href="#method" onClick={() => setMenuOpen(false)}>المنهجية</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>عن عمر</a>
        </nav>
        <div className="top-actions">
          <button className={annoyMode ? "annoy-toggle active" : "annoy-toggle"} onClick={() => setAnnoyMode(!annoyMode)} aria-pressed={annoyMode}>
            {annoyMode ? <Check size={15} /> : <Sparkles size={15} />} وضع الإزعاج
          </button>
          <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="فتح القائمة">
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="hero-art" aria-hidden="true"><img src="/manus-storage/omar-hero_4ef836ca.png" alt="" /></div>
          <div className="hero-content">
            <div className="eyebrow"><span className="eyebrow-dot" /> ملف رقم 0001 / شخصية استثنائية بلا داعٍ</div>
            <h1>كل ما لم يفعله عمر،<br /><em>لكنه كان يستطيع.</em></h1>
            <p className="hero-lede">أرشيف رقمي يوثق إنجازات عمر في الحياة، العلوم، الاقتصاد، وكل مجال آخر لم يجد وقتًا لاحتكاره بعد.</p>
            <div className="hero-actions">
              <a className="primary-button" href="#archive">تصفح العظمة <ArrowDownLeft size={17} /></a>
              <button className="text-button" onClick={randomNotice}>اسأل الأرشيف <span>←</span></button>
            </div>
          </div>
          <div className="hero-meta">
            <div className="stamp"><img src="/manus-storage/omar-stamp_35f14491.png" alt="ختم موثق تقريبًا" /></div>
            <div className="meta-note">تمت المراجعة من قبل<br /><strong>عمر نفسه</strong><br /><span>ولم يجد أي أخطاء.</span></div>
          </div>
          <div className="hero-footnote">* جميع الإنجازات خيالية، لكن نبرة الموقع واثقة بشكل مقلق.</div>
        </section>

        {visibleNotice && <div className="notice-bar" role="status"><span>{visibleNotice}</span><button onClick={() => setNotice("")} aria-label="إغلاق الإشعار"><X size={16} /></button></div>}
        {annoyMode && <div className="annoy-banner"><span>وضع الإزعاج مفعّل.</span> سيتم تذكيرك كلما نسيت أن عمر يعرف أكثر منك بقليل.</div>}

        <section className="archive-section" id="archive">
          <div className="section-intro">
            <div><span className="section-kicker">السجل الرسمي / ٠٠٥</span><h2>إنجازات لا ينبغي<br /><span>أن تمرّ بصمت.</span></h2></div>
            <div className="intro-aside"><span>01—05</span><p>كل ملف هنا يمثل لحظة انتصر فيها عمر على المنطق، أو قرر تأجيله إلى أجل غير مسمى.</p></div>
          </div>
          <div className="archive-layout">
            <div className="achievement-list">
              {[...achievements, ...(generated ? [generated] : [])].map((item) => (
                <article className={selected?.id === item.id ? "achievement-row selected" : "achievement-row"} key={item.id} onClick={() => setSelected(item)}>
                  <div className="row-number">{item.id}<span>/</span></div>
                  <div className="row-main"><div className="row-tag">{item.tag}</div><h3>{item.title}</h3><p>{item.text}</p><button className="read-more">قراءة الملف <ArrowUpLeft size={15} /></button></div>
                  <div className="row-year">{item.year}</div>
                  <div className="side-comment">{item.aside}</div>
                </article>
              ))}
            </div>
            <aside className="archive-sidebar">
              <div className="side-card orange-card"><span className="side-card-label">إحصائية لا داعي لها</span><strong>{total + (generated ? 1 : 0)}</strong><p>مجالًا يعرف عمر عنه كل شيء، بما فيها المجالات التي لم تُخترع بعد.</p></div>
              <div className="side-card dark-card"><span className="side-card-label">هامش المحرر</span><p>«عمر لا يبحث عن إجابات. الإجابات تبحث عن طريقة مناسبة للاقتراب منه.»</p><span className="signature">— شخص لاحظ ذلك</span></div>
              <button className="add-button" onClick={createAchievement}><Plus size={17} /> أضف إنجازًا لا يعرفه عمر بعد</button>
            </aside>
          </div>
        </section>

        <section className="method-section" id="method">
          <div className="method-num">02</div>
          <div className="method-copy"><span className="section-kicker">المنهجية العلمية جدًا</span><h2>كيف نقيس<br /><em>العبقرية؟</em></h2></div>
          <div className="method-details"><p>نعتمد على ثلاث أدوات دقيقة: ثقة عمر بنفسه، قدرته على تحويل أي موقف عادي إلى أطروحة، ورفضه الهادئ للاعتراف بأنه لا يعرف شيئًا.</p><div className="meter-list"><div><span>الثقة</span><b>99.9%</b><i><u style={{ width: "99.9%" }} /></i></div><div><span>التواضع</span><b>0.4%</b><i><u style={{ width: "0.4%" }} /></i></div><div><span>الإقناع</span><b>88.8%</b><i><u style={{ width: "88.8%" }} /></i></div></div></div>
        </section>

        <section className="disclaimer-section"><div className="disclaimer-icon">!</div><div><span className="section-kicker">تنويه ضروري جدًا</span><h2>لا تصدّق كل ما<br /><em>يبدو موثقًا.</em></h2></div><p>هذا الأرشيف عمل فني ساخر. كل الإنجازات من تأليف الموقع، ولا تمثل سيرة ذاتية حقيقية أو سجلًا رسميًا أو رأيًا صادرًا عن أي جهة.</p></section>

        <section className="about-section" id="about">
          <div className="about-mark">ع</div><div><span className="section-kicker">ملاحظة ختامية</span><h2>في النهاية،<br />عمر هو عمر.</h2></div><p>ولا نعرف إن كان هذا تفسيرًا كافيًا، لكنه بالتأكيد قاله بثقة. هذا الموقع عمل فني ساخر وجميع الإنجازات فيه وهمية ومبالغ فيها عمدًا.</p>
        </section>
      </main>

      <footer className="footer"><span>© أرشيف عمر / ٢٠٢٦</span><span>موثق تقريبًا <span className="footer-dot">●</span> مبالغ فيه تمامًا</span><button onClick={() => navigator.clipboard?.writeText(window.location.href).then(() => setNotice("تم نسخ رابط الأرشيف. شاركه مع شخص مستعد لتحمل هذه العظمة."))}><Copy size={14} /> نسخ الرابط</button></footer>

      {selected && <div className="modal-backdrop" onClick={() => setSelected(null)}><div className="achievement-modal" onClick={(e) => e.stopPropagation()}><button className="modal-close" onClick={() => setSelected(null)} aria-label="إغلاق"><X size={19} /></button><span className="section-kicker">الملف الكامل / {selected.id}</span><div className="modal-title-row"><h2>{selected.title}</h2><span>{selected.year}</span></div><p>{selected.text}</p><blockquote>«{selected.aside.replace("المصدر: ", "").replace("براءة الاختراع ", "").replace("اللحظة المناسبة ", "").replace("تم تصنيف الرسالة لاحقًا كوثيقة سلام نادرة.", "الهدوء أصبح وثيقة.").replace("الرجاء ", "")}»</blockquote><div className="modal-signoff">بإشراف عمر،<br /><strong>خبير في كل شيء تقريبًا.</strong></div></div></div>}
    </div>
  );
}
