import http from 'node:http';
import {readFile} from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {spawn} from 'node:child_process';
const root=fileURLToPath(new URL('./dist/',import.meta.url));
const url='http://127.0.0.1:4173';
const mime={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'application/javascript; charset=utf-8'};
const directory=path.resolve(root);
function openBrowser(){if(process.argv.includes('--open')&&process.platform==='win32'){const child=spawn('cmd.exe',['/d','/c','start','',url],{windowsHide:true,stdio:'ignore'});child.on('error',()=>console.log(`Open ${url} in your browser.`));}}
const server=http.createServer(async(req,res)=>{try{const file=path.resolve(directory,'.'+decodeURIComponent(new URL(req.url,url).pathname));if(file!==directory&&!file.startsWith(directory+path.sep)){res.writeHead(403).end();return;}const target=file===directory||file.endsWith(path.sep)?path.join(file,'index.html'):file;res.setHeader('Content-Type',mime[path.extname(target)]||'application/octet-stream');res.setHeader('Referrer-Policy','strict-origin-when-cross-origin');res.end(await readFile(target));}catch{res.writeHead(404).end('Not found');}});
server.on('error',async error=>{if(error.code==='EADDRINUSE'){try{const response=await fetch(url);const html=await response.text();if(html.includes('<title>가까이 — 내 주변 쓰레기통</title>')){console.log(`Already running: ${url}`);openBrowser();return;}}catch{}console.error('Port 4173 is already in use by another program.');}else console.error(error.message);process.exitCode=1;});
server.listen(4173,'127.0.0.1',()=>{console.log(`Local: ${url}\nKeep this window open while using the map. Press Ctrl+C to stop.`);openBrowser();});
