document.body.onkeyup = function(e){
  if(e.keyCode === 32 ||  e.key === ' ' || e.keyCode == 13){
      randomize()
  }
}

// Papa-parse
var lyrics = [{lyric: '', song: '', spotify: '', youtube: '', soundcloud: ''}]
var csv = 'https://cors-anywhere.herokuapp.com/https://docs.google.com/spreadsheets/d/e/2PACX-1vR-Xm9DX9AKNIb48DuyZFU1bE5S-AKm8BgMeOeCSBNmKQrwJTSrq4kEYYm_gGPZqGZHx3tvArLXg8VE/pub?gid=0&single=true&output=csv'
Papa.parse(csv, {
  download: true,
  delimiter: ',',
  header: true,
  encoding: 'utf-8',
  complete: function (results) {
    lyrics = results.data
    randomize()
  }
})

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
    }
    if (lyrics[num].youtube) {
      link = lyrics[num].youtube
      html = html + '<i class="fab fa-youtube"></i>'
    }
    if (lyrics[num].soundcloud) {
      link = lyrics[num].soundcloud
      html = html + '<i class="fab fa-soundcloud"></i>'
    }
    document.getElementById('link').href = link
    document.getElementById('link').innerHTML = html
  }
}
