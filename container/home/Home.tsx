import { Button } from "@/components/Button";
import { CustomText } from "@/components/CustomText";
import { Box, Input, Spinner } from "@chakra-ui/react";
import { Arrow } from "../../asset";
import { useRouter } from "next/router";
import { ButtonStyle, HomeSubText } from "../maincontainer/layout.style";
import { useEffect, useState } from "react";
import axios from "axios";

const HomeContainer = () => {
  const router = useRouter();
  const handleLink = () => {
    router.push("./introduction");
  };

  const [randomName, setRandomName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const fetchRandomName = () => {
    setIsLoading(true);
    axios
      .get("https://rexxie-soso.onrender.com/name")
      .then((response:any) => {
        setRandomName(response);
        setIsLoading(false); 
        console.log(response)
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false); 
      });
  };

  useEffect(() => {
    fetchRandomName();
  }, []); 

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

        {isLoading ? (
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="blue.500"
              size="xl"
            />
        ) : (
          <Button size="normal" variant="primary" onClick={handleLink}>
            <ButtonStyle>
              Continue <Arrow />
            </ButtonStyle>
          </Button>
        )}
      </HomeSubText>
    </>
  );
};

export { HomeContainer };
