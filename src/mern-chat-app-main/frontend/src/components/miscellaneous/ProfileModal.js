import React, { useState, useContext, useEffect } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Tabs,
  TabPanels,
  TabPanel,
  Button,
  Input,
  Stack,
  Text,
  Flex,
  IconButton,
  Image,
  Circle,
  Box,
} from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon, EditIcon } from "@chakra-ui/icons";
import chatContext from "../../context/chatContext";
import _isEqual from "lodash/isEqual";
import { useToast } from "@chakra-ui/react";

export const ProfileModal = ({ isOpen, onClose, user, setuser }) => {
  const context = useContext(chatContext);
  const [editing, setEditing] = useState(false);
  const [editedUser, setEditedUser] = useState(user);
  const [showEditIcon, setShowEditIcon] = useState(false);
  const [showChangePassword, setShowChangePassword] = useState(false);
  const toast = useToast();

  // If user is not defined then wait for the user to be fetched
  useEffect(() => {
    if (!_isEqual(user, editedUser)) {
      setEditedUser(user);
    }
  }, [user]);

  // Function to handle saving changes
  const handleSave = async () => {
    try {
      setuser(editedUser);
      context.setuser(editedUser);

      // Send the updated user to the server
      const response = await fetch(`${context.ipadd}/user/update`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
        body: JSON.stringify(editedUser),
      });

      const json = await response.json();

      if (response.status !== 200) {
        toast({
          title: "An error occurred.",
          description: json.error,
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      } else {
        toast({
          title: "User updated",
          description: "User updated successfully",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        setEditing(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Function to handle edit mode
  const handleEdit = () => {
    setEditing(true);
  };

  // Function to handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedUser({ ...editedUser, [name]: value });
  };

  // Function to handle mouse over
  const handleMouseOver = () => {
    setShowEditIcon(true);
  };

  // Function to handle mouse out
  const handleMouseOut = () => {
    setShowEditIcon(false);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader p={6} borderBottomWidth="1px" borderColor="gray.100">
          <Flex mt={3} justify="space-between" align="center">
            <Text fontSize="xl" fontWeight="bold">
              Profile
            </Text>
            {/* Edit icon */}
            <IconButton
              aria-label="Edit profile"
              icon={<EditIcon />}
              variant="ghost"
              colorScheme="purple"
              display={user._id !== context.user?._id ? "none" : "block"}
              onClick={handleEdit}
            />
          </Flex>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Tabs
            isFitted
            variant="enclosed"
            index={editing ? 1 : 0}
            onChange={(index) => setEditing(index === 1)}
          >
            <TabPanels>
              {/* Tab panel for displaying user profile */}
              <TabPanel>
                <Stack spacing={2}>
                  {/* User profile picture */}
                  <Image
                    borderRadius="full"
                    boxSize={{ base: "100px", md: "150px" }}
                    src={user.profilePic}
                    alt="Profile Picture"
                    mx="auto"
                  />
                  {/* User name */}
                  <Text fontSize="xx-large" fontWeight="bold">
                    {user.name}
                  </Text>
                  {/* User about */}
                  <Text fontSize="md">About: {user.about}</Text>
                  {/* User email */}
                  <Text fontSize="md">Email: {user.email}</Text>
                </Stack>
              </TabPanel>
              {/* Tab panel for editing profile */}
              <TabPanel>
                <Stack spacing={4}>
                  <Circle
                    cursor="pointer"
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                    onClick={() => {
                      console.log("clicked");
                    }}
                  >
                    <Image
                      borderRadius="full"
                      boxSize={{ base: "100px", md: "150px" }}
                      src={user.profilePic}
                      alt="Profile Picture"
                      mx="auto"
                    />
                    {/* Edit icon */}
                    {showEditIcon && (
                      <Box
                        textAlign={"center"}
                        position="absolute"
                        top="auto"
                        left="auto"
                      >
                        <IconButton
                          aria-label="Edit profile picture"
                          icon={<EditIcon />}
                        ></IconButton>
                        <Text fontSize={"xx-small"}>Click to edit profile</Text>
                      </Box>
                    )}
                  </Circle>
                  {/* Input fields for editing profile */}
                  <Input
                    name="name"
                    placeholder="Name"
                    value={editedUser.name}
                    onChange={handleChange}
                  />
                  <Input
                    name="about"
                    placeholder="About"
                    value={editedUser.about}
                    onChange={handleChange}
                  />
                  {/* Button to toggle change password */}
                  <Button
                    onClick={() => setShowChangePassword(!showChangePassword)}
                  >
                    Change Password{" "}
                    {showChangePassword ? (
                      <ChevronUpIcon />
                    ) : (
                      <ChevronDownIcon />
                    )}
                  </Button>
                  {/* Change password fields */}
                  {showChangePassword && (
                    <Box>
                      <Input
                        name="oldPassword"
                        placeholder="Old Password"
                        type="password"
                        onChange={handleChange}
                        mb={2}
                      />
                      <Input
                        name="newPassword"
                        placeholder="New Password"
                        type="password"
                        onChange={handleChange}
                      />
                    </Box>
                  )}
                </Stack>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </ModalBody>
        {/* Footer for Save/Cancel buttons */}
        <ModalFooter>
          {/* Save button */}
          {editing ? (
            <Button colorScheme="purple" mr={3} onClick={handleSave}>
              Save
            </Button>
          ) : (
            // Edit button
            <Button
              colorScheme="purple"
              display={user._id !== context.user?._id ? "none" : "block"}
              mr={3}
              onClick={handleEdit}
            >
              Edit
            </Button>
          )}
          {/* Cancel button */}
          {editing && <Button onClick={() => setEditing(false)}>Cancel</Button>}
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
