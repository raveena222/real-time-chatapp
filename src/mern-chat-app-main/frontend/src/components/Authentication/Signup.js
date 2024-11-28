import chatContext from "../../context/chatContext";
import { useState, useContext, useRef } from "react";
import {
  Flex,
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  Box,
  Link,
  Avatar,
  FormControl,
  InputRightElement,
  Card,
  CardBody,
  useToast,
  Text,
} from "@chakra-ui/react";
import { LockIcon } from "@chakra-ui/icons";

const Signup = (props) => {
  const context = useContext(chatContext);
  const fileInputRef = useRef(null);
  const toast = useToast();

  const [showPassword, setShowPassword] = useState(false);

  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [phoneNum, setphoneNum] = useState("");
  const [password, setpassword] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("");
  const [profilePic, setprofilePic] = useState(null);

  const handletabs = props.handleTabsChange;

  function showtoast(description) {
    toast({
      title: "An error occurred.",
      description: description,
      status: "error",
      duration: 5000,
      isClosable: true,
    });
  }

  const handleChooseFile = () => {
    fileInputRef.current.click();
    setprofilePic(fileInputRef.current.files[0]);
  };

  const handleShowClick = () => setShowPassword(!showPassword);

  const handleSignup = async (e) => {
    e.preventDefault();

    if (email === "" || name === "" || phoneNum === "" || password === "") {
      showtoast("All fields are required");
      return;
    } else if (name.length > 20 || name.length < 3) {
      showtoast("Name should be atlest 3 and atmost 20 characters long");
      return;
    } else if (!email.includes("@") || !email.includes(".")) {
      showtoast("Invalid email");
      return;
    } else if (email.length > 50) {
      showtoast("Email should be atmost 50 characters long");
      return;
    } else if (phoneNum.length !== 10) {
      showtoast("Invalid phone number");
      return;
    } else if (password.length < 8 || password.length > 20) {
      showtoast("Invalid Password");
      return;
    } else if (password !== confirmpassword) {
      showtoast("Passwords do not match");
      return;
    } else {
      const formData = new FormData();
      formData.append("profilePic", profilePic);
      formData.append("email", email);
      formData.append("name", name);
      formData.append("phoneNum", phoneNum);
      formData.append("password", password);

      toast.promise(
        fetch(`${context.ipadd}/user/register`, {
          method: "POST",
          body: formData,
        })
          .then((response) => {
            if (response.status !== 200) {
              response.json().then((resdata) => {});
              throw new Error("Failed to fetch data");
            } else {
              response.json().then((resdata) => {
                localStorage.setItem("token", resdata.authtoken);
                handletabs(0);
              });
            }
          })
          .catch((error) => {}),
        {
          loading: { title: "Creating account...", description: "please wait" },
          success: {
            title: "Account created.",
            description: "We have created your account for you.",
          },
          error: {
            title: "An error occurred.",
            description: "We were unable to create your account.",
          },
        }
      );
    }
  };

  return (
    <Flex
      flexDirection="column"
      width="100%"
      height="70vh"
      justifyContent="center"
      alignItems="center"
      borderRadius={15}
    >
      <Stack
        flexDir="column"
        mb="2"
        justifyContent="center"
        alignItems="center"
      >
        <Avatar bg="purple.300" />
        <Heading color="pruple.400">Welcome</Heading>
        <Card minW={{ base: "90%", md: "468px" }} borderRadius={15} shadow={0}>
          <CardBody p={0}>
            <form>
              <Stack spacing={4}>
                <FormControl>
                  <InputGroup
                    borderEndRadius={"10px"}
                    borderStartRadius={"10px"}
                    size={"lg"}
                  >
                    <Input
                      type="text"
                      placeholder="Enter your name"
                      focusBorderColor="purple.500"
                      onChange={(e) => setname(e.target.value)}
                      required
                    />
                  </InputGroup>
                </FormControl>

                <FormControl>
                  <InputGroup
                    borderEndRadius={"10px"}
                    borderStartRadius={"10px"}
                    size={"lg"}
                  >
                    <Input
                      type="email"
                      placeholder="Email address"
                      focusBorderColor="purple.500"
                      onChange={(e) => setemail(e.target.value)}
                    />
                  </InputGroup>
                </FormControl>

                <FormControl>
                  <InputGroup
                    borderEndRadius={"10px"}
                    borderStartRadius={"10px"}
                    size={"lg"}
                  >
                    <Input
                      type="number"
                      placeholder="Phone Number"
                      focusBorderColor="purple.500"
                      onChange={(e) => setphoneNum(e.target.value)}
                    />
                  </InputGroup>
                </FormControl>

                <FormControl>
                  <InputGroup
                    borderEndRadius={"10px"}
                    borderStartRadius={"10px"}
                    size={"lg"}
                  >
                    <InputLeftElement
                      pointerEvents="none"
                      color="gray.300"
                      children={<LockIcon color="gray.300" />}
                    />
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      focusBorderColor="purple.500"
                      onChange={(e) => setpassword(e.target.value)}
                    />
                    <InputRightElement mx={1}>
                      <Button
                        fontSize={"x-small"}
                        size={"xs"}
                        onClick={handleShowClick}
                      >
                        {showPassword ? "Hide" : "Show"}
                      </Button>
                    </InputRightElement>
                  </InputGroup>

                  <InputGroup
                    borderEndRadius={"10px"}
                    borderStartRadius={"10px"}
                    size={"lg"}
                    my={4}
                  >
                    <InputLeftElement
                      pointerEvents="none"
                      color="gray.300"
                      children={<LockIcon color="gray.300" />}
                    />
                    <Input
                      textOverflow={"ellipsis"}
                      type={showPassword ? "text" : "password"}
                      placeholder="Confirm Password"
                      focusBorderColor="purple.500"
                      onChange={(e) => setconfirmpassword(e.target.value)}
                    />
                    <InputRightElement mx={1}>
                      <Button
                        fontSize={"x-small"}
                        size={"xs"}
                        onClick={handleShowClick}
                      >
                        {showPassword ? "Hide" : "Show"}
                      </Button>
                    </InputRightElement>
                  </InputGroup>

                  <Flex align="center">
                    {!profilePic && (
                      <Text mx={2} fontSize="sm">
                        Upload Profile Picture
                      </Text>
                    )}
                    {profilePic && (
                      <Text mx={2} fontSize="sm">
                        {profilePic.name.length > 30
                          ? profilePic.name.substring(0, 30) + "..."
                          : profilePic.name}
                      </Text>
                    )}
                    <Input
                      display="none"
                      type="file"
                      ref={fileInputRef}
                      onChange={(e) => {
                        console.log("File selected:", e.target.files[0]);
                        setprofilePic(e.target.files[0]);
                      }}
                    />
                    {!profilePic && (
                      <Button
                        colorScheme="purple"
                        onClick={handleChooseFile}
                        borderRadius="10px"
                        borderWidth={0}
                      >
                        <Text mr={2}>Choose File</Text>
                      </Button>
                    )}
                    {profilePic && (
                      <Button
                        size={"sm"}
                        colorScheme="red"
                        onClick={() => setprofilePic(null)}
                        borderRadius="10px"
                        borderWidth={0}
                      >
                        <Text>Remove</Text>
                      </Button>
                    )}
                  </Flex>
                </FormControl>
                <Button
                  borderRadius={10}
                  type="submit"
                  variant="solid"
                  colorScheme="purple"
                  width="full"
                  onClick={handleSignup}
                >
                  Signup
                </Button>
              </Stack>
            </form>
          </CardBody>
        </Card>
      </Stack>
      <Box>
        Already have account?{" "}
        <Link color="purple.500" onClick={() => handletabs(0)}>
          login
        </Link>
      </Box>
    </Flex>
  );
};

export default Signup;
