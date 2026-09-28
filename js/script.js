/* =========================
   スマホメニュー
========================= */

const menuButton = document.getElementById("menuButton");
const mobileNav = document.getElementById("mobileNav");

if (menuButton && mobileNav) {

    menuButton.addEventListener("click", () => {

        menuButton.classList.toggle("active");
        mobileNav.classList.toggle("active");

    });

    const mobileLinks =
        mobileNav.querySelectorAll("a");

    mobileLinks.forEach((link) => {

        link.addEventListener("click", () => {

            menuButton.classList.remove("active");
            mobileNav.classList.remove("active");

        });

    });

}


/* =========================
   メニューデータ
========================= */

const menus = [

    /* ---------- ハンバーグ ---------- */

    {
        category: "HAMBURG",
        type: "hamburg",
        name: "長野県産にこだわった信州100%ハンバーグ",
        image: "images/hamburg01.jpg",
        price: "¥3700",
        sauce: "信州ワインを使用したオリジナルデミグラスソース<br>隠し味に信州リンゴを使用した手作り和風玉ねぎソース<br>信州産白い山わさびの香りを活かした旨味ソース（辛くないです）<br>",
        rice: "蓼科産ミルキークイーン米",
        salad: "蓼科サラダ",
        soup: "コーンだらけのコーンスープ",
        other: "なし",
        description:
            "信州和牛、信州牛、蓼科豚を使用した、信州の食材にこだわったWoodmanPlus自慢のハンバーグです。"
    },

    {
        category: "HAMBURG",
        type: "hamburg",
        name: "諏訪のてっぺんハンバーグ",
        image: "images/hamburg02.jpg",
        price: "¥4200",
        sauce: "信州産山わさび香るレフォール（辛くないです）<br>手作りぼたんこしょう味噌<br>雪塩",
        rice: "蓼科産ミルキークイーン米",
        salad: "蓼科サラダ",
        soup: "なし",
        other: "なし",
        description:
            "信州リンゴで育った上質牛100%　粗挽き仕立て"
    },

    {
        category: "HAMBURG",
        type: "hamburg",
        name: "信州ちびっこハンバーグ",
        image: "images/hamburg03.jpg",
        price: "¥2000",
        sauce: "オリジナルケチャップソース",
        rice: "蓼科産ミルキークイーン米（ライス少なめ）",
        salad: "なし",
        soup: "なし",
        other: "ちびっこ諏訪かりんジュース",
        description:
            "※当店では小学生のお子様から１コースご注文頂き<br>心と体が喜ぶ時間をお過ごし頂いております※"
    },

    {
        category: "HAMBURG",
        type: "hamburg",
        name: "八ヶ岳の雪どけカマンバーグ",
        image: "images/hamburg04.jpg",
        price: "¥3700",
        sauce: "安曇野産わさび仕立ての醤油ソース<br>長野県で有名な八幡屋磯五郎の信州七味",
        rice: "蓼科産ミルキークイーン米",
        salad: "蓼科サラダ",
        soup: "なし",
        other: "なし",
        description:
            "とろけるカマンベールチーズをまるごとひとつ<br>信州和牛・信州牛・蓼科豚使用<br>スプーンで切れるほど柔らかいハンバーグ"
    },


    /* ---------- ステーキ ---------- */

    {
        category: "STEAK",
        type: "steak",
        name: "蓼科牛<br>シャトーブリアン",
        image: "images/steak01.jpg",
        price: "¥9800",
        sauce: "安曇野産わさび醤油<br>信州産山わさび香る手造りレフォール<br>信州伝統野菜ぼたんこしょうの手作り味噌<br>雪塩<br>レモン",
        rice: "蓼科産ミルキークイーン米",
        salad: "蓼科サラダ",
        soup: "コーンだらけのコーンスープ",
        other: "なし",
        description:
            "一頭からわずかしか取れない最高峰ヒレ肉<br>東京の名店でも選ばれる希少部位をウッドマンplusならではの一皿でご提供いたします"
    },

    {
        category: "STEAK",
        type: "steak",
        name: "雄大なたたづまい蓼科牛",
        image: "images/steak02.jpg",
        price: "¥6500（コース） or　¥5500（ライスセット）",
        sauce: "安曇野産わさび醤油<br>信州産山わさび香る手造りレフォール<br>信州伝統野菜ぼたんこしょう手作り味噌<br>雪塩<br>レモン",
        rice: "蓼科産ミルキークイーン米",
        salad: "蓼科サラダ（コースの場合） or　なし",
        soup: "コーンだらけのコーンスープ（コースの場合） or　なし",
        other: "なし",
        description:
            "東京の高級店向けの部位をウッドマンplus仕様でご用意しています<br>お肉のサイズや厚さは常に違う為大判の際はカットせずそのままご提供させて頂きます"
    },

    {
        category: "STEAK",
        type: "steak",
        name: "信州が誇る幻のサーロイン<br>信州和牛",
        image: "images/steak03.jpg",
        price: "¥19800",
        sauce: "安曇野産わさび醤油<br>信州産山わさび香る手造りレフォール<br>信州伝統野菜ぼたんこしょう手作り味噌<br>雪塩<br>レモン",
        rice: "蓼科産ミルキークイーン米",
        salad: "蓼科サラダ",
        soup: "コーンだらけのコーンスープ",
        other: "京都丸久小山園のお抹茶～小布施栗らくがん付～",
        description:
            "今日という日にふさわしい一枚<br>"
    },

    {
        category: "STEAK",
        type: "steak",
        name: "信州のてっぺん<br>信州和牛5つ星シャトーブリアン",
        image: "images/steak04.jpg",
        price: "¥33000",
        sauce: "安曇野産わさび醤油<br>信州産山わさび香る手造りレフォール<br>信州伝統野菜ぼたんこしょう手作り味噌<br>雪塩<br>レモン",
        rice: "蓼科産ミルキークイーン米",
        salad: "蓼科サラダ",
        soup: "コーンだらけのコーンスープ",
        other: "京都丸久小山園のお抹茶～小布施栗らくがん付～",
        description:
            "こちらの収益は施設にいる子供たちを笑顔にする為のクリスマスプロジェクトに使わせて頂きます。なおその様子は当店のインスタ及びHPにてご報告させて頂きます。"
    }

];

/* ========================= 
   ドリンクデータ 
========================= */ 

const drinks = [

    {
        name: "たてしな珈琲(ホット)",
        price: "¥1,200",
        description: "たてしな天然水を使用。<br>まろやかな水が珈琲の香りとコクを引き立てる一杯です。"
    },

    {
        name: "丸山珈琲(アイス)",
        price: "¥980",
        description: "世界一のバリスタを育てた珈琲ブランド。<br>限られた店舗でしか味わえない特別な一杯です"
    },

    {
        name: "たてしなパープルジュース（期間限定）",
        price: "¥880",
        description: "希少なナガノパープルとたてしな天然水から生まれたオリジナルジュース。<br>芳醇な香りと濃厚な甘みを楽しめるここでしか味わえない一杯です。"
    },

    {
        name: "諏訪かりんジュース",
        price: "¥550",
        description: "6代目が守り続ける諏訪名産かりんを使用し、<br>爽やかな香りとやさしい甘みが広がる諏訪らしい一杯です。"
    },

    {
        name: "信州りんごジュース",
        price: "¥770",
        description: "信州りんごのおいしさをぎゅっと閉じ込めたジュース。<br>豊かな甘みと、すっきりとした後味をお楽しみください。"
    },

    {
        name: "信州牛乳",
        price: "¥880",
        description: "信州の豊かな自然の中で育まれた牛乳。<br>まろやかでコク深く素材そのものの濃厚な味わいを楽しめます。"
    }
];

const winterDrinks = [

    {
        name: "たてしな紅茶",
        price: "¥660",
        description: "農薬を使わず、大切に育てられた紅茶。<br>たてしな天然水が優しい香りと澄んだ味わいを引き出します。"
    },

    {
        name: "たてしな延命茶",
        price: "¥330",
        description: "たてしな天然水を使用した黒姫和漢超命茶。<br>香ばしく、すっきりとした味わいでお食事中におすすめです。"
    }

];

const alcohols = [

    {
        name: "クラフトビール　よなよなエール",
        price: "¥660",
        description: "ナショナルピアコンペティション国際ビール大賞を受賞。"
    },

    {
        name: "クラフトビール　山の上ニューイ",
        price: "¥660",
        description: "ジャパンプレート・ピアアワーズ2022銀賞。"
    },

    {
        name: "ノンアルコールビール",
        price: "¥660",
        description: "アルコール0.00%で、ビールの美味しさをそのままに。"
    },

    {
        name: "諏訪の地酒　純米辛口「神渡」（一合）",
        price: "¥770",
        description: "諏訪の恵まれた清らかな水が育む辛口。<br>すっきりとした飲み口で、お肉料理にもよく合います。"
    },

    {
        name: "信州ワイン（グラス）",
        price: "¥880",
        description: "信州の風土が育んだ、食事に寄り添う一杯。"
    }

];


/* =========================
   メニューカードを表示
========================= */

const hamburgMenu =
    document.getElementById("hamburgMenu");

const steakMenu =
    document.getElementById("steakMenu");


menus.forEach((menu, index) => {

    const card =
        document.createElement("article");

    card.classList.add("menu-card");

    card.innerHTML = `

        <div class="menu-card-image">

            <img
                src="${menu.image}"
                alt="${menu.name}"
            >

        </div>

        <div class="menu-card-content">

            <p class="menu-card-category">
                ${menu.category}
            </p>

            <h3>
                ${menu.name}
            </h3>

            <p class="menu-card-price">
                ${menu.price}
            </p>

            <button
                class="detail-button"
                data-index="${index}"
                type="button">

                詳細を見る

            </button>

        </div>

    `;


if (menu.type === "hamburg" && hamburgMenu) {

    hamburgMenu.appendChild(card);

}

if (menu.type === "steak" && steakMenu) {

    steakMenu.appendChild(card);

}

});

/* =========================
   ドリンク表示
========================= */

const drinkMenu =
    document.getElementById("drinkMenu");


if (drinkMenu) {

    /* =========================
       通常のドリンク
    ========================= */

    drinks.forEach((drink) => {

        const drinkItem =
            document.createElement("div");

        drinkItem.classList.add("drink-item");

        drinkItem.innerHTML = `
            <div class="drink-item-header">
                <span>${drink.name}</span>
                <span>${drink.price}</span>
            </div>

            <p>${drink.description}</p>
        `;

        drinkMenu.appendChild(drinkItem);

    });


    /* =========================
       冬季限定
    ========================= */

    const winterTitle =
        document.createElement("div");

    winterTitle.classList.add("winter-title");

    winterTitle.innerHTML = `
        WINTER MENU
        <span>冬季限定</span>
    `;

    drinkMenu.appendChild(winterTitle);


    /* 冬季限定ドリンク */

    winterDrinks.forEach((drink) => {

        const drinkItem =
            document.createElement("div");

        drinkItem.classList.add("drink-item");

        drinkItem.innerHTML = `
            <div class="drink-item-header">
                <span>${drink.name}</span>
                <span>${drink.price}</span>
            </div>

            <p>${drink.description}</p>
        `;

        drinkMenu.appendChild(drinkItem);

    });


    /* =========================
       アルコール
    ========================= */

    const alcoholTitle =
        document.createElement("div");

    alcoholTitle.classList.add("alcohol-title");

    alcoholTitle.innerHTML = `
        <p>ALCOHOL</p>
        <h3>アルコール</h3>
    `;

    drinkMenu.appendChild(alcoholTitle);


    /* アルコール一覧 */

    alcohols.forEach((alcohol) => {

        const drinkItem =
            document.createElement("div");

        drinkItem.classList.add("drink-item");

        drinkItem.innerHTML = `
            <div class="drink-item-header">
                <span>${alcohol.name}</span>
                <span>${alcohol.price}</span>
            </div>

            <p>${alcohol.description}</p>
        `;

        drinkMenu.appendChild(drinkItem);

    });

    const alcoholNotice =
        document.createElement("p");

    alcoholNotice.classList.add("alcohol-notice");

    alcoholNotice.innerHTML =
        "※20歳未満の方の飲酒、およびお車を運転されるお客様へのアルコール類の提供は固くお断りいたします。";

    drinkMenu.appendChild(alcoholNotice);

}


/* =========================
   モーダル
========================= */

const modal =
    document.getElementById("menuModal");

const modalClose =
    document.getElementById("modalClose");

const modalImage =
    document.getElementById("modalImage");

const modalCategory =
    document.getElementById("modalCategory");

const modalName =
    document.getElementById("modalName");

const modalPrice =
    document.getElementById("modalPrice");

const modalSauce =
    document.getElementById("modalSauce");

const modalRice =
    document.getElementById("modalRice");

const modalSalad =
    document.getElementById("modalSalad");

const modalSoup =
    document.getElementById("modalSoup");

const modalOther =
    document.getElementById("modalOther");

const modalDescription =
    document.getElementById("modalDescription");


/* =========================
   詳細ボタン
========================= */

document.addEventListener("click", (event) => {

    if (
        !event.target.classList.contains(
            "detail-button"
        )
    ) {
        return;
    }


    const index =
        Number(event.target.dataset.index);

    const menu =
        menus[index];


    modalImage.src =
        menu.image;

    modalImage.alt =
        menu.name;


    modalCategory.textContent =
        menu.category;

    modalName.textContent =
        menu.name;

    modalPrice.textContent =
        menu.price;

    modalSauce.innerHTML =
        menu.sauce;

    modalRice.textContent =
        menu.rice;

    modalSalad.textContent =
        menu.salad;

    modalSoup.textContent =
        menu.soup;

    modalOther.textContent =
        menu.other;

    modalDescription.textContent =
        menu.description;


    modal.classList.add("show");

    document.body.classList.add(
        "modal-open"
    );

});


/* =========================
   モーダルを閉じる
========================= */

function closeModal() {

    modal.classList.remove("show");

    document.body.classList.remove(
        "modal-open"
    );

}


if (modalClose) {
    modalClose.addEventListener(
        "click",
        closeModal
    );
}


/* 外側をクリック */

if (modal) {
    modal.addEventListener("click", (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });
}


/* Escキー */

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal) {
        closeModal();
    }
});



/* =========================
   周辺アクセスマップ
========================= */

const spots = {

    "takashima": {
        name: "高島城",
        image: "images/takashima.jpg",
        time: "車で約18分"
    },

    "suwako": {
        name: "諏訪湖",
        image: "images/suwako.jpg",
        time: "車で約16分"
    },

    "chino-station": {
        name: "茅野駅",
        image: "images/chino-station.jpg",
        time: "車で約3分"
    },

    "tateshina-lake": {
        name: "蓼科湖",
        image: "images/tateshina-lake.jpg",
        time: "車で約23分"
    },

    "shirakaba-lake": {
        name: "白樺湖",
        image: "images/shirakaba-lake.jpg",
        time: "車で約27分"
    },

    "kurumayama": {
        name: "車山高原",
        image: "images/kurumayama.jpg",
        time: "車で約31分"
    },

    "kirigamine": {
        name: "霧ヶ峰・富士見台",
        image: "images/kirigamine.jpg",
        time: "車で約36分"
    },

    "yatsugatake": {
        name: "八ヶ岳登山口",
        image: "images/yatsugatake.jpg",
        time: "車で約23分"
    },

    "tateshina-mountain": {
        name: "蓼科山登山口",
        image: "images/tateshina-mountain.jpg",
        time: "車で約45分"
    },

    "suwa-inter": {
        name: "諏訪インター",
        image: "images/suwa-inter.jpg",
        time: "車で約9分"
    },

    "suwa-taisha": {
        name: "諏訪大社上社前宮",
        image: "images/suwa-taisha.jpg",
        time: "車で約9分"
    },

    "fujimi": {
        name: "富士見パノラマリゾート",
        image: "images/fujimi.jpg",
        time: "車で約20分"
    },

    "takato": {
        name: "高遠城址公園",
        image: "images/takato.jpg",
        time: "車で約37分"
    }

};


/* 地図上のスポット */

const mapPoints =
    document.querySelectorAll(".map-point");


/* 詳細を表示する場所 */

const spotDetail =
    document.getElementById("spotDetail");


/* スポットをクリック */

mapPoints.forEach((point) => {

    point.addEventListener("click", () => {

        const spot =
            spots[point.dataset.spot];


        spotDetail.innerHTML = `

            <div class="spot-detail-card">


                <!-- 閉じるボタン -->
                <button
                    class="spot-close"
                    type="button">

                    ×

                </button>


                <!-- 写真 -->
                <img
                    src="${spot.image}"
                    alt="${spot.name}"
                >


                <!-- 詳細 -->
                <div class="spot-detail-content">

                    <h3>
                        ${spot.name}
                    </h3>

                    <p>
                        WOODMAN PLUSまで
                    </p>

                    <p class="spot-time">
                        ${spot.time}
                    </p>

                </div>

            </div>

        `;


        /* ポップアップを表示 */

        spotDetail.classList.add("active");


        /* 閉じるボタン */

        const spotClose =
            spotDetail.querySelector(".spot-close");


        spotClose.addEventListener("click", () => {

            spotDetail.classList.remove("active");

            spotDetail.innerHTML = "";

        });

    });

});





/* =========================
   NEWSページ
========================= */


/* =========================
   今回のおすすめ
========================= */


/*
    今回は仮のデータ

    後でInstagram APIとつなぐと
    この部分をInstagramから取得したデータに変更する
*/


const recommendPosts = [

    {
        date: "2026-08-29",

        title: "今週のおすすめ",

        text: "WOODMAN PLUSおすすめのハンバーグをぜひお楽しみください。",

        image: "images/recommend.jpg"
    }

];


/* 表示する場所 */

const recommendList =
    document.getElementById("recommendList");


/*
    NEWSページ以外では
    recommendListが存在しないので処理しない
*/

if (recommendList) {


    /*
        今は最新1件だけ表示

        将来的には
        #woodmanplusおすすめ
        の最新投稿を表示する予定
    */

    const latestRecommend =
        recommendPosts[0];


    recommendList.innerHTML = `

        <article class="recommend-card">


            <!-- 写真 -->

            <div class="recommend-image">

                <img
                    src="${latestRecommend.image}"
                    alt="${latestRecommend.title}"
                >

            </div>


            <!-- 内容 -->

            <div class="recommend-content">

                <p class="recommend-date">

                    ${latestRecommend.date}

                </p>


                <h3>

                    ${latestRecommend.title}

                </h3>


                <p>

                    ${latestRecommend.text}

                </p>

            </div>


        </article>

    `;

}


/* =========================
   NEWS
========================= */


/*
    仮のお知らせデータ

    後でInstagram APIとつなぐ場合は
    #woodmanplus_news の投稿を
    ここに取得する形に変更する
*/


const newsPosts = [

    {
        date: "2026-08-29",

        text: "ホームページを公開しました。"
    },


    {
        date: "2026-08-25",

        text: "営業時間に関するお知らせを更新しました。"
    },


    {
        date: "2026-08-20",

        text: "WOODMAN PLUSからのお知らせを掲載していきます。"
    },

     {
        date: "2026-08-15",
        text: "おすすめメニューを更新しました。"
    },

    {
        date: "2026-08-10",
        text: "お盆期間の営業についてお知らせします。"
    },

    {
        date: "2026-08-05",
        text: "ご来店ありがとうございます。"
    }

];


/* NEWSを表示する場所 */

const newsList =
    document.getElementById("newsList");


/*
    NEWSページだけで実行
*/

if (newsList) {


    /*
        NEWSを1件ずつ表示
    */

    newsPosts.forEach((news) => {


        newsList.innerHTML += `

            <article class="news-item">


                <!-- 日付 -->

                <time
                    class="news-date"
                    datetime="${news.date}">

                    ${news.date}

                </time>


                <!-- 内容 -->

                <div class="news-content">

                    ${news.text}

                </div>


            </article>

        `;

    });

}


/* =========================
   STORYページ
   スクロールアニメーション
========================= */


const storyRevealElements =
    document.querySelectorAll(
        ".story-reveal, .story-reveal-left, .story-reveal-right"
    );


if (storyRevealElements.length > 0) {


    const storyObserver =
        new IntersectionObserver(
            (entries) => {


                entries.forEach((entry) => {


                    if (entry.isIntersecting) {


                        entry.target.classList.add(
                            "show"
                        );


                        storyObserver.unobserve(
                            entry.target
                        );


                    }


                });


            },


            {

                threshold: 0.15

            }

        );


    storyRevealElements.forEach((element) => {


        storyObserver.observe(element);


    });


}