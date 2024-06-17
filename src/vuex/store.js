import {createStore} from 'vuex';
import axios from 'axios';

export const store = createStore({

    state: {
        products: JSON.parse(localStorage.getItem("products")) || [
            {
        "Id": 1,
        "category": "Буузы",
        "imageUrl": "/images/dish/buuz/Buuza&Meat&Kapusta-300x300.webp",
        "title": "Буузы с мясом и капустой",
        "ingredients": "Свинина, говядина, капуста б/к, лук репчатый",
        "weight": 0,
        "price": 75
    },
    {
        "Id": 2,
        "category": "Буузы",
        "imageUrl": "/images/dish/buuz/BuuzaClassic-300x300.webp",
        "title": "Бууза Классическая",
        "ingredients": "Свинина, говядина, лук репчатый",
        "weight": 0,
        "price": 75
    },
    {
        "Id": 3,
        "category": "Буузы",
        "imageUrl": "/images/dish/buuz/BuuzaAssortiForTwo-300x300.webp",
        "title": "Ассорти На Двоих",
        "ingredients": "",
        "weight": 0,
        "price": 839
    },
    {
        "Id": 4,
        "category": "Буузы",
        "imageUrl": "/images/dish/buuz/BuuzaAssortiTest-300x300.webp",
        "title": "Ассорти На Пробу",
        "ingredients": "Буза рубленая 1 шт., буза овощная 1шт.,буза классическая 1 шт., манты с курицей и сыром 1шт.,манты рубленые, жареная 1 шт., лист салата, огурец, помидор,лук, перец болгарский, соевый соус, майонез, зелень",
        "weight": 0,
        "price": 379
    },
    {
        "Id": 5,
        "category": "Буузы",
        "imageUrl": "/images/dish/buuz/BuuzaVegitable-300x300.webp",
        "title": "Бууза Овощная",
        "ingredients": "Лук репчатый, морковь, перец болгарский,капуста, шампиньоны, соевый соус",
        "weight": 0,
        "price": 75
    },
    {
        "Id": 6,
        "category": "Буузы",
        "imageUrl": "/images/dish/buuz/SweetBuuza-300x300.webp",
        "title": "Бууза Сладкая",
        "ingredients": "Банан, яблоко, шоколад",
        "weight": 0,
        "price": 75
    },
    {
        "Id": 7,
        "category": "Буузы",
        "imageUrl": "/images/dish/buuz/MantaBeef-300x300.webp",
        "title": "Манта Жареная С Рубленным Фаршем",
        "ingredients": "Cвинина, говядина, лук репчатый",
        "weight": 0,
        "price": 75
    },
    {
        "Id": 8,
        "category": "Буузы",
        "imageUrl": "/images/dish/buuz/MantaChicken-300x300.webp",
        "title": "Манта С Курицей",
        "ingredients": "Куриное филе, сыр",
        "weight": 0,
        "price": 75
    },
    {
        "Id": 9,
        "category": "Буузы",
        "imageUrl": "/images/dish/buuz/Cheburek-300x300.webp",
        "title": "Чебурек с мясом",
        "ingredients": "",
        "weight": 0,
        "price": 110
    },
    {
        "Id": 10,
        "category": "Буузы",
        "imageUrl": "/images/dish/buuz/Cheburek-300x300.webp",
        "title": "Чебурек с мясом и сыром",
        "ingredients": "",
        "weight": 0,
        "price": 110
    },
    {
        "Id": 11,
        "category": "Буузы",
        "imageUrl": "/images/dish/buuz/Cheburek-300x300.webp",
        "title": "Чебурек с сыром",
        "ingredients": "",
        "weight": 0,
        "price": 159
    },
    {
        "Id": 12,
        "category": "Гриль",
        "imageUrl": "/images/dish/grill/Shashlik&Sheya_Lopatka-600x600.webp",
        "title": "Шашлык Из Свинины (Шея)",
        "ingredients": "Шея свиная, лук маринованный, капуста маринованная,лаваш, соус томатный",
        "weight": 0,
        "price": 359
    },
    {
        "Id": 13,
        "category": "Гриль",
        "imageUrl": "/images/dish/grill/Shashlik&Sheya_Lopatka-600x600.webp",
        "title": "Шашлык Из Свинины (Лопатка)",
        "ingredients": "Лопатка свиная, лук маринованный, капуста маринованная,лаваш, соус томатный",
        "weight": 0,
        "price": 289
    },
    {
        "Id": 14,
        "category": "Гриль",
        "imageUrl": "/images/dish/grill/Shashlik&ChickenLegs-300x300.webp",
        "title": "Шашлык Из Куринных Бедер",
        "ingredients": "Филе бедер, лук маринованный, капуста маринованная,лаваш, соус томатный",
        "weight": 0,
        "price": 299
    },
    {
        "Id": 15,
        "category": "Гриль",
        "imageUrl": "/images/dish/grill/Shaurma&Chicken_Pork-300x300.webp",
        "title": "Шашлык в Лаваше с Курицей",
        "ingredients": "Шея свиная, лук маринованный,капуста маринованная, лаваш, соус томатный",
        "weight": 0,
        "price": 319
    },
    {
        "Id": 16,
        "category": "Гриль",
        "imageUrl": "/images/dish/grill/Shaurma&Chicken_Pork-300x300.webp",
        "title": "Шашлык в Лаваше со Свининой",
        "ingredients": "Бедро куриное, лук маринованный,капуста маринованная, лаваш, соус томатный",
        "weight": 0,
        "price": 299
    },
    {
        "Id": 17,
        "category": "Гриль",
        "imageUrl": "/images/dish/grill/KebabBeef-300x300.webp",
        "title": "Люля Кебаб Из Говядины",
        "ingredients": "Говядина, шпик свиной, лук маринованный, капуста маринованная, лаваш, соус томатный",
        "weight": 0,
        "price": 299
    },
    {
        "Id": 18,
        "category": "Гриль",
        "imageUrl": "/images/dish/grill/KebabChicken-300x300.webp",
        "title": "Люля Кебаб Из Курицы",
        "ingredients": "Филе куриное, лук маринованный, капуста маринованная, лаваш, соус томатный",
        "weight": 0,
        "price": 239
    },
    {
        "Id": 19,
        "category": "Гриль",
        "imageUrl": "/images/dish/grill/PorkFile_Grill-300x300.webp",
        "title": "Отбивная Из Свиной Шеи",
        "ingredients": "шея свиная, лист салата, перец, чеснок, огурец, соус чесночный",
        "weight": 0,
        "price": 399
    },
    {
        "Id": 20,
        "category": "Гриль",
        "imageUrl": "/images/dish/grill/PorkRibs-300x300.webp",
        "title": "Свиные Ребрышки Классические",
        "ingredients": "Ребрышки свиные, лаваш, капуста маринованная, лук маринованный, соус томатный",
        "weight": 0,
        "price": 399
    },
    {
        "Id": 21,
        "category": "Гриль",
        "imageUrl": "/images/dish/grill/ChickenFile_Grill-300x300.webp",
        "title": "Куринная Грудка Гриль",
        "ingredients": "Куриное филе, паприка, чеснок, цукини, соус Песто",
        "weight": 0,
        "price": 289
    },
    {
        "Id": 22,
        "category": "Гриль",
        "imageUrl": "/images/dish/grill/Scumbriya_Grill-300x300.webp",
        "title": "Скумбрия На Мангале",
        "ingredients": "Скумбрия филе, лимон, соус тар-тар",
        "weight": 0,
        "price": 399
    },
    {
        "Id": 23,
        "category": "Гриль",
        "imageUrl": "/images/dish/grill/Treska_Grill-300x300.webp",
        "title": "Филе Трески На Гриле",
        "ingredients": "Филе трески, рис, кукуруза, морковь, перец, соус тар-тар",
        "weight": 0,
        "price": 399
    },
    {
        "Id": 24,
        "category": "Наборы",
        "imageUrl": "/images/dish/combo/File4Vkusa-300x300.webp",
        "title": "Филе 4 Вкуса",
        "ingredients": "Филе фрайд, филе сырный снег, филе барбекю, филе чили)",
        "weight": 0,
        "price": 1089
    },
    {
        "Id": 25,
        "category": "Наборы",
        "imageUrl": "/images/dish/combo/Krilo4Vkusa-300x300.webp",
        "title": "Крыло 4 Вкуса",
        "ingredients": "Крыло фрайд, крыло сырный снег, крыло барбекю,Крыло чили",
        "weight": 0,
        "price": 1290
    },
    {
        "Id": 26,
        "category": "Наборы",
        "imageUrl": "/images/dish/combo/KomboForTwo-300x300.webp",
        "title": "Комбо Для Двоих",
        "ingredients": "Крылышки в остро-томатном соусе, нагетсы фрайд,картофель фри, соус сырный, кетчуп",
        "weight": 0,
        "price": 1099
    },
    {
        "Id": 27,
        "category": "Наборы",
        "imageUrl": "/images/dish/combo/KomboForOne-300x300.webp",
        "title": "Комбо Для Одного",
        "ingredients": "Нагетсы фрайд, картофель фри, салат Хен-пай, соус сырный, морс",
        "weight": 0,
        "price": 489
    },
    {
        "Id": 28,
        "category": "Наборы",
        "imageUrl": "/images/dish/combo/KomboHotChicken-300x300.webp",
        "title": "Комбо Горячая Курочка",
        "ingredients": "Крылышки фрайд, картофель фри, лапша с курицей, соус сырный, морс",
        "weight": 0,
        "price": 479
    },
    {
        "Id": 29,
        "category": "Пельмени",
        "imageUrl": "/images/dish/pelmeni/pelmeni&bulion-300x300.webp",
        "title": "Пельмени С Бульоном",
        "ingredients": "Пельмени, майонез/сметана, зелень",
        "weight": 0,
        "price": 179
    },
    {
        "Id": 30,
        "category": "Пельмени",
        "imageUrl": "/images/dish/pelmeni/pelmeni&liver-300x300.webp",
        "title": "Пельмени По Таежному",
        "ingredients": "Пельмени, печень, сметана, зелень",
        "weight": 0,
        "price": 219
    },
    {
        "Id": 31,
        "category": "Сковороды",
        "imageUrl": "/images/dish/skovoroda/tyzhon-300x300.webp",
        "title": "Тяхон С Курицей И Свининой",
        "ingredients": "Свинина, филе куриной грудки, рис, цукини, перец болгарский, лук, яйцо, соевый соус, лист нори",
        "weight": 0,
        "price": 229
    },
    {
        "Id": 32,
        "category": "Сковороды",
        "imageUrl": "/images/dish/skovoroda/Chiken&Vegitable-300x300.webp",
        "title": "Сковорода С Курицей И Овощами",
        "ingredients": "Куриное филе, морковь, перец болгарский, лук репчатый, соус кисло-сладкий, чеснок",
        "weight": 0,
        "price": 239
    },
    {
        "Id": 33,
        "category": "Сковороды",
        "imageUrl": "/images/dish/skovoroda/Beef&Vegitable-300x300.webp",
        "title": "Сковорода С Говядиной И Овощами",
        "ingredients": "Говядина, морковь, перец болгарский, лук, фасоль стручковая, чеснок, соевый соус, мед",
        "weight": 0,
        "price": 239
    },
    {
        "Id": 34,
        "category": "Сковороды",
        "imageUrl": "/images/dish/skovoroda/Pork&Gribi-300x300.webp",
        "title": "Сковорода Со Свининой И Грибами",
        "ingredients": "Картофель, свинина, лук репчатый, шампиньоны, чеснок, зелень",
        "weight": 0,
        "price": 239
    },
    {
        "Id": 35,
        "category": "На компанию",
        "imageUrl": "/images/dish/company/ManyMeat-300x300.webp",
        "title": "Мясной Пир",
        "ingredients": "куриная грудка гриль, люля-кебаб из говядины, шашлык из свинины, картофель, капуста маринованная, лаваш, лук маринованный, соус томатный, горчица",
        "weight": 0,
        "price": 999
    },
    {
        "Id": 36,
        "category": "На компанию",
        "imageUrl": "/images/dish/company/VeryManyMeat-300x300.webp",
        "title": "Блюдо Мясника",
        "ingredients": "шашлык из свинины, ребрышки гриль, куриные крылышки, капуста маринованная, лаваш, лук маринованный, картофель, цукини, перец, помидоры черри, соус томатный, горчица",
        "weight": 0,
        "price": 1297
    },
    {
        "Id": 37,
        "category": "На компанию",
        "imageUrl": "/images/dish/company/AssortiForBeer-300x300.webp",
        "title": "Пивное Ассорти",
        "ingredients": "Гарлики, кальмар в темпуре, филе куриное в соусе барбекю, картофель фри, соус майонезно-горчичный, соус томатный",
        "weight": 0,
        "price": 599
    },
    {
        "Id": 38,
        "category": "На компанию",
        "imageUrl": "/images/dish/company/AssortiForBeer-300x300.webp",
        "title": "Пивная Тарелка",
        "ingredients": "Крыло в соусе барбекю, кальмар в темпуре, картофель фри, сырные палочки, соус тар-тар, соус томатный",
        "weight": 0,
        "price": 698
    },
    {
        "Id": 39,
        "category": "К Пиву",
        "imageUrl": "/images/dish/vs_beer/Cheese_Stiсk-300x300.webp",
        "title": "Сырные Палочки",
        "ingredients": "сыр Гауда в панировке, майонез, соус Чили",
        "weight": 0,
        "price": 239
    },
    {
        "Id": 40,
        "category": "К Пиву",
        "imageUrl": "/images/dish/vs_beer/Garliki-300x300.webp",
        "title": "Гарлики",
        "ingredients": "Бородинский хлеб в чесночном масле со специями, соус майонезный тар-тар",
        "weight": 0,
        "price": 139
    },
    {
        "Id": 41,
        "category": "К Пиву",
        "imageUrl": "/images/dish/vs_beer/Krevetki&Tempur-300x300.webp",
        "title": "Креветки В Темпуре",
        "ingredients": "Креветка, панировка, соус чили, майонез",
        "weight": 0,
        "price": 363
    },
    {
        "Id": 42,
        "category": "К Пиву",
        "imageUrl": "/images/dish/vs_beer/Kalmar&Tempur-300x300.webp",
        "title": "Кальмар В Темпуре",
        "ingredients": "Кальмар, панировка, соус майонезно-чесночный",
        "weight": 0,
        "price": 159
    },
    {
        "Id": 43,
        "category": "Нагетсы",
        "imageUrl": "/images/dish/nagets/NagetsChili-300x300.webp",
        "title": "Нагетсы Чили",
        "ingredients": "Филе грудки курицы, панировка, соус чили",
        "weight": 0,
        "price": 289
    },
    {
        "Id": 44,
        "category": "Нагетсы",
        "imageUrl": "/images/dish/nagets/NagetsBarbecu-300x300.webp",
        "title": "Нагетсы Барбекю",
        "ingredients": "Филе грудки курицы, панировка, соус барбекю",
        "weight": 0,
        "price": 289
    },
    {
        "Id": 45,
        "category": "Нагетсы",
        "imageUrl": "/images/dish/nagets/NagetsCheeseSnow-300x300.webp",
        "title": "Нагетсы Сырный Снег",
        "ingredients": "Филе грудки курицы, панировка, сырный снег",
        "weight": 0,
        "price": 289
    },
    {
        "Id": 46,
        "category": "Нагетсы",
        "imageUrl": "/images/dish/nagets/NagetsFide-300x300.webp",
        "title": "Нагетсы Фрайд",
        "ingredients": "Филе грудки курицы, панировка",
        "weight": 0,
        "price": 259
    },
    {
        "Id": 47,
        "category": "Нагетсы",
        "imageUrl": "/images/dish/nagets/WingsChili-300x300.webp",
        "title": "Крыло Чили",
        "ingredients": "Крыло, панировка, соус чили",
        "weight": 0,
        "price": 318
    },
    {
        "Id": 48,
        "category": "Нагетсы",
        "imageUrl": "/images/dish/nagets/WingsBarbecu-300x300.webp",
        "title": "Крыло Барбекю",
        "ingredients": "Крыло, панировка, соус барбекю",
        "weight": 0,
        "price": 318
    },
    {
        "Id": 49,
        "category": "Нагетсы",
        "imageUrl": "/images/dish/nagets/WingsCheeseSnow-300x300.webp",
        "title": "Крыло Сырный Снег",
        "ingredients": "Крыло, панировка, сырный снег",
        "weight": 0,
        "price": 318
    },
    {
        "Id": 50,
        "category": "Нагетсы",
        "imageUrl": "/images/dish/nagets/WingsFride-1-300x300.webp",
        "title": "Крыло Фрайд",
        "ingredients": "Крыло, панировка",
        "weight": 0,
        "price": 289
    },
    {
        "Id": 51,
        "category": "Супы",
        "imageUrl": "/images/dish/sup/tomyam-300x300.webp",
        "title": "Том Ям С Куриной Грудкой",
        "ingredients": "Паста Том Ям, кокосовое молоко, соус рыбный, шампиньоны свежие, поммидоры черри, филе куриной грудки, рис, лимон, зелёный лук",
        "weight": 0,
        "price": 279
    },
    {
        "Id": 52,
        "category": "Супы",
        "imageUrl": "/images/dish/sup/SupChicken-300x300.webp",
        "title": "Суп Куринный С Клецками",
        "ingredients": "Куриная грудка, лук репчатый, морковь, картофель, клецки пшеничные, зелень",
        "weight": 0,
        "price": 129
    },
    {
        "Id": 53,
        "category": "Супы",
        "imageUrl": "/images/dish/sup/Solyanka-300x300.webp",
        "title": "Солянка",
        "ingredients": "Филе куриное, говядина, свинина, сервелат копченый,огурец маринованный, лук репчатый, маслины, картофель, сметана, зелень, лимон",
        "weight": 0,
        "price": 259
    },
    {
        "Id": 54,
        "category": "Супы",
        "imageUrl": "/images/dish/sup/SupChicken&Noodles-300x300.webp",
        "title": "Куринный С Лапшой",
        "ingredients": "Курица, лук, морковь, лапша пшеничная, яйцо, зелень",
        "weight": 0,
        "price": 139
    },
    {
        "Id": 55,
        "category": "Супы",
        "imageUrl": "/images/dish/sup/Boohler-300x300.webp",
        "title": "Бухлер",
        "ingredients": "Говядина, картофель, морковь, лук репчатый, зелень",
        "weight": 0,
        "price": 199
    },
    {
        "Id": 56,
        "category": "Супы",
        "imageUrl": "/images/dish/sup/Shulen-300x300.webp",
        "title": "Шулэн С Бараниной",
        "ingredients": "Баранина, лук репчатый, лапша пшеничная, зелень",
        "weight": 0,
        "price": 279
    },
    {
        "Id": 57,
        "category": "Лапша",
        "imageUrl": "/images/dish/wok/Noodles&Vegitable-300x300.webp",
        "title": "Лапша С Овощами",
        "ingredients": "Пшеничная лапша, морковь, лук, перец болгарский,Фасоль, чеснок, яйцо, соус Пад-тай, арахис",
        "weight": 0,
        "price": 209
    },
    {
        "Id": 58,
        "category": "Лапша",
        "imageUrl": "/images/dish/wok/Noodles&Becon-300x300.webp",
        "title": "Лапша С Беконом",
        "ingredients": "Пшеничная лапша, бекон, сливки, сыр",
        "weight": 0,
        "price": 269
    },
    {
        "Id": 59,
        "category": "Лапша",
        "imageUrl": "/images/dish/wok/Noodles&Pork-300x300.webp",
        "title": "Лапша Со Свининой",
        "ingredients": "Пшеничная лапша, свинина, лук, перец болгарский,брокколи, шампиньоны, чеснок, соус Терияки, кунжут",
        "weight": 0,
        "price": 209
    },
    {
        "Id": 60,
        "category": "Лапша",
        "imageUrl": "/images/dish/wok/Noodles&Beef-300x300.webp",
        "title": "Лапша С Говядиной",
        "ingredients": "Пшеничная лапша, говядина, морковь, лук, фасоль стручковая, перец болгарский, чеснок, соус Терияки, кунжут",
        "weight": 0,
        "price": 209
    },
    {
        "Id": 61,
        "category": "Лапша",
        "imageUrl": "/images/dish/wok/Noodles&Chiсken-300x300.webp",
        "title": "Лапша С Курицей",
        "ingredients": "Пшеничная лапша, куриное филе, лук репчатый, морковь, перец болгарский, чеснок, соус свит-чили, соус Унаги, кунжут",
        "weight": 0,
        "price": 209
    },
    {
        "Id": 62,
        "category": "Салаты",
        "imageUrl": "/images/dish/salads/Salad&Funchesa&Fasol-300x300.webp",
        "title": "Тёплый Салат С Фунчёзой И Фасолью",
        "ingredients": "Фасоль стручковая, перец болгарский, фунчёза, лук, смесь арахиса и перца, чесночное масло",
        "weight": 0,
        "price": 199
    },
    {
        "Id": 63,
        "category": "Салаты",
        "imageUrl": "/images/dish/salads/SaladCukini-300x300.webp",
        "title": "Тёплый Салат С Цукини",
        "ingredients": "Цукини, шея свиная, помидоры, лук красный, устричный соус, соус свит чили, кунжут",
        "weight": 0,
        "price": 229
    },
    {
        "Id": 64,
        "category": "Салаты",
        "imageUrl": "/images/dish/salads/BlinSalad-300x300.webp",
        "title": "Салат С Говядиной И Яичным Блинчиком",
        "ingredients": "Перец болгарский, помидоры свежие, сыр Гауда, ростбиф, лук, яичный блинчик, огурец свежий, чесночное масло, майонез",
        "weight": 0,
        "price": 219
    },
    {
        "Id": 65,
        "category": "Салаты",
        "imageUrl": "/images/dish/salads/SaladCaesar-300x300.webp",
        "title": "Цезарь С Курицей",
        "ingredients": "Запеченная куриная грудка, лист салата, помидоры черри, соус Цезарь, пшеничные гренки, сыр",
        "weight": 0,
        "price": 279
    },
    {
        "Id": 66,
        "category": "Салаты",
        "imageUrl": "/images/dish/salads/KoreanMorkov-300x300.webp",
        "title": "Морковь По Корейски",
        "ingredients": "Морковь по-корейски, кунжут",
        "weight": 0,
        "price": 149
    },
    {
        "Id": 67,
        "category": "Салаты",
        "imageUrl": "/images/dish/salads/SaladVegitable-300x300.webp",
        "title": "Cалат Овощной",
        "ingredients": "Лист салата, помидор, огурец, перец болгарский, масло подсолнечное",
        "weight": 0,
        "price": 159
    },
    {
        "Id": 68,
        "category": "Салаты",
        "imageUrl": "/images/dish/salads/PokeChicken-300x300.webp",
        "title": "Поке С Курицей",
        "ingredients": "Запеченная куриная грудка, огурец, помидоры черри, кукуруза, яйцо, соус Песто",
        "weight": 0,
        "price": 219
    },
    {
        "Id": 69,
        "category": "Салаты",
        "imageUrl": "/images/dish/salads/PokeVegitable-300x300.webp",
        "title": "Поке С Овощами",
        "ingredients": "Суши рис, чука, огурец, помидоры черри, морковь по-корейски, соус ореховый, кунжут",
        "weight": 0,
        "price": 159
    },
    {
        "Id": 70,
        "category": "Салаты",
        "imageUrl": "/images/dish/salads/Olivie-300x300.webp",
        "title": "Оливье С Курицей",
        "ingredients": "Запеченная куриная грудка, картофель, морковь, огурец, горошек, яйцо лист салата, майонез",
        "weight": 0,
        "price": 159
    },
    {
        "Id": 71,
        "category": "Салаты",
        "imageUrl": "/images/dish/salads/SaladKalmar-300x300.webp",
        "title": "Салат С Кальмаром",
        "ingredients": "Лист салата, кальмар, помидоры черри, огурец, яйцо, соевый соус, соус Унаги",
        "weight": 0,
        "price": 219
    },
    {
        "Id": 72,
        "category": "Салаты",
        "imageUrl": "/images/dish/salads/SaladRostbeef-300x300.webp",
        "title": "Салат С Ростбифом",
        "ingredients": "Лист салата, ростбиф, шампиньоны, помидоры черри, огурец, соус медово-горчичный",
        "weight": 0,
        "price": 259
    },
    {
        "Id": 73,
        "category": "Салаты",
        "imageUrl": "/images/dish/salads/HenPai-300x300.webp",
        "title": "Хен Пай",
        "ingredients": "Суши рис, чука, огурец, помидоры черри, морковь по-корейски, соус ореховый, кунжут",
        "weight": 0,
        "price": 169
    },
    {
        "Id": 74,
        "category": "Гарниры",
        "imageUrl": "/images/dish/garnir/Rice&Vegitable-300x300.webp",
        "title": "Рис С Овощами",
        "ingredients": "Рис С Овощами",
        "weight": 0,
        "price": 59
    },
    {
        "Id": 75,
        "category": "Гарниры",
        "imageUrl": "/images/dish/garnir/Vegitable_Grill-300x300.webp",
        "title": "Овощи Гриль",
        "ingredients": "Овощи Гриль",
        "weight": 0,
        "price": 199
    },
    {
        "Id": 76,
        "category": "Гарниры",
        "imageUrl": "/images/dish/garnir/PotatoPure-300x300.webp",
        "title": "Картофельное Пюре",
        "ingredients": "Картофельное Пюре",
        "weight": 0,
        "price": 49
    },
    {
        "Id": 77,
        "category": "Гарниры",
        "imageUrl": "/images/dish/garnir/PotatoFri-300x300.webp",
        "title": "Картофель Фри",
        "ingredients": "Картофель Фри",
        "weight": 0,
        "price": 99
    },
    {
        "Id": 78,
        "category": "Закуски",
        "imageUrl": "/images/dish/zakuska/FreshVegitable-300x300.webp",
        "title": "Нарезка Из Свежих Овощей",
        "ingredients": "Огурец, болгарский перец, помидор, лист салата",
        "weight": 160,
        "price": 189
    },
    {
        "Id": 79,
        "category": "Закуски",
        "imageUrl": "/images/dish/zakuska/SaltVegitable-300x300.webp",
        "title": "Разносолы",
        "ingredients": "Капуста маринованная, огурцы маринованные, помидоры маринованные, лист салата, лук",
        "weight": 150,
        "price": 189
    },
    {
        "Id": 80,
        "category": "Для детей",
        "imageUrl": "/images/dish/childmenu/BliniOnShampur-300x300.webp",
        "title": "Блины На Шпажке С Топингом",
        "ingredients": "блинчики 3 шт., топпинг",
        "weight": 0,
        "price": 129
    },
    {
        "Id": 81,
        "category": "Для детей",
        "imageUrl": "/images/dish/childmenu/Chicken&Pure-300x300.webp",
        "title": "Куриные Котлетки С Пюре",
        "ingredients": "",
        "weight": 0,
        "price": 198
    },
    {
        "Id": 82,
        "category": "Для детей",
        "imageUrl": "/images/dish/childmenu/ChickenNagets&Fri-300x300.webp",
        "title": "Наггетсы Куринные С Фри",
        "ingredients": "нагетсы куриные, картофель фри, кетчуп, огурец, помидор",
        "weight": 0,
        "price": 299
    },
    {
        "Id": 83,
        "category": "Для детей",
        "imageUrl": "/images/dish/childmenu/Glazuniya&Sosiski-300x300.webp",
        "title": "Глазунья С Осминожками Из Сосисок",
        "ingredients": "сосиски молочные, помидоры Черри, яйцо, огурец, кетчуп, зелень",
        "weight": 0,
        "price": 229
    },
    {
        "Id": 84,
        "category": "Для детей",
        "imageUrl": "/images/dish/childmenu/KornDog&Fri-300x300.webp",
        "title": "Корн Дог С Картофелем Фри",
        "ingredients": "Сосиска молочная, картофель фри, соус сырный, кетчуп, лист салата, огурец, помидоры Черри",
        "weight": 0,
        "price": 219
    },
    {
        "Id": 85,
        "category": "Для детей",
        "imageUrl": "/images/dish/childmenu/SmalBuuzi-300x300.webp",
        "title": "Мини Буузы Цветные Крошки",
        "ingredients": "Куриное филе, сыр, брокколи, лист салата, помидоры Черри",
        "weight": 0,
        "price": 169
    },
    {
        "Id": 86,
        "category": "Для детей",
        "imageUrl": "/images/dish/childmenu/Spagetti&Sosiski-300x300.webp",
        "title": "Спагетти С Сосисками",
        "ingredients": "Спагетти, сосиска молочная, лист салата, помидоры Черри",
        "weight": 0,
        "price": 139
    },
    {
        "Id": 87,
        "category": "Для детей",
        "imageUrl": "/images/dish/childmenu/Sup&Noodles&Chicken-300x300.webp",
        "title": "Суп С Лапшой И Куриными Фрикадельками",
        "ingredients": "Куриное филе, лапша пшеничная, лук, морковь, зелень",
        "weight": 0,
        "price": 109
    },
    {
        "Id": 88,
        "category": "Десерты",
        "imageUrl": "/images/dish/dessert/TortChocolad-300x300.webp",
        "title": "Торт 'Шоколадный'",
        "ingredients": "Торт 'Шоколадный'",
        "weight": 0,
        "price": 179
    },
    {
        "Id": 89,
        "category": "Десерты",
        "imageUrl": "/images/dish/dessert/Banan&Caramel-300x300.webp",
        "title": "Банан С Карамелью",
        "ingredients": "Банан С Карамелью",
        "weight": 0,
        "price": 139
    },
    {
        "Id": 90,
        "category": "Десерты",
        "imageUrl": "/images/dish/dessert/Sneakers-300x300.webp",
        "title": "Сникерс",
        "ingredients": "Сникерс",
        "weight": 0,
        "price": 139
    },
    {
        "Id": 91,
        "category": "Десерты",
        "imageUrl": "/images/dish/dessert/CheeseCakeClassic-300x300.webp",
        "title": "Чизкейк Классический",
        "ingredients": "Чизкейк Классический",
        "weight": 0,
        "price": 110
    },
    {
        "Id": 92,
        "category": "Десерты",
        "imageUrl": "/images/dish/dessert/CheeseCake&Grusha-300x300.webp",
        "title": "Чизкейк Грушенька",
        "ingredients": "Чизкейк Грушенька",
        "weight": 0,
        "price": 119
    },
    {
        "Id": 93,
        "category": "Десерты",
        "imageUrl": "/images/dish/dessert/Blini-300x300.webp",
        "title": "Блины с джемом",
        "ingredients": "Блины с джемом 3 шт.",
        "weight": 0,
        "price": 139
    },
    {
        "Id": 94,
        "category": "Десерты",
        "imageUrl": "/images/dish/dessert/Blini-300x300.webp",
        "title": "Блины со сгущенкой",
        "ingredients": "Блины со сгущенкой 3 шт.",
        "weight": 0,
        "price": 139
    },
    {
        "Id": 95,
        "category": "Десерты",
        "imageUrl": "/images/dish/dessert/Blini-300x300.webp",
        "title": "Блины со сметаной",
        "ingredients": "Блины со сметаной 3 шт.",
        "weight": 0,
        "price": 139
    },
    {
        "Id": 96,
        "category": "Соусы",
        "imageUrl": "/images/dish/sous/sous-300x300.webp",
        "title": "Соус Барбекю",
        "ingredients": "Соус Барбекю",
        "weight": 0,
        "price": 69
    },
    {
        "Id": 97,
        "category": "Соусы",
        "imageUrl": "/images/dish/sous/sous-300x300.webp",
        "title": "Соус Горчица",
        "ingredients": "Соус Горчица",
        "weight": 0,
        "price": 69
    },
    {
        "Id": 98,
        "category": "Соусы",
        "imageUrl": "/images/dish/sous/sous-300x300.webp",
        "title": "Соус Медово-горчичный",
        "ingredients": "Соус Медово-горчичный",
        "weight": 0,
        "price": 69
    },
    {
        "Id": 99,
        "category": "Соусы",
        "imageUrl": "/images/dish/sous/sous-300x300.webp",
        "title": "Соус Тар-Тар",
        "ingredients": "Соус Тар-Тар",
        "weight": 0,
        "price": 69
    },
    {
        "Id": 100,
        "category": "Соусы",
        "imageUrl": "/images/dish/sous/sous-300x300.webp",
        "title": "Соус Чесночный",
        "ingredients": "Соус Чесночный",
        "weight": 0,
        "price": 69
    },
    {
        "Id": 101,
        "category": "Соусы",
        "imageUrl": "/images/dish/sous/sous-300x300.webp",
        "title": "Кетчуп Томатный",
        "ingredients": "Кетчуп Томатный",
        "weight": 0,
        "price": 39
    },
    {
        "Id": 102,
        "category": "Соусы",
        "imageUrl": "/images/dish/sous/sous-300x300.webp",
        "title": "Соус Соевый",
        "ingredients": "Соус Соевый",
        "weight": 0,
        "price": 39
    },
    {
        "Id": 103,
        "category": "Соусы",
        "imageUrl": "/images/dish/sous/sous-300x300.webp",
        "title": "Сметана",
        "ingredients": "Сметана",
        "weight": 0,
        "price": 39
    },
    {
        "Id": 104,
        "category": "Соусы",
        "imageUrl": "/images/dish/sous/sous-300x300.webp",
        "title": "Соус Майонез",
        "ingredients": "Соус Майонез",
        "weight": 0,
        "price": 39
    }
        ],
        cart: JSON.parse(localStorage.getItem("cart")) || [],
        user: JSON.parse(localStorage.getItem("cart")) || [],
        users: JSON.parse(localStorage.getItem("users")) || [],
        order: JSON.parse(localStorage.getItem("order")) || [],
        orders: JSON.parse(localStorage.getItem("orders")) || [],
        sentOrder: JSON.parse(localStorage.getItem("sentOrder")) || [],
        sentOrders: JSON.parse(localStorage.getItem("sentOrders")) || [],
        finishOrder: JSON.parse(localStorage.getItem("finishOrder")) || [],
        finishOrders: JSON.parse(localStorage.getItem("finishOrders")) || [],
    },

    // Мутации - синхронны
    mutations: {
        SET_PRODUCTS_TO_STATE: (state, products) => {
            state.products = products;
        },
        CREATE_ORDER: (state, order) => {
            state.order = [order];
            // console.log(state.order);
            localStorage.setItem('order', JSON.stringify(state.order));
            state.orders.push(order);
            // console.log(state.orders);
            localStorage.setItem('orders', JSON.stringify(state.orders));
        },
        SET_ORDERS_TO_STATE: (state, orders) => {
            state.orders = orders;
            localStorage.setItem('orders', JSON.stringify(state.orders));
        },
        SET_SENT_ORDERS_TO_STATE: (state, sentOrders) => {
            state.sentOrders = sentOrders;
            localStorage.setItem('sentOrders', JSON.stringify(state.sentOrders));
        },
        SET_FINISH_ORDERS_TO_STATE: (state, finishOrders) => {
            state.finishOrders = finishOrders;
            localStorage.setItem('finishOrders', JSON.stringify(state.finishOrders));
        },
        SET_CART: (state, product) => {
            state.cart.push(product);
            product.quantity = 1;
            product.isAdded = true;
            // console.log(state.cart);
            localStorage.setItem('cart', JSON.stringify(state.cart));
        },
        SET_USER: (state, user) => {
            state.user = [user];
            localStorage.setItem('user', JSON.stringify(state.user));
            state.users.push(user);
            localStorage.setItem('users', JSON.stringify(state.users));
        },

        CLEAR_CART: (state) => {
            state.cart = [];
            localStorage.setItem('cart', JSON.stringify(state.cart));
        },
        CLEAR_ALL_ORDERS: (state) => {
            state.order = [];
            localStorage.setItem('order', JSON.stringify(state.order));
            state.orders = [];
            localStorage.setItem('orders', JSON.stringify(state.orders));
            state.sentOrder = [];
            localStorage.setItem('sentOrder', JSON.stringify(state.sentOrder));
            state.sentOrders = [];
            localStorage.setItem('sentOrders', JSON.stringify(state.sentOrders));
            state.finishOrder = [];
            localStorage.setItem('finishOrder', JSON.stringify(state.finishOrder));
            state.finishOrders = [];
            localStorage.setItem('finishOrders', JSON.stringify(state.finishOrders));
            state.user = [];
            localStorage.setItem('user', JSON.stringify(state.user));
            state.users = [];
            localStorage.setItem('users', JSON.stringify(state.users));
        },
        CHANGE_IS_ADDED: (state, product) => {
            // console.log(product);
            product.isAdded = false;
            localStorage.setItem('products', JSON.stringify(state.products));
        },

        SENT_ORDER: (state, order) => {
            // console.log(order);
            // console.log(state.orders);
            state.sentOrder = order;
            // console.log(state.sentOrder);
            localStorage.setItem('sentOrder', JSON.stringify(state.sentOrder));
            state.sentOrders.push(order);
            // console.log(state.sentOrders);
            localStorage.setItem('sentOrders', JSON.stringify(state.sentOrders));
        },
        FINISH_ORDER: (state, order) => {
            // console.log(order);
            // console.log(state.orders);
            state.finishOrder = order;
            // console.log(state.finishOrder);
            localStorage.setItem('finishOrder', JSON.stringify(state.finishOrder));
            state.finishOrders.push(order);
            // console.log(state.finishOrders);
            localStorage.setItem('finishOrders', JSON.stringify(state.finishOrders));
        },

        REMOVE_ORDER: (state, order, index) => {
            // console.log(index);
            // product.isAdded = false;
            // localStorage.setItem('products', JSON.stringify(state.products));
            state.orders.splice(index, 1);
            localStorage.setItem('orders', JSON.stringify(state.orders));
        },
        REMOVE_SENT_ORDER: (state, order, index) => {
            // console.log(index);
            // product.isAdded = false;
            // localStorage.setItem('products', JSON.stringify(state.products));
            state.sentOrders.splice(index, 1);
            localStorage.setItem('sentOrders', JSON.stringify(state.sentOrders));
        },
        REMOVE_FINISH_ORDER: (state, order, index) => {
            state.finishOrders.splice(index, 1);
            localStorage.setItem('finishOrders', JSON.stringify(state.finishOrders));
        },
        REMOVE_USER: (state, index) => {
            state.user = [];
            localStorage.setItem('user', JSON.stringify(state.user));
            state.users.splice(index, 1);
            localStorage.setItem('users', JSON.stringify(state.users));
        },
        REMOVE_FROM_CART: (state, index) => {
            state.cart.splice(index, 1);
            localStorage.setItem('cart', JSON.stringify(state.cart));
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
        GET_PRODUCTS_FROM_API({commit}) {
            return axios('https://f7df247f0c76b835.mokky.dev/products', {
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
        },

        async CREATE_ORDER({state, commit}, {cartTotalCost, delivery, payment}) {
            try {
                let date = new Date().toISOString().slice(0, 10).split('-').reverse().join('.');
                let time = new Date().toLocaleTimeString('it-IT');
                let orderId = Date.now().toString().slice(-4);

                const response = await axios.post('https://f7df247f0c76b835.mokky.dev/orders', {
                        orderItems: state.cart,
                        userItems: state.user,
                        orderId: orderId,
                        dateOrder: date,
                        timeOrder: time,
                        totalPrice: cartTotalCost.value,
                        delivery: delivery.value,
                        payment: payment.value,
                    },
                );
                commit('CREATE_ORDER', response.data);
            } catch (err) {
                console.log(err);
            }
// Очищает Корзину после оформления заказа
            commit('CLEAR_CART');
        },

        async GET_ORDERS_FROM_API({commit}) {
            try {
                const response = await axios.get('https://f7df247f0c76b835.mokky.dev/orders');

                commit('SET_ORDERS_TO_STATE', response.data);
            } catch (error) {
                console.log(error);
                return error;
            }
        },
        async GET_SENT_ORDERS_FROM_API({commit}) {
            try {
                const response = await axios.get('https://f7df247f0c76b835.mokky.dev/sentOrders');

                commit('SET_SENT_ORDERS_TO_STATE', response.data);
            } catch (error) {
                console.log(error);
                return error;
            }
        },
        async GET_FINISH_ORDERS_FROM_API({commit}) {
            try {
                const response = await axios.get('https://f7df247f0c76b835.mokky.dev/finishOrders');

                commit('SET_FINISH_ORDERS_TO_STATE', response.data);
            } catch (error) {
                console.log(error);
                return error;
            }
        },

        // Пока что разбираюсь????
        async DELETE_ORDER({commit}, {order, index}) {
            try {
                await axios.delete(`https://f7df247f0c76b835.mokky.dev/orders/${order.id}`);
                commit('REMOVE_ORDER', index);
                // console.log(order.id);
            } catch (error) {
                console.log(error);
                return error;
            }
        },

        async DELETE_SENT_ORDER({commit}, {order, index}) {
            try {
                await axios.delete(`https://f7df247f0c76b835.mokky.dev/sentOrders/${order.id}`);
                commit('REMOVE_SENT_ORDER', index);
                // console.log(order.id);
            } catch (error) {
                console.log(error);
                return error;
            }
        },

        async DELETE_FINISH_ORDER({commit}, {order, index}) {
            try {
                await axios.delete(`https://f7df247f0c76b835.mokky.dev/finishOrders/${order.id}`);
                commit('REMOVE_FINISH_ORDER', index);
                // console.log(order.id);
            } catch (error) {
                console.log(error);
                return error;
            }
        },

        async SENT_ORDER({commit}, {order}) {
            try {
                let date = new Date().toISOString().slice(0, 10).split('-').reverse().join('.');
                let time = new Date().toLocaleTimeString('it-IT');

                const response = await axios.post('https://f7df247f0c76b835.mokky.dev/sentOrders', {
                        order,
                        dateSentOrder: date,
                        timeSentOrder: time
                    }
                );

                commit('SENT_ORDER', response.data);
            } catch (err) {
                console.log(err);
            }
        },

        async FINISH_ORDER({commit}, {order}) {
            try {
                let date = new Date().toISOString().slice(0, 10).split('-').reverse().join('.');
                let time = new Date().toLocaleTimeString('it-IT');

                const response = await axios.post('https://f7df247f0c76b835.mokky.dev/finishOrders', {
                        order,
                        dateFinishOrder: date,
                        timeFinishOrder: time
                    }
                );
                commit('FINISH_ORDER', response.data);
            } catch (err) {
                console.log(err);
            }
        },

        ADD_TO_CART({state, commit}, product) {
            commit('SET_CART', product);
        },
        CLEAR_CART({commit}, cart) {
            commit('CLEAR_CART', cart);
        },

        INCREMENT_CART_ITEM({commit}, index) {
            commit('INCREMENT', index);
        },
        DECREMENT_CART_ITEM({commit}, index) {
            commit('DECREMENT', index);
        },
        DELETE_FROM_CART({commit}, product, index) {
            commit('REMOVE_FROM_CART', product, index);
        },
        CHANGE_IS_ADDED({state, commit}, product) {
            commit('CHANGE_IS_ADDED', product);
        },


        ADD_USER({state, commit}, user) {
            commit('SET_USER', user);
        },
        REMOVE_FROM_USER({commit}, index) {
            commit('REMOVE_USER', index);
        },
        REMOVE_ORDER({commit}, index) {
            commit('REMOVE_ORDER', index);
        },
        CLEAR_ALL_ORDERS({commit}) {
            commit('CLEAR_ALL_ORDERS');
        },
    },

    getters: {
        PRODUCTS(state) {
            return state.products;
        },
        CART(state) {
            return state.cart;
        },
        USER(state) {
            return state.user;
        },
        USERS(state) {
            return state.users;
        },
        ORDERS(state) {
            return state.orders;
        },
        ORDER(state) {
            return state.order;
        },
        sentOrder(state) {
            return state.sentOrder;
        },
        sentOrders(state) {
            return state.sentOrders;
        },
        finishOrder(state) {
            return state.finishOrder;
        },
        finishOrders(state) {
            return state.finishOrders;
        },
    }
});

export default store;


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

/*
ADD_USER({state, commit}, user) {
    commit('SET_USER', user);
    try {
        await axios.post(`https://1102df40d9a2f61e.mokky.dev/users`, {
                user: user,
            },
        );
    } catch (err) {
        console.log(err);
    }
},*/
