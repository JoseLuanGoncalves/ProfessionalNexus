# A Masmorra do conhecimento


1. **Visão Geral (O Problema)**
O desafio do hackathon foi criar uma solução de IA e gamificação para orientação vocacional de jovens de até 17 anos.

Nossa pesquisa inicial identificou que testes vocacionais tradicionais falham por serem:

> Entediantes (listas longas de perguntas).

> Literais (perguntam "Você é bom em matemática?").

> Limitados (resultam em "cursos" em vez de "áreas").

2. **A Solução (A Nossa Proposta)**
Criamos o "Masmorra das Escolhas", um web app que transforma o teste vocacional em um mini-RPG.

O usuário não responde perguntas, ele enfrenta desafios em salas de uma masmorra. Suas escolhas e desempenho nesses desafios (mini-games) são usados para mapear seus talentos implícitos, baseados nas Inteligências Múltiplas de Gardner.

3. **O Processo: Como Foi Feito**

Brainstorming: Exploramos algumas ideias

Decisão: Escolhemos a "Masmorra" por ser o tema mais lúdico, aberto e alinhado com as dicas da psicóloga.

Mapeamento de Gardner: Nossa arquitetura de quiz é adaptativa e baseada em 'portões' (gates). O processo não é linear, mas sim um caminho que se ramifica.

Perguntas-Portão (Q1-Q3): As 3 primeiras perguntas (ex: Alavancas, Dragão, Armadilhas) atuam como um "teste de aptidão" inicial. O sistema analisa as respostas em tempo real (via JavaScript) para identificar a tendência primária do usuário (ex: Lógica, Ação ou Interação).

Caminhos de Aprofundamento (Q4-Q7): Com base na tendência primária, o usuário é direcionado para um de três "caminhos" (sets de perguntas) exclusivos:

O Caminho do Sábio: Focado em lógica, sistemas e linguagem.

O Caminho do Executor: Focado em ação, reflexo e exploração.

O Caminho do Diplomata: Focado em pessoas, emoções e ambiente. Isso garante que a experiência seja imediatamente relevante para o perfil do usuário.

Análise Final (IA Gerativa): Ao final das 10 perguntas, montamos um "Dossiê do Aventureiro" (incluindo o caminho que ele tomou e todas as suas respostas) e o enviamos para nossa IA Gerativa (Google Gemini). A IA atua como o "Mestre da Masmorra", interpretando a jornada completa do usuário para gerar uma Classe e uma Área Vocacional 100% personalizadas.
