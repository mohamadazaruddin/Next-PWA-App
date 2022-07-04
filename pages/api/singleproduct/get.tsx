// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import ky from "ky";
// import 
type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
 
  if (req.method == "GET") {
    try {
      var id = req.query.id;
      const singleProduct = await ky.get(`https://dummyjson.com/products/${id}`).json();
      res.status(200).json(singleProduct);
      // console.log(singleProduct, "products");
    } catch (error) {
      console.log(error, "error");
      res.status(500).json({ message: "Something went wrong" });
    }
  } else {
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}