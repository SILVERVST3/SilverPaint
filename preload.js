// Nuvem do .exe: salva na pasta do OneDrive (sincroniza sozinha). Sem OneDrive, usa Documentos.
const { contextBridge } = require('electron');
const fs = require('fs'), path = require('path'), os = require('os');
const oneDrive = () => process.env.OneDrive || process.env.OneDriveConsumer || '';
function dir() {
  const base = oneDrive() || path.join(os.homedir(), 'Documents');
  const d = path.join(base, 'SilverPaint');
  fs.mkdirSync(d, { recursive: true });
  return d;
}
const safe = id => { if (!/^[a-z0-9_-]+$/i.test(String(id))) throw new Error('id inválido'); return String(id); };
contextBridge.exposeInMainWorld('silverNative', {
  cloud: {
    where: () => dir(),
    isOneDrive: () => !!oneDrive(),
    list: () => {
      const d = dir();
      return fs.readdirSync(d).filter(f => f.endsWith('.meta.json')).map(f => {
        try { return JSON.parse(fs.readFileSync(path.join(d, f), 'utf8')); } catch (e) { return null; }
      }).filter(Boolean);
    },
    save: (id, meta, payload) => {
      const d = dir(); id = safe(id);
      fs.writeFileSync(path.join(d, id + '.spaint.json'), payload);
      fs.writeFileSync(path.join(d, id + '.meta.json'), JSON.stringify({ ...meta, id }));
      return true;
    },
    load: id => fs.readFileSync(path.join(dir(), safe(id) + '.spaint.json'), 'utf8'),
    remove: id => {
      const d = dir(); id = safe(id);
      for (const f of [id + '.spaint.json', id + '.meta.json']) { try { fs.unlinkSync(path.join(d, f)); } catch (e) {} }
      return true;
    }
  }
});
