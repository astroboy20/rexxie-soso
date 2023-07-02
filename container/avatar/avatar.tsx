import { GArrow } from "@/asset";
import { CustomText } from "@/components/CustomText";
import { Button } from "@/components/Button";
import { useRouter } from "next/router";
import { Avatars } from "./images";
import Image from "next/image";
import { Box, Center, Grid, useMediaQuery } from "@chakra-ui/react";
import { useEffect } from "react";
import { Avatar, ButtonStyle } from "../maincontainer/layout.style";

const AvatarContainer = () => {
  const [isDesktop] = useMediaQuery("(min-width: 800px)");

  const router = useRouter();

  const handleLink = () => {
    router.push("./conversation");
  };

  // const handleClick = ()=>{
  //   localStorage.setItem('image',  JSON.stringify( avatar))
  // }

  // useEffect(() => {
  //   if (!isDesktop) {
  //     router.push("./conversation-with-AI");
  //   }
  // }, []);

  // if (!isDesktop) {
  //   return null;
  // }

  return (
    <>
      <Image src="/rexxie.png" width={155} height={99} alt="" />

      <CustomText variant="h3" type="primary" weight="normal">
        Choose your chat avatar
      </CustomText>
      
      <Avatar>
        <Grid templateColumns={`repeat(9, 1fr)`} gap={2}>
          {Avatars.map((avatar, id) => (
            <Box w="100%" h="auto" key={id}>
              <Image onClick={()=>{
                localStorage.setItem("selectedImg", avatar.src)
              }} src={avatar.src} height={40} width={40} alt="" />
            </Box>
          ))}
        </Grid>

        <Button size="transparent" variant="primary" onClick={handleLink}>
          <ButtonStyle>
            Continue <GArrow />
          </ButtonStyle>
        </Button>
      </Avatar>
    </>
  );
};

export { AvatarContainer };
