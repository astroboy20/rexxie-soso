import { GArrow } from "@/asset";
import { CustomText } from "@/components/CustomText";
import { Button } from "@/components/Button";
import { useRouter } from "next/router";

const AvatarContainer = () => {
  const router = useRouter();
  const handleLink = () => {
    router.push("./avatar");
  };

  return (
    <>
      <CustomText variant="h1" type="primary" weight="bold">
        REXXIE
        <br />
        SOSO
      </CustomText>
      <div className="sub-text">
        <CustomText variant="h3" type="primary" weight="400">
          Choose your chat avatar
        </CustomText>

        <CustomText variant="h4" type="primary" weight="400">
          Hey there! Meet our dynamic duo, Soso and Rexxi! Soso is all about
          helping you prioritize your mental health and wellbeing, while Rexxi
          is an expert in managing your finances and planning for the future.
          Together, we make the perfect team for achieving a healthy balance in
          both your mental and financial life. So, are you ready to get started?
          Let's chat!
        </CustomText>
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
