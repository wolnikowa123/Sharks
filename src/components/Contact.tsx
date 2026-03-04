import React from "react";
import styled from "styled-components";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Badge } from "./Pricing";
import { Phone, Mail, Instagram, Facebook } from "lucide-react";
import basketballIcon from "@/assets/Sharks_Pomorze_basket-removebg-preview.png";
import volleyballIcon from "@/assets/Sharks_Pomorze_valleyball_color-removebg-preview.png";
import footballIcon from "@/assets/Sharks_Pomorze_soccer_v1-removebg-preview.png";
const Wrap = styled.section`
  padding: 60px 20px;
  background: radial-gradient(
    1600px 900px at 20% 60%,
    rgba(15, 124, 143, 0.5) 0%,
    rgba(15, 124, 143, 0) 40%,
    transparent 92%
  );
`;

const Inner = styled.div`
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
`;

const InnerContent = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 20px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.form`
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.05);
  border-radius: 18px;
  padding: 16px;
  display: grid;
  gap: 10px;

  input,
  textarea {
    width: 100%;
    padding: 12px 14px;
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    background: rgba(0, 0, 0, 0.3);
    color: #fff;
  }

  button {
    all: unset;
    cursor: pointer;
    padding: 12px 16px;
    border-radius: 999px;
    background: #0f7c8f;
    text-align: center;
    font-weight: 700;
    transition: 0.2s ease;
  }

  button:hover {
    filter: brightness(1.05);
    transform: translateY(-2px);
  }
`;

const Info = styled.div`
  display: grid;
  gap: 10px;
  align-content: start;
`;

const Box = styled.div`
  padding: 14px;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.12);
`;

/* wiersz jako przycisk (telefon / email) */
const RowButton = styled.button`
  all: unset;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 6px 0;
  color: #fff;
  cursor: pointer;
`;

/* wiersz jako link (sociale) */
const RowLink = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 6px 0;
  color: #fff;
  text-decoration: none;
`;

const Icon = styled.div`
  min-width: 36px;
  height: 36px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CopyNote = styled.div`
  margin-top: 6px;
  font-size: 11px;
  opacity: 0.85;
  color: #fff;
`;

export default function Contact() {
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState(
    "Chcę zapisać dziecko na trening próbny.",
  );

  const [copied, setCopied] = React.useState<null | "email" | "phone">(null);

  const publicEmail = "akademiakoszykowki@gmail.com";
  const publicPhone = "+48 506 677 800";
  const phoneHref = "+48506677800";

  async function submit(e: React.FormEvent) {
    e.preventDefault();

    const params = new URLSearchParams({
      name,
      phone,
      email,
      message,
    });
    // https://script.google.com/home/projects/1KhQKmN-rN5SJxVyTxMyHz9peiosa2kA_S853Zm8AXsiWCxeVkoZjU6vI/edit strona ze skryptem
    await fetch(
      "https://script.google.com/macros/s/AKfycbwt8emQdpEauXHiZKbaN1pB0J0LuMeukE5DjosUBxFtZ3-ZqoF2K67DsmNoaCnTdIteDA/exec",
      {
        method: "POST",
        mode: "no-cors", // ⬅️ KLUCZ
        body: params,
      },
    );

    // TU ZAWSZE ZAKŁADASZ SUKCES
    toast.success("Wysłano! Odezwzemy się wkrótce");

    setName("");
    setPhone("");
    setEmail("");
    setMessage("");
  }

  const isMobile = () => {
    if (typeof navigator === "undefined") return false;
    return /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
  };

  const showCopied = (field: "email" | "phone") => {
    setCopied(field);
    window.setTimeout(() => setCopied(null), 1600);
  };

  const copyToClipboard = (value: string, field: "email" | "phone") => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(value);
      showCopied(field);
    } else {
      const textarea = document.createElement("textarea");
      textarea.value = value;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      showCopied(field);
    }
  };

  const handleEmailClick = () => {
    copyToClipboard(publicEmail, "email");
  };

  const handlePhoneClick = () => {
    if (isMobile()) {
      window.location.href = `tel:${phoneHref}`;
    } else {
      copyToClipboard(publicPhone, "phone");
    }
  };

  return (
    <Wrap id="kontakt">
      <Inner>
        <Badge style={{ marginBottom: "30px" }}>Kontakt</Badge>

        <InnerContent>
          <Card id="zapis" onSubmit={submit}>
            <h2 style={{ marginBottom: "-5px" }}>Kontakt</h2>
            <p>
              Umów trening z Sharks i daj dziecku szansę, na korzyści ze sportu
              bez presji.
              <br /> Zostaw nam swój numer. Oddzwonimy do Ciebie w ciągu 2
              godzin
            </p>

            <input
              placeholder="Imię i nazwisko"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              placeholder="Telefon"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Email (opcjonalnie)"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />

            <button type="submit">Wyślij</button>
          </Card>

          <Info>
            <Box>
              <strong>Kontakt</strong>

              {/* telefon – mobile: dzwoni, desktop: kopiuje */}
              <RowButton type="button" onClick={handlePhoneClick}>
                <Icon>
                  <Phone size={18} />
                </Icon>
                {publicPhone}
              </RowButton>

              {/* email – zawsze kopiuje */}
              <RowButton type="button" onClick={handleEmailClick}>
                <Icon>
                  <Mail size={18} />
                </Icon>
                <span style={{ wordBreak: "break-all" }}>{publicEmail}</span>
              </RowButton>

              <RowLink
                href="https://www.instagram.com/gdyniasharksbasketball/"
                target="_blank"
                rel="noreferrer"
                title="Instagram Gdynia Sharks Basketball"
              >
                <Icon>
                  <Instagram size={18} />
                </Icon>
                Instagram — @gdyniasharksbasketball
              </RowLink>

              <RowLink
                href="https://www.facebook.com/sharkstravel"
                target="_blank"
                rel="noreferrer"
                title="Facebook Sharks Travel"
              >
                <Icon>
                  <Facebook size={18} />
                </Icon>
                Facebook — Sharks Travel
              </RowLink>

              {copied && (
                <CopyNote>
                  {copied === "email"
                    ? "Skopiowano adres e-mail do schowka."
                    : "Skopiowano numer telefonu do schowka."}
                </CopyNote>
              )}
            </Box>

            {/* Logotypy sekcji */}
            <Box>
              <strong>Logotypy sekcji</strong>
              <div
                style={{
                  display: "flex",
                  gap: 10,
                  marginTop: 10,
                  flexWrap: "wrap",
                }}
              >
                <div
                  style={{
                    width: 64,
                    height: 64,
                    background: "rgba(255,255,255,.1)",
                    borderRadius: 12,
                    display: "grid",
                    placeItems: "center",
                    fontSize: 12,
                  }}
                >
                  <img
                    src={basketballIcon}
                    width={60}
                    height={60}
                    alt=""
                    style={{ marginTop: "4px" }}
                  />
                </div>
                <div
                  style={{
                    width: 64,
                    height: 64,
                    background: "rgba(255,255,255,.1)",
                    borderRadius: 12,
                    display: "grid",
                    placeItems: "center",
                    fontSize: 12,
                  }}
                >
                  <img
                    src={volleyballIcon}
                    width={60}
                    height={60}
                    alt=""
                    style={{ marginTop: "4px" }}
                  />
                </div>
                <div
                  style={{
                    width: 64,
                    height: 64,
                    background: "rgba(255,255,255,.1)",
                    borderRadius: 12,
                    display: "grid",
                    placeItems: "center",
                    fontSize: 12,
                  }}
                >
                  <img
                    src={footballIcon}
                    width={60}
                    height={60}
                    alt=""
                    style={{ marginTop: "4px" }}
                  />
                </div>
              </div>
            </Box>
          </Info>
        </InnerContent>
      </Inner>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Wrap>
  );
}
