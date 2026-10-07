# Monstrinhas que Constroem

Jogo online de habilidades sociais: 6 fases, 12 missões e um monstrinho construído com massinha de EVA.

## Rodar
    npm install
    npm run dev      # desenvolvimento
    npm run build    # build de produção (pasta dist/)

## Estrutura
- `src/data/phases.json`: roteiro (fases, missões, alternativas). Para mudar textos, edite só este arquivo.
- `src/data/characters.ts`: Alex, Violet e Solariun (imagens em `src/assets/characters/`).
- `src/assets/backgound/`: personagens de corpo inteiro (PNG transparente) exibidas ao lado de cada fase.
- `src/hooks/useGame.ts`: máquina de estados (início, fase, missão, reflexão, construção, fim).
- `src/components/`: telas e componentes visuais.
- `src/styles/global.css`: tema e estilos.

## Próximos passos sugeridos
Reações específicas por alternativa, salvar o diário, ilustrações do monstrinho e sons.
