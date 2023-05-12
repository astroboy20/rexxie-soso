import { GArrow } from "@/asset";
import { CustomText } from "@/components/CustomText";
import { Button } from "@/components/Button";
import { useRouter } from "next/router";
import { Avatars } from "./images";
import Image from "next/image";
import { Box, Wrap, WrapItem } from "@chakra-ui/react";

const AvatarContainer = () => {
  const router = useRouter();
  const handleLink = () => {
    router.push("./conversation-with-AI");
  };

  return (
    <>
      <CustomText variant="h1" type="primary" weight="bold">
        REXXIE
        <br />
        SOSO
      </CustomText>
      <div className="sub-text">
        <Box>
          {Avatars.map((avatar, id) => (
            <Wrap key={id}>
              <WrapItem>
                <Image src={avatar.src} height={40} width={40} alt="" />
              </WrapItem>
            </Wrap>
          ))}
        </Box>
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
