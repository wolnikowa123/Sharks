import React from "react";
import { Section, Container, Eyebrow } from "@/ui/primitives";
import styled from "styled-components";
import { GalleryThumbnails, X, ChevronLeft, ChevronRight } from "lucide-react";
import { theme } from "../theme";
import { Badge } from "./Pricing";

/**
 * AUTOMATYCZNE WCIĄGNIĘCIE WSZYSTKICH PLIKÓW IMG_* Z FOLDERU assets
 */
const imageModules = import.meta.glob(
  "../assets/IMG_*.{jpg,jpeg,JPG,png,webp}",
  { eager: true },
);

// zbudujemy tablicę z src + nazwą pliku
const imageEntries = Object.keys(imageModules)
  .sort()
  .map((path) => {
    const mod = imageModules[path] as { default: string };
    const fileName = path.split("/").pop() || path; // np. "IMG_2342.jpg"
    return {
      src: mod.default,
      fileName,
    };
  });

const images = imageEntries.map((e) => e.src);

/**
 * NUMERY ZDJĘĆ, KTÓRE MAJĄ BYĆ WIDOCZNE NA STRONIE GŁÓWNEJ
 * np. IMG_2342.jpg → wpisujesz "2342"
 */
const featuredNumbers = [
  "2342",
  "2394",
  "2503",
  "2280",
  "2637",
  "2592",
  "2427",
  "2398",
];

// indeksy w `images`, które są „featured”
const featuredIndices = imageEntries.reduce<number[]>((acc, entry, index) => {
  const match = featuredNumbers.some((num) =>
    entry.fileName.includes(`IMG_${num}`),
  );
  if (match) acc.push(index);
  return acc;
}, []);

// src widocznych zdjęć na stronie głównej (w kolejności z featuredNumbers)
const visibleImages = featuredNumbers
  .map((num) => {
    const idx = imageEntries.findIndex((e) =>
      e.fileName.includes(`IMG_${num}`),
    );
    return idx === -1 ? null : { src: images[idx], index: idx };
  })
  .filter((item): item is { src: string; index: number } => item !== null);

const Grid = styled.div`
  margin-top: 16px;
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(2, 1fr);

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 14px;
  }
`;

// button zamiast <a>, żeby otwierać fullscreen
const Item = styled.button`
  all: unset;
  position: relative;
  overflow: hidden;
  border-radius: 16px;
  border: 2px solid rgba(15, 124, 143, 0.35); /* teal */
  display: block;
  cursor: pointer;

  img {
    width: 100%;
    height: 155px;
    object-fit: cover;
    transition: transform 0.25s ease;
    display: block;
  }

  &:hover img {
    transform: scale(1.05);
  }

  /* 📱 Na mobilce pokazuj tylko pierwsze 4 zdjęcia */
  @media (max-width: 767px) {
    &:nth-child(n + 5) {
      display: none;
    }
  }
`;

const More = styled.div`
  height: 155px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 6px;
  font-size: 14px;
  font-weight: 700;
  border: 2px dashed rgba(15, 124, 143, 0.35); /* teal */
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: rgba(15, 124, 143, 0.08);
  }
`;

/* MODAL z miniaturkami */
const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.65);
  backdrop-filter: blur(6px);
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 60px 20px;
  overflow-y: auto;
`;

const ModalBox = styled.div`
  max-width: 1100px;
  width: 100%;
  background: #fff;
  border-radius: 22px;
  padding: 24px 24px 26px;
  box-shadow: 0 40px 80px rgba(0, 0, 0, 0.45);
  position: relative;
`;

const ModalTitle = styled.div`
  font-weight: 700;
  font-size: 18px;
  margin-bottom: 16px;
  color: ${({ theme }) => theme.colors.teal};
`;

// tylko miniaturki w modalu
const ModalGrid = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(3, 1fr);

  @media (min-width: 768px) {
    gap: 12px;
    grid-template-columns: repeat(4, 1fr);
  }
`;

const ThumbBtn = styled.button<{ active: boolean }>`
  all: unset;
  cursor: pointer;
  border-radius: 12px;
  overflow: hidden;
  border: 2px solid
    ${({ active, theme }) =>
      active ? theme.colors.teal : "rgba(0, 0, 0, 0.08)"};
  box-shadow: ${({ active }) =>
    active ? "0 0 0 1px rgba(15,124,143,0.35)" : "none"};
  transition:
    transform 0.15s ease,
    border-color 0.15s ease,
    box-shadow 0.15s ease;

  img {
    width: 100%;
    height: 110px;
    object-fit: cover;
    display: block;
  }

  &:hover {
    transform: translateY(-1px);
  }
`;

const CloseBtn = styled.button`
  all: unset;
  position: fixed;
  top: 22px;
  right: 22px;
  cursor: pointer;
  padding: 8px;
  border-radius: 14px;
  background: rgba(0, 0, 0, 0.1);

  &:hover {
    background: rgba(0, 0, 0, 0.2);
  }
`;

/* FULLSCREEN viewer jak w telefonie */
const FullscreenOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.95);
  z-index: 10000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FullscreenImageBox = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FullscreenImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  border-radius: 8px;
`;

const FullscreenClose = styled.button`
  all: unset;
  position: absolute;
  top: 18px;
  right: 18px;
  cursor: pointer;
  padding: 8px;
  border-radius: 999px;
  background: rgba(0, 0, 0, 0.7);
  color: #fff;

  &:hover {
    background: rgba(0, 0, 0, 0.9);
  }
`;

const ArrowButton = styled.button`
  all: unset;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  padding: 12px;
  border-radius: 999px;
  background: rgba(0, 0, 0, 0.6);
  color: #fff;

  &:hover {
    background: rgba(0, 0, 0, 0.9);
  }

  @media (max-width: 480px) {
    padding: 8px;
  }
`;

const ArrowLeft = styled(ArrowButton)`
  left: 16px;
`;

const ArrowRight = styled(ArrowButton)`
  right: 16px;
`;

const Counter = styled.div`
  position: absolute;
  bottom: 16px;
  left: 50%;
  transform: translateX(-50%);
  color: #fff;
  font-size: 14px;
  padding: 6px 12px;
  border-radius: 999px;
  background: rgba(0, 0, 0, 0.5);
`;

const LoadingSpinner = styled.div`
  display: inline-block;
  width: 40px;
  height: 40px;
  border: 3px solid rgba(0, 0, 0, 0.15);
  border-top-color: ${({ theme }) => theme.colors.teal};
  border-radius: 50%;
  animation: spin 0.8s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

const LoadingWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(6px);
  border-radius: 22px;
  z-index: 100;
`;

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-top: 24px;
  padding-top: 16px;
  border-top: 1px solid rgba(0, 0, 0, 0.08);
`;

const PaginationBtn = styled.button<{ active?: boolean }>`
  all: unset;
  padding: 4px 8px;
  border-radius: 4px;
  color: ${({ active, theme }) => (active ? "#000" : theme.colors.teal)};
  font-weight: ${({ active }) => (active ? 600 : 500)};
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    color: #000;
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;

    &:hover {
      color: ${({ theme }) => theme.colors.teal};
    }
  }
`;

const Title = styled.h2`
  font-size: clamp(28px, 5.2vw, 64px);
  line-height: 1.05;
  margin: 14px 0 8px;
`;
const Lead = styled.p`
  margin: 0 0 26px;
  opacity: 0.9;
  font-size: clamp(16px, 2.2vw, 20px);
`;

export default function Gallery() {
  const [open, setOpen] = React.useState(false); // modal z miniaturkami
  const [fullscreenIndex, setFullscreenIndex] = React.useState<number | null>(
    null,
  ); // full screen viewer
  const [loadingImages, setLoadingImages] = React.useState<Set<number>>(
    new Set(Array.from({ length: images.length }, (_, i) => i)),
  ); // track which images are still loading
  const [currentPage, setCurrentPage] = React.useState(1); // pagination

  // 4 rows: 3 cols na mobile, 4 cols na desktop
  const ITEMS_PER_PAGE =
    typeof window !== "undefined" && window.innerWidth >= 768 ? 16 : 12;

  // ESC: najpierw zamknij fullscreen, potem cały modal
  React.useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (fullscreenIndex !== null) {
          setFullscreenIndex(null);
        } else {
          setOpen(false);
        }
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [fullscreenIndex]);

  // blokujemy scroll tła gdy modal albo fullscreen otwarty
  React.useEffect(() => {
    if (open || fullscreenIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open, fullscreenIndex]);

  const openModal = () => {
    setOpen(true);
  };

  const openFullscreen = (index: number) => {
    setFullscreenIndex(index);
  };

  const closeFullscreen = () => {
    setFullscreenIndex(null);
  };

  const goPrev = () => {
    setFullscreenIndex((prev) =>
      prev === null ? 0 : (prev - 1 + images.length) % images.length,
    );
  };

  const goNext = () => {
    setFullscreenIndex((prev) =>
      prev === null ? 0 : (prev + 1) % images.length,
    );
  };

  const handleImageLoaded = (index: number) => {
    setLoadingImages((prev) => {
      const next = new Set(prev);
      next.delete(index);
      return next;
    });
  };

  // Paginacja
  const totalPages = Math.ceil(images.length / ITEMS_PER_PAGE);
  const startIdx = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIdx = startIdx + ITEMS_PER_PAGE;
  const paginatedImages = images.slice(startIdx, endIdx);

  // Resetuj stronę jeśli zamknąć modal
  React.useEffect(() => {
    if (!open) {
      setCurrentPage(1);
    }
  }, [open]);

  // Preloaduj wszystkie obrazy gdy otwiera się modal
  React.useEffect(() => {
    if (open) {
      setLoadingImages(
        new Set(Array.from({ length: images.length }, (_, i) => i)),
      );

      // Preload all images
      images.forEach((src, index) => {
        const img = new Image();
        img.onload = () => handleImageLoaded(index);
        img.src = src;
      });
    }
  }, [open]);

  return (
    <Section id="galeria" style={{ background: "transparent" }}>
      <Container>
        <Badge>Galeria</Badge>
        <Title>Treningi i campy</Title>
        <Lead>
          Zobacz, jak dzieci dobrze bawią się na treningach z Sharks! <br />
          Zdjęcia z treningów i wyjazdów znajdziesz na naszych social mediach{" "}
          <a
            href="https://www.instagram.com/sharkstravel.pl/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "rgb(23, 182, 210)" }}
          >
            @sharkstravel.pl
          </a>
          !
        </Lead>

        <Grid>
          {visibleImages.map(({ src, index }) => (
            <Item key={index} onClick={() => openFullscreen(index)}>
              <img src={src} alt="" loading="lazy" />
            </Item>
          ))}

          <More onClick={openModal}>
            <GalleryThumbnails size={28} color={theme.colors.teal} />
            pokaż wszystkie
          </More>
        </Grid>

        {/* MODAL z miniaturkami */}
        {open && (
          <ModalOverlay onClick={() => setOpen(false)}>
            <ModalBox onClick={(e) => e.stopPropagation()}>
              <ModalTitle>Galeria zdjęć</ModalTitle>

              {loadingImages.size > 0 && (
                <LoadingWrapper>
                  <LoadingSpinner />
                </LoadingWrapper>
              )}

              <ModalGrid>
                {paginatedImages.map((src, i) => {
                  const actualIndex = startIdx + i;
                  return (
                    <ThumbBtn
                      key={actualIndex}
                      active={actualIndex === fullscreenIndex}
                      onClick={() => openFullscreen(actualIndex)}
                    >
                      <img
                        src={src}
                        alt=""
                        loading="lazy"
                        onLoad={() => handleImageLoaded(actualIndex)}
                      />
                    </ThumbBtn>
                  );
                })}
              </ModalGrid>

              {totalPages > 1 && (
                <PaginationWrapper>
                  <PaginationBtn
                    onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                    disabled={currentPage === 1}
                  >
                    ←
                  </PaginationBtn>
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                    (page) => (
                      <PaginationBtn
                        key={page}
                        active={page === currentPage}
                        onClick={() => setCurrentPage(page)}
                      >
                        {page}
                      </PaginationBtn>
                    ),
                  )}
                  <PaginationBtn
                    onClick={() =>
                      setCurrentPage((p) => Math.min(totalPages, p + 1))
                    }
                    disabled={currentPage === totalPages}
                  >
                    →
                  </PaginationBtn>
                </PaginationWrapper>
              )}
            </ModalBox>

            <CloseBtn onClick={() => setOpen(false)}>
              <X size={26} />
            </CloseBtn>
          </ModalOverlay>
        )}

        {/* FULLSCREEN viewer */}
        {fullscreenIndex !== null && (
          <FullscreenOverlay onClick={closeFullscreen}>
            <FullscreenImageBox onClick={(e) => e.stopPropagation()}>
              <FullscreenImage src={images[fullscreenIndex]} alt="" />

              <FullscreenClose onClick={closeFullscreen}>
                <X size={26} />
              </FullscreenClose>

              {images.length > 1 && (
                <>
                  <ArrowLeft onClick={goPrev}>
                    <ChevronLeft size={28} />
                  </ArrowLeft>
                  <ArrowRight onClick={goNext}>
                    <ChevronRight size={28} />
                  </ArrowRight>
                </>
              )}

              <Counter>
                {fullscreenIndex + 1} / {images.length}
              </Counter>
            </FullscreenImageBox>
          </FullscreenOverlay>
        )}
      </Container>
    </Section>
  );
}
