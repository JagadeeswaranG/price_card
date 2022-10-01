import logo from "./logo.svg";
import "./App.css";
import Card from "./card";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  var priceCard = [
    {
           
      name: "FREE",
      price: "0",
      feature: [
        {
          line: "Single User",
          isthere:true
        },
        {
          line: "5GB Storage",
          isthere:true
        },
        {
          line: "Unlimited Public Projects",
          isthere:true
        },
        {
          line: "Community Access",
          isthere:true
        },
        
        {
          line1: "Unlimited Private Projects",
          isthere:false
        },
        {
          line1: "Dedicated Phone Support",
          isthere:false
        },
        {
          line1: "Free Subdomain",
          isthere:false
        },
        {
          line1: "Monthly Status Reports",
          isthere:false
        }
      ]
    },
    {
      name: "PLUS",
      price: "9",
      feature: [
        {
          line: "5 Users",
          isthere:true
        },
        {
          line: "50GB Storage",
          isthere:true
        },
        {
          line: "Unlimited Public Projects",
          isthere:true
        },
        {
          line: "Community Access",
          isthere:true
        },
        {
          line: "Unlimited Private Projects",
          isthere:true
        },
        {
          line: "Dedicated Phone Support",
          isthere:true
        },
        {
          line: "Free Subdomain",
          isthere:true
        },
        
        {
          line1: "Monthly Status Reports",
          isthere:false
        }
      ]
    },
    {
      name: "PRO",
      price: "49",
      feature: [
        {
          line: "Unlimited Users",
          isthere:true
        },
        {
          line: "150GB Storage",
          isthere:true
        },
        {
          line: "Unlimited Public Projects",
          isthere:true
        },
        {
          line: "Community Access",
          isthere:true
        },
        {
          line: "Unlimited Private Projects",
          isthere:true
        },
        {
          line: "Dedicated Phone Support",
          isthere:true
        },
        {
          line: "Unlimited Free Subdomains",
          isthere:true
        },
        {
          line: "Monthly Status Reports",
          isthere:true
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
