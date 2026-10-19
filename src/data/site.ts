export const contact = { phone: '5511932453688', displayPhone: '(11) 93245-3688', instagram: '@voltcityoficial' };
export const whatsapp = (message: string) => `https://wa.me/${contact.phone}?text=${encodeURIComponent(message)}`;
export const asset = (path: string) => `${import.meta.env.BASE_URL.replace(/\/?$/, '/')}${path.replace(/^\//, '')}`;
export const route = (path: string) => {
  const normalized = path.replace(/^\/+|\/+$/g, '');
  const suffix = normalized ? `${normalized}/` : '';
  return `${import.meta.env.BASE_URL.replace(/\/?$/, '/')}${suffix}`;
};
export const services = [
  { icon: '⌂', slug: 'residencial', title: 'Residencial', text: 'Circuito dedicado, cabeamento dimensionado e proteção completa para carregar em casa com tranquilidade.', note: 'Casa e sobrado', image: asset('/images/brick-wallbox.jpeg') },
  { icon: '▦', slug: 'condominial', title: 'Condominial', text: 'Infraestrutura na vaga, documentação técnica e orientação para uma aprovação mais clara com o condomínio.', note: 'Garagens coletivas', image: asset('/images/condo-installation.jpeg') },
  { icon: '▤', slug: 'corporativo', title: 'Corporativo', text: 'Pontos de recarga para frotas, estacionamentos e operações que pedem capacidade e continuidade.', note: 'Empresas e frotas', image: asset('/images/bmw-wallbox.jpeg') },
  { icon: '⌁', slug: 'consultoria', title: 'Consultoria', text: 'Avaliação de carga, adequação de quadros e estudo de viabilidade antes de qualquer intervenção.', note: 'Viabilidade técnica', image: asset('/images/gwm-panel-open.jpeg') },
];

export const solutions = [
  {
    slug: 'residencial',
    title: 'Instalação de Wallbox residencial',
    kicker: 'Casa e sobrado',
    intro: 'Carregue em casa com um ponto dimensionado para a sua rotina, sem improviso no quadro elétrico.',
    pain: 'A dúvida mais comum é se a instalação aguenta a potência do carro sem aquecer cabos, derrubar disjuntor ou criar uma obra desnecessária.',
    image: asset('/images/brick-wallbox.jpeg'),
    deliverables: ['Leitura do quadro, medidor e percurso até a vaga', 'Circuito dedicado com proteção e aterramento adequados', 'Fixação, organização dos cabos e teste com o veículo'],
    steps: ['Você envia fotos do quadro e da vaga', 'Definimos rota, potência e materiais', 'Instalamos, testamos e entregamos o ponto pronto'],
  },
  {
    slug: 'condominial',
    title: 'Recarga para condomínios',
    kicker: 'Garagens coletivas',
    intro: 'Uma solução que facilita a aprovação, protege a infraestrutura do prédio e prepara a garagem para crescer.',
    pain: 'O desafio não é só instalar na vaga: é comprovar capacidade, organizar o rateio e deixar síndico e moradores seguros sobre a obra.',
    image: asset('/images/condo-installation.jpeg'),
    deliverables: ['Levantamento da garagem, prumada e quadro de áreas comuns', 'Memorial técnico para apresentar ao condomínio', 'Infraestrutura individual ou preparada para expansão'],
    steps: ['Mapeamos o cenário e as regras do prédio', 'Montamos a proposta técnica para decisão', 'Executamos com identificação e documentação da entrega'],
  },
  {
    slug: 'corporativo',
    title: 'Carregadores para empresas e frotas',
    kicker: 'Empresas e operações',
    intro: 'Pontos de recarga pensados para disponibilidade, segurança e rotina operacional — não apenas para ocupar uma vaga.',
    pain: 'Quando vários veículos carregam juntos, a potência disponível e o tempo parado viram gargalos de operação e custo.',
    image: asset('/images/bmw-wallbox.jpeg'),
    deliverables: ['Dimensionamento da demanda e dos horários de recarga', 'Infraestrutura para um ou vários pontos', 'Comissionamento e orientação para a operação'],
    steps: ['Entendemos frota, turnos e local', 'Projetamos a capacidade por etapa', 'Instalamos e validamos o uso no dia a dia'],
  },
  {
    slug: 'consultoria',
    title: 'Consultoria e diagnóstico elétrico',
    kicker: 'Viabilidade técnica',
    intro: 'Antes de comprar equipamento ou quebrar parede, saiba o que o imóvel suporta e qual caminho faz sentido.',
    pain: 'Muitos projetos começam pelo carregador e só depois descobrem limitações de carga, distância, proteção ou aprovação.',
    image: asset('/images/gwm-panel-open.jpeg'),
    deliverables: ['Análise de carga, quadro, percurso e ponto de instalação', 'Recomendação de potência e arquitetura da solução', 'Orientação clara sobre próximos passos e investimento'],
    steps: ['Você envia o contexto e as fotos', 'Fazemos a leitura técnica do cenário', 'Você recebe um plano objetivo para decidir'],
  },
];
export const process = [
  ['01', 'Triagem on-line', 'Você envia fotos e vídeos do quadro, relógio e vaga. A equipe entende o cenário antes de deslocar.'],
  ['02', 'Projeto e orçamento', 'Definimos rota, materiais, proteções e uma proposta clara para a sua instalação.'],
  ['03', 'Execução precisa', 'Infraestrutura organizada, quadro dedicado e dispositivos de segurança adequados à carga.'],
  ['04', 'Teste e entrega', 'Comissionamento com o veículo e conferência final para deixar o ponto pronto para uso.'],
];

// Field records used across the home page and the projects hub. Details remain
// deliberately factual until each client authorizes a fuller case study.
export const projects = [
  {
    type: 'Residencial',
    title: 'Wallbox GWM com quadro dedicado',
    summary: 'Organização do ponto de recarga e dos dispositivos de proteção para uma garagem residencial.',
    image: asset('/images/wallbox-showcase.jpeg'),
    alt: 'Wallbox GWM com quadro dedicado em instalação residencial',
  },
  {
    type: 'Condomínio',
    title: 'Ponto de recarga em garagem coletiva',
    summary: 'Instalação documentada em garagem condominial, preparada a partir da leitura do cenário do edifício.',
    image: asset('/images/condo-installation.jpeg'),
    alt: 'Wallbox instalado em garagem de condomínio',
  },
  {
    type: 'Residencial',
    title: 'Wallbox BMW com proteção dedicada',
    summary: 'Ponto de recarga com quadro dedicado, percurso organizado e entrega para uso no dia a dia.',
    image: asset('/images/bmw-wallbox.jpeg'),
    alt: 'Wallbox BMW com quadro WEG e cabo azul em garagem',
  },
];

// Public review excerpts supplied by Volt City. Keep the presentation limited
// to the information the reviewers made public and avoid aggregate claims.
export const testimonials = [
  {
    quote: 'Marcos é um excelente profissional, instalou meu wallbox para o Dolphin Mini e ficou perfeito. Muito detalhista aos processos. Recomendo.',
    author: 'Vagner S.',
    context: 'Instalação de Wallbox · avaliação no Google',
  },
  {
    quote: 'Excelente profissional, nota 1000. Podem contratar sem medo: preço justo, profissionalismo e qualidade.',
    author: 'Murilo R.',
    context: 'Avaliação no Google',
  },
  {
    quote: 'Ótimo profissional. Recomendo para qualquer um.',
    author: 'Jander A.',
    context: 'Avaliação no Google',
  },
];
export const faqs = [
  ['O condomínio pode impedir a instalação?', 'A instalação precisa respeitar as regras técnicas e a convenção local. A Volt City orienta a apresentação do escopo e, quando aplicável, a documentação técnica necessária.'],
  ['Tomada comum substitui um Wallbox?', 'Não. A recarga contínua exige circuito exclusivo, cabeamento correto e proteções dimensionadas. O Wallbox oferece uma solução mais segura e previsível.'],
  ['Preciso aumentar a carga da concessionária?', 'Nem sempre. A avaliação considera a capacidade do imóvel, o uso simultâneo e a potência ideal para a sua rotina antes de indicar qualquer adequação.'],
  ['Quanto tempo dura a instalação?', 'Depende do percurso, da infraestrutura existente e do tipo de imóvel. A triagem inicial permite estimar o cronograma com muito mais precisão.'],
];

export const guides = [
  {
    slug: 'estudo-de-viabilidade-para-carregador-eletrico',
    title: 'Estudo de viabilidade para carregador elétrico: o que avaliar',
    description: 'Entenda como avaliar quadro, carga disponível, percurso e proteções antes de instalar um carregador de veículo elétrico.',
    category: 'Viabilidade e segurança',
    intro: 'O estudo de viabilidade verifica as condições da instalação elétrica e do local antes de definir o carregador e o caminho da instalação. Ele ajuda a identificar o que precisa ser confirmado no quadro, na alimentação e no trajeto até a vaga.',
    sections: [
      { heading: 'O que é avaliado antes da instalação?', paragraphs: ['A avaliação começa pelo cenário: tipo de imóvel, veículo, rotina de recarga, posição do quadro ou medidor e distância aproximada até a vaga. Esses dados ajudam a orientar a vistoria e a identificar quais informações ainda faltam.', 'No local, o profissional verifica a instalação existente, a capacidade disponível, o percurso dos condutores e as proteções necessárias. A solução final depende das características reais do imóvel; fotos ou uma conversa inicial servem para triagem, mas não substituem a avaliação técnica quando ela é necessária.'] },
      { heading: 'O quadro elétrico suporta um carregador?', paragraphs: ['Não existe uma resposta única sem conhecer a instalação. A potência do carregador, a alimentação disponível, as cargas que já funcionam no imóvel, a distância até a vaga e a forma de uso influenciam o dimensionamento.', 'A avaliação pode concluir que a instalação admite o ponto proposto, que precisa de adequações ou que é necessário estudar outra potência ou estratégia de recarga. Não se deve presumir que todo imóvel precisa aumentar a carga, nem que todo quadro comporta qualquer carregador.'] },
      { heading: 'O que muda entre casa, condomínio e empresa?', paragraphs: ['Em uma residência, o foco costuma ser o circuito até a vaga e a compatibilidade com a instalação da unidade. Em condomínios, também entram o percurso pelas áreas comuns, a capacidade da infraestrutura compartilhada, a forma de medição e as regras aplicáveis ao edifício.', 'Em empresas e frotas, quantidade de veículos, horários e simultaneidade de recarga passam a fazer parte da análise. Por isso, a Volt City organiza as soluções em [residencial](/solucoes/residencial), [condominial](/solucoes/condominial) e [corporativa](/solucoes/corporativo).'] },
      { heading: 'Quais informações ajudam na triagem?', paragraphs: ['Para começar a conversa, reúna fotos nítidas do quadro e do medidor, uma imagem da vaga e uma estimativa do trajeto entre o ponto de energia e o local do carregador. Informe também o modelo do veículo, o equipamento que pretende usar (se já tiver escolhido) e o tipo de imóvel.', 'Com essas informações, a equipe consegue entender o cenário e indicar os próximos passos. A definição de potência, materiais, proteções e necessidade de adequação deve considerar a avaliação técnica do local.'] },
      { heading: 'O estudo substitui projeto ou responsabilidade técnica?', paragraphs: ['Não necessariamente. Uma triagem, uma avaliação de viabilidade, um projeto e a execução são etapas diferentes. O escopo documental depende do local, da solução e das exigências aplicáveis ao caso. Antes de contratar, peça que a proposta deixe claro o que está incluído e quem responde tecnicamente pelo trabalho.', 'A Volt City oferece [consultoria e diagnóstico elétrico](/solucoes/consultoria) para organizar essa decisão antes da execução.'] },
    ],
    faqs: [
      ['Preciso comprar o carregador antes da avaliação?', 'Não. Em muitos casos, avaliar primeiro a instalação ajuda a escolher uma potência e um equipamento compatíveis com o cenário.'],
      ['Uma foto do quadro confirma que a instalação suporta o carregador?', 'A foto ajuda na triagem, mas sozinha pode não mostrar todas as informações necessárias para fechar o dimensionamento.'],
      ['O estudo sempre indica aumento de carga?', 'Não. A necessidade depende da capacidade e das condições verificadas no imóvel.'],
    ],
    related: [
      { label: 'Consultoria e diagnóstico elétrico', href: '/solucoes/consultoria' },
      { label: 'Instalação de Wallbox residencial', href: '/solucoes/residencial' },
      { label: 'Recarga para condomínios', href: '/solucoes/condominial' },
    ],
  },
  {
    slug: 'quanto-custa-instalar-wallbox',
    title: 'Quanto custa instalar um Wallbox? O que muda no orçamento',
    description: 'Veja quais fatores influenciam o custo de instalação de Wallbox: distância, infraestrutura, potência e condições do imóvel.',
    category: 'Residencial',
    intro: 'O custo de instalar um Wallbox depende do local e do escopo da obra. Distância até a vaga, condições do quadro, caminho dos cabos, potência pretendida e proteções necessárias podem mudar o orçamento. Por isso, um preço sem conhecer o cenário serve apenas como referência inicial.',
    sections: [
      { heading: 'O que mais influencia o custo da instalação?', paragraphs: ['O primeiro fator é o percurso entre a alimentação elétrica e a vaga. Distâncias maiores ou caminhos que exigem eletrodutos, canaletas ou intervenções adicionais podem aumentar materiais e mão de obra.', 'Também importam as condições do quadro, a necessidade de adequações, o tipo de parede ou garagem, a potência desejada e o que já está incluído no serviço. Compare propostas pelo escopo: equipamento, circuito, proteções, instalação, testes e documentação, quando aplicável.'] },
      { heading: 'O carregador está incluído no valor?', paragraphs: ['Nem sempre. Algumas propostas cobrem somente a infraestrutura e a instalação; outras incluem o carregador. Confirme marca e modelo, garantia do equipamento, materiais, limite de distância e serviços adicionais antes de comparar valores.', 'A página de [instalação residencial](/solucoes/residencial) explica como a Volt City organiza a avaliação e o orçamento conforme cada imóvel.'] },
      { heading: 'Por que a avaliação do quadro muda o orçamento?', paragraphs: ['O quadro e a alimentação existente podem exigir espaço, proteções ou ajustes específicos. Além disso, o carregador precisa ser dimensionado junto com o circuito e o percurso, em vez de ser tratado como um aparelho simplesmente conectado a uma tomada.', 'Uma triagem por fotos pode ajudar a entender o cenário, mas o orçamento fechado depende das informações necessárias sobre a instalação. Não é responsável prometer um valor universal para qualquer residência ou condomínio.'] },
      { heading: 'Como pedir um orçamento comparável?', paragraphs: ['Envie fotos do quadro, do medidor e da vaga, informe o modelo do veículo e diga se já escolheu o carregador. Se souber, acrescente a distância aproximada e qualquer regra do condomínio. Peça que o orçamento discrimine equipamento, materiais, serviço, testes e eventuais itens condicionais.', 'Em prédios, o morador também pode precisar entender o processo técnico e administrativo do condomínio. Veja o guia sobre [como aprovar um carregador no condomínio](/guias/como-aprovar-carregador-carro-eletrico-no-condominio).'] },
    ],
    faqs: [
      ['Dá para saber o preço só pela potência do Wallbox?', 'Não. A potência é apenas um dos fatores; o percurso, a instalação existente e o escopo do serviço também influenciam.'],
      ['Um orçamento muito baixo pode não incluir o quê?', 'Pode excluir equipamento, proteções, materiais, adequações, testes ou documentação. Compare o escopo escrito de cada proposta.'],
      ['Condomínio custa sempre mais que casa?', 'Não há uma regra universal. A infraestrutura, o percurso, a medição e o processo do edifício determinam o escopo.'],
    ],
    related: [
      { label: 'Instalação de Wallbox residencial', href: '/solucoes/residencial' },
      { label: 'Estudo de viabilidade elétrica', href: '/guias/estudo-de-viabilidade-para-carregador-eletrico' },
      { label: 'Recarga para condomínios', href: '/solucoes/condominial' },
      { label: 'Como escolher a potência do Wallbox', href: '/guias/wallbox-7-4-11-22-kw' },
      { label: 'Wallbox ou carregador portátil', href: '/guias/wallbox-ou-carregador-portatil' },
    ],
  },
  {
    slug: 'como-aprovar-carregador-carro-eletrico-no-condominio',
    title: 'Como organizar a aprovação de um carregador no condomínio',
    description: 'Veja como morador, síndico e responsável técnico podem organizar a avaliação de recarga de veículo elétrico em condomínio.',
    category: 'Condomínios',
    intro: 'Para instalar um ponto de recarga em condomínio, o morador e a administração precisam entender as condições da garagem, o caminho da alimentação, a medição e os requisitos aplicáveis ao prédio. Uma conversa bem documentada ajuda a transformar dúvidas em uma avaliação técnica objetiva.',
    sections: [
      { heading: 'Por onde o morador deve começar?', paragraphs: ['Comece consultando a administração sobre o procedimento do edifício e reúna as informações da vaga, do veículo e do carregador pretendido. Evite iniciar uma intervenção em áreas comuns antes de entender as regras e o percurso possível.', 'A avaliação deve considerar a instalação elétrica e a configuração do condomínio. O fato de existir uma vaga privativa não elimina a necessidade de observar condições técnicas e regras aplicáveis ao imóvel.'] },
      { heading: 'O que precisa ser avaliado tecnicamente?', paragraphs: ['O responsável técnico pode precisar verificar a capacidade da instalação, o quadro, o caminho dos cabos até a vaga, as proteções e a forma como o consumo será medido. Em projetos com vários pontos, a demanda simultânea e a expansão futura também podem ser relevantes.', 'O escopo e os documentos dependem do caso. Solicite que a proposta explique as etapas, os responsáveis e os documentos que serão entregues. Para uma primeira avaliação, a Volt City oferece [soluções para condomínios](/solucoes/condominial).'] },
      { heading: 'Como preparar a conversa com síndico e conselho?', paragraphs: ['Leve uma descrição do equipamento e do ponto pretendido, fotos da vaga e do quadro conhecido, uma estimativa do trajeto e a proposta técnica disponível. Separe as perguntas sobre segurança, medição, custos, manutenção e futuras instalações.', 'Se o prédio ainda não tem uma solução geral, a discussão pode incluir alternativas para um ponto individual e para uma infraestrutura que atenda mais moradores ao longo do tempo. A escolha deve partir de avaliação do edifício, não de uma solução padrão aplicada a todos os condomínios.'] },
      { heading: 'O que diz a legislação de São Paulo?', paragraphs: ['A Lei Estadual nº 18.403/2026 assegura ao condômino o direito de instalar, às próprias expensas, estação de recarga individual na vaga privativa em edificações residenciais ou comerciais no Estado de São Paulo, desde que respeitadas as normas técnicas e de segurança vigentes. Consulte o [texto oficial da lei](https://al.sp.gov.br/repositorio/legislacao/lei/2026/compilacao-lei-18403-18.02.2026.html) e valide os requisitos aplicáveis ao edifício com profissional habilitado.', 'A lei não substitui o projeto e a avaliação de cada instalação. O condomínio deve tratar o pedido com base nas condições técnicas e nas regras aplicáveis, evitando tanto uma negativa automática quanto a execução sem análise.'] },
      { heading: 'Checklist inicial para solicitar avaliação', paragraphs: ['Separe: identificação da unidade e vaga; fotos do quadro ou medidor acessível; distância aproximada até o ponto; modelo do veículo e do carregador, se já escolhido; procedimento informado pela administração; e dúvidas sobre medição e expansão.', 'Com esses dados, a conversa técnica pode avançar com mais clareza. O checklist é inicial e não substitui os documentos e aprovações eventualmente necessários.'] },
    ],
    faqs: [
      ['O condomínio pode simplesmente proibir qualquer instalação?', 'A Lei 18.403/2026 assegura o direito à estação individual na vaga privativa em São Paulo, observadas as normas técnicas e de segurança. A aplicação ao caso concreto deve ser avaliada com o condomínio e responsável técnico.'],
      ['Quem paga pela instalação individual?', 'A lei estadual prevê que a instalação individual seja às expensas do condômino. O escopo de cada projeto e eventuais decisões sobre infraestrutura coletiva são questões distintas.'],
      ['Preciso de avaliação técnica mesmo com a lei?', 'Sim. A própria lei condiciona o direito ao cumprimento das normas técnicas e de segurança vigentes.'],
    ],
    related: [
      { label: 'Recarga para condomínios', href: '/solucoes/condominial' },
      { label: 'Estudo de viabilidade para carregador', href: '/guias/estudo-de-viabilidade-para-carregador-eletrico' },
      { label: 'Consultoria e diagnóstico elétrico', href: '/solucoes/consultoria' },
    ],
  },
  {
    slug: 'wallbox-7-4-11-22-kw',
    title: 'Wallbox 7,4 kW, 11 kW ou 22 kW: como escolher a potência',
    description: 'Entenda como escolher a potência do Wallbox de acordo com o veículo, a rotina de recarga e a infraestrutura do imóvel.',
    category: 'Escolha do equipamento',
    intro: 'A potência do Wallbox não deve ser escolhida apenas pelo número mais alto. O veículo, a rotina de uso e a infraestrutura do imóvel precisam conversar para que a recarga seja segura e faça sentido no dia a dia.',
    sections: [
      { heading: 'A potência mais alta é sempre a melhor escolha?', paragraphs: ['Não. Um carregador só entrega a potência que o veículo aceita em corrente alternada e que a instalação suporta com segurança. Escolher uma opção maior sem avaliar esses dois pontos pode elevar o escopo da obra sem gerar ganho real na rotina.', 'O primeiro passo é entender quantos quilômetros você costuma rodar, quanto tempo o carro fica parado e se a recarga será feita principalmente à noite. A resposta ajuda a definir uma potência adequada antes de comprar o equipamento.'] },
      { heading: 'O que muda entre 7,4 kW, 11 kW e 22 kW?', paragraphs: ['Essas potências representam capacidades diferentes de recarga. Em muitos cenários residenciais, uma solução em torno de 7,4 kW atende bem a rotina noturna. Opções de 11 kW e 22 kW podem fazer sentido quando o veículo, a alimentação elétrica e a operação pedem uma recarga mais rápida.', 'A comparação não termina no carregador. O tipo de alimentação do imóvel, a capacidade do quadro, o percurso até a vaga e o carregador embarcado do veículo influenciam a escolha. A avaliação deve considerar o conjunto, não apenas a ficha do Wallbox.'] },
      { heading: 'A regra prática: veículo, imóvel e Wallbox precisam concordar', paragraphs: ['A velocidade final da recarga é limitada pelo menor entre três pontos: o que o veículo aceita em corrente alternada, o que a instalação do imóvel consegue fornecer e o que o Wallbox foi configurado para entregar. Um equipamento de potência maior não faz o carro carregar acima do limite dele.', 'Por isso, vale conferir a ficha do veículo — especialmente a capacidade do carregador embarcado, que é o componente interno responsável pela recarga em corrente alternada. Depois, a avaliação do imóvel confirma se a alimentação e o circuito acompanham essa escolha.'] },
      { heading: 'Como a rotina do motorista muda a decisão?', paragraphs: ['Quem roda pouco e deixa o veículo parado por várias horas pode priorizar uma recarga tranquila e previsível. Já uma casa com mais de um veículo elétrico, uma empresa ou uma frota pode precisar analisar horários, simultaneidade e expansão futura.', 'Em vez de partir de uma potência padrão, vale listar a rotina: distância diária, horários em que o veículo fica na vaga e quantos carros podem carregar ao mesmo tempo. Isso torna o orçamento mais coerente e evita adequações desnecessárias.'] },
      { heading: 'Vale escolher uma potência maior pensando no próximo carro?', paragraphs: ['Pode fazer sentido, mas só quando a infraestrutura atual comporta esse caminho e o investimento adicional tem utilidade para a sua rotina. Não existe uma resposta única: em alguns imóveis, preparar a infraestrutura para expansão é mais racional do que instalar hoje um equipamento acima da necessidade.', 'Se a decisão envolve troca de veículo, mais de uma vaga ou uso corporativo, a conversa deve considerar o plano de uso e não apenas o modelo atual. Para esse cenário, a Volt City pode organizar um [estudo de viabilidade](/guias/estudo-de-viabilidade-para-carregador-eletrico) antes da compra.'] },
      { heading: 'O que a Volt City avalia antes de indicar um Wallbox?', paragraphs: ['A leitura começa pelo modelo do veículo, pelo imóvel, pelo quadro e pelo caminho até a vaga. Também consideramos se o carregador já foi comprado e como a recarga será usada no dia a dia.', 'Se você ainda não escolheu o equipamento, a [consultoria e diagnóstico elétrico](/solucoes/consultoria) pode organizar essa decisão. Para instalações em casa, veja também a página de [soluções residenciais](/solucoes/residencial).'] },
    ],
    faqs: [
      ['Meu veículo aceita qualquer potência de Wallbox?', 'Não necessariamente. A capacidade de recarga em corrente alternada do veículo é um dos pontos que precisam ser verificados antes da escolha.'],
      ['Posso comprar o Wallbox antes de avaliar a instalação?', 'Pode, mas avaliar antes reduz o risco de escolher um equipamento incompatível com a infraestrutura ou com a sua rotina.'],
      ['Uma potência menor significa uma instalação inferior?', 'Não. A melhor solução é a que atende a rotina com segurança e compatibilidade com o imóvel e o veículo.'],
      ['Um Wallbox de 22 kW sempre recarrega mais rápido?', 'Não. Ele só entrega mais potência quando o veículo e a instalação também aceitam essa capacidade.'],
    ],
    related: [
      { label: 'Quanto custa instalar um Wallbox?', href: '/guias/quanto-custa-instalar-wallbox' },
      { label: 'Estudo de viabilidade para carregador', href: '/guias/estudo-de-viabilidade-para-carregador-eletrico' },
      { label: 'Instalação de Wallbox residencial', href: '/solucoes/residencial' },
      { label: 'Consultoria e diagnóstico elétrico', href: '/solucoes/consultoria' },
    ],
  },
  {
    slug: 'wallbox-ou-carregador-portatil',
    title: 'Wallbox ou carregador portátil: qual solução faz sentido?',
    description: 'Compare Wallbox e carregador portátil considerando segurança, rotina de recarga e avaliação da instalação elétrica.',
    category: 'Escolha do equipamento',
    intro: 'Wallbox e carregador portátil podem atender a cenários diferentes. A escolha responsável depende da rotina de uso, do ponto de energia disponível e da avaliação da instalação elétrica.',
    sections: [
      { heading: 'Qual é a diferença entre Wallbox e carregador portátil?', paragraphs: ['O Wallbox é um equipamento fixo, instalado em um ponto dedicado para a recarga. Já o carregador portátil costuma acompanhar o veículo e pode ser útil em situações específicas, desde que conectado a uma infraestrutura compatível.', 'Não é seguro tratar o carregador portátil como uma extensão comum. Recarga é uma carga contínua e precisa de circuito, tomada, cabeamento e proteções adequados ao uso previsto.'] },
      { heading: 'Quando um Wallbox costuma ser a melhor escolha?', paragraphs: ['Para quem recarrega em casa com frequência, o Wallbox oferece uma solução permanente, organizada e pensada para a rotina da vaga. Ele também pode facilitar a definição de um ponto dedicado em condomínios e a padronização de instalações em empresas.', 'O ganho não é apenas velocidade. A instalação pode ser planejada para o percurso correto, para os dispositivos de proteção e para a experiência de uso no dia a dia.'] },
      { heading: 'A velocidade depende do ponto preparado, não apenas do formato', paragraphs: ['Wallbox e carregador portátil não têm uma velocidade fixa só por serem equipamentos diferentes. A potência efetiva depende do limite do veículo, da instalação e da configuração do equipamento. Um portátil compatível em um ponto corretamente preparado pode atender uma rotina específica; um Wallbox de potência maior também será limitado se o carro ou a infraestrutura não acompanharem.', 'A pergunta mais útil não é apenas “qual carrega mais rápido?”. É: quanto eu preciso recuperar durante o tempo em que o veículo fica parado? Esse raciocínio ajuda a escolher uma solução adequada sem pagar por capacidade que não será usada.'] },
      { heading: 'O carregador portátil pode ser usado todos os dias?', paragraphs: ['A resposta depende da instalação que receberá o equipamento. O carregador portátil pode ser parte da rotina quando existe um ponto corretamente preparado para ele, mas não deve ser conectado de forma improvisada em tomadas, extensões ou adaptadores inadequados.', 'Antes de definir a solução, vale enviar fotos do quadro e da vaga para uma triagem inicial. A avaliação técnica confirma o que o imóvel comporta e qual caminho é mais adequado.'] },
      { heading: 'Em quais cenários cada solução costuma ajudar?', paragraphs: ['Um Wallbox tende a ser indicado para quem tem uma vaga fixa e pretende carregar com frequência no mesmo local. Ele cria um ponto permanente e mais organizado para a rotina. O portátil pode ser útil para quem alterna endereços, está em uma situação temporária ou precisa de mobilidade — desde que exista um ponto preparado onde será utilizado.', 'Em condomínio, a decisão também passa pelo percurso até a vaga, pelas regras do edifício e pela forma de medição. Antes de comprar qualquer equipamento, veja o guia sobre [aprovação de carregador em condomínio](/guias/como-aprovar-carregador-carro-eletrico-no-condominio).'] },
      { heading: 'Como decidir sem comprar duas vezes?', paragraphs: ['Comece pelo uso real: quanto você roda, por quanto tempo o carro fica parado e se há outros veículos na mesma instalação. Depois, confirme o modelo do veículo e as condições elétricas do local.', 'A Volt City pode ajudar a organizar essa decisão antes da compra. Veja como funciona a [instalação residencial](/solucoes/residencial) ou solicite uma [avaliação de viabilidade](/solucoes/consultoria).'] },
    ],
    faqs: [
      ['Wallbox é obrigatório para carregar em casa?', 'A solução adequada depende do veículo e da infraestrutura. A prioridade é ter um ponto avaliado e preparado para a recarga contínua.'],
      ['Posso usar extensão para o carregador portátil?', 'Não é recomendado. O ponto de recarga precisa ser definido e avaliado para o uso contínuo do equipamento.'],
      ['O Wallbox já vem com a instalação incluída?', 'Nem sempre. Equipamento e infraestrutura podem fazer parte de escopos diferentes; confirme o que a proposta contempla.'],
      ['Morar de aluguel impede instalar um Wallbox?', 'Não necessariamente. Vale avaliar a possibilidade de instalação, as regras do imóvel e se a solução poderá ser aproveitada em uma mudança futura.'],
    ],
    related: [
      { label: 'Quanto custa instalar um Wallbox?', href: '/guias/quanto-custa-instalar-wallbox' },
      { label: 'Como escolher a potência do Wallbox', href: '/guias/wallbox-7-4-11-22-kw' },
      { label: 'Instalação de Wallbox residencial', href: '/solucoes/residencial' },
    ],
  },
];

export type Guide = (typeof guides)[number];
