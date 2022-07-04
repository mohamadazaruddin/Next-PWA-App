import React from "react";
import { Grid, GridItem, Text, Heading } from "@chakra-ui/react";
import router, { Router } from "next/router";

import { Box, Image } from "@chakra-ui/react";
import useSWR from "swr";
import Link from "next/link";

type ItemsData = {
  image: string;
  id: number;
  thumbnail: string;
  title: string;
  description: string;
  brand: string;
  price: number;
};
export default function Products() {
  const { data, error } = useSWR<ItemsData[]>("/api/products/get");
  // console.log(data,"data");

  return (
    <Box p="50px" bg={"#e9eef0"}>
      <Heading>Products</Heading>
      <Grid templateColumns="repeat(3, 1fr)" gap={25}>
        {data?.map((items, i) => (
          <Box
            w={"100%"}
            key={i}
            bg="#fff"
            border="1px solid #e2dbdba1"
            textAlign={"start"}
            as="button"
            onClick={() => {
              router.push(`./product/${items.id}`);
            }}
          >
            <GridItem>
              <Image
                src={items.thumbnail}
                w={"100%"}
                alt="productsimg"
                height="400px"
                boxShadow={"0px 5px 9px #cfc9c961"}
              />
              <Box p={"10px"}>
                <Heading fontSize={"20px"}>
                  {" "}
                  <strong>Title : </strong>
                  {items.title}kgghf
                </Heading>
                <Box
                  height={"65px"}
                  textOverflow="ellipsis"
                  overflow={"hidden"}
                  mb="10px"
                >
                  <Text>
                    {" "}
                    <strong>Description : </strong>
                    {items.description}
                  </Text>
                </Box>
                <Text mt={"10px"}>
                  {" "}
                  <strong>brand : </strong>
                  {items.brand}
                </Text>
                <Text>
                  {" "}
                  <strong>price : </strong>
                  {items.price}
                </Text>
              </Box>
            </GridItem>
          </Box>
        ))}
      </Grid>
    </Box>
  );
}
