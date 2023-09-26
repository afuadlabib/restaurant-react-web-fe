import { Player, Controls } from '@lottiefiles/react-lottie-player';

export default function BaseLottieLoading() {
  return (
    <>
      <Player
        autoplay
        loop
        src="https://lottie.host/a8237c85-313b-41d7-b868-feb5a60f9e34/gokFHZghcC.json"
        style={{ height: '200px', width: '200px' }}
      >
      </Player>
    </>
  );
}
