const errorDiv = document.getElementById('error-div');
const bookNumbers =document.getElementById('book-numbers');
const spinner =document.getElementById('spinner').style.display ='none';

// set event listener
const searchResult = () => {
    document.getElementById('spinner').style.display ='block';
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
    const url =`https://openlibrary.org/search.json?q=${searchText}`
    fetch(url)
    .then(res => res.json())
    .then(data => displaySearchResult(data))
    }
};

// display books result

const displaySearchResult = booksdata => {
    // console.log(booksdata)
    document.getElementById('spinner').style.display ='none';
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
            const div = document.createElement('div');
             div.classList.add('col');
            //  img url
             const imgUrl ="https://covers.openlibrary.org/b/id/" +book.cover_i;
             div.innerHTML =`
             <div class="card h-100">
                <img class="h-100" src="${imgUrl}-M.jpg"imclass="card-img-top" alt="...">
                    <div class="card-body p-3">
                    <h5 class="card-title">${book.title}</h5>
                    <h5 class="card-title">Author-Name: ${book.author_name[0] ? book.author_name[0]: 'N/A' }</h5>
                    <h5 class="card-title">First-Publish-year: ${book.first_publish_year}</h5>
                 </div>
               </div>
                 `
                    displayResult.appendChild(div);
                })
            }
        };

    
