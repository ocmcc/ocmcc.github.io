/**
 * Created by Medi on 2018/10/5.
 */
const ap = new APlayer({
  container: document.getElementById('aplayer'),
  autoplay: false,
  mini: false,
  autoplay: false,
  theme: '#FADFA3',
  loop: 'all',
  volume: 0.7,
  listFolded: true,
  listMaxHeight: 90,
  fixed: false,
  audio: [
    {
      name: '걱정말아요 그대(你不要担心)',
      artist: '野菊花',
      url: 'http://www.ytmp3.cn/down/51124.mp3',
      cover: 'http://p1.music.126.net/FhaoHC8Gp9m0FLKvcWuHHQ==/6657542906300239.jpg?param=130y130'
    },
    {
      name: '10 Lovers',
      artist: 'The Black Keys',
      url: 'http://link.hhtjim.com/163/28497099.mp3',
      cover: 'http://p2.music.126.net/Ah1qSSCas4UbybIWKo5aCQ==/5868093557600822.jpg?param=130y130'
    },
    {
      name: "What's Up",
      artist: '4 Non Blondes',
      url: 'http://link.hhtjim.com/163/2112908.mp3',
      cover: 'http://p2.music.126.net/6MAIdskLwJitnr-thO96Mw==/2259496395099002.jpg?param=130y130'
    },
  ]
});
