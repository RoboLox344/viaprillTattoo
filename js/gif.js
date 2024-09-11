



let BoDYHtml = document.body;
Header()
BoDYHtml.addEventListener('click', ButtonSearch)
BoDYHtml.addEventListener('click', ButtonDelete)

function Header(){
    let Html = '';
    Html +=`
    
    <div class='form-wp'>
                <div class='form-input-wp'>
                    <div class='input-wp'>
                        
                     <label for='gif-input'>введите название Gif
                         <input id='gif-input' name='gif-input'>
                     </label>

                    </div>

                    <div class='btn-wp'>
                        <button class='btn btn-delete'> Удалить</button>
                        <button class='btn btn-search'>Искать</button>
                    </div>
                </div>
                <div class='content-wp'>

                </div>
            </div>
    `;
    
    BoDYHtml.insertAdjacentHTML('beforeend', Html)       
     
}


function ButtonDelete(event){
    const Btn = event.target.closest('.btn-delete')
    if(!Btn){
        return
    }
    let WpGif = document.querySelector('.content-wp')
    WpGif.innerHTML = 'Тут пусто';
    document.getElementById('gif-input').value = '';

}

function ButtonSearch (event){
    const Btn = event.target.closest('.btn-search')
    if(!Btn){
        return
    }
    let res = getSearch();
    SearchApi(res);
    /* console.log('Кнопка Поиска') */
}

function getSearch(){
    const InputItem = document.getElementById('gif-input')
     return InputItem.value
}

function SearchApi(searchitem){
    const apiKey = 'XvlqyBJbyje6zAZEnpS48ZVLdI6MWrsG'
    const searchQuery = searchitem
    const ApiLink = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchQuery}`

fetch(ApiLink)
  .then(response => response.json())
  .then(data => {
    const Gift = data.data
    let WpGif = document.querySelector('.content-wp')
    console.log(data)
    RenderGif(Gift, WpGif)
  });

}

function RenderGif(base, wp){
    wp.innerHTML=''
    base.forEach(({id, images}) => {
         let Html = '';
         Html += `

            <div class='gif-wp' id='${id}'>
                <img src='${images.fixed_width.url}' class='gif-size'>
            </div>

         `;

        wp.insertAdjacentHTML("beforeend", Html)
    });
}