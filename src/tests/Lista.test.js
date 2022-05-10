import { screen, render, userEvent } from './index'

import Lista from '../courses/Lista'

const lista =  [
    {
      "kind": "youtube#playlistItem",
      "etag": "ZWWwNIsspaBRaEU6fxKnu3kU9BI",
      "id": "UEx0UjlqVlE0Y0ZMS0l3TkRjb21FT3pKNGZRcUFfWWFFUy41NkI0NEY2RDEwNTU3Q0M2",
      "snippet": {
        "publishedAt": "2019-02-02T11:12:06Z",
        "channelId": "UCSLyeQKzBgpqs89oS58dNDQ",
        "title": "John Bevere - O Temor do Senhor 1/8",
        "description": "Série Exclusiva do nosso canal!\nBaseado no Livro \"O Temor do Senhor\", John Bevere apresenta nestes vídeos as definições de Temor, Glória, Santidade e vários outros termos tão comuns entre nós. \nUm ensino maravilhoso que ajudará você e os seus a viver de forma santa e irrepreensível até o Dia do Senhor. \n\nPatrocine nosso ministério de dublagem:\napoia.se/sozoproducoes\n\nPIX: sozoproducoes@gmail.com\n\nBradesco\nAg. 0031\nCC 300295-0\n\nItaú\nAg: 9293\nCC 19771-2\n\nString Impromptu Number 1 Kevin MacLeod (incompetech.com)\nLicensed under Creative Commons: By Attribution 3.0 License\nhttp://creativecommons.org/licenses/by/3.0/",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/3IpOdCwu7g0/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/3IpOdCwu7g0/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/3IpOdCwu7g0/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/3IpOdCwu7g0/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/3IpOdCwu7g0/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "Sozo Produções",
        "playlistId": "PLtR9jVQ4cFLKIwNDcomEOzJ4fQqA_YaES",
        "position": 0,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "3IpOdCwu7g0"
        },
        "videoOwnerChannelTitle": "Sozo Produções",
        "videoOwnerChannelId": "UCSLyeQKzBgpqs89oS58dNDQ"
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "oPeXBQsMftXBTYfYszJml04xTrQ",
      "id": "UEx0UjlqVlE0Y0ZMS0l3TkRjb21FT3pKNGZRcUFfWWFFUy4yODlGNEE0NkRGMEEzMEQy",
      "snippet": {
        "publishedAt": "2019-02-02T11:12:16Z",
        "channelId": "UCSLyeQKzBgpqs89oS58dNDQ",
        "title": "John Bevere - O Temor do Senhor 2/8",
        "description": "Série Exclusiva do nosso canal!\nBaseado no Livro \"O Temor do Senhor\", John Bevere apresenta nestes vídeos as definições de Temor, Glória, Santidade e vários outros termos tão comuns entre nós. \nUm ensino maravilhoso que ajudará você e os seus a viver de forma santa e irrepreensível até o Dia do Senhor. \n\nPatrocine nosso ministério de dublagem:\napoia.se/sozoproducoes\n\n\nPIX: sozoproducoes@gmail.com\n\n\nBradesco\nAg. 0031\nCC 300295-0\n\nItaú\nAg: 9293\nCC 19771-2\n\nString Impromptu Number 1 Kevin MacLeod (incompetech.com)\nLicensed under Creative Commons: By Attribution 3.0 License\nhttp://creativecommons.org/licenses/by/3.0/",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/zvq8kQm7EvE/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/zvq8kQm7EvE/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/zvq8kQm7EvE/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/zvq8kQm7EvE/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/zvq8kQm7EvE/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "Sozo Produções",
        "playlistId": "PLtR9jVQ4cFLKIwNDcomEOzJ4fQqA_YaES",
        "position": 1,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "zvq8kQm7EvE"
        },
        "videoOwnerChannelTitle": "Sozo Produções",
        "videoOwnerChannelId": "UCSLyeQKzBgpqs89oS58dNDQ"
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "s77aqhGCjoCKyZ1rln9P3cdXNFE",
      "id": "UEx0UjlqVlE0Y0ZMS0l3TkRjb21FT3pKNGZRcUFfWWFFUy4wMTcyMDhGQUE4NTIzM0Y5",
      "snippet": {
        "publishedAt": "2019-02-02T11:13:09Z",
        "channelId": "UCSLyeQKzBgpqs89oS58dNDQ",
        "title": "John Bevere - O Temor do Senhor 3/8",
        "description": "Série Exclusiva do nosso canal!\nBaseado no Livro \"O Temor do Senhor\", John Bevere apresenta nestes vídeos as definições de Temor, Glória, Santidade e vários outros termos tão comuns entre nós. \nUm ensino maravilhoso que ajudará você e os seus a viver de forma santa e irrepreensível até o Dia do Senhor. \n\nPatrocine nosso ministério de dublagem:\napoia.se/sozoproducoes\n\n\nPIX: sozoproducoes@gmail.com\n\n\nBradesco\nAg. 0031\nCC 300295-0\n\nItaú\nAg: 9293\nCC 19771-2\n\nString Impromptu Number 1 Kevin MacLeod (incompetech.com)\nLicensed under Creative Commons: By Attribution 3.0 License\nhttp://creativecommons.org/licenses/by/3.0/",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/XgcIe9X51j0/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/XgcIe9X51j0/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/XgcIe9X51j0/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/XgcIe9X51j0/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/XgcIe9X51j0/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "Sozo Produções",
        "playlistId": "PLtR9jVQ4cFLKIwNDcomEOzJ4fQqA_YaES",
        "position": 2,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "XgcIe9X51j0"
        },
        "videoOwnerChannelTitle": "Sozo Produções",
        "videoOwnerChannelId": "UCSLyeQKzBgpqs89oS58dNDQ"
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "DkXjd-kwSETX9kEbGL7lcfNJv7Q",
      "id": "UEx0UjlqVlE0Y0ZMS0l3TkRjb21FT3pKNGZRcUFfWWFFUy41MjE1MkI0OTQ2QzJGNzNG",
      "snippet": {
        "publishedAt": "2019-02-02T11:13:20Z",
        "channelId": "UCSLyeQKzBgpqs89oS58dNDQ",
        "title": "John Bevere - O Temor do Senhor 4/8",
        "description": "Série Exclusiva do nosso canal!\nBaseado no Livro \"O Temor do Senhor\", John Bevere apresenta nestes vídeos as definições de Temor, Glória, Santidade e vários outros termos tão comuns entre nós. \nUm ensino maravilhoso que ajudará você e os seus a viver de forma santa e irrepreensível até o Dia do Senhor. \n\nPatrocine nosso ministério de dublagem:\napoia.se/sozoproducoes\n\nPIX: sozoproducoes@gmail.com\n\nBradesco\nAg. 0031\nCC 300295-0\n\nItaú\nAg: 9293\nCC 19771-2\n\nString Impromptu Number 1 Kevin MacLeod (incompetech.com)\nLicensed under Creative Commons: By Attribution 3.0 License\nhttp://creativecommons.org/licenses/by/3.0/",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/O0TXJbx2TbY/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/O0TXJbx2TbY/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/O0TXJbx2TbY/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/O0TXJbx2TbY/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/O0TXJbx2TbY/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "Sozo Produções",
        "playlistId": "PLtR9jVQ4cFLKIwNDcomEOzJ4fQqA_YaES",
        "position": 3,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "O0TXJbx2TbY"
        },
        "videoOwnerChannelTitle": "Sozo Produções",
        "videoOwnerChannelId": "UCSLyeQKzBgpqs89oS58dNDQ"
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "E__0g7vvtpZ-axLW1iPhm2OUM50",
      "id": "UEx0UjlqVlE0Y0ZMS0l3TkRjb21FT3pKNGZRcUFfWWFFUy4wOTA3OTZBNzVEMTUzOTMy",
      "snippet": {
        "publishedAt": "2019-02-02T11:13:29Z",
        "channelId": "UCSLyeQKzBgpqs89oS58dNDQ",
        "title": "John Bevere - O Temor do Senhor 5/8",
        "description": "Série Exclusiva do nosso canal!\nBaseado no Livro \"O Temor do Senhor\", John Bevere apresenta nestes vídeos as definições de Temor, Glória, Santidade e vários outros termos tão comuns entre nós. \nUm ensino maravilhoso que ajudará você e os seus a viver de forma santa e irrepreensível até o Dia do Senhor. \n\nPatrocine nosso ministério de dublagem:\napoia.se/sozoproducoes\n\nPIX: sozoproducoes@gmail.com\n\n\nBradesco\nAg. 0031\nCC 300295-0\n\nItaú\nAg: 9293\nCC 19771-2\n\nString Impromptu Number 1 Kevin MacLeod (incompetech.com)\nLicensed under Creative Commons: By Attribution 3.0 License\nhttp://creativecommons.org/licenses/by/3.0/",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/ptgOv2xwfxo/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/ptgOv2xwfxo/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/ptgOv2xwfxo/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/ptgOv2xwfxo/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/ptgOv2xwfxo/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "Sozo Produções",
        "playlistId": "PLtR9jVQ4cFLKIwNDcomEOzJ4fQqA_YaES",
        "position": 4,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "ptgOv2xwfxo"
        },
        "videoOwnerChannelTitle": "Sozo Produções",
        "videoOwnerChannelId": "UCSLyeQKzBgpqs89oS58dNDQ"
      }
    }
  ]

describe('Lista', () => {

    it('should have a curse', () => {
        render(<Lista lista={lista} func={{}}></Lista>)
        expect(screen.queryByText('John Bevere - O Temor do Senhor 1/8')).toBeInTheDocument()
    })

})