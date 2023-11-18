import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Talk, getTalk } from '../../api/endpoint/talks';

// Talkコンポーネント
const TalkPage = () => {
  const router = useRouter();
  const { talkId } = router.query;
  const [talkData, setTalkData] = useState<Talk | null>(null);
  
  useEffect(() => {
    if (typeof talkId === 'string') {
      getTalk(talkId).then((data: Talk) => setTalkData(data));
    }
  }, [talkId]);

  if (!talkData) return <div>Loading...</div>;  // ローディング表示
  
  return (
      <div>
      <h1>{talkData.id}</h1>
      <p>{talkData.conferenceId}</p>
      <p>{talkData.trackId}</p>
      <p>{talkData.videoPlatform}</p>
      <p>{talkData.videoId}</p>
      <p>{talkData.title}</p>
      <p>{talkData.abstract}</p>
      <p>{talkData.speakers[0].id}</p>
      <p>{talkData.speakers[0].name}</p>
      ....
    </div>
  );
}

export default TalkPage;