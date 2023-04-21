import 'emoji-log';
import {browser} from 'webextension-polyfill-ts';

// chrome.runtime.onMessage.addListener(function (msg, sender) {
// 	// First, validate the message's structure
// 	if ((msg.from === 'content') && (msg.subject === 'showPageAction')) {
// 	  // Enable the page-action for the requesting tab
// 	  chrome.pageAction.show(sender.tab.id);
// 	}
//   });

browser.runtime.onInstalled.addListener((): void => {
  console.emoji('🦄', 'extension installed');
});
