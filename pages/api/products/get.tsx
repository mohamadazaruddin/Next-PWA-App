// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import ky from "ky";

type Data = {
  name: string;
  productsjson: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    if (req.method == "GET") {
      try {
        const productsjson = await ky.get("http://localhost:9000").json();
        res.status(200).json(productsjson);
        // console.log(productsjson, "products");
      } catch (error) {
        // console.log(error, "error");
        res.status(500).json({ message: "Something went wrong" });
      }
    } else {
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
