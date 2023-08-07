const API = 'https://youtube-v3-alternative.p.rapidapi.com/playlist?id=PLukmsaXDPJie7L7Ihn63HJhA6YMp7tUUr';
const content = null || document.getElementById('content') //referencia a un elemento del html para añadir algo
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a9ce878ad6msh68e332e210e92f3p12d805jsn6f60054b9865',//no recomendado mostrar
		'X-RapidAPI-Host': 'youtube-v3-alternative.p.rapidapi.com'
	}
};

async function fetchData(urlApi) {
    const response = await fetch(urlApi, options) //...fetch(urlApi, {method...})
    const data =await response.json()
    return data
}
// Función que se invoca así msima e inmediatamente: consecuencia, una vez se detecta, se desencadena todo lo que este dentro de ella.

 (async () => {
    try {
        const videos = await fetchData(API)
        let view = `
        ${videos.data.map(video => `
            <a href = "https://youtu.be/${video.videoId}?list=PLukmsaXDPJie7L7Ihn63HJhA6YMp7tUUr"target="_blank">
            <div class="group relative">
                <div
                class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                <img src="${video.thumbnail[0].url}" alt="${video.title}" class="w-full">
                </div>
                <div class="mt-4 flex justify-between">
                    <h3 class="text-sm text-gray-700">
                    <span aria-hidden="true" class="text-gray-500 absolute inset-0"></span>
                    "${video.title}
                    </h3>
                </div>
                </div>
            </div>
            `).slice(0, 12).join('')}
        `//slice es un método de arrays, y dentro va el rango de las posiciones. Y para el uso de esos elementos se usa join
        content.innerHTML = view //añade todos los videos al html

    } catch (error) {
        console.error(error);
        alert('ha ocurrido un error')
    }
 })()

