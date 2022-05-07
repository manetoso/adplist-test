import { useEffect, useState } from 'react';
import { meetApi } from '../api/meetApi';
import { useForm } from './useForm';

export const useAllMeetings = () => {
  const [allMeetingsIsLoading, setAllMeetingsIsLoading] = useState(true);
  const [meetingList, setMeetingList] = useState([]);
  const [inputValue, handleInputValue, reset] = useForm({ title: '' });
  const { title } = inputValue;

  const handleSubmit = async e => {
    e.preventDefault();
    setAllMeetingsIsLoading(true);
    try {
      const { data } = await meetApi.post('meeting', {
        title,
      });
      setMeetingList([...meetingList, ...data.data.meetings]);
    } catch (error) {}
    reset();
    loadMeetings();
  };

  const loadMeetings = async () => {
    setAllMeetingsIsLoading(true);
    try {
      const { data } = await meetApi.get('meetings');
      setMeetingList([...data.data.meetings]);
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code that falls out of the range of 2xx
        console.log('error.response');
        console.log(error.response);
        // console.log(error.response.data);
        // console.log(error.response.status);
        // console.log(error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the
        // browser and an instance of
        // http.ClientRequest in node.js
        console.log('error.request');
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error message', error.message);
      }
      console.log('error.config');
      console.log(error.config);
    }
    setAllMeetingsIsLoading(false);
  };

  useEffect(() => {
    loadMeetings();
  }, []);

  return {
    meetingList,
    allMeetingsIsLoading,
    title,
    handleInputValue,
    handleSubmit,
  };
};
