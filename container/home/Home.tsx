import { Button } from "@/components/Button";
import { CustomText } from "@/components/CustomText";
import { Box, Input, Spinner, Select } from "@chakra-ui/react";
import { Arrow } from "../../asset";
import { useRouter } from "next/router";
import { ButtonStyle, HomeSubText } from "../maincontainer/layout.style";
import { ChangeEvent, useEffect, useState, FormEvent } from "react";
import axios from "axios";
import { Circles } from "react-loader-spinner";

const HomeContainer = () => {
  const router = useRouter();
  const handleLink = () => {
    router.push("./introduction");
  };

  // const fetchRandomName = () => {
  //   setIsLoading(true);
  //   axios
  //     .get("https://rexxie-soso.onrender.com/name")
  //     .then((response: any) => {
  //       setRandomName(response.data.data);
  //       setIsLoading(false);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       setIsLoading(false);
  //     });
  // };

  // useEffect(() => {
  //   fetchRandomName();
  // }, []);

  // const [randomName, setRandomName] = useState("");
  const [userDetails, setUserDetails] = useState({
    // randomName: randomName,
    name: "",
    email: "",
    gender: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const inpuChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
      // randomName: randomName,
    }));
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    typeof window !== "undefined" && localStorage.setItem("userDetails", JSON.stringify(userDetails))
    console.log(userDetails);
    router.push("./introduction");
  };

  // useEffect(() => {
  //   localStorage.setItem("name", randomName);
  // }, [randomName]);

  return (
    <>
      <div className="header">
        <CustomText variant="h1" type="primary" weight="300">
          Hey REXXI & SOSO HERE
        </CustomText>
      </div>

      <HomeSubText>
        {/* {isLoading ? (
          <CustomText variant="h2" type="primary" weight="400">
            What’s your Username?
          </CustomText>
        ) : (
          <CustomText variant="h3" type="primary" weight="400">
            Your Username is {randomName}
          </CustomText>
        )} */}
        <form onSubmit={onSubmit}>
          <Input
            name="name"
            onChange={inpuChange}
            value={userDetails.name}
            padding={"14px 20px"}
            borderRadius={"4px"}
            placeholder="Name"
          />
          <Input
            name="email"
            onChange={inpuChange}
            value={userDetails.email}
            padding={"14px 20px"}
            borderRadius={"4px"}
            placeholder="Email"
          />
          <Input
            name="gender"
            onChange={inpuChange}
            value={userDetails.gender}
            padding={"14px 20px"}
            type="select"
            borderRadius={"4px"}
            placeholder="Gender (Male or Female)"
          />

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
            <Button
              // disabled={!randomName}
              size="normal"
              variant="primary"
              // onClick={handleLink}
              type="submit"
            >
              <ButtonStyle>
                Continue <Arrow />
              </ButtonStyle>
            </Button>
          )}
        </form>
      </HomeSubText>
    </>
  );
};

export { HomeContainer };
