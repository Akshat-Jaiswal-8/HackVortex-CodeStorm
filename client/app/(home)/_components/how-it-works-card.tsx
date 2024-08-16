import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { motion } from "framer-motion";

export const HowItWorksCard = ({
  heading,
  description,
  image,
}: {
  heading: string;
  description: string;
  image: any;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20, y: 0 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      transition={{
        delay: 0.2,
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      <Card>
        <CardContent>
          <Image src={image} alt={`${image}-image`} className={"w-50 h-50"} />
        </CardContent>
        <CardHeader>
          <CardTitle>{heading}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
      </Card>
    </motion.div>
  );
};
