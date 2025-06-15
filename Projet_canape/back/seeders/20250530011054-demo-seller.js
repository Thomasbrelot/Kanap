export async function up(queryInterface, Sequelize) {
  await queryInterface.bulkInsert('Products', [
    // Les 8 canapés d'origine ici...
    {
      name: 'Kanap Sinopé',
      price: 1849,
      imageUrl: 'kanap01.jpeg',
      description:
        'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      altTxt: "Photo d'un canapé bleu, deux places",
      colors: JSON.stringify(['Blue', 'White', 'Black']),
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Kanap Cyllène',
      price: 4499,
      imageUrl: 'kanap02.jpeg',
      description:
        'Morbi nec erat aliquam, sagittis urna non, laoreet justo. Etiam sit amet interdum diam, at accumsan lectus.',
      altTxt: "Photo d'un canapé jaune et noir, quattre places",
      colors: JSON.stringify(['Black/Yellow', 'Black/Red']),
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Kanap Calycé',
      price: 3199,
      imageUrl: 'kanap03.jpeg',
      description:
        'Pellentesque fermentum arcu venenatis ex sagittis accumsan. Vivamus lacinia fermentum tortor.Mauris imperdiet tellus ante.',
      altTxt: "Photo d'un canapé d'angle, vert, trois places",
      colors: JSON.stringify(['Green', 'Red', 'Orange']),
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Kanap Autonoé',
      price: 1499,
      imageUrl: 'kanap04.jpeg',
      description:
        'Donec mattis nisl tortor, nec blandit sapien fermentum at. Proin hendrerit efficitur fringilla. Lorem ipsum dolor sit amet.',
      altTxt: "Photo d'un canapé rose, une à deux place",
      colors: JSON.stringify(['Pink', 'White']),
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Kanap Eurydomé',
      price: 2249,
      imageUrl: 'kanap05.jpeg',
      description:
        'Ut laoreet vulputate neque in commodo. Suspendisse maximus quis erat in sagittis. Donec hendrerit purus at congue aliquam.',
      altTxt: "Photo d'un canapé gris, trois places",
      colors: JSON.stringify(['Grey', 'Purple', 'Blue']),
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Kanap Hélicé',
      price: 999,
      imageUrl: 'kanap06.jpeg',
      description:
        'Curabitur vel augue sit amet arcu aliquet interdum. Integer vel quam mi. Morbi nec vehicula mi, sit amet vestibulum.',
      altTxt: "Photo d'un canapé gris, deux places",
      colors: JSON.stringify(['Grey', 'Navy']),
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Kanap Thyoné',
      price: 1999,
      imageUrl: 'kanap07.jpeg',
      description:
        'EMauris imperdiet tellus ante, sit amet pretium turpis molestie eu. Vestibulum et egestas eros. Vestibulum non lacus orci.',
      altTxt: "Photo d'un canapé rouge, deux places",
      colors: JSON.stringify(['Red', 'Silver']),
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Kanap orthosie',
      price: 3999,
      imageUrl: 'kanap08.jpeg',
      description:
        'Mauris molestie laoreet finibus. Aenean scelerisque convallis lacus at dapibus. Morbi imperdiet enim metus rhoncus.',
      altTxt: "Photo d'un canapé rose, trois places",
      colors: JSON.stringify(['Pink', 'Brown', 'Yellow', 'White']),
      createdAt: new Date(),
      updatedAt: new Date(),
    },

    // Nouveaux canapés uniques
    {
      name: 'Kanap Aéro',
      price: 2699,
      imageUrl: 'kanap01.jpeg',
      description:
        'Un canapé au design épuré et confortable, parfait pour les petits espaces modernes.',
      altTxt: "Photo d'un canapé bleu élégant, deux places",
      colors: JSON.stringify(['Light Blue', 'White']),
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Kanap Solaris',
      price: 3799,
      imageUrl: 'kanap02.jpeg',
      description:
        'Canapé spacieux aux teintes chaudes, idéal pour apporter une touche de vie à votre salon.',
      altTxt: "Photo d'un canapé jaune et noir dynamique, quatre places",
      colors: JSON.stringify(['Sun Yellow', 'Charcoal Black']),
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Kanap Forestia',
      price: 2899,
      imageUrl: 'kanap03.jpeg',
      description:
        'Un canapé d’angle robuste aux couleurs naturelles pour un intérieur cosy et chaleureux.',
      altTxt: "Photo d'un canapé vert profond, trois places",
      colors: JSON.stringify(['Forest Green', 'Burnt Orange']),
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Kanap Blossom',
      price: 1599,
      imageUrl: 'kanap04.jpeg',
      description:
        'Canapé rose délicat et confortable, parfait pour une ambiance douce et féminine.',
      altTxt: "Photo d'un canapé rose pastel, une à deux places",
      colors: JSON.stringify(['Soft Pink', 'Ivory White']),
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]);
}
export async function down(queryInterface, Sequelize) {
  await queryInterface.bulkDelete('Products', null, {});
}
