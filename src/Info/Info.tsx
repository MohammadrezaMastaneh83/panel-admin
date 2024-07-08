import "./Info.css"
import oficce from "../public2/office-building-cover 1.png"
import ceo from "../public2/ceo.png"
import call from "../public2/call.svg"
import linkdin from "../public2/icons8-linkedin-50.svg"
import telegram from "../public2/icons8-telegram-50.svg"
import instagram from "../public2/icons8-instagram-50.svg"
import location from "../public2/location.svg"
import maeashat from "../public2/menwomenhelpgrowtrees5_small.png"
import maeashatbig from "../public2/menwomenhelpgrowtrees3_big.png"
import cloths from "../public2/cloth_small.png"
import clothb from "../public2/cloth_big.png"
import doctors from "../public2/doctor_small.png"
import doctorb from "../public2/doctor_big.png"
import prizens from "../public2/prizen_small.png"
import prizenb from "../public2/prizen_big.png"
import teachers from "../public2/teacher_small.png"
import teacerb from "../public2/teacer_big.png"
import gray_dot from "../public2/gray_dot.svg"
import sitlogo from "../public2/sitlogo.svg"
const sos = [
    {
        p: 'معیشتی',
        simage: maeashat,
        bimage: maeashatbig,
        dot: gray_dot
    },
    {
        p: 'پوشاک',
        simage: cloths,
        bimage: clothb,
        dot: gray_dot
    },
    {
        p: 'درمان بیماران',
        simage: doctors,
        bimage: doctorb,
        dot: gray_dot
    },
    {
        p: 'آزادی زندانیان',
        simage: prizens,
        bimage: prizenb,
        dot: gray_dot
    },
    {
        p: 'تحصیلی',
        simage: teachers,
        bimage: teacerb,
        dot: gray_dot
    },
]
const question = [
    {
        title: "وارش چگونه سازمانی است ؟",
        texte: "وارش سازمانی است مردم نهاد که با هدف حمایت از افراد نیازمند در زمینه های مختلف در سال1396 تأسیس گردیده است.وارش سازمانی خیریه، غیر انتفاعی، غیر سیاسی و غیر دولتی  است و تنها با اتکا بر جلب مشارکت‌های مردمی و انواع کمک‌های بشر دوستانه اداره می‌شود."
    },
    {
        title: "حمایت از نیازمندان در خیریه به چه صورت است ؟",
        texte: "هدف خیریه کمک به رفع محرومیت و محرومیت زدایی در سطح کشور از طریق جلب مشارکت های خیرین می باشد.نیازمندان بعد از اعلام نیاز با مراجعه به خیریه توسط محققین خیریه راستی آزمایی به صورت آبرومندانه قرار می گیرند و در صورت تایید پرونده مهرجویی تشکیل شده و شامل اراِئه ی خدمات موسسه می گردند. "
    },
    {
        title: "چگونه می توانم به خیریه کمک کنم ؟",
        texte: "شما خیرین عزیز می توانید در طرح های خیریه مانند در مان بیماران، ازادی زندانیان،معیشتی و ... به نیازمندان کمک کنید.برای این کار می توانید مستقیما به بخش کمک آنلاین مراجعه کنید و یا با دیدن آگهی های مربوطه مبلغ مد نظر خود را واریز کنید ."
    },
    {
        title: "تاکنون چند نفر تحت حمایت خیریه بودند ؟",
        texte: "قریب به 900 هزار نفر به صورت پرونده دار و متفرقه شامل خدمات این خیریه قرار گرفته اند."
    },
    {
        title: "اگر پروژه ای تا زمان معلوم شده به آن مبلغ نرسد چه اتفاقی خواهد افتاد ؟",
        texte: "خیرین عزیز این خیریه تمام تلاش خود را می کند که با اطلاع رسانی ها پروژه را به اتمام برساند، اما اگر پروزه ای تا زمان معین شده تکمیل نشود،در صورت داشتن حساب کاربری آن مبلغ به کیف پول شما برمی گردد، در غیر این صورت پول به حساب خیریه می رود و در پروژه ای همانند آن واریز می شود."
    },
    {
        title: "چگونه می توانم تراکنش های گذشته خود را مشاهده کنم ؟",
        texte: "خیرین عزیز شما می توانید با ثبت نام در خیریه و داشتن حساب کاربری اطلاعات مربوط به تراکنش ها و جمع کل کمک ها و وضعیت پرداختی های خود را مشاهده کنید ."
    },
]
export default function Info() {
    return (
        <div className="info_all">
            <div className="about_us_div">
                <div className="info_header">
                    <p className="info_header_p">بخش درباره ی ما</p>
                    <button className="info_header_btn">ویرایش</button>
                </div>
                <div className="border_dashed"></div>
                <div className="info_charity_div">
                    <p className="info_charity_title">معرفی خیریه</p>
                    <p className="info_charity_texte">خیریه وارش در سال 1396 با شماره 348 ثبت و در راستای اعتلای سیره عملی امیر المومنان  حضرت علی علیه السلام و با توجهات خاصه حضرت ولی عصر عجل الله و با عنایت  حضرت حق به پشتوانه ولی نعمتمان حضرت ثامن الحجج علی ابن موسی الرضا علیه  السلام به همت چند نفر از نیکوکاران تاسیس گردیده است. این خیریه از همان  ابتدای شروع فعالیت با طرح دیدگاههای تخصصی و بررسی های کارشناسی شده و  نگرشی پژوهشی به مسائل اجتماعی و فرهنگی تلاش داشته تا زمینه را جهت  خدمتگزاری هر چه بیشتر به محرومان جامعه فراهم آورد </p>
                    <img src={oficce} alt="" width={860} height={265} />
                </div>
                <div className="info_ceo_div">
                    <div className="info_ceo_display">
                        <div className="info_ceo_P_div">
                            <p className="info_ceo_title">مدیر عامل</p>
                            <p className="info_ceo_texte">خداوند انسان را از یک جنس افرید پس برای نجات بشر باید از یک جنس شویم تا وعده خداوند تحقق یابد بنابر این هرکس خدارا یاری کند خداوند اورا یاری  خواهد کرد و خداوند هرگز خلف وعده نخواهد کردوآن بندگانی که این را تصدیق  کردند به حقیقت توحید شناخت پیدا کردند پس بر او توکل کنیم و ان وقت است که همچون </p>
                        </div>
                        <img src={ceo} alt="" width={420} height={276} />
                    </div>
                    <p className="info_ceo_texte2">ستاره ای میشویم و روشنایی مان را از نورالهی میگیریم از این رو بر آیین خداوند واقفیم و آگاهی داریم و در پیروی در این امر مهم یکی میشویم چرا که در نهایت همه مخلوق یک واحدیم.آنان که نیکوکار شده اند خداوند دررحمت خود آنان را داخل بهشت میکند چرا که پروردگارجهانیان یکتاومقتدراست.ما دستان شما را بوسه میزنیم چرا که دستانتان را به دستان خدا سپرده اید  .</p>
                </div>
            </div>
            <div className="Contact_all">
                <div className="Contact_header_div">
                    <p className="Contact_header_p">راه های ارتباطی</p>
                    <button className="Contact_header_btn">ویرایش</button>
                </div>
                <div className="border_dashed"></div>
                <div className="Contact_element_dad">
                    <div className="Contact_element">
                        <div className="Contact_left">
                            <div className="Contact_call">
                                <img src={call} alt="" />
                                <p className="Contact_call_p"> تلفن پشتیبانی :</p>
                                <p className="Contact_call_p">021-45660000</p>
                            </div>
                            <div className="Contact_call">
                                <img src={linkdin} alt="" />
                                <p className="Contact_call_p"> kheyriye_varash</p>
                            </div>
                        </div>
                        <div className="Contact_right">
                            <div className="Contact_call">
                                <img src={instagram} alt="" />
                                <p className="Contact_call_p">  kheyriye.varash@</p>
                            </div>
                            <div className="Contact_call">
                                <img src={telegram} alt="" />
                                <p className="Contact_call_p">  kheyriye.varash@</p>
                            </div>
                        </div>
                    </div>
                    <div className="Contact_adress_div">
                        <img src={location} alt="" width={24} height={24} />
                        <p className="Contact_call_p">میدان اقدسیه - ابتدای بزرگراه ارتش -سه راه ازگل-بلوار شهید مژدی - بلوار محک - موسسه خیریه وارش</p>
                    </div>
                </div>
            </div>
            <div className="subject_all">
                <div className="subject_heder">
                    <p className="subject_header_p">موضوع حمایت</p>
                    <div className="subject_header_btn_div">
                        <button className="subject_header_btn1">جدید</button>
                        <button className="subject_header_btn2">ویرایش</button>
                    </div>
                </div>
                <div className="border_dashed"></div>
                {sos.map((item, index) => {
                    return (
                        <div className="subject_pic_div_dad">
                            <div className="subject_elemnt_div">
                                <div className="subject_title_div">
                                    <img src={item.dot} alt="" style={{ marginTop: "-8px" }} />
                                    <p className="subject_title">{item.p}</p>
                                </div>
                                <div className="subject_pic_div">
                                    <img src={item.simage} alt="" />
                                    <img src={item.bimage} alt="" />
                                </div>
                            </div>
                        </div>
                    )
                })}

            </div>
            <div className="news_all">
                <div className="news_header">
                    <p className="news_header_p">تصویر پیشفرض اخبار</p>
                    <div className="news_header_btn_div">
                        <button className="subject_header_btn1">جدید</button>
                        <button className="subject_header_btn2">ویرایش</button>
                    </div>
                </div>
                <div className="border_dashed"></div>
                <div className="pic_move_div">
                    <img src={sitlogo} alt="" width={390} height={317} />
                </div>
            </div>
            <div className="question_all">
                <div className="question_header">
                    <p className="news_header_p">سوالات متداول</p>
                    <button className="subject_header_btn2">ویرایش</button>
                </div>
                <div className="border_dashed"></div>

                {question.map((item, index) => {
                    return (
                        <div className="question_div">
                            <p className="question_title">{index+1}-{item.title} </p>
                            <p className="question_texte">{item.texte}</p>
                        </div>
                    )
                })}
            </div>
            <div className="info_btn_div">
            <button className="info_btn">ثبت تغییرات</button>
            </div>
        </div>
    )
}