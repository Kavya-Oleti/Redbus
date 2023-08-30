import React from "react";

function Contact() {
  return (
    <div>
      <div>
        <div>
          <h1
            style={{
              position: "absolute",
              marginTop: "200px",
              marginLeft: "550px",
            }}
          >
            Contact Us
          </h1>
        </div>
        <div>
          <img
            src="https://s3.rdbuz.com/Images/webplatform/Common/contact-us-map.png"
            width={1600}
          ></img>
        </div>
      </div>
      <div style={{ backgroundColor: "black", color: "white" }}>
        <div style={{ textAlign: "center" }}>
          <h1>Corporate Head Office-Bangalore</h1>
        </div>
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <div>
            <div>
              <h4>BANGALORE</h4>
            </div>
            <div>
              <p>
                Redbus India Private Limited <br />
                Indiqube Leela Galleria, 5th Floor,
                <br />
                #No 23, Old Airport Road, HAL <br />
                2nd Stage, Kodihalli Village, Varthur Hobli <br />, Ward No: 74,
                Bengaluru, Karnataka - 560008.
              </p>
            </div>
          </div>
          <div>
            <div>
              <h4>BANGALORE</h4>
            </div>
            <div>
              <p>
                Redbus India Private Limited.
                <br />
                3rd Floor, Tower B1, Golden Enclave,
                <br />
                HAL Old Airport Road, Murgesh Pallya, <br />
                Bengaluru, Karnataka - 560017.
              </p>
            </div>
          </div>
          <div>
            <p>
              Ph: +919945600000 <br />
              For any Support or Complaints: Chat with Us <br />
              Support Time : 24*7 For Press enquiries <br />
              : press@redbus.com Only for <br />
              Press/Media enquiries
            </p>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default Contact;
