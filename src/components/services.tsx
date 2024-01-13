import { Card } from "./Card/card";

export const Services = () => {
  return (
    <div
      style={{
        padding: "30px 40px 0",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Card
        title={"Primary Care Services"}
   
        url={""}
        bg={"#ECF1FF"}
        color={"#111"}
        width="95%"
      />
      <Card
        title={"Diagnostic Services"}
        url={""}
        bg={"#FAEAE2"}
        color={"#295FFF"}
        width="95%"
      />
      <Card
        title={"Wellness And Preventive Care"}
        url={""}
        bg={"#263238"}
        width="95%" color={""}      />
      <Card
        title={"Chronic Care Services"}
       
        url={""}
        bg={"#ECF1FF"}
        color="#111"
        width="95%"
      />
    </div>
  );
};
