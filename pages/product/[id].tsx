import { useRouter } from "next/router";
import { Grid, GridItem, Text, Heading, Button } from "@chakra-ui/react";
import { Box, Image } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";
import useSWR from "swr";
// import { title } from "process";
// type ItemsData = {
//   image: string;
//   id: number;
//   thumbnail: string;
//   title: string;
//   description: string;
//   brand: string;
//   price: number;
// };
const Product = () => {
  const router = useRouter();
  const { id } = router.query;
    const { data, error } = useSWR(`/api/singleproduct/get?id=${id}`);
    console.log(data, 'mydata');
    
// console.log(data.title,'hrlhhbvj');
  //   const arr = {
  // id: 14,
  // title: 'Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ',
  // price: 999.99,
  // description: '49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag',
  // category: 'electronics',
  // image: 'https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg',
  // rating: { rate: 2.2, count: 140 }

  //   }

  
  return (
    <Box p="50px" bg={"#e9eef0"} h="100vh" overflow={" auto "}>
      <Box textAlign={'end'}>
        {" "}
        <FaShoppingCart />
      </Box>
      <Box
        display={"flex"}
        bg="#fff"
        maxW="80%"
        border={"1px solid #bfb2b266"}
        margin="auto"
      >
        <Box w={"50%"} p={"20px"} height="100%">
          <Image src={data && data.thumbnail} alt='singleimg' h="100%" w={"100%"} />
        </Box>
        <Box w={"50%"} p={"20px"} bg="#fefefe">
          <Box>
            <Heading> {data && data.title}</Heading>
            <Text>
              <strong>Description : </strong>
              {data && data.description}
            </Text>

            <Text mt={"10px"}>
              {" "}
              <strong>brand : </strong>
              {data && data.brand}{" "}
            </Text>
            <Text>
              {" "}
              <strong>price : </strong>
              {data && data.price}
            </Text>
            <Text>
              {" "}
              <strong>category : </strong>
              {data && data.category}
            </Text>
            <Text>
              {" "}
              <strong>discountPercentage : </strong>
              {data && data.discountPercentage}
            </Text>
            <Text>
              {" "}
              <strong>rating : </strong>
              {data && data.rating}
            </Text>
            <Text>
              {" "}
              <strong>stock available : </strong>
              {data && data.stock}
            </Text>
            <Button
              w={"100%"}
              py="15px"
              bg={"#2155c8"}
              color="#fff"
              fontWeight={600}
            >
              Add to cart
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Product;
