import { collect } from './function/collect';

chrome.runtime.onMessage.addListener(request => {
  chrome.tabs.query({ url: 'https://www.twitch.tv/*' }, tab => {
    if (tab.length <= 0) {
      console.log('Não há nenhuma guia com um canal da twitch aberto');
      return;
    } else {
      console.log('foi');
    }
    try {
      tab.map((tab, index) => {
        const sla = chrome.tabs.executeScript(
          Number(tab.id),
          {
            code: `if(document.querySelectorAll('.chat-line__message')) ${collect}`,
          },
          result => {
            console.log('result', result);
          },
        );

        chrome.tabs.executeScript(Number(tab.id), {
          code: `console.log('location:', window.location.href);`,
        });
      });
    } catch (err) {
      console.error(err);
    }
  });
});
