import React, { useContext, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate, useParams } from 'react-router-dom';
import { DyteMeeting } from 'dyte-client';
import { PageAnimation } from './';
import { OnMeetContext } from '../context/onMeetContext';

export const MeetingRoom = () => {
  const { setIsOnMeet } = useContext(OnMeetContext);
  const { isAuthenticated } = useAuth0();
  let params = useParams();
  let navigate = useNavigate();
  let auth = sessionStorage.getItem('auth');
  let roomName = sessionStorage.getItem('roomName');
  let clientId = sessionStorage.getItem('clientID');

  useEffect(() => {
    setIsOnMeet(true);
  }, []);
  const onDyteInit = meeting => {
    //meeting joined event
    meeting.on(meeting.Events.meetingJoined, () => {
      meeting.controlBar.addButton({
        icon: <div>😀</div>,
        label: 'React 😀',
        position: 'center',
        onClick: () => {
          alert('Reaction Click');
        },
      });
    });
    //meeting ended event
    meeting.on(meeting.Events.meetingEnded, () => {
      setIsOnMeet(false);
      sessionStorage.clear();
      navigate('/');
    });
    //meeting participantLeave event
    meeting.on(meeting.Events.participantLeave, () => {
      setIsOnMeet(false);
      sessionStorage.clear();
      navigate('/');
    });
    //meeting disconnect event
    meeting.on(meeting.Events.disconnect, () => {
      setIsOnMeet(false);
      sessionStorage.clear();
      navigate('/');
    });
  };

  if (!isAuthenticated) {
    return navigate('/login');
  }

  if (auth === null || roomName === null) {
    return navigate('/');
  }

  return (
    <PageAnimation>
      <h1>
        {auth && roomName && (
          <DyteMeeting
            onInit={onDyteInit}
            clientId={`${clientId}`}
            meetingConfig={{
              roomName: `${roomName}`,
              authToken: `${auth}`,
            }}
          />
        )}
      </h1>
    </PageAnimation>
  );
};
