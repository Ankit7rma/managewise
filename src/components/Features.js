import React from "react";
import { IconBase } from "react-icons";
const imagePath = "/images/c.png";
const imagePath2 = "/images/e.png";
const imagePath3 = "/images/d.png";
const imagePath4 = "/images/f.png";
const imagePath5 = "/images/b.png";

export default function Features() {
  return (
    <div className="h-fit">
      <div>
        <h1>🔥 PREMIER FEATURES</h1>
        <div>
          Discover our product's<span>Capabilities</span>
        </div>
        <h1>
          Don't settle for mediocrity - embrace the future of management with
          Manage Wise.
        </h1>
      </div>
      <div>
        <div>⭐️</div>
        <div>
          Boost productivity and streamline workflow with us. Enjoy our
          intuitive interface and robust features.
        </div>
      </div>
      <div>
        <img src={process.env.PUBLIC_URL + imagePath} alt="c-img" />
        <h1>Smart Task Management</h1>
        <p>Say goodbye to chaos with our smart task management system</p>
      </div>
      <div>
        <img src={process.env.PUBLIC_URL + imagePath2} alt="e-img" />
        <h1>Flexible Scheduling</h1>
        <p>Stay productive with our flexible scheduling system</p>
      </div>
      <div>
        <img src={process.env.PUBLIC_URL + imagePath3} alt="d-img" />
        <h1>Easy Communication</h1>
        <p>Collaborate seamlessly with your team in real-time</p>
      </div>
      <div>
        <img src={process.env.PUBLIC_URL + imagePath4} alt="f-img" />
        <h1>Analytics</h1>
        <p>Gain valuable insights with our advanced analytics feature</p>
      </div>
      <div>
        <div>
          <h1>🤩 AND MORE...</h1>
          <h1>
            Explore an array of features that elevate your Productivity to new
            heights
          </h1>
          <h1>
            Discover the tools that will revolutionize the way you manage and
            optimize your operations
          </h1>
        </div>
        <div>
          <div>
            <IconBase />
            <h1>Cross-Platform Compatibility</h1>
            <p>
              Enjoy the flexibility of cross-platform compatibility. Our product
              works seamlessly across desktop, web, and mobile devices, allowing
              you to work from your preferred device.
            </p>
          </div>
          <div>
            <IconBase />
            <h1>Stay Informed with Essential Notifications</h1>
            <p>
              Automate support from first customer contact to closing the
              ticket. Drastically improve time to resolution.Automate support
              from first customer contact to closing the ticket.
            </p>
          </div>
          <div>
            <IconBase />
            <h1>Secure Data Encryption at all times</h1>
            <p>
              Trust in our robust data encryption to keep your sensitive
              information safe and secure. Rest easy knowing your data is
              protected at all times.
            </p>
          </div>
        </div>
        <div>scroll</div>
        <div>
          <h1>🛠 INTEGRATIONS</h1>
          <div>
            <h1>Enable integration with other popular tools and platforms</h1>
            <p>
              Seamlessly connect and amplify your workflow by enabling
              integration with a diverse array of widely-used tools and
              platforms.
            </p>
          </div>
          <img src={process.env.PUBLIC_URL + imagePath5} alt="b-img" />
        </div>
      </div>
    </div>
  );
}
