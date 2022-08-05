import { Injectable } from '@nestjs/common';
import { Dog } from '../shared/dog.interface';

@Injectable()
export class DogService {
  dogs: Dog[] = [
    {
      id: 1,
      name: 'Dachshund',
      imageUrl: 'https://i.ibb.co/H7TLCNh/dachshund.jpg',
      description:
        'The dachshund, also known as the wiener dog, badger dog, and sausage dog, is a short-legged, long-bodied, hound-type dog breed. The dog may be smooth-haired, wire-haired, or long-haired. The standard-sized dachshund was developed to scent, chase, and flush out badgers and other burrow-dwelling animals. The miniature dachshund was bred to hunt small animals such as rabbits. According to the American Kennel Club, the dachshund was ranked 12th in popularity among dog breeds in the United States in 2018.',
    },
    {
      id: 2,
      name: 'Poodle',
      imageUrl: 'https://i.ibb.co/ygxnVpd/poodle.jpg',
      description:
        'The Poodle, called the Pudel in German and the Caniche in French, is a breed of water dog. The breed is divided into four varieties based on size, the Standard Poodle, Medium Poodle, Miniature Poodle and Toy Poodle, although the Medium Poodle variety is not universally recognised. The Poodle most likely originated in Germany, although it is also claimed to be from France. The Standard Poodle was originally used by wildfowl hunters to retrieve game from water. The smaller varieties of the breed were bred from the original in France where they were once commonly used as circus performers, but have become popular companion dogs. ',
    },
    {
      id: 3,
      name: 'Pug',
      imageUrl: 'https://i.ibb.co/Hxdr6v5/pug.jpg',
      description: `The pug is a breed of dog originally from China, with physically distinctive features of a wrinkly, short-muzzled face and curled tail. The breed has a fine, glossy coat that comes in a variety of colors, most often light brown (fawn) or black, and a compact, square body with well developed and thick muscles all over the body. Pugs were brought from China to Europe in the sixteenth century and were popularized in Western Europe by the House of Orange of the Netherlands, and the House of Stuart. In the United Kingdom, in the nineteenth century, Queen Victoria developed a passion for pugs which she passed on to other members of the Royal family. Pugs are known for being sociable and gentle companion dogs. The American Kennel Club describes the breed's personality as "even-tempered and charming". Pugs remain popular into the twenty-first century, with some famous celebrity owners.`,
    },
    {
      id: 4,
      name: 'Golden Retriever',
      imageUrl: 'https://i.ibb.co/mCh2zXB/golden-retriever.jpg',
      description:
        'The Golden Retriever is a Scottish breed of retriever dog of medium size. It is characterised by a gentle and affectionate nature and a striking golden coat. It is commonly kept as a pet and is among the most frequently registered breeds in several Western countries. It is a frequent competitor in dog shows and obedience trials; it is also used as a gundog, and may be trained for use as a guide dog. The breed was created by Sir Dudley Marjoribanks at his Scottish estate Guisachan in the late nineteenth century. He cross-bred Flat-coated Retrievers with Tweed Water Spaniels, with some further infusions of Red Setter, Labrador Retriever and Bloodhound. The breed was recognised by the Kennel Club in 1913, and during the interwar period spread to many parts of the world.',
    },
  ];

  getDog(id: number): Dog {
    return this.dogs.find((dog) => dog.id == id);
  }

  getAllDogs(): Dog[] {
    return this.dogs;
  }
}
