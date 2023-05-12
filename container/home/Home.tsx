import { Button } from "@/components/Button";
import { CustomText } from "@/components/CustomText";
import { Input } from "@chakra-ui/react";
import { Arrow } from "../../asset";
import { useRouter } from "next/router";

const HomeContainer = () => {
  const router = useRouter();
  const handleLink = () => {
    router.push("./introduction");
  };
  return (
    <>
      <CustomText variant="h1" type="primary" weight="300">
        Hey REXXI & SOSO HERE
      </CustomText>

      <div className="sub-text">
        <CustomText variant="h3" type="primary" weight="400">
          What’s your name?
        </CustomText>

        <Input
          padding="14px"
          placeholder="Tell us your name"
          _placeholder={{ fontSize: "14px", color: "#B7B7B7" }}
        />

        <Button size="normal" variant="primary" onClick={handleLink}>
          Continue <Arrow />
        </Button>
      </div>
    </>
  );
};

export { HomeContainer };
