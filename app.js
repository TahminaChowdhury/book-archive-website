const errorDiv = document.getElementById('error-div');
// set event listener
const searchResult = () => {
    const searchField = document.getElementById('search-field');
    const searchText =searchField.value;

    // clear search field

    searchField.value='';

    // error handling
    if (searchField === '') {
        errorDiv.innerText='No result found';
        return;
    }
    else{
    // fetch api link
    const url =`http://openlibrary.org/search.json?q=${searchText}`
    fetch(url)
    .then(res => res.json())
    .then(data => displaySearchResult(data))
    }
};

// display books result

const displaySearchResult = booksdata => {
    if (booksdata.messegae === 'Not Found') {
        errorDiv.innerText='No result found';
    }
    else{
        errorDiv.innerText = "";
        const books = booksdata.docs;
        const displayResult = document.getElementById('display-results');
        displayResult.innerHTML ='';
        books.forEach(book => {
         //    console.log(book)
         const div = document.createElement('div');
         div.classList.add('col');
         div.innerHTML =`
         <div class="card">
                 <img src="" class="card-img-top" alt="...">
                  <div class="card-body">
                    <h5 class="card-title">${book.title}</h5>
                    <h5 class="card-title">Author-Nmae:${book.author_name[0]}</h5>
                    <h5 class="card-title">First-Publish_year${book.first_publish_year}</h5>
                 </div>
               </div>
         `
         displayResult.appendChild(div);
        })
    }
};