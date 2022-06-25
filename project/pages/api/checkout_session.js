import { Product } from "../../server/components/product/productModel";
import { connectDB } from "../../server/connectDB";

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
    if (req.method === "POST") {
        const cart = req.body;
        await connectDB();
        let line_items = await Promise.all(
            JSON.parse(cart).map(async (cartItem) => {
                const product = await Product.findById(cartItem.product._id);
                if (!product) return undefined;

                return {
                    name: product.name,
                    images: [`http://localhost:3000/${product.image}`],
                    amount: Math.round(product.price * 100),
                    currency: "eur",
                    quantity: cartItem.amount,
                };
            })
        );

        line_items = line_items.filter((item) => item !== undefined);

        try {
            const session = await stripe.checkout.sessions.create({
                payment_method_types: ["card", "ideal"],
                success_url: `${req.headers.origin}/?success=true`,
                cancel_url: `${req.headers.origin}/?canceled=true`,
                shipping_address_collection: {
                    allowed_countries: ["NL"],
                },
                mode: "payment",
                line_items,
            });
            res.status(200).json({ id: session.id });
        } catch (err) {
            res.status(err.statusCode || 500).json(err.message);
        }
    }
}
