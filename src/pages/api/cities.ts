import { CityProps } from '../../types/types'

export function verifyDate(daysLeft: number) {
  const newData = new Date()
  const data = new Date(newData.valueOf() - newData.getTimezoneOffset() * 60000)
  const now = Math.trunc(data.getTime() / 1000)
  const dateInMilliseconds = Math.trunc(Date.parse('2021-11-02T11:59:05.000Z') / 1000)
  const days = Math.trunc((now - dateInMilliseconds) / 60 / 60 / 24)
  if (days > daysLeft) return true
  return false
}

export const cities: CityProps[] = [
  {
    title: 'Barão de Cocais',
    content:
      'Modalidades: Caminhada (app), Ciclismo MTB (app), Corrida (app), Dama, Desafio NBA, E-Sports (FIFA), Futebol Freestyle (embaixadinhas), Tênis de Mesa, Peteca e Xadrez.',
    categories: 'Período de Inscrição: Até dia 08/10/2021',
    rulesUrl: 'https://drive.google.com/file/d/1z6njlpnuqfXZVN4eEreUpMgBlzBjdZQi/view?usp=sharing',
    place: 'Secretaria Municipal de Esporte e Lazer',
    location: 'Rua Padre Mauro Faria, nº 299-301 – Centro',
    contact: '(31) 3837-7601 | (31) 97106-7569',
    levels: [
      {
        id: '',
        title: '1ª Fase',
        modalities:
          'Caminhada (App), Corrida (App), Ciclismo (App), Futebol Freestyle (Embaixadinhas), E-Sports (FIFA) e Tênis de Mesa.',
        finished: true,
        reportUrl:
          'https://drive.google.com/file/d/1QzlsXPCazLyJjmCzU3LHmtwqOj38RoOk/view?usp=sharing'
      },
      {
        id: '',
        title: '2ª Fase',
        date: '30 e 31 de outubro',
        modalities: 'Desafio NBA e Peteca.',
        dueDate: '28 de outubro',
        reportUrl:
          'https://drive.google.com/file/d/12qst5PQgd-gNuVvpZup-Fxz5OJ78jxQt/view?usp=sharing'
      },
      {
        id: '',
        title: '3ª Fase',
        date: '14 de novembro',
        modalities: 'Damas e Xadrez.',
        dueDate: '12 de novembro',
        reportUrl:
          'https://drive.google.com/file/d/1mijzCX9vhWwqgGcl__qIUwr09383EdAz/view?usp=sharing'
      }
    ],
    registrations: [
      {
        label: '1ª DATA:',
        finished: true
      },
      {
        label: '2ª DATA:',
        finished: true,
        url: 'https://docs.google.com/forms/d/e/1FAIpQLSf-cHkz3dYpCtiTKJ9lLBboC4TkhPonZHbQ6jXgg0U3U2aylA/viewform'
      },
      {
        label: '3ª DATA (14 de novembro):',
        finished: verifyDate(12),
        url: 'https://forms.gle/S2xKxtGYTwXYsrnG7'
      }
    ]
  },
  {
    title: 'João Monlevade',
    content:
      'Modalidades: Caminhada (app), Ciclismo MTB (app), Corrida (app), Dama, Desafio NBA, E-Sports (FIFA), Sinuca, Tênis de Mesa, Peteca, Vôlei Dupla e Xadrez.',
    categories: 'Período de Inscrição: Até 22/10/2021',
    rulesUrl: 'https://drive.google.com/file/d/1I2Nz_c2d4SOflqEnf6rXr06YfHxRDWIf/view?usp=sharing',
    place: 'Secretaria Municipal de Esporte e Lazer',
    location: 'Av. Getúlio Vargas, nº 4798 – Carneirinhos',
    contact: '(31) 3851-4510',
    gallery: 'https://www.flickr.com/photos/194203616@N05/albums/72157720072360821',
    levels: [
      {
        title: '1ª Fase',
        modalities: 'Futebol Freestyle (Embaixadinhas)',
        finished: true,
        reportUrl:
          'https://drive.google.com/file/d/18_kO4qwK2Hk9UZLLmj_Pwq1eqSYty1RK/view?usp=sharing'
      },
      {
        title: '2ª Fase',
        date: '23 e 24 de outubro',
        modalities: `Peteca, Sinuca e Vôlei Dupla;
        Abertura Oficial da Caminhada (App), Corrida (App) e Ciclismo (App).`,
        finished: true,
        dueDate: '21 de outubro',
        reportUrl:
          'https://drive.google.com/file/d/1ALXE2NHfZzOPddk8p1Eem7GCIl5P-KAw/view?usp=sharing'
      },
      {
        title: '3ª Fase',
        date: '20 e 21 de novembro',
        modalities: `Damas, Desafio NBA, E-Sports (FIFA), Tênis de Mesa e Xadrez;
        Premiação da Caminhada (App), Corrida (App) e Ciclismo (App).`,
        dueDate: '18 de novembro',
        reportUrl:
          'https://drive.google.com/file/d/1m1maY93oWHvpnhHQ_Wx3TnoaLnNoU8GA/view?usp=sharing'
      }
    ],
    registrations: [
      {
        label: '1ª DATA:',
        finished: true
      },
      {
        label: '2ª DATA:',
        finished: true
      },
      {
        label: '3ª DATA (20 e 21 de novembro):',
        finished: verifyDate(19),
        url: 'https://docs.google.com/forms/d/e/1FAIpQLSfUsnkWNi75DTibNXY0Z41bQiefea1fSMq35JzErQ5U-gejpQ/viewform'
      }
    ]
  },
  {
    title: 'Mariana',
    content:
      'Modalidades: Caminhada (app), Ciclismo MTB (app), Corrida (app), Dama, Desafio NBA, E-Sports (FIFA), Futebol Freestyle (embaixadinhas), Tênis de Mesa, Peteca e Xadrez.',
    categories: 'Período de Inscrição: Até dia 03/12/2021',
    rulesUrl: 'https://drive.google.com/file/d/1vGisXfXaYLwynCz8Cwc9M2iV-0D4_4jB/view?usp=sharing',
    place: 'Secretaria Municipal de Esportes e Eventos',
    location: 'Rua São Vicente de Paulo, nº 130 (Arena Mariana)',
    contact: '(31) 3557-2128',
    levels: [
      {
        title: '1ª Fase',
        finished: true,
        modalities: 'Caminhada, Corrida e Ciclismo.',
        reportUrl:
          'https://drive.google.com/file/d/1u2tZqFPSESJxzH5L8f1cbNzoWawOs9zf/view?usp=sharing'
      },
      {
        title: '2ª Fase',
        date: '27 e 28 de novembro',
        modalities:
          'Damas, E-Sports (FIFA), Futebol Freestyle (Embaixadinhas), Peteca, Tênis de Mesa, Vôlei Dupla e Xadrez.',
        dueDate: '25 de novembro',
        reportUrl:
          'https://drive.google.com/file/d/1QmMGV-RVYdtsHErhYImGxUuV3KV68wc4/view?usp=sharing'
      }
    ],
    registrations: [
      {
        label: '1ª DATA:',
        finished: true
      },
      {
        label: '2ª DATA (27 e 28 de novembro):',
        finished: verifyDate(26),
        url: 'https://forms.gle/UE2Cx27Dx5u4Be9p6'
      }
    ]
  },
  {
    title: 'Nova Era',
    content:
      'Modalidades: Caminhada (app), Ciclismo MTB (app), Corrida (app), Dama, E-Sports (FIFA), Natação, Pesca Esportiva, Sinuca, Peteca e Xadrez.',
    categories: 'Período de Inscrição: Até dia 26/11/2021',
    rulesUrl: 'https://drive.google.com/file/d/1VoWdFPsKvu5VYGtJPV1Z9acr2x87zaYW/view?usp=sharing',
    place: 'Departamento Municipal de Esportes e Lazer',
    location: 'Rua João Pinheiro, nº 91- 3º Andar – Centro',
    contact: '(31) 3861-4228',
    levels: [
      {
        title: '1ª Fase',
        date: '10 a 31 de outubro',
        modalities: 'Pesca Esportiva.',
        dueDate: '29 de outubro',
        reportUrl:
          'https://drive.google.com/file/d/10IMzWymd3FrntrN6LPrr0pt58AYfYLva/view?usp=sharing'
      },
      {
        title: '2ª Fase',
        date: '06 e 07 de novembro',
        modalities: `Damas, E-Sports (FIFA) e Xadrez;
        Abertura Oficial da Caminhada (App), Corrida (App) e Ciclismo (App).`,
        dueDate: '04 de novembro',
        reportUrl:
          'https://drive.google.com/file/d/1T3W8Dph-NjSVtK6LQezHUqvgCwGN6NBX/view?usp=sharing'
      },
      {
        title: '3ª Fase',
        date: '27 e 28 de novembro',
        modalities: `Natação, Peteca, Sinuca, Tênis de Campo e Vôlei Dupla.
        Premiação da Caminhada (App), Corrida (App) e Ciclismo (App).`,
        dueDate: '25 de novembro',
        reportUrl:
          'https://drive.google.com/file/d/13n9HOoSsT1B6N0min4ECuiNQIfsaeeSn/view?usp=sharing'
      }
    ],
    registrations: [
      {
        label: '1ª DATA:',
        finished: true
      },
      {
        label: '2ª DATA (06 e 07 de novembro):',
        finished: verifyDate(5),
        url: 'https://forms.gle/KWSMafP8wR5LwwCC7'
      },
      {
        label: '3ª DATA (27 e 28 de novembro):',
        finished: verifyDate(26),
        url: 'https://forms.gle/8LJAu7MBt9ZJDj6BA'
      }
    ]
  },
  {
    title: 'Nova União',
    content:
      'Modalidades: Caminhada (app), Ciclismo MTB (app), Corrida (app), Dama, E-Sports (FIFA), Futebol Freestyle (embaixadinhas), Peteca, Vôlei Dupla e Xadrez.',
    categories: 'Período de Inscrição: Até dia 12/11/2021',
    rulesUrl: 'https://drive.google.com/file/d/1SZD9X_GYIK-L6ona_m3F1kc-lOvFTJXX/view?usp=sharing',
    place: 'Secretaria Municipal de Cultura, Turismo, Esporte e Lazer',
    location: 'Praça Padre João Habian – nº 06 – Centro',
    contact: '(31) 3685-1221',
    levels: [
      {
        title: '1ª Fase',
        date: '13 a 15 de novembro',
        modalities: `E-Sports (FIFA), Tênis de Mesa e Xadrez;
        Caminhada, Corrida Rústica, Futebol Freestyle (Embaixadinhas) e Vôlei Dupla;
        Passeio Ciclístico e Peteca.`,
        dueDate: '28 de outubro',
        reportUrl:
          'https://drive.google.com/file/d/1dnXuWNuvySjvYbU482u0ZWI2_WF6gE00/view?usp=sharing'
      }
    ],
    registrations: [
      {
        label: '1ª DATA (13 a 15 de novembro):',
        finished: verifyDate(13),
        url: 'https://forms.gle/Gpwi5qTQUa53Ygre9'
      }
    ]
  },
  {
    title: 'Ouro Preto',
    content:
      'Modalidades: Caminhada (app), Ciclismo MTB (app), Corrida (app), Dama, Desafio NBA, E-Sports (FIFA), Futebol Freestyle (embaixadinhas), Tênis de Mesa, Peteca e Xadrez.',
    categories: 'Período de Inscrição: Até 29/10/2021',
    rulesUrl: 'https://drive.google.com/file/d/1cAiaKsrJjnuIORZYKQdtOMPxw2u4-z3l/view?usp=sharing',
    place: 'Secretaria Municipal de Esportes e Lazer',
    location: 'Rua Hugo Soderi, nº 21 – Bloco B – Saramenha',
    contact: '(31) 3559-3216',
    gallery: 'https://www.flickr.com/photos/194203616@N05/albums/72157720049286928',
    levels: [
      {
        title: '1ª Fase',
        date: '16 e 17 de outubro',
        modalities: `Desafio NBA, Futebol Freestyle (Embaixadinhas), Tênis de Mesa e Peteca;
        Abertura Oficial da Caminhada (App), Corrida (App) e Ciclismo (App).`,
        reportUrl:
          'https://drive.google.com/file/d/1IPP6WQ8O5oiOT7cfGaqHtiqLPN9krRdy/view?usp=sharing'
      },
      {
        title: '2ª Fase',
        date: '30 e 31 de outubro',
        modalities: `Damas, E-Sports (FIFA) e Xadrez;
        Premiação da Caminhada (App), Corrida (App) e Ciclismo (App).`,
        dueDate: '29 de outubro',
        reportUrl:
          'https://drive.google.com/file/d/1QIplcv3-pubJYMobYuD3Au71JJ2GwOtU/view?usp=sharing'
      }
    ],
    registrations: [
      {
        label: '1ª DATA:',
        finished: true
      },
      {
        label: '2ª DATA:',
        finished: true,
        url: 'https://docs.google.com/forms/d/e/1FAIpQLSd_x3IWvUpn0j9zLGiHAD1yp-UMNHTrljsnJQvUBayZyRKqkA/viewform'
      }
    ]
  },
  {
    title: 'São Domingos do Prata',
    content:
      'Modalidades: Caminhada (app), Ciclismo MTB (app), Corrida (app), Dama, E-Sports (FIFA), Futebol Freestyle (embaixadinhas), Futevôlei, Peteca e Xadrez.',
    categories: 'Período de Inscrição: Até 05/12/2021',
    rulesUrl: 'https://drive.google.com/file/d/1mkjR-KJTICMzxbYktSBQMSkkbS5LG1ZU/view?usp=sharing',
    place: 'CENESP – Centro Esportivo Pratiano',
    location: 'Rua Joaquim Gomes Lima, nº 700 – Cutucum',
    contact: '(31) 99797-1369 ou (31) 99827-9439',
    gallery: 'https://www.flickr.com/photos/194203616@N05/albums/72157720054847406',
    levels: [
      {
        title: '1ª Fase',
        date: '16 e 17 de outubro',
        modalities: `Damas, E-Sports (FIFA) e Xadrez;
        Abertura Oficial da Caminhada (App), Corrida (App) e Ciclismo (App).`,
        reportUrl:
          'https://drive.google.com/file/d/1vfWxyvTG-u-C_CWHbQTJUVzJdeoQXb5P/view?usp=sharing'
      },
      {
        title: '2ª Fase',
        date: '06 e 07 de novembro',
        modalities: `Futebol Freestyle (Embaixadinhas), Futevôlei e Peteca;
        Premiação da Caminhada (App), Corrida (App) e Ciclismo (App).`,
        dueDate: '29 de outubro',
        reportUrl:
          'https://drive.google.com/file/d/1lMw8tKZDdxAfH8bVHjR3voBNQ-Lb0Cf7/view?usp=sharing'
      }
    ],
    registrations: [
      {
        label: '1ª DATA:',
        finished: true
      },
      {
        label: '2ª DATA (06 e 07 de novembro):',
        finished: verifyDate(5),
        url: 'https://docs.google.com/forms/d/e/1FAIpQLSe57LwT69fZgAHVtkGZ5T8g4H7F6vO39Vo4FXmqthWFoM408w/viewform'
      }
    ]
  },
  {
    title: 'São Gonçalo do Rio Abaixo',
    content:
      'Modalidades: Caminhada (app), Ciclismo MTB (app), Corrida (app), Dama, E-Sports (FIFA), Futebol Freestyle (embaixadinhas), Peteca, Sinuca, Vôlei Dupla e Xadrez.',
    categories: 'Período de Inscrição: Até 19/11/2021',
    rulesUrl: 'https://drive.google.com/file/d/1_-IdOX5n-inT3pTAHfEdXWpEZy1bfe6X/view?usp=sharing',
    place: 'Secretaria de Esportes',
    location: 'Rua do Rosário, nº 61 – Centro',
    contact: '(31) 3820-1925',
    levels: [
      {
        title: '1ª Fase',
        modalities: 'Caminhada, Corrida e Ciclismo.',
        finished: true,
        reportUrl:
          'https://drive.google.com/file/d/12pmLGk5WHc0iNC7VIYJFiDp-ltiF8bqa/view?usp=sharing'
      },
      {
        title: '2ª Fase',
        date: '20 e 21 de novembro',
        modalities:
          'Damas, Futebol Freestyle, E-Sports (FIFA), Peteca, Sinuca, Vôlei Dupla e Xadrez.',
        dueDate: '29 de outubro',
        reportUrl:
          'https://drive.google.com/file/d/1XkaOpxF0MqCXGbBgzRYfE9NmzCToOOXd/view?usp=sharing'
      }
    ],
    registrations: [
      {
        label: '1ª DATA:',
        finished: true
      },
      {
        label: '2ª DATA (20 e 21 de novembro):',
        finished: verifyDate(19),
        url: 'https://docs.google.com/forms/d/e/1FAIpQLScO2fHz8WgJhqQVc60-k17zJuQXflzwfHI05m6DBMA59t6O5A/viewform'
      }
    ]
  }
]

export const finalStage: CityProps = {
  title: 'Local A DEFINIR',
  content: 'string',
  categories: 'string',
  rulesUrl: 'https://drive.google.com/file/d/1qUjrJ1PNSlVwFmyHLJoDfblw5Gofbotw/view?usp=sharing',
  levels: [
    {
      title: 'Etapa Final',
      date: '18 e 19 de dezembro',
      modalities:
        'Buraco, Ciclismo, Damas, Desafio NBA, E- Sports (FIFA), Futebol Freestyle (Embaixadinhas), Futevôlei, Peteca, Sinuca, SlackLine, Tenis de Campo, Tênis de Mesa, Truco, Vôlei Dupla e Xadrez.',
      dueDate: '10 de dezembro',
      reportUrl: ''
    }
  ],
  contact: 'circuitocidades@gmail.com'
}
