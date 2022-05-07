import { meetApi } from './api/meetApi';

export const joinExistingRoom = async (meetingId, roomName) => {
  const resp = await meetApi.post(`participant/create`, {
    meetingId: meetingId,
  });

  const authResponse = resp.data.data.authResponse;
  const { authToken } = authResponse;

  //saving meeting details in session storage
  sessionStorage.setItem('auth', authToken);
  sessionStorage.setItem('meetingID', meetingId);
  sessionStorage.setItem('roomName', roomName);

  //reloading the page
  window.location.reload();
};
