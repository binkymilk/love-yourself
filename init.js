function randomize () {
  if (lyrics) {
    var num = Math.floor(Math.random() * lyrics.length)

    document.getElementById('lyric').innerHTML = lyrics[num].lyric
    var song = '— ' + lyrics[num].song
    document.getElementById('song').innerHTML = song
    var link = ''
    var html = 'Play on &nbsp;'
    if (lyrics[num].spotify) {
      link = lyrics[num].spotify
      html = html + '<i class="fab fa-spotify"></i>'
    } else if (lyrics[num].youtube) {
      link = lyrics[num].youtube
      html = html + '<i class="fab fa-youtube"></i>'
    } else if (lyrics[num].soundcloud) {
      link = lyrics[num].soundcloud
      html = html + '<i class="fab fa-soundcloud"></i>'
    }
    document.getElementById('link').href = link
    document.getElementById('link').innerHTML = html
  }
}
