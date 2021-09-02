const errorDiv = document.getElementById('error-div');
const bookNumbers =document.getElementById('book-numbers');

// set event listener
const searchResult = () => {
    const searchField = document.getElementById('search-field');
    const searchText =searchField.value;

    // clear search field

    searchField.value='';

    // error handling
    if (searchText === '') {
        errorDiv.innerText ='No results found';
        bookNumbers.innerText ='';
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
    // console.log(booksdata)
    
    // display result
    const displayResult = document.getElementById('display-results');
    displayResult.innerHTML ='';
        const books = booksdata.docs;
    
            if (booksdata.numFound === 0) {
            errorDiv.innerText ='No results found';
            bookNumbers.innerHTML ='';
            return;
        }
            else{
            errorDiv.innerText ='';
            // total books number
            const bookNumbers =document.getElementById('book-numbers').innerText =`Books found ${books.length}`;
            // clean books found
            bookNumbers.innerHTML ='';
            // forEach loop
            books.forEach(book => {
            console.log(book);
            const div = document.createElement('div');
             div.classList.add('col');
            //  img url
             const imgUrl ="https://covers.openlibrary.org/b/id/" +book.cover_i
             console.log(imgUrl);
             div.innerHTML =`
             <div class="card">
                <img src="${imgUrl}-M.jpg"imclass="card-img-top" alt="...">
                    <div class="card-body">
                    <h5 class="card-title">${book.title}</h5>
                    <h5 class="card-title">Author-Nmae: ${book.author_name[0] ? book.author_name[0]: 'N/A' }</h5>
                    <h5 class="card-title">First-Publish-year: ${book.first_publish_year}</h5>
                 </div>
               </div>
                 `
                    displayResult.appendChild(div);
                })
            };
        };

    
