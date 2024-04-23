import React from 'react';

interface Book {
  title: string;
  author: string;
  image: string;
}

interface BooksListProps {
  books: Book[];
}

export default function BooksList({ books }: BooksListProps) {

  return (
    <div>
      <div className="mx-auto mt-8 grid grid-cols-1 md:grid-cols-2">
        {books.map((book) => (
          <div className='my-2 mx-2 p-2 flex flex-col gap-2 rounded border-[#a5a5a5] max-w-70'>
            <div className='border-[1px]'>
              <img
                src={book.image}
                alt={book.title}
                className="object-cover hover:drop-shadow-lg"
              />
            </div>
            <div className="text-center">
              <div className="font-bold underline md:text-base" style={{ maxWidth: '250px', wordWrap: 'break-word', lineHeight: '1' }}>
                {book.title}
              </div>
              <div className="text-xs mt-1 italic">
                by {book.author}1
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};