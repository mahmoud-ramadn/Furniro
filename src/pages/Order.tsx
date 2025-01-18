import Banner from "../components/ui/Banner";
import TopageBanner from "../components/ui/TopageBanner";

function Order() {
  

    return (
        <section className="min-h-screen flex flex-col justify-between">
            <TopageBanner />
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
                طلباتي
            </h1>

            {/* {orders.length === 0 ? (
                <div className="text-center text-gray-600">
                    لا توجد طلبات حالياً.
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {orders.map((order) => (
                        <div
                            key={order.id}
                            className="bg-white shadow rounded-lg p-6 border hover:shadow-lg transition"
                        >
                            <h2 className="text-lg font-semibold text-gray-800 mb-2">
                                الطلب رقم: {order.id}
                            </h2>
                            <p className="text-gray-600 mb-2">
                                التاريخ: {new Date(order.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                            </p>
                            <p className="text-gray-600 mb-2">
                                الإجمالي: ${order.total.toFixed(2)}
                            </p>
                            <ul className="text-gray-600 mb-4">
                                {order.items.map((item, index) => (
                                    <li key={index} className="flex justify-between">
                                        <span>{item.name}</span>
                                        <span>x{item.quantity}</span>
                                    </li>
                                ))}
                            </ul>
                            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
                                عرض التفاصيل
                            </button>
                        </div>
                    ))}
                </div>
            )} */}

            <Banner />
        </section>
    );
}

export default Order;
