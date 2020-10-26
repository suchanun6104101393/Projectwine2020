<template>
  <div>
    <v-row>
      <v-row>
        <v-card class="mx-auto" width="344">
          <v-img
            src="https://i.ytimg.com/vi/04bdcUjM-AU/maxresdefault.jpg"
            height="300"
            width="344"
          ></v-img>

          <v-card-title> Santa Helena </v-card-title>

          <v-card-subtitle> ฿700.00 / ฿1000.00 </v-card-subtitle>

          <v-card-actions>
            <v-btn to="buy" color="orange lighten-2" text> BUY </v-btn>

            <v-spacer></v-spacer>

            <v-btn icon @click="show = !show">
              <v-icon>{{
                show ? 'mdi-chevron-up' : 'mdi-chevron-down'
              }}</v-icon>
            </v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="show">
              <v-divider></v-divider>

              <v-card-text>
                Deep cherry red in color. Red fruits such as berries predominate
                on the nose, as well as spicy pepper notes which enhance the
                complexity of the wine. Hints of chocolate meld with subtle mint
                notes lending the wine freshness. A wine with good volume and
                structure on the palate. Ripe tannins with a balanced,
                persistent finish.
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-row>
      <v-row>
        <v-card class="mx-auto" width="344">
          <v-img
            src="https://d1jyn4gqdbbalr.cloudfront.net/app/uploads/2019/07/yering-station-2017.jpg"
            height="300"
            width="344"
          ></v-img>

          <v-card-title> Yering </v-card-title>

          <v-card-subtitle> ฿700.00 / ฿1000.00 </v-card-subtitle>

          <v-card-actions>
            <v-btn to="buy" color="orange lighten-2" text> BUY </v-btn>

            <v-spacer></v-spacer>

            <v-btn icon @click="show = !show">
              <v-icon>{{
                show ? 'mdi-chevron-up' : 'mdi-chevron-down'
              }}</v-icon>
            </v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="show">
              <v-divider></v-divider>

              <v-card-text>
                This is a spicy, brambly fruited Shiraz from one of the Yarra s
                longstanding producers. Aromas of tangy fruit, cocktail
                bitters,dark chocolate, black olives, dried violets and an
                earthy funk are followed by an equally spicy palate. The oak can
                be felt here, as can the alcohol—but just a touch—and the chalky
                savory tannins and forrest-berry fruit add charm
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-row>
      <v-row>
        <v-card class="mx-auto" max-width="344">
          <v-img
            src="https://assets.catawiki.nl/assets/2019/10/29/4/0/8/40842f70-c1e4-4e36-bfce-14d457917c29.jpg"
            height="300"
            width="344"
          ></v-img>

          <v-card-title> Castello Banfi </v-card-title>

          <v-card-subtitle>฿700.00 / ฿1000.00 </v-card-subtitle>

          <v-card-actions>
            <v-btn to="buy" color="orange lighten-2" text> BUY </v-btn>

            <v-spacer></v-spacer>

            <v-btn icon @click="show = !show">
              <v-icon>{{
                show ? 'mdi-chevron-up' : 'mdi-chevron-down'
              }}</v-icon>
            </v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="show">
              <v-divider></v-divider>

              <v-card-text>
                Celebrating the best Tuscan tradition Banfi offers a family of
                Chianti wines varied and complementary, unique in its style.
                Ruby red color. Intense bouquet with varietal notes of cherry,
                plum and violet , rich flavours, supple tannins and good
                acidity. Fresh, balanced, typical.A wine for every dish, matches
                meat dishes superbly
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-row>
    </v-row>
    <br />
    <v-row>
      <v-row>
        <v-card class="mx-auto" width="344">
          <v-img
            src="https://i2.wp.com/wineandotherstories.com/wp-content/uploads/2019/10/guado-al-tasso-full.jpg?resize=446%2C446&ssl=1"
            height="300"
            width="344"
          ></v-img>

          <v-card-title> Antinori </v-card-title>

          <v-card-subtitle> ฿700.00 / ฿1000.00 </v-card-subtitle>

          <v-card-actions>
            <v-btn to="buy" color="orange lighten-2" text> BUY </v-btn>

            <v-spacer></v-spacer>

            <v-btn icon @click="show = !show">
              <v-icon>{{
                show ? 'mdi-chevron-up' : 'mdi-chevron-down'
              }}</v-icon>
            </v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="show">
              <v-divider></v-divider>

              <v-card-text>
                A wine of Italy by Antinori brand.Made from grape combination of
                50% Tuscan Trebbiano and Malvasia, 35% Pinot Blanc and Pinot
                Grigio, 15% Rhine Riesling.The tasting notes is straw yellow in
                color, the wine is elegant and classy in its aromas, which
                recall pineapple and peach fruit and white flowers. Full and
                savory a good aromatic persistence
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-row>
      <v-row>
        <v-card class="mx-auto" width="344">
          <v-img
            src="https://media-cdn.tripadvisor.com/media/photo-s/17/9f/c3/88/rubesco-riserva-vigna.jpg"
            height="300"
            width="344"
          ></v-img>

          <v-card-title> Lungarotti </v-card-title>

          <v-card-subtitle> ฿700.00 / ฿1000.00 </v-card-subtitle>

          <v-card-actions>
            <v-btn to="buy" color="orange lighten-2" text> BUY </v-btn>

            <v-spacer></v-spacer>

            <v-btn icon @click="show = !show">
              <v-icon>{{
                show ? 'mdi-chevron-up' : 'mdi-chevron-down'
              }}</v-icon>
            </v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="show">
              <v-divider></v-divider>

              <v-card-text>
                A wine of Umbria in Italy. LungarottiPinot Grigio dell Umbria
                Made from grape combination of Pinot Grigio 100%.This wine is
                yellow in colour with greenish reflections, with a delicate
                bouquet of herbs, hay, wild mint and pistachio, dry on the
                palate, with a pleasant softness, fragrant acidity and long
                finish.250 ml and 500 ml bottle in a gift box
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-row>
      <v-row>
        <v-card class="mx-auto" max-width="344">
          <v-img
            src="https://shopvintagewines.com/wp-content/uploads/2018/06/celebrating-50-years-of-robert-mondavi-winery-0616.jpg"
            height="300"
            width="344"
          ></v-img>

          <v-card-title> Roeert Mondavi </v-card-title>

          <v-card-subtitle> ฿700.00 / ฿1000.00 </v-card-subtitle>

          <v-card-actions>
            <v-btn to="buy" color="orange lighten-2" text> BUY </v-btn>

            <v-spacer></v-spacer>

            <v-btn icon @click="show = !show">
              <v-icon>{{
                show ? 'mdi-chevron-up' : 'mdi-chevron-down'
              }}</v-icon>
            </v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="show">
              <v-divider></v-divider>

              <v-card-text>
                The rich, vibrant essence of Chardonnay: Bright, enticing fruity
                aromas - juicy Honeycrisp apple, citrus-laced Asian pear, ripe
                melon and fresh quince - are intermingled with vanilla-scented
                crème brûlée, subtle minerality, and traces of warm hazelnut and
                clove. These elements segue seamlessly to the palate, fering a
                lush, creamy mouth feofel impeccably
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-row>
    </v-row>
    <br />
    <v-row>
      <v-row>
        <v-card class="mx-auto" width="344">
          <v-img
            src="https://openingabottle.com/wp-content/uploads/2018/11/20181003-Wine-0001-1000x600.jpg"
            height="300"
            width="344"
          ></v-img>

          <v-card-title> Radikon </v-card-title>

          <v-card-subtitle> ฿700.00 / ฿1000.00 </v-card-subtitle>

          <v-card-actions>
            <v-btn to="buy" color="orange lighten-2" text> BUY </v-btn>

            <v-spacer></v-spacer>

            <v-btn icon @click="show = !show">
              <v-icon>{{
                show ? 'mdi-chevron-up' : 'mdi-chevron-down'
              }}</v-icon>
            </v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="show">
              <v-divider></v-divider>

              <v-card-text>
                This was maybe the best bottle of Radikon Orange wine I have
                ever had. Had a apricot skin color in the glass and celestial, I
                kid you not, celestial aromas of brown sugar, red-Pinot-like
                fruit, minerals and stone fruit skins. The palate has dazzling
                babbling brook-like minerality along with stellar concentration,
                great delineation and a long fruit-soaked finish
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-row>
      <v-row>
        <v-card class="mx-auto" width="344">
          <v-img
            src="https://www.orangewines.es/wp-content/uploads/2020/01/20161210_104949-scaled.jpg"
            height="300"
            width="344"
          ></v-img>

          <v-card-title> Primosic </v-card-title>

          <v-card-subtitle> ฿700.00 / ฿1000.00 </v-card-subtitle>

          <v-card-actions>
            <v-btn to="buy" color="orange lighten-2" text> BUY </v-btn>

            <v-spacer></v-spacer>

            <v-btn icon @click="show = !show">
              <v-icon>{{
                show ? 'mdi-chevron-up' : 'mdi-chevron-down'
              }}</v-icon>
            </v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="show">
              <v-divider></v-divider>

              <v-card-text>
                Intense golden-yellow colour. Characteristic and dry, the
                fragrance evokes acacia flowers, with undertones of bitter
                orange rind with pervasive mineral sensation. The finish is
                reminiscent of apricot stone and chestnut pulp.In einem Land,
                das seit jeher für guten Wein bekannt ist, verkörpert das
                Weingut Primosic eine
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-row>
      <v-row>
        <v-card class="mx-auto" max-width="344">
          <v-img
            src="https://madera.objects.liquidweb.services/photos/9310-quady_lineup-1000.jpg"
            height="300"
            width="344"
          ></v-img>

          <v-card-title> Quady </v-card-title>

          <v-card-subtitle> ฿700.00 / ฿1000.00 </v-card-subtitle>

          <v-card-actions>
            <v-btn to="buy" color="orange lighten-2" text> BUY </v-btn>

            <v-spacer></v-spacer>

            <v-btn icon @click="show = !show">
              <v-icon>{{
                show ? 'mdi-chevron-up' : 'mdi-chevron-down'
              }}</v-icon>
            </v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="show">
              <v-divider></v-divider>

              <v-card-text>
                Made from 100% Orange Muscat, Essensia has an aroma reminiscent
                of Orange Blossom and Apricot. The wine is lightly fortified to
                about 15% alcohol and aged for 3 months in French Oak. Its
                relatively high acidity makes it taste balanced, even with its
                considerable sweetness, more like a taste of fresh fruit.Best
                served chilled
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-row>
    </v-row>
    <br />
    <v-row>
      <v-row>
        <v-card class="mx-auto" width="344">
          <v-img
            src="https://obs.line-scdn.net/r/myhome/hex/95e037a4783e32033c2ee55f90f7740c4de222d4690a4de1c429df57c64e4a67tca52d4e19c96601t0ca4aebe/w960"
            height="300"
            width="344"
          ></v-img>

          <v-card-title> 'Warre's </v-card-title>

          <v-card-subtitle> ฿700.00 / ฿1000.00 </v-card-subtitle>

          <v-card-actions>
            <v-btn to="buy" color="orange lighten-2" text> BUY </v-btn>

            <v-spacer></v-spacer>

            <v-btn icon @click="show = !show">
              <v-icon>{{
                show ? 'mdi-chevron-up' : 'mdi-chevron-down'
              }}</v-icon>
            </v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="show">
              <v-divider></v-divider>

              <v-card-text>
                Medium red. Smoky, high-toned aromas of cassis, marzipan and
                maple syrup. Smooth, fat and super ripe, with a generous texture
                and ample balancing acidity. Fresh ruby port but not at all
                aggressive”. Stephen Tanzer, The Wine Analyst Deep, rich ruby
                colour. On the nose bursting with lovely black fruit combined
                with a spicy complexity
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-row>
      <v-row>
        <v-card class="mx-auto" width="344">
          <v-img
            src="https://vintagedrinksonline.co.uk/wp-content/uploads/2018/10/POR02570.jpg"
            height="300"
            width="344"
          ></v-img>

          <v-card-title> Graham's </v-card-title>

          <v-card-subtitle> ฿700.00 / ฿1000.00 </v-card-subtitle>

          <v-card-actions>
            <v-btn to="buy" color="orange lighten-2" text> BUY </v-btn>

            <v-spacer></v-spacer>

            <v-btn icon @click="show = !show">
              <v-icon>{{
                show ? 'mdi-chevron-up' : 'mdi-chevron-down'
              }}</v-icon>
            </v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="show">
              <v-divider></v-divider>

              <v-card-text>
                Graham’s 40 Year Old Tawny shows a golden amber colour, with a
                pale green tinge at the rim, denoting great age. On the nose, it
                is very complex with a powerful fragrance that belies its age.
                On the palate, it reveals an array of flavours, from delicate
                fruit & raisins to toasted toffee & chocolate with an
                outstanding aftertaste
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-row>
      <v-row>
        <v-card class="mx-auto" max-width="344">
          <v-img
            src="https://i.pinimg.com/originals/d1/99/5c/d1995cc01fb7842ea958dfc95e2d5237.jpg"
            height="300"
            width="344"
          ></v-img>

          <v-card-title> Dow's </v-card-title>

          <v-card-subtitle> ฿700.00 / ฿1000.00 </v-card-subtitle>

          <v-card-actions>
            <v-btn to="buy" color="orange lighten-2" text> BUY </v-btn>

            <v-spacer></v-spacer>

            <v-btn icon @click="show = !show">
              <v-icon>{{
                show ? 'mdi-chevron-up' : 'mdi-chevron-down'
              }}</v-icon>
            </v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="show">
              <v-divider></v-divider>

              <v-card-text>
                The grapes used in the production of Dow’s Fine Ruby were a
                blend of traditional Portuguese varieties from the Douro Valley.
                Dow’s Fine Ruby was aged in seasoned oak casks at our lodges in
                Vila Nova de Gaia for an average of 3 years, and bottled when
                ready to drink. Exuberant youthful fruit flavours make it
                perfect for informal drinking
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-row>
    </v-row>
    <br />
    <v-row>
      <v-row>
        <v-card class="mx-auto" width="344">
          <v-img
            src="https://media-cdn.tripadvisor.com/media/photo-s/0e/0b/62/fb/estrella-damm-inedit.jpg"
            height="300"
            width="344"
          ></v-img>

          <v-card-title> Estrella </v-card-title>

          <v-card-subtitle> ฿700.00 / ฿1000.00 </v-card-subtitle>

          <v-card-actions>
            <v-btn to="buy" color="orange lighten-2" text> BUY </v-btn>

            <v-spacer></v-spacer>

            <v-btn icon @click="show = !show">
              <v-icon>{{
                show ? 'mdi-chevron-up' : 'mdi-chevron-down'
              }}</v-icon>
            </v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="show">
              <v-divider></v-divider>

              <v-card-text>
                This beautifully colored and well balanced White Zinfandel has
                intense aromas and flavors of strawberry and melon with layers
                of honeysuckle, peach, and apricot in the background.Intensely
                flavored and balanced with layers of vanilla, butter and pear,
                followed by apple, banana and oak.This wine has a very fruity
                nose.
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-row>
      <v-row>
        <v-card class="mx-auto" width="344">
          <v-img
            src="https://www.drinksindustryireland.ie/wp-content/uploads/2017/02/008_Michel_Lynch.jpg"
            height="300"
            width="344"
          ></v-img>

          <v-card-title> Michel Lynch </v-card-title>

          <v-card-subtitle> ฿700.00 / ฿1000.00 </v-card-subtitle>

          <v-card-actions>
            <v-btn to="buy" color="orange lighten-2" text> BUY </v-btn>

            <v-spacer></v-spacer>

            <v-btn icon @click="show = !show">
              <v-icon>{{
                show ? 'mdi-chevron-up' : 'mdi-chevron-down'
              }}</v-icon>
            </v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="show">
              <v-divider></v-divider>

              <v-card-text>
                A bold raspberry pink, limpid and bright colour; a delicate nose
                of red fruit and pomegranate; a hint of menthol when swirled
                around the glass. It is both soft and fresh in the mouth, with a
                long fruity finish.Michel Lynch Rouge with his pretty dark and
                shiny garnet, reveals notes of blackcurrant and fresh bread, in
                an impression of maturity and power.
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-row>
      <v-row>
        <v-card class="mx-auto" max-width="344">
          <v-img
            src="https://www.asiaimportnews.com/wp-content/uploads/2019/11/Batasiolo-AsiaImportNews.jpg"
            height="300"
            width="344"
          ></v-img>

          <v-card-title> Batasiolo </v-card-title>

          <v-card-subtitle> ฿700.00 / ฿1000.00 </v-card-subtitle>

          <v-card-actions>
            <v-btn to="buy" color="orange lighten-2" text> BUY </v-btn>

            <v-spacer></v-spacer>

            <v-btn icon @click="show = !show">
              <v-icon>{{
                show ? 'mdi-chevron-up' : 'mdi-chevron-down'
              }}</v-icon>
            </v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="show">
              <v-divider></v-divider>

              <v-card-text>
                A sweet, sparkling wine treat bringing well-perfumed aromatics
                and bursting with the fresh flavors of strawberry pie, peach
                cobbler, nutty desserts, or summer salads that are a little
                lighter on the acidity. Remember to serve well chilled to keep
                the bubbles and flavors at their peak.Moscato bianco, aromatic
                red grapes escape.
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-row>
    </v-row>
  </div>
</template>

<script>
export default {
  data: () => ({
    show: false,
  }),
}
</script>

<style></style>
