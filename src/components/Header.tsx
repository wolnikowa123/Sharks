import React from "react";
import styled from "styled-components";
import logo from "@/assets/Sharks_Pomorze_logo-removebg-preview.png";
import { Link } from "react-router-dom";

const Bar = styled.header`
  position: fixed;
  top: 0;
  z-index: 5000;
  width: 100vw;
  backdrop-filter: blur(8px);
  background: rgba(10, 15, 24, 0.6);
  border-bottom: 2px solid rgba(152, 149, 149, 0.26);
`;

const Inner = styled.div`
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  gap: 16px;
  justify-content: space-between;
`;

const Nav = styled.nav`
  display: flex;
  gap: 18px;
  flex-wrap: wrap;

  a {
    opacity: 0.9;
    cursor: pointer;
  }

  a:hover {
    opacity: 1;
    text-decoration: underline;
    text-underline-offset: 4px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const CTA = styled.a`
  background: ${({ theme }) => theme.colors.teal};
  color: #fff;
  padding: 10px 16px;
  border-radius: ${({ theme }) => theme.radius.xl};
  font-weight: 600;
  transition: transform 0.15s ease;

  &:hover {
    transform: translateY(-1px);
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Burger = styled.button<{ open: boolean }>`
  display: none;

  @media (max-width: 768px) {
    all: unset;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 34px;
    height: 34px;
    cursor: pointer;
    background: transparent;
  }

  span {
    display: block;
    width: 18px;
    height: 2px;
    border-radius: 999px;
    background: #fff;
    position: relative;
    transition:
      transform 0.25s ease,
      opacity 0.2s ease;
  }

  span::before,
  span::after {
    content: "";
    position: absolute;
    left: 0;
    width: 18px;
    height: 2px;
    border-radius: 999px;
    background: #fff;
    transition:
      transform 0.25s ease,
      top 0.25s ease,
      opacity 0.2s ease;
  }

  span::before {
    top: -5px;
  }

  span::after {
    top: 5px;
  }

  ${({ open }) =>
    open &&
    `
    span {
      transform: rotate(45deg);
    }
    span::before {
      top: 0;
      transform: rotate(-90deg);
    }
    span::after {
      top: 0;
      opacity: 0;
    }
  `}
`;

const MobileOverlay = styled.div<{ open: boolean }>`
  @media (max-width: 768px) {
    position: fixed;
    inset: 0;
    z-index: 4000;
    background: rgba(0, 0, 0, 0.55);
    opacity: ${({ open }) => (open ? 1 : 0)};
    pointer-events: ${({ open }) => (open ? "auto" : "none")};
    transition: opacity 0.2s ease;
  }

  @media (min-width: 769px) {
    display: none;
  }
`;

const MobileMenu = styled.nav<{ open: boolean }>`
  @media (max-width: 768px) {
    position: fixed;
    top: 56px;
    right: 0;
    width: 60vw;
    max-width: 360px;
    z-index: 4500;
    background: rgba(10, 15, 24, 0.98);
    border-left: 1px solid rgba(255, 255, 255, 0.08);
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    transform: translateY(${({ open }) => (open ? "0" : "-8px")});
    opacity: ${({ open }) => (open ? 1 : 0)};
    pointer-events: ${({ open }) => (open ? "auto" : "none")};
    transition:
      opacity 0.2s ease,
      transform 0.2s ease;

    padding: 10px 16px 16px;
    display: flex;
    flex-direction: column;
    gap: 10px;

    a {
      color: #fff;
      opacity: 0.9;
      padding: 6px 0;
      text-decoration: none;
      cursor: pointer;
    }

    a:hover {
      opacity: 1;
    }
  }

  @media (min-width: 769px) {
    display: none;
  }
`;

const MobileCTA = styled.a`
  background: ${({ theme }) => theme.colors.teal};
  color: #fff;
  padding: 10px 16px;
  border-radius: ${({ theme }) => theme.radius.xl};
  font-weight: 600;
  text-align: center;
`;

// ==============================
//   COMPONENT
// ==============================

export default function Header() {
  const [open, setOpen] = React.useState(false);

  const close = () => setOpen(false);

  // ⭐ Smooth scroll z offsetem -35px (desktop + mobile)
  const scrollToWithOffset = (id: string) => {
    const el = document.querySelector(id);
    if (!el) return;

    const y = el.getBoundingClientRect().top + window.pageYOffset - 35;

    window.scrollTo({ top: y, behavior: "smooth" });

    close(); // zamyka menu mobilne
  };

  return (
    <Bar>
      <Inner>
        <Link to="/" onClick={close}>
          <img src={logo} width={60} alt="Sharks Travel" />
        </Link>

        {/* DESKTOP NAV */}
        <Nav>
          <a
            href="#harmonogram"
            onClick={(e) => {
              e.preventDefault();
              scrollToWithOffset("#harmonogram");
            }}
          >
            Harmonogram
          </a>

          <a
            href="#trenerzy"
            onClick={(e) => {
              e.preventDefault();
              scrollToWithOffset("#trenerzy");
            }}
          >
            Trenerzy
          </a>

          <a
            href="#opinie"
            onClick={(e) => {
              e.preventDefault();
              scrollToWithOffset("#opinie");
            }}
          >
            Opinie
          </a>

          <a
            href="#cennik"
            onClick={(e) => {
              e.preventDefault();
              scrollToWithOffset("#cennik");
            }}
          >
            Cennik
          </a>

          <a
            href="#kontakt"
            onClick={(e) => {
              e.preventDefault();
              scrollToWithOffset("#kontakt");
            }}
          >
            Kontakt
          </a>
        </Nav>

        <CTA
          href="#zapis"
          onClick={(e) => {
            e.preventDefault();
            scrollToWithOffset("#zapis");
          }}
        >
          Zapisz dziecko
        </CTA>

        <Burger
          type="button"
          open={open}
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Zamknij menu" : "Otwórz menu"}
        >
          <span />
        </Burger>
      </Inner>

      {/* MOBILE OVERLAY */}
      <MobileOverlay open={open} onClick={close} />

      {/* MOBILE MENU */}
      <MobileMenu open={open}>
        <a
          href="#harmonogram"
          onClick={(e) => {
            e.preventDefault();
            scrollToWithOffset("#harmonogram");
          }}
        >
          Harmonogram
        </a>

        <a
          href="#trenerzy"
          onClick={(e) => {
            e.preventDefault();
            scrollToWithOffset("#trenerzy");
          }}
        >
          Trenerzy
        </a>

        <a
          href="#opinie"
          onClick={(e) => {
            e.preventDefault();
            scrollToWithOffset("#opinie");
          }}
        >
          Opinie
        </a>

        <a
          href="#cennik"
          onClick={(e) => {
            e.preventDefault();
            scrollToWithOffset("#cennik");
          }}
        >
          Cennik
        </a>

        <a
          href="#kontakt"
          onClick={(e) => {
            e.preventDefault();
            scrollToWithOffset("#kontakt");
          }}
        >
          Kontakt
        </a>

        <MobileCTA
          href="#zapis"
          onClick={(e) => {
            e.preventDefault();
            scrollToWithOffset("#zapis");
          }}
        >
          Zapisz dziecko
        </MobileCTA>
      </MobileMenu>
    </Bar>
  );
}
