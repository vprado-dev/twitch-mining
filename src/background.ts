chrome.runtime.onMessage.addListener(request => {
  chrome.tabs.query({ url: 'https://www.twitch.tv/*/' }, result => {
    if (result.length <= 0) {
      console.log('Não há nenhuma guia com um canal da twitch aberto');
      return;
    } else {
      console.log('foi');
    }
  });
});
