var lyrics = [
  {
    lyric: 'On days where I hate myself for being me, on days where I want to disappear forever. Let’s make a door. It’s in your heart. Open the door and this place will await, Magic Shop',
    song: 'Magic Shop',
    link: 'https://open.spotify.com/track/22ryCgQttpV7oCrn7llGRu?si=4vJbZXYpSWen3NlI1VlbiQ'
  },
  {
    lyric: 'It’s okay come on when I say one two three forget it. Erase all sad memories. Smile holding onto each other’s hands',
    song: '둘! 셋! (그래도 좋은 날이 더 많기를) [2! 3! (Still Wishing For More Good Days)]',
    link: 'https://open.spotify.com/track/0ma7lbs8BsVIv2kSaqOsDI?si=hxlbgjdnTZaKugWYtB_6IQ'
  }
]

function randomize () {
  var num = Math.floor(Math.random() * lyrics.length)

  document.getElementById('lyric').innerHTML = lyrics[num].lyric
  var song = '— ' + lyrics[num].song
  document.getElementById('song').innerHTML = song
  document.getElementById('spotify').href = lyrics[num].link

}