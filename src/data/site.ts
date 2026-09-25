export const contact = { phone: '5511932453688', displayPhone: '(11) 93245-3688', instagram: '@voltcityoficial' };
export const whatsapp = (message: string) => `https://wa.me/${contact.phone}?text=${encodeURIComponent(message)}`;
export const asset = (path: string) => `${import.meta.env.BASE_URL.replace(/\/?$/, '/')}${path.replace(/^\//, '')}`;
export const route = (path: string) => `${import.meta.env.BASE_URL.replace(/\/?$/, '/')}${path.replace(/^\//, '')}`;
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
];
