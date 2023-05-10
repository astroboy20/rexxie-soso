import { Button } from "@/componets/Button";
import { CustomText } from "@/componets/CustomText";
import { Input } from "@chakra-ui/react";
import { HomeStyle } from "./Home.style";

const HomeContainer = () => {
  return (
    <>
      <HomeStyle>
        <CustomText variant="h1" type="primary">
          Hey REXXI & SOSO HERE
        </CustomText>

        <div className="sub-text">
          <CustomText variant="h3" type="primary">
            What’s your name?
          </CustomText>

          <Input
            padding="14px"
            placeholder="Tell us your name"
            _placeholder={{ fontSize: "14px", color: "#B7B7B7" }}
          />

          <Button size="normal" variant="primary"> 
            Continue
          </Button>
        </div>
      </HomeStyle>
    </>
  );
};

export { HomeContainer };
