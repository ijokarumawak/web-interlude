import { Speaker, getSpeakers } from '@/api/endpoint/speakers';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Talk, getTalk } from '../../api/endpoint/talks';

// Talkコンポーネント
const TalkPage = () => {
  const router = useRouter();
  const { talkId } = router.query;
  const [talkData, setTalkData] = useState<Talk | null>(null);
  const [speakersData, setSpeakersData] = useState<Speaker[] | null>(null);

  useEffect(() => {
    if (typeof talkId === 'string') {
      getTalk(talkId).then((talkRes: Talk) => setTalkData(talkRes));
    }
    getSpeakers().then((SpeakersRes: Speaker[]) => setSpeakersData(SpeakersRes));
  }, [talkId]);


  if (!talkData || !speakersData) return <div>Loading...</div>;  // ローディング表示

  return (
      <div>
      <h1>Talkのレスポンス</h1>
      <p>{talkData.conferenceId}</p>
      <p>{talkData.trackId}</p>
      <p>{talkData.videoPlatform}</p>
      <p>{talkData.videoId}</p>
      <p>{talkData.title}</p>
      <p>{talkData.abstract}</p>
      <p>{talkData.speakers[0].id}</p>
      <p>{talkData.speakers[0].name}</p>
      ....
    <br></br>
    <br></br>
    <h1>Speakersのレスポンス</h1>
      <p>{speakersData[0].company}</p>
      <p>{speakersData[0].name}</p>
      ....
    </div>
 );
}

export default TalkPage;