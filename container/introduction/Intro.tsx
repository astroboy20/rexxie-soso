import { Button } from "@/components/Button";
import { CustomText } from "@/components/CustomText";
import { GArrow } from "@/asset";
import { useRouter } from "next/router";
import { AvatarSubText, ButtonStyle, SubText } from "../maincontainer/layout.style";
import Image from "next/image";
import axios from "axios";
import { useEffect, useState } from "react";

const IntroContainer = () => {
  const [loading, setLoading] = useState(false);
  const [name,setName] = useState<string | null>("")
  const router = useRouter();
  const handleLink = () => {
    router.push("./avatar");
  };

  useEffect(()=>{
    const userName = localStorage.getItem('name')
    setName(userName)
  },[])
  
  
  return (
    <>
      <Image src="/rexxie.png" width={155} height={99} alt="" />

      <AvatarSubText>
        <CustomText variant="h3" type="primary" weight="400">
          Welcome {name},
        </CustomText>

        <CustomText variant="h4" type="primary" weight="400">
          Hey there! Meet our dynamic duo, Soso and Rexxi! Soso is all about
          helping you prioritize your mental health and wellbeing, while Rexxi
          is an expert in managing your finances and planning for the future.
          Together, we make the perfect team for achieving a healthy balance in
          both your mental and financial life. So, are you ready to get started?
          Let&lsquo;s chat!
        </CustomText>
        <br />
        <Button size="transparent" variant="primary" onClick={handleLink}>
          <ButtonStyle>
            Continue <GArrow />
          </ButtonStyle>
        </Button>
      </AvatarSubText>
    </>
  );
};

export { IntroContainer };
  

