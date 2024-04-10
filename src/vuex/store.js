// import Vue from 'vue';
// import Vuex from 'vuex';
// import axios from 'axios';
import {createStore} from 'vuex';
// import axios from 'axios';

export const store = createStore({
    // Свойство state: {} содержит два массива: products и StoreCart.
    // Массив продуктов содержит сведения о каждом продукте.
    // Массив StoreCart пуст, потому что именно здесь будет храниться
    // каждый товар, который пользователь добавляет в корзину.
    state: {
        products: [],
        // products: [
        //     {
        //         "Id": 1,
        //         "category": "Буузы",
        //         "imageUrl": "/images/dish/buuz/Buuza&Meat&Kapusta-300x300.webp",
        //         "title": "Буузы с мясом и капустой",
        //         "ingredients": "Свинина, говядина, капуста б/к, лук репчатый",
        //         "weight": 0,
        //         "price": 75
        //     },
        //     {
        //         "Id": 2,
        //         "category": "Буузы",
        //         "imageUrl": "/images/dish/buuz/BuuzaClassic-300x300.webp",
        //         "title": "Бууза Классическая",
        //         "ingredients": "Свинина, говядина, лук репчатый",
        //         "weight": 0,
        //         "price": 75
        //     },
        //     {
        //         "Id": 3,
        //         "category": "Буузы",
        //         "imageUrl": "/images/dish/buuz/BuuzaAssortiForTwo-300x300.webp",
        //         "title": "Ассорти На Двоих",
        //         "ingredients": "",
        //         "weight": 0,
        //         "price": 839
        //     },
        //     {
        //         "Id": 4,
        //         "category": "Буузы",
        //         "imageUrl": "/images/dish/buuz/BuuzaAssortiTest-300x300.webp",
        //         "title": "Ассорти На Пробу",
        //         "ingredients": "Буза рубленая 1 шт., буза овощная 1шт.,буза классическая 1 шт., манты с курицей и сыром 1шт.,манты рубленые, жареная 1 шт., лист салата, огурец, помидор,лук, перец болгарский, соевый соус, майонез, зелень",
        //         "weight": 0,
        //         "price": 379
        //     },
        //     {
        //         "Id": 5,
        //         "category": "Буузы",
        //         "imageUrl": "/images/dish/buuz/BuuzaVegitable-300x300.webp",
        //         "title": "Бууза Овощная",
        //         "ingredients": "Лук репчатый, морковь, перец болгарский,капуста, шампиньоны, соевый соус",
        //         "weight": 0,
        //         "price": 75
        //     },
        //     {
        //         "Id": 6,
        //         "category": "Буузы",
        //         "imageUrl": "/images/dish/buuz/SweetBuuza-300x300.webp",
        //         "title": "Бууза Сладкая",
        //         "ingredients": "Банан, яблоко, шоколад",
        //         "weight": 0,
        //         "price": 75
        //     },
        //     {
        //         "Id": 7,
        //         "category": "Буузы",
        //         "imageUrl": "/images/dish/buuz/MantaBeef-300x300.webp",
        //         "title": "Манта Жареная С Рубленным Фаршем",
        //         "ingredients": "Cвинина, говядина, лук репчатый",
        //         "weight": 0,
        //         "price": 75
        //     },
        //     {
        //         "Id": 8,
        //         "category": "Буузы",
        //         "imageUrl": "/images/dish/buuz/MantaChicken-300x300.webp",
        //         "title": "Манта С Курицей",
        //         "ingredients": "Куриное филе, сыр",
        //         "weight": 0,
        //         "price": 75
        //     },
        //     {
        //         "Id": 9,
        //         "category": "Буузы",
        //         "imageUrl": "/images/dish/buuz/Cheburek-300x300.webp",
        //         "title": "Чебурек с мясом",
        //         "ingredients": "",
        //         "weight": 0,
        //         "price": 110
        //     },
        //     {
        //         "Id": 10,
        //         "category": "Буузы",
        //         "imageUrl": "/images/dish/buuz/Cheburek-300x300.webp",
        //         "title": "Чебурек с мясом и сыром",
        //         "ingredients": "",
        //         "weight": 0,
        //         "price": 110
        //     },
        //     {
        //         "Id": 11,
        //         "category": "Буузы",
        //         "imageUrl": "/images/dish/buuz/Cheburek-300x300.webp",
        //         "title": "Чебурек с сыром",
        //         "ingredients": "",
        //         "weight": 0,
        //         "price": 159
        //     },
        //     {
        //         "Id": 12,
        //         "category": "Гриль",
        //         "imageUrl": "/images/dish/grill/Shashlik&Sheya_Lopatka-600x600.webp",
        //         "title": "Шашлык Из Свинины (Шея)",
        //         "ingredients": "Шея свиная, лук маринованный, капуста маринованная,лаваш, соус томатный",
        //         "weight": 0,
        //         "price": 359
        //     },
        //     {
        //         "Id": 13,
        //         "category": "Гриль",
        //         "imageUrl": "/images/dish/grill/Shashlik&Sheya_Lopatka-600x600.webp",
        //         "title": "Шашлык Из Свинины (Лопатка)",
        //         "ingredients": "Лопатка свиная, лук маринованный, капуста маринованная,лаваш, соус томатный",
        //         "weight": 0,
        //         "price": 289
        //     },
        //     {
        //         "Id": 14,
        //         "category": "Гриль",
        //         "imageUrl": "/images/dish/grill/Shashlik&ChickenLegs-300x300.webp",
        //         "title": "Шашлык Из Куринных Бедер",
        //         "ingredients": "Филе бедер, лук маринованный, капуста маринованная,лаваш, соус томатный",
        //         "weight": 0,
        //         "price": 299
        //     },
        //     {
        //         "Id": 15,
        //         "category": "Гриль",
        //         "imageUrl": "/images/dish/grill/Shaurma&Chicken_Pork-300x300.webp",
        //         "title": "Шашлык в Лаваше с Курицей",
        //         "ingredients": "Шея свиная, лук маринованный,капуста маринованная, лаваш, соус томатный",
        //         "weight": 0,
        //         "price": 319
        //     },
        //     {
        //         "Id": 16,
        //         "category": "Гриль",
        //         "imageUrl": "/images/dish/grill/Shaurma&Chicken_Pork-300x300.webp",
        //         "title": "Шашлык в Лаваше со Свининой",
        //         "ingredients": "Бедро куриное, лук маринованный,капуста маринованная, лаваш, соус томатный",
        //         "weight": 0,
        //         "price": 299
        //     },
        //     {
        //         "Id": 17,
        //         "category": "Гриль",
        //         "imageUrl": "/images/dish/grill/KebabBeef-300x300.webp",
        //         "title": "Люля Кебаб Из Говядины",
        //         "ingredients": "Говядина, шпик свиной, лук маринованный, капуста маринованная, лаваш, соус томатный",
        //         "weight": 0,
        //         "price": 299
        //     },
        //     {
        //         "Id": 18,
        //         "category": "Гриль",
        //         "imageUrl": "/images/dish/grill/KebabChicken-300x300.webp",
        //         "title": "Люля Кебаб Из Курицы",
        //         "ingredients": "Филе куриное, лук маринованный, капуста маринованная, лаваш, соус томатный",
        //         "weight": 0,
        //         "price": 239
        //     },
        //     {
        //         "Id": 19,
        //         "category": "Гриль",
        //         "imageUrl": "/images/dish/grill/PorkFile_Grill-300x300.webp",
        //         "title": "Отбивная Из Свиной Шеи",
        //         "ingredients": "шея свиная, лист салата, перец, чеснок, огурец, соус чесночный",
        //         "weight": 0,
        //         "price": 399
        //     },
        //     {
        //         "Id": 20,
        //         "category": "Гриль",
        //         "imageUrl": "/images/dish/grill/PorkRibs-300x300.webp",
        //         "title": "Свиные Ребрышки Классические",
        //         "ingredients": "Ребрышки свиные, лаваш, капуста маринованная, лук маринованный, соус томатный",
        //         "weight": 0,
        //         "price": 399
        //     },
        //     {
        //         "Id": 21,
        //         "category": "Гриль",
        //         "imageUrl": "/images/dish/grill/ChickenFile_Grill-300x300.webp",
        //         "title": "Куринная Грудка Гриль",
        //         "ingredients": "Куриное филе, паприка, чеснок, цукини, соус Песто",
        //         "weight": 0,
        //         "price": 289
        //     },
        //     {
        //         "Id": 22,
        //         "category": "Гриль",
        //         "imageUrl": "/images/dish/grill/Scumbriya_Grill-300x300.webp",
        //         "title": "Скумбрия На Мангале",
        //         "ingredients": "Скумбрия филе, лимон, соус тар-тар",
        //         "weight": 0,
        //         "price": 399
        //     },
        //     {
        //         "Id": 23,
        //         "category": "Гриль",
        //         "imageUrl": "/images/dish/grill/Treska_Grill-300x300.webp",
        //         "title": "Филе Трески На Гриле",
        //         "ingredients": "Филе трески, рис, кукуруза, морковь, перец, соус тар-тар",
        //         "weight": 0,
        //         "price": 399
        //     },
        //     {
        //         "Id": 24,
        //         "category": "Наборы",
        //         "imageUrl": "/images/dish/combo/File4Vkusa-300x300.webp",
        //         "title": "Филе 4 Вкуса",
        //         "ingredients": "Филе фрайд, филе сырный снег, филе барбекю, филе чили)",
        //         "weight": 0,
        //         "price": 1089
        //     },
        //     {
        //         "Id": 25,
        //         "category": "Наборы",
        //         "imageUrl": "/images/dish/combo/Krilo4Vkusa-300x300.webp",
        //         "title": "Крыло 4 Вкуса",
        //         "ingredients": "Крыло фрайд, крыло сырный снег, крыло барбекю,Крыло чили",
        //         "weight": 0,
        //         "price": 1290
        //     },
        //     {
        //         "Id": 26,
        //         "category": "Наборы",
        //         "imageUrl": "/images/dish/combo/KomboForTwo-300x300.webp",
        //         "title": "Комбо Для Двоих",
        //         "ingredients": "Крылышки в остро-томатном соусе, нагетсы фрайд,картофель фри, соус сырный, кетчуп",
        //         "weight": 0,
        //         "price": 1099
        //     },
        //     {
        //         "Id": 27,
        //         "category": "Наборы",
        //         "imageUrl": "/images/dish/combo/KomboForOne-300x300.webp",
        //         "title": "Комбо Для Одного",
        //         "ingredients": "Нагетсы фрайд, картофель фри, салат Хен-пай, соус сырный, морс",
        //         "weight": 0,
        //         "price": 489
        //     },
        //     {
        //         "Id": 28,
        //         "category": "Наборы",
        //         "imageUrl": "/images/dish/combo/KomboHotChicken-300x300.webp",
        //         "title": "Комбо Горячая Курочка",
        //         "ingredients": "Крылышки фрайд, картофель фри, лапша с курицей, соус сырный, морс",
        //         "weight": 0,
        //         "price": 479
        //     },
        //     {
        //         "Id": 29,
        //         "category": "Пельмени",
        //         "imageUrl": "/images/dish/pelmeni/pelmeni&bulion-300x300.webp",
        //         "title": "Пельмени С Бульоном",
        //         "ingredients": "Пельмени, майонез/сметана, зелень",
        //         "weight": 0,
        //         "price": 179
        //     },
        //     {
        //         "Id": 30,
        //         "category": "Пельмени",
        //         "imageUrl": "/images/dish/pelmeni/pelmeni&liver-300x300.webp",
        //         "title": "Пельмени По Таежному",
        //         "ingredients": "Пельмени, печень, сметана, зелень",
        //         "weight": 0,
        //         "price": 219
        //     },
        //     {
        //         "Id": 31,
        //         "category": "Сковороды",
        //         "imageUrl": "/images/dish/skovoroda/tyzhon-300x300.webp",
        //         "title": "Тяхон С Курицей И Свининой",
        //         "ingredients": "Свинина, филе куриной грудки, рис, цукини, перец болгарский, лук, яйцо, соевый соус, лист нори",
        //         "weight": 0,
        //         "price": 229
        //     },
        //     {
        //         "Id": 32,
        //         "category": "Сковороды",
        //         "imageUrl": "/images/dish/skovoroda/Chiken&Vegitable-300x300.webp",
        //         "title": "Сковорода С Курицей И Овощами",
        //         "ingredients": "Куриное филе, морковь, перец болгарский, лук репчатый, соус кисло-сладкий, чеснок",
        //         "weight": 0,
        //         "price": 239
        //     },
        //     {
        //         "Id": 33,
        //         "category": "Сковороды",
        //         "imageUrl": "/images/dish/skovoroda/Beef&Vegitable-300x300.webp",
        //         "title": "Сковорода С Говядиной И Овощами",
        //         "ingredients": "Говядина, морковь, перец болгарский, лук, фасоль стручковая, чеснок, соевый соус, мед",
        //         "weight": 0,
        //         "price": 239
        //     },
        //     {
        //         "Id": 34,
        //         "category": "Сковороды",
        //         "imageUrl": "/images/dish/skovoroda/Pork&Gribi-300x300.webp",
        //         "title": "Сковорода Со Свининой И Грибами",
        //         "ingredients": "Картофель, свинина, лук репчатый, шампиньоны, чеснок, зелень",
        //         "weight": 0,
        //         "price": 239
        //     },
        //     {
        //         "Id": 35,
        //         "category": "На компанию",
        //         "imageUrl": "/images/dish/company/ManyMeat-300x300.webp",
        //         "title": "Мясной Пир",
        //         "ingredients": "куриная грудка гриль, люля-кебаб из говядины, шашлык из свинины, картофель, капуста маринованная, лаваш, лук маринованный, соус томатный, горчица",
        //         "weight": 0,
        //         "price": 999
        //     },
        //     {
        //         "Id": 36,
        //         "category": "На компанию",
        //         "imageUrl": "/images/dish/company/VeryManyMeat-300x300.webp",
        //         "title": "Блюдо Мясника",
        //         "ingredients": "шашлык из свинины, ребрышки гриль, куриные крылышки, капуста маринованная, лаваш, лук маринованный, картофель, цукини, перец, помидоры черри, соус томатный, горчица",
        //         "weight": 0,
        //         "price": 1297
        //     },
        //     {
        //         "Id": 37,
        //         "category": "На компанию",
        //         "imageUrl": "/images/dish/company/AssortiForBeer-300x300.webp",
        //         "title": "Пивное Ассорти",
        //         "ingredients": "Гарлики, кальмар в темпуре, филе куриное в соусе барбекю, картофель фри, соус майонезно-горчичный, соус томатный",
        //         "weight": 0,
        //         "price": 599
        //     },
        //     {
        //         "Id": 38,
        //         "category": "На компанию",
        //         "imageUrl": "/images/dish/company/AssortiForBeer-300x300.webp",
        //         "title": "Пивная Тарелка",
        //         "ingredients": "Крыло в соусе барбекю, кальмар в темпуре, картофель фри, сырные палочки, соус тар-тар, соус томатный",
        //         "weight": 0,
        //         "price": 698
        //     },
        //     {
        //         "Id": 39,
        //         "category": "К Пиву",
        //         "imageUrl": "/images/dish/vs_beer/Cheese_Stiсk-300x300.webp",
        //         "title": "Сырные Палочки",
        //         "ingredients": "сыр Гауда в панировке, майонез, соус Чили",
        //         "weight": 0,
        //         "price": 239
        //     },
        //     {
        //         "Id": 40,
        //         "category": "К Пиву",
        //         "imageUrl": "/images/dish/vs_beer/Garliki-300x300.webp",
        //         "title": "Гарлики",
        //         "ingredients": "Бородинский хлеб в чесночном масле со специями, соус майонезный тар-тар",
        //         "weight": 0,
        //         "price": 139
        //     },
        //     {
        //         "Id": 41,
        //         "category": "К Пиву",
        //         "imageUrl": "/images/dish/vs_beer/Krevetki&Tempur-300x300.webp",
        //         "title": "Креветки В Темпуре",
        //         "ingredients": "Креветка, панировка, соус чили, майонез",
        //         "weight": 0,
        //         "price": 363
        //     },
        //     {
        //         "Id": 42,
        //         "category": "К Пиву",
        //         "imageUrl": "/images/dish/vs_beer/Kalmar&Tempur-300x300.webp",
        //         "title": "Кальмар В Темпуре",
        //         "ingredients": "Кальмар, панировка, соус майонезно-чесночный",
        //         "weight": 0,
        //         "price": 159
        //     },
        //     {
        //         "Id": 43,
        //         "category": "Нагетсы",
        //         "imageUrl": "/images/dish/nagets/NagetsChili-300x300.webp",
        //         "title": "Нагетсы Чили",
        //         "ingredients": "Филе грудки курицы, панировка, соус чили",
        //         "weight": 0,
        //         "price": 289
        //     },
        //     {
        //         "Id": 44,
        //         "category": "Нагетсы",
        //         "imageUrl": "/images/dish/nagets/NagetsBarbecu-300x300.webp",
        //         "title": "Нагетсы Барбекю",
        //         "ingredients": "Филе грудки курицы, панировка, соус барбекю",
        //         "weight": 0,
        //         "price": 289
        //     },
        //     {
        //         "Id": 45,
        //         "category": "Нагетсы",
        //         "imageUrl": "/images/dish/nagets/NagetsCheeseSnow-300x300.webp",
        //         "title": "Нагетсы Сырный Снег",
        //         "ingredients": "Филе грудки курицы, панировка, сырный снег",
        //         "weight": 0,
        //         "price": 289
        //     },
        //     {
        //         "Id": 46,
        //         "category": "Нагетсы",
        //         "imageUrl": "/images/dish/nagets/NagetsFide-300x300.webp",
        //         "title": "Нагетсы Фрайд",
        //         "ingredients": "Филе грудки курицы, панировка",
        //         "weight": 0,
        //         "price": 259
        //     },
        //     {
        //         "Id": 47,
        //         "category": "Нагетсы",
        //         "imageUrl": "/images/dish/nagets/WingsChili-300x300.webp",
        //         "title": "Крыло Чили",
        //         "ingredients": "Крыло, панировка, соус чили",
        //         "weight": 0,
        //         "price": 318
        //     },
        //     {
        //         "Id": 48,
        //         "category": "Нагетсы",
        //         "imageUrl": "/images/dish/nagets/WingsBarbecu-300x300.webp",
        //         "title": "Крыло Барбекю",
        //         "ingredients": "Крыло, панировка, соус барбекю",
        //         "weight": 0,
        //         "price": 318
        //     },
        //     {
        //         "Id": 49,
        //         "category": "Нагетсы",
        //         "imageUrl": "/images/dish/nagets/WingsCheeseSnow-300x300.webp",
        //         "title": "Крыло Сырный Снег",
        //         "ingredients": "Крыло, панировка, сырный снег",
        //         "weight": 0,
        //         "price": 318
        //     },
        //     {
        //         "Id": 50,
        //         "category": "Нагетсы",
        //         "imageUrl": "/images/dish/nagets/WingsFride-1-300x300.webp",
        //         "title": "Крыло Фрайд",
        //         "ingredients": "Крыло, панировка",
        //         "weight": 0,
        //         "price": 289
        //     },
        //     {
        //         "Id": 51,
        //         "category": "Супы",
        //         "imageUrl": "/images/dish/sup/tomyam-300x300.webp",
        //         "title": "Том Ям С Куриной Грудкой",
        //         "ingredients": "Паста Том Ям, кокосовое молоко, соус рыбный, шампиньоны свежие, поммидоры черри, филе куриной грудки, рис, лимон, зелёный лук",
        //         "weight": 0,
        //         "price": 279
        //     },
        //     {
        //         "Id": 52,
        //         "category": "Супы",
        //         "imageUrl": "/images/dish/sup/SupChicken-300x300.webp",
        //         "title": "Суп Куринный С Клецками",
        //         "ingredients": "Куриная грудка, лук репчатый, морковь, картофель, клецки пшеничные, зелень",
        //         "weight": 0,
        //         "price": 129
        //     },
        //     {
        //         "Id": 53,
        //         "category": "Супы",
        //         "imageUrl": "/images/dish/sup/Solyanka-300x300.webp",
        //         "title": "Солянка",
        //         "ingredients": "Филе куриное, говядина, свинина, сервелат копченый,огурец маринованный, лук репчатый, маслины, картофель, сметана, зелень, лимон",
        //         "weight": 0,
        //         "price": 259
        //     },
        //     {
        //         "Id": 54,
        //         "category": "Супы",
        //         "imageUrl": "/images/dish/sup/SupChicken&Noodles-300x300.webp",
        //         "title": "Куринный С Лапшой",
        //         "ingredients": "Курица, лук, морковь, лапша пшеничная, яйцо, зелень",
        //         "weight": 0,
        //         "price": 139
        //     },
        //     {
        //         "Id": 55,
        //         "category": "Супы",
        //         "imageUrl": "/images/dish/sup/Boohler-300x300.webp",
        //         "title": "Бухлер",
        //         "ingredients": "Говядина, картофель, морковь, лук репчатый, зелень",
        //         "weight": 0,
        //         "price": 199
        //     },
        //     {
        //         "Id": 56,
        //         "category": "Супы",
        //         "imageUrl": "/images/dish/sup/Shulen-300x300.webp",
        //         "title": "Шулэн С Бараниной",
        //         "ingredients": "Баранина, лук репчатый, лапша пшеничная, зелень",
        //         "weight": 0,
        //         "price": 279
        //     },
        //     {
        //         "Id": 57,
        //         "category": "Лапша",
        //         "imageUrl": "/images/dish/wok/Noodles&Vegitable-300x300.webp",
        //         "title": "Лапша С Овощами",
        //         "ingredients": "Пшеничная лапша, морковь, лук, перец болгарский,Фасоль, чеснок, яйцо, соус Пад-тай, арахис",
        //         "weight": 0,
        //         "price": 209
        //     },
        //     {
        //         "Id": 58,
        //         "category": "Лапша",
        //         "imageUrl": "/images/dish/wok/Noodles&Becon-300x300.webp",
        //         "title": "Лапша С Беконом",
        //         "ingredients": "Пшеничная лапша, бекон, сливки, сыр",
        //         "weight": 0,
        //         "price": 269
        //     },
        //     {
        //         "Id": 59,
        //         "category": "Лапша",
        //         "imageUrl": "/images/dish/wok/Noodles&Pork-300x300.webp",
        //         "title": "Лапша Со Свининой",
        //         "ingredients": "Пшеничная лапша, свинина, лук, перец болгарский,брокколи, шампиньоны, чеснок, соус Терияки, кунжут",
        //         "weight": 0,
        //         "price": 209
        //     },
        //     {
        //         "Id": 60,
        //         "category": "Лапша",
        //         "imageUrl": "/images/dish/wok/Noodles&Beef-300x300.webp",
        //         "title": "Лапша С Говядиной",
        //         "ingredients": "Пшеничная лапша, говядина, морковь, лук, фасоль стручковая, перец болгарский, чеснок, соус Терияки, кунжут",
        //         "weight": 0,
        //         "price": 209
        //     },
        //     {
        //         "Id": 61,
        //         "category": "Лапша",
        //         "imageUrl": "/images/dish/wok/Noodles&Chiсken-300x300.webp",
        //         "title": "Лапша С Курицей",
        //         "ingredients": "Пшеничная лапша, куриное филе, лук репчатый, морковь, перец болгарский, чеснок, соус свит-чили, соус Унаги, кунжут",
        //         "weight": 0,
        //         "price": 209
        //     },
        //     {
        //         "Id": 62,
        //         "category": "Салаты",
        //         "imageUrl": "/images/dish/salads/Salad&Funchesa&Fasol-300x300.webp",
        //         "title": "Тёплый Салат С Фунчёзой И Фасолью",
        //         "ingredients": "Фасоль стручковая, перец болгарский, фунчёза, лук, смесь арахиса и перца, чесночное масло",
        //         "weight": 0,
        //         "price": 199
        //     },
        //     {
        //         "Id": 63,
        //         "category": "Салаты",
        //         "imageUrl": "/images/dish/salads/SaladCukini-300x300.webp",
        //         "title": "Тёплый Салат С Цукини",
        //         "ingredients": "Цукини, шея свиная, помидоры, лук красный, устричный соус, соус свит чили, кунжут",
        //         "weight": 0,
        //         "price": 229
        //     },
        //     {
        //         "Id": 64,
        //         "category": "Салаты",
        //         "imageUrl": "/images/dish/salads/BlinSalad-300x300.webp",
        //         "title": "Салат С Говядиной И Яичным Блинчиком",
        //         "ingredients": "Перец болгарский, помидоры свежие, сыр Гауда, ростбиф, лук, яичный блинчик, огурец свежий, чесночное масло, майонез",
        //         "weight": 0,
        //         "price": 219
        //     },
        //     {
        //         "Id": 65,
        //         "category": "Салаты",
        //         "imageUrl": "/images/dish/salads/SaladCaesar-300x300.webp",
        //         "title": "Цезарь С Курицей",
        //         "ingredients": "Запеченная куриная грудка, лист салата, помидоры черри, соус Цезарь, пшеничные гренки, сыр",
        //         "weight": 0,
        //         "price": 279
        //     },
        //     {
        //         "Id": 66,
        //         "category": "Салаты",
        //         "imageUrl": "/images/dish/salads/KoreanMorkov-300x300.webp",
        //         "title": "Морковь По Корейски",
        //         "ingredients": "Морковь по-корейски, кунжут",
        //         "weight": 0,
        //         "price": 149
        //     },
        //     {
        //         "Id": 67,
        //         "category": "Салаты",
        //         "imageUrl": "/images/dish/salads/SaladVegitable-300x300.webp",
        //         "title": "Cалат Овощной",
        //         "ingredients": "Лист салата, помидор, огурец, перец болгарский, масло подсолнечное",
        //         "weight": 0,
        //         "price": 159
        //     },
        //     {
        //         "Id": 68,
        //         "category": "Салаты",
        //         "imageUrl": "/images/dish/salads/PokeChicken-300x300.webp",
        //         "title": "Поке С Курицей",
        //         "ingredients": "Запеченная куриная грудка, огурец, помидоры черри, кукуруза, яйцо, соус Песто",
        //         "weight": 0,
        //         "price": 219
        //     },
        //     {
        //         "Id": 69,
        //         "category": "Салаты",
        //         "imageUrl": "/images/dish/salads/PokeVegitable-300x300.webp",
        //         "title": "Поке С Овощами",
        //         "ingredients": "Суши рис, чука, огурец, помидоры черри, морковь по-корейски, соус ореховый, кунжут",
        //         "weight": 0,
        //         "price": 159
        //     },
        //     {
        //         "Id": 70,
        //         "category": "Салаты",
        //         "imageUrl": "/images/dish/salads/Olivie-300x300.webp",
        //         "title": "Оливье С Курицей",
        //         "ingredients": "Запеченная куриная грудка, картофель, морковь, огурец, горошек, яйцо лист салата, майонез",
        //         "weight": 0,
        //         "price": 159
        //     },
        //     {
        //         "Id": 71,
        //         "category": "Салаты",
        //         "imageUrl": "/images/dish/salads/SaladKalmar-300x300.webp",
        //         "title": "Салат С Кальмаром",
        //         "ingredients": "Лист салата, кальмар, помидоры черри, огурец, яйцо, соевый соус, соус Унаги",
        //         "weight": 0,
        //         "price": 219
        //     },
        //     {
        //         "Id": 72,
        //         "category": "Салаты",
        //         "imageUrl": "/images/dish/salads/SaladRostbeef-300x300.webp",
        //         "title": "Салат С Ростбифом",
        //         "ingredients": "Лист салата, ростбиф, шампиньоны, помидоры черри, огурец, соус медово-горчичный",
        //         "weight": 0,
        //         "price": 259
        //     },
        //     {
        //         "Id": 73,
        //         "category": "Салаты",
        //         "imageUrl": "/images/dish/salads/HenPai-300x300.webp",
        //         "title": "Хен Пай",
        //         "ingredients": "Суши рис, чука, огурец, помидоры черри, морковь по-корейски, соус ореховый, кунжут",
        //         "weight": 0,
        //         "price": 169
        //     },
        //     {
        //         "Id": 74,
        //         "category": "Гарниры",
        //         "imageUrl": "/images/dish/garnir/Rice&Vegitable-300x300.webp",
        //         "title": "Рис С Овощами",
        //         "ingredients": "Рис С Овощами",
        //         "weight": 0,
        //         "price": 59
        //     },
        //     {
        //         "Id": 75,
        //         "category": "Гарниры",
        //         "imageUrl": "/images/dish/garnir/Vegitable_Grill-300x300.webp",
        //         "title": "Овощи Гриль",
        //         "ingredients": "Овощи Гриль",
        //         "weight": 0,
        //         "price": 199
        //     },
        //     {
        //         "Id": 76,
        //         "category": "Гарниры",
        //         "imageUrl": "/images/dish/garnir/PotatoPure-300x300.webp",
        //         "title": "Картофельное Пюре",
        //         "ingredients": "Картофельное Пюре",
        //         "weight": 0,
        //         "price": 49
        //     },
        //     {
        //         "Id": 77,
        //         "category": "Гарниры",
        //         "imageUrl": "/images/dish/garnir/PotatoFri-300x300.webp",
        //         "title": "Картофель Фри",
        //         "ingredients": "Картофель Фри",
        //         "weight": 0,
        //         "price": 99
        //     },
        //     {
        //         "Id": 78,
        //         "category": "Закуски",
        //         "imageUrl": "/images/dish/zakuska/FreshVegitable-300x300.webp",
        //         "title": "Нарезка Из Свежих Овощей",
        //         "ingredients": "Огурец, болгарский перец, помидор, лист салата",
        //         "weight": 160,
        //         "price": 189
        //     },
        //     {
        //         "Id": 79,
        //         "category": "Закуски",
        //         "imageUrl": "/images/dish/zakuska/SaltVegitable-300x300.webp",
        //         "title": "Разносолы",
        //         "ingredients": "Капуста маринованная, огурцы маринованные, помидоры маринованные, лист салата, лук",
        //         "weight": 150,
        //         "price": 189
        //     },
        //     {
        //         "Id": 80,
        //         "category": "Для детей",
        //         "imageUrl": "/images/dish/zakuska/FreshVegitable-300x300.webp",
        //         "title": "Нарезка Из Свежих Овощей",
        //         "ingredients": "Огурец, болгарский перец, помидор, лист салата",
        //         "weight": 160,
        //         "price": 189
        //     },
        //     {
        //         "Id": 81,
        //         "category": "Для детей",
        //         "imageUrl": "/images/dish/zakuska/SaltVegitable-300x300.webp",
        //         "title": "Разносолы",
        //         "ingredients": "Капуста маринованная, огурцы маринованные, помидоры маринованные, лист салата, лук",
        //         "weight": 150,
        //         "price": 189
        //     },
        //     {
        //         "Id": 82,
        //         "category": "Для детей",
        //         "imageUrl": "/images/dish/zakuska/FreshVegitable-300x300.webp",
        //         "title": "Нарезка Из Свежих Овощей",
        //         "ingredients": "Огурец, болгарский перец, помидор, лист салата",
        //         "weight": 160,
        //         "price": 189
        //     },
        //     {
        //         "Id": 83,
        //         "category": "Для детей",
        //         "imageUrl": "/images/dish/zakuska/SaltVegitable-300x300.webp",
        //         "title": "Разносолы",
        //         "ingredients": "Капуста маринованная, огурцы маринованные, помидоры маринованные, лист салата, лук",
        //         "weight": 150,
        //         "price": 189
        //     },
        //     {
        //         "Id": 84,
        //         "category": "Для детей",
        //         "imageUrl": "/images/dish/zakuska/FreshVegitable-300x300.webp",
        //         "title": "Нарезка Из Свежих Овощей",
        //         "ingredients": "Огурец, болгарский перец, помидор, лист салата",
        //         "weight": 160,
        //         "price": 189
        //     },
        //     {
        //         "Id": 85,
        //         "category": "Для детей",
        //         "imageUrl": "/images/dish/zakuska/SaltVegitable-300x300.webp",
        //         "title": "Разносолы",
        //         "ingredients": "Капуста маринованная, огурцы маринованные, помидоры маринованные, лист салата, лук",
        //         "weight": 150,
        //         "price": 189
        //     },
        //     {
        //         "Id": 86,
        //         "category": "Для детей",
        //         "imageUrl": "/images/dish/zakuska/FreshVegitable-300x300.webp",
        //         "title": "Нарезка Из Свежих Овощей",
        //         "ingredients": "Огурец, болгарский перец, помидор, лист салата",
        //         "weight": 160,
        //         "price": 189
        //     },
        //     {
        //         "Id": 87,
        //         "category": "Для детей",
        //         "imageUrl": "/images/dish/zakuska/SaltVegitable-300x300.webp",
        //         "title": "Разносолы",
        //         "ingredients": "Капуста маринованная, огурцы маринованные, помидоры маринованные, лист салата, лук",
        //         "weight": 150,
        //         "price": 189
        //     },
        //     {
        //         "Id": 88,
        //         "category": "Десерты",
        //         "imageUrl": "/images/dish/dessert/TortChocolad-300x300.webp",
        //         "title": "Торт 'Шоколадный'",
        //         "ingredients": "Торт 'Шоколадный'",
        //         "weight": 0,
        //         "price": 179
        //     },
        //     {
        //         "Id": 89,
        //         "category": "Десерты",
        //         "imageUrl": "/images/dish/dessert/Banan&Caramel-300x300.webp",
        //         "title": "Банан С Карамелью",
        //         "ingredients": "Банан С Карамелью",
        //         "weight": 0,
        //         "price": 139
        //     },
        //     {
        //         "Id": 90,
        //         "category": "Десерты",
        //         "imageUrl": "/images/dish/dessert/Sneakers-300x300.webp",
        //         "title": "Сникерс",
        //         "ingredients": "Сникерс",
        //         "weight": 0,
        //         "price": 139
        //     },
        //     {
        //         "Id": 91,
        //         "category": "Десерты",
        //         "imageUrl": "/images/dish/dessert/CheeseCakeClassic-300x300.webp",
        //         "title": "Чизкейк Классический",
        //         "ingredients": "Чизкейк Классический",
        //         "weight": 0,
        //         "price": 110
        //     },
        //     {
        //         "Id": 92,
        //         "category": "Десерты",
        //         "imageUrl": "/images/dish/dessert/CheeseCake&Grusha-300x300.webp",
        //         "title": "Чизкейк Грушенька",
        //         "ingredients": "Чизкейк Грушенька",
        //         "weight": 0,
        //         "price": 119
        //     },
        //     {
        //         "Id": 93,
        //         "category": "Десерты",
        //         "imageUrl": "/images/dish/dessert/Blini-300x300.webp",
        //         "title": "Блины с джемом",
        //         "ingredients": "Блины с джемом 3 шт.",
        //         "weight": 0,
        //         "price": 139
        //     },
        //     {
        //         "Id": 94,
        //         "category": "Десерты",
        //         "imageUrl": "/images/dish/dessert/Blini-300x300.webp",
        //         "title": "Блины со сгущенкой",
        //         "ingredients": "Блины со сгущенкой 3 шт.",
        //         "weight": 0,
        //         "price": 139
        //     },
        //     {
        //         "Id": 95,
        //         "category": "Десерты",
        //         "imageUrl": "/images/dish/dessert/Blini-300x300.webp",
        //         "title": "Блины со сметаной",
        //         "ingredients": "Блины со сметаной 3 шт.",
        //         "weight": 0,
        //         "price": 139
        //     },
        //     {
        //         "Id": 96,
        //         "category": "Соусы",
        //         "imageUrl": "/images/dish/sous/sous-300x300.webp",
        //         "title": "Соус Барбекю",
        //         "ingredients": "Соус Барбекю",
        //         "weight": 0,
        //         "price": 69
        //     },
        //     {
        //         "Id": 97,
        //         "category": "Соусы",
        //         "imageUrl": "/images/dish/sous/sous-300x300.webp",
        //         "title": "Соус Горчица",
        //         "ingredients": "Соус Горчица",
        //         "weight": 0,
        //         "price": 69
        //     },
        //     {
        //         "Id": 98,
        //         "category": "Соусы",
        //         "imageUrl": "/images/dish/sous/sous-300x300.webp",
        //         "title": "Соус Медово-горчичный",
        //         "ingredients": "Соус Медово-горчичный",
        //         "weight": 0,
        //         "price": 69
        //     },
        //     {
        //         "Id": 99,
        //         "category": "Соусы",
        //         "imageUrl": "/images/dish/sous/sous-300x300.webp",
        //         "title": "Соус Тар-Тар",
        //         "ingredients": "Соус Тар-Тар",
        //         "weight": 0,
        //         "price": 69
        //     },
        //     {
        //         "Id": 100,
        //         "category": "Соусы",
        //         "imageUrl": "/images/dish/sous/sous-300x300.webp",
        //         "title": "Соус Чесночный",
        //         "ingredients": "Соус Чесночный",
        //         "weight": 0,
        //         "price": 69
        //     },
        //     {
        //         "Id": 101,
        //         "category": "Соусы",
        //         "imageUrl": "/images/dish/sous/sous-300x300.webp",
        //         "title": "Кетчуп Томатный",
        //         "ingredients": "Кетчуп Томатный",
        //         "weight": 0,
        //         "price": 39
        //     },
        //     {
        //         "Id": 102,
        //         "category": "Соусы",
        //         "imageUrl": "/images/dish/sous/sous-300x300.webp",
        //         "title": "Соус Соевый",
        //         "ingredients": "Соус Соевый",
        //         "weight": 0,
        //         "price": 39
        //     },
        //     {
        //         "Id": 103,
        //         "category": "Соусы",
        //         "imageUrl": "/images/dish/sous/sous-300x300.webp",
        //         "title": "Сметана",
        //         "ingredients": "Сметана",
        //         "weight": 0,
        //         "price": 39
        //     },
        //     {
        //         "Id": 104,
        //         "category": "Соусы",
        //         "imageUrl": "/images/dish/sous/sous-300x300.webp",
        //         "title": "Соус Майонез",
        //         "ingredients": "Соус Майонез",
        //         "weight": 0,
        //         "price": 39
        //     }
        // ],
        cart: [],
        quantity: 0,
        total: 0,
    },
    // Мутации - синхронны
    mutations: {
        SET_PRODUCTS_TO_STATE: (state, products) => {
            state.products = products;
        },

        SET_CART: (state, product) => {
            state.cart.push(product);
            product.quantity = 1;
            product.isAdded = true;
            console.log(state.cart);
        },

        CLEAR_CART: (state) => {
            state.cart = [];
        },

        REMOVE_FROM_CART: (state, index) => {
            state.cart.splice(index, 1);
        },
        INCREMENT: (state, index) => {
            state.cart[index].quantity++;
        },
        DECREMENT: (state, index) => {
            if (state.cart[index].quantity > 1) {
                state.cart[index].quantity--;
            }
        },
    },
    // Акшены - асинхронны
    actions: {
        /*GET_PRODUCTS_FROM_API({commit}) {
            return axios('https://9b25d366b1aceedb.mokky.dev/products', {
                method: "GET"
            })
                .then((products) => {
                    // Добавляем количество товаров в объект
                    products.data.map((item) => {
                        item.quantity = 1;
                        item.isAdded = false;
                    });
                    commit('SET_PRODUCTS_TO_STATE', products.data);
                    return products;
                })
                .catch((error) => {
                    console.log(error);
                    return error;
                });
        },*/
        /*async GET_PRODUCTS_FROM_API({commit}) {
            try {
                await axios.get('https://9b25d366b1aceedb.mokky.dev/products')
                    .then((products) => {
                        // Добавляем количество товаров в объект
                        products.data.map((item) => {
                            item.quantity = 1;
                            item.isAdded = false;
                        });
                        commit('SET_PRODUCTS_TO_STATE', products.data);
                        return products;
                    })
            } catch(error) {
                        console.log(error);
                        return error;
                    }
         },*/

        ADD_TO_CART({state, commit}, product) {
            commit('SET_CART', product);
        },

        INCREMENT_CART_ITEM({commit}, index) {
            commit('INCREMENT', index);
        },
        DECREMENT_CART_ITEM({commit}, index) {
            commit('DECREMENT', index);
        },
        DELETE_FROM_CART({commit}, index) {
            commit('REMOVE_FROM_CART', index);
        },
    },
    getters: {
        PRODUCTS(state) {
            return state.products;
        },
        CART(state) {
            return state.cart;
        },
        quantity(state) {
            return state.quantity;
        },
        totalSum(state) {
            return state.total;
        },
        cartTotalCost: (state, getters) => {
            return getters.PRODUCTS.reduce((total, product) => {
                return total + product.price * product.quantity;
            }, 0);
        }
    }
});

export default store;

// products: [
//     {
//         "Id": 1,
//         "category": "Буузы",
//         "imageUrl": "/images/dish/buuz/Buuza&Meat&Kapusta-300x300.webp",
//         "title": "Буузы с мясом и капустой",
//         "ingredients": "Свинина, говядина, капуста б/к, лук репчатый",
//         "weight": 0,
//         "price": 75
//     },
//     {
//         "Id": 2,
//         "category": "Буузы",
//         "imageUrl": "/images/dish/buuz/BuuzaClassic-300x300.webp",
//         "title": "Бууза Классическая",
//         "ingredients": "Свинина, говядина, лук репчатый",
//         "weight": 0,
//         "price": 75
//     },
//     {
//         "Id": 3,
//         "category": "Буузы",
//         "imageUrl": "/images/dish/buuz/BuuzaAssortiForTwo-300x300.webp",
//         "title": "Ассорти На Двоих",
//         "ingredients": "",
//         "weight": 0,
//         "price": 839
//     },
//     {
//         "Id": 4,
//         "category": "Буузы",
//         "imageUrl": "/images/dish/buuz/BuuzaAssortiTest-300x300.webp",
//         "title": "Ассорти На Пробу",
//         "ingredients": "Буза рубленая 1 шт., буза овощная 1шт.,буза классическая 1 шт., манты с курицей и сыром 1шт.,манты рубленые, жареная 1 шт., лист салата, огурец, помидор,лук, перец болгарский, соевый соус, майонез, зелень",
//         "weight": 0,
//         "price": 379
//     },
//     {
//         "Id": 5,
//         "category": "Буузы",
//         "imageUrl": "/images/dish/buuz/BuuzaVegitable-300x300.webp",
//         "title": "Бууза Овощная",
//         "ingredients": "Лук репчатый, морковь, перец болгарский,капуста, шампиньоны, соевый соус",
//         "weight": 0,
//         "price": 75
//     },
//     {
//         "Id": 6,
//         "category": "Буузы",
//         "imageUrl": "/images/dish/buuz/SweetBuuza-300x300.webp",
//         "title": "Бууза Сладкая",
//         "ingredients": "Банан, яблоко, шоколад",
//         "weight": 0,
//         "price": 75
//     },
//     {
//         "Id": 7,
//         "category": "Буузы",
//         "imageUrl": "/images/dish/buuz/MantaBeef-300x300.webp",
//         "title": "Манта Жареная С Рубленным Фаршем",
//         "ingredients": "Cвинина, говядина, лук репчатый",
//         "weight": 0,
//         "price": 75
//     },
//     {
//         "Id": 8,
//         "category": "Буузы",
//         "imageUrl": "/images/dish/buuz/MantaChicken-300x300.webp",
//         "title": "Манта С Курицей",
//         "ingredients": "Куриное филе, сыр",
//         "weight": 0,
//         "price": 75
//     },
//     {
//         "Id": 9,
//         "category": "Буузы",
//         "imageUrl": "/images/dish/buuz/Cheburek-300x300.webp",
//         "title": "Чебурек с мясом",
//         "ingredients": "",
//         "weight": 0,
//         "price": 110
//     },
//     {
//         "Id": 10,
//         "category": "Буузы",
//         "imageUrl": "/images/dish/buuz/Cheburek-300x300.webp",
//         "title": "Чебурек с мясом и сыром",
//         "ingredients": "",
//         "weight": 0,
//         "price": 110
//     },
//     {
//         "Id": 11,
//         "category": "Буузы",
//         "imageUrl": "/images/dish/buuz/Cheburek-300x300.webp",
//         "title": "Чебурек с сыром",
//         "ingredients": "",
//         "weight": 0,
//         "price": 159
//     },
//     {
//         "Id": 12,
//         "category": "Гриль",
//         "imageUrl": "/images/dish/grill/Shashlik&Sheya_Lopatka-600x600.webp",
//         "title": "Шашлык Из Свинины (Шея)",
//         "ingredients": "Шея свиная, лук маринованный, капуста маринованная,лаваш, соус томатный",
//         "weight": 0,
//         "price": 359
//     },
//     {
//         "Id": 13,
//         "category": "Гриль",
//         "imageUrl": "/images/dish/grill/Shashlik&Sheya_Lopatka-600x600.webp",
//         "title": "Шашлык Из Свинины (Лопатка)",
//         "ingredients": "Лопатка свиная, лук маринованный, капуста маринованная,лаваш, соус томатный",
//         "weight": 0,
//         "price": 289
//     },
//     {
//         "Id": 14,
//         "category": "Гриль",
//         "imageUrl": "/images/dish/grill/Shashlik&ChickenLegs-300x300.webp",
//         "title": "Шашлык Из Куринных Бедер",
//         "ingredients": "Филе бедер, лук маринованный, капуста маринованная,лаваш, соус томатный",
//         "weight": 0,
//         "price": 299
//     },
//     {
//         "Id": 15,
//         "category": "Гриль",
//         "imageUrl": "/images/dish/grill/Shaurma&Chicken_Pork-300x300.webp",
//         "title": "Шашлык в Лаваше с Курицей",
//         "ingredients": "Шея свиная, лук маринованный,капуста маринованная, лаваш, соус томатный",
//         "weight": 0,
//         "price": 319
//     },
//     {
//         "Id": 16,
//         "category": "Гриль",
//         "imageUrl": "/images/dish/grill/Shaurma&Chicken_Pork-300x300.webp",
//         "title": "Шашлык в Лаваше со Свининой",
//         "ingredients": "Бедро куриное, лук маринованный,капуста маринованная, лаваш, соус томатный",
//         "weight": 0,
//         "price": 299
//     },
//     {
//         "Id": 17,
//         "category": "Гриль",
//         "imageUrl": "/images/dish/grill/KebabBeef-300x300.webp",
//         "title": "Люля Кебаб Из Говядины",
//         "ingredients": "Говядина, шпик свиной, лук маринованный, капуста маринованная, лаваш, соус томатный",
//         "weight": 0,
//         "price": 299
//     },
//     {
//         "Id": 18,
//         "category": "Гриль",
//         "imageUrl": "/images/dish/grill/KebabChicken-300x300.webp",
//         "title": "Люля Кебаб Из Курицы",
//         "ingredients": "Филе куриное, лук маринованный, капуста маринованная, лаваш, соус томатный",
//         "weight": 0,
//         "price": 239
//     },
//     {
//         "Id": 19,
//         "category": "Гриль",
//         "imageUrl": "/images/dish/grill/PorkFile_Grill-300x300.webp",
//         "title": "Отбивная Из Свиной Шеи",
//         "ingredients": "шея свиная, лист салата, перец, чеснок, огурец, соус чесночный",
//         "weight": 0,
//         "price": 399
//     },
//     {
//         "Id": 20,
//         "category": "Гриль",
//         "imageUrl": "/images/dish/grill/PorkRibs-300x300.webp",
//         "title": "Свиные Ребрышки Классические",
//         "ingredients": "Ребрышки свиные, лаваш, капуста маринованная, лук маринованный, соус томатный",
//         "weight": 0,
//         "price": 399
//     },
//     {
//         "Id": 21,
//         "category": "Гриль",
//         "imageUrl": "/images/dish/grill/ChickenFile_Grill-300x300.webp",
//         "title": "Куринная Грудка Гриль",
//         "ingredients": "Куриное филе, паприка, чеснок, цукини, соус Песто",
//         "weight": 0,
//         "price": 289
//     },
//     {
//         "Id": 22,
//         "category": "Гриль",
//         "imageUrl": "/images/dish/grill/Scumbriya_Grill-300x300.webp",
//         "title": "Скумбрия На Мангале",
//         "ingredients": "Скумбрия филе, лимон, соус тар-тар",
//         "weight": 0,
//         "price": 399
//     },
//     {
//         "Id": 23,
//         "category": "Гриль",
//         "imageUrl": "/images/dish/grill/Treska_Grill-300x300.webp",
//         "title": "Филе Трески На Гриле",
//         "ingredients": "Филе трески, рис, кукуруза, морковь, перец, соус тар-тар",
//         "weight": 0,
//         "price": 399
//     },
//     {
//         "Id": 24,
//         "category": "Наборы",
//         "imageUrl": "/images/dish/combo/File4Vkusa-300x300.webp",
//         "title": "Филе 4 Вкуса",
//         "ingredients": "Филе фрайд, филе сырный снег, филе барбекю, филе чили)",
//         "weight": 0,
//         "price": 1089
//     },
//     {
//         "Id": 25,
//         "category": "Наборы",
//         "imageUrl": "/images/dish/combo/Krilo4Vkusa-300x300.webp",
//         "title": "Крыло 4 Вкуса",
//         "ingredients": "Крыло фрайд, крыло сырный снег, крыло барбекю,Крыло чили",
//         "weight": 0,
//         "price": 1290
//     },
//     {
//         "Id": 26,
//         "category": "Наборы",
//         "imageUrl": "/images/dish/combo/KomboForTwo-300x300.webp",
//         "title": "Комбо Для Двоих",
//         "ingredients": "Крылышки в остро-томатном соусе, нагетсы фрайд,картофель фри, соус сырный, кетчуп",
//         "weight": 0,
//         "price": 1099
//     },
//     {
//         "Id": 27,
//         "category": "Наборы",
//         "imageUrl": "/images/dish/combo/KomboForOne-300x300.webp",
//         "title": "Комбо Для Одного",
//         "ingredients": "Нагетсы фрайд, картофель фри, салат Хен-пай, соус сырный, морс",
//         "weight": 0,
//         "price": 489
//     },
//     {
//         "Id": 28,
//         "category": "Наборы",
//         "imageUrl": "/images/dish/combo/KomboHotChicken-300x300.webp",
//         "title": "Комбо Горячая Курочка",
//         "ingredients": "Крылышки фрайд, картофель фри, лапша с курицей, соус сырный, морс",
//         "weight": 0,
//         "price": 479
//     },
//     {
//         "Id": 29,
//         "category": "Пельмени",
//         "imageUrl": "/images/dish/pelmeni/pelmeni&bulion-300x300.webp",
//         "title": "Пельмени С Бульоном",
//         "ingredients": "Пельмени, майонез/сметана, зелень",
//         "weight": 0,
//         "price": 179
//     },
//     {
//         "Id": 30,
//         "category": "Пельмени",
//         "imageUrl": "/images/dish/pelmeni/pelmeni&liver-300x300.webp",
//         "title": "Пельмени По Таежному",
//         "ingredients": "Пельмени, печень, сметана, зелень",
//         "weight": 0,
//         "price": 219
//     },
//     {
//         "Id": 31,
//         "category": "Сковороды",
//         "imageUrl": "/images/dish/skovoroda/tyzhon-300x300.webp",
//         "title": "Тяхон С Курицей И Свининой",
//         "ingredients": "Свинина, филе куриной грудки, рис, цукини, перец болгарский, лук, яйцо, соевый соус, лист нори",
//         "weight": 0,
//         "price": 229
//     },
//     {
//         "Id": 32,
//         "category": "Сковороды",
//         "imageUrl": "/images/dish/skovoroda/Chiken&Vegitable-300x300.webp",
//         "title": "Сковорода С Курицей И Овощами",
//         "ingredients": "Куриное филе, морковь, перец болгарский, лук репчатый, соус кисло-сладкий, чеснок",
//         "weight": 0,
//         "price": 239
//     },
//     {
//         "Id": 33,
//         "category": "Сковороды",
//         "imageUrl": "/images/dish/skovoroda/Beef&Vegitable-300x300.webp",
//         "title": "Сковорода С Говядиной И Овощами",
//         "ingredients": "Говядина, морковь, перец болгарский, лук, фасоль стручковая, чеснок, соевый соус, мед",
//         "weight": 0,
//         "price": 239
//     },
//     {
//         "Id": 34,
//         "category": "Сковороды",
//         "imageUrl": "/images/dish/skovoroda/Pork&Gribi-300x300.webp",
//         "title": "Сковорода Со Свининой И Грибами",
//         "ingredients": "Картофель, свинина, лук репчатый, шампиньоны, чеснок, зелень",
//         "weight": 0,
//         "price": 239
//     },
//     {
//         "Id": 35,
//         "category": "На компанию",
//         "imageUrl": "/images/dish/company/ManyMeat-300x300.webp",
//         "title": "Мясной Пир",
//         "ingredients": "куриная грудка гриль, люля-кебаб из говядины, шашлык из свинины, картофель, капуста маринованная, лаваш, лук маринованный, соус томатный, горчица",
//         "weight": 0,
//         "price": 999
//     },
//     {
//         "Id": 36,
//         "category": "На компанию",
//         "imageUrl": "/images/dish/company/VeryManyMeat-300x300.webp",
//         "title": "Блюдо Мясника",
//         "ingredients": "шашлык из свинины, ребрышки гриль, куриные крылышки, капуста маринованная, лаваш, лук маринованный, картофель, цукини, перец, помидоры черри, соус томатный, горчица",
//         "weight": 0,
//         "price": 1297
//     },
//     {
//         "Id": 37,
//         "category": "На компанию",
//         "imageUrl": "/images/dish/company/AssortiForBeer-300x300.webp",
//         "title": "Пивное Ассорти",
//         "ingredients": "Гарлики, кальмар в темпуре, филе куриное в соусе барбекю, картофель фри, соус майонезно-горчичный, соус томатный",
//         "weight": 0,
//         "price": 599
//     },
//     {
//         "Id": 38,
//         "category": "На компанию",
//         "imageUrl": "/images/dish/company/AssortiForBeer-300x300.webp",
//         "title": "Пивная Тарелка",
//         "ingredients": "Крыло в соусе барбекю, кальмар в темпуре, картофель фри, сырные палочки, соус тар-тар, соус томатный",
//         "weight": 0,
//         "price": 698
//     },
//     {
//         "Id": 39,
//         "category": "К Пиву",
//         "imageUrl": "/images/dish/vs_beer/Cheese_Stiсk-300x300.webp",
//         "title": "Сырные Палочки",
//         "ingredients": "сыр Гауда в панировке, майонез, соус Чили",
//         "weight": 0,
//         "price": 239
//     },
//     {
//         "Id": 40,
//         "category": "К Пиву",
//         "imageUrl": "/images/dish/vs_beer/Garliki-300x300.webp",
//         "title": "Гарлики",
//         "ingredients": "Бородинский хлеб в чесночном масле со специями, соус майонезный тар-тар",
//         "weight": 0,
//         "price": 139
//     },
//     {
//         "Id": 41,
//         "category": "К Пиву",
//         "imageUrl": "/images/dish/vs_beer/Krevetki&Tempur-300x300.webp",
//         "title": "Креветки В Темпуре",
//         "ingredients": "Креветка, панировка, соус чили, майонез",
//         "weight": 0,
//         "price": 363
//     },
//     {
//         "Id": 42,
//         "category": "К Пиву",
//         "imageUrl": "/images/dish/vs_beer/Kalmar&Tempur-300x300.webp",
//         "title": "Кальмар В Темпуре",
//         "ingredients": "Кальмар, панировка, соус майонезно-чесночный",
//         "weight": 0,
//         "price": 159
//     },
//     {
//         "Id": 43,
//         "category": "Нагетсы",
//         "imageUrl": "/images/dish/nagets/NagetsChili-300x300.webp",
//         "title": "Нагетсы Чили",
//         "ingredients": "Филе грудки курицы, панировка, соус чили",
//         "weight": 0,
//         "price": 289
//     },
//     {
//         "Id": 44,
//         "category": "Нагетсы",
//         "imageUrl": "/images/dish/nagets/NagetsBarbecu-300x300.webp",
//         "title": "Нагетсы Барбекю",
//         "ingredients": "Филе грудки курицы, панировка, соус барбекю",
//         "weight": 0,
//         "price": 289
//     },
//     {
//         "Id": 45,
//         "category": "Нагетсы",
//         "imageUrl": "/images/dish/nagets/NagetsCheeseSnow-300x300.webp",
//         "title": "Нагетсы Сырный Снег",
//         "ingredients": "Филе грудки курицы, панировка, сырный снег",
//         "weight": 0,
//         "price": 289
//     },
//     {
//         "Id": 46,
//         "category": "Нагетсы",
//         "imageUrl": "/images/dish/nagets/NagetsFide-300x300.webp",
//         "title": "Нагетсы Фрайд",
//         "ingredients": "Филе грудки курицы, панировка",
//         "weight": 0,
//         "price": 259
//     },
//     {
//         "Id": 47,
//         "category": "Нагетсы",
//         "imageUrl": "/images/dish/nagets/WingsChili-300x300.webp",
//         "title": "Крыло Чили",
//         "ingredients": "Крыло, панировка, соус чили",
//         "weight": 0,
//         "price": 318
//     },
//     {
//         "Id": 48,
//         "category": "Нагетсы",
//         "imageUrl": "/images/dish/nagets/WingsBarbecu-300x300.webp",
//         "title": "Крыло Барбекю",
//         "ingredients": "Крыло, панировка, соус барбекю",
//         "weight": 0,
//         "price": 318
//     },
//     {
//         "Id": 49,
//         "category": "Нагетсы",
//         "imageUrl": "/images/dish/nagets/WingsCheeseSnow-300x300.webp",
//         "title": "Крыло Сырный Снег",
//         "ingredients": "Крыло, панировка, сырный снег",
//         "weight": 0,
//         "price": 318
//     },
//     {
//         "Id": 50,
//         "category": "Нагетсы",
//         "imageUrl": "/images/dish/nagets/WingsFride-1-300x300.webp",
//         "title": "Крыло Фрайд",
//         "ingredients": "Крыло, панировка",
//         "weight": 0,
//         "price": 289
//     },
//     {
//         "Id": 51,
//         "category": "Супы",
//         "imageUrl": "/images/dish/sup/tomyam-300x300.webp",
//         "title": "Том Ям С Куриной Грудкой",
//         "ingredients": "Паста Том Ям, кокосовое молоко, соус рыбный, шампиньоны свежие, поммидоры черри, филе куриной грудки, рис, лимон, зелёный лук",
//         "weight": 0,
//         "price": 279
//     },
//     {
//         "Id": 52,
//         "category": "Супы",
//         "imageUrl": "/images/dish/sup/SupChicken-300x300.webp",
//         "title": "Суп Куринный С Клецками",
//         "ingredients": "Куриная грудка, лук репчатый, морковь, картофель, клецки пшеничные, зелень",
//         "weight": 0,
//         "price": 129
//     },
//     {
//         "Id": 53,
//         "category": "Супы",
//         "imageUrl": "/images/dish/sup/Solyanka-300x300.webp",
//         "title": "Солянка",
//         "ingredients": "Филе куриное, говядина, свинина, сервелат копченый,огурец маринованный, лук репчатый, маслины, картофель, сметана, зелень, лимон",
//         "weight": 0,
//         "price": 259
//     },
//     {
//         "Id": 54,
//         "category": "Супы",
//         "imageUrl": "/images/dish/sup/SupChicken&Noodles-300x300.webp",
//         "title": "Куринный С Лапшой",
//         "ingredients": "Курица, лук, морковь, лапша пшеничная, яйцо, зелень",
//         "weight": 0,
//         "price": 139
//     },
//     {
//         "Id": 55,
//         "category": "Супы",
//         "imageUrl": "/images/dish/sup/Boohler-300x300.webp",
//         "title": "Бухлер",
//         "ingredients": "Говядина, картофель, морковь, лук репчатый, зелень",
//         "weight": 0,
//         "price": 199
//     },
//     {
//         "Id": 56,
//         "category": "Супы",
//         "imageUrl": "/images/dish/sup/Shulen-300x300.webp",
//         "title": "Шулэн С Бараниной",
//         "ingredients": "Баранина, лук репчатый, лапша пшеничная, зелень",
//         "weight": 0,
//         "price": 279
//     },
//     {
//         "Id": 57,
//         "category": "Лапша",
//         "imageUrl": "/images/dish/wok/Noodles&Vegitable-300x300.webp",
//         "title": "Лапша С Овощами",
//         "ingredients": "Пшеничная лапша, морковь, лук, перец болгарский,Фасоль, чеснок, яйцо, соус Пад-тай, арахис",
//         "weight": 0,
//         "price": 209
//     },
//     {
//         "Id": 58,
//         "category": "Лапша",
//         "imageUrl": "/images/dish/wok/Noodles&Becon-300x300.webp",
//         "title": "Лапша С Беконом",
//         "ingredients": "Пшеничная лапша, бекон, сливки, сыр",
//         "weight": 0,
//         "price": 269
//     },
//     {
//         "Id": 59,
//         "category": "Лапша",
//         "imageUrl": "/images/dish/wok/Noodles&Pork-300x300.webp",
//         "title": "Лапша Со Свининой",
//         "ingredients": "Пшеничная лапша, свинина, лук, перец болгарский,брокколи, шампиньоны, чеснок, соус Терияки, кунжут",
//         "weight": 0,
//         "price": 209
//     },
//     {
//         "Id": 60,
//         "category": "Лапша",
//         "imageUrl": "/images/dish/wok/Noodles&Beef-300x300.webp",
//         "title": "Лапша С Говядиной",
//         "ingredients": "Пшеничная лапша, говядина, морковь, лук, фасоль стручковая, перец болгарский, чеснок, соус Терияки, кунжут",
//         "weight": 0,
//         "price": 209
//     },
//     {
//         "Id": 61,
//         "category": "Лапша",
//         "imageUrl": "/images/dish/wok/Noodles&Chiсken-300x300.webp",
//         "title": "Лапша С Курицей",
//         "ingredients": "Пшеничная лапша, куриное филе, лук репчатый, морковь, перец болгарский, чеснок, соус свит-чили, соус Унаги, кунжут",
//         "weight": 0,
//         "price": 209
//     },
//     {
//         "Id": 62,
//         "category": "Салаты",
//         "imageUrl": "/images/dish/salads/Salad&Funchesa&Fasol-300x300.webp",
//         "title": "Тёплый Салат С Фунчёзой И Фасолью",
//         "ingredients": "Фасоль стручковая, перец болгарский, фунчёза, лук, смесь арахиса и перца, чесночное масло",
//         "weight": 0,
//         "price": 199
//     },
//     {
//         "Id": 63,
//         "category": "Салаты",
//         "imageUrl": "/images/dish/salads/SaladCukini-300x300.webp",
//         "title": "Тёплый Салат С Цукини",
//         "ingredients": "Цукини, шея свиная, помидоры, лук красный, устричный соус, соус свит чили, кунжут",
//         "weight": 0,
//         "price": 229
//     },
//     {
//         "Id": 64,
//         "category": "Салаты",
//         "imageUrl": "/images/dish/salads/BlinSalad-300x300.webp",
//         "title": "Салат С Говядиной И Яичным Блинчиком",
//         "ingredients": "Перец болгарский, помидоры свежие, сыр Гауда, ростбиф, лук, яичный блинчик, огурец свежий, чесночное масло, майонез",
//         "weight": 0,
//         "price": 219
//     },
//     {
//         "Id": 65,
//         "category": "Салаты",
//         "imageUrl": "/images/dish/salads/SaladCaesar-300x300.webp",
//         "title": "Цезарь С Курицей",
//         "ingredients": "Запеченная куриная грудка, лист салата, помидоры черри, соус Цезарь, пшеничные гренки, сыр",
//         "weight": 0,
//         "price": 279
//     },
//     {
//         "Id": 66,
//         "category": "Салаты",
//         "imageUrl": "/images/dish/salads/KoreanMorkov-300x300.webp",
//         "title": "Морковь По Корейски",
//         "ingredients": "Морковь по-корейски, кунжут",
//         "weight": 0,
//         "price": 149
//     },
//     {
//         "Id": 67,
//         "category": "Салаты",
//         "imageUrl": "/images/dish/salads/SaladVegitable-300x300.webp",
//         "title": "Cалат Овощной",
//         "ingredients": "Лист салата, помидор, огурец, перец болгарский, масло подсолнечное",
//         "weight": 0,
//         "price": 159
//     },
//     {
//         "Id": 68,
//         "category": "Салаты",
//         "imageUrl": "/images/dish/salads/PokeChicken-300x300.webp",
//         "title": "Поке С Курицей",
//         "ingredients": "Запеченная куриная грудка, огурец, помидоры черри, кукуруза, яйцо, соус Песто",
//         "weight": 0,
//         "price": 219
//     },
//     {
//         "Id": 69,
//         "category": "Салаты",
//         "imageUrl": "/images/dish/salads/PokeVegitable-300x300.webp",
//         "title": "Поке С Овощами",
//         "ingredients": "Суши рис, чука, огурец, помидоры черри, морковь по-корейски, соус ореховый, кунжут",
//         "weight": 0,
//         "price": 159
//     },
//     {
//         "Id": 70,
//         "category": "Салаты",
//         "imageUrl": "/images/dish/salads/Olivie-300x300.webp",
//         "title": "Оливье С Курицей",
//         "ingredients": "Запеченная куриная грудка, картофель, морковь, огурец, горошек, яйцо лист салата, майонез",
//         "weight": 0,
//         "price": 159
//     },
//     {
//         "Id": 71,
//         "category": "Салаты",
//         "imageUrl": "/images/dish/salads/SaladKalmar-300x300.webp",
//         "title": "Салат С Кальмаром",
//         "ingredients": "Лист салата, кальмар, помидоры черри, огурец, яйцо, соевый соус, соус Унаги",
//         "weight": 0,
//         "price": 219
//     },
//     {
//         "Id": 72,
//         "category": "Салаты",
//         "imageUrl": "/images/dish/salads/SaladRostbeef-300x300.webp",
//         "title": "Салат С Ростбифом",
//         "ingredients": "Лист салата, ростбиф, шампиньоны, помидоры черри, огурец, соус медово-горчичный",
//         "weight": 0,
//         "price": 259
//     },
//     {
//         "Id": 73,
//         "category": "Салаты",
//         "imageUrl": "/images/dish/salads/HenPai-300x300.webp",
//         "title": "Хен Пай",
//         "ingredients": "Суши рис, чука, огурец, помидоры черри, морковь по-корейски, соус ореховый, кунжут",
//         "weight": 0,
//         "price": 169
//     },
//     {
//         "Id": 74,
//         "category": "Гарниры",
//         "imageUrl": "/images/dish/garnir/Rice&Vegitable-300x300.webp",
//         "title": "Рис С Овощами",
//         "ingredients": "Рис С Овощами",
//         "weight": 0,
//         "price": 59
//     },
//     {
//         "Id": 75,
//         "category": "Гарниры",
//         "imageUrl": "/images/dish/garnir/Vegitable_Grill-300x300.webp",
//         "title": "Овощи Гриль",
//         "ingredients": "Овощи Гриль",
//         "weight": 0,
//         "price": 199
//     },
//     {
//         "Id": 76,
//         "category": "Гарниры",
//         "imageUrl": "/images/dish/garnir/PotatoPure-300x300.webp",
//         "title": "Картофельное Пюре",
//         "ingredients": "Картофельное Пюре",
//         "weight": 0,
//         "price": 49
//     },
//     {
//         "Id": 77,
//         "category": "Гарниры",
//         "imageUrl": "/images/dish/garnir/PotatoFri-300x300.webp",
//         "title": "Картофель Фри",
//         "ingredients": "Картофель Фри",
//         "weight": 0,
//         "price": 99
//     },
//     {
//         "Id": 78,
//         "category": "Закуски",
//         "imageUrl": "/images/dish/zakuska/FreshVegitable-300x300.webp",
//         "title": "Нарезка Из Свежих Овощей",
//         "ingredients": "Огурец, болгарский перец, помидор, лист салата",
//         "weight": 160,
//         "price": 189
//     },
//     {
//         "Id": 79,
//         "category": "Закуски",
//         "imageUrl": "/images/dish/zakuska/SaltVegitable-300x300.webp",
//         "title": "Разносолы",
//         "ingredients": "Капуста маринованная, огурцы маринованные, помидоры маринованные, лист салата, лук",
//         "weight": 150,
//         "price": 189
//     },
//     {
//         "Id": 80,
//         "category": "Для детей",
//         "imageUrl": "/images/dish/zakuska/FreshVegitable-300x300.webp",
//         "title": "Нарезка Из Свежих Овощей",
//         "ingredients": "Огурец, болгарский перец, помидор, лист салата",
//         "weight": 160,
//         "price": 189
//     },
//     {
//         "Id": 81,
//         "category": "Для детей",
//         "imageUrl": "/images/dish/zakuska/SaltVegitable-300x300.webp",
//         "title": "Разносолы",
//         "ingredients": "Капуста маринованная, огурцы маринованные, помидоры маринованные, лист салата, лук",
//         "weight": 150,
//         "price": 189
//     },
//     {
//         "Id": 82,
//         "category": "Для детей",
//         "imageUrl": "/images/dish/zakuska/FreshVegitable-300x300.webp",
//         "title": "Нарезка Из Свежих Овощей",
//         "ingredients": "Огурец, болгарский перец, помидор, лист салата",
//         "weight": 160,
//         "price": 189
//     },
//     {
//         "Id": 83,
//         "category": "Для детей",
//         "imageUrl": "/images/dish/zakuska/SaltVegitable-300x300.webp",
//         "title": "Разносолы",
//         "ingredients": "Капуста маринованная, огурцы маринованные, помидоры маринованные, лист салата, лук",
//         "weight": 150,
//         "price": 189
//     },
//     {
//         "Id": 84,
//         "category": "Для детей",
//         "imageUrl": "/images/dish/zakuska/FreshVegitable-300x300.webp",
//         "title": "Нарезка Из Свежих Овощей",
//         "ingredients": "Огурец, болгарский перец, помидор, лист салата",
//         "weight": 160,
//         "price": 189
//     },
//     {
//         "Id": 85,
//         "category": "Для детей",
//         "imageUrl": "/images/dish/zakuska/SaltVegitable-300x300.webp",
//         "title": "Разносолы",
//         "ingredients": "Капуста маринованная, огурцы маринованные, помидоры маринованные, лист салата, лук",
//         "weight": 150,
//         "price": 189
//     },
//     {
//         "Id": 86,
//         "category": "Для детей",
//         "imageUrl": "/images/dish/zakuska/FreshVegitable-300x300.webp",
//         "title": "Нарезка Из Свежих Овощей",
//         "ingredients": "Огурец, болгарский перец, помидор, лист салата",
//         "weight": 160,
//         "price": 189
//     },
//     {
//         "Id": 87,
//         "category": "Для детей",
//         "imageUrl": "/images/dish/zakuska/SaltVegitable-300x300.webp",
//         "title": "Разносолы",
//         "ingredients": "Капуста маринованная, огурцы маринованные, помидоры маринованные, лист салата, лук",
//         "weight": 150,
//         "price": 189
//     },
//     {
//         "Id": 88,
//         "category": "Десерты",
//         "imageUrl": "/images/dish/dessert/TortChocolad-300x300.webp",
//         "title": "Торт 'Шоколадный'",
//         "ingredients": "Торт 'Шоколадный'",
//         "weight": 0,
//         "price": 179
//     },
//     {
//         "Id": 89,
//         "category": "Десерты",
//         "imageUrl": "/images/dish/dessert/Banan&Caramel-300x300.webp",
//         "title": "Банан С Карамелью",
//         "ingredients": "Банан С Карамелью",
//         "weight": 0,
//         "price": 139
//     },
//     {
//         "Id": 90,
//         "category": "Десерты",
//         "imageUrl": "/images/dish/dessert/Sneakers-300x300.webp",
//         "title": "Сникерс",
//         "ingredients": "Сникерс",
//         "weight": 0,
//         "price": 139
//     },
//     {
//         "Id": 91,
//         "category": "Десерты",
//         "imageUrl": "/images/dish/dessert/CheeseCakeClassic-300x300.webp",
//         "title": "Чизкейк Классический",
//         "ingredients": "Чизкейк Классический",
//         "weight": 0,
//         "price": 110
//     },
//     {
//         "Id": 92,
//         "category": "Десерты",
//         "imageUrl": "/images/dish/dessert/CheeseCake&Grusha-300x300.webp",
//         "title": "Чизкейк Грушенька",
//         "ingredients": "Чизкейк Грушенька",
//         "weight": 0,
//         "price": 119
//     },
//     {
//         "Id": 93,
//         "category": "Десерты",
//         "imageUrl": "/images/dish/dessert/Blini-300x300.webp",
//         "title": "Блины с джемом",
//         "ingredients": "Блины с джемом 3 шт.",
//         "weight": 0,
//         "price": 139
//     },
//     {
//         "Id": 94,
//         "category": "Десерты",
//         "imageUrl": "/images/dish/dessert/Blini-300x300.webp",
//         "title": "Блины со сгущенкой",
//         "ingredients": "Блины со сгущенкой 3 шт.",
//         "weight": 0,
//         "price": 139
//     },
//     {
//         "Id": 95,
//         "category": "Десерты",
//         "imageUrl": "/images/dish/dessert/Blini-300x300.webp",
//         "title": "Блины со сметаной",
//         "ingredients": "Блины со сметаной 3 шт.",
//         "weight": 0,
//         "price": 139
//     },
//     {
//         "Id": 96,
//         "category": "Соусы",
//         "imageUrl": "/images/dish/sous/sous-300x300.webp",
//         "title": "Соус Барбекю",
//         "ingredients": "Соус Барбекю",
//         "weight": 0,
//         "price": 69
//     },
//     {
//         "Id": 97,
//         "category": "Соусы",
//         "imageUrl": "/images/dish/sous/sous-300x300.webp",
//         "title": "Соус Горчица",
//         "ingredients": "Соус Горчица",
//         "weight": 0,
//         "price": 69
//     },
//     {
//         "Id": 98,
//         "category": "Соусы",
//         "imageUrl": "/images/dish/sous/sous-300x300.webp",
//         "title": "Соус Медово-горчичный",
//         "ingredients": "Соус Медово-горчичный",
//         "weight": 0,
//         "price": 69
//     },
//     {
//         "Id": 99,
//         "category": "Соусы",
//         "imageUrl": "/images/dish/sous/sous-300x300.webp",
//         "title": "Соус Тар-Тар",
//         "ingredients": "Соус Тар-Тар",
//         "weight": 0,
//         "price": 69
//     },
//     {
//         "Id": 100,
//         "category": "Соусы",
//         "imageUrl": "/images/dish/sous/sous-300x300.webp",
//         "title": "Соус Чесночный",
//         "ingredients": "Соус Чесночный",
//         "weight": 0,
//         "price": 69
//     },
//     {
//         "Id": 101,
//         "category": "Соусы",
//         "imageUrl": "/images/dish/sous/sous-300x300.webp",
//         "title": "Кетчуп Томатный",
//         "ingredients": "Кетчуп Томатный",
//         "weight": 0,
//         "price": 39
//     },
//     {
//         "Id": 102,
//         "category": "Соусы",
//         "imageUrl": "/images/dish/sous/sous-300x300.webp",
//         "title": "Соус Соевый",
//         "ingredients": "Соус Соевый",
//         "weight": 0,
//         "price": 39
//     },
//     {
//         "Id": 103,
//         "category": "Соусы",
//         "imageUrl": "/images/dish/sous/sous-300x300.webp",
//         "title": "Сметана",
//         "ingredients": "Сметана",
//         "weight": 0,
//         "price": 39
//     },
//     {
//         "Id": 104,
//         "category": "Соусы",
//         "imageUrl": "/images/dish/sous/sous-300x300.webp",
//         "title": "Соус Майонез",
//         "ingredients": "Соус Майонез",
//         "weight": 0,
//         "price": 39
//     }
// ],