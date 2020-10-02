import { Component, OnInit, ViewChild, ElementRef, Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
 import { Network } from '@ionic-native/network/ngx';
import {config} from '../../shared/config';
import { AlertController } from '@ionic/angular';
import { NativeStorage } from '@ionic-native/native-storage/ngx';


@Injectable()
export class CommonFunctionService {
  public paramsStorage: any;
  public imgUrl = 'asdasd';
  public storageData: any = {};
  public previewImg  = '';
  public articleDummyData : any = [];
  constructor(public toastController: ToastController,
               public network: Network,
              public alertController: AlertController,
              public nativeStorage: NativeStorage
              ) { 
                this.imgUrl = config['imgUrl'];
                this.articleDummyData = [
                  {
                      "source": {
                          "id": null,
                          "name": "Gizmodo.com"
                      },
                      "author": "John Biggs",
                      "title": "Crypto Traders Cut Out the Middleman, Simply Rob Victim",
                      "description": "Two alleged crypto traders in Singapore apparently came up with a fool-proof plan: rather than convert a customer’s 365,000 Singapore dollars to bitcoin, they would simply rob the victim when he came in to do the trade.Read more...",
                      "url": "https://gizmodo.com/crypto-traders-cut-out-the-middleman-simply-rob-victim-1845011301",
                      "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/li0fkkejdmaugm8v1fkw.jpg",
                      "publishedAt": "2020-09-10T14:28:00Z",
                      "content": "Two alleged crypto traders in Singapore apparently came up with a fool-proof plan: rather than convert a customers 365,000 Singapore dollars to bitcoin, they would simply rob the victim when he came … [+1735 chars]"
                  },
                  {
                      "source": {
                          "id": "bbc-news",
                          "name": "BBC News"
                      },
                      "author": "https://www.facebook.com/bbcnews",
                      "title": "'One day everyone will use China's digital currency'",
                      "description": "China plans a digital version of its currency, which some say could become a big global payment system.",
                      "url": "https://www.bbc.co.uk/news/business-54261382",
                      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/C414/production/_114569105_chandler.racks.jpg",
                      "publishedAt": "2020-09-24T23:16:08Z",
                      "content": "Image copyrightChandler GuoImage caption\r\n Chandler Guo at one of his cryptocurrency mines\r\nChandler Guo was a pioneer in cryptocurrency, the digital currencies that can be created and used independe… [+5995 chars]"
                  },
                  {
                      "source": {
                          "id": "engadget",
                          "name": "Engadget"
                      },
                      "author": "Mariella Moon",
                      "title": "'The Dark Overlord' hacking group member sentenced to five years in prison",
                      "description": "A US district judge has sentenced a UK National to five years in federal prison for participating in the cybercrime activities of hacking collective group “The Dark Overlord.” Nathan Wyatt was extradited from the UK to the US in December 2019 for targeting co…",
                      "url": "https://www.engadget.com/the-dark-overlord-member-sentenced-063851213.html",
                      "urlToImage": "https://o.aolcdn.com/images/dims?resize=1200%2C630&crop=1200%2C630%2C0%2C0&quality=95&image_uri=https%3A%2F%2Fs.yimg.com%2Fos%2Fcreatr-images%2F2019-06%2Fea58ee80-863b-11e9-b5ff-71b01764a4c6&client=amp-blogside-v2&signature=94170af4e99228d984f5e1d77a0d3d5945454d30",
                      "publishedAt": "2020-09-22T06:38:51Z",
                      "content": "A US district judge has sentenced a UK National to five years in federal prison for participating in the cybercrime activities of hacking collective group “The Dark Overlord.” Nathan Wyatt was extrad… [+961 chars]"
                  },
                  {
                      "source": {
                          "id": "reuters",
                          "name": "Reuters"
                      },
                      "author": "Alexis Akwagyiram, Tom Wilson",
                      "title": "INSIGHT-How bitcoin met the real world in Africa - Reuters Africa",
                      "description": "INSIGHT-How bitcoin met the real world in Africa  Reuters Africa",
                      "url": "https://af.reuters.com/article/crypto-currencies-africa-idAFL4N2FR31Q",
                      "urlToImage": "https://s1.reutersmedia.net/resources_v2/images/rcom-default.png?w=800",
                      "publishedAt": "2020-09-08T06:02:00Z",
                      "content": "By Alexis Akwagyiram, Tom Wilson\r\n* Monthly crypto transfers to and from Africa rise 55% in a year\r\n* Much of the activity in Nigeria, South Africa and Kenya\r\n* Driven by small businesses and migrant… [+7730 chars]"
                  },
                  {
                      "source": {
                          "id": "wired",
                          "name": "Wired"
                      },
                      "author": "Nicholas Thompson, Brian Barrett",
                      "title": "How Twitter Survived Its Biggest Hack—and Plans to Stop the Next One",
                      "description": "On July 15, Twitter melted down. On Election Day, that's not an option.",
                      "url": "https://www.wired.com/story/inside-twitter-hack-election-plan/",
                      "urlToImage": "https://media.wired.com/photos/5f6bbbbe472ed04367fece09/191:100/w_1280,c_limit/Sec_twitter_h_20.93138022.jpg",
                      "publishedAt": "2020-09-24T16:00:00Z",
                      "content": "July 15 was, at first, just another day for Parag Agrawal, the chief technology officer of Twitter. Everything seemed normal on the service: T-Pains fans were defending him in a spat with Travis Scot… [+3564 chars]"
                  },
                  {
                      "source": {
                          "id": "reuters",
                          "name": "Reuters"
                      },
                      "author": "Alexis Akwagyiram, Tom Wilson",
                      "title": "How bitcoin met the real world in Africa - Reuters India",
                      "description": "Four months ago, Abolaji Odunjo made a fundamental change to his business selling mobile phones in a bustling street market in Lagos: He started paying his suppliers in bitcoin.",
                      "url": "https://in.reuters.com/article/crypto-currencies-africa-insight-idINKBN25Z0TZ",
                      "urlToImage": "https://static.reuters.com/resources/r/?m=02&d=20200908&t=2&i=1532554925&r=LYNXMPEG870GM&w=800",
                      "publishedAt": "2020-09-08T06:34:00Z",
                      "content": "LAGOS/LONDON (Reuters) - Four months ago, Abolaji Odunjo made a fundamental change to his business selling mobile phones in a bustling street market in Lagos: He started paying his suppliers in bitco… [+7646 chars]"
                  },
                  {
                      "source": {
                          "id": "reuters",
                          "name": "Reuters"
                      },
                      "author": "Alexis Akwagyiram",
                      "title": "How bitcoin met the real world in Africa - Reuters",
                      "description": "Four months ago, Abolaji Odunjo made a fundamental change to his business selling mobile phones in a bustling street market in Lagos: He started paying his suppliers in bitcoin.",
                      "url": "https://www.reuters.com/article/us-crypto-currencies-africa-insight-idUSKBN25Z0Q8",
                      "urlToImage": "https://s4.reutersmedia.net/resources/r/?m=02&d=20200908&t=2&i=1532552292&w=1200&r=LYNXMPEG870ER",
                      "publishedAt": "2020-09-08T06:14:00Z",
                      "content": "LAGOS/LONDON (Reuters) - Four months ago, Abolaji Odunjo made a fundamental change to his business selling mobile phones in a bustling street market in Lagos: He started paying his suppliers in bitco… [+7537 chars]"
                  },
                  {
                      "source": {
                          "id": "the-next-web",
                          "name": "The Next Web"
                      },
                      "author": "Satoshi Nakaboto",
                      "title": "Satoshi Nakaboto: ‘Iran to auction surplus energy to Bitcoin miners’",
                      "description": "Our robot colleague Satoshi Nakaboto writes about Bitcoin every fucking day. Welcome to another edition of Bitcoin Today, where I, Satoshi Nakaboto, tell you what’s been going on with Bitcoin in the past 24 hours. As Plato used to say: Time to learn some stuf…",
                      "url": "https://thenextweb.com/hardfork/2020/09/23/satoshi-nakaboto-iran-to-auction-surplus-energy-to-bitcoin-miners/",
                      "urlToImage": "https://img-cdn.tnwcdn.com/image/hardfork?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwp-content%2Fblogs.dir%2F1%2Ffiles%2F2019%2F08%2Fbitcoin_today-header_bitcoin_today.jpg&signature=30221b6a68049cc6bc3b58f3ddb38864",
                      "publishedAt": "2020-09-23T09:08:34Z",
                      "content": "Our robot colleague Satoshi Nakaboto writes about Bitcoin BTC every fucking day.\r\nWelcome to another edition of Bitcoin Today, where I, Satoshi Nakaboto, tell you whats been going on with Bitcoin in … [+3061 chars]"
                  },
                  {
                      "source": {
                          "id": "the-next-web",
                          "name": "The Next Web"
                      },
                      "author": "Satoshi Nakaboto",
                      "title": "Satoshi Nakaboto: ‘More than 823K addresses now hold more than 1 BTC’",
                      "description": "Our robot colleague Satoshi Nakaboto writes about Bitcoin every fucking day. Welcome to another edition of Bitcoin Today, where I, Satoshi Nakaboto, tell you what’s been going on with Bitcoin in the past 24 hours. As Sloterdijk used to say: If you love yourse…",
                      "url": "https://thenextweb.com/hardfork/2020/09/10/satoshi-nakaboto-more-than-823k-addresses-now-hold-more-than-1-btc/",
                      "urlToImage": "https://img-cdn.tnwcdn.com/image/hardfork?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwp-content%2Fblogs.dir%2F1%2Ffiles%2F2019%2F08%2Fbitcoin_today-header_bitcoin_today.jpg&signature=30221b6a68049cc6bc3b58f3ddb38864",
                      "publishedAt": "2020-09-10T09:00:54Z",
                      "content": "Our robot colleague Satoshi Nakaboto writes about Bitcoin BTC every fucking day.\r\nWelcome to another edition of Bitcoin Today, where I, Satoshi Nakaboto, tell you whats been going on with Bitcoin in … [+2989 chars]"
                  },
                  {
                      "source": {
                          "id": "the-next-web",
                          "name": "The Next Web"
                      },
                      "author": "Satoshi Nakaboto",
                      "title": "Satoshi Nakaboto: ‘Kraken just got a US banking license’",
                      "description": "Our robot colleague Satoshi Nakaboto writes about Bitcoin every fucking day. Welcome to another edition of Bitcoin Today, where I, Satoshi Nakaboto, tell you what’s been going on with Bitcoin in the past 24 hours. As Bentham used to say: Shop ’till you drop! …",
                      "url": "https://thenextweb.com/hardfork/2020/09/17/satoshi-nakaboto-kraken-just-got-a-us-banking-license/",
                      "urlToImage": "https://img-cdn.tnwcdn.com/image/hardfork?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwp-content%2Fblogs.dir%2F1%2Ffiles%2F2019%2F08%2Fbitcoin_today-header_bitcoin_today.jpg&signature=30221b6a68049cc6bc3b58f3ddb38864",
                      "publishedAt": "2020-09-17T09:22:01Z",
                      "content": "Our robot colleague Satoshi Nakaboto writes about Bitcoin every fucking day.\r\nWelcome to another edition of Bitcoin Today, where I, Satoshi Nakaboto, tell you whats been going on with Bitcoin in the … [+2756 chars]"
                  },
                  {
                      "source": {
                          "id": "the-next-web",
                          "name": "The Next Web"
                      },
                      "author": "Satoshi Nakaboto",
                      "title": "Satoshi Nakaboto: ‘Jack Dorsey slams Coinbase CEO for overlooking its users’ societal issues’",
                      "description": "Our robot colleague Satoshi Nakaboto writes about Bitcoin every fucking day. Welcome to another edition of Bitcoin Today, where I, Satoshi Nakaboto, tell you what’s been going on with Bitcoin in the past 24 hours. As Bentham used to say: Prepare to open the i…",
                      "url": "https://thenextweb.com/hardfork/2020/10/01/satoshi-nakaboto-jack-dorsey-slams-coinbase-ceo-for-overlooking-its-users-societal-issues/",
                      "urlToImage": "https://img-cdn.tnwcdn.com/image/hardfork?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwp-content%2Fblogs.dir%2F1%2Ffiles%2F2019%2F08%2Fbitcoin_today-header_bitcoin_today.jpg&signature=30221b6a68049cc6bc3b58f3ddb38864",
                      "publishedAt": "2020-10-01T09:07:02Z",
                      "content": "Our robot colleague Satoshi Nakaboto writes about Bitcoin every fucking day.\r\nWelcome to another edition of Bitcoin Today, where I, Satoshi Nakaboto, tell you whats been going on with Bitcoin in the … [+2945 chars]"
                  },
                  {
                      "source": {
                          "id": "the-next-web",
                          "name": "The Next Web"
                      },
                      "author": "Satoshi Nakaboto",
                      "title": "Satoshi Nakaboto: ‘Kazakhstan to pump $700M into crypto mining’",
                      "description": "Our robot colleague Satoshi Nakaboto writes about Bitcoin every fucking day. Welcome to another edition of Bitcoin Today, where I, Satoshi Nakaboto, tell you what’s been going on with Bitcoin in the past 24 hours. As Sloterdijk used to say: Yolo! Bitcoin pric…",
                      "url": "https://thenextweb.com/hardfork/2020/09/07/satoshi-nakaboto-kazakhstan-to-pump-700m-into-crypto-mining/",
                      "urlToImage": "https://img-cdn.tnwcdn.com/image/hardfork?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwp-content%2Fblogs.dir%2F1%2Ffiles%2F2019%2F08%2Fbitcoin_today-header_bitcoin_today.jpg&signature=30221b6a68049cc6bc3b58f3ddb38864",
                      "publishedAt": "2020-09-07T08:39:09Z",
                      "content": "Our robot colleague Satoshi Nakaboto writes about Bitcoin every fucking day.\r\nWelcome to another edition of Bitcoin Today, where I, Satoshi Nakaboto, tell you whats been going on with Bitcoin in the … [+2836 chars]"
                  },
                  {
                      "source": {
                          "id": "the-next-web",
                          "name": "The Next Web"
                      },
                      "author": "Satoshi Nakaboto",
                      "title": "Satoshi Nakaboto: ‘Researchers find new way to launder money with Bitcoin’",
                      "description": "Our robot colleague Satoshi Nakaboto writes about Bitcoin every fucking day. Welcome to another edition of Bitcoin Today, where I, Satoshi Nakaboto, tell you what’s been going on with Bitcoin in the past 24 hours. As Kant used to say: Prepare to open the imag…",
                      "url": "https://thenextweb.com/hardfork/2020/09/08/satoshi-nakaboto-researchers-find-new-way-to-launder-money-with-bitcoin/",
                      "urlToImage": "https://img-cdn.tnwcdn.com/image/hardfork?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwp-content%2Fblogs.dir%2F1%2Ffiles%2F2019%2F08%2Fbitcoin_today-header_bitcoin_today.jpg&signature=30221b6a68049cc6bc3b58f3ddb38864",
                      "publishedAt": "2020-09-08T09:15:23Z",
                      "content": "Our robot colleague Satoshi Nakaboto writes about Bitcoin BTC every fucking day.\r\nWelcome to another edition of Bitcoin Today, where I, Satoshi Nakaboto, tell you whats been going on with Bitcoin in … [+2786 chars]"
                  },
                  {
                      "source": {
                          "id": "the-next-web",
                          "name": "The Next Web"
                      },
                      "author": "Satoshi Nakaboto",
                      "title": "Satoshi Nakaboto: ‘Just Eat customers in France can now order food with Bitcoin’",
                      "description": "Our robot colleague Satoshi Nakaboto writes about Bitcoin every fucking day. Welcome to another edition of Bitcoin Today, where I, Satoshi Nakaboto, tell you what’s been going on with Bitcoin in the past 24 hours. As de Beauvoir used to say: Let’s pull this r…",
                      "url": "https://thenextweb.com/hardfork/2020/09/09/satoshi-nakaboto-just-eat-customers-in-france-can-now-order-food-with-bitcoin/",
                      "urlToImage": "https://img-cdn.tnwcdn.com/image/hardfork?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwp-content%2Fblogs.dir%2F1%2Ffiles%2F2019%2F08%2Fbitcoin_today-header_bitcoin_today.jpg&signature=30221b6a68049cc6bc3b58f3ddb38864",
                      "publishedAt": "2020-09-09T09:34:59Z",
                      "content": "Our robot colleague Satoshi Nakaboto writes about Bitcoin BTC every fucking day.\r\nWelcome to another edition of Bitcoin Today, where I, Satoshi Nakaboto, tell you whats been going on with Bitcoin in … [+2831 chars]"
                  },
                  {
                      "source": {
                          "id": "the-next-web",
                          "name": "The Next Web"
                      },
                      "author": "Satoshi Nakaboto",
                      "title": "Satoshi Nakaboto: ‘Bitcoin hashrate hits new all-time high’",
                      "description": "Our robot colleague Satoshi Nakaboto writes about Bitcoin every fucking day. Welcome to another edition of Bitcoin Today, where I, Satoshi Nakaboto, tell you what’s been going on with Bitcoin in the past 24 hours. As Marie Curie used to say: Your heart must g…",
                      "url": "https://thenextweb.com/hardfork/2020/09/14/satoshi-nakaboto-bitcoin-hashrate-hits-new-all-time-high/",
                      "urlToImage": "https://img-cdn.tnwcdn.com/image/hardfork?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwp-content%2Fblogs.dir%2F1%2Ffiles%2F2019%2F08%2Fbitcoin_today-header_bitcoin_today.jpg&signature=30221b6a68049cc6bc3b58f3ddb38864",
                      "publishedAt": "2020-09-14T09:35:48Z",
                      "content": "Our robot colleague Satoshi Nakaboto writes about Bitcoin BTC every fucking day.\r\nWelcome to another edition of Bitcoin Today, where I, Satoshi Nakaboto, tell you whats been going on with Bitcoin in … [+2900 chars]"
                  },
                  {
                      "source": {
                          "id": "the-next-web",
                          "name": "The Next Web"
                      },
                      "author": "Satoshi Nakaboto",
                      "title": "Satoshi Nakaboto: ‘Swiss health insurer now accepts Bitcoin as payment’",
                      "description": "Our robot colleague Satoshi Nakaboto writes about Bitcoin every fucking day. Welcome to another edition of Bitcoin Today, where I, Satoshi Nakaboto, tell you what’s been going on with Bitcoin in the past 24 hours. As Kant used to say: Your imagination is the …",
                      "url": "https://thenextweb.com/hardfork/2020/09/01/satoshi-nakaboto-swiss-health-insurer-now-accepts-bitcoin-as-payment/",
                      "urlToImage": "https://img-cdn.tnwcdn.com/image/hardfork?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwp-content%2Fblogs.dir%2F1%2Ffiles%2F2019%2F08%2Fbitcoin_today-header_bitcoin_today.jpg&signature=30221b6a68049cc6bc3b58f3ddb38864",
                      "publishedAt": "2020-09-01T08:57:56Z",
                      "content": "Our robot colleague Satoshi Nakaboto writes about Bitcoin BTC every fucking day.\r\nWelcome to another edition of Bitcoin Today, where I, Satoshi Nakaboto, tell you whats been going on with Bitcoin in … [+2863 chars]"
                  },
                  {
                      "source": {
                          "id": "the-next-web",
                          "name": "The Next Web"
                      },
                      "author": "Satoshi Nakaboto",
                      "title": "Satoshi Nakaboto: ‘Bitcoin drops another 3% as stock markets continue to fall’",
                      "description": "Our robot colleague Satoshi Nakaboto writes about Bitcoin every fucking day. Welcome to another edition of Bitcoin Today, where I, Satoshi Nakaboto, tell you what’s been going on with Bitcoin in the past 24 hours. As Sloterdijk used to say: Your imagination i…",
                      "url": "https://thenextweb.com/hardfork/2020/09/24/satoshi-nakaboto-bitcoin-drops-another-3-as-stock-markets-continue-to-fall/",
                      "urlToImage": "https://img-cdn.tnwcdn.com/image/hardfork?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwp-content%2Fblogs.dir%2F1%2Ffiles%2F2019%2F08%2Fbitcoin_today-header_bitcoin_today.jpg&signature=30221b6a68049cc6bc3b58f3ddb38864",
                      "publishedAt": "2020-09-24T08:32:32Z",
                      "content": "Our robot colleague Satoshi Nakaboto writes about Bitcoin BTC every fucking day.\r\nWelcome to another edition of Bitcoin Today, where I, Satoshi Nakaboto, tell you whats been going on with Bitcoin in … [+2865 chars]"
                  },
                  {
                      "source": {
                          "id": "the-next-web",
                          "name": "The Next Web"
                      },
                      "author": "Satoshi Nakaboto",
                      "title": "Satoshi Nakaboto: ‘Bitcoin and blockchain tech are the future of Twitter, Jack Dorsey says’",
                      "description": "Our robot colleague Satoshi Nakaboto writes about Bitcoin every fucking day. Welcome to another edition of Bitcoin Today, where I, Satoshi Nakaboto, tell you what’s been going on with Bitcoin in the past 24 hours. As Schopenhauer used to say: Intelligence is …",
                      "url": "https://thenextweb.com/hardfork/2020/09/30/satoshi-nakaboto-bitcoin-and-blockchain-tech-are-the-future-of-twitter-jack-dorsey-says/",
                      "urlToImage": "https://img-cdn.tnwcdn.com/image/hardfork?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwp-content%2Fblogs.dir%2F1%2Ffiles%2F2019%2F08%2Fbitcoin_today-header_bitcoin_today.jpg&signature=30221b6a68049cc6bc3b58f3ddb38864",
                      "publishedAt": "2020-09-30T08:59:53Z",
                      "content": "Our robot colleague Satoshi Nakaboto writes about Bitcoin BTC every fucking day.\r\nWelcome to another edition of Bitcoin Today, where I, Satoshi Nakaboto, tell you whats been going on with Bitcoin in … [+2930 chars]"
                  },
                  {
                      "source": {
                          "id": "the-next-web",
                          "name": "The Next Web"
                      },
                      "author": "Satoshi Nakaboto",
                      "title": "Satoshi Nakaboto: ‘Bitcoin sees highest trading volume in 118 days’",
                      "description": "Our robot colleague Satoshi Nakaboto writes about Bitcoin every fucking day. Welcome to another edition of Bitcoin Today, where I, Satoshi Nakaboto, tell you what’s been going on with Bitcoin in the past 24 hours. As Hegel used to say: Do what you love and yo…",
                      "url": "https://thenextweb.com/hardfork/2020/09/11/satoshi-nakaboto-bitcoin-sees-highest-trading-volume-in-118-days/",
                      "urlToImage": "https://img-cdn.tnwcdn.com/image/hardfork?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwp-content%2Fblogs.dir%2F1%2Ffiles%2F2019%2F08%2Fbitcoin_today-header_bitcoin_today.jpg&signature=30221b6a68049cc6bc3b58f3ddb38864",
                      "publishedAt": "2020-09-11T08:14:23Z",
                      "content": "Our robot colleague Satoshi Nakaboto writes about Bitcoin BTC every fucking day.\r\nWelcome to another edition of Bitcoin Today, where I, Satoshi Nakaboto, tell you whats been going on with Bitcoin in … [+2876 chars]"
                  },
                  {
                      "source": {
                          "id": "the-next-web",
                          "name": "The Next Web"
                      },
                      "author": "Satoshi Nakaboto",
                      "title": "Satoshi Nakaboto: ‘MicroStrategy buys another $175M in Bitcoin’",
                      "description": "Our robot colleague Satoshi Nakaboto writes about Bitcoin every fucking day. Welcome to another edition of Bitcoin Today, where I, Satoshi Nakaboto, tell you what’s been going on with Bitcoin in the past 24 hours. As Descartes used to say: Whip it, whip it, w…",
                      "url": "https://thenextweb.com/hardfork/2020/09/16/satoshi-nakaboto-microstrategy-buys-another-175m-in-bitcoin/",
                      "urlToImage": "https://img-cdn.tnwcdn.com/image/hardfork?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwp-content%2Fblogs.dir%2F1%2Ffiles%2F2019%2F08%2Fbitcoin_today-header_bitcoin_today.jpg&signature=30221b6a68049cc6bc3b58f3ddb38864",
                      "publishedAt": "2020-09-16T08:40:02Z",
                      "content": "Our robot colleague Satoshi Nakaboto writes about Bitcoin BTC every fucking day.\r\nWelcome to another edition of Bitcoin Today, where I, Satoshi Nakaboto, tell you whats been going on with Bitcoin in … [+2886 chars]"
                  }
              ]
              }

      async presentAlert(title, msg) {
        const alert = await this.alertController.create({
          header: title,
          message: msg,
          buttons: ['OK']
        });
        await alert.present();
      }

  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
      position: 'bottom',
    });
    toast.present();
  }

  noInternetConnection() {
    this.presentToast("No internet connection");
  }

  noInternetConnectionSubscribe(){
    this.network.onDisconnect().subscribe(() => {
      this.noInternetConnection();
    });
    this.network.onConnect().subscribe(() => {
    });
  }

  isInternet() {
    if (this.network.type === 'none') {
      return false;
    }
    else{
      return false;
    }
  }


  readMore(text){
   if(text.length == 200){
     return text;
   }
   else{
     return text.substr(0, 200);
   }
  }

  ionicStorageSet(){
  localStorage.setItem("storageData", JSON.stringify(this.storageData));
  //  this.nativeStorage.setItem('storageData', JSON.stringify(this.storageData))
  // .then(
  //   () => console.log('Stored item!'),
  //   error => console.error('Error storing item', error)
  // );
    this.ionicStorageGet();
  }

  ionicStorageGet(){
    if(localStorage.getItem("storageData")){
      this.storageData  =  JSON.parse(localStorage.getItem("storageData"))
    }else{
      this.storageData['visitors'] = [];
    }
  //   this.nativeStorage.getItem('myitem')
  // .then(
  //   data =>{
  //     console.log(data)
  //     this.storageData = JSON.parse(data);
  //   },
  //   error => {
  //     alert(JSON.stringify(error))
  //   }
  // );
  }

  ionicStorageClear(){
    this.nativeStorage.clear();
  }
}
