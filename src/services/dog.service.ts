import { Injectable } from '@nestjs/common';
import { Dog } from '../shared/dog.interface';

@Injectable()
export class DogService {
  dogs: Dog[] = [
    {
      id: 1,
      name: 'Dachshund',
      imageUrl:
        'https://img.freepik.com/premium-photo/cute-dachshund-puppy-hand-mistress_414160-1577.jpg?w=2000',
      description:
        'The dachshund, also known as the wiener dog, badger dog, and sausage dog, is a short-legged, long-bodied, hound-type dog breed. The dog may be smooth-haired, wire-haired, or long-haired. The standard-sized dachshund was developed to scent, chase, and flush out badgers and other burrow-dwelling animals. The miniature dachshund was bred to hunt small animals such as rabbits. According to the American Kennel Club, the dachshund was ranked 12th in popularity among dog breeds in the United States in 2018.',
    },
    {
      id: 2,
      name: 'Poodle',
      imageUrl:
        'data:image/jpeg;base64,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',
      description:
        'The Poodle, called the Pudel in German and the Caniche in French, is a breed of water dog. The breed is divided into four varieties based on size, the Standard Poodle, Medium Poodle, Miniature Poodle and Toy Poodle, although the Medium Poodle variety is not universally recognised. The Poodle most likely originated in Germany, although it is also claimed to be from France. The Standard Poodle was originally used by wildfowl hunters to retrieve game from water. The smaller varieties of the breed were bred from the original in France where they were once commonly used as circus performers, but have become popular companion dogs. ',
    },
    {
      id: 3,
      name: 'Pug',
      imageUrl:
        'https://preview.redd.it/30jml0gnu9t41.jpg?auto=webp&s=a9cf096c83c934b3ce06b4dec9fcb5e671270c86',
      description: `The pug is a breed of dog originally from China, with physically distinctive features of a wrinkly, short-muzzled face and curled tail. The breed has a fine, glossy coat that comes in a variety of colors, most often light brown (fawn) or black, and a compact, square body with well developed and thick muscles all over the body. Pugs were brought from China to Europe in the sixteenth century and were popularized in Western Europe by the House of Orange of the Netherlands, and the House of Stuart. In the United Kingdom, in the nineteenth century, Queen Victoria developed a passion for pugs which she passed on to other members of the Royal family. Pugs are known for being sociable and gentle companion dogs. The American Kennel Club describes the breed's personality as "even-tempered and charming". Pugs remain popular into the twenty-first century, with some famous celebrity owners.`,
    },
    {
      id: 4,
      name: 'Golden Retriever',
      imageUrl:
        'https://goldenretrieverspot.nl/wp-content/uploads/2021/03/wat-heb-je-allemaal-nodig-voor-een-golden-retriever-puppy.jpg',
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
