import { MonthForCalendarProps } from '../../types/types'

export const stage = [
  {
    date: '16 e 17 de Outubro',
    city: 'Etapa Ouro Preto e São Domingos do Prata'
  },
  {
    date: '23 e 24 de Outubro',
    city: 'Etapa João Monlevade e Nova União'
  },
  {
    date: '30 e 31 de Outubro',
    city: 'Etapa Barão de Cocais e Ouro Preto'
  },
  {
    date: '06 e 07 de Novembro',
    city: 'Etapa São Domingos do Prata e Nova Era'
  },
  {
    date: '13 a 15 de Novembro',
    city: 'Etapa Nova União e Barão de Cocais'
  },
  {
    date: '20 e 21 de Novembro',
    city: 'Etapa São Gonçalo do Rio Abaixo'
  },
  {
    date: '27 e 28 de Novembro',
    city: 'Etapa Mariana e Nova Era'
  },
  {
    date: '12 de Dezembro',
    city: 'Sorteio e Tabelamento da Etapa Final'
  },
  {
    date: '18 e 19 de Dezembro',
    city: 'ETAPA FINAL'
  }
]

export const exposedCalendar: MonthForCalendarProps[] = [
  {
    label: 'Outubro',
    stages: [
      {
        date: '16 e 17 de Outubro',
        city: 'Ouro Preto',
        modalityList: {
          desafioNba: true,
          futebolFreestyle: true,
          tenisMesa: true,
          peteca: true
        }
      },
      {
        date: '16 e 17 de Outubro',
        city: 'São Domingos do Prata',
        modalityList: {
          damas: true,
          eSports: true,
          xadrez: true
        }
      },
      {
        date: '23 e 24 de Outubro',
        city: 'João Monlevade',
        modalityList: {
          desafioNba: true,
          peteca: true,
          sinuca: true,
          voleiDupla: true
        }
      },
      {
        date: '23 e 24 de Outubro',
        city: 'Nova União',
        modalityList: {
          damas: true,
          eSports: true,
          xadrez: true
        }
      },
      {
        date: '30 e 31 de Outubro',
        city: 'Barão de Cocais',
        modalityList: {
          desafioNba: true,
          peteca: true
        }
      },
      {
        date: '30 e 31 de Outubro',
        city: 'Ouro Preto',
        modalityList: {
          caminhada: true,
          ciclismoMtb: true,
          corrida: true,
          futebolFreestyle: true,
          futevolei: true,
          peteca: true
        }
      }
    ]
  },
  {
    label: 'Novembro',
    stages: [
      {
        date: '06 e 07 de Novembro',
        city: 'São Domingos do Prata',
        modalityList: {
          caminhada: true,
          ciclismoMtb: true,
          corrida: true,
          futebolFreestyle: true,
          futevolei: true,
          peteca: true
        }
      },
      {
        date: '06 e 07 de Novembro',
        city: 'Nova Era',
        modalityList: {
          damas: true,
          eSports: true,
          xadrez: true
        }
      },
      {
        date: '13 a 15 de Novembro',
        city: 'Nova União',
        modalityList: {
          caminhada: true,
          ciclismoMtb: true,
          corrida: true,
          futebolFreestyle: true,
          peteca: true,
          voleiDupla: true
        }
      },
      {
        date: '13 a 15 de Novembro',
        city: 'Barão de Cocais',
        modalityList: {
          damas: true,
          xadrez: true
        }
      },
      {
        date: '20 e 21 de Novembro',
        city: 'São Gonçalo do Rio Abaixo',
        modalityList: {
          damas: true,
          eSports: true,
          futebolFreestyle: true,
          peteca: true,
          sinuca: true,
          voleiDupla: true,
          xadrez: true
        }
      },
      {
        date: '27 e 28 de Novembro',
        city: 'Mariana',
        modalityList: {
          damas: true,
          eSports: true,
          futebolFreestyle: true,
          peteca: true,
          tenisMesa: true,
          voleiDupla: true,
          xadrez: true
        }
      },
      {
        date: '27 e 28 de Novembro',
        city: 'Nova Era',
        modalityList: {
          caminhada: true,
          ciclismoMtb: true,
          corrida: true,
          peteca: true,
          sinuca: true,
          voleiDupla: true
        }
      }

    ]
  }
]
