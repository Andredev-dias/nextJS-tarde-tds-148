"use client"

import Image from "next/image";
import { useState } from "react";
import { Menu } from "../components/menu";
import logoLp from "./assets/images/logoLP.png";

export default function Home() {
  const [aparecerVideo, setAparecerVideo] = useState(false);
  const [aparecerBotao, setAparecerBotao] = useState(false);

  return (
     <>
      <div className="bg-[black] h-[100vh] flex items-center justify-center">
          <h1 className="text-[white] text-5xl">
            Estudos sever side e client side
          </h1>
      </div>
    </>
  );
}
