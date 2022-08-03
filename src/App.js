import React, { useEffect, useState } from 'react';
import styles from './App.module.css';
import Searchheader from './components/search_header/search_header';
import VideoList from './components/video_list/video_list';

function App() {
  const [videos, setVideos] = useState([]);


  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch("https://youtube.googleapis.com/youtube/v3/videos?key=AIzaSyDyRFCYzWvFVbV7sGH3swtaJgMiUwnWiKc&part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyDyRFCYzWvFVbV7sGH3swtaJgMiUwnWiKc", requestOptions)
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));
  }, []);

  return (
    <div className={styles.app}>
      <Searchheader />
      <VideoList videos={videos} />
    </div>
  );
}

export default App;
