<template>
  <div class="WINE">
    <v-container>
      <h1 class="text-center">WINE</h1>
      <v-row>
        <v-col v-for="item in items" :key="item.id" cols="12" md="4">
          <v-card outlined class="mx-auto">
            <v-img class="white--text align-end" height="150px" :src="item.src">
              <v-card-title>{{ item.title }}</v-card-title>
            </v-img>
            <v-card-subtitle class="pb-0">{{ item.subtitle }}</v-card-subtitle>
            <v-card-text class="text--primary">
              <div>{{ item.description }}</div>
            </v-card-text>
            <v-card-actions>
              <nuxt-link to="/buy">
                <v-btn rounded color="grey darken-4" dark> สั่งซื้อ </v-btn>
              </nuxt-link>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'LatestPost',
  data: () => ({
    show: false,
    items: [
      {
        id: 1,
        title: 'Santa Helena',
        subtitle:
          'Deep cherry red in color. Red fruits such as berries predominate on the nose, as well as spicy pepper notes which enhance the complexity of the wine. Hints of chocolate meld with subtle mint notes lending the wine freshness. A wine with good volume and structure on the palate. Ripe tannins with a balanced, persistent finish.',
        description: '฿700.00 / ฿1000.00',
        src: require('../images/OIP.jpg'),
      },
      {
        id: 2,
        title: 'Yering',
        subtitle:
          'This is a spicy, brambly fruited Shiraz from one of the Yarra s longstanding producers. Aromas of tangy fruit, cocktail bitters,dark chocolate, black olives, dried violets and an earthy funk are followed by an equally spicy palate. The oak can be felt here, as can the alcohol—but just a touch—and the chalky savory tannins and forrest-berry fruit add charm.',
        description: '฿700.00 / ฿1000.00',
        src: require('../images/yarra.jpg'),
      },
      {
        id: 3,
        title: 'Castello Banfi ',
        subtitle:
          'Celebrating the best Tuscan tradition Banfi offers a family of Chianti wines varied and complementary, unique in its style. Ruby red color. Intense bouquet with varietal notes of cherry, plum and violet , rich flavours, supple tannins and good acidity. Fresh, balanced, typical.A wine for every dish, matches meat dishes superbly',
        description: '฿700.00 / ฿1000.00',
        src: require('../images/banfi.jpg'),
      },
      {
        id: 4,
        title: 'ANTINORI',
        subtitle:
          'A wine of Italy by Antinori brand.Made from grape combination of 50% Tuscan Trebbiano and Malvasia, 35% Pinot Blanc and Pinot Grigio, 15% Rhine Riesling.The tasting notes is straw yellow in color, the wine is elegant and classy in its aromas, which recall pineapple and peach fruit and white flowers. Full and savory a good aromatic persistence, ',
        description: '฿700.00 / ฿1000.00',
        src: require('../images/1.jpg'),
      },
      {
        id: 5,
        title: 'LUNGAROTTI',
        subtitle:
          'A wine of Umbria in Italy. LungarottiPinot Grigio dell Umbria Made from grape combination of Pinot Grigio 100%.This wine is yellow in colour with greenish reflections, with a delicate bouquet of herbs, hay, wild mint and pistachio, dry on the palate, with a pleasant softness, fragrant acidity and long finish.250 ml and 500 ml bottle in a gift box',
        description: '฿700.00 / ฿1000.00',
        src: require('../images/DOP1.jpg'),
      },
      {
        id: 6,
        title: 'ROBERT MONDAVI',
        subtitle:
          'The rich, vibrant essence of Chardonnay: Bright, enticing fruity aromas - juicy Honeycrisp apple, citrus-laced Asian pear, ripe melon and fresh quince - are intermingled with vanilla-scented crème brûlée, subtle minerality, and traces of warm hazelnut and clove. These elements segue seamlessly to the palate, fering a lush, creamy mouth feofel impeccably ',
        description: '฿700.00 / ฿1000.00',
        src: require('../images/D.jpg'),
      },
      {
        id: 7,
        title: 'RADIKON',
        subtitle:
          'This was maybe the best bottle of Radikon Orange wine I have ever had. Had a apricot skin color in the glass and celestial, I kid you not, celestial aromas of brown sugar, red-Pinot-like fruit, minerals and stone fruit skins. The palate has dazzling babbling brook-like minerality along with stellar concentration, great delineation and a long fruit-soaked finish.',
        description: '฿700.00 / ฿1000.00',
        src: require('../images/radikon2.jpg'),
      },
      {
        id: 8,
        title: 'PRIMOSIC',
        subtitle:
          'Intense golden-yellow colour. Characteristic and dry, the fragrance evokes acacia flowers, with undertones of bitter orange rind with pervasive mineral sensation. The finish is reminiscent of apricot stone and chestnut pulp.In einem Land, das seit jeher für guten Wein bekannt ist, verkörpert das Weingut Primosic eine',
        description: '฿700.00 / ฿1000.00',
        src: require('../images/pri.jpg'),
      },
      {
        id: 9,
        title: 'QUADY',
        subtitle:
          'Made from 100% Orange Muscat, Essensia has an aroma reminiscent of Orange Blossom and Apricot. The wine is lightly fortified to about 15% alcohol and aged for 3 months in French Oak. Its relatively high acidity makes it taste balanced, even with its considerable sweetness, more like a taste of fresh fruit.Best served chilled',
        description: '฿700.00 / ฿1000.00',
        src: require('../images/qua.jpg'),
      },
      {
        id: 10,
        title: 'WARRE S',
        subtitle:
          '“Medium red. Smoky, high-toned aromas of cassis, marzipan and maple syrup. Smooth, fat and super ripe, with a generous texture and ample balancing acidity. Fresh ruby port but not at all aggressive”. Stephen Tanzer, The Wine Analyst Deep, rich ruby colour. On the nose bursting with lovely black fruit combined with a spicy complexity.',
        description: '฿700.00 / ฿1000.00',
        src: require('../images/wa.jpg'),
      },
      {
        id: 11,
        title: 'GRAHAM S',
        subtitle:
          'Graham’s 40 Year Old Tawny shows a golden amber colour, with a pale green tinge at the rim, denoting great age. On the nose, it is very complex with a powerful fragrance that belies its age. On the palate, it reveals an array of flavours, from delicate fruit & raisins to toasted toffee & chocolate with an outstanding aftertaste',
        description: '฿700.00 / ฿1000.00',
        src: require('../images/gra.jpg'),
      },
      {
        id: 12,
        title: 'DOW S',
        subtitle:
          'The grapes used in the production of Dow’s Fine Ruby were a blend of traditional Portuguese varieties from the Douro Valley. Dow’s Fine Ruby was aged in seasoned oak casks at our lodges in Vila Nova de Gaia for an average of 3 years, and bottled when ready to drink. Exuberant youthful fruit flavours make it perfect for informal drinking.',
        description: '฿700.00 / ฿1000.00',
        src: require('../images/dows.jpg'),
      },
      {
        id: 13,
        title: 'ESTRELLA',
        subtitle:
          'This beautifully colored and well balanced White Zinfandel has intense aromas and flavors of strawberry and melon with layers of honeysuckle, peach, and apricot in the background.Intensely flavored and balanced with layers of vanilla, butter and pear, followed by apple, banana and oak.This wine has a very fruity nose.',
        description: '฿700.00 / ฿1000.00',
        src: require('../images/estrella.jpg'),
      },
      {
        id: 14,
        title: 'MICHEL LYNCH',
        subtitle:
          'A bold raspberry pink, limpid and bright colour; a delicate nose of red fruit and pomegranate; a hint of menthol when swirled around the glass. It is both soft and fresh in the mouth, with a long fruity finish.Michel Lynch Rouge with his pretty dark and shiny garnet, reveals notes of blackcurrant and fresh bread, in an impression of maturity and power.',
        description: '฿700.00 / ฿1000.00',
        src: require('../images/michel.jpg'),
      },
      {
        id: 15,
        title: 'BATASIOLO',
        subtitle:
          'A sweet, sparkling wine treat bringing well-perfumed aromatics and bursting with the fresh flavors of strawberry pie, peach cobbler, nutty desserts, or summer salads that are a little lighter on the acidity. Remember to serve well chilled to keep the bubbles and flavors at their peak.Moscato bianco, aromatic red grapes',
        description: '฿700.00 / ฿1000.00',
        src: require('../images/rose.jpg'),
      },
    ],
  }),
}
</script>
