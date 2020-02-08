var config = {
    style: 'mapbox://styles/baligaa/ck6brf9co0d4z1ioeusqxdh23',
    accessToken: 'pk.eyJ1IjoiYmFsaWdhYSIsImEiOiJjanQ1ZXpiOGIwM3BoM3ludmowbzdqN2Q0In0.hHPpqrclCIdqobui4RYT_w',
    showMarkers: false,
    alignment: 'left',
    theme: 'dark',
    title: 'МОНГОЛ ОРНЫ ХАМГИЙН ТОМ ТАЛБАЙТАЙ 5 НУУР',
    subtitle: '',
    //byline: 'УВС НУУР  I 	ХӨВСГӨЛ НУУР	 I  ХАР-УС НУУР	 I  ХЯРГАС НУУР 	I  БУЙР НУУР 	I  ХАР НУУР	 I  ДӨРГӨН НУУР	I АЧИТ НУУР	I БӨӨН ЦАГААН НУУР	I ҮҮРЭГ НУУР',
    footer: '©Baljinnyam Enkhtur @BG_HYPERX',
    chapters: [
        {
            id: 'D1',
            title: '1. УВС НУУР',
            image: '',
            description: 'Төрөл: Эрдэст <br> Нуурт цутгах гол:	Тэсийн гол (нийт 39 орчим гол) <br> Нуураас гарах гол: 	Байхгүй <br> Ай савд багтдаг орон:	Монгол, ОХУ <br> Урт:	84 км <br> Өргөн:	79 км <br> Талбай:	3,350 км² <br> Дундаж гүн:	6 м <br> Хөвөөний түвшин:	759 м <br> Хөлдөх хугацаа:	10 сар - 5 сар',
            location: {
                center: [92.31494, 50.23229],
                zoom: 9.05,
                pitch: 60.00,
                bearing: 0
              },
              onChapterEnter: [
                  {
                      layer: 'D1',
                      opacity: .25
                  }
              ],
              onChapterExit: []
          },
          {
            id: 'D2',
            title: '2. ХӨВСГӨЛ НУУР',
            image: '',
            description: "Төрөл: Хавцлын нуур <br> Нуураас гарах гол: 	Эгийн гол <br> Ай савд багтдаг орон:	Монгол <br> Урт:	136 км <br> Өргөн:	37 км <br> Талбай:	2,760 км² <br> Дундаж гүн:	138 м <br> Хөвөөний түвшин:	1,645 м <br> Хөлдөх хугацаа:	12 сар - 5 сар",
            location: {
                center: [99.87973, 50.94967],
                zoom: 8.31,
                pitch: 43.5,
                bearing: 0.0
              },
              onChapterEnter: [
                {
                  layer: 'Day-2',
                  opacity: 0.25
                }
              ],
            onChapterExit: []
          },
          {
            id: 'd3',
            title: '3. ХАР-УС НУУР',
            image: '',
            description: "Төрөл: Цэнгэг нуур <br> Нуураас гарах гол: 	Чоно Харайх гол (Хар нуур руу урсана) <br> Ай савд багтдаг орон:	Монгол <br> Урт:	72 км <br> Өргөн:	37 км <br> Талбай:	1,486 км² <br> Дундаж гүн:	2.1 м <br> Хөвөөний түвшин:	1,157 м <br> Хөлдөх хугацаа:	11 сар - 4 сар",
            location: {
                center: [91.94400, 48.02823],
                zoom: 9.31,
                pitch: 45.00,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'DAY-3',
                    opacity: 0
                }
            ],
            onChapterExit: []
        },
        {
            id: 'D4',
            title: '4. ХЯРГАС НУУР',
            image: '',
            description: "Төрөл: Хаагдмал ай сав <br> Нуураас гарах гол: 	Байхгүй <br> Ай савд багтдаг орон:	Монгол <br> Урт:	83 км <br> Өргөн:	31 км <br> Талбай:	1,481 км² <br> Дундаж гүн:	50.7 м <br> Хөвөөний түвшин:	1,035 м <br> Хөлдөх хугацаа:	11 сар - 4 сар",
            location: {
              center: [92.84731, 49.05145],
              zoom: 9.24,
              pitch: 45.00,
              bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'D5',
            title: '5. БУЙР НУУР',
            image: '',
            description: "Нуурт цутгах гол: Халх гол <br> Нуураас гарах гол: 	Оршуун гол (Хөлөн нуур руу цутгана) <br> Ай савд багтдаг орон:	Монгол, БНХАУ <br> Урт:	42 км <br> Өргөн:	20 км <br> Талбай:	610 км² <br> Дундаж гүн:	6.5 м <br> Хөвөөний түвшин:	583 м <br> Хөлдөх хугацаа:	11 сар - 5 сар",
            location: {
                center: [117.46363, 47.74436],
                zoom: 9.5,
                pitch: 45.00,
                bearing: 0.0
            },
            onChapterEnter: [],
            onChapterExit: []
        },
            ]
};
