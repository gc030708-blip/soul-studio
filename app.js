"use strict";
// Safe metadata updates; static download links also work without JavaScript.
fetch('release.json', {cache:'no-store'}).then(r => {if(!r.ok) throw new Error('Release unavailable'); return r.json();}).then(release => {
 const url = new URL(release.downloadURL);
 if(url.protocol !== 'https:' || url.hostname !== 'www.mediafire.com' || url.username || url.password || url.port || url.search || url.hash || url.pathname.split('/')[3] !== release.filename || !/^\/file\/[a-zA-Z0-9]+\/Soul_Studio_5\.[0-9.]+(?:_Revision_[0-9]+)?_Unsigned\.ipa\/file$/.test(url.pathname) || !/^5\.\d+\.\d+$/.test(release.version) || !/^[a-f0-9]{64}$/.test(release.sha256) || !Number.isSafeInteger(release.bytes) || release.bytes <= 0 || release.bytes > 2000000000 || !/^Soul_Studio_[a-zA-Z0-9_.]+\.ipa$/.test(release.filename)) return;
 document.querySelectorAll('[data-download]').forEach(a => {a.href=url.href; a.rel='noopener noreferrer';});
 const fields = {version:release.version,size:(release.bytes/1000000).toFixed(1)+' MB',filename:release.filename,sha:release.sha256};
 for(const [field,text] of Object.entries(fields)) document.querySelectorAll('[data-'+field+']').forEach(e=>e.textContent=text);
}).catch(()=>{});
