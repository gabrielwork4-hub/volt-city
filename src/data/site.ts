export const contact = { phone: '5511932453688', displayPhone: '(11) 93245-3688', instagram: '@voltcityoficial' };
export const whatsapp = (message: string) => `https://wa.me/${contact.phone}?text=${encodeURIComponent(message)}`;
export const asset = (path: string) => `${import.meta.env.BASE_URL.replace(/\/?$/, '/')}${path.replace(/^\//, '')}`;
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
