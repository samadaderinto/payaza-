import { Card } from "../Card/card";
import "./dashboard.scss"

export const Dashboard = () => {
  return (
    <div className="dashboard">
     
     <Card title={"Book an Appointment"} header={"Book an appoitment with an health practitioner"} url={""} bg={"#ECF1FF"} color={"#111"}/>
     <Card title={"Service List"} header={"View all the service we currently offer"} url={""} bg={"#FAEAE2"} color={"#295FFF"}/>
     <Card color="#989999" title={"Refer and Earn"} header={"Get #3000 for reffering businesses and #1000 fro individals"} url={""} bg={"#295FFF"}/>
     <Card color="#989999" title={"Help"} header={"Contact us for more info or issue"} url={""} bg={"#263238"}/>
     <Card title={"Beneficiaries"} header={"You can add your loved ones as beneficiaries if you want to provide care for them"} url={""} bg={"#ECF1FF"} color="#111"/>
    </div>
  );
};
