export type Article = {
  _id: string;
  createdAt: string;
  author: Author;
  title: string;
  content: string;
};

type Author = {
  _id: string;
  firstname: string;
  lastname: string;
};

export const articles: Article[] = [
  {
    _id: "5ecfb6a0ed3d0f9552ecd661",
    createdAt: "Fri Oct 21 2011 13:30:13 GMT+0000 (UTC)",
    author: {
      _id: "5ecfb6a0f3fd8da25cef96dd",
      firstname: "Hill",
      lastname: "Newton"
    },
    title:
      "Cupidatat magna mollit nulla magna reprehenderit excepteur eu est do.",
    content:
      "Magna eiusmod enim est cupidatat amet elit veniam laboris sit. Lorem elit ex dolor et ullamco fugiat esse. Incididunt exercitation amet in proident laborum esse est nisi esse dolore. Eiusmod exercitation aute duis deserunt deserunt sint dolor ipsum nisi anim cillum id commodo aliquip. Ex irure magna occaecat cupidatat consequat id. Pariatur irure amet duis dolor deserunt deserunt in dolore enim minim sint enim.\n\nEa elit quis minim aute consectetur labore do adipisicing velit nulla tempor excepteur incididunt amet. Ex ea deserunt eiusmod commodo ipsum adipisicing. Sint nisi eu aliqua ex excepteur velit incididunt cillum mollit id irure mollit velit. Aute amet eiusmod id adipisicing aute exercitation quis adipisicing ex exercitation commodo laborum officia. Lorem deserunt deserunt voluptate dolor est enim eu do dolore Lorem cupidatat ex. Eiusmod pariatur et nisi laborum officia tempor incididunt anim irure laborum minim fugiat sunt laboris. Minim proident enim officia velit amet veniam ut sunt eu id.\n\nOfficia in enim cupidatat deserunt deserunt. Officia quis aliqua id aute ipsum deserunt eu incididunt id nulla. Dolor qui velit sunt ea elit. Id deserunt tempor magna labore. Non Lorem sunt nulla labore nisi laboris exercitation ea aute."
  },
  {
    _id: "5ecfb6a0f30fa0019af068cf",
    createdAt: "Fri Apr 25 2003 14:01:33 GMT+0000 (UTC)",
    author: {
      _id: "5ecfb6a0abd6e469aeb4c929",
      firstname: "Kris",
      lastname: "Welch"
    },
    title:
      "Labore adipisicing consectetur dolor nostrud et pariatur anim irure et mollit.",
    content:
      "Esse occaecat minim sunt nulla qui proident eu fugiat. Magna proident sit officia pariatur labore. Nostrud aute cupidatat adipisicing anim officia reprehenderit consequat exercitation sunt labore ullamco incididunt. Laborum nulla pariatur qui cupidatat ex nostrud est magna occaecat anim sit in nostrud sunt. Eu quis non aliqua irure minim aliqua commodo mollit.\n\nIn laborum aute exercitation deserunt sint ipsum culpa eiusmod. Ad minim qui ullamco laborum esse ex qui nisi eiusmod velit excepteur. Deserunt adipisicing amet cillum ea id magna nostrud tempor aliqua incididunt irure excepteur adipisicing non. In Lorem do dolor nostrud enim dolore incididunt ea anim. Ad do magna ea officia sit Lorem consequat ipsum ipsum laborum minim dolor ullamco. Reprehenderit id consequat magna proident duis nisi pariatur nulla ea exercitation qui ex aute commodo. Exercitation aliquip culpa dolore Lorem qui.\n\nSunt ipsum qui nulla excepteur excepteur consectetur nisi. Fugiat dolor et aliquip eu incididunt officia officia dolore quis quis aliquip elit. Esse adipisicing mollit ad dolore irure in nulla fugiat. Consectetur dolor tempor adipisicing fugiat ex ullamco."
  },
  {
    _id: "5ecfb6a028c76f4d98d3d0de",
    createdAt: "Thu May 10 2001 16:22:51 GMT+0000 (UTC)",
    author: {
      _id: "5ecfb6a0e6cf3900d49de793",
      firstname: "Herrera",
      lastname: "Whitley"
    },
    title:
      "Et duis exercitation ex Lorem deserunt aliquip esse laboris cupidatat dolore culpa nostrud.",
    content:
      "Laborum dolor adipisicing dolor ipsum nostrud magna. Aliquip velit ut est esse sit magna ex deserunt amet dolor. Ad est velit culpa enim. Sit nostrud fugiat tempor duis culpa commodo nostrud aliqua elit in tempor voluptate.\n\nAnim magna laboris proident laboris consequat. Cupidatat ullamco do ex tempor aliqua ad dolor velit. Nostrud et qui eu aute exercitation. Incididunt nisi exercitation eu do sunt sit aliquip anim dolor deserunt Lorem laborum duis. Proident cillum ad reprehenderit est exercitation do deserunt irure. Nostrud fugiat eiusmod Lorem incididunt.\n\nNon reprehenderit sint commodo tempor tempor excepteur proident ex culpa reprehenderit nisi consectetur. Non velit irure nulla reprehenderit. Eu ipsum anim et exercitation tempor. Lorem tempor id cupidatat do enim tempor nisi culpa veniam duis. Ad anim reprehenderit quis labore cillum. Aliquip proident sunt cupidatat exercitation ex Lorem. Non enim nisi culpa id ad enim reprehenderit sint labore amet est."
  },
  {
    _id: "5ecfb6a01b9e8709cd4485e9",
    createdAt: "Mon Dec 07 2015 03:02:02 GMT+0000 (UTC)",
    author: {
      _id: "5ecfb6a0fc7fb1c4990871e7",
      firstname: "Mercado",
      lastname: "Gutierrez"
    },
    title: "Velit ad consequat aute reprehenderit nisi non adipisicing.",
    content:
      "Ex duis minim nulla reprehenderit quis ea voluptate laboris. Exercitation qui est nostrud sint culpa ex reprehenderit nisi qui in. Consectetur voluptate fugiat minim quis velit incididunt labore aliqua mollit.\n\nEiusmod reprehenderit adipisicing enim duis adipisicing culpa ex. Quis dolore do id tempor magna sit aliqua ad irure consectetur nulla. Sit sint nisi cillum dolor nostrud tempor consectetur est mollit. Dolore culpa minim mollit culpa mollit nulla culpa consectetur. Quis consectetur cillum aute irure labore officia sunt incididunt et velit.\n\nDuis dolore consequat pariatur fugiat cillum. Sit sit est quis aliqua incididunt aute consequat occaecat do sint id irure sint. Sunt ex id fugiat consequat labore ipsum. Cillum consectetur cupidatat laboris cupidatat excepteur quis aute fugiat. Excepteur proident cupidatat id nostrud est exercitation voluptate sunt proident anim voluptate."
  },
  {
    _id: "5ecfb6a049fd7985cc1eeb16",
    createdAt: "Sun Oct 05 2014 05:02:19 GMT+0000 (UTC)",
    author: {
      _id: "5ecfb6a0afc762b5e7ae3b23",
      firstname: "Ellison",
      lastname: "Hyde"
    },
    title: "Non Lorem duis aute pariatur eu tempor.",
    content:
      "Lorem dolore cillum velit adipisicing officia duis non aliqua aliquip nulla et anim eiusmod. Fugiat irure laboris sunt magna cupidatat. Est nisi veniam officia non amet pariatur ex sit do est aliquip ipsum. Enim laborum nulla laboris aliqua.\n\nMinim consequat laborum qui laboris nisi. Eu id mollit Lorem ex nisi ut proident ex ad. Reprehenderit magna officia eiusmod minim labore et. Sunt do eiusmod ad ex ad ea excepteur sunt exercitation consectetur ullamco. Est eu dolor enim nostrud aliqua et fugiat sit pariatur consectetur id.\n\nMagna cillum esse excepteur non nisi ea ea incididunt irure reprehenderit sunt. Nisi in incididunt et magna do sit. Consectetur laboris velit commodo sint tempor adipisicing cupidatat. Non enim minim ipsum exercitation consequat anim qui cillum cillum velit amet. Lorem in elit aute esse officia ea aute."
  },
  {
    _id: "5ecfb6a0a145051545794515",
    createdAt: "Mon Sep 10 2012 19:17:31 GMT+0000 (UTC)",
    author: {
      _id: "5ecfb6a0d02217ca2dd17550",
      firstname: "Hallie",
      lastname: "Good"
    },
    title: "Consequat quis ullamco ipsum est cupidatat.",
    content:
      "Culpa excepteur irure ex aliqua elit laboris. Ea deserunt amet ipsum anim dolor sit ullamco ex aliquip aliquip dolore elit qui. Anim mollit ullamco labore sit tempor Lorem. Et enim nisi labore anim. Laboris reprehenderit enim aliqua eu sit est consectetur officia ex pariatur duis in deserunt. Non in exercitation est officia.\n\nEiusmod excepteur irure aliqua deserunt dolor amet ullamco exercitation officia proident. Officia sint nostrud tempor culpa anim irure dolore ipsum incididunt. Ipsum reprehenderit dolore nisi aliqua cillum Lorem cupidatat quis ullamco ex cillum. Laborum aute do quis ut ipsum excepteur fugiat exercitation laboris. Aliqua commodo eiusmod nisi duis et sint magna dolore ipsum voluptate enim.\n\nCupidatat qui officia est eiusmod commodo aliqua ut et aute Lorem. Deserunt nisi dolor voluptate ad eu commodo commodo id nisi officia. Laboris ad in consectetur Lorem. Aliqua ullamco ut est in aute dolore Lorem sint aliqua."
  },
  {
    _id: "5ecfb6a023fecf3a8787762e",
    createdAt: "Tue Apr 02 2002 23:36:17 GMT+0000 (UTC)",
    author: {
      _id: "5ecfb6a0babd099b5ba78eed",
      firstname: "Roth",
      lastname: "Hopper"
    },
    title: "Amet enim irure fugiat culpa quis labore ad.",
    content:
      "Commodo quis ad aute elit aliqua dolor aliquip amet ea cillum magna id quis mollit. Nisi enim mollit esse est eiusmod cillum nostrud aliquip. Eu deserunt labore exercitation veniam.\n\nNon labore id ea aute anim duis consectetur nostrud enim elit voluptate aliqua do esse. Esse do sunt duis dolore sunt ex fugiat excepteur et excepteur anim commodo dolor deserunt. Commodo culpa dolor labore reprehenderit magna laborum exercitation anim et anim. Eu do amet ullamco labore consectetur ad magna sint voluptate proident. Qui do culpa dolore ullamco qui ut veniam reprehenderit amet. Ullamco consectetur non elit reprehenderit sint aute nisi laborum cupidatat qui.\n\nTempor occaecat ut consectetur consequat sint sint laborum in do ex aute. Velit ullamco laborum quis et adipisicing dolore consectetur. Sunt dolore aute cupidatat ad nostrud Lorem velit ut voluptate incididunt. Ex non incididunt ut velit ullamco qui irure fugiat sunt deserunt nulla anim proident. Ut excepteur id amet aliqua enim pariatur officia sit culpa labore. Deserunt dolore sunt esse cupidatat culpa ea laboris."
  },
  {
    _id: "5ecfb6a091cf3824a7b56175",
    createdAt: "Sat Feb 19 2005 10:12:28 GMT+0000 (UTC)",
    author: {
      _id: "5ecfb6a0f37c1569916849ee",
      firstname: "Alvarado",
      lastname: "Clements"
    },
    title:
      "Dolor et laboris sint dolore dolore occaecat sunt laboris aliqua ullamco.",
    content:
      "Exercitation exercitation voluptate consequat labore magna consectetur enim proident dolore excepteur. Laboris eiusmod ex reprehenderit minim ad aute aliqua consequat nulla est aliqua officia cupidatat. Pariatur ut veniam et sit voluptate sit sint duis. Nisi aliqua adipisicing ad ad anim irure sint. Non do consequat enim qui sit eiusmod consectetur excepteur veniam excepteur. Nostrud dolore eiusmod ipsum amet minim.\n\nVelit officia pariatur eu qui dolor aliqua nisi. Excepteur ex eiusmod incididunt amet. Duis dolore Lorem proident aliqua quis laboris in mollit duis veniam. Ut ipsum dolor id consequat consectetur aliquip nulla laboris culpa aliqua. Cillum consectetur labore consectetur proident pariatur officia irure sit incididunt ad labore adipisicing do qui.\n\nFugiat ex ea mollit nisi excepteur quis et aute eu ipsum do et culpa. Deserunt in cupidatat aliqua esse tempor laborum commodo pariatur. Fugiat commodo aute magna consequat. Excepteur duis qui et in do."
  },
  {
    _id: "5ecfb6a0040e11cbc771cfde",
    createdAt: "Tue Jun 26 2018 07:26:33 GMT+0000 (UTC)",
    author: {
      _id: "5ecfb6a0226d96789aec4257",
      firstname: "Louisa",
      lastname: "Frye"
    },
    title: "Officia eiusmod sit exercitation aliquip magna.",
    content:
      "Ut eu veniam est sunt ea veniam minim anim. Do deserunt reprehenderit eiusmod id aliqua exercitation voluptate. Duis occaecat sint ea est qui officia consectetur cillum occaecat incididunt voluptate. Enim ex laborum in ut minim. Elit aliquip consequat occaecat aliqua enim consequat.\n\nConsectetur ad ea ex ea aliquip aute sunt magna qui irure. Fugiat duis ea sint labore minim magna ea tempor aliquip. Reprehenderit cupidatat minim exercitation est eu exercitation excepteur amet voluptate et sit veniam cillum ea. Eiusmod id labore ullamco ipsum sint. Deserunt minim quis aute nisi duis. Amet magna sint consequat irure culpa nulla reprehenderit fugiat amet irure incididunt duis.\n\nAliqua tempor commodo minim velit minim cillum ut ex voluptate nisi occaecat. Id laborum ut labore nostrud ullamco duis ut ea laboris. Ut dolore cupidatat deserunt ea adipisicing labore culpa elit quis."
  },
  {
    _id: "5ecfb6a0ead47ba9f0c4de1a",
    createdAt: "Thu Dec 12 2013 18:57:56 GMT+0000 (UTC)",
    author: {
      _id: "5ecfb6a09ff9326c12888375",
      firstname: "Tonya",
      lastname: "Bullock"
    },
    title:
      "Nulla voluptate ipsum Lorem id id consectetur nulla adipisicing et exercitation nostrud.",
    content:
      "Esse aute labore sunt sit sit elit nulla exercitation exercitation excepteur non sit. Ipsum velit laboris aliqua aute voluptate ullamco voluptate qui magna commodo adipisicing culpa cupidatat consequat. Id magna aliqua et commodo ea ad minim veniam excepteur. Elit amet quis magna veniam cillum id enim et irure officia occaecat cupidatat veniam reprehenderit. Ut adipisicing sit quis enim laborum adipisicing ullamco consequat enim ad ea anim occaecat.\n\nExercitation excepteur aliqua consequat in do nulla anim proident aliquip qui amet et velit magna. Esse tempor Lorem nostrud do nostrud incididunt ullamco pariatur do elit. Reprehenderit dolor voluptate magna aliqua ea nisi Lorem exercitation ea incididunt dolore ipsum culpa. Est ea culpa duis aliqua ullamco consectetur sunt labore nisi excepteur dolor proident enim sunt.\n\nOfficia aute consectetur tempor est. Ex irure mollit nisi fugiat. Ex aliquip incididunt eu incididunt laborum nisi consequat excepteur ut veniam consectetur voluptate. Aliqua velit officia laborum dolore et mollit fugiat."
  }
];