import { GArrow } from "@/asset";
import { CustomText } from "@/components/CustomText";
import { Button } from "@/components/Button";
import { useRouter } from "next/router";
import { Avatars } from "./images";
import Image from "next/image";
import { Box, Center, Grid, useMediaQuery } from "@chakra-ui/react";
import { useEffect } from "react";

const AvatarContainer = () => {
  const [isDesktop] = useMediaQuery("(min-width: 500px)");

  const router = useRouter();

  const handleLink = () => {
    router.push("./conversation-with-AI");
  };

  useEffect(() => {
    if (!isDesktop) {
      router.push("./conversation-with-AI");
    }
  }, [isDesktop, router]);

  if (!isDesktop) {
    return null;
  }

  return (
    <>
      <CustomText variant="h1" type="primary" weight="bold">
        REXXIE
        <br />
        SOSO
      </CustomText>
      <div className="avatar">
        <Grid templateColumns={`repeat(10, 1fr)`} gap={2}>
          {Avatars.map((avatar, id) => (
            <Box w="100%" h="auto" key={id}>
              <Image src={avatar.src} height={40} width={40} alt="" />
            </Box>
          ))}
        </Grid>

        <Button size="transparent" variant="primary" onClick={handleLink}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "5px",
            }}
          >
            Continue <GArrow />
          </div>
        </Button>
      </div>
    </>
  );
};

export { AvatarContainer };
