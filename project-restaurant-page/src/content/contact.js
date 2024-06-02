export const contact = () => {
  const contactTextContent = [
    "Get in Touch, we would love to hear from you! Whether you have a question, want to make a reservation, or just want to give us feedback, please reach out.",
    "Address: <br> [Restaurant Name] <br> 1234 Culinary Street <br> [City], [Postcode]",
    "Phone: <br> (123) 456-7890",
    "Email: <br> info@[restaurantname].com",
    "Opening Hours: <br> - Monday to Friday: 11:00 AM - 10:00 PM <br> - Saturday: 12:00 PM - 11:00 PM <br> - Sunday: 12:00 PM - 9:00 PM",
    "For reservations, please call us or use our online booking form. We look forward to welcoming you to [Restaurant Name]!",
  ];

  const contWrapper = document.createElement("div");
  contWrapper.id = "content-wrapper";

  const title = document.createElement("div");
  title.id = "title";
  title.classList.add("info");
  title.textContent = "Contact";

  contWrapper.appendChild(title);

  for (let i = 0; i < contactTextContent.length; i++) {
    const info = document.createElement("div");
    info.id = `info${i + 1}`;
    info.classList.add("info");
    info.innerHTML = contactTextContent[i];

    contWrapper.appendChild(info);
  }

  return contWrapper;
};
