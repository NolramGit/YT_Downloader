import youtubedl  from "youtube-dl-exec";

let urls = 'https://www.youtube.com/watch?v=6xKWiCMKKJg';

const ytDownload = async () => {
    const data = await youtubedl(urls, {
        simulate: true,
        dumpSingleJson: true
    })
    return data
}

/*const getData = async () => { 
    const data = await ytDownload;
    return data.id
}*/

export { ytDownload }
