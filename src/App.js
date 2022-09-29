import logo from "./logo.svg";
import "./App.css";
import Card from "./card";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

function App() {
  var priceCard = [
    {
           
      name: "FREE",
      price: "0",
      feature: [
        {
          line: "Single User",
        },
        {
          line: "5GB Storage",
        },
        {
          line: "Unlimited Public Projects",
        },
        {
          line: "Community Access",
        },

        {
          line1: "Unlimited Private Projects",
        },
        {
          line1: "Dedicated Phone Support",
        },
        {
          line1: "Free Subdomain",
        },
        {
          line1: "Monthly Status Reports",
        },
      ],
    },
    {
      name: "PLUS",
      price: "9",
      feature: [
        {
          line2: "5 Users",
        },
        {
          line: "50GB Storage",
        },
        {
          line: "Unlimited Public Projects",
        },
        {
          line: "Community Access",
        },
        {
          line: "Unlimited Private Projects",
        },
        {
          line: "Dedicated Phone Support",
        },
        {
          line: "Free Subdomain",
        },

        {
          line1: "Monthly Status Reports",
        },
      ],
    },
    {
      name: "PRO",
      price: "49",
      feature: [
        {
          line2: "Unlimited Users",
        },
        {
          line: "150GB Storage",
        },
        {
          line: "Unlimited Public Projects",
        },
        {
          line: "Community Access",
        },
        {
          line: "Unlimited Private Projects",
        },
        {
          line: "Dedicated Phone Support",
        },
        {
          line: "Unlimited Free Subdomains",
        },
        {
          line: "Monthly Status Reports",
        },
      ],
    },
  ];
  return (
    <section className="pricing py-5">
      <div className="container">
        <div className="row">
          {priceCard.map((card) => {
            return <Card card={card}></Card>;
          })}
        </div>
      </div>
    </section>
  );
}

export default App;
