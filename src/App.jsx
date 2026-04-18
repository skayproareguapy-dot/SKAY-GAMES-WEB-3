import { useEffect, useMemo, useState } from "react";

export default function SkayGamesWeb() {
  const whatsappNumber = "595991224388";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  const heroSlides = [
    {
      title: "🔥 YA DISPONIBLE",
      subtitle: "Nuevos lanzamientos y novedades en juegos. Consultá lo último en SKAY GAMES.",
      image:
        "https://images.unsplash.com/photo-1605901309584-818e25960a8f?auto=format&fit=crop&w=1600&q=80",
      buttonText: "Consultar lanzamiento",
      message: "Hola! Quiero consultar por los juegos nuevos disponibles 🔥",
    },
    {
      title: "Juegos PS4 y PS5",
      subtitle: "Encontrá títulos físicos y digitales para seguir jugando sin parar.",
      image:
        "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1600&q=80",
      buttonText: "Consultar juegos",
      message: "Hola! Quiero consultar por juegos disponibles para PS4 y PS5.",
    },
    {
      title: "Consolas nuevas y usadas",
      subtitle: "PS3, PS4, PS5 y más opciones para todos los presupuestos.",
      image:
        "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?auto=format&fit=crop&w=1600&q=80",
      buttonText: "Consultar consolas",
      message: "Hola! Quiero consultar por consolas disponibles.",
    },
    {
      title: "Promociones en recargas",
      subtitle: "Consultá por recargas, saldo y servicios para tus juegos favoritos.",
      image:
        "https://images.unsplash.com/photo-1605901309584-818e25960a8f?auto=format&fit=crop&w=1600&q=80",
      buttonText: "Consultar recargas",
      message: "Hola! Quiero consultar por promociones de recargas.",
    },
  ];

  const categories = [
    {
      id: "consolas",
      title: "Consolas",
      description: "PlayStation, Xbox, consolas nuevas y usadas, listas para jugar.",
      image:
        "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "juegos",
      title: "Juegos",
      description: "Juegos físicos y digitales para PS3, PS4, PS5 y otras plataformas.",
      image:
        "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "accesorios",
      title: "Accesorios",
      description: "Mandos, auriculares, cables, bases, soportes y mucho más.",
      image:
        "https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "recargas-servicios",
      title: "Recargas y servicios",
      description: "Recargas para juegos y servicios digitales.",
      image:
        "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  const gamePlatforms = [
    {
      id: "ps4",
      title: "Juegos PS4",
      description: "Catálogo de juegos para PlayStation 4 con títulos físicos y digitales.",
      image:
        "https://images.unsplash.com/photo-1486572788966-cfd3df1f5b42?auto=format&fit=crop&w=1200&q=80",
      message: "Hola! Quiero consultar por juegos disponibles para PS4.",
    },
    {
      id: "ps5",
      title: "Juegos PS5",
      description: "Explorá juegos para PlayStation 5 y consultá por stock y precios.",
      image:
        "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=1200&q=80",
      message: "Hola! Quiero consultar por juegos disponibles para PS5.",
    },
  ];

  const accessoryPlatforms = [
    { id: "ps2", title: "Accesorios PS2" },
    { id: "ps3", title: "Accesorios PS3" },
    { id: "ps4", title: "Accesorios PS4" },
    { id: "ps5", title: "Accesorios PS5" },
    { id: "gamer", title: "Accesorios Gamer" },
  ];

  const comboSlides = [
    {
      id: 1,
      title: "Combo Accesorios PS2",
      subtitle: "Armá tu combo ideal con mandos, cables y accesorios esenciales.",
      image:
        "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?auto=format&fit=crop&w=1600&q=80",
      message: "Hola! Quiero consultar por el combo de accesorios para PS2.",
    },
    {
      id: 2,
      title: "Combo Mesa + Silla Gamer",
      subtitle: "Mejorá tu espacio con un combo gamer completo para jugar cómodo.",
      image:
        "https://images.unsplash.com/photo-1616588589676-62b3bd0d0b2f?auto=format&fit=crop&w=1600&q=80",
      message: "Hola! Quiero consultar por el combo de mesa gamer + silla gamer.",
    },
    {
      id: 3,
      title: "Combo PS4 + Juego + Control",
      subtitle: "Llevate un combo listo para jugar desde el primer día.",
      image:
        "https://images.unsplash.com/photo-1486572788966-cfd3df1f5b42?auto=format&fit=crop&w=1600&q=80",
      message: "Hola! Quiero consultar por el combo PS4 + juego + control.",
    },
  ];

  const initialProducts = [
    {
      id: 1,
      name: "Joystick PS4",
      price: "Consultar precio",
      category: "accesorios",
      platform: "ps4",
      image:
        "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?auto=format&fit=crop&w=1200&q=80",
      message: "Hola! Quiero consultar por un Joystick PS4.",
      isFeatured: true,
      createdAt: "2026-04-15",
    },
    {
      id: 2,
      name: "Auricular Gamer",
      price: "Consultar precio",
      category: "accesorios",
      platform: "ps4",
      image:
        "https://images.unsplash.com/photo-1585298723682-7115561c51b7?auto=format&fit=crop&w=1200&q=80",
      message: "Hola! Quiero consultar por un Auricular Gamer.",
      isFeatured: false,
      createdAt: "2026-04-16",
    },
    {
      id: 3,
      name: "God of War Ragnarok",
      price: "Consultar precio",
      category: "juegos",
      platform: "ps5",
      image:
        "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80",
      message: "Hola! Quiero consultar por God of War Ragnarok para PS5.",
      isFeatured: true,
      createdAt: "2026-04-12",
    },
    {
      id: 4,
      name: "Consolas",
      price: "Nuevas y usadas",
      category: "consolas",
      image:
        "https://images.unsplash.com/photo-1621259182978-fbf93132d53d?auto=format&fit=crop&w=1200&q=80",
      message: "Hola! Quiero consultar por consolas disponibles.",
      isFeatured: true,
      createdAt: "2026-04-10",
    },
    {
      id: 5,
      name: "Recargas para juegos",
      price: "Promo disponible",
      category: "recargas-servicios",
      image:
        "https://images.unsplash.com/photo-1605901309584-818e25960a8f?auto=format&fit=crop&w=1200&q=80",
      message: "Hola! Quiero consultar por promociones de recargas.",
      isFeatured: false,
      createdAt: "2026-04-17",
    },
    {
      id: 6,
      name: "Servicios streaming",
      price: "Planes disponibles",
      category: "recargas-servicios",
      image:
        "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?auto=format&fit=crop&w=1200&q=80",
      message: "Hola! Quiero consultar por servicios streaming disponibles.",
      isFeatured: false,
      createdAt: "2026-04-14",
    },
    {
      id: 7,
      name: "Mando PS3",
      price: "Consultar precio",
      category: "accesorios",
      platform: "ps3",
      image:
        "https://images.unsplash.com/photo-1607853202273-797f1c22a38e?auto=format&fit=crop&w=1200&q=80",
      message: "Hola! Quiero consultar por mando PS3 disponible.",
      isFeatured: true,
      createdAt: "2026-04-17",
    },
    {
      id: 8,
      name: "Combo PS4 + GTA V",
      price: "Consultar combo",
      category: "consolas",
      image:
        "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?auto=format&fit=crop&w=1200&q=80",
      message: "Hola! Quiero consultar por el combo PS4 + GTA V.",
      isFeatured: true,
      createdAt: "2026-04-16",
    },
  ];

  const headerBackgrounds = [
    "https://i.imgur.com/31OfpU4.jpeg",
    "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1400&q=80",
    "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?auto=format&fit=crop&w=1400&q=80",
    "https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=1400&q=80",
  ];

  const services = [
    "Venta de consolas nuevas y usadas",
    "Venta de juegos físicos y digitales",
    "Accesorios y periféricos gamer",
    "Recargas para juegos",
    "Mantenimiento de consolas",
    "Reparación y soporte técnico",
  ];

  const adminSections = [
    { id: "dashboard", title: "Dashboard", description: "Resumen rápido del sistema.", stats: ["Productos cargados", "Destacados activos", "Combos activos"] },
    { id: "productos", title: "Productos", description: "Agregar, editar y eliminar productos.", stats: ["Nombre", "Precio", "Imagen", "Categoría", "Plataforma"] },
    { id: "slider", title: "Slider principal", description: "Administrar imágenes y textos.", stats: ["Título", "Subtítulo", "Botón", "Segundos"] },
    { id: "combos", title: "Combos", description: "Crear combos especiales.", stats: ["Imagen", "Título", "Texto", "Activo"] },
    { id: "recargas", title: "Recargas y streaming", description: "Cargar listas de precios y planes.", stats: ["Servicio", "Lista de precios", "Tipo", "Activo"] },
    { id: "oferta", title: "Oferta del día", description: "Configurar banner principal con tiempo limitado.", stats: ["Título", "Texto", "Precio", "Vencimiento"] },
    { id: "respaldo", title: "Respaldo y restauración", description: "Exportar e importar copias de seguridad.", stats: ["Exportar JSON", "Importar", "Último backup", "Restaurar"] },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentComboSlide, setCurrentComboSlide] = useState(0);
  const [selectedGamePlatform, setSelectedGamePlatform] = useState("all");
  const [selectedAccessoryPlatform, setSelectedAccessoryPlatform] = useState("all");
  const [isCategoriesMenuOpen, setIsCategoriesMenuOpen] = useState(false);
  const [headerBackgroundIndex, setHeaderBackgroundIndex] = useState(0);
  const [rechargeFilter, setRechargeFilter] = useState("all");
  const [selectedRechargeItem, setSelectedRechargeItem] = useState(null);
  const [activeAdminSection, setActiveAdminSection] = useState("dashboard");
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);
  const [adminEmail, setAdminEmail] = useState("");
  const [adminPassword, setAdminPassword] = useState("");
  const [adminLoginError, setAdminLoginError] = useState("");
  const [newProductName, setNewProductName] = useState("");
  const [newProductPrice, setNewProductPrice] = useState("");
  const [newProductCategory, setNewProductCategory] = useState("juegos");
  const [newProductPlatform, setNewProductPlatform] = useState("ps5");
  const [newProductImage, setNewProductImage] = useState("");
  const [newProductFeatured, setNewProductFeatured] = useState(false);
  const [newProductCombo, setNewProductCombo] = useState(false);
  const [productFormMessage, setProductFormMessage] = useState("");
  const [backupMessage, setBackupMessage] = useState("");
  const [isHeaderCompact, setIsHeaderCompact] = useState(false);
  const [offerData, setOfferData] = useState(() => {
    if (typeof window === "undefined") {
      return {
        title: "🔥 Oferta del día",
        subtitle: "Combo PS4 + GTA V + Control extra",
        price: "Gs. 1.750.000",
        expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString().slice(0, 16),
      };
    }
    try {
      const saved = window.localStorage.getItem("skaygames_offer");
      return saved
        ? JSON.parse(saved)
        : {
            title: "🔥 Oferta del día",
            subtitle: "Combo PS4 + GTA V + Control extra",
            price: "Gs. 1.750.000",
            expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString().slice(0, 16),
          };
    } catch {
      return {
        title: "🔥 Oferta del día",
        subtitle: "Combo PS4 + GTA V + Control extra",
        price: "Gs. 1.750.000",
        expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString().slice(0, 16),
      };
    }
  });
  const [offerCountdown, setOfferCountdown] = useState("");

  const getPageFromHash = () => {
    if (typeof window === "undefined") return "home";
    const hash = window.location.hash.replace("#/", "").trim();
    return hash || "home";
  };

  const [activePage, setActivePage] = useState(getPageFromHash());
  const [productsData, setProductsData] = useState(() => {
    if (typeof window === "undefined") return initialProducts;
    try {
      const saved = window.localStorage.getItem("skaygames_products");
      return saved ? JSON.parse(saved) : initialProducts;
    } catch {
      return initialProducts;
    }
  });

  const navigateTo = (page) => {
    if (page !== "admin") setAdminLoginError("");
    const nextHash = page === "home" ? "#/" : `#/${page}`;
    window.location.hash = nextHash;
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [heroSlides.length]);

  useEffect(() => {
    const comboInterval = setInterval(() => {
      setCurrentComboSlide((prev) => (prev + 1) % comboSlides.length);
    }, 3000);
    return () => clearInterval(comboInterval);
  }, [comboSlides.length]);

  useEffect(() => {
    const handleHashChange = () => {
      setActivePage(getPageFromHash());
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      window.localStorage.setItem("skaygames_products", JSON.stringify(productsData));
    } catch {}
  }, [productsData]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      window.localStorage.setItem("skaygames_offer", JSON.stringify(offerData));
    } catch {}
  }, [offerData]);

  useEffect(() => {
    const updateCountdown = () => {
      const diff = new Date(offerData.expiresAt).getTime() - Date.now();
      if (Number.isNaN(diff) || diff <= 0) {
        setOfferCountdown("Finalizada");
        return;
      }
      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
      setOfferCountdown(`${hours}h ${minutes}m ${seconds}s`);
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [offerData.expiresAt]);

  useEffect(() => {
    const handleScroll = () => {
      const nextIndex = Math.min(headerBackgrounds.length - 1, Math.floor(window.scrollY / 500));
      setHeaderBackgroundIndex(nextIndex);
      setIsHeaderCompact(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [headerBackgrounds.length]);

  const formatDisplayPrice = (value) => {
    if (value === null || value === undefined) return "";
    const text = String(value).trim();
    if (/^[0-9]+$/.test(text)) return Number(text).toLocaleString("es-PY");
    return text;
  };

  const pageContent = useMemo(() => {
    const pages = {
      consolas: {
        title: "Consolas",
        subtitle: "Modelos nuevos y usados, listos para jugar.",
        description: "Explorá las consolas disponibles en SKAY GAMES y consultá por stock, precio y combos por WhatsApp.",
      },
      juegos: {
        title: "Juegos",
        subtitle: "Físicos y digitales para varias plataformas.",
        description: "Descubrí títulos disponibles para PS3, PS4 y PS5.",
      },
      accesorios: {
        title: "Accesorios",
        subtitle: "Mandos, auriculares, cables y más.",
        description: "Equipá tu setup con accesorios gamer y consultá rápido por disponibilidad.",
      },
      "recargas-servicios": {
        title: "Recargas y servicios",
        subtitle: "Recargas y servicios digitales.",
        description: "Consultá por recargas para juegos y plataformas de streaming.",
      },
    };
    return pages[activePage] ?? null;
  }, [activePage]);

  const featuredProducts = productsData.filter((product) => product.isFeatured).slice(0, 4);
  const latestProducts = [...productsData]
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    .slice(0, 8);

  const productsToShow =
    activePage === "home"
      ? featuredProducts
      : productsData.filter((product) => {
          if (product.category !== activePage) return false;
          if (activePage === "juegos") {
            if (selectedGamePlatform === "all") return true;
            return product.platform === selectedGamePlatform;
          }
          if (activePage === "accesorios") {
            if (selectedAccessoryPlatform === "all") return true;
            return product.platform === selectedAccessoryPlatform;
          }
          return true;
        });

  const productCardClass =
    "group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-black/80 via-slate-900 to-black shadow-2xl transition duration-500 hover:-translate-y-2 hover:scale-[1.01] hover:border-cyan-400/25 hover:shadow-[0_0_30px_rgba(34,211,238,0.10)]";

  const renderProductCard = (product, buttonLabel = "Pedir por WhatsApp") => (
    <div key={product.id ?? product.name} className={productCardClass}>
      <div className="relative overflow-hidden bg-black">
        <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-700 group-hover:opacity-100">
          <div className="absolute inset-y-0 -left-1/3 w-1/3 rotate-12 bg-white/10 blur-2xl transition duration-1000 group-hover:left-full" />
        </div>
        <img
          src={product.image}
          alt={product.name}
          className="h-64 w-full object-contain bg-black p-4 transition duration-500 group-hover:scale-110"
          onError={(e) => {
            e.currentTarget.src = "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?auto=format&fit=crop&w=1200&q=80";
          }}
        />
      </div>
      <div className="p-5">
        <div className="mb-3 h-px w-full bg-gradient-to-r from-cyan-400/20 via-white/10 to-transparent" />
        <div className="flex items-center gap-2 flex-wrap">
          <h4 className="text-xl font-bold">{product.name}</h4>
          {product.platform && (
            <span className="rounded-full bg-cyan-400/15 px-3 py-1 text-xs font-bold text-cyan-300 border border-cyan-400/20">
              {product.platform.toUpperCase()}
            </span>
          )}
        </div>
        <p className="mt-2 text-3xl font-extrabold tracking-tighter text-cyan-300 drop-shadow-[0_0_10px_rgba(34,211,238,0.10)]">
          {formatDisplayPrice(product.price)}
        </p>
        <a
          href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(product.message)}`}
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-block w-full rounded-2xl bg-green-500 px-4 py-3 text-center font-bold text-black transition duration-300 hover:scale-[1.03] hover:shadow-[0_0_24px_rgba(34,197,94,0.30)] active:scale-[0.99]"
        >
          {buttonLabel}
        </a>
      </div>
    </div>
  );

  const renderGamesPlatformSelector = () => (
    <section className="mx-auto max-w-7xl px-6 pt-10">
      <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
        <div>
          <h3 className="text-3xl font-black md:text-4xl">Elegí tu categoría</h3>
          <p className="mt-3 text-white/65">Entrá directo al catálogo según la consola que buscás.</p>
        </div>
        <button
          onClick={() => setSelectedGamePlatform("all")}
          className={`rounded-2xl border px-5 py-3 text-sm font-bold transition ${
            selectedGamePlatform === "all"
              ? "border-cyan-400/50 bg-cyan-400 text-black"
              : "border-white/10 bg-white/5 text-white/80 hover:bg-white/10 hover:text-white"
          }`}
        >
          Ver todos
        </button>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {gamePlatforms.map((platform) => (
          <button
            key={platform.id}
            onClick={() => setSelectedGamePlatform(platform.id)}
            className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 text-left shadow-2xl transition hover:-translate-y-1"
          >
            <img src={platform.image} alt={platform.title} className="h-64 w-full object-contain bg-black p-4" />
            <div className="p-6">
              <div className="mb-3 inline-block rounded-full bg-cyan-400/15 px-3 py-1 text-xs font-bold text-cyan-300">Consola</div>
              <h4 className="text-3xl font-black">{platform.title}</h4>
              <p className="mt-3 text-white/70">{platform.description}</p>
            </div>
          </button>
        ))}
      </div>
    </section>
  );

  const handleProductImageChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const allowedTypes = ["image/jpeg", "image/png", "image/webp"];
    const maxSizeBytes = 8 * 1024 * 1024;
    if (!allowedTypes.includes(file.type)) {
      setProductFormMessage("Formato no compatible. Usá JPG, PNG o WebP.");
      return;
    }
    if (file.size > maxSizeBytes) {
      setProductFormMessage("La imagen es muy pesada. Usá una de hasta 8 MB.");
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === "string") {
        setNewProductImage(reader.result);
        setProductFormMessage(`Imagen cargada: ${file.name}`);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
    if (!newProductName.trim() || !newProductPrice.trim()) {
      setProductFormMessage("Completá nombre y precio del producto.");
      return;
    }
    const categoryNeedsPlatform = ["juegos", "accesorios"].includes(newProductCategory);
    const newProduct = {
      id: Date.now(),
      name: newProductName.trim(),
      price: newProductPrice.trim(),
      category: newProductCategory,
      platform: categoryNeedsPlatform ? newProductPlatform : undefined,
      image:
        newProductImage ||
        "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?auto=format&fit=crop&w=1200&q=80",
      message: `Hola! Quiero consultar por ${newProductName.trim()}.`,
      isFeatured: newProductFeatured,
      isCombo: newProductCombo,
      createdAt: new Date().toISOString().slice(0, 10),
    };
    setProductsData((prev) => [newProduct, ...prev]);
    setNewProductName("");
    setNewProductPrice("");
    setNewProductCategory("juegos");
    setNewProductPlatform("ps5");
    setNewProductImage("");
    setNewProductFeatured(false);
    setNewProductCombo(false);
    setProductFormMessage("Producto agregado correctamente.");
  };

  const handleDeleteProduct = (id) => {
    setProductsData((prev) => prev.filter((product) => product.id !== id));
  };

  const handleResetProducts = () => {
    setProductsData(initialProducts);
    if (typeof window !== "undefined") window.localStorage.removeItem("skaygames_products");
    setProductFormMessage("Productos restaurados al estado inicial.");
  };

  const handleExportBackup = () => {
    try {
      const backupData = {
        exportedAt: new Date().toISOString(),
        products: productsData,
      };
      const blob = new Blob([JSON.stringify(backupData, null, 2)], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `skaygames-backup-${new Date().toISOString().slice(0, 10)}.json`;
      link.click();
      URL.revokeObjectURL(url);
      setBackupMessage("Respaldo exportado correctamente.");
    } catch {
      setBackupMessage("No se pudo exportar el respaldo.");
    }
  };

  const handleImportBackup = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      try {
        const parsed = JSON.parse(String(reader.result));
        if (!parsed.products || !Array.isArray(parsed.products)) {
          setBackupMessage("El archivo no tiene un formato válido.");
          return;
        }
        setProductsData(parsed.products);
        setBackupMessage(`Respaldo importado: ${parsed.products.length} productos restaurados.`);
      } catch {
        setBackupMessage("No se pudo leer el archivo de respaldo.");
      }
    };
    reader.readAsText(file);
  };

  const handleOfferChange = (field, value) => {
    setOfferData((prev) => ({ ...prev, [field]: value }));
  };

  const handleAdminLogin = (e) => {
    e.preventDefault();
    if (adminEmail.trim().toLowerCase() === "admin@skaygames.com.py" && adminPassword === "SkayGames2026") {
      setIsAdminAuthenticated(true);
      setAdminLoginError("");
      setAdminPassword("");
      return;
    }
    setAdminLoginError("Correo o contraseña incorrectos.");
  };

  const renderRechargeServicesPage = () => {
    const recargas = [
      {
        name: "Free Fire",
        image: "https://images.unsplash.com/photo-1603481546579-65d935ba9cdd?auto=format&fit=crop&w=1200&q=80",
        prices: ["100 diamantes - Gs. 10.000", "310 diamantes - Gs. 25.000", "520 diamantes - Gs. 40.000"],
        message: "Hola! Quiero consultar precios de Free Fire.",
      },
      {
        name: "Call of Duty Mobile",
        image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80",
        prices: ["80 CP - Gs. 10.000", "420 CP - Gs. 35.000", "880 CP - Gs. 70.000"],
        message: "Hola! Quiero consultar precios de Call of Duty Mobile.",
      },
      {
        name: "Clash of Clans",
        image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1200&q=80",
        prices: ["Pase de oro - Gs. 45.000", "Gemas chicas - Consultar", "Gemas grandes - Consultar"],
        message: "Hola! Quiero consultar precios de Clash of Clans.",
      },
      {
        name: "PlayStation Store",
        image: "https://images.unsplash.com/photo-1486572788966-cfd3df1f5b42?auto=format&fit=crop&w=1200&q=80",
        prices: ["Saldo USD 10 - Consultar", "Saldo USD 20 - Consultar", "Saldo USD 50 - Consultar"],
        message: "Hola! Quiero consultar saldo de PlayStation Store.",
      },
    ];

    const streaming = [
      {
        name: "Netflix",
        image: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
        prices: ["Plan mensual - Consultar", "Cuenta compartida - Consultar"],
        message: "Hola! Quiero consultar planes de Netflix.",
      },
      {
        name: "Max",
        image: "https://upload.wikimedia.org/wikipedia/commons/1/17/HBO_Max_Logo.svg",
        prices: ["Plan mensual - Consultar", "Plan promo - Consultar"],
        message: "Hola! Quiero consultar planes de Max.",
      },
      {
        name: "Amazon Prime Video",
        image: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Prime_Video.png",
        prices: ["Plan mensual - Consultar", "Cuenta compartida - Consultar"],
        message: "Hola! Quiero consultar planes de Amazon Prime Video.",
      },
      {
        name: "Spotify Premium",
        image: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg",
        prices: ["1 mes - Gs. 15.000", "Plan extendido - Consultar"],
        message: "Hola! Quiero consultar Spotify Premium.",
      },
    ];

    const renderPriceList = (item) => (
      <div className="mt-4 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-4">
        <h5 className="text-sm font-bold uppercase tracking-tighter text-cyan-300">Opciones disponibles</h5>
        <div className="mt-3 grid gap-2">
          {item.prices.map((price) => (
            <div key={price} className="rounded-xl border border-white/10 bg-black/30 px-3 py-2 text-sm text-white/85">
              {price}
            </div>
          ))}
        </div>
        <a href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(item.message)}`} target="_blank" rel="noreferrer" className="mt-4 inline-block w-full rounded-xl bg-green-500 px-4 py-3 text-center font-bold text-black">
          Consultar por WhatsApp
        </a>
      </div>
    );

    const renderCard = (item, type) => {
      const logoBackgrounds = {
        Netflix: "from-red-950/80 via-black to-black",
        Max: "from-indigo-950/80 via-slate-950 to-black",
        "Amazon Prime Video": "from-sky-950/80 via-slate-950 to-black",
        "Spotify Premium": "from-emerald-950/80 via-black to-black",
        "Free Fire": "from-amber-950/80 via-black to-black",
        "Call of Duty Mobile": "from-zinc-900 via-black to-black",
        "Clash of Clans": "from-orange-950/80 via-black to-black",
        "PlayStation Store": "from-blue-950/80 via-slate-950 to-black",
      };
      return (
        <div key={item.name} className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-black/80 via-slate-900 to-black shadow-2xl transition duration-300 hover:-translate-y-1">
          <div className={`relative flex h-56 w-full items-center justify-center overflow-hidden bg-gradient-to-br ${logoBackgrounds[item.name] || "from-slate-950 via-black to-black"}`}>
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.10),transparent_35%)]" />
            <div className={`absolute top-4 right-4 rounded-full px-3 py-1 text-[11px] font-bold ${type === "recarga" ? "bg-cyan-400/15 text-cyan-300 border border-cyan-400/20" : "bg-purple-500/15 text-purple-300 border border-purple-400/20"}`}>
              {type === "recarga" ? "Entrega inmediata" : "Servicio digital"}
            </div>
            <div className="flex h-28 items-center justify-center rounded-3xl border border-white/10 bg-white/[0.04] px-6 py-5 backdrop-blur-sm">
              <img src={item.image} alt={item.name} className="h-16 w-auto object-contain mx-auto" />
            </div>
          </div>
          <div className="p-5">
            <div className="mb-3 h-px w-full bg-gradient-to-r from-cyan-400/20 via-white/10 to-transparent" />
            <div className={`mb-3 inline-block rounded-full px-3 py-1 text-xs font-bold ${type === "recarga" ? "bg-cyan-400/15 text-cyan-300" : "bg-purple-500/15 text-purple-300"}`}>
              {type === "recarga" ? "Recarga" : "Streaming"}
            </div>
            <h4 className="text-xl font-bold tracking-tighter">{item.name}</h4>
            <p className="mt-2 text-sm text-white/60">{type === "recarga" ? "Consultá montos disponibles y entrega rápida." : "Mirá planes y opciones disponibles."}</p>
            <button onClick={() => setSelectedRechargeItem(selectedRechargeItem === item.name ? null : item.name)} className={`mt-4 w-full rounded-xl px-4 py-3 font-bold text-black ${type === "recarga" ? "bg-cyan-400" : "bg-purple-400"}`}>
              {type === "recarga" ? "Ver lista de precios" : "Ver planes disponibles"}
            </button>
            {selectedRechargeItem === item.name && renderPriceList(item)}
          </div>
        </div>
      );
    };

    return (
      <>
        <section className="relative overflow-hidden border-b border-white/10 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.18),transparent_25%),radial-gradient(circle_at_left,rgba(168,85,247,0.16),transparent_30%)] py-20">
          <div className="mx-auto max-w-7xl px-6">
            <button onClick={() => navigateTo("home")} className="mb-6 rounded-2xl border border-white/20 bg-white/5 px-5 py-3 text-sm font-bold transition hover:bg-white/10">← Volver al inicio</button>
            <span className="inline-block rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">Ruta: #/recargas-servicios</span>
            <h2 className="mt-5 text-4xl font-black md:text-6xl">Recargas y servicios</h2>
            <p className="mt-4 text-xl text-white/75">Recargas para juegos y servicios streaming organizados por categoría.</p>
          </div>
        </section>
        <section className="mx-auto max-w-7xl px-6 py-12">
          <div className="flex flex-wrap gap-3">
            {[["all", "Todos"], ["recargas", "Recargas"], ["streaming", "Streaming"]].map(([value, label]) => (
              <button key={value} onClick={() => setRechargeFilter(value)} className={`rounded-2xl border px-5 py-3 text-sm font-bold transition ${rechargeFilter === value ? "border-cyan-400/50 bg-cyan-400 text-black" : "border-white/10 bg-white/5 text-white/80 hover:bg-white/10 hover:text-white"}`}>
                {label}
              </button>
            ))}
          </div>
        </section>
        {(rechargeFilter === "all" || rechargeFilter === "recargas") && (
          <section className="mx-auto max-w-7xl px-6 pb-16">
            <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
              <div>
                <h3 className="text-3xl font-black md:text-4xl">Recargas para juegos</h3>
                <p className="mt-3 text-white/65">Tocá un juego para ver sus opciones y precios.</p>
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">{recargas.map((item) => renderCard(item, "recarga"))}</div>
          </section>
        )}
        {(rechargeFilter === "all" || rechargeFilter === "streaming") && (
          <section className="mx-auto max-w-7xl px-6 pb-16">
            <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
              <div>
                <h3 className="text-3xl font-black md:text-4xl">Servicios streaming</h3>
                <p className="mt-3 text-white/65">Elegí una plataforma para ver planes u opciones disponibles.</p>
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">{streaming.map((item) => renderCard(item, "streaming"))}</div>
          </section>
        )}
      </>
    );
  };

  const renderAdminLoginPage = () => (
    <>
      <section className="relative overflow-hidden border-b border-white/10 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.18),transparent_25%),radial-gradient(circle_at_left,rgba(168,85,247,0.16),transparent_30%)] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <button onClick={() => navigateTo("home")} className="mb-6 rounded-2xl border border-white/20 bg-white/5 px-5 py-3 text-sm font-bold transition hover:bg-white/10">← Volver al inicio</button>
          <span className="inline-block rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">Ruta privada: #/admin</span>
          <h2 className="mt-5 text-4xl font-black md:text-6xl">Acceso Admin</h2>
          <p className="mt-4 max-w-3xl text-xl text-white/75">Ingresá con tu correo y contraseña para administrar la web.</p>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-8 shadow-2xl">
            <div className="mb-4 inline-block rounded-full bg-cyan-400/15 px-4 py-2 text-sm font-bold text-cyan-300">Área privada</div>
            <h3 className="text-3xl font-black md:text-4xl">Panel de control de SKAY GAMES</h3>
            <p className="mt-4 text-white/70">Desde acá vas a poder cargar productos, administrar recargas y respaldos.</p>
          </div>
          <form onSubmit={handleAdminLogin} className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl">
            <h3 className="text-3xl font-black">Iniciar sesión</h3>
            <div className="mt-8 grid gap-4">
              <input type="email" value={adminEmail} onChange={(e) => setAdminEmail(e.target.value)} placeholder="admin@skaygames.com.py" className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-4 text-white outline-none placeholder:text-white/35" />
              <input type="password" value={adminPassword} onChange={(e) => setAdminPassword(e.target.value)} placeholder="••••••••" className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-4 text-white outline-none placeholder:text-white/35" />
              {adminLoginError && <div className="rounded-2xl border border-red-400/20 bg-red-500/10 px-4 py-3 text-sm font-bold text-red-300">{adminLoginError}</div>}
              <button type="submit" className="mt-2 rounded-2xl bg-cyan-400 px-6 py-4 font-black text-black">Ingresar al panel</button>
            </div>
          </form>
        </div>
      </section>
    </>
  );

  const renderAdminPage = () => {
    if (!isAdminAuthenticated) return renderAdminLoginPage();
    const currentSection = adminSections.find((section) => section.id === activeAdminSection) || adminSections[0];

    const adminQuickStats = [
      { label: "Productos totales", value: productsData.length },
      { label: "Destacados", value: productsData.filter((p) => p.isFeatured).length },
      { label: "Accesorios gamer", value: productsData.filter((p) => p.platform === "gamer").length },
      { label: "Recargas/Servicios", value: productsData.filter((p) => p.category === "recargas-servicios").length },
    ];

    return (
      <>
        <section className="relative overflow-hidden border-b border-white/10 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.16),transparent_25%),radial-gradient(circle_at_left,rgba(168,85,247,0.14),transparent_30%)] py-16">
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-bold text-cyan-300">
                  Panel privado · SKAY GAMES
                </div>
                <h2 className="text-4xl font-black md:text-5xl">Admin</h2>
                <p className="mt-3 max-w-3xl text-white/70">Administrá productos, categorías, combos, recargas y respaldos desde un solo lugar.</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <button onClick={() => navigateTo("home")} className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-bold text-white/85 transition hover:bg-white/10">← Ver web pública</button>
                <button onClick={() => { setIsAdminAuthenticated(false); setAdminEmail(""); setAdminPassword(""); setAdminLoginError(""); }} className="rounded-2xl border border-red-400/20 bg-red-500/10 px-5 py-3 text-sm font-bold text-red-300 transition hover:bg-red-500/20">Cerrar sesión</button>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-10">
          <div className="grid gap-10 lg:grid-cols-[290px_1fr]">
            <aside className="rounded-[28px] border border-white/10 bg-white/5 p-4 shadow-2xl">
              <div className="mb-4 rounded-3xl border border-cyan-400/20 bg-cyan-400/10 p-4">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">Acceso</p>
                <p className="mt-2 text-lg font-black">admin@skaygames.com.py</p>
                <p className="mt-1 text-sm text-white/55">Ruta privada: #/admin</p>
              </div>
              <div className="space-y-2">
                {adminSections.map((section) => (
                  <button key={section.id} onClick={() => setActiveAdminSection(section.id)} className={`w-full rounded-2xl px-4 py-4 text-left transition ${activeAdminSection === section.id ? "border border-cyan-400/30 bg-cyan-400 text-black shadow-lg" : "border border-transparent bg-black/30 text-white/80 hover:bg-white/10 hover:text-white"}`}>
                    <div className="text-sm font-black">{section.title}</div>
                    <div className={`mt-1 text-xs ${activeAdminSection === section.id ? "text-black/80" : "text-white/45"}`}>{section.description}</div>
                  </button>
                ))}
              </div>
            </aside>

            <div className="space-y-8">
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {adminQuickStats.map((item) => (
                  <div key={item.label} className="rounded-[28px] border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-5 shadow-2xl">
                    <p className="text-sm text-white/55">{item.label}</p>
                    <p className="mt-3 text-3xl font-black text-cyan-300">{item.value}</p>
                  </div>
                ))}
              </div>

              <div className="rounded-[32px] border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-8 shadow-2xl">
                <div className="mb-4 inline-block rounded-full bg-cyan-400/15 px-4 py-2 text-sm font-bold text-cyan-300">{currentSection.title}</div>
                <h3 className="text-3xl font-black md:text-4xl">{currentSection.title}</h3>
                <p className="mt-3 max-w-3xl text-white/65">{currentSection.description}</p>
              </div>

              {activeAdminSection === "dashboard" && (
                <div className="grid gap-6 xl:grid-cols-2">
                  <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-2xl">
                    <h4 className="text-2xl font-black">Resumen rápido</h4>
                    <div className="mt-6 space-y-4">
                      <div className="rounded-2xl border border-white/10 bg-black/30 p-4 text-white/80">La web pública ya está lista para seguir cargando productos reales.</div>
                      <div className="rounded-2xl border border-white/10 bg-black/30 p-4 text-white/80">El panel admin ya permite agregar productos con imagen, categoría y plataforma.</div>
                      <div className="rounded-2xl border border-white/10 bg-black/30 p-4 text-white/80">El próximo paso recomendado es exportar/importar respaldo y luego publicar.</div>
                    </div>
                  </div>
                  <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-2xl">
                    <h4 className="text-2xl font-black">Acciones recomendadas</h4>
                    <div className="mt-6 grid gap-4">
                      {["Cargar 10 a 20 productos reales", "Subir 3 combos destacados", "Configurar tu WhatsApp real", "Activar respaldo/exportación"].map((item) => (
                        <div key={item} className="rounded-2xl border border-cyan-400/15 bg-cyan-400/5 p-4 text-sm font-bold text-cyan-300">{item}</div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeAdminSection === "oferta" && (
                <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
                  <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-2xl">
                    <h4 className="text-2xl font-black">Configurar oferta del día</h4>
                    <div className="mt-6 grid gap-4">
                      <input value={offerData.title} onChange={(e) => handleOfferChange("title", e.target.value)} placeholder="Título" className="rounded-2xl border border-white/10 bg-black/30 p-4 text-white outline-none placeholder:text-white/35" />
                      <input value={offerData.subtitle} onChange={(e) => handleOfferChange("subtitle", e.target.value)} placeholder="Texto de la oferta" className="rounded-2xl border border-white/10 bg-black/30 p-4 text-white outline-none placeholder:text-white/35" />
                      <input value={offerData.price} onChange={(e) => handleOfferChange("price", e.target.value)} placeholder="Precio" className="rounded-2xl border border-white/10 bg-black/30 p-4 text-white outline-none placeholder:text-white/35" />
                      <div>
                        <label className="mb-2 block text-sm font-bold text-white/70">Vence en</label>
                        <input type="datetime-local" value={offerData.expiresAt} onChange={(e) => handleOfferChange("expiresAt", e.target.value)} className="w-full rounded-2xl border border-white/10 bg-black/30 p-4 text-white outline-none" />
                      </div>
                    </div>
                  </div>
                  <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-2xl">
                    <h4 className="text-2xl font-black">Vista previa</h4>
                    <div className="mt-6 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-purple-600/30 via-cyan-500/20 to-pink-500/30 p-6">
                      <div className="inline-block rounded-full bg-red-500/20 px-4 py-2 text-xs font-bold text-red-300">Tiempo restante: {offerCountdown}</div>
                      <h5 className="mt-4 text-3xl font-black text-white">{offerData.title}</h5>
                      <p className="mt-2 text-white/75">{offerData.subtitle}</p>
                      <p className="mt-4 text-2xl font-bold text-green-400">{offerData.price}</p>
                    </div>
                  </div>
                </div>
              )}

              {activeAdminSection === "productos" && (
                <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
                  <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-2xl">
                    <div className="mb-6 flex items-center justify-between gap-3">
                      <h4 className="text-2xl font-black">Agregar producto</h4>
                      <div className="rounded-full bg-white/5 px-4 py-2 text-xs font-bold text-white/50">Carga rápida</div>
                    </div>
                    <form onSubmit={handleAddProduct} className="grid gap-4">
                      <input value={newProductName} onChange={(e) => setNewProductName(e.target.value)} placeholder="Nombre del producto" className="rounded-2xl border border-white/10 bg-black/30 p-4 text-white outline-none placeholder:text-white/35" />
                      <input value={newProductPrice} onChange={(e) => setNewProductPrice(e.target.value)} placeholder="Precio o texto, ejemplo: 330000 o Gs. 330.000" className="rounded-2xl border border-white/10 bg-black/30 p-4 text-white outline-none placeholder:text-white/35" />
                      <label className="rounded-2xl border border-dashed border-cyan-400/30 bg-cyan-400/5 p-6 text-center text-cyan-300 cursor-pointer">
                        {newProductImage ? "Imagen cargada correctamente" : "Subir imagen directa desde la PC (JPG, PNG, WebP)"}
                        <input type="file" accept=".jpg,.jpeg,.png,.webp,image/jpeg,image/png,image/webp" onChange={handleProductImageChange} className="hidden" />
                      </label>
                      {newProductImage && (
                        <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/30 p-3">
                          <img src={newProductImage} alt="Preview del producto" className="h-40 w-full rounded-xl object-contain bg-black" />
                        </div>
                      )}
                      <div className="grid gap-4 md:grid-cols-2">
                        <select value={newProductCategory} onChange={(e) => setNewProductCategory(e.target.value)} className="rounded-2xl border border-white/10 bg-black/30 p-4 text-white outline-none">
                          <option value="juegos">Juegos</option>
                          <option value="consolas">Consolas</option>
                          <option value="accesorios">Accesorios</option>
                          <option value="recargas-servicios">Recargas y servicios</option>
                        </select>
                        <select value={newProductPlatform} onChange={(e) => setNewProductPlatform(e.target.value)} className="rounded-2xl border border-white/10 bg-black/30 p-4 text-white outline-none">
                          <option value="ps2">PS2</option>
                          <option value="ps3">PS3</option>
                          <option value="ps4">PS4</option>
                          <option value="ps5">PS5</option>
                          <option value="gamer">Accesorios Gamer</option>
                        </select>
                      </div>
                      <div className="grid gap-4 md:grid-cols-2">
                        <label className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/30 p-4 text-white/85"><span>Destacado</span><input type="checkbox" checked={newProductFeatured} onChange={(e) => setNewProductFeatured(e.target.checked)} /></label>
                        <label className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/30 p-4 text-white/85"><span>Mostrar en combo</span><input type="checkbox" checked={newProductCombo} onChange={(e) => setNewProductCombo(e.target.checked)} /></label>
                      </div>
                      {productFormMessage && <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 px-4 py-3 text-sm font-bold text-cyan-300">{productFormMessage}</div>}
                      <div className="grid gap-3 md:grid-cols-2">
                        <button type="submit" className="rounded-2xl bg-cyan-400 px-6 py-4 font-black text-black">Guardar producto</button>
                        <button type="button" onClick={handleResetProducts} className="rounded-2xl bg-white/10 px-6 py-4 font-black text-white transition hover:bg-white/15">Restablecer pruebas</button>
                      </div>
                    </form>
                  </div>
                  <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-2xl">
                    <div className="mb-6 flex items-center justify-between gap-3">
                      <h4 className="text-2xl font-black">Productos cargados</h4>
                      <div className="rounded-full bg-cyan-400/10 px-4 py-2 text-xs font-bold text-cyan-300">{productsData.length} en total</div>
                    </div>
                    <div className="space-y-4">
                      {productsData.slice(0, 8).map((product) => (
                        <div key={product.id} className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-black/30 p-4">
                          <div>
                            <div className="font-bold text-white/90">{product.name}</div>
                            <div className="mt-1 text-xs text-white/45">{product.category}{product.platform ? ` · ${product.platform.toUpperCase()}` : ""}</div>
                          </div>
                          <div className="flex gap-2">
                            <button className="rounded-xl bg-white/10 px-3 py-2 text-xs font-bold text-white/80">Editar</button>
                            <button onClick={() => handleDeleteProduct(product.id)} className="rounded-xl bg-red-500/20 px-3 py-2 text-xs font-bold text-red-300">Eliminar</button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeAdminSection === "respaldo" && (
                <div className="grid gap-6 xl:grid-cols-2">
                  <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-2xl">
                    <h4 className="text-2xl font-black">Exportar respaldo</h4>
                    <p className="mt-3 text-white/65">Descargá una copia completa de tus productos cargados para guardarla donde quieras.</p>
                    <button onClick={handleExportBackup} className="mt-6 rounded-2xl bg-cyan-400 px-6 py-4 font-black text-black">Descargar backup JSON</button>
                  </div>
                  <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-2xl">
                    <h4 className="text-2xl font-black">Importar respaldo</h4>
                    <p className="mt-3 text-white/65">Restaurá un archivo previamente exportado y recuperá tus productos cargados.</p>
                    <label className="mt-6 flex cursor-pointer items-center justify-center rounded-2xl border border-dashed border-cyan-400/30 bg-cyan-400/5 px-6 py-8 text-center font-bold text-cyan-300">
                      Subir archivo de respaldo
                      <input type="file" accept="application/json,.json" onChange={handleImportBackup} className="hidden" />
                    </label>
                    {backupMessage && <div className="mt-4 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 px-4 py-3 text-sm font-bold text-cyan-300">{backupMessage}</div>}
                  </div>
                </div>
              )}

              {activeAdminSection !== "dashboard" && activeAdminSection !== "productos" && activeAdminSection !== "oferta" && activeAdminSection !== "respaldo" && (
                <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-2xl">
                  <h4 className="text-2xl font-black">{currentSection.title}</h4>
                  <p className="mt-3 max-w-3xl text-white/65">Esta sección ya está preparada como base visual. El siguiente paso es volverla funcional según lo que quieras priorizar.</p>
                  <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                    {currentSection.stats.map((item) => (
                      <div key={item} className="rounded-2xl border border-white/10 bg-black/30 p-4 text-sm font-bold text-white/80">{item}</div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </>
    );
  };

  const renderCategoryPage = () => (
    <>
      <section className="relative overflow-hidden border-b border-white/10 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.18),transparent_25%),radial-gradient(circle_at_left,rgba(168,85,247,0.16),transparent_30%)] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <button onClick={() => navigateTo("home")} className="mb-6 rounded-2xl border border-white/20 bg-white/5 px-5 py-3 text-sm font-bold transition hover:bg-white/10">← Volver al inicio</button>
          <span className="inline-block rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">Ruta: {activePage === "home" ? "#/" : `#/${activePage}`}</span>
          <h2 className="mt-5 text-4xl font-black md:text-6xl">{pageContent?.title}</h2>
          <p className="mt-4 text-xl text-white/75">{pageContent?.subtitle}</p>
          <p className="mt-4 max-w-3xl text-white/65">{pageContent?.description}</p>
        </div>
      </section>

      {activePage === "juegos" && renderGamesPlatformSelector()}

      {activePage === "accesorios" && (
        <section className="mx-auto max-w-7xl px-6 pt-10">
          <div className="mb-8">
            <h3 className="text-3xl font-black md:text-4xl">Elegí tu consola</h3>
            <p className="mt-3 text-white/65">Filtrá accesorios según la consola o por accesorios gamer.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <button onClick={() => setSelectedAccessoryPlatform("all")} className={`rounded-2xl border px-5 py-3 text-sm font-bold transition ${selectedAccessoryPlatform === "all" ? "border-cyan-400/50 bg-cyan-400 text-black" : "border-white/10 bg-white/5 text-white/80 hover:bg-white/10"}`}>Todos</button>
            {accessoryPlatforms.map((p) => (
              <button key={p.id} onClick={() => setSelectedAccessoryPlatform(p.id)} className={`rounded-2xl border px-5 py-3 text-sm font-bold transition ${selectedAccessoryPlatform === p.id ? "border-cyan-400/50 bg-cyan-400 text-black" : "border-white/10 bg-white/5 text-white/80 hover:bg-white/10"}`}>{p.title}</button>
            ))}
          </div>
        </section>
      )}

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-10 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <h3 className="text-3xl font-black md:text-4xl">Catálogo de {pageContent?.title}{activePage === "juegos" && selectedGamePlatform !== "all" ? ` · ${selectedGamePlatform.toUpperCase()}` : ""}</h3>
            <p className="mt-3 text-white/65">Elegí lo que te interesa y consultá directo por WhatsApp.</p>
          </div>
          <a href={whatsappLink} target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-2xl bg-green-500 px-5 py-3 text-sm font-bold text-black shadow-lg transition hover:scale-105">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="h-5 w-5" fill="currentColor" aria-hidden="true">
              <path d="M16 .4C7.6.4.8 7.2.8 15.6c0 2.7.7 5.2 2 7.4L.4 31.6l8.8-2.3c2.1 1.1 4.6 1.8 7.1 1.8 8.4 0 15.2-6.8 15.2-15.2S24.4.4 16 .4zm0 27.7c-2.3 0-4.5-.6-6.4-1.7l-.5-.3-5.2 1.4 1.4-5.1-.3-.5c-1.2-2-1.8-4.2-1.8-6.6 0-7 5.7-12.7 12.7-12.7s12.7 5.7 12.7 12.7-5.7 12.8-12.6 12.8zm7-9.6c-.4-.2-2.3-1.1-2.7-1.2-.4-.2-.7-.2-1 .2-.3.4-1.1 1.2-1.3 1.4-.2.2-.5.3-.9.1-.4-.2-1.6-.6-3-1.9-1.1-1-1.9-2.2-2.1-2.6-.2-.4 0-.6.2-.8.2-.2.4-.5.6-.7.2-.2.3-.4.5-.7.2-.3.1-.6 0-.8-.1-.2-1-2.5-1.4-3.4-.4-.9-.8-.7-1.1-.7h-.9c-.3 0-.8.1-1.2.6s-1.6 1.6-1.6 3.9 1.6 4.6 1.8 4.9c.2.3 3.1 4.7 7.6 6.4 1.1.5 2 .8 2.7 1 .1 0 .3.1.4.1.8.2 1.6.2 2.2.1.7-.1 2.3-.9 2.6-1.8.3-.9.3-1.6.2-1.8-.1-.2-.4-.3-.8-.5z" />
            </svg>
            Contactanos
          </a>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">{productsToShow.map((product) => renderProductCard(product))}</div>
      </section>
    </>
  );

  return (
    <div className="min-h-screen bg-black text-white">
      <header id="mainHeader" className={`fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/70 transition-all duration-300 ${isHeaderCompact ? "py-2 shadow-2xl bg-black/85" : "py-0"}`}>
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {headerBackgrounds.map((background, index) => (
            <img
              key={background}
              src={background}
              alt="background"
              className={`absolute left-1/2 top-0 h-full w-full -translate-x-1/2 object-cover object-[center_41%] blur-[1px] scale-110 transition-all duration-700 ${headerBackgroundIndex === index ? "opacity-90" : "opacity-0"}`}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/30 to-transparent" />
          <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-r from-transparent via-cyan-400/10 to-black" />
        </div>
        <div className={`relative mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 overflow-visible transition-all duration-300 ${isHeaderCompact ? "py-2 scale-[0.98]" : "py-4 scale-100"}`}>
          <button onClick={() => navigateTo("home")} className="text-left">
            <h1 className="text-3xl font-extrabold tracking-tighter text-cyan-400">SKAY GAMES</h1>
            <p className="text-xs text-white/60">Videojuegos, consolas, accesorios y servicios</p>
          </button>

          <div className="hidden md:flex md:items-center md:gap-3 md:relative md:z-[320]">
            <div className="relative">
              <button
                onClick={() => setIsCategoriesMenuOpen((prev) => !prev)}
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-bold text-white/80 transition hover:bg-white/10 hover:text-white"
              >
                Categorías
              </button>

              {isCategoriesMenuOpen && (
                <div className="absolute left-0 top-14 z-[9999] w-[340px] overflow-hidden rounded-[28px] border border-cyan-400/20 bg-[linear-gradient(180deg,rgba(5,10,20,0.96),rgba(8,8,12,0.98))] shadow-[0_0_35px_rgba(34,211,238,0.10)] backdrop-blur-xl">
                  <div className="border-b border-white/10 bg-white/[0.03] px-5 py-4">
                    <div className="text-sm font-black tracking-tighter text-cyan-300">
                      Ir directo a una sección
                    </div>
                    <div className="mt-1 text-xs text-white/45">
                      Elegí rápido la categoría que querés ver.
                    </div>
                  </div>

                  <div className="grid max-h-[420px] gap-2 overflow-y-auto p-3 pr-2 [scrollbar-width:thin] [scrollbar-color:rgba(34,211,238,0.6)_rgba(255,255,255,0.06)] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-white/5 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-cyan-400/60 [&::-webkit-scrollbar-thumb:hover]:bg-cyan-300">
                    {[
                      { id: "consolas", title: "Consolas", description: "Nuevas y usadas listas para jugar.", icon: "🎮" },
                      { id: "juegos", title: "Juegos", description: "Físicos y digitales para varias plataformas.", icon: "🕹️" },
                      { id: "accesorios", title: "Accesorios", description: "Mandos, auriculares, cables y más.", icon: "🎧" },
                      { id: "recargas-servicios", title: "Recargas y servicios", description: "Recargas y plataformas digitales.", icon: "⚡" },
                      
                    ].map((item) => (
                      <button
                        key={item.id}
                        onClick={() => {
                          navigateTo(item.id);
                          setIsCategoriesMenuOpen(false);
                        }}
                        className="group flex items-start gap-4 rounded-2xl border border-white/5 bg-white/[0.02] px-4 py-4 text-left transition hover:border-cyan-400/20 hover:bg-cyan-400/[0.06]"
                      >
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-black/40 text-lg shadow-inner transition group-hover:border-cyan-400/30 group-hover:bg-cyan-400/10">
                          {item.icon}
                        </div>
                        <div>
                          <div className="text-sm font-black text-white/90 transition group-hover:text-cyan-300">
                            {item.title}
                          </div>
                          <div className="mt-1 text-xs leading-relaxed text-white/45">
                            {item.description}
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {categories.map((item) => (
              <button
                key={item.id}
                onClick={() => navigateTo(item.id)}
                className={`rounded-2xl border px-4 py-2 text-sm font-bold transition ${
                  activePage === item.id
                    ? "border-cyan-400/50 bg-cyan-400 text-black"
                    : "border-white/10 bg-white/5 text-white/80 hover:bg-white/10 hover:text-white"
                }`}
              >
                {item.title}
              </button>
            ))}
          </div>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-2xl bg-green-500 px-5 py-3 text-sm font-bold text-black shadow-lg transition hover:scale-105"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="h-5 w-5" fill="currentColor" aria-hidden="true">
              <path d="M16 .4C7.6.4.8 7.2.8 15.6c0 2.7.7 5.2 2 7.4L.4 31.6l8.8-2.3c2.1 1.1 4.6 1.8 7.1 1.8 8.4 0 15.2-6.8 15.2-15.2S24.4.4 16 .4zm0 27.7c-2.3 0-4.5-.6-6.4-1.7l-.5-.3-5.2 1.4 1.4-5.1-.3-.5c-1.2-2-1.8-4.2-1.8-6.6 0-7 5.7-12.7 12.7-12.7s12.7 5.7 12.7 12.7-5.7 12.8-12.6 12.8zm7-9.6c-.4-.2-2.3-1.1-2.7-1.2-.4-.2-.7-.2-1 .2-.3.4-1.1 1.2-1.3 1.4-.2.2-.5.3-.9.1-.4-.2-1.6-.6-3-1.9-1.1-1-1.9-2.2-2.1-2.6-.2-.4 0-.6.2-.8.2-.2.4-.5.6-.7.2-.2.3-.4.5-.7.2-.3.1-.6 0-.8-.1-.2-1-2.5-1.4-3.4-.4-.9-.8-.7-1.1-.7h-.9c-.3 0-.8.1-1.2.6s-1.6 1.6-1.6 3.9 1.6 4.6 1.8 4.9c.2.3 3.1 4.7 7.6 6.4 1.1.5 2 .8 2.7 1 .1 0 .3.1.4.1.8.2 1.6.2 2.2.1.7-.1 2.3-.9 2.6-1.8.3-.9.3-1.6.2-1.8-.1-.2-.4-.3-.8-.5z" />
            </svg>
            Contactanos
          </a>
        </div>
      </header>

<div className="fixed top-[110px] left-0 w-full h-[4px] z-50 overflow-hidden">
  <div className="absolute inset-0 bg-[linear-gradient(90deg,#22d3ee,#38bdf8,#8b5cf6,#d946ef,#22d3ee)] bg-[length:200%_100%] animate-[rgbWave_2s_linear_infinite] shadow-[0_0_14px_rgba(168,85,247,0.9)]" />
</div>

<style>{`
@keyframes rgbWave {
  0% { background-position: 0% 50%; }
  100% { background-position: 200% 50%; }
}
`}</style>

<div className="h-[90px]" />

      {activePage !== "home" ? (
        activePage === "recargas-servicios" ? renderRechargeServicesPage() : activePage === "admin" ? renderAdminPage() : renderCategoryPage()
      ) : (
        <>
          <section className="relative overflow-hidden">
            <div className="relative h-[75vh] min-h-[520px] w-full">
              {heroSlides.map((slide, index) => (
                <div key={slide.title} className={`absolute inset-0 transition-all duration-1000 ${index === currentSlide ? "opacity-100 scale-100" : "pointer-events-none opacity-0 scale-105"}`}>
                  <img src={slide.image} alt={slide.title} className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.18),transparent_25%),radial-gradient(circle_at_left,rgba(168,85,247,0.16),transparent_30%)]" />
                </div>
              ))}
              <div className="absolute inset-0 z-10 mx-auto flex max-w-7xl items-center px-6">
                <div className="max-w-2xl">
                  <span className="mb-4 inline-block rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">Tu tienda gamer en Areguá - Caacupemí</span>
                  <h2 className="text-4xl font-black leading-tight md:text-6xl">{heroSlides[currentSlide].title}</h2>
                  <p className="mt-5 text-lg text-white/75 md:text-xl">{heroSlides[currentSlide].subtitle}</p>
                  <div className="mt-8 flex flex-wrap gap-4">
                    <a href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(heroSlides[currentSlide].message)}`} target="_blank" rel="noreferrer" className="rounded-2xl bg-green-500 px-6 py-3 font-bold text-black transition hover:scale-105">{heroSlides[currentSlide].buttonText}</a>
                    <a href="#productos" className="rounded-2xl border border-white/20 bg-white/5 px-6 py-3 font-bold transition hover:bg-white/10">Ver productos</a>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-3">
                {heroSlides.map((slide, index) => (
                  <button key={slide.title} onClick={() => setCurrentSlide(index)} className={`h-3 rounded-full transition-all ${index === currentSlide ? "w-10 bg-cyan-400" : "w-3 bg-white/40"}`} aria-label={`Ir al slide ${index + 1}`} />
                ))}
              </div>
            </div>
          </section>

          <section className="max-w-7xl mx-auto px-6 mt-10">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-purple-600/30 via-cyan-500/20 to-pink-500/30 p-8 shadow-2xl">
              <div className="absolute inset-0 animate-pulse opacity-20 bg-[radial-gradient(circle_at_30%_30%,#22d3ee,transparent_40%),radial-gradient(circle_at_70%_70%,#a855f7,transparent_40%)]" />
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <div className="inline-block rounded-full bg-red-500/20 px-4 py-2 text-xs font-bold text-red-300">Tiempo restante: {offerCountdown}</div>
                  <h2 className="text-3xl md:text-4xl font-black text-white mt-4">{offerData.title}</h2>
                  <p className="text-white/70 mt-2">{offerData.subtitle}</p>
                  <p className="text-2xl font-bold text-green-400 mt-3">{offerData.price}</p>
                </div>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-green-500 hover:bg-green-600 transition px-6 py-3 rounded-2xl text-white font-bold shadow-lg"
                >
                  Comprar por WhatsApp
                </a>
              </div>
            </div>
          </section>

          <section className="mx-auto max-w-7xl px-6 py-16">
            <div className="mb-10 text-center">
              <h3 className="text-3xl font-black md:text-4xl">¿Qué vas a encontrar en SKAY GAMES?</h3>
              <p className="mt-3 text-white/65">Todo lo que necesitás para jugar, equiparte o mantener tu consola en perfecto estado.</p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {categories.map((item) => (
                <button key={item.id} onClick={() => navigateTo(item.id)} className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 text-left shadow-xl transition hover:-translate-y-1">
                  <img src={item.image} alt={item.title} className="h-52 w-full object-cover" />
                  <div className="p-5">
                    <div className="mb-3 h-px w-full bg-gradient-to-r from-cyan-400/20 via-white/10 to-transparent" />
                    <div className="mb-3 inline-block rounded-full bg-cyan-400/15 px-3 py-1 text-xs font-bold text-cyan-300">Página</div>
                    <h4 className="text-xl font-bold">{item.title}</h4>
                    <p className="mt-2 text-sm text-white/70">{item.description}</p>
                    <div className="mt-4 inline-block rounded-2xl bg-cyan-400 px-4 py-2 text-sm font-bold text-black">Ir a la página</div>
                  </div>
                </button>
              ))}
            </div>
          </section>

          <section id="productos" className="bg-white/5 py-16">
            <div className="mx-auto max-w-7xl px-6">
              <div className="mb-10 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
                <div>
                  <h3 className="text-3xl font-black md:text-4xl">Productos destacados</h3>
                  <p className="mt-3 text-white/65">Estos son los productos que vos elegís destacar para vender más rápido desde el panel admin.</p>
                </div>
                <a href={whatsappLink} target="_blank" rel="noreferrer" className="rounded-2xl border border-green-400/40 bg-green-400/10 px-5 py-3 font-bold text-green-300 transition hover:bg-green-400/20">Consultar catálogo completo</a>
              </div>
              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                {featuredProducts.map((product) => (
                  <div key={product.id} className={productCardClass}>
                    <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-cyan-400/15 px-3 py-1 text-xs font-bold text-cyan-300 border border-cyan-400/20 shadow-[0_0_12px_rgba(34,211,238,0.10)] ml-5 mt-5 absolute z-10">
                      <span className="h-2 w-2 rounded-full bg-cyan-300 animate-pulse" />Destacado
                    </div>
                    {renderProductCard(product)}
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="mx-auto max-w-7xl px-6 py-16">
            <div className="mb-10 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
              <div>
                <h3 className="text-3xl font-black md:text-4xl">Combos destacados</h3>
                <p className="mt-3 text-white/65">Mostrá tus combos más llamativos con imágenes grandes que cambian automáticamente.</p>
              </div>
              <div className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-bold text-cyan-300">Ideal para combos y promos</div>
            </div>
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-2xl">
              <div className="relative h-[420px] w-full md:h-[500px]">
                {comboSlides.map((combo, index) => (
                  <div key={combo.id} className={`absolute inset-0 transition-all duration-1000 ${index === currentComboSlide ? "opacity-100 scale-100" : "pointer-events-none opacity-0 scale-105"}`}>
                    <img src={combo.image} alt={combo.title} className="h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/20" />
                  </div>
                ))}
                <div className="absolute inset-0 z-10 flex items-center px-8 md:px-12">
                  <div className="max-w-2xl">
                    <div className="mb-4 flex flex-wrap gap-3">
                      <div className="inline-block rounded-full bg-cyan-400/15 px-4 py-2 text-sm font-bold text-cyan-300">Combo destacado</div>
                      <div className="inline-block rounded-full bg-red-500/20 px-4 py-2 text-sm font-bold text-red-300">Promo limitada</div>
                    </div>
                    <h3 className="text-3xl font-black md:text-5xl">{comboSlides[currentComboSlide].title}</h3>
                    <p className="mt-4 text-base text-white/75 md:text-lg">{comboSlides[currentComboSlide].subtitle}</p>
                    <a href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(comboSlides[currentComboSlide].message)}`} target="_blank" rel="noreferrer" className="mt-6 inline-block rounded-2xl bg-green-500 px-6 py-3 font-bold text-black transition hover:scale-105">Consultar combo</a>
                  </div>
                </div>
                <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-3">
                  {comboSlides.map((combo, index) => (
                    <button key={combo.id} onClick={() => setCurrentComboSlide(index)} className={`h-3 rounded-full transition-all ${index === currentComboSlide ? "w-10 bg-cyan-400" : "w-3 bg-white/40"}`} aria-label={`Ir al combo ${index + 1}`} />
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="mx-auto max-w-7xl px-6 py-16">
            <div className="mb-10 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
              <div>
                <h3 className="text-3xl font-black md:text-4xl">Recién llegados</h3>
                <p className="mt-3 text-white/65">Acá se muestran automáticamente los últimos productos que vas cargando en el sistema.</p>
              </div>
              <div className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-bold text-cyan-300">Automático según fecha de carga</div>
            </div>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {latestProducts.map((product) => (
                <div key={product.id} className={productCardClass}>
                  <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-purple-500/15 px-3 py-1 text-xs font-bold text-purple-300 border border-purple-400/20 shadow-[0_0_12px_rgba(168,85,247,0.10)] ml-5 mt-5 absolute z-10">
                    <span className="h-2 w-2 rounded-full bg-purple-300 animate-pulse" />Nuevo ingreso
                  </div>
                  {renderProductCard(product, "Consultar ahora")}
                </div>
              ))}
            </div>
          </section>

          <section className="mx-auto max-w-7xl px-6 py-16">
            <div className="grid gap-10 md:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl">
                <h3 className="text-3xl font-black">Servicios del local</h3>
                <p className="mt-3 text-white/65">Además de vender productos, también ofrecés soluciones y atención técnica.</p>
                <div className="mt-6 grid gap-3">{services.map((service) => <div key={service} className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white/85">{service}</div>)}</div>
              </div>
              <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 to-purple-500/10 p-8 shadow-2xl">
                <h3 className="text-3xl font-black">Pedí rápido y fácil</h3>
                <p className="mt-3 text-white/70">Consultanos por stock, precios, combos, mantenimiento o recargas. Te respondemos directo por WhatsApp.</p>
                <div className="mt-8 space-y-4">
                  <div className="rounded-2xl border border-white/10 bg-black/30 p-4"><p className="text-sm text-white/60">Ubicación</p><p className="mt-1 text-lg font-bold">Areguá - Caacupemí</p></div>
                  <div className="rounded-2xl border border-white/10 bg-black/30 p-4"><p className="text-sm text-white/60">Atención personalizada</p><p className="mt-1 text-lg font-bold">Ventas, soporte y asesoramiento</p></div>
                </div>
                <a href={whatsappLink} target="_blank" rel="noreferrer" className="mt-8 inline-block rounded-2xl bg-cyan-400 px-6 py-4 font-bold text-black transition hover:scale-105">Escribir al WhatsApp</a>
              </div>
            </div>
          </section>
        </>
      )}

      <a
        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hola! Quiero hacer una consulta sobre SKAY GAMES.")}`}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-[500] flex items-center gap-3 rounded-full bg-green-500 px-5 py-4 font-bold text-black shadow-[0_0_30px_rgba(34,197,94,0.35)] transition duration-300 hover:scale-105 hover:shadow-[0_0_36px_rgba(34,197,94,0.50)]"
        aria-label="Abrir WhatsApp"
      >
        <span className="absolute -inset-1 -z-10 rounded-full bg-green-400/20 blur-xl animate-pulse" />
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="h-6 w-6" fill="currentColor" aria-hidden="true">
          <path d="M16 .4C7.6.4.8 7.2.8 15.6c0 2.7.7 5.2 2 7.4L.4 31.6l8.8-2.3c2.1 1.1 4.6 1.8 7.1 1.8 8.4 0 15.2-6.8 15.2-15.2S24.4.4 16 .4zm0 27.7c-2.3 0-4.5-.6-6.4-1.7l-.5-.3-5.2 1.4 1.4-5.1-.3-.5c-1.2-2-1.8-4.2-1.8-6.6 0-7 5.7-12.7 12.7-12.7s12.7 5.7 12.7 12.7-5.7 12.8-12.6 12.8zm7-9.6c-.4-.2-2.3-1.1-2.7-1.2-.4-.2-.7-.2-1 .2-.3.4-1.1 1.2-1.3 1.4-.2.2-.5.3-.9.1-.4-.2-1.6-.6-3-1.9-1.1-1-1.9-2.2-2.1-2.6-.2-.4 0-.6.2-.8.2-.2.4-.5.6-.7.2-.2.3-.4.5-.7.2-.3.1-.6 0-.8-.1-.2-1-2.5-1.4-3.4-.4-.9-.8-.7-1.1-.7h-.9c-.3 0-.8.1-1.2.6s-1.6 1.6-1.6 3.9 1.6 4.6 1.8 4.9c.2.3 3.1 4.7 7.6 6.4 1.1.5 2 .8 2.7 1 .1 0 .3.1.4.1.8.2 1.6.2 2.2.1.7-.1 2.3-.9 2.6-1.8.3-.9.3-1.6.2-1.8-.1-.2-.4-.3-.8-.5z" />
        </svg>
        <span className="hidden sm:inline">WhatsApp</span>
      </a>

      <footer className="border-t border-white/10 bg-black px-6 py-8 text-center text-sm text-white/50">
        <div className="mx-auto max-w-7xl">
          <h3 className="mb-4 text-xl font-bold text-white">SKAY GAMES</h3>
          <p className="mb-6 text-white/60">Seguinos y escribinos directo desde nuestras redes.</p>
          <div className="mb-6 flex flex-wrap items-center justify-center gap-4">
            <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer" className="rounded-xl bg-green-500 px-5 py-2 font-semibold text-white transition hover:bg-green-600">WhatsApp</a>
            <a href="https://facebook.com/" target="_blank" rel="noreferrer" className="rounded-xl bg-blue-600 px-5 py-2 font-semibold text-white transition hover:bg-blue-700">Facebook</a>
            <a href="https://instagram.com/" target="_blank" rel="noreferrer" className="rounded-xl bg-gradient-to-r from-pink-500 to-purple-500 px-5 py-2 font-semibold text-white transition hover:opacity-90">Instagram</a>
          </div>
          © 2026 SKAY GAMES · Todos los derechos reservados
        </div>
      </footer>
    </div>
  );
}
