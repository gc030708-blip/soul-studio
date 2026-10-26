'use strict';
// Keep release metadata in one file; static links remain usable without JS.
fetch('release.json', {cache:'no-store'}).then(r => {if(!r.ok) throw new Error('Release unavailable'); return r.json();}).then(release => {
 const url = new URL(release.downloadURL);
 if(url.protocol !== 'https:' || url.hostname !== 'www.mediafire.com' || !/^5\.\d+\.\d+$/.test(release.version)) return;
 document.querySelectorAll('[data-download]').forEach(a => {a.href=url.href; a.rel='noopener noreferrer';});
 const fields = {version:release.version,size:(release.bytes/1000000).toFixed(1)+' MB',filename:release.filename,sha:release.sha256};
 for(const [field,text] of Object.entries(fields)) document.querySelectorAll('[data-'+field+']').forEach(e=>e.textContent=text);
}).catch(()=>{});
