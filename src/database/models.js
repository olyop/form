const mongoose = require('mongoose')

const { authorSchema, bookSchema } = require('./schemas')

const Author = mongoose.model('Author', authorSchema)
const Book = mongoose.model('Book', bookSchema)

const jamieAuthor = new Author {
  id: new mongoose.Types.ObjectId(),
  name: { first: 'Jamie', last: 'Munro' },
  biography: 'Jamie is the author of ASP.NET MVC 5 with Bootstrap and Knockout.js.',
  twitter: 'https://twitter.com/endyourif',
  facebook: 'https://www.facebook.com/End-Your-If-194251957252562/'
}

jamieAuthor.save(function(err) {
  if (err) throw err
  console.log('Author successfully saved.')

  const mvcBook = new Book {
    id: new mongoose.Types.ObjectId(),
    title: 'ASP.NET MVC 5 with Bootstrap and Knockout.js',
    author: jamieAuthor._id,
    ratings: [
      { summary: 'Great read' }
    ]
  }

  mvcBook.save(function(err) {
    if (err) throw err
    console.log('Book successfully saved.')
  })

  const knockoutBook = new Book {
    id: new mongoose.Types.ObjectId(),
    title: 'Knockout.js: Building Dynamic Client-Side Web Applications',
    author: jamieAuthor.id
  }

  knockoutBook.save(function(err) {
    if (err) throw err
    console.log('Book successfully saved.')
  })
})
