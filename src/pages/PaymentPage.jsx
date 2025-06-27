import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useState } from "react";
function PaymentPage() {
    const stripe = useStripe();
    const element = useElements();
    const [success, setSuccess] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault();
        // asking backend to create payment intent
        const res = await fetch("http://localhost:5000/create-payment-intent",
            {
                method: "POST",
                header: { "Content-Type": "application/json" },
                body: JSON.stringify({ amount: 5000 }),
            }
        );
        const { clientSecret } = await res.json();

        // confirm card payment
        await stripe.confirmCardPayment(clientSecret,{payment_method:
            {
                card:element.getElement(CardElement),
            },
        });

        // payment success check
        if(result.paymentIntent && result.paymentIntent.status==='sucseede'){
            setSuccess(true);
        }

    };
    return (
        <div className="flex-items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-6 bg-white rounded-xl shadow-md">
                <h2 className="text-2xl font-semibold text-center mb-6">Stripe Payment</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <CardElement options={{ style: { base: { fontSize: "16px" } } }} />
                    </div>
                    <button type="submit" disabled={!stripe} className="w-full px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-700 disabled bg-color-300 transition">pay Rs 500</button>
                    {success && (<p className="text-green-500 text-center font-medium mt-4">Payment Successfull</p>)}
                </form>
            </div>
        </div>
    )
}
export default PaymentPage;