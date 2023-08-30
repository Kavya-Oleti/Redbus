import React from "react";
import { Container, Row, Col } from "reactstrap";

const COIMBATORE = [
  "Redbus India Private Limited",
  "JK Centre  2nd floor, 5th",
  "Kannapiran Mills Rd",
  "Sowri Palayam, Nearby KIA service center",
  "Coimbatore, Tamil Nadu - 641015.",
];
const AHMEDABAD = [
  "Redbus India Private Limited.",
  "Dynasty, Unit No. 905, 9th Floor,",
  "Beside SBI Bank,",
  "CG Road Branch,",
  "Near Stadium Circle,",
  "CG Road, Navrangpura,",
  "Ahmedabad, Gujarat - 380009.",
];
const INDORE = [
  "Redbus India Private Limited",
  "# 207, 2nd floor, Fortune Ambience",
  "Near Hotel Surya, Dhakkan wala kuan, South Tukoganj",
  "Indore 452001 - MP",
];
const HYDERABAD = [
  "Redbus India Private Limited",
  "# 201, 2nd floor",
  "Elite Padmavathi Corporate",
  "1-98/9/31, Plot No: 31",
  "Jai Hind Enclave, Madhapur",
  "Hyderabad - 500081. Telangana, India",
];
const KOLKATA = [
  "Redbus India Private Limited",
  "Tower -1, Bengal Eco Intelligent Park",
  "Block–EM3, 14th Floor, Unit-16",
  "Salt Lake, Sector-5, Kolkata – 700091",
  "West Bengal, India",
  "Ph: +919945600000",
  "Call Centre Time : 9:00 AM - 6:00 PM",
];
const CHENNAI = [
  "Redbus India Private Limited",
  "RR Towers III, 1st Floor",
  "TVK Industrial Estate",
  "Guindy, Chennai",
  "Tamil Nadu - 600032",
];
const JAIPUR = [
  "Redbus India Private Limited",
  "Office No.723, 7th Floor",
  "Mall of Jaipur",
  "Gandhi path W Vaishali Nagar",
  "Jaipur, Rajasthan - 302021",
];
const MUMBAI = [
  "Redbus India Private Limited",
  "Office No. 404, Kalpataru Plaza",
  "Chincholi Bunder Signal S V Road",
  "Malad, West Mumbai",
  "Maharashtra – 400064",
];
const PUNE = [
  "Redbus India Private Limited",
  "F-7010/7020, Solitaire Business Hub",
  "Sr. No.207 Opp. NECO Garden Society",
  "Viman Nagar, Pune",
  "Maharashtra – 411014",
];
const NEWDELHI = [
  "Redbus India Private Limited",
  "Flat No. 909, 9TH Floor, Connaught Place",
  "KG Marg, Naurang House 21",
  "Kasturba Gandhi, Marg",
  "New Delhi -110001",
];

function OtherOffices() {
  return (
    <Container>
      <h1 style={{ textAlign: "center" }}>Other Offices</h1>
      <Row>
        <Col>
          <ol style={{ listStyle: "none" }}>
            <h4 style={{ color: "#D84F57" }}>COIMBATORE</h4>
            {COIMBATORE.map((item) => (
              <li> {item} </li>
            ))}
          </ol>
        </Col>
        <Col>
          <ol style={{ listStyle: "none" }}>
            <h4 style={{ color: "#D84F57" }}>AHMEDABAD </h4>
            {AHMEDABAD.map((item) => (
              <li> {item}</li>
            ))}
          </ol>
        </Col>
        <Col>
          <ol style={{ listStyle: "none" }}>
            <h4 style={{ color: "#D84F57" }}> INDORE</h4>
            {INDORE.map((item) => (
              <li> {item}</li>
            ))}
          </ol>
        </Col>
      </Row>
      <Row>
        <Col>
          <ol style={{ listStyle: "none" }}>
            <h4 style={{ color: "#D84F57" }}> HYDERABAD</h4>
            {HYDERABAD.map((item) => (
              <li> {item}</li>
            ))}
          </ol>
        </Col>
        <Col>
          <ol style={{ listStyle: "none" }}>
            <h4 style={{ color: "#D84F57" }}> KOLKATA</h4>
            {KOLKATA.map((item) => (
              <li> {item}</li>
            ))}
          </ol>
        </Col>
        <Col>
          <ol style={{ listStyle: "none" }}>
            <h4 style={{ color: "#D84F57" }}> CHENNAI</h4>
            {CHENNAI.map((item) => (
              <li> {item}</li>
            ))}
          </ol>
        </Col>
      </Row>
      <Row>
        <Col>
          <ol style={{ listStyle: "none" }}>
            <h4 style={{ color: "#D84F57" }}> JAIPUR</h4>
            {JAIPUR.map((item) => (
              <li> {item}</li>
            ))}
          </ol>
        </Col>
        <Col>
          <ol style={{ listStyle: "none" }}>
            <h4 style={{ color: "#D84F57" }}> MUMBAI</h4>
            {MUMBAI.map((item) => (
              <li> {item}</li>
            ))}
          </ol>
        </Col>
        <Col>
          <ol style={{ listStyle: "none" }}>
            <h4 style={{ color: "#D84F57" }}> PUNE</h4>
            {PUNE.map((item) => (
              <li> {item}</li>
            ))}
          </ol>
        </Col>
      </Row>
      <Row>
        <Col>
          <ol style={{ listStyle: "none" }}>
            <h4 style={{ color: "#D84F57" }}> NEWDELHI</h4>
            {NEWDELHI.map((item) => (
              <li> {item}</li>
            ))}
          </ol>
        </Col>
      </Row>
      <hr></hr>
      <p>
        Redbus India Private Limited is committed to resolving customer concerns
        and grievances. We request our customers to contact our customer care
        representatives on the numbers provided on our website or reach us via
        our Self-Help page for quick resolution of any concerns or grievances.
      </p>
      <p>
        In the event your concerns have not been addressed, you may contact our
        grievance officer, who shall endeavour to resolve your concerns within
        30 days from the date of escalation. To reach the grievance officer
        please use the following link and submit the details:
      </p>
      <p>
        <a href="">Escalate to Grievance Officer</a>
      </p>
      <p>
        For any escalations to the Grievance Officer, please contact Mr. Sathish
        Krishnan at email ID: grievanceofficer@redbus.in or through the link
        given above where you will be required to login and select the previous
        complaint. You are advised to escalate to the grievance officer only
        when you have already raised your complaint which has not been resolved
        to your satisfaction, or your concern has not been resolved within 30
        days from the date of ticket generation.
      </p>
    </Container>
  );
}

export default OtherOffices;
