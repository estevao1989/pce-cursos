import { screen, render, userEvent } from './index'
import Course from '../courses/Course'

const curso =
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
}

describe('Course', () => {

    it('should have a curse', () => {
        render(<Course
            key={curso.id}
            playListId={curso.id}
            title={curso.snippet.title}
            image={curso.snippet.thumbnails.standard.url}
            vendor={curso.snippet.channelTitle}
        />)
        expect(screen.queryByText('John Bevere - O Temor do Senhor 1/8')).toBeInTheDocument()
    })

})