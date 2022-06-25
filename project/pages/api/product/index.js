import { Product } from "../../../server/components/product/productModel";
import { connectDB } from "../../../server/connectDB";

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function (req, res) {
    if (req.method === "POST") {
        await connectDB();
        const { name, price, brand, image } = req.body;

        const product = await Product.create({
            name,
            price,
            brand,
            image,
        });

        res.status(201).send({ data: product });
    }
}

export const fetchProducts = async () => {
    await connectDB();
    const products = await Product.find({});
    return JSON.parse(JSON.stringify(products));
};
