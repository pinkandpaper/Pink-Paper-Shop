/* ==========================================================================
   PINK & PAPER — SCRIPT.JS
   (نسخة معدّلة: بتدعم "مقاسات/أحجام" لكل منتج، كل مقاس بسعره الخاص)
   ========================================================================== */

/* --------------------------------------------------------------------------
   1. STORE CONFIG
   -------------------------------------------------------------------------- */

const WHATSAPP_NUMBER = "201043063085";

/* --------------------------------------------------------------------------
   2. PRODUCT DATA

   IMPORTANT:
   Every product has a permanent unique ID. Never change it after publishing.

   منتج عادي (سعر واحد):
   { id: "PP-001", name: "...", price: 75, images: [...], category: "pens" }

   منتج بمقاسات مختلفة (كل مقاس بسعره):
   {
     id: "PP-004",
     name: "نوتة",
     variants: [
       { name: "صغيرة", price: 12 },
       { name: "كبيرة", price: 20 },
     ],
     images: [...],
     category: "notebooks",
   }

   ملحوظة: لو المنتج فيه "variants" متحطش "price" ليه، السعر بيتاخد من
   المقاس المختار. لو مفيش "variants" السعر بيتاخد من "price" زي الأول.
   -------------------------------------------------------------------------- */

const PRODUCTS = [
  {
    id: "PP-001",
    name: "أقلام شي إن",
    description: "",
    price: 75,
    images: [
      "images/pen/ChatGPT Image Aug 20, 2026, 01_29_42 AM.png",
      "images/pen/photo_2026-08-20_01-36-05-Picsart-AiImageEnhancer.jpg",
      "images/pen/ChatGPT Image Aug 20, 2026, 01_35_42 AM.png",
    ],
    category: "pens",
  },
  {
    id: "PP-002",
    name: "هايلايتر M&G Retractable",
    description: `🖍️ 4 ألوان نيون مميزة
✅ سن كبس (Retractable) بدون غطاء
✅ كتابة ناعمة وسريعة الجفاف
✅ تصميم كيوت برسومات الباندا وسهل الحمل
خلي كل صفحة في كشكولك مليانة ألوان وحماس للمذاكرة! 📚💖`,
    price: 185,
    images: [
      "images/highlighters/photo_2026-08-20_02-11-27.jpg",
      "images/highlighters/photo_2026-08-20_02-11-14.jpg",
      "images/highlighters/photo_2026-08-20_02-11-26.jpg",
      "images/highlighters/photo_2026-08-20_02-11-28.jpg",
    ],
    category: "pens",
  },
  {
    id: "PP-003",
    name: "دفاتر تلوين ",
    description: "",
    variants: [
      { name: "صغيرة", price: 60 },
      { name: "كبيرة", price: 145 },
    ],
    images: [
      "images/art/photo_2026-08-29_20-36-19.jpg",
      "images/art/photo_2026-08-29_20-36-22 (1).jpg",
      "images/art/photo_2026-08-29_20-36-25.jpg",
      "images/art/photo_2026-08-29_20-36-28.jpg",
      "images/art/photo_2026-08-29_20-36-30.jpg",
      "images/art/photo_2026-08-29_20-36-35.jpg",
      "images/art/photo_2026-08-29_20-36-37.jpg",
      "images/art/photo_2026-08-29_20-36-38.jpg",
      "images/art/photo_2026-08-29_21-19-52.jpg",
      "images/art/photo_2026-08-29_21-19-53.jpg",
      "images/art/photo_2026-08-29_21-19-54 (2).jpg",
      "images/art/photo_2026-08-29_21-19-55 (2).jpg",
      "images/art/photo_2026-08-29_21-19-55.jpg",
      "images/art/photo_2026-08-29_21-19-56 (2).jpg",
    ],
    category: "art",
  },
  {
    id: "PP-004",
    name: "نوتة",
    description: "",
    price: 20,

    images: [
      "images/notebooks/photo_2026-08-20_03-22-10.jpg",
      "images/notebooks/photo_2026-08-20_03-22-11.jpg",
      "images/notebooks/photo_2026-08-20_03-22-10 (2).jpg",
      "images/notebooks/photo_2026-08-20_03-22-13.jpg",
      "images/notebooks/photo_2026-08-20_03-22-14.jpg",
      "images/notebooks/photo_2026-08-20_03-22-15.jpg",
      "images/notebooks/photo_2026-08-20_03-22-16.jpg",
      "images/notebooks/photo_2026-08-20_03-22-17.jpg",
    ],
    category: "notebooks",
  },
  {
    id: "PP-005",
    name: "",
    description: "",
    price: 45,
    images: [
      "images/notebooks/photo_2026-08-29_21-45-07 (2).jpg",
      "images/notebooks/photo_2026-08-29_21-45-07.jpg",
      "images/notebooks/photo_2026-08-29_21-45-08 (3).jpg",
      "images/notebooks/photo_2026-08-29_21-45-08.jpg",
    ],
    videos: ["https://res.cloudinary.com/jfczkywf/video/upload/video_2026-08-29_21-45-09.mp4"],

    category: "notebooks",
  },
  {
    id: "PP-006",
    name: "",
    description: "",
    price: 30,
    images: [
      "images/notebooks/photo_2026-08-29_21-45-01.jpg",
      "images/notebooks/photo_2026-08-29_21-45-04.jpg",
      "images/notebooks/photo_2026-08-29_21-44-58.jpg",
      "images/notebooks/photo_2026-08-29_21-45-03.jpg",
      "images/notebooks/photo_2026-08-29_21-45-05.jpg",
    ],
    category: "notebooks",
  },
  {
    id: "PP-007",
    name: "",
    description: "",
    price: 95,
    images: [
      "images/notebooks/photo_2026-08-29_21-46-54 (2).jpg",
      "images/notebooks/photo_2026-08-29_21-46-53.jpg",
      "images/notebooks/photo_2026-08-29_21-46-53 (2).jpg",
      "images/notebooks/photo_2026-08-29_21-46-53.jpg",
      "images/notebooks/photo_2026-08-29_21-46-54.jpg",
      "images/notebooks/photo_2026-08-29_21-46-56.jpg",
      "images/notebooks/photo_2026-08-29_21-46-57.jpg",
      "images/notebooks/photo_2026-08-29_21-46-55.jpg"
    ],
    category: "notebooks",
  },
  {
    id: "PP-008",
    name: "✨ Black Star Notebook",
    description: `📖 ورق أسود بتصميم مميز مستوحى من السماء والنجوم
⭐ مناسبة للكتابة، الرسم، تسجيل الأفكار والخواطر
🖤 تصميم أنيق وفخم يخليها قطعة مميزة على مكتبك
🎀 اختيار مثالي لكل بنت بتحب الحاجات الـ aesthetic والمختلفة`,
    price: 180,
    images: ["images/notebooks/photo_2026-08-29_23-23-28.jpg",
      "images/notebooks/photo_2026-08-29_23-23-29 (2).jpg",
      "images/notebooks/photo_2026-08-29_23-23-29.jpg",
      "images/notebooks/photo_2026-08-29_23-23-30.jpg",
      "images/notebooks/photo_2026-08-29_23-23-31 (2).jpg",
      "images/notebooks/photo_2026-08-29_23-23-31.jpg",
      "images/notebooks/photo_2026-08-29_23-23-32.jpg",
      "images/notebooks/photo_2026-08-29_23-23-33.jpg",
      "images/notebooks/photo_2026-08-29_23-23-34.jpg",
      "images/notebooks/photo_2026-08-29_23-23-40.jpg"
    ],
    category: "notebooks",
  },
  {
    id: "PP-009",
    name: "Spring Sakura 🌸 Note Book 🥰",
    description:`📝 80 ورقة بلون كريمي مريح للعين أثناء الكتابة.
🐰 فواصل جانبية 
🌸 تصميمات Kawaii لطيفة.
والاهم بحجم A6 يعني معاك ف كل مكان للأفكار والملاحظات السريعة `,
    price: 45,
    images: ["images/notebooks/photo_2026-08-30_21-33-21.jpg",
"images/notebooks/photo_2026-08-30_21-33-22.jpg",
"images/notebooks/photo_2026-08-30_21-33-19 (2).jpg",
"images/notebooks/photo_2026-08-30_21-33-20 (2).jpg",
"images/notebooks/photo_2026-08-30_21-33-19.jpg",
"images/notebooks/photo_2026-08-30_21-33-20.jpg",
"images/notebooks/photo_2026-08-30_21-33-23.jpg",
"images/notebooks/photo_2026-08-30_21-33-24.jpg"
    ],
    category: "notebooks",
  },
  {
    id: "PP-010",
    name: "🖤 اسكتش ورق أسود",
    description: `هو لسه في حد مجربش يكتب أو يرسم على الورق الأسود؟ 🖤✨

كلنا عارفين إن الألوان على الورق الأبيض جميلة...
بس على الأسود؟ خيااااال! 😍🎨

جرب بنفسك وشوف الفرق!

🖤 اسكتش ورق أسود
📏 مقاس A5
📄 30 شيت
📝 ورق 80`,
    price: 50,
    images:[
      "images/notebooks/photo_2026-08-30_21-42-32.jpg",
      "images/notebooks/photo_2026-08-30_21-42-33 (2).jpg",
      "images/notebooks/photo_2026-08-30_21-42-33.jpg",
      "images/notebooks/photo_2026-08-30_21-42-34 (2).jpg",
      "images/notebooks/photo_2026-08-30_21-42-34.jpg"
    ] ,
    category: "notebooks",
  },
  {
    id: "PP-011",
    name: "قلم جل ناعم",
    description: `أقلام لا تُقاوم بصراحة🥹💜

خط وشكل ولون ولا أجمل🙆🏻‍♀️💜

بعنوان البساطة واللطافة✨️💜

أقلام جل ناعم وسلس جدا في الكتابة🫧💜

بمقاس سن 0.5 ملى☁️💜

متوفرة بأربع ألوان خارجية💜🩷🩵💚

بتكتب أزرق جل فقط💜

وسعرها بسيط جدا😁💜`,
    price: 10,
    images: ["images/pen/photo_2026-08-30_21-52-09.jpg",
      "images/pen/photo_2026-08-30_21-52-06 (2).jpg",
      "images/pen/photo_2026-08-30_21-52-07 (2).jpg",
      "images/pen/photo_2026-08-30_21-52-07.jpg",
      "images/pen/photo_2026-08-30_21-52-08 (2).jpg",
      "images/pen/photo_2026-08-30_21-52-08.jpg"
    ],
    category: "pen",
  },
  {
    id: "PP-012",
    name: "ستيكي نوتس لاصقة",
    description: `🤍 شكل قلب مميز
📄 60 ورقة
مناسبة لتسجيل الملاحظات، التذكيرات، وفواصل الكتب.`,
    price: 20,
    image: "images/sticky/photo_2026-08-30_21-59-23.jpg",
    category: "cute",
  },
  {
    id: "PP-017",
    name: "دفتر جيب",
    description: `لطيفة من برا ومُلونة من جوا☁️🤎

صغيرة بس بتغرقك في تفاصيلها🥹🤎

دفتر جيب صغير معاك في كل مكان 🐼☁️

بتصميمات باندا مبهجة✨️☁️

ه بطبقة بلاستيكة متينة وشفافة لحمايته من المياه أو الأتربة🫧

مع 4 فواصل مختلفة لسهولة التنظيم والتقليب💡

ورقه بقى حاجة تانية خالص كل قسم مفاجأة🙆🏻‍♀️🤎

استمتعوا بالصور🤎

آخر صورتين على الطبيعة🐼
`,
    price: 65,
    images: ["images/notebooks/photo_2026-08-30_22-03-37.jpg",
      "images/notebooks/photo_2026-08-30_22-03-35.jpg",
      "images/notebooks/photo_2026-08-30_22-03-38 (2).jpg",
      "images/notebooks/photo_2026-08-30_22-03-38.jpg",
      "images/notebooks/photo_2026-08-30_22-03-39.jpg",
      "images/notebooks/photo_2026-08-30_22-03-40 (2).jpg",
      "images/notebooks/photo_2026-08-30_22-03-40.jpg",
      "images/notebooks/photo_2026-08-30_22-03-41.jpg",
      "images/notebooks/photo_2026-08-30_22-03-42.jpg"
    ],
    category: "notebooks",
  },
  {
    id: "PP-013",
    name: "قلم  حبر جل أزرق🖊️",
    description: `أقلام جيل كيوت بتصميمات Puppy Love & Drink Time اللطيفة، تجمع بين الشكل المميز والكتابة السلسة ✨🖊️

💙 6 أقلام بتصميمات وألوان مختلفة

🖊️ حبر جل أزرق

📏 سن 0.5 mm للكتابة الدقيقة

🤍 Grip مريح للاستخدام اليومي

🔘 Push Button لسهولة الاستخدام

🎀 تصميمات لطيفة مناسبة للمذاكرة، المكتب والجامعة
اختاري التصميم المفضل ليكي وخلي كل كتابة ألطف! 🐶📝💖

متوفرة بثلاث كروت مختلفة والكارت فيه قلمين صورتهم على الطبيعة في الآخر🩵

`,
    price: 45,
    images: ["images/pen/photo_2026-08-30_23-14-42.jpg",
      "images/pen/photo_2026-08-30_23-14-43 (2).jpg",
      "images/pen/photo_2026-08-30_23-14-43.jpg",
      "images/pen/photo_2026-08-30_23-14-44 (2).jpg",
      "images/pen/photo_2026-08-30_23-14-44.jpg",
      "images/pen/photo_2026-08-30_23-14-45.jpg",
      "images/pen/photo_2026-08-30_23-14-42 (2).jpg",
      "images/pen/photo_2026-08-30_23-14-46.jpg"
    ],
    category: "pens",
  },
  {
    id: "PP-014",
    name: "أقلام جل",
    description: `مناسب للأطفال لسن الـ30 😌🐧

Penguin Wishes Gel Pens🐧 ✨

قلم بشكل بطريق لذيذ أوي لأصحاب التميز🥹🩵

مع جمل تحفيزية عليه😃🤍🖤

وسلس جدا في الكتابة وخطه جل أزرق🩵☁️

الكارت 2 قلم بسعر تحفة🐧
`,
    price: 45,
    images:["images/pen/photo_2026-08-30_23-24-52.jpg",
      "images/pen/photo_2026-08-30_23-24-47.jpg",
      "images/pen/photo_2026-08-30_23-24-48.jpg",
      "images/pen/photo_2026-08-30_23-24-49.jpg",
      "images/pen/photo_2026-08-30_23-24-50 (2).jpg",
      "images/pen/photo_2026-08-30_23-24-50.jpg",
      "images/pen/photo_2026-08-30_23-24-51.jpg",
      "images/pen/photo_2026-08-30_23-24-52.jpg",
      "images/pen/photo_2026-08-30_23-24-53.jpg"
    ] ,
    category: "pens",
  },
  {
    id: "PP-015",
    name: "",
    description: "",
    price: 0,
    image: "",
    category: "",
  },
  {
    id: "PP-016",
    name: "",
    description: "",
    price: 0,
    image: "",
    category: "",
  },
];

/* --------------------------------------------------------------------------
   2B. CATEGORY LABELS
   -------------------------------------------------------------------------- */

const CATEGORY_LABELS = {
  pens: "✏️ أقلام",
  notebooks: "📓 دفاتر",
  art: "🎨 الرسم والفنون",
  school: "🎒 حقائب ومقالم",
  cute: "🎀 إضافات كيوت",
  food: "🍱 مستلزمات الطعام والشراب",
  office: "🖇️ مستلزمات المكتب",
  party: "🎈 مستلزمات الحفلات والزينة",
};

/* --------------------------------------------------------------------------
   3. PRODUCT HELPERS
   -------------------------------------------------------------------------- */

function getProductById(productId) {
  return PRODUCTS.find((product) => product.id === productId);
}

function getProductImages(product) {
  if (product.images && product.images.length > 0) {
    return product.images;
  }
  return [product.image];
}

/*
   Unified media list for a product: images first, then videos.
   Each item looks like { type: "image", src: "..." } or { type: "video", src: "..." }.
   Works whether the product uses the old "image" field or the "images" array,
   and "videos" is always optional — products without it simply get no video items.
*/
function getProductMedia(product) {
  const images = getProductImages(product).filter(Boolean);
  const videos = Array.isArray(product.videos)
    ? product.videos.filter(Boolean)
    : [];

  const media = images.map((src) => ({ type: "image", src }));
  videos.forEach((src) => media.push({ type: "video", src }));

  return media;
}

function formatDescription(description) {
  if (!description) return "";
  return description
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .join("<br>");
}

/* --------------------------------------------------------------------------
   3B. VARIANT (SIZE) HELPERS
   -------------------------------------------------------------------------- */

/*
   Does this product have multiple size/variant options?
*/
function productHasVariants(product) {
  return Array.isArray(product.variants) && product.variants.length > 0;
}

/*
   Find a specific variant by name. Falls back to the first variant
   if the requested name isn't found (protects against stale cart data
   if a variant name is ever renamed).
*/
function getVariantByName(product, variantName) {
  if (!productHasVariants(product)) return null;
  return (
    product.variants.find((variant) => variant.name === variantName) ||
    product.variants[0]
  );
}

/*
   The variant that should be selected by default (first one listed).
*/
function getDefaultVariantName(product) {
  return productHasVariants(product) ? product.variants[0].name : null;
}

/*
   Resolve the actual price to charge, given an optional variant name.
*/
function getProductPrice(product, variantName) {
  if (productHasVariants(product)) {
    const variant = getVariantByName(product, variantName);
    return variant ? variant.price : product.variants[0].price;
  }
  return product.price;
}

/*
   Price label shown on the product grid card (before a variant is chosen).
   Shows "من X EGP" when variants have different prices.
*/
function getProductPriceLabel(product) {
  if (productHasVariants(product)) {
    const prices = product.variants.map((variant) => variant.price);
    const min = Math.min(...prices);
    const max = Math.max(...prices);
    return min === max ? `${min} EGP` : `من ${min} EGP`;
  }
  return `${product.price} EGP`;
}

/*
   Convert old index-based cart data to the new ID-based system,
   and make sure every item has a valid variantName (or null).
*/
function normalizeCartData(savedCart) {
  if (!Array.isArray(savedCart)) return [];

  return savedCart
    .map((item) => {
      if (item && typeof item.id === "string") {
        const product = getProductById(item.id);
        if (!product) return null;

        let variantName =
          typeof item.variantName === "string" ? item.variantName : null;

        if (productHasVariants(product)) {
          const variant = getVariantByName(product, variantName);
          variantName = variant ? variant.name : getDefaultVariantName(product);
        } else {
          variantName = null;
        }

        return {
          id: item.id,
          variantName,
          quantity: Math.max(1, Number(item.quantity) || 1),
        };
      }

      // Old format: { index: 0, quantity: 2 }
      if (item && Number.isInteger(item.index) && PRODUCTS[item.index]) {
        const product = PRODUCTS[item.index];
        return {
          id: product.id,
          variantName: productHasVariants(product)
            ? getDefaultVariantName(product)
            : null,
          quantity: Math.max(1, Number(item.quantity) || 1),
        };
      }

      return null;
    })
    .filter(Boolean);
}

function normalizeFavoritesData(savedFavorites) {
  if (!Array.isArray(savedFavorites)) return [];

  return savedFavorites
    .map((item) => {
      if (typeof item === "string") {
        return getProductById(item) ? item : null;
      }
      if (Number.isInteger(item) && PRODUCTS[item]) {
        return PRODUCTS[item].id;
      }
      return null;
    })
    .filter(Boolean);
}

/* --------------------------------------------------------------------------
   4. SHOPPING CART
   -------------------------------------------------------------------------- */

let cart = normalizeCartData(
  JSON.parse(localStorage.getItem("pinkPaperCart")) || [],
);

/* --------------------------------------------------------------------------
   5. FAVORITES
   -------------------------------------------------------------------------- */

let favorites = normalizeFavoritesData(
  JSON.parse(localStorage.getItem("pinkPaperFavorites")) || [],
);

/* --------------------------------------------------------------------------
   6. SAVE CART
   -------------------------------------------------------------------------- */

function saveCart() {
  localStorage.setItem("pinkPaperCart", JSON.stringify(cart));
}

/* --------------------------------------------------------------------------
   7. WHATSAPP LINK BUILDER
   -------------------------------------------------------------------------- */

function buildWhatsAppLink(message) {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
}

/* --------------------------------------------------------------------------
   9. UPDATE FAVORITES COUNT
   -------------------------------------------------------------------------- */

function updateFavoritesCount() {
  const favoritesCount = document.getElementById("favoritesCount");
  if (!favoritesCount) return;
  favoritesCount.textContent = favorites.length;
}

/* --------------------------------------------------------------------------
   10. RENDER FAVORITES
   -------------------------------------------------------------------------- */

function renderFavorites() {
  const favoritesItems = document.getElementById("favoritesItems");
  if (!favoritesItems) return;

  favorites = favorites.filter((id) => getProductById(id));

  if (favorites.length === 0) {
    favoritesItems.innerHTML = `
      <div class="favorites__empty">
        <span>\uD83E\uDD0D</span>
        <h3>لا توجد منتجات مفضلة</h3>
        <p>اضغط على \u2764\uFE0F بجانب أي منتج لإضافته إلى مفضلاتك.</p>
      </div>
    `;
    updateFavoritesCount();
    return;
  }

  favoritesItems.innerHTML = favorites
    .map((productId) => {
      const product = getProductById(productId);
      if (!product) return "";
      const productImages = getProductImages(product);

      return `
        <div class="favorite-item">
          <div class="favorite-item__image">
            <img src="${productImages[0]}" alt="${product.name}" />
          </div>
          <div class="favorite-item__info">
            <h3 class="favorite-item__name">${product.name}</h3>
            <p class="favorite-item__price">${getProductPriceLabel(product)}</p>
            <p class="favorite-item__id">كود المنتج: ${product.id}</p>
            <div class="favorite-item__actions">
              <button class="favorite-item__add-cart" type="button" data-id="${product.id}">
                \uD83D\uDED2 أضف إلى السلة
              </button>
              <button class="favorite-item__remove" type="button" data-id="${product.id}" title="إزالة من المفضلة">
                إزالة من المفضلة \uD83D\uDDD1\uFE0F
              </button>
            </div>
          </div>
        </div>
      `;
    })
    .join("");

  favoritesItems
    .querySelectorAll(".favorite-item__remove")
    .forEach((button) => {
      button.addEventListener("click", () =>
        removeFromFavorites(button.dataset.id),
      );
    });

  favoritesItems
    .querySelectorAll(".favorite-item__add-cart")
    .forEach((button) => {
      button.addEventListener("click", () => {
        const productId = button.dataset.id;
        const product = getProductById(productId);

        // لو المنتج له مقاسات مختلفة، لازم يختار المقاس من صفحة المنتج
        if (product && productHasVariants(product)) {
          closeFavorites();
          openProductPage(productId);
          return;
        }

        addToCart(productId);
        button.textContent = "\u2713 تمت الإضافة";
        setTimeout(() => {
          button.textContent = "\uD83D\uDED2 أضف إلى السلة";
        }, 900);
      });
    });

  favoritesItems
    .querySelectorAll(".favorite-item__image")
    .forEach((imageWrap, favIndex) => {
      imageWrap.style.cursor = "pointer";
      imageWrap.addEventListener("click", () =>
        openProductPage(favorites[favIndex]),
      );
    });

  updateFavoritesCount();
}

/* --------------------------------------------------------------------------
   11. ADD / REMOVE FAVORITE
   -------------------------------------------------------------------------- */

function toggleFavorite(productId, button) {
  const product = getProductById(productId);
  if (!product) return;

  if (favorites.includes(productId)) {
    favorites = favorites.filter((id) => id !== productId);
    if (button) {
      button.classList.remove("is-active");
      button.textContent = "\uD83E\uDD0D";
      button.setAttribute("aria-label", "Add to favorites");
    }
  } else {
    favorites.push(productId);
    if (button) {
      button.classList.add("is-active");
      button.textContent = "\u2764\uFE0F";
      button.setAttribute("aria-label", "Remove from favorites");
    }
  }

  localStorage.setItem("pinkPaperFavorites", JSON.stringify(favorites));
  updateFavoritesCount();
  renderFavorites();

  if (currentProductPageId === productId) {
    updateProductPageFavoriteButton();
  }
}

/* --------------------------------------------------------------------------
   12. REMOVE FROM FAVORITES
   -------------------------------------------------------------------------- */

function removeFromFavorites(productId) {
  favorites = favorites.filter((id) => id !== productId);
  localStorage.setItem("pinkPaperFavorites", JSON.stringify(favorites));

  const button = document.querySelector(
    `.favorite-btn[data-id="${productId}"]`,
  );
  if (button) {
    button.classList.remove("is-active");
    button.textContent = "\uD83E\uDD0D";
    button.setAttribute("aria-label", "Add to favorites");
  }

  updateFavoritesCount();
  renderFavorites();

  if (currentProductPageId === productId) {
    updateProductPageFavoriteButton();
  }
}

/* --------------------------------------------------------------------------
   13. OPEN FAVORITES
   -------------------------------------------------------------------------- */

function openFavorites() {
  const favoritesElement = document.getElementById("favorites");
  const overlay = document.getElementById("favoritesOverlay");
  const favoritesToggle = document.getElementById("favoritesToggle");
  if (!favoritesElement) return;

  renderFavorites();
  favoritesElement.classList.add("is-open");
  if (overlay) overlay.classList.add("is-open");
  if (favoritesToggle) favoritesToggle.setAttribute("aria-expanded", "true");
}

/* --------------------------------------------------------------------------
   14. CLOSE FAVORITES
   -------------------------------------------------------------------------- */

function closeFavorites() {
  const favoritesElement = document.getElementById("favorites");
  const overlay = document.getElementById("favoritesOverlay");
  const favoritesToggle = document.getElementById("favoritesToggle");
  if (!favoritesElement) return;

  favoritesElement.classList.remove("is-open");
  if (overlay) overlay.classList.remove("is-open");
  if (favoritesToggle) favoritesToggle.setAttribute("aria-expanded", "false");
}

/* --------------------------------------------------------------------------
   15. SETUP FAVORITES
   -------------------------------------------------------------------------- */

function setupFavorites() {
  const favoritesToggle = document.getElementById("favoritesToggle");
  const favoritesClose = document.getElementById("favoritesClose");
  const favoritesOverlay = document.getElementById("favoritesOverlay");

  if (favoritesToggle) {
    favoritesToggle.addEventListener("click", () => {
      const favoritesElement = document.getElementById("favorites");
      if (favoritesElement?.classList.contains("is-open")) {
        closeFavorites();
      } else {
        openFavorites();
      }
    });
  }

  if (favoritesClose) favoritesClose.addEventListener("click", closeFavorites);
  if (favoritesOverlay)
    favoritesOverlay.addEventListener("click", closeFavorites);

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeFavorites();
  });

  updateFavoritesCount();
  renderFavorites();
}

/* --------------------------------------------------------------------------
   16. RENDER PRODUCT CARDS
   -------------------------------------------------------------------------- */

function renderProducts() {
  const grid = document.getElementById("productGrid");
  if (!grid) return;

  grid.innerHTML = PRODUCTS.map((product) => {
    const isFavorite = favorites.includes(product.id);
    const productImages = getProductImages(product);
    const mainImage = productImages[0];
    const hasVariants = productHasVariants(product);

    const searchText = `${product.name} ${product.description}`
      .toLowerCase()
      .replace(/\s+/g, " ")
      .replace(/"/g, "&quot;");

    return `
          <article class="product-card reveal" data-id="${product.id}" data-category="${product.category}" data-search="${searchText}">
            <div class="product-card__image-wrap">
              <img class="product-main-image" src="${mainImage}" alt="${product.name}" loading="lazy" />
              <button class="favorite-btn ${isFavorite ? "is-active" : ""}" data-id="${product.id}"
                aria-label="${isFavorite ? "Remove from favorites" : "Add to favorites"}" type="button">
                ${isFavorite ? "\u2764\uFE0F" : "\uD83E\uDD0D"}
              </button>
            </div>

            ${
              productImages.length > 1
                ? `
                  <div class="product-thumbnails">
                    ${productImages
                      .map(
                        (image, imageIndex) => `
                        <button class="product-thumbnail ${imageIndex === 0 ? "is-active" : ""}" type="button" data-image="${image}">
                          <img src="${image}" alt="${product.name}" />
                        </button>
                      `,
                      )
                      .join("")}
                  </div>
                `
                : ""
            }

            <div class="product-card__body">
              <h3 class="product-card__name">${product.name}</h3>
              <p class="product-card__desc">${formatDescription(product.description)}</p>
              <p class="product-card__id">كود المنتج: ${product.id}</p>

              <div class="product-card__footer">
                <span class="product-card__price">${getProductPriceLabel(product)}</span>

                <button class="product-card__order add-to-cart" data-id="${product.id}"
                  data-has-variants="${hasVariants}" type="button">
                  ${hasVariants ? "\uD83D\uDCCF اختر المقاس" : "\uD83D\uDED2 Add to cart"}
                </button>
              </div>
            </div>
          </article>
        `;
  }).join("");

  grid.querySelectorAll(".product-thumbnail").forEach((thumbnail) => {
    thumbnail.addEventListener("click", (event) => {
      event.stopPropagation();
      const image = thumbnail.dataset.image;
      const card = thumbnail.closest(".product-card");
      const mainImage = card.querySelector(".product-main-image");
      if (mainImage) mainImage.src = image;

      card
        .querySelectorAll(".product-thumbnail")
        .forEach((item) => item.classList.remove("is-active"));
      thumbnail.classList.add("is-active");
    });
  });

  grid.querySelectorAll(".favorite-btn").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      toggleFavorite(button.dataset.id, button);
    });
  });

  grid.querySelectorAll(".add-to-cart").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      const productId = button.dataset.id;

      // لو المنتج له مقاسات، افتح صفحة المنتج عشان يختار المقاس بدل ما يتضاف على طول
      if (button.dataset.hasVariants === "true") {
        openProductPage(productId);
        return;
      }

      addToCart(productId);
    });
  });

  grid.querySelectorAll(".product-card").forEach((card) => {
    card.addEventListener("click", () => openProductPage(card.dataset.id));
  });

  observeReveals();
}

/* --------------------------------------------------------------------------
   17. ADD PRODUCT TO CART
   -------------------------------------------------------------------------- */

function addToCart(productId, quantity = 1, variantName = null) {
  const product = getProductById(productId);
  if (!product) return;

  const safeQuantity = Math.max(1, Number(quantity) || 1);

  // لو المنتج له مقاسات، لازم يبقى فيه اسم مقاس صحيح (يتحدد الافتراضي لو مبعتش)
  let resolvedVariantName = null;
  if (productHasVariants(product)) {
    const variant = getVariantByName(
      product,
      variantName || getDefaultVariantName(product),
    );
    resolvedVariantName = variant.name;
  }

  const existingItem = cart.find(
    (item) => item.id === productId && item.variantName === resolvedVariantName,
  );

  if (existingItem) {
    existingItem.quantity += safeQuantity;
  } else {
    cart.push({
      id: productId,
      variantName: resolvedVariantName,
      quantity: safeQuantity,
    });
  }

  renderCart();
  updateCartCount();
  saveCart();

  const addButton = document.querySelector(
    `.add-to-cart[data-id="${productId}"]`,
  );
  if (addButton && addButton.dataset.hasVariants !== "true") {
    const originalText = addButton.innerHTML;
    addButton.innerHTML = "\u2713 Added";
    setTimeout(() => {
      addButton.innerHTML = originalText;
    }, 900);
  }
}

/* --------------------------------------------------------------------------
   17B. PRODUCT DETAILS PAGE
   -------------------------------------------------------------------------- */

let currentProductPageId = null;
let productPageMedia = [];
let productPageIndex = 0;
let productPageQuantity = 1;
let productPageVariant = null;

/*
   Video thumbnail markup: a muted preview video + a play icon overlay,
   so it reads visually as "this one is a video" without autoplaying.
*/
function buildThumbnailMarkup(mediaItem) {
  if (mediaItem.type === "video") {
    return `<video src="${mediaItem.src}" muted preload="metadata"></video><span class="video-play-icon">\u25B6</span>`;
  }
  return `<img src="${mediaItem.src}" alt="" />`;
}

function renderProductPageThumbs() {
  const thumbsWrap = document.getElementById("productPageThumbs");
  if (!thumbsWrap) return;

  if (productPageMedia.length <= 1) {
    thumbsWrap.innerHTML = "";
    return;
  }

  thumbsWrap.innerHTML = productPageMedia
    .map(
      (mediaItem, index) => `
        <button
          class="product-thumbnail ${mediaItem.type === "video" ? "product-video-thumbnail" : ""} ${index === productPageIndex ? "is-active" : ""}"
          type="button"
          data-index="${index}"
        >
          ${buildThumbnailMarkup(mediaItem)}
        </button>
      `,
    )
    .join("");

  thumbsWrap.querySelectorAll(".product-thumbnail").forEach((thumbnail) => {
    thumbnail.addEventListener("click", () =>
      setProductPageMedia(Number(thumbnail.dataset.index)),
    );
  });
}

/*
   Show the media item at `index` (image or video) in the main product
   page display, swapping the <img>/<video> elements and stopping
   playback of whichever one isn't currently visible.
*/
function setProductPageMedia(index) {
  if (productPageMedia.length === 0) return;

  productPageIndex =
    ((index % productPageMedia.length) + productPageMedia.length) %
    productPageMedia.length;

  const mediaItem = productPageMedia[productPageIndex];
  const mainImg = document.getElementById("productPageImg");
  const mainVideo = document.getElementById("productPageVideo");

  if (mediaItem.type === "video") {
    if (mainVideo) {
      if (mainVideo.getAttribute("src") !== mediaItem.src) {
        mainVideo.src = mediaItem.src;
      }
      mainVideo.style.display = "block";
    }
    if (mainImg) mainImg.style.display = "none";
  } else {
    if (mainVideo) {
      mainVideo.pause();
      mainVideo.removeAttribute("src");
      mainVideo.load();
      mainVideo.style.display = "none";
    }
    if (mainImg) {
      mainImg.src = mediaItem.src;
      mainImg.style.display = "block";
    }
  }

  document
    .querySelectorAll("#productPageThumbs .product-thumbnail")
    .forEach((thumbnail, i) => {
      thumbnail.classList.toggle("is-active", i === productPageIndex);
    });
}

// Backwards-compatible alias (kept in case anything else calls the old name).
function setProductPageImage(index) {
  setProductPageMedia(index);
}

function stopProductPageVideo() {
  const mainVideo = document.getElementById("productPageVideo");
  if (mainVideo && !mainVideo.paused) mainVideo.pause();
}

function updateProductPageFavoriteButton() {
  const favoriteButton = document.getElementById("productPageFavorite");
  if (!favoriteButton) return;

  const isFavorite =
    currentProductPageId && favorites.includes(currentProductPageId);
  favoriteButton.classList.toggle("is-active", Boolean(isFavorite));
  favoriteButton.textContent = isFavorite ? "\u2764\uFE0F" : "\uD83E\uDD0D";
}

function setProductPageQuantity(quantity) {
  productPageQuantity = Math.max(1, Number(quantity) || 1);
  const qtyEl = document.getElementById("productPageQty");
  if (qtyEl) qtyEl.textContent = productPageQuantity;
}

/*
   Update the visible price in the product page to match the
   currently selected variant (or the plain price if none).
*/
function updateProductPagePrice() {
  const product = getProductById(currentProductPageId);
  const priceEl = document.getElementById("productPagePrice");
  if (!product || !priceEl) return;

  priceEl.textContent = `${getProductPrice(product, productPageVariant)} EGP`;
}

/*
   Build the size/variant selector inside the product page.
   Expects a container with id="productPageVariants" in the HTML
   (hidden automatically for products without variants).
*/
function renderProductPageVariants() {
  const wrap = document.getElementById("productPageVariants");
  if (!wrap) return;

  const product = getProductById(currentProductPageId);

  if (!product || !productHasVariants(product)) {
    wrap.innerHTML = "";
    wrap.style.display = "none";
    return;
  }

  wrap.style.display = "flex";
  wrap.innerHTML = product.variants
    .map(
      (variant) => `
        <button
          class="variant-pill ${variant.name === productPageVariant ? "is-active" : ""}"
          type="button"
          data-variant="${variant.name}"
        >
          ${variant.name} — ${variant.price} EGP
        </button>
      `,
    )
    .join("");

  wrap.querySelectorAll(".variant-pill").forEach((pill) => {
    pill.addEventListener("click", () =>
      setProductPageVariant(pill.dataset.variant),
    );
  });
}

function setProductPageVariant(variantName) {
  const product = getProductById(currentProductPageId);
  if (!product || !productHasVariants(product)) return;

  const variant = getVariantByName(product, variantName);
  productPageVariant = variant.name;

  document
    .querySelectorAll("#productPageVariants .variant-pill")
    .forEach((pill) => {
      pill.classList.toggle(
        "is-active",
        pill.dataset.variant === productPageVariant,
      );
    });

  updateProductPagePrice();
}

function openProductPage(productId) {
  const product = getProductById(productId);
  if (!product) return;

  currentProductPageId = productId;
  productPageMedia = getProductMedia(product);
  productPageIndex = 0;
  productPageVariant = getDefaultVariantName(product);

  const nameEl = document.getElementById("productPageName");
  const idEl = document.getElementById("productPageId");
  const descEl = document.getElementById("productPageDesc");
  const mainImg = document.getElementById("productPageImg");
  const mainVideo = document.getElementById("productPageVideo");

  if (nameEl) nameEl.textContent = product.name;
  if (idEl) idEl.textContent = `كود المنتج: ${product.id}`;
  if (descEl) descEl.innerHTML = formatDescription(product.description);

  // Reset media display to the first item (always start on an image if one exists).
  if (mainVideo) {
    mainVideo.pause();
    mainVideo.removeAttribute("src");
    mainVideo.load();
    mainVideo.style.display = "none";
  }
  if (mainImg) {
    mainImg.style.display = "block";
    mainImg.alt = product.name;
  }

  renderProductPageThumbs();
  renderProductPageVariants();
  updateProductPagePrice();
  setProductPageQuantity(1);
  updateProductPageFavoriteButton();
  setProductPageMedia(0);

  const productPage = document.getElementById("productPage");
  const overlay = document.getElementById("productOverlay");

  if (productPage) {
    productPage.classList.add("is-open");
    productPage.scrollTop = 0;
  }
  if (overlay) overlay.classList.add("is-open");

  document.body.style.overflow = "hidden";
}

function closeProductPage() {
  const productPage = document.getElementById("productPage");
  const overlay = document.getElementById("productOverlay");

  stopProductPageVideo();

  if (productPage) productPage.classList.remove("is-open");
  if (overlay) overlay.classList.remove("is-open");

  document.body.style.overflow = "";
  currentProductPageId = null;
}

function setupProductPage() {
  const productPageClose = document.getElementById("productPageClose");
  const productOverlay = document.getElementById("productOverlay");
  const decreaseBtn = document.getElementById("productPageDecrease");
  const increaseBtn = document.getElementById("productPageIncrease");
  const addCartBtn = document.getElementById("productPageAddCart");
  const favoriteBtn = document.getElementById("productPageFavorite");
  const mainImageWrap = document.getElementById("productPageMainImage");

  if (productPageClose)
    productPageClose.addEventListener("click", closeProductPage);
  if (productOverlay)
    productOverlay.addEventListener("click", closeProductPage);

  if (decreaseBtn) {
    decreaseBtn.addEventListener("click", () =>
      setProductPageQuantity(productPageQuantity - 1),
    );
  }
  if (increaseBtn) {
    increaseBtn.addEventListener("click", () =>
      setProductPageQuantity(productPageQuantity + 1),
    );
  }

  if (addCartBtn) {
    addCartBtn.addEventListener("click", () => {
      if (!currentProductPageId) return;

      addToCart(currentProductPageId, productPageQuantity, productPageVariant);

      const originalText = addCartBtn.innerHTML;
      addCartBtn.innerHTML = "\u2713 تمت الإضافة";
      setTimeout(() => {
        addCartBtn.innerHTML = originalText;
      }, 900);
    });
  }

  if (favoriteBtn) {
    favoriteBtn.addEventListener("click", () => {
      if (!currentProductPageId) return;
      toggleFavorite(
        currentProductPageId,
        document.querySelector(
          `.favorite-btn[data-id="${currentProductPageId}"]`,
        ),
      );
      updateProductPageFavoriteButton();
    });
  }

  if (mainImageWrap) {
    // Only open the lightbox from a tap on the image itself, not from
    // interacting with the native video controls.
    mainImageWrap.addEventListener("click", (event) => {
      const currentItem = productPageMedia[productPageIndex];
      if (currentItem && currentItem.type === "video") return;
      openLightbox(productPageMedia, productPageIndex);
    });
    setupSwipe(
      mainImageWrap,
      () => setProductPageMedia(productPageIndex + 1),
      () => setProductPageMedia(productPageIndex - 1),
    );
  }

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && currentProductPageId) closeProductPage();
  });
}

/* --------------------------------------------------------------------------
   17C. FULLSCREEN MEDIA LIGHTBOX (images + videos)
   -------------------------------------------------------------------------- */

let lightboxMedia = [];
let lightboxIndex = 0;

function stopLightboxVideo() {
  const video = document.getElementById("lightboxVideo");
  if (video && !video.paused) video.pause();
}

function renderLightboxMedia() {
  const img = document.getElementById("lightboxImage");
  const video = document.getElementById("lightboxVideo");
  const counter = document.getElementById("lightboxCounter");
  const prevBtn = document.getElementById("lightboxPrev");
  const nextBtn = document.getElementById("lightboxNext");

  if (lightboxMedia.length === 0) return;

  const mediaItem = lightboxMedia[lightboxIndex];

  if (mediaItem.type === "video") {
    stopLightboxVideo();
    if (video) {
      if (video.getAttribute("src") !== mediaItem.src)
        video.src = mediaItem.src;
      video.style.display = "block";
    }
    if (img) img.style.display = "none";
  } else {
    if (video) {
      video.pause();
      video.removeAttribute("src");
      video.load();
      video.style.display = "none";
    }
    if (img) {
      img.src = mediaItem.src;
      img.style.display = "block";
    }
  }

  const hasMultiple = lightboxMedia.length > 1;

  if (counter) {
    counter.textContent = hasMultiple
      ? `${lightboxIndex + 1} / ${lightboxMedia.length}`
      : "";
    counter.style.display = hasMultiple ? "block" : "none";
  }
  if (prevBtn) prevBtn.classList.toggle("is-hidden", !hasMultiple);
  if (nextBtn) nextBtn.classList.toggle("is-hidden", !hasMultiple);
}

// Backwards-compatible alias.
function renderLightboxImage() {
  renderLightboxMedia();
}

function openLightbox(media, startIndex = 0) {
  if (!media || media.length === 0) return;

  lightboxMedia = media;
  lightboxIndex = ((startIndex % media.length) + media.length) % media.length;

  renderLightboxMedia();

  const lightbox = document.getElementById("lightbox");
  const overlay = document.getElementById("lightboxOverlay");

  if (lightbox) lightbox.classList.add("is-open");
  if (overlay) overlay.classList.add("is-open");

  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  const lightbox = document.getElementById("lightbox");
  const overlay = document.getElementById("lightboxOverlay");

  stopLightboxVideo();

  if (lightbox) lightbox.classList.remove("is-open");
  if (overlay) overlay.classList.remove("is-open");

  if (!currentProductPageId) {
    document.body.style.overflow = "";
  }
}

function lightboxNext() {
  if (lightboxMedia.length === 0) return;
  lightboxIndex = (lightboxIndex + 1) % lightboxMedia.length;
  renderLightboxMedia();
}

function lightboxPrev() {
  if (lightboxMedia.length === 0) return;
  lightboxIndex =
    (lightboxIndex - 1 + lightboxMedia.length) % lightboxMedia.length;
  renderLightboxMedia();
}

function setupSwipe(element, onSwipeLeft, onSwipeRight) {
  if (!element) return;

  let touchStartX = 0;
  let touchStartY = 0;
  let isTracking = false;

  element.addEventListener(
    "touchstart",
    (event) => {
      if (event.touches.length !== 1) return;
      touchStartX = event.touches[0].clientX;
      touchStartY = event.touches[0].clientY;
      isTracking = true;
    },
    { passive: true },
  );

  element.addEventListener(
    "touchend",
    (event) => {
      if (!isTracking) return;
      isTracking = false;

      const touch = event.changedTouches[0];
      if (!touch) return;

      const deltaX = touch.clientX - touchStartX;
      const deltaY = touch.clientY - touchStartY;

      if (Math.abs(deltaX) < 40 || Math.abs(deltaX) < Math.abs(deltaY)) return;

      if (deltaX < 0) {
        onSwipeLeft();
      } else {
        onSwipeRight();
      }
    },
    { passive: true },
  );
}

function setupLightbox() {
  const lightboxClose = document.getElementById("lightboxClose");
  const lightboxOverlay = document.getElementById("lightboxOverlay");
  const lightboxPrevBtn = document.getElementById("lightboxPrev");
  const lightboxNextBtn = document.getElementById("lightboxNext");
  const lightboxMediaWrap = document.getElementById("lightboxMediaWrap");

  if (lightboxClose) lightboxClose.addEventListener("click", closeLightbox);
  if (lightboxOverlay) lightboxOverlay.addEventListener("click", closeLightbox);
  if (lightboxPrevBtn) lightboxPrevBtn.addEventListener("click", lightboxPrev);
  if (lightboxNextBtn) lightboxNextBtn.addEventListener("click", lightboxNext);

  // Swipe on the wrapping container (covers both the image and the video),
  // a normal tap/drag on video controls stays under the 40px threshold
  // needed to trigger a swipe, so playback controls keep working.
  setupSwipe(lightboxMediaWrap, lightboxNext, lightboxPrev);

  document.addEventListener("keydown", (event) => {
    const lightbox = document.getElementById("lightbox");
    if (!lightbox || !lightbox.classList.contains("is-open")) return;

    if (event.key === "Escape") closeLightbox();
    if (event.key === "ArrowRight") lightboxPrev();
    if (event.key === "ArrowLeft") lightboxNext();
  });
}

/* --------------------------------------------------------------------------
   18. REMOVE PRODUCT FROM CART
   -------------------------------------------------------------------------- */

function removeFromCart(productId, variantName = null) {
  cart = cart.filter(
    (item) => !(item.id === productId && item.variantName === variantName),
  );
  renderCart();
  updateCartCount();
  saveCart();
}

/* --------------------------------------------------------------------------
   19. CHANGE PRODUCT QUANTITY
   -------------------------------------------------------------------------- */

function changeQuantity(productId, variantName, amount) {
  const item = cart.find(
    (i) => i.id === productId && i.variantName === variantName,
  );
  if (!item) return;

  item.quantity += amount;

  if (item.quantity <= 0) {
    removeFromCart(productId, variantName);
    return;
  }

  renderCart();
  updateCartCount();
  saveCart();
}

/* --------------------------------------------------------------------------
   20. UPDATE CART COUNT
   -------------------------------------------------------------------------- */

function updateCartCount() {
  const cartCount = document.getElementById("cartCount");
  const floatingCartCount = document.getElementById("floatingCartCount");
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  if (cartCount) cartCount.textContent = totalItems;
  if (floatingCartCount) floatingCartCount.textContent = totalItems;
}

/* --------------------------------------------------------------------------
   21. CALCULATE CART TOTAL
   -------------------------------------------------------------------------- */

function calculateCartTotal() {
  return cart.reduce((total, item) => {
    const product = getProductById(item.id);
    if (!product) return total;
    return total + getProductPrice(product, item.variantName) * item.quantity;
  }, 0);
}

/* --------------------------------------------------------------------------
   22. RENDER CART
   -------------------------------------------------------------------------- */

function renderCart() {
  const cartItems = document.getElementById("cartItems");
  const cartTotal = document.getElementById("cartTotal");
  if (!cartItems) return;

  cart = cart.filter((item) => getProductById(item.id));

  if (cart.length === 0) {
    cartItems.innerHTML = `
      <div class="cart__empty">
        <span>\uD83D\uDECD\uFE0F</span>
        <h3>السلة فارغة</h3>
        <p>أضف المنتجات التي تعجبك وسنجهز طلبك لك.</p>
      </div>
    `;
    if (cartTotal) cartTotal.textContent = "0 جنيه";
    return;
  }

  cartItems.innerHTML = cart
    .map((item) => {
      const product = getProductById(item.id);
      if (!product) return "";

      const productImages = getProductImages(product);
      const unitPrice = getProductPrice(product, item.variantName);
      const itemTotal = unitPrice * item.quantity;

      // data-variant بتخزن اسم المقاس (أو سلسلة فاضية لو المنتج مالوش مقاسات)
      const variantAttr = item.variantName || "";

      return `
        <div class="cart-item" data-id="${product.id}" data-variant="${variantAttr}">
          <div class="cart-item__image">
            <img src="${productImages[0]}" alt="${product.name}" />
          </div>

          <div class="cart-item__info">
            <div class="cart-item__name">${product.name}</div>
            ${item.variantName ? `<div class="cart-item__variant">المقاس: ${item.variantName}</div>` : ""}
            <div class="cart-item__id">كود المنتج: ${product.id}</div>
            <div class="cart-item__price">${itemTotal} EGP</div>

            <div class="cart-item__quantity">
              <button class="quantity-btn" type="button" data-action="decrease" data-id="${product.id}" data-variant="${variantAttr}" aria-label="تقليل الكمية">−</button>
              <span class="quantity-value">${item.quantity}</span>
              <button class="quantity-btn" type="button" data-action="increase" data-id="${product.id}" data-variant="${variantAttr}" aria-label="زيادة الكمية">+</button>
            </div>
          </div>

          <button class="cart-item__remove" type="button" data-action="remove" data-id="${product.id}" data-variant="${variantAttr}" aria-label="حذف المنتج">
            \uD83D\uDDD1\uFE0F
          </button>
        </div>
      `;
    })
    .join("");

  const total = calculateCartTotal();
  if (cartTotal) cartTotal.textContent = `${total} جنيه`;

  cartItems
    .querySelectorAll(".quantity-btn, .cart-item__remove")
    .forEach((button) => {
      button.addEventListener("click", () => {
        const productId = button.dataset.id;
        const variantName = button.dataset.variant || null;
        const action = button.dataset.action;

        if (action === "increase") changeQuantity(productId, variantName, 1);
        if (action === "decrease") changeQuantity(productId, variantName, -1);
        if (action === "remove") removeFromCart(productId, variantName);
      });
    });
}

/* --------------------------------------------------------------------------
   23. OPEN CART
   -------------------------------------------------------------------------- */

function openCart() {
  const cartElement = document.getElementById("cart");
  const overlay = document.getElementById("cartOverlay");
  const cartToggle = document.getElementById("cartToggle");
  if (!cartElement) return;

  cartElement.classList.add("is-open");
  if (overlay) overlay.classList.add("is-open");
  if (cartToggle) cartToggle.setAttribute("aria-expanded", "true");
}

/* --------------------------------------------------------------------------
   24. CLOSE CART
   -------------------------------------------------------------------------- */

function closeCart() {
  const cartElement = document.getElementById("cart");
  const overlay = document.getElementById("cartOverlay");
  const cartToggle = document.getElementById("cartToggle");
  if (!cartElement) return;

  cartElement.classList.remove("is-open");
  if (overlay) overlay.classList.remove("is-open");
  if (cartToggle) cartToggle.setAttribute("aria-expanded", "false");
}

/* --------------------------------------------------------------------------
   25. VALIDATE CHECKOUT FORM
   -------------------------------------------------------------------------- */

function validateCheckoutForm() {
  let isValid = true;

  const fields = [
    {
      inputId: "customerName",
      errorId: "errorName",
      message: "من فضلك اكتبي الاسم \u2764\uFE0F",
      validate: (value) => value.trim().length > 0,
    },
    {
      inputId: "customerPhone",
      errorId: "errorPhone",
      message: "من فضلك اكتبي رقم صحيح (11 رقم) \uD83D\uDCDE",
      validate: (value) => /^01[0125][0-9]{8}$/.test(value.trim()),
    },
    {
      inputId: "customerAddress",
      errorId: "errorAddress",
      message: "من فضلك اكتبي عنوان التوصيل \uD83D\uDCCD",
      validate: (value) => value.trim().length > 0,
    },
  ];

  fields.forEach(({ inputId, errorId, message, validate }) => {
    const input = document.getElementById(inputId);
    const errorEl = document.getElementById(errorId);
    if (!input || !errorEl) return;

    const field = input.closest(".form-field");

    if (!validate(input.value)) {
      field.classList.add("has-error");
      errorEl.textContent = message;
      isValid = false;
    } else {
      field.classList.remove("has-error");
      errorEl.textContent = "";
    }
  });

  return isValid;
}

/* --------------------------------------------------------------------------
   26. SEND CART TO WHATSAPP
   -------------------------------------------------------------------------- */

function sendCartToWhatsApp() {
  if (cart.length === 0) {
    alert("السلة فارغة. أضف منتجًا واحدًا على الأقل أولًا \uD83D\uDECD\uFE0F");
    return;
  }

  if (!validateCheckoutForm()) {
    document
      .getElementById("checkoutForm")
      ?.scrollIntoView({ behavior: "smooth", block: "center" });
    return;
  }

  const customerName = document.getElementById("customerName").value.trim();
  const customerPhone = document.getElementById("customerPhone").value.trim();
  const customerAddress = document
    .getElementById("customerAddress")
    .value.trim();

  const bow = "\uD83C\uDF80";
  const shoppingBag = "\uD83D\uDECD\uFE0F";
  const person = "\uD83D\uDC64";
  const phone = "\uD83D\uDCDE";
  const location = "\uD83D\uDCCD";
  const money = "\uD83D\uDCB0";
  const hearts = "\uD83D\uDC95";

  let message = `Hello Pink & Paper! ${bow}

${shoppingBag} طلب جديد

${person} الاسم: ${customerName}
${phone} رقم التواصل: ${customerPhone}
${location} العنوان: ${customerAddress}

المنتجات:

`;

  cart.forEach((item, index) => {
    const product = getProductById(item.id);
    if (!product) return;

    const unitPrice = getProductPrice(product, item.variantName);
    const itemTotal = unitPrice * item.quantity;

    message += `${index + 1}. ${product.name}${item.variantName ? ` (${item.variantName})` : ""}
كود المنتج: ${product.id}
الكمية: ${item.quantity}
السعر: ${itemTotal} EGP

`;
  });

  const total = calculateCartTotal();
  message += `${money} الإجمالي: ${total} EGP

Thank you! ${hearts}`;

  const whatsappLink = buildWhatsAppLink(message);
  window.open(whatsappLink, "_blank", "noopener");

  cart = [];
  renderCart();
  updateCartCount();
  saveCart();

  const checkoutForm = document.getElementById("checkoutForm");
  if (checkoutForm) {
    checkoutForm.querySelectorAll("input, textarea").forEach((field) => {
      field.value = "";
      const wrapper = field.closest(".form-field");
      if (wrapper) wrapper.classList.remove("has-error");
    });

    checkoutForm.querySelectorAll(".form-error").forEach((errorEl) => {
      errorEl.textContent = "";
    });
  }

  closeCart();
  openThankYou();
}

/* --------------------------------------------------------------------------
   27. SETUP SHOPPING CART
   -------------------------------------------------------------------------- */

function setupCart() {
  const cartToggle = document.getElementById("cartToggle");
  const floatingCartToggle = document.getElementById("floatingCartToggle");
  const cartClose = document.getElementById("cartClose");
  const cartOverlay = document.getElementById("cartOverlay");
  const cartWhatsapp = document.getElementById("cartWhatsapp");
  const cartClear = document.getElementById("cartClear");

  if (cartToggle) {
    cartToggle.addEventListener("click", () => {
      const cartElement = document.getElementById("cart");
      if (cartElement?.classList.contains("is-open")) {
        closeCart();
      } else {
        openCart();
      }
    });
  }

  if (floatingCartToggle) {
    floatingCartToggle.addEventListener("click", () => {
      const cartElement = document.getElementById("cart");
      if (cartElement?.classList.contains("is-open")) {
        closeCart();
      } else {
        openCart();
      }
    });
  }

  if (cartClose) cartClose.addEventListener("click", closeCart);
  if (cartOverlay) cartOverlay.addEventListener("click", closeCart);
  if (cartWhatsapp) cartWhatsapp.addEventListener("click", sendCartToWhatsApp);

  if (cartClear) {
    cartClear.addEventListener("click", () => {
      if (cart.length === 0) return;
      cart = [];
      renderCart();
      updateCartCount();
      saveCart();
    });
  }

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeCart();
  });

  renderCart();
  updateCartCount();
  saveCart();
}

/* --------------------------------------------------------------------------
   27B. OPEN / CLOSE THANK YOU MODAL
   -------------------------------------------------------------------------- */

function openThankYou() {
  const thankyouModal = document.getElementById("thankyouModal");
  const thankyouOverlay = document.getElementById("thankyouOverlay");
  if (!thankyouModal) return;

  thankyouModal.classList.add("is-open");
  if (thankyouOverlay) thankyouOverlay.classList.add("is-open");
}

function closeThankYou() {
  const thankyouModal = document.getElementById("thankyouModal");
  const thankyouOverlay = document.getElementById("thankyouOverlay");
  if (!thankyouModal) return;

  thankyouModal.classList.remove("is-open");
  if (thankyouOverlay) thankyouOverlay.classList.remove("is-open");
}

function setupThankYou() {
  const thankyouClose = document.getElementById("thankyouClose");
  const thankyouOverlay = document.getElementById("thankyouOverlay");

  if (thankyouClose) thankyouClose.addEventListener("click", closeThankYou);
  if (thankyouOverlay) thankyouOverlay.addEventListener("click", closeThankYou);

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeThankYou();
  });
}

/* --------------------------------------------------------------------------
   28. GENERAL WHATSAPP LINKS
   -------------------------------------------------------------------------- */

function wireGeneralWhatsAppLinks() {
  const bow = "\uD83C\uDF80";
  const generalMessage = `Hello Pink & Paper! ${bow}\nI'd like to know more about your products.`;
  const link = buildWhatsAppLink(generalMessage);

  ["heroWhatsapp", "contactWhatsapp", "footerWhatsapp"].forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.href = link;
  });
}

/* --------------------------------------------------------------------------
   29. MOBILE MENU TOGGLE
   -------------------------------------------------------------------------- */

function setupMobileMenu() {
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");
  if (!menuToggle || !navLinks) return;

  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open");
    menuToggle.classList.toggle("is-open", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("is-open");
      menuToggle.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

/* --------------------------------------------------------------------------
   30. SCROLL REVEAL
   -------------------------------------------------------------------------- */

let revealObserver;

function observeReveals() {
  if (!revealObserver) {
    revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 },
    );
  }

  document.querySelectorAll(".reveal:not(.is-visible)").forEach((el) => {
    revealObserver.observe(el);
  });
}

/* --------------------------------------------------------------------------
   31. SETUP SCROLL REVEAL
   -------------------------------------------------------------------------- */

function setupScrollReveal() {
  const selectors = [
    ".section__head",
    ".category-card",
    ".feature-card",
    ".contact-card",
    ".about__content",
    ".about__visual",
  ];

  document
    .querySelectorAll(selectors.join(","))
    .forEach((el) => el.classList.add("reveal"));
  observeReveals();
}

/* --------------------------------------------------------------------------
   32. BACK TO TOP BUTTON
   -------------------------------------------------------------------------- */

function setupBackToTop() {
  const btn = document.getElementById("backToTop");
  if (!btn) return;

  window.addEventListener("scroll", () => {
    btn.classList.toggle("is-visible", window.scrollY > 500);
  });

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

/* --------------------------------------------------------------------------
   33. NAVBAR SHADOW ON SCROLL
   -------------------------------------------------------------------------- */

function setupNavbarScrollState() {
  const navbar = document.getElementById("navbar");
  if (!navbar) return;

  window.addEventListener("scroll", () => {
    navbar.style.boxShadow =
      window.scrollY > 10 ? "0 8px 20px -14px rgba(91, 64, 56, 0.25)" : "none";
  });
}

/* --------------------------------------------------------------------------
   34. FOOTER YEAR
   -------------------------------------------------------------------------- */

function setupFooterYear() {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
}

/* --------------------------------------------------------------------------
   35. CATEGORY FILTER
   -------------------------------------------------------------------------- */

let currentCategory = "all";
let currentSearchTerm = "";

function getActiveCategories() {
  const categoriesWithProducts = new Set(
    PRODUCTS.map((product) => product.category),
  );
  return Object.keys(CATEGORY_LABELS).filter((key) =>
    categoriesWithProducts.has(key),
  );
}

function renderFilterBar() {
  const filterBar = document.getElementById("filterBar");
  if (!filterBar) return;

  const activeCategories = getActiveCategories();

  const chipsHTML = [
    `<button class="filter-chip is-active" type="button" data-filter="all">\u2728 الكل</button>`,
  ]
    .concat(
      activeCategories.map(
        (category) => `
            <button class="filter-chip" type="button" data-filter="${category}">
              ${CATEGORY_LABELS[category]}
            </button>
          `,
      ),
    )
    .join("");

  filterBar.innerHTML = chipsHTML;

  filterBar.querySelectorAll(".filter-chip").forEach((chip) => {
    chip.addEventListener("click", () => filterProducts(chip.dataset.filter));
  });
}

function markEmptyCategoryCards() {
  const activeCategories = getActiveCategories();

  document.querySelectorAll(".category-card").forEach((card) => {
    const isEmpty = !activeCategories.includes(card.dataset.filter);
    card.classList.toggle("category-card--soon", isEmpty);
  });
}

function filterProducts(category) {
  currentCategory = category;
  applyFilters();

  document.querySelectorAll(".filter-chip").forEach((chip) => {
    chip.classList.toggle("is-active", chip.dataset.filter === category);
  });

  document.querySelectorAll(".category-card").forEach((card) => {
    card.classList.toggle("is-active", card.dataset.filter === category);
  });
}

function applyFilters() {
  const productCards = document.querySelectorAll(".product-card");
  let visibleCount = 0;

  productCards.forEach((card) => {
    const matchesCategory =
      currentCategory === "all" || card.dataset.category === currentCategory;
    const matchesSearch =
      currentSearchTerm === "" ||
      card.dataset.search.includes(currentSearchTerm);
    const matches = matchesCategory && matchesSearch;

    if (matches) {
      visibleCount++;
      card.style.display = "flex";
      requestAnimationFrame(() => card.classList.remove("is-filtering-out"));
    } else {
      card.classList.add("is-filtering-out");
      window.setTimeout(() => {
        if (card.classList.contains("is-filtering-out")) {
          card.style.display = "none";
        }
      }, 220);
    }
  });

  const noResults = document.getElementById("noResults");
  if (noResults) noResults.classList.toggle("is-visible", visibleCount === 0);
}

function setupSearch() {
  const searchInput = document.getElementById("searchInput");
  if (!searchInput) return;

  let debounceTimer;

  searchInput.addEventListener("input", () => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      currentSearchTerm = searchInput.value.trim().toLowerCase();
      applyFilters();
    }, 150);
  });
}

function setupCategoryFilters() {
  renderFilterBar();
  markEmptyCategoryCards();

  document.querySelectorAll(".category-card").forEach((card) => {
    card.addEventListener("click", (event) => {
      event.preventDefault();
      if (card.classList.contains("category-card--soon")) return;

      filterProducts(card.dataset.filter);
      document
        .getElementById("products")
        ?.scrollIntoView({ behavior: "smooth" });
    });
  });
}

/* --------------------------------------------------------------------------
   36. INIT
   -------------------------------------------------------------------------- */

document.addEventListener("DOMContentLoaded", () => {
  renderProducts();
  renderFavorites();
  updateFavoritesCount();
  wireGeneralWhatsAppLinks();
  setupMobileMenu();
  setupCart();
  setupFavorites();
  setupThankYou();
  setupProductPage();
  setupLightbox();
  setupCategoryFilters();
  setupSearch();
  setupScrollReveal();
  setupBackToTop();
  setupNavbarScrollState();
  setupFooterYear();
});
