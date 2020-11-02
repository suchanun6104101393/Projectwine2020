<template>
  <div class="container mt-4">
    <div class="row">
      <div class="col-md-7">
        <div class="row">
          <div class="col-md-6" v-for="item in products" v-bind:key="item">
            <v-card height="400" width="300" align="center">
              <v-img height="235" width="290" :src="item.image" />
              <div class="card-body">
                <h1 align="center" class="card-title">{{ item.name }}</h1>
                <h3 align="center" class="card-text">{{ item.price }} ฿</h3>
              </div>
              <div class="card-footer">
                <v-dialog v-model="dialog" width="500">
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn class="mx-2" fab dark large v-bind="attrs" v-on="on">
                      <v-icon dark> mdi-file </v-icon>
                    </v-btn>
                  </template>

                  <v-card>
                    <v-card-title class="headline blue-grey darken-2">
                      <h1>
                        {{ item.name }}
                      </h1>
                    </v-card-title>

                    <v-card-text>
                      <h3>{{ item.Details }}</h3>
                    </v-card-text>

                    <v-divider></v-divider>

                    <v-card-actions>
                      <v-spacer></v-spacer>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
                <v-btn class="mx-2" fab dark large @click="addCart(item)">
                  <v-icon dark> mdi-basket </v-icon>+
                </v-btn>
              </div>
            </v-card>
          </div>
        </div>
      </div>
      <v-card class="col-md-5 my-5">
        <h2 align="center">
          Basket <v-icon large dark> mdi-basket </v-icon>
          <i class="fa fa-shopping-cart"></i>
        </h2>
        <hr />
        <table class="table">
          <thead class="thead-dark">
            <tr align="center">
              <th align="center" scope="col"></th>
              <th align="center" scope="col"></th>
              <th align="center" scope="col"></th>
              <th align="center" scope="col"></th>
              <th align="center" scope="col"></th>
              <th align="center" scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="product in carts" v-bind:key="product">
              <td align="center">
                <v-img
                  :src="product.image"
                  alt=""
                  width="80px"
                  height="100px"
                />
              </td>
              <td align="center">{{ product.name }}</td>
              <td align="center">
                <v-btn
                  color="blue-grey darken-2"
                  x-small
                  @click="minusQty(product)"
                  ><v-icon dark> mdi-minus </v-icon></v-btn
                >
                {{ product.qty }}
                <v-btn
                  align="center"
                  color="blue-grey darken-2"
                  x-small
                  @click="plusQty(product)"
                  ><v-icon dark> mdi-plus </v-icon></v-btn
                >
              </td>
              <td align="center">{{ product.total }} ฿</td>
              <td>
                <v-btn
                  class="mx-2"
                  fab
                  dark
                  small
                  @click="removeProduct(product)"
                >
                  <v-icon large dark> mdi-trash-can-outline </v-icon>
                </v-btn>
              </td>
            </tr>
          </tbody>
        </table>
        <h1 align="center">Total {{ total() }} ฿</h1>
        <h2 align="center">****Please Remember Total****</h2>
        <v-btn
          block
          elevation="2"
          large
          x-small
          color="blue-grey darken-2"
          @click="submit"
          >SUBMIT</v-btn
        >
      </v-card>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase/app'
import { db } from '~/plugins/firebaseConfig.js'
export default {
  name: 'App',
  data() {
    return {
      carts: [],
      wine1: 0,
      wine2: 0,
      wine3: 0,
      wine4: 0,
      wine5: 0,
      wine6: 0,
      wine7: 0,
      wine8: 0,
      wine9: 0,
      wine10: 0,
      wine11: 0,
      wine12: 0,
      products: [
        {
          id: 1,
          name: 'Santa Helena',
          price: 590,
          image: 'https://i.ytimg.com/vi/04bdcUjM-AU/maxresdefault.jpg',
          active: false,
          Details:
            'Deep cherry red in color. Red fruits such as berries predominate on the nose, as well as spicy pepper notes which enhance the complexity of the wine. Hints of chocolate meld with subtle mint notes lending the wine freshness. A wine with good volume and structure on the palate. Ripe tannins with a balanced, persistent finish.',
        },
        {
          id: 2,
          name: 'Yering',
          price: 950,
          image:
            'https://d1jyn4gqdbbalr.cloudfront.net/app/uploads/2019/07/yering-station-2017.jpg',
          active: false,
          Details:
            'This is a spicy, brambly fruited Shiraz from one of the Yarra s longstanding producers. Aromas of tangy fruit, cocktail bitters,dark chocolate, black olives, dried violets and an earthy funk are followed by an equally spicy palate. The oak can be felt here, as can the alcohol—but just a touch—and the chalky savory tannins and forrest-berry fruit add charm.',
        },
        {
          id: 3,
          name: 'Castello Banfi',
          price: 2580,
          image:
            'https://assets.catawiki.nl/assets/2019/10/29/4/0/8/40842f70-c1e4-4e36-bfce-14d457917c29.jpg',
          active: false,
          Details:
            'Celebrating the best Tuscan tradition Banfi offers a family of Chianti wines varied and complementary, unique in its style. Ruby red color. Intense bouquet with varietal notes of cherry, plum and violet , rich flavours, supple tannins and good acidity. Fresh, balanced, typical.A wine for every dish, matches meat dishes superbly',
        },
        {
          id: 4,
          name: 'Antinori',
          price: 1060,
          image:
            'https://i2.wp.com/wineandotherstories.com/wp-content/uploads/2019/10/guado-al-tasso-full.jpg?resize=446%2C446&ssl=1',
          active: false,
          Details:
            'A wine of Italy by Antinori brand.Made from grape combination of 50% Tuscan Trebbiano and Malvasia, 35% Pinot Blanc and Pinot Grigio, 15% Rhine Riesling.The tasting notes is straw yellow in color, the wine is elegant and classy in its aromas, which recall pineapple and peach fruit and white flowers. Full and savory a good aromatic persistence',
        },
        {
          id: 5,
          name: 'Lungarotti',
          price: 1665,
          image:
            'https://media-cdn.tripadvisor.com/media/photo-s/17/9f/c3/88/rubesco-riserva-vigna.jpg',
          active: false,
          Details:
            'A wine of Umbria in Italy. LungarottiPinot Grigio dell Umbria Made from grape combination of Pinot Grigio 100%.This wine is yellow in colour with greenish reflections, with a delicate bouquet of herbs, hay, wild mint and pistachio, dry on the palate, with a pleasant softness, fragrant acidity and long finish.250 ml and 500 ml bottle in a gift box',
        },
        {
          id: 6,
          name: 'Robert Mondavi',
          price: 1880,
          image:
            'https://shopvintagewines.com/wp-content/uploads/2018/06/celebrating-50-years-of-robert-mondavi-winery-0616.jpg',
          active: false,
          Details:
            'The rich, vibrant essence of Chardonnay: Bright, enticing fruity aromas - juicy Honeycrisp apple, citrus-laced Asian pear, ripe melon and fresh quince - are intermingled with vanilla-scented crème brûlée, subtle minerality, and traces of warm hazelnut and clove. These elements segue seamlessly to the palate, fering a lush, creamy mouth feofel impeccably ',
        },
        {
          id: 7,
          name: 'Radikon',
          price: 2010,
          image:
            'https://openingabottle.com/wp-content/uploads/2018/11/20181003-Wine-0001-1000x600.jpg',
          active: false,
          Details:
            'This was maybe the best bottle of Radikon Orange wine I have ever had. Had a apricot skin color in the glass and celestial, I kid you not, celestial aromas of brown sugar, red-Pinot-like fruit, minerals and stone fruit skins. The palate has dazzling babbling brook-like minerality along with stellar concentration, great delineation and a long fruit-soaked finish.',
        },
        {
          id: 8,
          name: 'Primosic',
          price: 1680,
          image:
            'https://www.orangewines.es/wp-content/uploads/2020/01/20161210_104949-scaled.jpg',
          active: false,
          Details:
            'Intense golden-yellow colour. Characteristic and dry, the fragrance evokes acacia flowers, with undertones of bitter orange rind with pervasive mineral sensation. The finish is reminiscent of apricot stone and chestnut pulp.In einem Land, das seit jeher für guten Wein bekannt ist, verkörpert das Weingut Primosic eine',
        },
        {
          id: 9,
          name: 'Quady',
          price: 979,
          image:
            'https://madera.objects.liquidweb.services/photos/9310-quady_lineup-1000.jpg',
          active: false,
          Details:
            'Made from 100% Orange Muscat, Essensia has an aroma reminiscent of Orange Blossom and Apricot. The wine is lightly fortified to about 15% alcohol and aged for 3 months in French Oak. Its relatively high acidity makes it taste balanced, even with its considerable sweetness, more like a taste of fresh fruit.Best served chilled',
        },
        {
          id: 10,
          name: 'Warre S',
          price: 3800,
          image:
            'https://obs.line-scdn.net/r/myhome/hex/95e037a4783e32033c2ee55f90f7740c4de222d4690a4de1c429df57c64e4a67tca52d4e19c96601t0ca4aebe/w960',
          active: false,
          Details:
            'Medium red. Smoky, high-toned aromas of cassis, marzipan and maple syrup. Smooth, fat and super ripe, with a generous texture and ample balancing acidity. Fresh ruby port but not at all aggressive”. Stephen Tanzer, The Wine Analyst Deep, rich ruby colour. On the nose bursting with lovely black fruit combined with a spicy complexity',
        },
        {
          id: 11,
          name: 'Graham s ',
          price: 550,
          image:
            'https://vintagedrinksonline.co.uk/wp-content/uploads/2018/10/POR02570.jpg',
          active: false,
          Details:
            'Graham’s 40 Year Old Tawny shows a golden amber colour, with a pale green tinge at the rim, denoting great age. On the nose, it is very complex with a powerful fragrance that belies its age. On the palate, it reveals an array of flavours, from delicate fruit & raisins to toasted toffee & chocolate with an outstanding aftertaste',
        },
        {
          id: 12,
          name: 'Estrella',
          price: 1700,
          image:
            'https://media-cdn.tripadvisor.com/media/photo-s/0e/0b/62/fb/estrella-damm-inedit.jpg',
          active: false,
          Details:
            'The grapes used in the production of Dow’s Fine Ruby were a blend of traditional Portuguese varieties from the Douro Valley. Dow’s Fine Ruby was aged in seasoned oak casks at our lodges in Vila Nova de Gaia for an average of 3 years, and bottled when ready to drink. Exuberant youthful fruit flavours make it perfect for informal drinking.',
        },
      ],
    }
  },
  methods: {
    addCart(item) {
      if (item.id === 1) {
        this.wine1 += 1
        if (this.wine1 <= 1) {
          this.pushData(item)
        } else {
          const found = this.findIndex(item)
          this.carts[found].qty += 1
          this.carts[found].total =
            this.carts[found].qty * this.carts[found].price
        }
      } else if (item.id === 2) {
        this.wine2 += 1
        if (this.wine2 <= 1) {
          this.pushData(item)
        } else {
          const found = this.findIndex(item)
          this.carts[found].qty += 1
          this.carts[found].total =
            this.carts[found].qty * this.carts[found].price
        }
      } else if (item.id === 3) {
        this.wine3 += 1
        if (this.wine3 <= 1) {
          this.pushData(item)
        } else {
          const found = this.findIndex(item)
          this.carts[found].qty += 1
          this.carts[found].total =
            this.carts[found].qty * this.carts[found].price
        }
      } else if (item.id === 4) {
        this.wine4 += 1
        if (this.wine4 <= 1) {
          this.pushData(item)
        } else {
          const found = this.findIndex(item)
          this.carts[found].qty += 1
          this.carts[found].total =
            this.carts[found].qty * this.carts[found].price
        }
      } else if (item.id === 5) {
        this.wine5 += 1
        if (this.wine5 <= 1) {
          this.pushData(item)
        } else {
          const found = this.findIndex(item)
          this.carts[found].qty += 1
          this.carts[found].total =
            this.carts[found].qty * this.carts[found].price
        }
      } else if (item.id === 6) {
        this.wine6 += 1
        if (this.wine6 <= 1) {
          this.pushData(item)
        } else {
          const found = this.findIndex(item)
          this.carts[found].qty += 1
          this.carts[found].total =
            this.carts[found].qty * this.carts[found].price
        }
      } else if (item.id === 7) {
        this.wine7 += 1
        if (this.wine7 <= 1) {
          this.pushData(item)
        } else {
          const found = this.findIndex(item)
          this.carts[found].qty += 1
          this.carts[found].total =
            this.carts[found].qty * this.carts[found].price
        }
      } else if (item.id === 8) {
        this.wine8 += 1
        if (this.wine8 <= 1) {
          this.pushData(item)
        } else {
          const found = this.findIndex(item)
          this.carts[found].qty += 1
          this.carts[found].total =
            this.carts[found].qty * this.carts[found].price
        }
      } else if (item.id === 9) {
        this.wine9 += 1
        if (this.wine9 <= 1) {
          this.pushData(item)
        } else {
          const found = this.findIndex(item)
          this.carts[found].qty += 1
          this.carts[found].total =
            this.carts[found].qty * this.carts[found].price
        }
      } else if (item.id === 10) {
        this.wine10 += 1
        if (this.wine10 <= 1) {
          this.pushData(item)
        } else {
          const found = this.findIndex(item)
          this.carts[found].qty += 1
          this.carts[found].total =
            this.carts[found].qty * this.carts[found].price
        }
      } else if (item.id === 11) {
        this.wine11 += 1
        if (this.wine11 <= 1) {
          this.pushData(item)
        } else {
          const found = this.findIndex(item)
          this.carts[found].qty += 1
          this.carts[found].total =
            this.carts[found].qty * this.carts[found].price
        }
      } else if (item.id === 12) {
        this.wine12 += 1
        if (this.wine12 <= 1) {
          this.pushData(item)
        } else {
          const found = this.findIndex(item)
          this.carts[found].qty += 1
          this.carts[found].total =
            this.carts[found].qty * this.carts[found].price
        }
      }
    },
    submit() {
      const dataText = {
        Order: this.carts,

        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      }
      db.collection('Order')
        .doc()
        .set(dataText)
        .then(function () {
          // eslint-disable-next-line no-console
          console.log('Document successfully written! -> dataTable')
        })
        .catch(function (error) {
          // eslint-disable-next-line no-console
          console.error('Error writing document: ', error)
        })
        .then(function () {
          alert('Order Complete')
        })
      this.$router.push('/payment')
    },
    pushData(item) {
      this.carts.push({
        id: item.id,
        name: item.name,
        price: item.price,
        image: item.image,
        qty: 1,
        total: item.price,
      })
    },
    findIndex(item) {
      for (let i = 0; i < this.carts.length; i++) {
        if (this.carts[i].id === item.id) {
          return i
        }
      }
      return -1
    },
    minusQty(product) {
      product.qty -= 1
      if (product.qty <= 1) {
        product.qty = 1
      }
      product.total = product.price * product.qty
    },
    plusQty(product) {
      product.qty += 1
      product.total = product.price * product.qty
    },
    removeProduct(product) {
      if (confirm('Do you want to delete it ?')) {
        const index = this.carts.indexOf(product)
        this.carts.splice(index, 1)
        if (product.id === 1) {
          this.wine1 = 0
        } else {
          this.wine2 = 0
        }
      }
    },
    total() {
      let sum = 0
      this.carts.forEach(function (item) {
        sum += item.total
        console.log(item.total)
      })
      return sum
    },
  },
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Itim&display=swap');
h1 {
  font-family: 'Itim', cursive;
}
h2 {
  color: chocolate;
  font-family: 'Itim', cursive;
}
.theme--dark.v-application {
  background-image: url('https://cdn.pixabay.com/photo/2020/05/04/09/02/wine-5128360_960_720.jpg?fbclid=IwAR3zrtRbip-gb9FHrDDK14Q-zgYYl7-UdpNRPGz1kf7tzx8BQF9cC1Hp5M8');
  background-size: cover;
}
</style>
