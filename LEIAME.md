# SilverPaint

Programa de desenho para mesa digitalizadora (Wacom), inspirado no ibisPaint X.

## Gerar o .exe pelo GitHub
1. Crie um repositório novo e envie todos os arquivos desta pasta (inclusive a pasta `.github`).
2. Vá em **Actions** → "Build SilverPaint (Windows)" → **Run workflow** (ou só faça um push na `main`).
3. Ao terminar, baixe o artefato **SilverPaint-Windows**. Vêm dois arquivos:
   - `SilverPaint-portable-1.1.0.exe` — abre direto, sem instalar.
   - `SilverPaint-instalador-1.1.0.exe` — instala com atalho no menu Iniciar.

## Pressão da caneta Wacom
Abra **Propriedades da Mesa Wacom** → Caneta → **Mapeamento** e deixe marcado **"Usar Windows Ink"**.
Sem isso o Windows entrega a caneta como mouse e a pressão não chega ao programa.

## Novidades da 1.1
- **Transformar livre (Ctrl+T):** alças para redimensionar, girar, espelhar. Enter aplica, Esc cancela.
- **Réguas:** reta, circular, radial e perspectiva de 1/2/3 pontos (menu “Régua” no topo; arraste as bolinhas rosa).
- **✨ Pintar auto:** detecta as áreas fechadas do desenho e pinta. No .exe a IA precisa de uma chave da API Anthropic
  (colada na própria janela da pintura automática); sem chave, usa a paleta automática e as dicas de cor.
- **☁ Nuvem:** salva em `OneDrive\SilverPaint` (sincroniza sozinho). Sem OneDrive, salva em Documentos\SilverPaint.

## Atalhos
B pincel · E borracha · S dedo · G balde · I conta-gotas · U formas · T texto · M seleção · L laço · V mover · H mão
[ e ] tamanho · Ctrl+Z / Ctrl+Y desfazer/refazer · Espaço+arrastar move a tela · R+arrastar gira · roda do mouse = zoom · 0 ajusta à tela
