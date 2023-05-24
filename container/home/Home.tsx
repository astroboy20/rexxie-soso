import { Button } from "@/components/Button";
import { CustomText } from "@/components/CustomText";
import { Box, Input } from "@chakra-ui/react";
import { Arrow } from "../../asset";
import { useRouter } from "next/router";
import { ButtonStyle, HomeSubText } from "../maincontainer/layout.style";

const HomeContainer = () => {
  const router = useRouter();
  const handleLink = () => {
    router.push("./introduction");
  };
  return (
    <>
      
      <div className="header">
        <CustomText variant="h1" type="primary" weight="300">
          Hey REXXI & SOSO HERE
        </CustomText>
      </div>

      <HomeSubText>
        <CustomText variant="h3" type="primary" weight="400">
          What’s your name?
        </CustomText>

        <Input
          padding="14px"
          placeholder="Tell us your name"
          _placeholder={{ fontSize: "14px", color: "#B7B7B7" }}
          marginBottom="2.5%"
        />

        <Button size="normal" variant="primary" onClick={handleLink}>
          <ButtonStyle>
            Continue <Arrow />
          </ButtonStyle>
        </Button>
      </HomeSubText>
    </>
  );
};

export { HomeContainer };
