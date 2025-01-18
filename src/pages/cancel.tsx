import Banner from "../components/ui/Banner";
import TopageBanner from "../components/ui/TopageBanner";

function Cancel() {
    return (
        <section className="min-h-screen flex flex-col items-center  justify-between">
            <TopageBanner />

            {/* محتوى الإلغاء */}
            <div className="text-center mt-8">
                <h1 className="text-3xl font-bold text-red-500 mb-4">
                    تم إلغاء الطلب!
                </h1>
                <p className="text-gray-700 text-lg mb-6">
                    لم يتم إتمام عملية الشراء. إذا كنت بحاجة إلى المساعدة، يرجى التواصل معنا.
                </p>
                <a
                    href="/"
                    className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-600 transition"
                >
                    العودة إلى الصفحة الرئيسية
                </a>
            </div>

            <Banner />
        </section>
    );
}

export default Cancel;
