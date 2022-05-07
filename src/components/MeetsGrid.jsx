import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import {
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Input,
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
    const { data } = await meetApi.post(`meetings/${meetingId}/participant`, {
      clientSpecificId: clientId,
      roleName: isHost ? 'host' : 'participant',
      userDetails: {
        name: user.name,
      },
    });

    const authResponse = data.data.authResponse;
    const { authToken } = authResponse;

    //saving meeting details in session storage
    sessionStorage.setItem('auth', authToken);
    sessionStorage.setItem('meetingID', meetingId);
    sessionStorage.setItem('roomName', roomName);
    sessionStorage.setItem('clientID', clientId);

    //redirecting to the example meeting page
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
          <Button type="submit" variant="solid" colorScheme="true-black">
            Create Room
          </Button>
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
                  <Button
                    colorScheme="accent"
                    variant="solid"
                    onClick={() => joinRoom(meet.id, meet.roomName, true)}
                  >
                    Join as Host
                  </Button>
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
