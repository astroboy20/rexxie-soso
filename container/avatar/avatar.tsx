import React, { useState } from "react";
import { GArrow } from "@/asset";
import { CustomText } from "@/components/CustomText";
import { Button } from "@/components/Button";
import { useRouter } from "next/router";
import { Avatars } from "./images";
import Image from "next/image";
import { Box, Center, Grid, useMediaQuery } from "@chakra-ui/react";
import { Avatar, ButtonStyle } from "../maincontainer/layout.style";

const AvatarContainer = () => {
  const [selectedImg, setSelectedImg] = useState("");
  const [isLargerScreen] = useMediaQuery("(min-width: 768px)");

  const router = useRouter();

  const handleLink = () => {
    router.push("./conversation");
  };

  const handleClick = (avatarSrc: string) => {
    setSelectedImg(avatarSrc);
    localStorage.setItem("selectedImg", avatarSrc);
  };

  const gridTemplateColumns = isLargerScreen
    ? "repeat(10, 1fr)"
    : "repeat(5, 1fr)";

  return (
    <>
      <Image src="/rexxie.png" width={155} height={99} alt="" />

      <CustomText variant="h3" type="primary" weight="normal">
        Choose your chat avatar
      </CustomText>

      <Avatar>
        <Grid templateColumns={gridTemplateColumns} gap={2}>
          {Avatars.map((avatar, id) => (
            <Image
              onClick={() => handleClick(avatar.src)}
              src={avatar.src}
              height={40}
              width={40}
              alt=""
              key={avatar.id}
              style={{
                border: `${
                  avatar.src === selectedImg ? "5px solid #0A6634" : "none"
                }`,
              }}
            />
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
