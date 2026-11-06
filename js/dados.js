// arquivo com os dados das cientistas que aparecem no site
// cada cientista é um objeto com as informações dela

var cientistas = [
  {
    nome: "Marie Curie",
    foto: "https://upload.wikimedia.org/wikipedia/commons/9/97/Marie_Curie_c._1920s_-_original.jpg",
    fonte: "https://commons.wikimedia.org/wiki/File:Marie_Curie_c._1920s_-_original.jpg",
    categoria: "Internacional",
    area: "Física e Química · 1867–1934",
    quem: "Polonesa naturalizada francesa, criou o termo “radioatividade” e liderou pesquisas que renderam dois Nobels em áreas diferentes.",
    tese: "A radiação não vem de uma reação química, e sim de dentro do átomo. Ela mostrou isso medindo a emissão do urânio e descobriu dois novos elementos, o polônio e o rádio.",
    importancia: "Abriu caminho para a física nuclear e para a radioterapia contra o câncer."
  },
  {
    nome: "Rosalind Franklin",
    foto: "https://cdn.prod.website-files.com/6435d6dda1e1468a3ed846b7/64c0f3d3d04805c75a0caa85_Rosalind%20Protrait%20ex%20NPG.jpg",
    fonte: "https://www.cinz.nz/posts/rosalind-elsie-franklin-1920-1958",
    categoria: "Internacional",
    area: "Biofísica · 1920–1958",
    quem: "Britânica especialista em cristalografia de raios X, trabalhou com carvão, vírus e DNA.",
    tese: "Suas imagens de difração, em especial a Fotografia 51, mostraram que o DNA tem formato de hélice e deram as medidas para montar o modelo.",
    importancia: "Seu trabalho foi decisivo para entendermos como a informação genética é guardada."
  },
  {
    nome: "Katherine Johnson",
    foto: "https://media.notablepeopleproject.org/bios/katherine-johnson_primary.png",
    fonte: "https://www.notablepeopleproject.org/Katherine_Johnson",
    categoria: "Internacional",
    area: "Matemática · 1918–2020",
    quem: "Matemática norte-americana da NASA, enfrentou segregação racial e de gênero para ocupar a sala dos cálculos.",
    tese: "Calculou trajetórias orbitais e conferiu os números dos computadores antes do voo de John Glenn, em 1962.",
    importancia: "Mostrou que precisão e coragem andam juntas quando vidas dependem de um resultado."
  },
  {
    nome: "Jennifer Doudna",
    foto: "https://www.ewmagazine.nl/uploads/2023/01/IMG_KENNISDOUDNAJennifer-Doudna-2021-4200x2800-1.jpg",
    fonte: "https://www.ewmagazine.nl/kennis/achtergrond/2023/01/doudna-we-wisten-dat-we-iets-groots-op-het-spoor-waren-38029w/",
    categoria: "Internacional",
    area: "Bioquímica · nasceu em 1964",
    quem: "Bioquímica norte-americana, professora em Berkeley e pioneira do CRISPR.",
    tese: "A proteína Cas9 funciona como uma tesoura que um RNA guia até um trecho exato do DNA, permitindo cortar e editar genes.",
    importancia: "Impulsiona terapias genéticas e debates éticos sobre editar genomas."
  },
  {
    nome: "Jaqueline Goes de Jesus",
    foto: "https://p2.trrsf.com/image/fget/cf/1200/628/images.terra.com/2023/03/07/jaqueline-goes-de-jesus-2-t4a11df4a3w1.jpeg",
    fonte: "https://www.terra.com.br/story/byte/5-mulheres-cientistas-que-orgulham-o-brasil%2C360806e55f844364e7b2053fccf4a54bk42686zj.html",
    categoria: "Nacional",
    area: "Biomédica · Bahia",
    quem: "Baiana, pesquisadora em virologia e genética, integrou a equipe que sequenciou o genoma do SARS-CoV-2 no Brasil.",
    tese: "Em cerca de 48 horas, o grupo leu o código genético do vírus em amostras de pacientes brasileiros, o que permite acompanhar mutações e a circulação.",
    importancia: "Mostra como ciência rápida e pública ajuda a orientar decisões de saúde."
  },
  {
    nome: "Mayana Zatz",
    foto: "https://static.tvgazeta.com.br/uploads/2025/04/Mayana-Zatz.webp",
    fonte: "https://www.tvgazeta.com.br/videos/mayana-zatz-biologa-molecular-e-geneticista-da-usp-sobre-uso-do-virus-da-zika-em-tumores/",
    categoria: "Nacional",
    area: "Geneticista · USP",
    quem: "Referência em genética humana no Brasil, dirige o Centro de Estudos do Genoma Humano e Células-Tronco.",
    tese: "Estuda como mutações causam doenças neuromusculares e como células-tronco podem ajudar a entender e tratar essas condições.",
    importancia: "Aproxima o laboratório das famílias e defende a ciência como direito de todos."
  },
  {
    nome: "Sonia Guimarães",
    foto: "https://midias.correiobraziliense.com.br/_midias/jpg/2026/03/06/1200x801/1_70-65010392.jpeg",
    fonte: "https://www.correiobraziliense.com.br/euestudante/trabalho-e-formacao/2026/03/7370259-sonia-guimaraes-a-primeira-negra-doutora-em-fisica.html",
    categoria: "Nacional",
    area: "Física · ITA",
    quem: "Primeira mulher negra doutora em Física no Brasil, professora do Instituto Tecnológico de Aeronáutica.",
    tese: "Pesquisa sensores de radiação infravermelha, que detectam calor invisível e têm uso em tecnologia e defesa.",
    importancia: "Além da pesquisa, incentiva meninas negras a entrar na ciência."
  },
  {
    nome: "Nise da Silveira",
    foto: "https://cdn.gazetadealagoas.com.br/img/inline/800000/120-anos-de-Nise-da-Silveira-alagoana-sera-homenag-00803765-70e46cd230b43d0899b452b42efbd383.jpg?xid=1701082",
    fonte: "https://www.gazetadealagoas.com.br/caderno-b/803765/120-anos-de-nise-da-silveira-alagoana-sera-homenageada-no-itau-cultural-play",
    categoria: "Nacional",
    area: "Psiquiatra · 1905–1999",
    quem: "Alagoana, recusou tratamentos violentos em hospitais psiquiátricos e criou ateliês de pintura e modelagem.",
    tese: "Pessoas em sofrimento mental se expressam melhor por imagens e afeto do que por choques e isolamento.",
    importancia: "Foi pioneira da psiquiatria humanizada no Brasil."
  }
];

// frases que aparecem quando clica no botao da parte "E voce?"
var frases = [
  "“Na vida, nada deve ser temido, apenas compreendido.” - Marie Curie",
  "Toda descoberta começa com uma pergunta.",
  "O futuro da ciência também é seu.",
  "Curiosidade é o primeiro experimento.",
  "Pergunte, estude e procure quem te apoie."
];
