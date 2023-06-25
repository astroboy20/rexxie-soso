import { Button } from "@/components/Button";
import { CustomText } from "@/components/CustomText";
import { Box, Input, Spinner } from "@chakra-ui/react";
import { Arrow } from "../../asset";
import { useRouter } from "next/router";
import { ButtonStyle, HomeSubText } from "../maincontainer/layout.style";
import { useEffect, useState } from "react";
import axios from "axios";
import { Circles } from "react-loader-spinner";

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
      .then((response: any) => {
        console.log(response.data.data);
        setRandomName(response.data.data);
        setIsLoading(false);
        console.log(response);
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
        {isLoading ? (
          <CustomText variant="h3" type="primary" weight="400">
            What’s your name?
          </CustomText>
        ) : (
          <CustomText variant="h3" type="primary" weight="400">
            Your name is {randomName}
          </CustomText>
        )}

        {isLoading ? (
          <Box display="flex" justifyContent="center">
            <Circles
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="circles-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
          </Box>
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
