export const revalidate = 0;

import Image from "next/image";
import styles from "./page.module.css";
import { getHomeData } from "@/src/getHomeData";

export default async function Home() {
  const content = await getHomeData();
  const heroMini = content.getAmplienceContent.page.slots[0];
  console.log("contentcontent toney= ", heroMini.media.url);
  return (
    <div>
      <h1>{heroMini.rawJson.content.teaser.teaserTitle}</h1>
      {heroMini.media.url && (
        <Image
          src={heroMini.media.url}
          width={500}
          height={300}
          alt="Hero Image"
        />
      )}
    </div>
  );
}
