/* ==========================================================================
   PINK & PAPER — SCRIPT.JS
   ========================================================================== */

/* --------------------------------------------------------------------------
   1. STORE CONFIG
   -------------------------------------------------------------------------- */

const WHATSAPP_NUMBER = "201043063085";

/* --------------------------------------------------------------------------
   2. PRODUCT DATA

   IMPORTANT:
   Every product has a permanent unique ID.

   Example:
   PP001
   PP002
   PP003

   Never change a product's ID after publishing it.
   The ID is used by:
   - Shopping cart
   - Favorites
   - WhatsApp orders
   -------------------------------------------------------------------------- */

const PRODUCTS = [
  {
    id: "PP-001",
    name: "كريكتور",
    description: "شكل باندا 4 مللي",
    price: 10,
    images: [
      "images/pen/ChatGPT Image Aug 20, 2026, 01_29_42 AM.png",
      "images/pen/photo_2026-08-20_01-36-05-Picsart-AiImageEnhancer.jpg",
      "images/pen/ChatGPT Image Aug 20, 2026, 01_35_42 AM.png",
    ],

    category: "pens",
  },

  {
    id: "PP-002",
    name: "أستيكة Cake Roll ❤️",
    description: "يلا نحلي بالكيك 😍",
    price: 20,
    images: [
      "images/pen/photo_2026-08-20_02-11-27.jpg",
      "images/pen/photo_2026-08-20_02-11-14.jpg",
      "images/pen/photo_2026-08-20_02-11-26.jpg",

      "images/pen/photo_2026-08-20_02-11-28.jpg",
    ],
    category: "pens",
  },

  {
    id: "PP-003",
    name: "نوتة كرومي 4 فواصل 🎀",
    description: "مقاس 10*12 سم تقريباً",
    price: 30,
    images: [
      "images/stickey/fdnbfdb.png",
      "images/stickey/fsdfff.png",
      "images/stickey/fsdfjhf.png",
      "images/stickey/hhhhhdjdjskjkjs.png",
    ],
    category: "school",
  },

  {
    id: "PP-004",
    name: "أستيكة ايس كريم 😍",
    description: "",
    price: 15,
    images: [
      "images/NOTES/photo_2026-08-20_03-22-10.jpg",
      "images/NOTES/photo_2026-08-20_03-22-11.jpg",
      "images/NOTES/photo_2026-08-20_03-22-10 (2).jpg",
      "images/NOTES/photo_2026-08-20_03-22-13.jpg",
      "images/NOTES/photo_2026-08-20_03-22-14.jpg",
      "images/NOTES/photo_2026-08-20_03-22-15.jpg",
      "images/NOTES/photo_2026-08-20_03-22-16.jpg",
      "images/NOTES/photo_2026-08-20_03-22-17.jpg",
    ],
    category: "notebooks",
  },

  {
    id: "PP-005",
    name: "استكية قلم سوستة ♥️",
    description: "استيكة حجم كبير",
    price: 45,
    images: [
      "images/pen/photo_2026-08-15_23-21-08.jpg",
      "images/pen/hjhjkhjhj.jpg",
      "images/pen/jdsfja.jpg",
      "images/pen/photo_2026-08-17_22-56-18.jpg",
    ],
    category: "cute",
  },

  {
    id: "PP-006",
    name: "ستيكي نوتس دبدوب ❤️",
    description: "ورقها ناعم وكريمي جدا🥰 فيها 70 ورقة",
    price: 95,
    images: [
      "images/NOTES/photo_2026-08-15_23-31-33.jpg",
      "images/NOTES/photo_2026-08-15_23-31-35.jpg",
      "images/NOTES/photo_2026-08-15_23-31-37 (2).jpg",
      "images/NOTES/photo_2026-08-15_23-31-37.jpg",
    ],
    category: "cute",
  },

  {
    id: "PP-007",
    name: "ستيكي نوتس دبدوب ❤️",
    description: "ورقها ناعم وكريمي جدا🥰 فيها 70 ورقة",
    price: 95,
    images: [
      "images/NOTES/photo_2026-08-15_23-31-33.jpg",
      "images/NOTES/photo_2026-08-15_23-31-35.jpg",
      "images/NOTES/photo_2026-08-15_23-31-37 (2).jpg",
      "images/NOTES/photo_2026-08-15_23-31-37.jpg",
    ],
    category: "cute",
  },

  {
    id: "PP-008",
    name: "قلم سنون مجسم سليكون ♥️",
    description: "",
    price: 15,
    image: "images/pen/penssssss.jpg",
    category: "pens",
  },

  {
    id: "PP-009",
    name: "قلم جاف باستكية",
    description:
      "قلم جاف عملي بحبر قابل للمسح، مناسب للمدرسة والمذاكرة والكتابة اليومية. تقدر تمسح أخطاءك بسهولة وتكتب من جديد بدون فوضى أو شخبطة على الورق. 🖊️",
    price: 25,
    image: "images/pen/hgsdhdjhhfdsh.jpg",
    category: "pens",
  },

  {
    id: "PP-010",
    name: "",
    description: "",
    price: 6,
    image: "",
    category: "",
  },

  {
    id: "PP-011",
    name: "",
    description: "",
    price: 6,
    image: "",
    category: "",
  },

  {
    id: "PP-012",
    name: "",
    description: "",
    price: 6,
    image: "",
    category: "",
  },
  {
    id: "PP-012",
    name: "",
    description: "",
    price: 0,
    image: "",
    category: "",
  },

  {
    id: "PP-013",
    name: "",
    description: "",
    price: 0,
    image: "",
    category: "",
  },

  {
    id: "PP-014",
    name: "",
    description: "",
    price: 0,
    image: "",
    category: "",
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

/*
   Find a product by its permanent ID.
*/

function getProductById(productId) {
  return PRODUCTS.find((product) => product.id === productId);
}

/*
   Get product images.
*/

function getProductImages(product) {
  if (product.images && product.images.length > 0) {
    return product.images;
  }

  return [product.image];
}

/*
   Convert old index-based cart data to the new ID-based system.

   This protects existing customers who already have old cart data
   saved in localStorage.
*/

function normalizeCartData(savedCart) {
  if (!Array.isArray(savedCart)) {
    return [];
  }

  return savedCart
    .map((item) => {
      /*
         New format:
         {
           id: "PP001",
           quantity: 2
         }
      */

      if (item && typeof item.id === "string") {
        const product = getProductById(item.id);

        if (!product) return null;

        return {
          id: item.id,
          quantity: Math.max(1, Number(item.quantity) || 1),
        };
      }

      /*
         Old format:
         {
           index: 0,
           quantity: 2
         }

         Convert it automatically.
      */

      if (item && Number.isInteger(item.index) && PRODUCTS[item.index]) {
        return {
          id: PRODUCTS[item.index].id,
          quantity: Math.max(1, Number(item.quantity) || 1),
        };
      }

      return null;
    })
    .filter(Boolean);
}

/*
   Convert old index-based favorites to the new ID-based system.
*/

function normalizeFavoritesData(savedFavorites) {
  if (!Array.isArray(savedFavorites)) {
    return [];
  }

  return savedFavorites
    .map((item) => {
      /*
         New format:
         "PP001"
      */

      if (typeof item === "string") {
        return getProductById(item) ? item : null;
      }

      /*
         Old format:
         0
         1
         2
         etc.
      */

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
   8. GENERAL PRODUCT WHATSAPP MESSAGE
   -------------------------------------------------------------------------- */

function buildProductMessage(product) {
  const bow = "\uD83C\uDF80";

  return `Hello Pink & Paper! ${bow}
I'd like to order:
${product.name}
Product ID: ${product.id}
Price: ${product.price} EGP`;
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

  /*
     Remove IDs that no longer exist.
  */

  favorites = favorites.filter((id) => getProductById(id));

  if (favorites.length === 0) {
    favoritesItems.innerHTML = `
      <div class="favorites__empty">

        <span>\uD83E\uDD0D</span>

        <h3>لا توجد منتجات مفضلة</h3>

        <p>
          اضغط على \u2764\uFE0F بجانب أي منتج لإضافته إلى مفضلاتك.
        </p>

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

            <img
              src="${productImages[0]}"
              alt="${product.name}"
            />

          </div>

          <div class="favorite-item__info">

            <h3 class="favorite-item__name">
              ${product.name}
            </h3>

            <p class="favorite-item__price">
              ${product.price} جنيه
            </p>

            <p class="favorite-item__id">
              كود المنتج: ${product.id}
            </p>

            <div class="favorite-item__actions">

              <button
                class="favorite-item__add-cart"
                type="button"
                data-id="${product.id}"
              >
                \uD83D\uDED2 أضف إلى السلة
              </button>

              <button
                class="favorite-item__remove"
                type="button"
                data-id="${product.id}"
                title="إزالة من المفضلة"
              >
                إزالة من المفضلة \uD83D\uDDD1\uFE0F
              </button>

            </div>

          </div>

        </div>
      `;
    })
    .join("");

  /*
     Remove favorite buttons.
  */

  favoritesItems
    .querySelectorAll(".favorite-item__remove")
    .forEach((button) => {
      button.addEventListener("click", () => {
        const productId = button.dataset.id;

        removeFromFavorites(productId);
      });
    });

  /*
     Add favorite product to cart.
  */

  favoritesItems
    .querySelectorAll(".favorite-item__add-cart")
    .forEach((button) => {
      button.addEventListener("click", () => {
        const productId = button.dataset.id;

        addToCart(productId);

        button.textContent = "\u2713 تمت الإضافة";

        setTimeout(() => {
          button.textContent = "\uD83D\uDED2 أضف إلى السلة";
        }, 900);
      });
    });

  /*
     Open the product page from a favorite item's image.
  */

  favoritesItems
    .querySelectorAll(".favorite-item__image")
    .forEach((imageWrap, favIndex) => {
      imageWrap.style.cursor = "pointer";

      imageWrap.addEventListener("click", () => {
        openProductPage(favorites[favIndex]);
      });
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

  /*
     Keep the product page's favorite button in sync
     if it's currently showing this product.
  */

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

  if (overlay) {
    overlay.classList.add("is-open");
  }

  if (favoritesToggle) {
    favoritesToggle.setAttribute("aria-expanded", "true");
  }
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

  if (overlay) {
    overlay.classList.remove("is-open");
  }

  if (favoritesToggle) {
    favoritesToggle.setAttribute("aria-expanded", "false");
  }
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

  if (favoritesClose) {
    favoritesClose.addEventListener("click", closeFavorites);
  }

  if (favoritesOverlay) {
    favoritesOverlay.addEventListener("click", closeFavorites);
  }

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeFavorites();
    }
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

    const searchText = `${product.name} ${product.description}`
      .toLowerCase()
      .replace(/\s+/g, " ")
      .replace(/"/g, "&quot;");

    return `
          <article
            class="product-card reveal"
            data-id="${product.id}"
            data-category="${product.category}"
            data-search="${searchText}"
          >

            <div class="product-card__image-wrap">

              <img
                class="product-main-image"
                src="${mainImage}"
                alt="${product.name}"
                loading="lazy"
              />

              <button
                class="favorite-btn ${isFavorite ? "is-active" : ""}"
                data-id="${product.id}"
                aria-label="${
                  isFavorite ? "Remove from favorites" : "Add to favorites"
                }"
                type="button"
              >
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
                        <button
                          class="product-thumbnail ${
                            imageIndex === 0 ? "is-active" : ""
                          }"
                          type="button"
                          data-image="${image}"
                        >

                          <img
                            src="${image}"
                            alt="${product.name}"
                          />

                        </button>
                      `,
                      )
                      .join("")}

                  </div>
                `
                : ""
            }


            <div class="product-card__body">

              <h3 class="product-card__name">
                ${product.name}
              </h3>

              <p class="product-card__desc">
                ${product.description}
              </p>

              <p class="product-card__id">
                كود المنتج: ${product.id}
              </p>


              <div class="product-card__footer">

                <span class="product-card__price">
                  ${product.price} EGP
                </span>


                <button
                  class="product-card__order add-to-cart"
                  data-id="${product.id}"
                  type="button"
                >
                  \uD83D\uDED2 Add to cart
                </button>

              </div>

            </div>

          </article>
        `;
  }).join("");

  /*
     Product thumbnails (swap main image, don't open the product page).
  */

  grid.querySelectorAll(".product-thumbnail").forEach((thumbnail) => {
    thumbnail.addEventListener("click", (event) => {
      event.stopPropagation();

      const image = thumbnail.dataset.image;

      const card = thumbnail.closest(".product-card");

      const mainImage = card.querySelector(".product-main-image");

      if (mainImage) {
        mainImage.src = image;
      }

      card.querySelectorAll(".product-thumbnail").forEach((item) => {
        item.classList.remove("is-active");
      });

      thumbnail.classList.add("is-active");
    });
  });

  /*
     Favorite buttons (don't open the product page).
  */

  grid.querySelectorAll(".favorite-btn").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();

      const productId = button.dataset.id;

      toggleFavorite(productId, button);
    });
  });

  /*
     Add to cart buttons (don't open the product page).
  */

  grid.querySelectorAll(".add-to-cart").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();

      const productId = button.dataset.id;

      addToCart(productId);
    });
  });

  /*
     Clicking anywhere else on the card opens its product page.
  */

  grid.querySelectorAll(".product-card").forEach((card) => {
    card.addEventListener("click", () => {
      openProductPage(card.dataset.id);
    });
  });

  observeReveals();
}

/* --------------------------------------------------------------------------
   17. ADD PRODUCT TO CART
   -------------------------------------------------------------------------- */

function addToCart(productId, quantity = 1) {
  const product = getProductById(productId);

  if (!product) return;

  const safeQuantity = Math.max(1, Number(quantity) || 1);

  const existingItem = cart.find((item) => item.id === productId);

  if (existingItem) {
    existingItem.quantity += safeQuantity;
  } else {
    cart.push({
      id: productId,
      quantity: safeQuantity,
    });
  }

  renderCart();

  updateCartCount();

  saveCart();

  const addButton = document.querySelector(
    `.add-to-cart[data-id="${productId}"]`,
  );

  if (addButton) {
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
let productPageImages = [];
let productPageIndex = 0;
let productPageQuantity = 1;

/*
   Render the thumbnail row inside the product page.
*/

function renderProductPageThumbs() {
  const thumbsWrap = document.getElementById("productPageThumbs");

  if (!thumbsWrap) return;

  if (productPageImages.length <= 1) {
    thumbsWrap.innerHTML = "";

    return;
  }

  thumbsWrap.innerHTML = productPageImages
    .map(
      (image, index) => `
        <button
          class="product-thumbnail ${
            index === productPageIndex ? "is-active" : ""
          }"
          type="button"
          data-index="${index}"
        >
          <img src="${image}" alt="" />
        </button>
      `,
    )
    .join("");

  thumbsWrap.querySelectorAll(".product-thumbnail").forEach((thumbnail) => {
    thumbnail.addEventListener("click", () => {
      setProductPageImage(Number(thumbnail.dataset.index));
    });
  });
}

/*
   Switch the main image shown in the product page.
*/

function setProductPageImage(index) {
  if (productPageImages.length === 0) return;

  productPageIndex =
    ((index % productPageImages.length) + productPageImages.length) %
    productPageImages.length;

  const mainImg = document.getElementById("productPageImg");

  if (mainImg) {
    mainImg.src = productPageImages[productPageIndex];
  }

  document
    .querySelectorAll("#productPageThumbs .product-thumbnail")
    .forEach((thumbnail, i) => {
      thumbnail.classList.toggle("is-active", i === productPageIndex);
    });
}

/*
   Sync the heart button on the product page with favorites state.
*/

function updateProductPageFavoriteButton() {
  const favoriteButton = document.getElementById("productPageFavorite");

  if (!favoriteButton) return;

  const isFavorite =
    currentProductPageId && favorites.includes(currentProductPageId);

  favoriteButton.classList.toggle("is-active", Boolean(isFavorite));

  favoriteButton.textContent = isFavorite ? "\u2764\uFE0F" : "\uD83E\uDD0D";
}

/*
   Update the quantity shown/used in the product page.
*/

function setProductPageQuantity(quantity) {
  productPageQuantity = Math.max(1, Number(quantity) || 1);

  const qtyEl = document.getElementById("productPageQty");

  if (qtyEl) {
    qtyEl.textContent = productPageQuantity;
  }
}

/*
   Open the product details page for a given product ID.
*/

function openProductPage(productId) {
  const product = getProductById(productId);

  if (!product) return;

  currentProductPageId = productId;

  productPageImages = getProductImages(product);

  productPageIndex = 0;

  const nameEl = document.getElementById("productPageName");

  const idEl = document.getElementById("productPageId");

  const priceEl = document.getElementById("productPagePrice");

  const descEl = document.getElementById("productPageDesc");

  const mainImg = document.getElementById("productPageImg");

  if (nameEl) nameEl.textContent = product.name;

  if (idEl) idEl.textContent = `كود المنتج: ${product.id}`;

  if (priceEl) priceEl.textContent = `${product.price} EGP`;

  if (descEl) descEl.textContent = product.description;

  if (mainImg) {
    mainImg.src = productPageImages[0];

    mainImg.alt = product.name;
  }

  renderProductPageThumbs();

  setProductPageQuantity(1);

  updateProductPageFavoriteButton();

  const productPage = document.getElementById("productPage");

  const overlay = document.getElementById("productOverlay");

  if (productPage) {
    productPage.classList.add("is-open");

    productPage.scrollTop = 0;
  }

  if (overlay) {
    overlay.classList.add("is-open");
  }

  document.body.style.overflow = "hidden";
}

/*
   Close the product details page.
*/

function closeProductPage() {
  const productPage = document.getElementById("productPage");

  const overlay = document.getElementById("productOverlay");

  if (productPage) {
    productPage.classList.remove("is-open");
  }

  if (overlay) {
    overlay.classList.remove("is-open");
  }

  document.body.style.overflow = "";

  currentProductPageId = null;
}

/*
   Wire up all product-page interactions.
*/

function setupProductPage() {
  const productPageClose = document.getElementById("productPageClose");

  const productOverlay = document.getElementById("productOverlay");

  const decreaseBtn = document.getElementById("productPageDecrease");

  const increaseBtn = document.getElementById("productPageIncrease");

  const addCartBtn = document.getElementById("productPageAddCart");

  const favoriteBtn = document.getElementById("productPageFavorite");

  const mainImageWrap = document.getElementById("productPageMainImage");

  if (productPageClose) {
    productPageClose.addEventListener("click", closeProductPage);
  }

  if (productOverlay) {
    productOverlay.addEventListener("click", closeProductPage);
  }

  if (decreaseBtn) {
    decreaseBtn.addEventListener("click", () => {
      setProductPageQuantity(productPageQuantity - 1);
    });
  }

  if (increaseBtn) {
    increaseBtn.addEventListener("click", () => {
      setProductPageQuantity(productPageQuantity + 1);
    });
  }

  if (addCartBtn) {
    addCartBtn.addEventListener("click", () => {
      if (!currentProductPageId) return;

      addToCart(currentProductPageId, productPageQuantity);

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

  /*
     Clicking the main image opens the fullscreen lightbox.
  */

  if (mainImageWrap) {
    mainImageWrap.addEventListener("click", () => {
      openLightbox(productPageImages, productPageIndex);
    });

    /*
       Swipe left/right on the main image to flip between photos.
    */

    setupSwipe(
      mainImageWrap,
      () => setProductPageImage(productPageIndex + 1),
      () => setProductPageImage(productPageIndex - 1),
    );
  }

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && currentProductPageId) {
      closeProductPage();
    }
  });
}

/* --------------------------------------------------------------------------
   17C. FULLSCREEN IMAGE LIGHTBOX
   -------------------------------------------------------------------------- */

let lightboxImages = [];
let lightboxIndex = 0;

/*
   Show whichever image lightboxIndex currently points to.
*/

function renderLightboxImage() {
  const img = document.getElementById("lightboxImage");

  const counter = document.getElementById("lightboxCounter");

  const prevBtn = document.getElementById("lightboxPrev");

  const nextBtn = document.getElementById("lightboxNext");

  if (!img || lightboxImages.length === 0) return;

  img.src = lightboxImages[lightboxIndex];

  const hasMultiple = lightboxImages.length > 1;

  if (counter) {
    counter.textContent = hasMultiple
      ? `${lightboxIndex + 1} / ${lightboxImages.length}`
      : "";

    counter.style.display = hasMultiple ? "block" : "none";
  }

  if (prevBtn) {
    prevBtn.classList.toggle("is-hidden", !hasMultiple);
  }

  if (nextBtn) {
    nextBtn.classList.toggle("is-hidden", !hasMultiple);
  }
}

/*
   Open the fullscreen viewer for a set of images.
*/

function openLightbox(images, startIndex = 0) {
  if (!images || images.length === 0) return;

  lightboxImages = images;

  lightboxIndex =
    ((startIndex % images.length) + images.length) % images.length;

  renderLightboxImage();

  const lightbox = document.getElementById("lightbox");

  const overlay = document.getElementById("lightboxOverlay");

  if (lightbox) {
    lightbox.classList.add("is-open");
  }

  if (overlay) {
    overlay.classList.add("is-open");
  }

  document.body.style.overflow = "hidden";
}

/*
   Close the fullscreen viewer.
*/

function closeLightbox() {
  const lightbox = document.getElementById("lightbox");

  const overlay = document.getElementById("lightboxOverlay");

  if (lightbox) {
    lightbox.classList.remove("is-open");
  }

  if (overlay) {
    overlay.classList.remove("is-open");
  }

  /*
     Only unlock scrolling if the product page isn't
     also open behind the lightbox.
  */

  if (!currentProductPageId) {
    document.body.style.overflow = "";
  }
}

/*
   Move to the next/previous image in the lightbox.
*/

function lightboxNext() {
  if (lightboxImages.length === 0) return;

  lightboxIndex = (lightboxIndex + 1) % lightboxImages.length;

  renderLightboxImage();
}

function lightboxPrev() {
  if (lightboxImages.length === 0) return;

  lightboxIndex =
    (lightboxIndex - 1 + lightboxImages.length) % lightboxImages.length;

  renderLightboxImage();
}

/*
   Generic swipe-detection helper. Calls onSwipeLeft / onSwipeRight
   when a horizontal drag/swipe crosses a small threshold. Used for
   both the lightbox and the product page's main image.
*/

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

      /*
         Ignore mostly-vertical drags (the user is scrolling).
      */

      if (Math.abs(deltaX) < 40 || Math.abs(deltaX) < Math.abs(deltaY)) return;

      /*
         Note: in RTL image galleries a "left" swipe visually
         still means "next image" in this implementation.
      */

      if (deltaX < 0) {
        onSwipeLeft();
      } else {
        onSwipeRight();
      }
    },
    { passive: true },
  );
}

/*
   Wire up the lightbox's own controls.
*/

function setupLightbox() {
  const lightboxClose = document.getElementById("lightboxClose");

  const lightboxOverlay = document.getElementById("lightboxOverlay");

  const lightboxPrevBtn = document.getElementById("lightboxPrev");

  const lightboxNextBtn = document.getElementById("lightboxNext");

  const lightboxImageEl = document.getElementById("lightboxImage");

  if (lightboxClose) {
    lightboxClose.addEventListener("click", closeLightbox);
  }

  if (lightboxOverlay) {
    lightboxOverlay.addEventListener("click", closeLightbox);
  }

  if (lightboxPrevBtn) {
    lightboxPrevBtn.addEventListener("click", lightboxPrev);
  }

  if (lightboxNextBtn) {
    lightboxNextBtn.addEventListener("click", lightboxNext);
  }

  setupSwipe(lightboxImageEl, lightboxNext, lightboxPrev);

  document.addEventListener("keydown", (event) => {
    const lightbox = document.getElementById("lightbox");

    if (!lightbox || !lightbox.classList.contains("is-open")) return;

    if (event.key === "Escape") {
      closeLightbox();
    }

    if (event.key === "ArrowRight") {
      lightboxPrev();
    }

    if (event.key === "ArrowLeft") {
      lightboxNext();
    }
  });
}

/* --------------------------------------------------------------------------
   18. REMOVE PRODUCT FROM CART
   -------------------------------------------------------------------------- */

function removeFromCart(productId) {
  cart = cart.filter((item) => item.id !== productId);

  renderCart();

  updateCartCount();

  saveCart();
}

/* --------------------------------------------------------------------------
   19. CHANGE PRODUCT QUANTITY
   -------------------------------------------------------------------------- */

function changeQuantity(productId, amount) {
  const item = cart.find((item) => item.id === productId);

  if (!item) return;

  item.quantity += amount;

  if (item.quantity <= 0) {
    removeFromCart(productId);

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

  if (cartCount) {
    cartCount.textContent = totalItems;
  }

  if (floatingCartCount) {
    floatingCartCount.textContent = totalItems;
  }
}

/* --------------------------------------------------------------------------
   21. CALCULATE CART TOTAL
   -------------------------------------------------------------------------- */

function calculateCartTotal() {
  return cart.reduce((total, item) => {
    const product = getProductById(item.id);

    if (!product) return total;

    return total + product.price * item.quantity;
  }, 0);
}

/* --------------------------------------------------------------------------
   22. RENDER CART
   -------------------------------------------------------------------------- */

function renderCart() {
  const cartItems = document.getElementById("cartItems");

  const cartTotal = document.getElementById("cartTotal");

  if (!cartItems) return;

  /*
     Remove cart items whose products no longer exist.
  */

  cart = cart.filter((item) => getProductById(item.id));

  if (cart.length === 0) {
    cartItems.innerHTML = `
      <div class="cart__empty">

        <span>\uD83D\uDECD\uFE0F</span>

        <h3>السلة فارغة</h3>

        <p>
          أضف المنتجات التي تعجبك وسنجهز طلبك لك.
        </p>

      </div>
    `;

    if (cartTotal) {
      cartTotal.textContent = "0 جنيه";
    }

    return;
  }

  cartItems.innerHTML = cart
    .map((item) => {
      const product = getProductById(item.id);

      if (!product) return "";

      const productImages = getProductImages(product);

      const itemTotal = product.price * item.quantity;

      return `
        <div
          class="cart-item"
          data-id="${product.id}"
        >

          <div class="cart-item__image">

            <img
              src="${productImages[0]}"
              alt="${product.name}"
            />

          </div>


          <div class="cart-item__info">

            <div class="cart-item__name">
              ${product.name}
            </div>

            <div class="cart-item__id">
              كود المنتج: ${product.id}
            </div>

            <div class="cart-item__price">
              ${itemTotal} EGP
            </div>


            <div class="cart-item__quantity">

              <button
                class="quantity-btn"
                type="button"
                data-action="decrease"
                data-id="${product.id}"
                aria-label="تقليل الكمية"
              >
                −
              </button>


              <span class="quantity-value">
                ${item.quantity}
              </span>


              <button
                class="quantity-btn"
                type="button"
                data-action="increase"
                data-id="${product.id}"
                aria-label="زيادة الكمية"
              >
                +
              </button>

            </div>

          </div>


          <button
            class="cart-item__remove"
            type="button"
            data-action="remove"
            data-id="${product.id}"
            aria-label="حذف المنتج"
          >
            \uD83D\uDDD1\uFE0F
          </button>

        </div>
      `;
    })
    .join("");

  const total = calculateCartTotal();

  if (cartTotal) {
    cartTotal.textContent = `${total} جنيه`;
  }

  /*
     Cart quantity/remove buttons.
  */

  cartItems
    .querySelectorAll(".quantity-btn, .cart-item__remove")
    .forEach((button) => {
      button.addEventListener("click", () => {
        const productId = button.dataset.id;

        const action = button.dataset.action;

        if (action === "increase") {
          changeQuantity(productId, 1);
        }

        if (action === "decrease") {
          changeQuantity(productId, -1);
        }

        if (action === "remove") {
          removeFromCart(productId);
        }
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

  if (overlay) {
    overlay.classList.add("is-open");
  }

  if (cartToggle) {
    cartToggle.setAttribute("aria-expanded", "true");
  }
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

  if (overlay) {
    overlay.classList.remove("is-open");
  }

  if (cartToggle) {
    cartToggle.setAttribute("aria-expanded", "false");
  }
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
    document.getElementById("checkoutForm")?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });

    return;
  }

  const customerName = document.getElementById("customerName").value.trim();

  const customerPhone = document.getElementById("customerPhone").value.trim();

  const customerAddress = document
    .getElementById("customerAddress")
    .value.trim();

  /*
     Unicode emojis
  */

  const bow = "\uD83C\uDF80";

  const shoppingBag = "\uD83D\uDECD\uFE0F";

  const person = "\uD83D\uDC64";

  const phone = "\uD83D\uDCDE";

  const location = "\uD83D\uDCCD";

  const money = "\uD83D\uDCB0";

  const hearts = "\uD83D\uDC95";

  /*
     Order Message
  */

  let message = `Hello Pink & Paper! ${bow}

${shoppingBag} طلب جديد

${person} الاسم: ${customerName}
${phone} رقم التواصل: ${customerPhone}
${location} العنوان: ${customerAddress}

المنتجات:

`;

  /*
     Add every cart item to the message.
  */

  cart.forEach((item, index) => {
    const product = getProductById(item.id);

    if (!product) return;

    const itemTotal = product.price * item.quantity;

    message += `${index + 1}. ${product.name}
كود المنتج: ${product.id}
الكمية: ${item.quantity}
السعر: ${itemTotal} EGP

`;
  });

  const total = calculateCartTotal();

  message += `${money} الإجمالي: ${total} EGP

Thank you! ${hearts}`;

  /*
     Open WhatsApp in a new tab.
  */

  const whatsappLink = buildWhatsAppLink(message);

  window.open(whatsappLink, "_blank", "noopener");

  /*
     Reset cart + form.
  */

  cart = [];

  renderCart();

  updateCartCount();

  saveCart();

  const checkoutForm = document.getElementById("checkoutForm");

  if (checkoutForm) {
    checkoutForm.querySelectorAll("input, textarea").forEach((field) => {
      field.value = "";

      const wrapper = field.closest(".form-field");

      if (wrapper) {
        wrapper.classList.remove("has-error");
      }
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

  /*
     Floating Cart Button
  */

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

  if (cartClose) {
    cartClose.addEventListener("click", closeCart);
  }

  if (cartOverlay) {
    cartOverlay.addEventListener("click", closeCart);
  }

  if (cartWhatsapp) {
    cartWhatsapp.addEventListener("click", sendCartToWhatsApp);
  }

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
    if (event.key === "Escape") {
      closeCart();
    }
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

  if (thankyouOverlay) {
    thankyouOverlay.classList.add("is-open");
  }
}

function closeThankYou() {
  const thankyouModal = document.getElementById("thankyouModal");

  const thankyouOverlay = document.getElementById("thankyouOverlay");

  if (!thankyouModal) return;

  thankyouModal.classList.remove("is-open");

  if (thankyouOverlay) {
    thankyouOverlay.classList.remove("is-open");
  }
}

/* --------------------------------------------------------------------------
   27C. SETUP THANK YOU MODAL
   -------------------------------------------------------------------------- */

function setupThankYou() {
  const thankyouClose = document.getElementById("thankyouClose");

  const thankyouOverlay = document.getElementById("thankyouOverlay");

  if (thankyouClose) {
    thankyouClose.addEventListener("click", closeThankYou);
  }

  if (thankyouOverlay) {
    thankyouOverlay.addEventListener("click", closeThankYou);
  }

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeThankYou();
    }
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

    if (el) {
      el.href = link;
    }
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

      {
        threshold: 0.15,
      },
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

  document.querySelectorAll(selectors.join(",")).forEach((el) => {
    el.classList.add("reveal");
  });

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
    window.scrollTo({
      top: 0,

      behavior: "smooth",
    });
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

  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

/* --------------------------------------------------------------------------
   35. CATEGORY FILTER
   -------------------------------------------------------------------------- */

let currentCategory = "all";

let currentSearchTerm = "";

/*
   Get categories that currently have products.
*/

function getActiveCategories() {
  const categoriesWithProducts = new Set(
    PRODUCTS.map((product) => product.category),
  );

  return Object.keys(CATEGORY_LABELS).filter((key) =>
    categoriesWithProducts.has(key),
  );
}

/*
   Build filter bar.
*/

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
            <button
              class="filter-chip"
              type="button"
              data-filter="${category}"
            >
              ${CATEGORY_LABELS[category]}
            </button>
          `,
      ),
    )
    .join("");

  filterBar.innerHTML = chipsHTML;

  filterBar.querySelectorAll(".filter-chip").forEach((chip) => {
    chip.addEventListener("click", () => {
      filterProducts(chip.dataset.filter);
    });
  });
}

/*
   Mark empty categories.
*/

function markEmptyCategoryCards() {
  const activeCategories = getActiveCategories();

  document.querySelectorAll(".category-card").forEach((card) => {
    const isEmpty = !activeCategories.includes(card.dataset.filter);

    card.classList.toggle("category-card--soon", isEmpty);
  });
}

/*
   Filter products.
*/

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

/*
   Apply category + search filters.
*/

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

      requestAnimationFrame(() => {
        card.classList.remove("is-filtering-out");
      });
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

  if (noResults) {
    noResults.classList.toggle("is-visible", visibleCount === 0);
  }
}

/*
   Search.
*/

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

/*
   Category filters.
*/

function setupCategoryFilters() {
  renderFilterBar();

  markEmptyCategoryCards();

  document.querySelectorAll(".category-card").forEach((card) => {
    card.addEventListener("click", (event) => {
      event.preventDefault();

      if (card.classList.contains("category-card--soon")) {
        return;
      }

      filterProducts(card.dataset.filter);

      document.getElementById("products")?.scrollIntoView({
        behavior: "smooth",
      });
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
