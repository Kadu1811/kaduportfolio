import { motion } from "framer-motion";

import qr_code from "../assets/whats_qrcode.jpg";
import { Button } from "antd";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const Contact = () => {
  const whatsappNumber = "+5592986343024";
  const email = "kaduplentis@gmail.com";
  const linkedinProfile = "https://www.linkedin.com/in/kaduplentis";

  const buttonStyle = {
    width: "200px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "8px",
    transition: "background-color 0.3s, color 0.3s",
    fontSize: "16px",
  };

  const buttons = [
    {
      href: `https://wa.me/${whatsappNumber}`,
      icon: <FaWhatsapp />,
      label: "WhatsApp",
      color: "#25D366",
      hoverColor: "#1DA851",
    },
    {
      href: `mailto:${email}?subject=Contato&body=Hello Karlos,`,
      icon: <MdOutlineEmail />,
      label: "E-mail",
      color: "#0072C6",

      hoverColor: "#005FA3",
    },
    {
      href: linkedinProfile,
      icon: <FaLinkedin />,
      label: "LinkedIn",
      color: "#0077B5",
      hoverColor: "#005A8C",
    },
  ];

  const currentTime = new Date();

  const year = currentTime.getFullYear();

  return (
    <>
      <motion.div
        className="flex items-center justify-center"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
      >
        <div className="mb-20 flex w-full flex-col items-center gap-4 rounded-2xl border border-stone-900 bg-black p-10 shadow-2xl lg:w-2/6 ">
          <h2 className="mb-4 text-center text-4xl">Contact Me</h2>

          <img
            src={qr_code}
            alt="Karlos Plentis"
            className="rounded-lg"
            width={200}
            height={200}
          />

          <p>or</p>

          {buttons.map(({ href, icon, label, color, hoverColor }, index) => (
            <Button
              key={index}
              href={href}
              target="_blank"
              icon={icon}
              style={{
                ...buttonStyle,
                backgroundColor: color,
                color: "#fff",
                borderColor: color,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = hoverColor;
                e.currentTarget.style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = color;
                e.currentTarget.style.color = "#fff";
              }}
            >
              {label}
            </Button>
          ))}
        </div>
      </motion.div>

      <footer className="mb-6 flex items-center justify-center">
        Karlos Plentis, {year}
      </footer>
    </>
  );
};

export { Contact };
