import NavBar from "@/components/navbar";
import Footer from "@/components/footer";
import React from "react";
import { Container } from "@chakra-ui/react";

interface Props {
  children: React.ReactNode;
}

export default function Default({ children }: Props) {
  return (
    <div>
      <NavBar />
        {children}
      <Footer />
    </div>
  );
}