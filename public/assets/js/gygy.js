const testimonials = [
  {
    name: "Lower Grouond Floor",
    photo:
      "assets/img/Lower-Ground-Floor.png",
    text:
      "• Typical use: Back-of-house, storage + smaller retail formats, bulk/discount stores, hypermarket support.Visibility & footfall: Lower than street level; strong if the mall design funnels footfall from entrances and parking. Good for price-sensitive retail and inventory-heavy tenants. (d3ai7zxpseytqr.cloudfront.net)Price / cost drivers: LGF often carries PLCs for frontage and parking; power & higher KVA requirements may apply. Check EEC/IFMS charges. (Scribd)Investment take: Lower entry price than GF; slower walk-in but lower rents — good for investors seeking lower ticket-size and longer-term capital appreciation rather than immediate high rent."
  },
  {
    name: "Ground Floor ",
    // position: "Software Engineer",
    photo: "assets/img/Ground-Floor.jpg",
    text:
    "•Typical use: Flagship stores, premium boutiques, banks, flagship F&B with dine-in, salons.Visibility & footfall: Highest — best frontage, direct street access and main corridors. Highest walk-in, highest conversion. (d3ai7zxpseytqr.cloudfront.net)Price: Brochure/price-lists show GF among the costliest slabs (developer quoted higher rate for ground/front units). Confirm current PLCs & corner premiums. (Scribd) •	Investment take: Best for rental income and brand tenants; highest ticket-size and competition. Ideal if you need fast leasing and stable footfall."
},
{
    name: "First Floor",
    // position: "Data Entry",
    photo: "assets/img/First-Floor.jpg",
    text:
      "•	Typical use: Apparel stores, showrooms, specialty retail, clinics, service outlets.Visibility & footfall: Good — if vertical circulation (escalators/elevators) is well-placed; often receives steady afternoon-evening traffic. Price per sq ft on brochure is lower than GF. (Scribd) Investment take: Best compromise between ticket size and rental prospects. Attractive for investors who want lower price than GF but decent leasing prospects."
  },
  {
    name: "Second Floor ",
    // position: "Receptionist",
    photo: "assets/img/Second-Floor.jpg",
    text:
      "•	Typical use: F&B dine-in, kiosks, quick-service restaurants, experiential outlets. Food-court kiosks often have smaller footprints.• Pricing specifics: Developer price-list separates Food-Court Dine-in and kiosks (the brochure shows special rates for food court area). Check the published price slabs. (Scribd)• Footfall & revenue model: Food court drives dwell time (people stay longer), boosting the whole complex’s footfall. However, F&B has higher operating costs (exhaust, kitchen, power) and often higher CAM/utility needs.• Investment take: If the project secures anchor F&B brands, food court units can give strong rental demand — but only if the developer has a solid tenant-mix plan or MOUs."
  },
  {
    name: "Upper Floors ",
    position: "Graphic Designer",
    photo: "assets/img/Upper-Floors.jpg",
    text:
      "•	Typical use: Offices, studios, large-format showrooms, experiential centers, event spaces.•	Visibility & footfall: Lower than GF/1F; depends on tenant type (appointments, deliveries).•	Investment take: Good for niches (training centres, studios) where street-walk-in isn’t critical."
  }
];

const testimonialsContainer = document.querySelector(".testimonials-container");
const testimonial = document.querySelector(".testimonial");
const userImage = document.querySelector(".user-image");
const username = document.querySelector(".username");
const role = document.querySelector(".role");

let idx = 1;

function updateTestimonial() {
  const { name, photo, text } = testimonials[idx];
  testimonial.innerText = text;
  userImage.src = photo;
  username.innerText = name;
//   role.innerText = position;

  idx++;
  if (idx > testimonials.length - 1) {
    idx = 0;
  }
}

setInterval(updateTestimonial, 10000);
