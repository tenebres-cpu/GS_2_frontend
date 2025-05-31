 Integrantes
🌊 Flood Alert
Desenvolvido por:
📌 Marcelo Affonso Fonseca
📌 RM: 559790

🧠 Visão Geral do Projeto
Flood Alert é uma solução tecnológica criada durante o projeto Global Solution 2025.1 da FIAP com o objetivo de mitigar os impactos das enchentes no Brasil por meio da tecnologia, conectividade e acessibilidade.

A proposta une hardware (sensores e ESP32) com um aplicativo inteligente que permite aos usuários visualizarem em tempo real o risco de enchentes, interagirem entre si e tomarem decisões informadas.

🎯 Problema Identificado
Cegueira Hidrológica – A crítica falta de visibilidade em tempo real sobre enchentes no Brasil.

Impactos Reais:
🧍‍♂️ Mortes evitáveis: 80% das vítimas não foram alertadas a tempo (CEMADEN, 2023).

🏚 Deslocamento em massa: Em 2024, o RS registrou mais de 540 mil desabrigados.

🦠 Crise de saúde pública: Doenças como leptospirose surgem até 48h após enchentes (FIOCRUZ, 2023).

💡 Solução Proposta
Um aplicativo de monitoramento de enchentes integrado a um sistema de alerta físico com sensores. A solução combina:

📍 Mapa interativo com zonas de risco.

💬 Bate-papo comunitário para troca de alertas e ajuda.

📢 Sistema de alerta físico (sonoro/visual) com ESP32.

📈 Registro de alertas e localização das ocorrências.

🛠 Tecnologias e Componentes
📱 Aplicativo
Desenvolvido com foco em UX/UI simples e acessível

Prototipado no Figma (link será adicionado)

🔌 Hardware
ESP32

Sensor de temperatura e umidade (DHT11)

Módulo GPS

Sensor de luminosidade (LDR)

Fiação básica

✅ Justificativa da Solução
Diferenciais:
Chat entre usuários para troca de informações e pedidos de ajuda.

Visualização clara e objetiva de áreas com alto ou baixo risco.

Sistema de alerta físico mesmo no silencioso (segurança garantida).

Benefícios:
Facilita a entrega e obtenção de informações críticas.

Auxilia em tomadas de decisões em áreas de risco, como estradas durante chuvas.

Incentiva o engajamento comunitário com alertas colaborativos.

📌 Casos de Uso
Imagine que você está preso no trânsito durante uma chuva forte. O aplicativo Flood Alert permite que você:

🗺 Veja no mapa quais ruas estão alagadas.

💬 Pergunte via chat comunitário quais rotas estão seguras.

📍 Receba alertas automáticos com base na sua localização GPS.

📋 Backlog do Produto
Prioridade	Item	Status
Alta	Sistema de alertas sonoros	✅ Concluído
Alta	Mapa com zonas de risco	✅ Concluído
Média	Chat comunitário	✅ Concluído
Alta	Interface acessível e colorida	✅ Concluído

👤 Responsável
Todo o desenvolvimento e documentação do projeto foram realizados por:

Marcelo Affonso Fonseca

RM: 559790

🎨 UX/UI – Protótipo
Desenvolvido no Figma

Design acessível e intuitivo

Uso de ícones, cores e texto simplificado para rápida compreensão

📎 [Inserir link para o protótipo no Figma aqui]

📂 Estrutura do Projeto
bash
Copiar
Editar
GS_2_frontend/
├── index.html         # Página principal da aplicação
├── style.css          # Estilos customizados
└── script.js          # Lógica e interatividade

