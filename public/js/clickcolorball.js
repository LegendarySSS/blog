(function () {
  var heartContents = [
    'ᥫ᭡',
    '`♡´',
    '𓆩🖤𓆪',
    '♡´･ᴗ･`♡',
    '(❀❛ ֊ ❛„)♡',
    'ʕ̢̣̣̣̣̩̩̩̩·͡˔·ོɁ̡̣̣̣̣̩̩̩̩✧',
    'ूाीू',
    '♡ʕ•ᴥ•ʔ♡',
    '𖡼𖤣𖥧𖡼𓋼𖤣𖥧𓋼𓍊',
    '𝓴𝓲𝓼𝓼 𝓶𝒆 𝓹𝓵𝒆𝓪𝓼𝒆',
    'ʕ； •`ᴥ•´ʔ',
    '(◍•ᴗ•◍)',
    '𑁍',
    '૮₍ ´• ˕ •` ₎ა',
  ]; // 存储随机内容的数组

  document.addEventListener('click', function (event) {
    var heart = document.createElement('div');
    var randomIndex = Math.floor(Math.random() * heartContents.length); // 随机选择数组中的一个索引
    heart.innerHTML = heartContents[randomIndex]; // 使用随机选择的内容作为 heart 的 innerHTML
    heart.classList.add('heart');
    heart.style.left = event.pageX + 'px';
    heart.style.top = event.pageY + 'px';
    heart.style.color = getRandomColor();
    document.body.appendChild(heart);
    var distance = 2;
    var animationId = requestAnimationFrame(moveHeart);

    function moveHeart() {
      distance -= 0.5;
      heart.style.top = parseInt(heart.style.top) + distance + 'px';

      if (parseInt(heart.style.top) + distance > -heart.offsetHeight) {
        animationId = requestAnimationFrame(moveHeart);
      } else {
        cancelAnimationFrame(animationId);
        heart.remove();
      }
    }
  });

  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
})();
