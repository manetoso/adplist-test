import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import {
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Input,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Spinner,
  Text,
  VStack,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { meetApi } from '../api/meetApi';
import { useAllMeetings } from '../hooks';

export const MeetsGrid = () => {
  const { user } = useAuth0();
  const {
    meetingList,
    allMeetingsIsLoading,
    title,
    handleInputValue,
    handleSubmit,
  } = useAllMeetings();

  let navigate = useNavigate();

  const joinRoom = async (meetingId, roomName, isHost) => {
    const clientId = Math.random().toString(36).substring(7);
    // ---- JOINROOM FEATURE ----
    const { data } = await meetApi.post(`meetings/${meetingId}/participant`, {
      clientSpecificId: clientId,
      roleName: isHost ? 'host' : 'participant',
      userDetails: {
        name: user.name,
      },
    });

    const authResponse = data.data.authResponse;
    const { authToken } = authResponse;

    // ---- SAVING DETAILS IN STORAGE ----
    sessionStorage.setItem('auth', authToken);
    sessionStorage.setItem('meetingID', meetingId);
    sessionStorage.setItem('roomName', roomName);
    sessionStorage.setItem('clientID', clientId);

    // ---- REDIRECT TO MEETROOM ----
    navigate(`/meeting/${roomName}/${meetingId}`);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <Text color="gray.700" fontWeight="bold">
          Meeting Title
        </Text>
        <Flex gap="0.75rem">
          <Input
            placeholder="Dayly meet"
            variant="filled"
            type="text"
            name="title"
            value={title}
            onChange={handleInputValue}
          />
          <Popover placement="top-start">
            <PopoverTrigger>
              <Button type="submit" variant="solid" colorScheme="true-black">
                Create Room
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverHeader>Feature disabled!</PopoverHeader>
              <PopoverBody>
                The dyte API for making video-calls is a subscription API, and
                I've created already a bunch of rooms, sorry.
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </Flex>
      </form>
      {allMeetingsIsLoading ? (
        <Flex flexDir="column" align="center" gap="0.75rem">
          <Text textAlign="center" color="gray.700">
            Loading meetings...
          </Text>
          <Spinner size="xl" color="true-black.500" />
        </Flex>
      ) : (
        <Grid
          width="100%"
          templateColumns={{
            base: 'repeat(1, 1fr)',
            lg: 'repeat(3, 1fr)',
            xl: 'repeat(4, 1fr)',
          }}
          gap="1rem"
        >
          {meetingList.map(meet => (
            <GridItem
              key={meet.id}
              w="100%"
              bg="true-black.100"
              color="white"
              p="0.75rem"
              rounded="md"
            >
              <VStack gap="1rem">
                <Heading fontSize="xl">{meet.title}</Heading>
                <Flex width="100%" justifyContent="space-evenly" gap="0.25rem">
                  <Popover placement="left">
                    <PopoverTrigger>
                      <Button
                        colorScheme="accent"
                        variant="solid"
                        onClick={() => joinRoom(meet.id, meet.roomName, true)}
                      >
                        Join as Host
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent>
                      <PopoverArrow />
                      <PopoverCloseButton color="true-black.500" />
                      <PopoverHeader color="true-black.500">
                        Feature Disabled!
                      </PopoverHeader>
                      <PopoverBody color="true-black.500">
                        The dyte API for making video-calls is a subscription
                        API, if you want to try it write to me via email (
                        <Text
                          as="a"
                          href="mailto:emmanuel.cortes.to@gmail.com"
                          color="accent.500"
                        >
                          emmanuel.cortes.to@gmail.com
                        </Text>
                        ) to enable it.
                      </PopoverBody>
                    </PopoverContent>
                  </Popover>
                  {/* <Popover placement="right">
                    <PopoverTrigger>
                      
                    </PopoverTrigger>
                    <PopoverContent>
                      <PopoverArrow />
                      <PopoverCloseButton color="true-black.500" />
                      <PopoverHeader color="true-black.500">
                        Feature Disabled!
                      </PopoverHeader>
                      <PopoverBody color="true-black.500">
                        The dyte API for making video-calls is a subscription
                        API, if you want to try it write to me via email (
                        <Text as="a" href="mailto:emmanuel.cortes.to@gmail.com" color="accent.500">
                          emmanuel.cortes.to@gmail.com
                        </Text>
                        ) to enable it.
                      </PopoverBody>
                    </PopoverContent>
                  </Popover> */}
                  <Button
                    colorScheme="true-white"
                    variant="outline"
                    onClick={() => joinRoom(meet.id, meet.roomName)}
                  >
                    Join as Participant
                  </Button>
                </Flex>
              </VStack>
            </GridItem>
          ))}
        </Grid>
      )}
    </>
  );
};
