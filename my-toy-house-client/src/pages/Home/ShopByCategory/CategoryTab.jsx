import { useEffect, useState } from "react";
import { Tab, Tabs, TabList } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import CategoryCard from "../CategoryCard/CategoryCard";

export default () => {
  const [services, setServices] = useState([]);
  const [filterCategory, setFilterCategory] = useState("Avengers");

  useEffect(() => {
    var url = new URL("https://my-toy-house-server.vercel.app/toys");
    url.searchParams.append("filterCategory", filterCategory);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      });
  }, [filterCategory]);

  return (
    <div className="p-4 category-container">
      <h2 className="text-5xl text-center mt-6 mb-6">
        Find Toy By <span className="category-title">subCategory</span>
      </h2>
      <Tabs>
        <TabList
          style={{
            textAlign: "center",
            background: "#eaedef",
            marginBottom: "50px",
          }}
        >
          <Tab
            style={{ width: "150px", fontSize: "20px", fontWeight: "bold" }}
            onClick={() => setFilterCategory("Avengers")}
          >
            Avengers
          </Tab>
          <Tab
            style={{ width: "150px", fontSize: "20px", fontWeight: "bold" }}
            onClick={() => setFilterCategory("Star Wars")}
          >
            Star wars
          </Tab>
          <Tab
            style={{ width: "150px", fontSize: "20px", fontWeight: "bold" }}
            onClick={() => setFilterCategory("Marvel")}
          >
            Marvel
          </Tab>
        </TabList>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" style={{ textAlign: "center" }}>
          {services.map((category) => (
            <CategoryCard key={category._id} category={category}></CategoryCard>
          ))}
        </div>
      </Tabs>
    </div>
  );
};
