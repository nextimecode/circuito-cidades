import { MonthForCalendarProps } from '../../types/types'

export const stage = [
  {
    date: '16 e 17 de Outubro',
    city: ['Ouro Preto', 'São Domingos do Prata']
  },
  {
    date: '23 e 24 de Outubro',
    city: ['João Monlevade']
  },
  {
    date: '30 e 31 de Outubro',
    city: ['Barão de Cocais', 'Nova União', 'Ouro Preto']
  },
  {
    date: '06 e 07 de Novembro',
    city: ['Nova Era', 'São Domingos do Prata']
  },
  {
    date: '13 a 15 de Novembro',
    city: ['Nova União', 'Barão de Cocais']
  },
  {
    date: '20 e 21 de Novembro',
    city: ['João Monlevade', 'São Gonçalo do Rio Abaixo']
  },
  {
    date: '27 e 28 de Novembro',
    city: ['Mariana', 'Nova Era']
  },
  {
    date: '12 de Dezembro',
    city: ['FINAL - Sorteio e Tabelamento']
  },
  {
    date: '18 e 19 de Dezembro',
    city: ['FINAL']
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
          peteca: true,
          sinuca: true,
          voleiDupla: true
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
        city: 'Nova União',
        modalityList: {
          damas: true,
          eSports: true,
          xadrez: true
        }
      },
      {
        date: '30 e 31 de Outubro',
        city: 'Ouro Preto',
        modalityList: {
          caminhada: true,
          ciclismoMtb: true,
          corrida: true,
          damas: true,
          eSports: true,
          xadrez: true
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
        city: 'João Monlevade',
        modalityList: {
          caminhada: true,
          ciclismoMtb: true,
          corrida: true,
          damas: true,
          desafioNba: true,
          eSports: true,
          tenisMesa: true,
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
          tenisCampo: true,
          voleiDupla: true
        }
      }

    ]
  }
]
