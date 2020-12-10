import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/book.model';
import { ActivatedRoute, Router } from '@angular/router';
import { BooksService } from '../../services/books.service';

@Component({
  selector: 'app-single-book',
  templateUrl: './single-book.component.html',
  styleUrls: ['./single-book.component.scss']
})
export class SingleBookComponent implements OnInit {

  book: Book;

  constructor(private route: ActivatedRoute,
    private bookService: BooksService,
    private router: Router) { }

  ngOnInit() {
    this.book = new Book('', ''); //book vide temporaire, car si la page ne s'est pas chargé à temps et qu'il y a ajout de livre, ici evite les bugs
    const id = this.route.snapshot.params['id'];
    console.log('this is the id :'+ id);
    this.bookService.getSingleBook(+id).then(
      (book: Book) => {
        this.book = book;
      });
  }

  onBack() {
    this.router.navigate(['/books']);
  }
}
