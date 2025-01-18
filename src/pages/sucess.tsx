import React, { Suspense, lazy } from 'react';

// تحميل المكونات بشكل كسول
const Banner = lazy(() => import("../components/ui/Banner"));
const TopageBanner = lazy(() => import("../components/ui/TopageBanner"));

function Success() {
    return (
        <section className="min-h-screen flex justify-between flex-col ">
            {/* استخدم Suspense مع fallback لعرض شاشة تحميل مؤقتة */}
            <Suspense fallback={<div>Loading...</div>}>
                <TopageBanner />
                <div className="text-center mt-8">
                    <h1 className="text-3xl font-bold text-green-600 mb-4">
                        تم إكمال الطلب بنجاح! 🎉
                    </h1>
                    <p className="text-gray-700 text-lg mb-6">
                        شكراً لتسوقك معنا! لقد تم تأكيد طلبك وسيتم شحنه قريبًا.
                    </p>
                    <a
                        href="/"
                        className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-600 transition"
                    >
                        العودة إلى الصفحة الرئيسية
                    </a>
                    <a
                        href="/Order"
                        className="inline-block bg-green-500 text-white px-6 py-3 rounded-lg shadow hover:bg-green-600 transition ml-4"
                    >
                        عرض طلباتي
                    </a>
                </div>
                {/* Banner سيتم تحميله بشكل كسول هنا */}
                <Banner />
            </Suspense>
        </section>
    );
}

export default Success;
