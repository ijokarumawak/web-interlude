import { Speaker, getSpeakers } from '@/api/endpoint/speakers';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Talk, getTalk } from '../../api/endpoint/talks';
import Page from '../../app/player/page';

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

  console.log(talkData.title);
  console.log(speakersData[0].name);

  return (
    <div>
      <Page />
      {speakersData.map((speaker, index) => (
        <div key={index}>
          <p>{speaker.name}</p>
        </div>
      ))}
    </div>
  );
};

export default TalkPage;
