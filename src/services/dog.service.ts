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
    {
      id: 5,
      name: 'Labrador',
      imageUrl:
        'https://2.bp.blogspot.com/-bFIZLg6Razs/V73j1vPc3iI/AAAAAAAACwk/LipzjMZ9WLQMT0VpOrb8T0ET912OUaccACK4B/s1600/choco%2Blab%2B1.jpg',
      description: `Labrador is a geographic and cultural region within the Canadian province of Newfoundland and Labrador. It is the primarily continental portion of the province and constitutes 71% of the province's area but is home to only 6% of the province's population. It is separated from the island of Newfoundland by the Strait of Belle Isle. It is the largest and northernmost geographical region in Atlantic Canada. Labrador occupies most of the eastern part of the Labrador Peninsula. It is bordered to the west and the south by the Canadian province of Quebec. Labrador also shares a small land border with the Canadian territory of Nunavut on Killiniq Island. The indigenous peoples of Labrador include the Northern Inuit of Nunatsiavut, the Southern Inuit-Métis of NunatuKavut, and the Innu of Nitassinan. `,
    },
    {
      id: 6,
      name: 'Greyhound',
      imageUrl:
        'https://vetstreet.brightspotcdn.com/dims4/default/615618f/2147483647/crop/0x0%2B0%2B0/resize/645x380/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2Fbd%2Ff32000a38511e087a80050568d634f%2Ffile%2FItalian-Greyhound-5-062411.jpg',
      description: `The English Greyhound, or simply the Greyhound, is a breed of dog, a sighthound which has been bred for coursing game and greyhound racing. Since the rise in large-scale adoption of retired racing Greyhounds, the breed has seen a resurgence in popularity as a family pet. Greyhounds are defined as a tall, muscular, smooth-coated, "S-shaped" type of sighthound with a long tail and tough feet. Greyhounds are a separate breed from other related sighthounds, such as the Italian greyhound. The Greyhound is a gentle and intelligent breed whose combination of long, powerful legs, deep chest, flexible spine, and slim build allows it to reach average race speeds exceeding 64 kilometres per hour (40 mph). The Greyhound can reach a full speed of 70 kilometres per hour (43 mph) within 30 metres (98 ft), or six strides from the boxes, traveling at almost 20 metres per second (66 ft/s) for the first 250 metres (820 ft) of a race.`,
    },
    {
      id: 7,
      name: 'Chihuahua',
      imageUrl:
        'https://www.fidosavvy.com/images/chihuahua_puppy_closeup_650_c.jpg',
      description:
        'The Chihuahua is one of the smallest breeds of dog, and is named after the Mexican state of Chihuahua.',
    },
    {
      id: 8,
      name: 'German Shepherd',
      imageUrl:
        'https://t4.ftcdn.net/jpg/04/75/62/59/360_F_475625971_HTK8MdH194iKiPdBGVHUxPJWNgDHJZEQ.jpg',
      description:
        'The German Shepherd or Alsatian is a German breed of working dog of medium to large size. The breed was developed by Max von Stephanitz using various traditional German herding dogs from 1899. It was originally bred as a herding dog, for herding sheep. It has since been used in many other types of work, including disability assistance, search-and-rescue, police work and warfare. It is commonly kept as a companion dog, and according to the Fédération Cynologique Internationale had the second-highest number of annual registrations in 2013.',
    },
  ];

  getDog(id: number): Dog {
    return this.dogs.find((dog) => dog.id == id);
  }

  getAllDogs(): Dog[] {
    return this.dogs;
  }
}
