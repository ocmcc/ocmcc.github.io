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
      cover: ''
    },
    {
      name: '莫名我就喜欢你',
      artist: '',
      url: 'http://www.ytmp3.cn/down/35709.mp3',
      cover: ''
    }
  ]
});
