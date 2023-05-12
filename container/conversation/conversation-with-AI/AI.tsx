import { Cross, Send } from "@/asset";
import { Button } from "@/components/Button";
import { ConversationStyle, Left } from "../style/conversation.style";
import {
  Box,
  Center,
  Input,
  InputGroup,
  InputRightElement,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { CustomText } from "@/components/CustomText";

const AiContainer = () => {
  return (
    <>
      <ConversationStyle>
        <Left>
          <Button size="small" variant="primary">
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <Cross />
              {""} START A NEW CHAT
            </div>
          </Button>
        </Left>

        

        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          border="2px solid #0A6634"
          boxShadow="6px 12px 20px rgba(0, 0, 0, 0.14)"
          padding="1%"
          borderRadius="6px"
          position="fixed"
          bottom="5%"
          left="0"
          right="0"
          zIndex="10"
          margin="2% 4%"
        >
          <Input
            type="text"
            placeholder="Tell us how you feel"
            width="100%"
            _focus={{ border: "2px solid red" }}
            variant="outline"
            padding="10px"
          />
          <Send />
        </Box>
      </ConversationStyle>
    </>
  );
};

export { AiContainer };
<Center
  color="#a8aaa8"
  position="fixed"
  bottom="-5%"
  left="0"
  right="0"
  zIndex="10"
  margin="2% 4%"
>
  <CustomText variant="h5" type="primary" weight="normal">
    By continuing, you acknowledge that you understand, that this is an
    experimental software and errors might occur while using it.
  </CustomText>
</Center>;
